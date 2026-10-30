import { BrowserSession } from './browser.mjs';
import fs from 'fs';
import path from 'path';

// Load base64 assets
const brainColorB64 = fs.readFileSync('assets/logo-mark.png').toString('base64');
const brainBwB64 = fs.readFileSync('assets/logo-mark-bw.png').toString('base64');
const cormorantSemiBoldB64 = fs.readFileSync('assets/fonts/CormorantGaramond-SemiBold.ttf').toString('base64');
const cormorantMediumB64 = fs.readFileSync('assets/fonts/CormorantGaramond-Medium.ttf').toString('base64');
const latoRegB64 = fs.readFileSync('assets/fonts/Lato-Regular.ttf').toString('base64');
const latoBoldB64 = fs.readFileSync('assets/fonts/Lato-Bold.ttf').toString('base64');

// CSS font-face declarations with embedded base64 fonts
const fontFacesCss = `
  @font-face {
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 500;
    src: url('data:font/truetype;charset=utf-8;base64,${cormorantMediumB64}') format('truetype');
  }
  @font-face {
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 600;
    src: url('data:font/truetype;charset=utf-8;base64,${cormorantSemiBoldB64}') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('data:font/truetype;charset=utf-8;base64,${latoRegB64}') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url('data:font/truetype;charset=utf-8;base64,${latoBoldB64}') format('truetype');
  }
`;

function buildSvgTemplate({ bg = 'transparent', isDark = false, isBw = false, width = 1100, height = 360 }) {
  const psychColor = isDark ? '#F8FAFC' : (isBw ? '#000000' : '#0A1128');
  const studyColor = isDark ? '#A78BFA' : (isBw ? '#334155' : '#5B21B6');
  const dividerColor = isDark ? '#7C3AED' : (isBw ? '#94A3B8' : '#C4B5FD');
  const tagColor = isDark ? '#94A3B8' : (isBw ? '#475569' : '#5B6B82');
  const slashColor = isDark ? '#64748B' : (isBw ? '#94A3B8' : '#A4B3C6');
  const markB64 = isBw ? brainBwB64 : brainColorB64;

  const bgRect = bg !== 'transparent' ? `<rect width="${width}" height="${height}" fill="${bg}"/>` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      ${fontFacesCss}
      .brand-psych {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 118px;
        font-weight: 600;
        fill: ${psychColor};
        letter-spacing: -1.5px;
      }
      .brand-study {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 118px;
        font-weight: 600;
        fill: ${studyColor};
        letter-spacing: -1.5px;
      }
      .brand-tag {
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 400;
        fill: ${tagColor};
        letter-spacing: 5.6px;
        text-anchor: middle;
      }
      .tag-slash {
        fill: ${slashColor};
        font-weight: 300;
      }
    </style>
  </defs>
  ${bgRect}
  <g transform="translate(60, 48)">
    <!-- Original Brain Symbol Preserved -->
    <image href="data:image/png;base64,${markB64}" x="0" y="24" width="206" height="211" />
    
    <!-- Lavender Vertical Divider -->
    <line x1="248" y1="52" x2="248" y2="204" stroke="${dividerColor}" stroke-width="2" stroke-linecap="round" />

    <!-- Wordmark Block -->
    <g transform="translate(288, 0)">
      <text x="0" y="152">
        <tspan class="brand-psych">Psych</tspan><tspan dx="-2.5" class="brand-study">Study</tspan>
      </text>
      <!-- Centered Tagline -->
      <text x="290" y="206" class="brand-tag">LEARN <tspan class="tag-slash">/</tspan> UNDERSTAND <tspan class="tag-slash">/</tspan> GROW</text>
    </g>
  </g>
</svg>`;
}

async function renderHtmlToPng(html, outPath, width, height, isTransparent = false) {
  const browser = new BrowserSession();
  await browser.start('about:blank');

  if (isTransparent) {
    await browser.sendToPage('Emulation.setDefaultBackgroundColorOverride', {
      color: { r: 0, g: 0, b: 0, a: 0 }
    });
  }

  // Set 2x deviceScaleFactor for high-resolution retina rendering
  await browser.sendToPage('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 2,
    mobile: false
  });

  await browser.evaluate(`document.write(\`${html.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`); document.close();`);
  await new Promise(r => setTimeout(r, 800));
  await browser.screenshot(path.resolve(outPath));
  await browser.close();
  console.log(`Saved ${outPath} (${width*2}x${height*2} px)`);
}

function buildHtmlWrapper({ bg = '#ffffff', isDark = false, isBw = false, width = 1100, height = 360 }) {
  const psychColor = isDark ? '#F8FAFC' : (isBw ? '#000000' : '#0A1128');
  const studyColor = isDark ? '#A78BFA' : (isBw ? '#334155' : '#5B21B6');
  const dividerColor = isDark ? '#7C3AED' : (isBw ? '#94A3B8' : '#C4B5FD');
  const tagColor = isDark ? '#94A3B8' : (isBw ? '#475569' : '#5B6B82');
  const slashColor = isDark ? '#64748B' : (isBw ? '#94A3B8' : '#A4B3C6');
  const markB64 = isBw ? brainBwB64 : brainColorB64;
  const shadow = isDark ? 'drop-shadow(0 4px 16px rgba(124, 58, 237, 0.28))' : 'drop-shadow(0 4px 14px rgba(99, 102, 241, 0.16))';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    ${fontFacesCss}
    * { margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing: antialiased; }
    body {
      background: ${bg};
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-logo-lockup {
      display: inline-flex;
      align-items: center;
      gap: 38px;
    }
    .symbol-img {
      width: 178px;
      height: auto;
      display: block;
      filter: ${isBw ? 'none' : shadow};
    }
    .vertical-divider {
      width: 2px;
      height: 136px;
      background: ${dividerColor};
      border-radius: 2px;
      opacity: 0.92;
    }
    .typography-block {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .wordmark-row {
      display: inline-flex;
      align-items: baseline;
      line-height: 1;
    }
    .wordmark-psych {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 124px;
      font-weight: 600;
      color: ${psychColor};
      letter-spacing: -0.015em;
    }
    .wordmark-study {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 124px;
      font-weight: 600;
      color: ${studyColor};
      letter-spacing: -0.015em;
      margin-left: -2.5px;
    }
    .tagline-row {
      font-family: 'Lato', sans-serif;
      font-size: 19.5px;
      font-weight: 400;
      color: ${tagColor};
      letter-spacing: 0.28em;
      text-transform: uppercase;
      margin-top: 16px;
      padding-left: 0.28em;
      white-space: nowrap;
    }
    .tag-slash {
      color: ${slashColor};
      margin: 0 4px;
      font-weight: 300;
    }
  </style>
</head>
<body>
  <div class="brand-logo-lockup">
    <img src="data:image/png;base64,${markB64}" class="symbol-img" alt="Brain Symbol" />
    <div class="vertical-divider"></div>
    <div class="typography-block">
      <div class="wordmark-row">
        <span class="wordmark-psych">Psych</span><span class="wordmark-study">Study</span>
      </div>
      <div class="tagline-row">LEARN <span class="tag-slash">/</span> UNDERSTAND <span class="tag-slash">/</span> GROW</div>
    </div>
  </div>
</body>
</html>`;
}

async function buildAllAssets() {
  console.log('Generating SVG Master Files...');

  // 1. Primary SVG (White background)
  const svgPrimary = buildSvgTemplate({ bg: '#FFFFFF' });
  fs.writeFileSync('assets/logo-primary.svg', svgPrimary);

  // 2. Transparent SVG
  const svgTransparent = buildSvgTemplate({ bg: 'transparent' });
  fs.writeFileSync('assets/logo-transparent.svg', svgTransparent);

  // 3. Dark SVG
  const svgDark = buildSvgTemplate({ bg: 'transparent', isDark: true });
  fs.writeFileSync('assets/logo-dark.svg', svgDark);

  // 4. Monochrome B&W SVG
  const svgMonochrome = buildSvgTemplate({ bg: 'transparent', isBw: true });
  fs.writeFileSync('assets/logo-monochrome.svg', svgMonochrome);

  // 5. Standalone Icon SVG
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <image href="data:image/png;base64,${brainColorB64}" x="25" y="20" width="450" height="460" />
</svg>`;
  fs.writeFileSync('assets/logo-icon.svg', svgIcon);

  // 6. Standalone Icon B&W SVG
  const svgIconBw = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <image href="data:image/png;base64,${brainBwB64}" x="25" y="20" width="450" height="460" />
</svg>`;
  fs.writeFileSync('assets/logo-icon-bw.svg', svgIconBw);

  console.log('SVGs generated. Now rendering Ultra-High-Resolution PNGs via Chrome CDP...');

  // 1. Primary horizontal logo (White background, 2200 x 720 @ 2x)
  const htmlPrimary = buildHtmlWrapper({ bg: '#FFFFFF' });
  await renderHtmlToPng(htmlPrimary, 'assets/logo-primary.png', 1100, 360, false);

  // 2. Transparent background logo (1100x360 @ 2x = 2200x720)
  const htmlTransparent = buildHtmlWrapper({ bg: 'transparent' });
  await renderHtmlToPng(htmlTransparent, 'assets/logo-transparent.png', 1100, 360, true);

  // 3. Dark mode logo (1100x360 @ 2x)
  const htmlDark = buildHtmlWrapper({ bg: 'transparent', isDark: true });
  await renderHtmlToPng(htmlDark, 'assets/logo-dark.png', 1100, 360, true);

  // 4. Monochrome B&W logo (1100x360 @ 2x)
  const htmlBw = buildHtmlWrapper({ bg: 'transparent', isBw: true });
  await renderHtmlToPng(htmlBw, 'assets/logo-monochrome.png', 1100, 360, true);

  // 5. Standalone Icon PNG (500x500 @ 2x = 1000x1000)
  const htmlIcon = `<!DOCTYPE html>
<html>
<head><style>* { margin:0; padding:0; } body { background:transparent; width:500px; height:500px; display:flex; align-items:center; justify-content:center; }</style></head>
<body><img src="data:image/png;base64,${brainColorB64}" style="width:450px; height:auto; filter:drop-shadow(0 8px 24px rgba(99, 102, 241, 0.22));" /></body>
</html>`;
  await renderHtmlToPng(htmlIcon, 'assets/logo-icon.png', 500, 500, true);

  // 6. Standalone Icon B&W PNG
  const htmlIconBw = `<!DOCTYPE html>
<html>
<head><style>* { margin:0; padding:0; } body { background:transparent; width:500px; height:500px; display:flex; align-items:center; justify-content:center; }</style></head>
<body><img src="data:image/png;base64,${brainBwB64}" style="width:450px; height:auto;" /></body>
</html>`;
  await renderHtmlToPng(htmlIconBw, 'assets/logo-icon-bw.png', 500, 500, true);

  // Sync to canonical project logo paths
  fs.copyFileSync('assets/logo-primary.png', 'PsychStudy Brain Learning Logo.png');
  fs.copyFileSync('assets/logo-primary.png', 'assets/logo.png');
  fs.copyFileSync('assets/logo-transparent.png', 'assets/logo-light.png');
  console.log('Synchronized PsychStudy Brain Learning Logo.png, assets/logo.png, and assets/logo-light.png');
}

buildAllAssets().catch(console.error);
