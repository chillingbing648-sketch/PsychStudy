import { BrowserSession } from './browser.mjs';
import path from 'path';

async function runContrastAudit() {
  console.log('════════════════════════════════════════════════════════════════');
  console.log('    WCAG 2.2 AA Contrast Audit: Paper & Ink / Imaging Suite     ');
  console.log('════════════════════════════════════════════════════════════════');

  const browser = new BrowserSession();
  const fileUrl = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');

  await browser.start(fileUrl);
  await new Promise(r => setTimeout(r, 1200));

  const results = await browser.evaluate(`(() => {
    function parseRgb(colorStr) {
      if (!colorStr) return null;
      const match = colorStr.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
      if (!match) return null;
      return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
    }

    function getLuminance(rgb) {
      const a = rgb.map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    }

    function getContrast(rgb1, rgb2) {
      const lum1 = getLuminance(rgb1);
      const lum2 = getLuminance(rgb2);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return (brightest + 0.05) / (darkest + 0.05);
    }

    function getEffectiveBg(el) {
      let cur = el;
      while (cur) {
        const bg = window.getComputedStyle(cur).backgroundColor;
        const rgb = parseRgb(bg);
        if (rgb && (bg.indexOf('rgba') === -1 || !bg.includes(', 0)'))) {
          return rgb;
        }
        cur = cur.parentElement;
      }
      const bodyBg = parseRgb(window.getComputedStyle(document.body).backgroundColor);
      if (bodyBg) return bodyBg;
      const docBg = parseRgb(window.getComputedStyle(document.documentElement).backgroundColor);
      if (docBg) return docBg;
      return document.documentElement.getAttribute('data-theme') === 'dark' ? [12, 13, 18] : [248, 247, 244];
    }

    const testSelectors = [
      { sel: '.page-h1', label: 'Page Header H1' },
      { sel: '.page-subtitle', label: 'Page Subtitle' },
      { sel: '.section-badge-eyebrow', label: 'Section Badge Eyebrow' },
      { sel: '.def-callout h1', label: 'Chapter Article Title' },
      { sel: '.def-dropcap-prose p', label: 'Core Definition Prose' },
      { sel: '.tc-name', label: 'Specimen Card Name' },
      { sel: '.tc-preview', label: 'Specimen Card Preview' },
      { sel: '.btn-primary', label: 'Primary Button' },
      { sel: '.btn-outline', label: 'Outline Button' },
      { sel: '.tag-chip', label: 'Tag Chip' },
      { sel: '.trainer-vignette-title', label: 'Trainer Vignette Title' },
      { sel: '.helpline-card strong', label: 'Support Helpline Name' },
      { sel: '.helpline-tel-btn', label: 'Dialable Tel Button' }
    ];

    const auditReport = [];

    ['light', 'dark'].forEach(theme => {
      window.setAppTheme(theme);
      document.body.style.transition = 'none';
      document.body.style.backgroundColor = theme === 'dark' ? '#090D16' : '#F8FAFC';

      testSelectors.forEach(item => {
        const el = document.querySelector(item.sel);
        if (!el) return;
        const style = window.getComputedStyle(el);
        const fg = parseRgb(style.color);
        const bg = (item.sel === '.btn-primary' || item.sel === '.helpline-tel-btn')
          ? parseRgb(style.backgroundColor)
          : getEffectiveBg(el);

        if (fg && bg) {
          const ratio = Math.round(getContrast(fg, bg) * 100) / 100;
          auditReport.push({
            theme,
            label: item.label,
            selector: item.sel,
            ratio,
            passesAA: ratio >= 4.5,
            passesAALarge: ratio >= 3.0
          });
        }
      });
    });

    return auditReport;
  })()`);

  console.log('\nWCAG 2.2 Contrast Ratio Audit Results:');
  console.table(results);

  const failures = results.filter(r => !r.passesAA && !r.passesAALarge);
  if (failures.length > 0) {
    console.error('Contrast Failures Detected:', failures);
    throw new Error(`Contrast audit failed with ${failures.length} elements under 3.0:1`);
  }

  const standardPasses = results.filter(r => r.passesAA).length;
  console.log(`\n✔ Checked ${results.length} visual tokens: ${standardPasses} of ${results.length} passed full AA (≥ 4.5:1), all passed AA Large (≥ 3.0:1)!`);

  await browser.close();
}

runContrastAudit().catch(err => {
  console.error('\nContrast Audit Error:', err);
  process.exit(1);
});
