import { BrowserSession } from './browser.mjs';
import fs from 'fs';
import path from 'path';

async function generateExactBwMark() {
  const browser = new BrowserSession();
  await browser.start('about:blank');

  await browser.sendToPage('Emulation.setDefaultBackgroundColorOverride', {
    color: { r: 0, g: 0, b: 0, a: 0 }
  });

  const brainB64 = fs.readFileSync('assets/logo-mark.png').toString('base64');
  
  // Create an HTML page with exact canvas dimensions
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background: transparent; overflow: hidden; }
        canvas { display: block; }
      </style>
    </head>
    <body>
      <canvas id="c"></canvas>
      <script>
        const img = new Image();
        img.src = 'data:image/png;base64,${brainB64}';
        window.rendered = new Promise(resolve => {
          img.onload = () => {
            const cvs = document.getElementById('c');
            cvs.width = img.width;
            cvs.height = img.height;
            const ctx = cvs.getContext('2d');
            ctx.filter = 'grayscale(100%) contrast(1.18) brightness(0.92)';
            ctx.drawImage(img, 0, 0);
            resolve({ w: img.width, h: img.height, dataUrl: cvs.toDataURL('image/png') });
          };
        });
      </script>
    </body>
    </html>
  `;

  await browser.evaluate(`document.write(\`${html.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`); document.close();`);
  await new Promise(r => setTimeout(r, 600));
  const res = await browser.evaluate(`window.rendered`);
  
  const b64Data = res.dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('assets/logo-mark-bw.png', Buffer.from(b64Data, 'base64'));
  console.log('Saved exact assets/logo-mark-bw.png:', res.w, 'x', res.h);
  await browser.close();
}

generateExactBwMark().catch(console.error);
