import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

export class BrowserSession {
  constructor(options = {}) {
    this.chromePath = options.chromePath || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    this.proc = null;
    this.inPipe = null;
    this.outPipe = null;
    this.buffer = '';
    this.idCounter = 1;
    this.pending = new Map();
    this.handlers = new Map();
    this.consoleLogs = [];
    this.errors = [];
    this.sessionId = null;
    this.targetId = null;
  }

  async start(url) {
    this.proc = spawn(this.chromePath, [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--remote-debugging-pipe',
      '--hide-scrollbars',
      'about:blank'
    ], {
      stdio: ['pipe', 'pipe', 'pipe', 'pipe', 'pipe']
    });

    this.inPipe = this.proc.stdio[3];
    this.outPipe = this.proc.stdio[4];

    this.outPipe.on('data', chunk => {
      this.buffer += chunk.toString();
      let nullIdx;
      while ((nullIdx = this.buffer.indexOf('\0')) !== -1) {
        const raw = this.buffer.slice(0, nullIdx);
        this.buffer = this.buffer.slice(nullIdx + 1);
        if (!raw.trim()) continue;
        try {
          const msg = JSON.parse(raw);
          this._handleMessage(msg);
        } catch (e) {
          console.error('Error parsing CDP message:', e, raw);
        }
      }
    });

    this.proc.on('error', err => console.error('Chrome process error:', err));

    // Create target and attach
    const { targetId } = await this.send('Target.createTarget', { url: url || 'about:blank' });
    this.targetId = targetId;

    const { sessionId } = await this.send('Target.attachToTarget', { targetId, flatten: true });
    this.sessionId = sessionId;

    await this.sendToPage('Page.enable');
    await this.sendToPage('Runtime.enable');
    await this.sendToPage('DOM.enable');

    if (url && url !== 'about:blank') {
      await this.sendToPage('Page.navigate', { url });
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  _handleMessage(msg) {
    if (msg.sessionId && msg.sessionId === this.sessionId) {
      if (msg.method === 'Runtime.consoleAPICalled') {
        const args = msg.params.args.map(a => a.value !== undefined ? a.value : a.description);
        this.consoleLogs.push({ type: msg.params.type, args });
      } else if (msg.method === 'Runtime.exceptionThrown') {
        this.errors.push(msg.params.exceptionDetails);
      }
    }

    if (msg.id && this.pending.has(msg.id)) {
      const { resolve, reject } = this.pending.get(msg.id);
      this.pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.idCounter++;
      this.pending.set(id, { resolve, reject });
      const payload = JSON.stringify({ id, method, params }) + '\0';
      this.inPipe.write(payload);
    });
  }

  sendToPage(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.idCounter++;
      this.pending.set(id, { resolve, reject });
      const payload = JSON.stringify({ id, sessionId: this.sessionId, method, params }) + '\0';
      this.inPipe.write(payload);
    });
  }

  async evaluate(expression) {
    const res = await this.sendToPage('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      this.errors.push(res.exceptionDetails);
      throw new Error(`Eval error: ${res.exceptionDetails.text}`);
    }
    return res.result?.value;
  }

  async setViewport(width, height) {
    await this.sendToPage('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
  }

  async screenshot(filePath) {
    const res = await this.sendToPage('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(res.data, 'base64');
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, buf);
    return filePath;
  }

  async close() {
    try {
      if (this.sessionId) {
        await this.send('Target.detachFromTarget', { sessionId: this.sessionId }).catch(() => {});
      }
      if (this.proc) {
        this.proc.kill();
      }
    } catch (e) {}
  }
}
