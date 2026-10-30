import { BrowserSession } from './browser.mjs';
import fs from 'fs';
import path from 'path';

async function generateBwMark() {
  const browser = new BrowserSession();
  await browser.start('about:blank');

  await browser.sendToPage('Emulation.setDefaultBackgroundColorOverride', {
    color: { r: 0, g: 0, b: 0, a: 0 }
  });

  const brainB64 = fs.readFileSync('assets/logo-mark.png').toString('base64');
  await browser.evaluate(`
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = 'transparent';
    document.body.innerHTML = '<div style="width:500px; height:500px; display:flex; align-items:center; justify-content:center;"><img src="data:image/png;base64,${brainB64}" style="width:460px; height:auto; filter: grayscale(100%) contrast(1.18) brightness(0.92);" /></div>';
  `);

  await browser.setViewport(500, 500);
  await new Promise(r => setTimeout(r, 500));
  await browser.screenshot(path.resolve('assets/logo-mark-bw.png'));
  console.log('Saved assets/logo-mark-bw.png');
  await browser.close();
}

generateBwMark().catch(console.error);
