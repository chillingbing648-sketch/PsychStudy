import fs from 'fs';

console.log('Starting ANORENT transformation...');

// ══════════════════════════════════════════════════════════════════
// 1. UPDATE INDEX.HTML (ANORENT HERO COMPOSITION)
// ══════════════════════════════════════════════════════════════════
let html = fs.readFileSync('index.html', 'utf-8');

const oldHeroRegex = /<!-- ░░░ 1\. THE HERO SECTION[\s\S]*?<\/header>/;

const newHeroHtml = `<!-- ░░░ 1. THE ANORENT CINEMATIC HERO SECTION ░░░ -->
  <header class="anorent-hero" id="heroSection">
    <div class="hero-glow-layer"></div>
    <div class="hero-grid-lines"></div>

    <!-- Technical Crosshairs -->
    <div class="grid-cross" style="top: 20px; left: 24px;">+</div>
    <div class="grid-cross" style="top: 20px; right: 24px;">+</div>
    <div class="grid-cross" style="bottom: 20px; left: 24px;">+</div>
    <div class="grid-cross" style="bottom: 20px; right: 24px;">+</div>
    <div class="grid-cross" style="top: 380px; left: 52%;">+</div>

    <!-- Hero Main Stage (Two Columns) -->
    <div class="hero-main-stage">
      <!-- Left Column: Typographic Masthead -->
      <div class="hero-type-col">
        <div class="hero-eyebrow-row">
          <span class="hero-meta-pulse-dot"></span>
          <span>VISIONARY NEUROSCIENCE. DIGITAL FUTURES.</span>
          <span class="hero-meta-sep">//</span>
          <span class="copy-year">© 2026</span>
          <span class="hero-meta-sep">//</span>
          <span class="badge-dsm" id="dashTimeGreet">SESSION ACTIVE</span>
        </div>

        <div class="monumental-headline" aria-label="Clinical Beyond Reality">
          <div class="headline-line-1"><span class="kinetic-text">CLINICAL</span></div>
          <div class="headline-line-2"><span class="kinetic-text text-lavender">BEYOND</span></div>
          <div class="headline-line-3"><span class="kinetic-text text-chrome">REALITY</span></div>
        </div>

        <p class="hero-editorial-statement" id="dashMsg">
          An authoritative clinical atlas of the mind &mdash; <strong>43 peer-reviewed volumes</strong>, functional neuroanatomy, multi-axial diagnostic engine, and university examination suite aligned with <span class="badge-dsm">DSM-5-TR</span> and <span class="badge-icd">WHO ICD-11</span>.
        </p>

        <!-- Search Bar Capsule -->
        <button class="hero-search-capsule" id="heroSearchBar" onclick="openCmdPalette()" aria-label="Search 43 chapters, 168 clinical terms, DSM/ICD codes, exam papers">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span class="search-input-placeholder">Search 43 chapters, 168 clinical terms, DSM/ICD codes, model answers...</span>
          <kbd class="search-shortcut-badge"><span class="cmd-symbol">⌘</span>K</kbd>
        </button>
      </div>

      <!-- Right Column: Interactive 3D Visual Stage -->
      <div class="hero-3d-stage" id="hero3dStage">
        <canvas id="hero-three-canvas"></canvas>
      </div>
    </div>

    <!-- Bottom Dock Controls (ANORENT Style) -->
    <div class="hero-bottom-dock">
      <!-- Status Card with Resume Connection -->
      <div class="dock-status-card" id="dashHeroResumeCard" onclick="resumeLastTopic()" title="Click to resume your last studied clinical chapter">
        <div class="dock-avatar">1.1</div>
        <div class="dock-text">
          <span class="dock-label">Active Session · Resume</span>
          <span class="dock-val" id="dashHeroResumeTitle">What Are Disorders?</span>
        </div>
        <div class="dock-arrow">→</div>
      </div>

      <!-- Tech Thumbnails (4 Specialized Clinical Engines) -->
      <div class="dock-tech-thumbnails">
        <button class="tech-thumb active" onclick="openExploreItem('brain')" title="Plate I: Functional Neuroanatomy 3D Atlas">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"></circle><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"></path></svg>
        </button>
        <button class="tech-thumb" onclick="openExploreItem('differential')" title="Plate II: Differential Diagnosis Trainer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9"></polygon></svg>
        </button>
        <button class="tech-thumb" onclick="navigate('flashcards')" title="Plate III: Active Recall SM-2 Spaced Retrieval">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12h5l3-9 4 18 3-9h5"></path></svg>
        </button>
        <button class="tech-thumb" onclick="openExploreItem('timeline')" title="Plate IV: Psychiatry Milestones & Historical Timeline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
      </div>

      <!-- Right Action CTA -->
      <button class="dock-cta-btn" onclick="scrollToCurriculumTopology()">
        <span>Explore Curriculum Topology</span>
        <span>↘</span>
      </button>
    </div>
  </header>`;

if (oldHeroRegex.test(html)) {
  html = html.replace(oldHeroRegex, newHeroHtml);
  console.log('Replaced old hero with ANORENT cinematic hero in index.html');
} else {
  console.log('Regex did not match old hero, attempting fallback replacement');
}

fs.writeFileSync('index.html', html, 'utf-8');

// ══════════════════════════════════════════════════════════════════
// 2. UPDATE STYLE.CSS (ANORENT DESIGN SYSTEM & TOKENS)
// ══════════════════════════════════════════════════════════════════
let css = fs.readFileSync('style.css', 'utf-8');

// Add local @font-face for Space Grotesk
const spaceGroteskFontFaces = `
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  src: url('assets/fonts/SpaceGrotesk-500.ttf') format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  src: url('assets/fonts/SpaceGrotesk-600.ttf') format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/SpaceGrotesk-700.ttf') format('truetype');
}
`;

if (!css.includes("font-family: 'Space Grotesk'")) {
  css = spaceGroteskFontFaces + '\n' + css;
  console.log('Added Space Grotesk font faces');
}

// Update font tokens
css = css.replace(/--font-display:\s*'Fraunces'[^;]+;/, "--font-display: 'Space Grotesk', -apple-system, sans-serif;");
css = css.replace(/--font-ui:\s*'Instrument Sans'[^;]+;/, "--font-ui: 'Lato', -apple-system, sans-serif;");

// Update Light Theme tokens (Pearl & Platinum Gallery)
css = css.replace(/--bg:\s*#F8FAFC;/, "--bg: #F7F6FA;");
css = css.replace(/--text:\s*#0F172A;/, "--text: #171329;");
css = css.replace(/--text-2:\s*#334155;/, "--text-2: #47405A;");
css = css.replace(/--text-3:\s*#64748B;/, "--text-3: #666174;");
css = css.replace(/--border:\s*#E2E8F0;/, "--border: #E6E1ED;");
css = css.replace(/--primary:\s*#4338CA;/, "--primary: #7955B7;");

// Update Dark Theme tokens (The ANORENT Obsidian Chamber)
css = css.replace(/--bg:\s*#090D16;/, "--bg: #080810;");
css = css.replace(/--surface:\s*#131A2B;/, "--surface: #11111D;");
css = css.replace(/--surface-card:\s*#131A2B;/, "--surface-card: #11111D;");
css = css.replace(/--border:\s*#1E293B;/, "--border: #292638;");
css = css.replace(/--border-md:\s*#2E3E5C;/, "--border-md: #39354F;");
css = css.replace(/--text:\s*#F8FAFC;/, "--text: #F5F3FA;");
css = css.replace(/--text-2:\s*#CBD5E1;/, "--text-2: #D4CFE2;");
css = css.replace(/--text-3:\s*#94A3B8;/, "--text-3: #AAA7B8;");
css = css.replace(/--primary:\s*#818CF8;/, "--primary: #A78BFA;");

// Append ANORENT CSS Rules
const anorentStyles = `
/* ═══════════════════════════════════════════════════════════════
   MASTER ANORENT CINEMATIC DESIGN SYSTEM
   Futuristic Editorial · Liquid Metal Chrome · Space Grotesk
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. GLOBAL CHROME & METALLIC MATERIAL TOKENS ────────────── */
:root {
  --anorent-violet: #7955B7;
  --anorent-lavender: #BBA5E8;
  --anorent-grid: rgba(121, 85, 183, 0.07);
  --anorent-glow: radial-gradient(ellipse 65% 55% at 60% 45%, rgba(187, 165, 232, 0.35), rgba(121, 85, 183, 0.12) 45%, transparent 75%);
  --chrome-text-grad: linear-gradient(180deg, #171329 0%, #3B3354 22%, #7A6F9E 48%, #1D182E 52%, #685E86 72%, #171329 100%);
  --chrome-bevel-shadow: drop-shadow(0 4px 16px rgba(121, 85, 183, 0.25));
}

[data-theme="dark"] {
  --anorent-violet: #A78BFA;
  --anorent-lavender: #C4A8FF;
  --anorent-grid: rgba(196, 168, 255, 0.08);
  --anorent-glow: radial-gradient(ellipse 65% 55% at 60% 45%, rgba(167, 139, 250, 0.35), rgba(91, 33, 182, 0.18) 45%, transparent 75%);
  --chrome-text-grad: linear-gradient(180deg, #FFFFFF 0%, #F1EEF8 16%, #B5ABCE 38%, #3C3454 48%, #110E1D 51%, #8278A2 62%, #DDD8EC 78%, #FFFFFF 100%);
  --chrome-bevel-shadow: drop-shadow(0 4px 20px rgba(167, 139, 250, 0.45)) drop-shadow(0 12px 30px rgba(0,0,0,0.8));
}

/* ── 2. ANORENT CINEMATIC HERO SECTION ──────────────────────── */
.anorent-hero {
  position: relative;
  width: 100%;
  min-height: 840px;
  padding: 36px 48px 36px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.hero-glow-layer {
  position: absolute;
  top: -15%;
  right: 5%;
  width: 900px;
  height: 800px;
  background: var(--anorent-glow);
  pointer-events: none;
  z-index: 1;
  filter: blur(50px);
}

.hero-grid-lines {
  position: absolute;
  inset: 0;
  background-size: 80px 80px;
  background-image: 
    linear-gradient(to right, var(--anorent-grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--anorent-grid) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse 85% 75% at 55% 45%, black 40%, transparent 85%);
  pointer-events: none;
  z-index: 0;
}

.grid-cross {
  position: absolute;
  font-family: monospace;
  font-size: 14px;
  color: var(--anorent-lavender);
  opacity: 0.35;
  font-weight: 300;
  pointer-events: none;
  z-index: 2;
}

/* Hero Main Stage */
.hero-main-stage {
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(440px, 1fr);
  gap: 40px;
  align-items: center;
  margin: 10px 0 20px;
}

@media (max-width: 1100px) {
  .hero-main-stage {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .hero-3d-stage {
    height: 400px !important;
  }
}

.hero-type-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero-eyebrow-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-3);
  flex-wrap: wrap;
}

.hero-meta-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--anorent-violet);
  box-shadow: 0 0 8px var(--anorent-lavender);
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.4); opacity: 1; }
}

.hero-meta-sep {
  opacity: 0.35;
}

.copy-year {
  color: var(--anorent-lavender);
  opacity: 0.8;
}

/* Monumental Three-Tier Headline */
.monumental-headline {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(4.5rem, 8.5vw, 8rem);
  line-height: 0.90;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  margin: 6px 0 10px;
}

.headline-line-1 {
  color: var(--text);
}
[data-theme="dark"] .headline-line-1 {
  color: #FFFFFF;
  text-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.headline-line-2 .text-lavender {
  color: var(--anorent-lavender);
  text-shadow: 0 0 32px rgba(196, 168, 255, 0.4);
}

/* THE LIQUID CHROME BEVELED TEXT */
.headline-line-3 .text-chrome {
  position: relative;
  display: inline-block;
  background: var(--chrome-text-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: var(--chrome-bevel-shadow);
}

/* Editorial Sub-Statement */
.hero-editorial-statement {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.35rem;
  font-style: italic;
  color: var(--text-2);
  line-height: 1.45;
  max-width: 580px;
  margin-top: 6px;
}
.hero-editorial-statement strong {
  font-style: normal;
  font-weight: 600;
  color: var(--text);
}

/* Search Bar Capsule */
.hero-search-capsule {
  margin-top: 14px;
  max-width: 540px;
  display: flex;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 9999px;
  padding: 10px 18px;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  text-align: left;
}
[data-theme="dark"] .hero-search-capsule {
  background: rgba(17, 17, 29, 0.75);
  backdrop-filter: blur(16px);
  border-color: rgba(196, 168, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
}
.hero-search-capsule:hover {
  border-color: var(--anorent-lavender);
  box-shadow: 0 0 24px rgba(167, 139, 250, 0.25);
  transform: translateY(-1px);
}
.search-icon {
  color: var(--anorent-lavender);
  flex-shrink: 0;
}
.search-input-placeholder {
  font-family: var(--font-ui);
  font-size: 13.5px;
  color: var(--text-3);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-shortcut-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--anorent-lavender);
  background: rgba(167, 139, 250, 0.14);
  border: 1px solid rgba(167, 139, 250, 0.3);
  padding: 2px 8px;
  border-radius: 4px;
  flex-shrink: 0;
}

/* Right 3D Visual Stage */
.hero-3d-stage {
  position: relative;
  width: 100%;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#hero-three-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

/* ── 3. BOTTOM DOCK CONTROLS (ANORENT STYLE) ─────────────────── */
.hero-bottom-dock {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-subtle);
  padding-top: 20px;
  gap: 20px;
  flex-wrap: wrap;
}

.dock-status-card {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-theme="dark"] .dock-status-card {
  background: rgba(17, 17, 29, 0.8);
  backdrop-filter: blur(12px);
}
.dock-status-card:hover {
  border-color: var(--anorent-lavender);
  box-shadow: 0 4px 20px rgba(167, 139, 250, 0.15);
}
.dock-avatar {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--anorent-violet), #4338CA);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 11.5px;
}
.dock-text {
  display: flex;
  flex-direction: column;
}
.dock-label {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
}
.dock-val {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.dock-arrow {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--anorent-lavender);
  font-size: 13px;
  transition: transform 0.2s;
}
.dock-status-card:hover .dock-arrow {
  transform: translateX(3px);
  background: rgba(167, 139, 250, 0.2);
}

/* Center Technical Thumbnails */
.dock-tech-thumbnails {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tech-thumb {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--anorent-lavender);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-theme="dark"] .tech-thumb {
  background: rgba(17, 17, 29, 0.8);
}
.tech-thumb:hover, .tech-thumb.active {
  border-color: var(--anorent-lavender);
  background: rgba(167, 139, 250, 0.15);
  box-shadow: 0 0 16px rgba(167, 139, 250, 0.25);
}
.tech-thumb svg {
  width: 18px;
  height: 18px;
  stroke-width: 1.6;
}

/* Right Action Button */
.dock-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: var(--anorent-violet);
  font-family: var(--font-display);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.dock-cta-btn:hover {
  background: rgba(167, 139, 250, 0.15);
  border-color: var(--anorent-lavender);
  box-shadow: 0 0 20px rgba(167, 139, 250, 0.25);
  transform: translateY(-1px);
}
[data-theme="dark"] .dock-cta-btn {
  color: var(--anorent-lavender);
  border-color: rgba(196, 168, 255, 0.3);
}

/* ── 4. CAPSULE NAVIGATION STYLING (ANORENT AESTHETIC) ────────── */
.navbar {
  background: var(--surface) !important;
  border-bottom: 1px solid var(--border) !important;
  backdrop-filter: blur(16px);
}
[data-theme="dark"] .navbar {
  background: rgba(8, 8, 16, 0.85) !important;
  border-bottom-color: var(--border) !important;
}

.nav-links {
  background: var(--bg-subtle);
  padding: 4px 6px;
  border-radius: 9999px;
  border: 1px solid var(--border);
}
[data-theme="dark"] .nav-links {
  background: rgba(17, 17, 29, 0.7);
  border-color: var(--border);
}

.nav-btn {
  border-radius: 9999px !important;
  font-family: var(--font-display) !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  padding: 6px 14px !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.nav-btn:hover {
  color: var(--anorent-violet) !important;
  background: rgba(167, 139, 250, 0.08) !important;
}

.nav-btn.active {
  background: rgba(167, 139, 250, 0.18) !important;
  color: var(--anorent-violet) !important;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.2) !important;
}
[data-theme="dark"] .nav-btn.active {
  color: #FFFFFF !important;
  border: 1px solid rgba(167, 139, 250, 0.4);
}
`;

css += '\n' + anorentStyles;
fs.writeFileSync('style.css', css, 'utf-8');
console.log('Appended ANORENT design system to style.css');

// ══════════════════════════════════════════════════════════════════
// 3. UPDATE SCRIPT.JS (THREE.JS 3D & GSAP MOTION ENGINEERING)
// ══════════════════════════════════════════════════════════════════
let js = fs.readFileSync('script.js', 'utf-8');

const anorentMotionScript = `
/* ═══════════════════════════════════════════════════════════════
   MASTER ANORENT 3D & MOTION ENGINE (THREE.JS & GSAP)
   ═══════════════════════════════════════════════════════════════ */

let heroThreeScene = null;
let heroThreeRenderer = null;
let heroThreeAnimId = null;

function initAnorent3DEngine() {
  const canvas = document.getElementById('hero-three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const stage = canvas.parentElement;
  if (!stage) return;

  const width = stage.clientWidth || 500;
  const height = stage.clientHeight || 540;

  const scene = new THREE.Scene();
  heroThreeScene = scene;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 8.2);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  heroThreeRenderer = renderer;
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Procedural Equirectangular Chrome Reflection Texture
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 512;
  envCanvas.height = 256;
  const ctx = envCanvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0.0, '#FFFFFF');
  grad.addColorStop(0.2, '#E2DDF5');
  grad.addColorStop(0.45, '#7C6FA0');
  grad.addColorStop(0.5, '#1A1428');
  grad.addColorStop(0.55, '#0B0814');
  grad.addColorStop(0.7, '#A78BFA');
  grad.addColorStop(0.9, '#DDD8EC');
  grad.addColorStop(1.0, '#FFFFFF');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  const envTex = new THREE.CanvasTexture(envCanvas);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = envTex;

  // Lights
  const ambientLight = new THREE.AmbientLight(0x382d54, 1.2);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3.2);
  dirLight.position.set(6, 9, 7);
  scene.add(dirLight);

  const violetPoint = new THREE.PointLight(0xc4a8ff, 6, 20);
  violetPoint.position.set(-4, -2, 4);
  scene.add(violetPoint);

  const rimLight = new THREE.PointLight(0x818cf8, 4, 16);
  rimLight.position.set(4, 5, -3);
  scene.add(rimLight);

  // Master Group
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // 1. Chrome Liquid Torus Knot (Sculpted Neural Form)
  const knotGeo = new THREE.TorusKnotGeometry(1.65, 0.45, 160, 36, 2, 3);
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xf5f2ff,
    metalness: 0.98,
    roughness: 0.08,
    envMap: envTex,
    envMapIntensity: 1.4
  });
  const knotMesh = new THREE.Mesh(knotGeo, chromeMat);
  knotMesh.position.set(-0.2, -0.2, 0);
  masterGroup.add(knotMesh);

  // 2. Stellated Faceted Metallic Star
  const starGroup = new THREE.Group();
  starGroup.position.set(2.4, 2.0, 1.2);
  masterGroup.add(starGroup);

  const starMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.99,
    roughness: 0.05,
    envMap: envTex,
    envMapIntensity: 1.8
  });

  const coreMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), starMat);
  starGroup.add(coreMesh);
  const spikeMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), starMat);
  spikeMesh.rotation.y = Math.PI / 4;
  spikeMesh.scale.set(1.4, 1.4, 1.4);
  starGroup.add(spikeMesh);

  // Orbital Ring
  const ringGeo = new THREE.TorusGeometry(1.35, 0.016, 16, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xc4a8ff, transparent: true, opacity: 0.65 });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2.3;
  ringMesh.rotation.y = Math.PI / 8;
  starGroup.add(ringMesh);

  // Planetary satellite node
  const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
  nodeMesh.position.set(1.35, 0, 0);
  ringMesh.add(nodeMesh);

  // 3. Floating Spatial Star Particles
  const particlesCount = 90;
  const partGeo = new THREE.BufferGeometry();
  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 14;
    posArray[i+1] = (Math.random() - 0.5) * 9;
    posArray[i+2] = (Math.random() - 0.5) * 8;
  }
  partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const partMat = new THREE.PointsMaterial({
    size: 0.04,
    color: 0xc4a8ff,
    transparent: true,
    opacity: 0.8
  });
  const particlesMesh = new THREE.Points(partGeo, partMat);
  scene.add(particlesMesh);

  // Mouse Parallax
  let mouseX = 0, mouseY = 0;
  let targetRotX = 0, targetRotY = 0;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    mouseX = x;
    mouseY = y;
    targetRotY = x * 0.75;
    targetRotX = y * 0.45;
  });

  // Reduced motion support
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let isIntersecting = true;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    });
    observer.observe(canvas);
  }

  function animate() {
    heroThreeAnimId = requestAnimationFrame(animate);

    if (!isIntersecting) return; // Pause rendering loop when scrolled off-screen

    if (!prefersReduced) {
      knotMesh.rotation.x += 0.0035;
      knotMesh.rotation.y += 0.0055;

      coreMesh.rotation.x -= 0.009;
      coreMesh.rotation.y += 0.014;
      spikeMesh.rotation.x -= 0.009;
      spikeMesh.rotation.y += 0.014;
      ringMesh.rotation.z += 0.005;

      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.045;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.045;

      particlesMesh.rotation.y += 0.0006;
    }

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

function initAnorentGsapMotion() {
  if (typeof gsap === 'undefined') return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Staggered cinematic reveal of hero headline
  gsap.from('.monumental-headline .kinetic-text', {
    y: 60,
    opacity: 0,
    duration: 1.1,
    stagger: 0.16,
    ease: 'power3.out',
    delay: 0.2
  });

  // Fade-in editorial statement and search capsule
  gsap.from('.hero-editorial-statement, .hero-search-capsule', {
    y: 24,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power2.out',
    delay: 0.6
  });

  // Dock items entrance
  gsap.from('.hero-bottom-dock > *', {
    y: 18,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.8
  });
}

function scrollToCurriculumTopology() {
  const target = document.querySelector('.curriculum-section') || document.querySelector('.atlas-board-section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
window.scrollToCurriculumTopology = scrollToCurriculumTopology;

// Wire up initialization on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initAnorent3DEngine();
      initAnorentGsapMotion();
    }, 150);
  });
} else {
  setTimeout(() => {
    initAnorent3DEngine();
    initAnorentGsapMotion();
  }, 150);
}
`;

if (!js.includes('initAnorent3DEngine')) {
  js += '\n' + anorentMotionScript;
  fs.writeFileSync('script.js', js, 'utf-8');
  console.log('Appended ANORENT 3D & GSAP motion engine to script.js');
}

console.log('ANORENT transformation applied successfully!');
