import fs from 'fs';

let content = fs.readFileSync('script.js', 'utf8');

// Replace openExploreItem implementation
const oldOpenExplore = `function openExploreItem(type) {
  closeExploreDropdown();
  if (type === 'brain') {
    openBrainModal();
  } else if (type === 'constellation') {
    toast('Concept Map ("Constellation") module opening...', 'info');
  } else if (type === 'timeline') {
    toast('Historical Care Timeline opening...', 'info');
  } else if (type === 'lexicon') {
    toast('Clinical Lexicon opening...', 'info');
  } else if (type === 'differential') {
    toast('Differential Diagnosis Trainer opening...', 'info');
  } else if (type === 'support') {
    toast('Support Resources: National Tele-MANAS helpline 14416 (24x7 India) · KIRAN 1800-599-0019', 'info', 7000);
  }
}`;

const newOpenExplore = `function openExploreItem(type) {
  closeExploreDropdown();
  if (type === 'brain') {
    openBrainModal();
  } else if (type === 'constellation') {
    openConstellationModal();
  } else if (type === 'timeline') {
    openTimelineModal();
  } else if (type === 'lexicon') {
    openLexiconModal();
  } else if (type === 'differential') {
    openTrainerModal();
  } else if (type === 'support') {
    openSupportModal();
  }
}`;

if (content.includes(oldOpenExplore)) {
  content = content.replace(oldOpenExplore, newOpenExplore);
} else {
  console.log('oldOpenExplore exact match not found; looking for openExploreItem function...');
  content = content.replace(/function openExploreItem\(type\)[\s\S]*?\n\}/, newOpenExplore);
}

// Phase 6 Engine Logic
const phase6Js = `
// ══════════════════════════════════════════════════════════════
// PHASE 6: SIGNATURE ATLAS FEATURES IMPLEMENTATION
// ══════════════════════════════════════════════════════════════

// ── 1. CLINICAL LEXICON BROWSER ─────────────────────────────
let currentLexiconLetter = 'ALL';
let currentLexiconVolume = 'ALL';

function openLexiconModal() {
  const modal = document.getElementById('lexiconModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderLexiconAlphabetRibbon();
  renderLexiconVolumeFilter();
  filterLexicon();
  const input = document.getElementById('lexiconSearchInput');
  if (input) { input.value = ''; input.focus(); }
}

function closeLexiconModal(e) {
  if (e && e.target && e.target !== document.getElementById('lexiconModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('lexiconModal');
  if (modal) modal.classList.add('hidden');
}

function renderLexiconAlphabetRibbon() {
  const ribbon = document.getElementById('lexiconAlphaRibbon');
  if (!ribbon) return;
  const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  ribbon.innerHTML = letters.map(l => \`
    <button class="alpha-pill \${l === currentLexiconLetter ? 'active' : ''}" onclick="selectLexiconLetter('\${l}', this)">\${l}</button>
  \`).join('');
}

function selectLexiconLetter(l, btn) {
  currentLexiconLetter = l;
  document.querySelectorAll('.alpha-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterLexicon();
}

function renderLexiconVolumeFilter() {
  const container = document.getElementById('lexiconVolFilter');
  if (!container) return;
  const vols = [
    { id: 'ALL', label: 'All Volumes' },
    { id: 'vol-1', label: 'Vol I: Foundations' },
    { id: 'vol-2', label: 'Vol II: Anxiety' },
    { id: 'vol-3', label: 'Vol III: Mood' },
    { id: 'vol-4', label: 'Vol IV: Eating' },
    { id: 'vol-5', label: 'Vol V: Personality' },
    { id: 'vol-6', label: 'Vol VI: Psychotic' },
    { id: 'vol-7', label: 'Vol VII: Therapies' },
    { id: 'vol-8', label: 'Vol VIII: Culture' },
    { id: 'vol-9', label: 'Vol IX: Adjustment' }
  ];
  container.innerHTML = vols.map(v => \`
    <button class="pill-btn \${v.id === currentLexiconVolume ? 'active' : ''}" onclick="selectLexiconVolume('\${v.id}', this)">\${esc(v.label)}</button>
  \`).join('');
}

function selectLexiconVolume(volId, btn) {
  currentLexiconVolume = volId;
  const container = document.getElementById('lexiconVolFilter');
  if (container) container.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterLexicon();
}

function filterLexicon() {
  const searchInput = document.getElementById('lexiconSearchInput');
  const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const terms = (window.GLOSSARY_TERMS || []);

  let filtered = terms.filter(t => {
    if (currentLexiconLetter !== 'ALL') {
      if (!t.term.toUpperCase().startsWith(currentLexiconLetter)) return false;
    }
    if (currentLexiconVolume !== 'ALL') {
      if (t.volume !== currentLexiconVolume) return false;
    }
    if (query) {
      const matchTerm = t.term.toLowerCase().includes(query);
      const matchDef = (t.def || '').toLowerCase().includes(query);
      const matchEty = (t.etymology || '').toLowerCase().includes(query);
      if (!matchTerm && !matchDef && !matchEty) return false;
    }
    return true;
  });

  const countLabel = document.getElementById('lexiconCountLabel');
  if (countLabel) countLabel.textContent = \`Showing \${filtered.length} of \${terms.length} clinical terms\`;

  renderLexiconGrid(filtered);
}

function renderLexiconGrid(terms) {
  const grid = document.getElementById('lexiconGrid');
  if (!grid) return;
  if (!terms.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:var(--sp-8);color:var(--text-tertiary)">No standardized clinical terms match your query.</div>';
    return;
  }
  grid.innerHTML = terms.map(t => {
    const chapterLinks = (t.chapters || []).map(chId => {
      const ch = (window.KB || []).find(k => k.id === chId);
      const title = ch ? (ch.shortTitle || ch.title) : chId;
      return \`<button class="tag-chip tag-link" onclick="openChapterFromLexicon('\${chId}')" style="cursor:pointer;border:none;background:var(--primary-soft);color:var(--primary-deep)">📖 \${esc(title)}</button>\`;
    }).join(' ');

    return \`
      <article class="lexicon-card" id="lex-\${t.id}">
        <div class="lexicon-head">
          <h4 class="lexicon-term">\${esc(t.term)}</h4>
          \${t.phonetic ? \`<span class="lexicon-phonetic">\${esc(t.phonetic)}</span>\` : ''}
        </div>
        \${t.etymology ? \`<span class="lexicon-etymology">Etymology: \${esc(t.etymology)}</span>\` : ''}
        <p class="lexicon-def">\${esc(t.def)}</p>
        <div class="lexicon-footer">
          <span class="card-eyebrow" style="font-size:10px">\${esc(t.volume || 'General Nosology')}</span>
          <div style="display:flex;gap:4px;flex-wrap:wrap">\${chapterLinks}</div>
        </div>
      </article>
    \`;
  }).join('');
}

function openChapterFromLexicon(chId) {
  closeLexiconModal();
  openChapter(chId);
}

// ── 2. CONCEPT MAP: CONSTELLATION ───────────────────────────
let constellationViewMode = 'graph';

function openConstellationModal() {
  const modal = document.getElementById('constellationModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderConstellation();
}

function closeConstellationModal(e) {
  if (e && e.target && e.target !== document.getElementById('constellationModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('constellationModal');
  if (modal) modal.classList.add('hidden');
}

function setConstellationView(mode) {
  constellationViewMode = mode;
  const graphBtn = document.getElementById('btnConstellationGraph');
  const listBtn = document.getElementById('btnConstellationList');
  const canvas = document.getElementById('constellationCanvasContainer');
  const list = document.getElementById('constellationListView');

  if (mode === 'graph') {
    if (graphBtn) graphBtn.className = 'btn btn-primary btn-xs active';
    if (listBtn) listBtn.className = 'btn btn-outline btn-xs';
    if (canvas) canvas.classList.remove('hidden');
    if (list) list.classList.add('hidden');
  } else {
    if (graphBtn) graphBtn.className = 'btn btn-outline btn-xs';
    if (listBtn) listBtn.className = 'btn btn-primary btn-xs active';
    if (canvas) canvas.classList.add('hidden');
    if (list) list.classList.remove('hidden');
  }
}

function renderConstellation(volFilter = 'all') {
  const chapters = (window.KB || []);
  const edgesGroup = document.getElementById('constellationEdgesGroup');
  const nodesGroup = document.getElementById('constellationNodesGroup');
  const listView = document.getElementById('constellationListView');

  const volCenters = {
    'vol-1': { cx: 200, cy: 150, color: 'var(--vol-foundations, #009688)' },
    'vol-2': { cx: 500, cy: 110, color: 'var(--vol-anxiety, #2196F3)' },
    'vol-3': { cx: 800, cy: 150, color: 'var(--vol-mood, #9C27B0)' },
    'vol-4': { cx: 850, cy: 330, color: 'var(--vol-eating, #E91E63)' },
    'vol-5': { cx: 750, cy: 490, color: 'var(--vol-personality, #FF9800)' },
    'vol-6': { cx: 480, cy: 510, color: 'var(--vol-psychotic, #795548)' },
    'vol-7': { cx: 220, cy: 470, color: 'var(--vol-therapies, #4CAF50)' },
    'vol-8': { cx: 140, cy: 300, color: 'var(--vol-culture, #607D8B)' },
    'vol-9': { cx: 500, cy: 310, color: 'var(--vol-adjustment, #3F51B5)' }
  };

  const nodeMap = {};
  const volGroups = {};
  chapters.forEach(c => {
    const v = c.volume || 'vol-1';
    if (!volGroups[v]) volGroups[v] = [];
    volGroups[v].push(c);
  });

  Object.keys(volGroups).forEach(v => {
    const center = volCenters[v] || { cx: 500, cy: 300, color: '#666' };
    const items = volGroups[v];
    const n = items.length;
    const r = Math.min(65 + n * 3, 90);
    items.forEach((c, idx) => {
      const angle = (idx / n) * 2 * Math.PI - Math.PI / 2;
      const x = Math.round(center.cx + r * Math.cos(angle));
      const y = Math.round(center.cy + r * Math.sin(angle));
      nodeMap[c.id] = { ...c, x, y, color: center.color, volume: v };
    });
  });

  const connections = [
    { from: 'major-depression', to: 'gad', label: 'Frequent Comorbidity (60%+ overlap)' },
    { from: 'major-depression', to: 'pdd', label: 'Double Depression Differential' },
    { from: 'bipolar-1', to: 'major-depression', label: 'Bipolar vs Unipolar Polarity Differential' },
    { from: 'panic', to: 'agoraphobia', label: 'Etiological Cascade' },
    { from: 'social-anxiety', to: 'avoidant-pd', label: 'Spectrum vs Categorical Differential' },
    { from: 'ocd', to: 'gad', label: 'Intrusive Egodystonic vs Egosyntonic Worry' },
    { from: 'ptsd', to: 'acute-stress', label: 'Duration Threshold (1 mo criterion)' },
    { from: 'schizophrenia', to: 'schizoaffective', label: 'Psychotic vs Mood Differential' },
    { from: 'schizophrenia', to: 'bipolar-1', label: 'Psychosis in Mania Differential' },
    { from: 'anorexia', to: 'bulimia', label: 'Body Weight / BMI Threshold Differential' },
    { from: 'bulimia', to: 'binge-eating', label: 'Compensatory Purging Differential' },
    { from: 'borderline', to: 'bipolar-1', label: 'Affective Lability vs Episodic Mania' },
    { from: 'antisocial', to: 'conduct-disorder', label: 'Age Onset Precursor Requirement (<15)' },
    { from: 'cbt', to: 'major-depression', label: 'First-Line Evidence-Based Treatment' },
    { from: 'cbt', to: 'gad', label: 'Cognitive Restructuring & Decatastrophizing' },
    { from: 'dbt', to: 'borderline', label: 'Gold-Standard Dialectical Skills' },
    { from: 'exposure-therapy', to: 'specific-phobias', label: 'Systematic Desensitization & In Vivo' },
    { from: 'exposure-therapy', to: 'ocd', label: 'Exposure & Response Prevention (ERP)' },
    { from: 'token-economy', to: 'behavior-therapy', label: 'Operant Conditioning Foundation' },
    { from: 'culture-bound', to: 'dhat-syndrome', label: 'South Asian Cultural Concept of Distress' },
    { from: 'stress-coping', to: 'adjustment-disorders', label: 'Maladaptive Stress Response' },
    { from: 'defense-mechanisms', to: 'psychoanalysis', label: 'Ego Defense Operationalization' }
  ];

  if (edgesGroup) {
    edgesGroup.innerHTML = connections.map(conn => {
      const f = nodeMap[conn.from];
      const t = nodeMap[conn.to];
      if (!f || !t) return '';
      return \`<line class="constellation-edge" id="edge-\${conn.from}-\${conn.to}" x1="\${f.x}" y1="\${f.y}" x2="\${t.x}" y2="\${t.y}" data-from="\${conn.from}" data-to="\${conn.to}" data-label="\${esc(conn.label)}"></line>\`;
    }).join('');
  }

  if (nodesGroup) {
    nodesGroup.innerHTML = Object.values(nodeMap).map(n => {
      const isMuted = (volFilter !== 'all' && n.volume !== volFilter);
      return \`
        <g class="constellation-node \${isMuted ? 'muted' : ''}" id="cnode-\${n.id}" data-id="\${n.id}" tabindex="0" role="button" aria-label="\${esc(n.title)}" onclick="openChapterFromConstellation('\${n.id}')" onmouseenter="hoverConstellationNode('\${n.id}')" onmouseleave="leaveConstellationNode()">
          <circle cx="\${n.x}" cy="\${n.y}" r="8" fill="\${n.color}" stroke="var(--surface)" stroke-width="2"></circle>
          <text x="\${n.x}" y="\${n.y + 18}">\${esc((n.shortTitle || n.title).slice(0, 16))}</text>
        </g>
      \`;
    }).join('');
  }

  if (listView) {
    listView.innerHTML = chapters.map(c => {
      const relatedLinks = connections
        .filter(conn => conn.from === c.id || conn.to === c.id)
        .map(conn => {
          const otherId = conn.from === c.id ? conn.to : conn.from;
          const other = nodeMap[otherId];
          return \`<span class="tag-chip">\${esc(conn.label)} → <strong>\${esc(other ? (other.shortTitle || other.title) : otherId)}</strong></span>\`;
        }).join(' ');

      return \`
        <div class="note-card" style="padding:var(--sp-3)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <strong>\${esc(c.title)}</strong>
            <button class="btn btn-primary btn-xs" onclick="openChapterFromConstellation('\${c.id}')">Read Chapter ↗</button>
          </div>
          <div style="font-size:var(--text-xs);color:var(--text-secondary);margin-bottom:4px">\${esc(c.preview || '')}</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">\${relatedLinks || '<span class="tag-chip">Core Curriculum</span>'}</div>
        </div>
      \`;
    }).join('');
  }
}

function filterConstellationByVolume(volId) {
  renderConstellation(volId);
}

function hoverConstellationNode(id) {
  const node = (window.KB || []).find(k => k.id === id);
  const tooltip = document.getElementById('constellationTooltip');
  if (tooltip && node) {
    const mastery = typeof calculateTopicMastery === 'function' ? calculateTopicMastery(id) : 0;
    tooltip.innerHTML = \`
      <div style="font-weight:700;margin-bottom:2px">\${esc(node.title)}</div>
      <div style="color:var(--text-secondary);margin-bottom:4px">\${esc(node.category || node.volume)}</div>
      <div>Mastery: <strong>\${mastery}%</strong> · Click to open chapter</div>
    \`;
    tooltip.classList.remove('hidden');
  }

  document.querySelectorAll('.constellation-edge').forEach(e => {
    if (e.getAttribute('data-from') === id || e.getAttribute('data-to') === id) {
      e.classList.add('highlighted');
    } else {
      e.classList.remove('highlighted');
    }
  });
}

function leaveConstellationNode() {
  const tooltip = document.getElementById('constellationTooltip');
  if (tooltip) tooltip.classList.add('hidden');
  document.querySelectorAll('.constellation-edge').forEach(e => e.classList.remove('highlighted'));
}

function openChapterFromConstellation(chId) {
  closeConstellationModal();
  openChapter(chId);
}

// ── 3. HISTORICAL CARE TIMELINE ─────────────────────────────
let currentTimelineCategory = 'all';

function openTimelineModal() {
  const modal = document.getElementById('timelineModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  filterTimeline(currentTimelineCategory);
}

function closeTimelineModal(e) {
  if (e && e.target && e.target !== document.getElementById('timelineModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('timelineModal');
  if (modal) modal.classList.add('hidden');
}

function filterTimeline(cat, btn) {
  currentTimelineCategory = cat;
  const tabs = document.querySelectorAll('.timeline-tabs .pill-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const events = (window.TIMELINE_EVENTS || []);
  const filtered = cat === 'all' ? events : events.filter(e => e.category === cat);
  const list = document.getElementById('timelineList');
  if (!list) return;

  list.innerHTML = filtered.map((e, idx) => \`
    <article class="timeline-node-card" id="tl-\${idx}">
      <div class="timeline-node-dot" aria-hidden="true"></div>
      <div class="timeline-header-meta">
        <span class="timeline-year-badge">\${esc(e.year)}</span>
        <span class="tag-chip">\${esc(e.category)}</span>
      </div>
      <h4 class="timeline-title">\${esc(e.title)}</h4>
      <p class="timeline-significance">\${esc(e.significance)}</p>
      \${e.refId ? \`
        <div style="font-size:var(--text-xs);color:var(--text-tertiary)">
          Authoritative Reference: <span class="badge-source" style="font-family:var(--font-mono)">\${esc(e.refId)}</span>
        </div>\` : ''}
    </article>
  \`).join('');
}

// ── 4. DIFFERENTIAL DIAGNOSIS TRAINER ───────────────────────
const TRAINER_VIGNETTES = [
  {
    id: 'diff-1',
    domain: 'Anxiety Spectrum Disorders',
    title: 'Case Presentation: 26-year-old Corporate Associate',
    prose: 'Patient reports persistent, excessive worry across multiple life domains (work deadlines, financial security, parents\\' health, relationship stability) present almost daily for over 8 months. She describes muscle tension, restless fatigue, sleep onset disturbance, and inability to control the apprehension. Episodes do not occur out of the blue as sudden discrete surges, and she does not fear impending heart attack or social humiliation.',
    mse: 'MSE: Mild psychomotor agitation, hypervigilant affect, speech coherent and focused on chronic daily worries. No delusions, obsessions, or discrete panic attacks.',
    candidates: [
      { id: 'gad', label: 'Generalized Anxiety Disorder (GAD)', isCorrect: true },
      { id: 'panic', label: 'Panic Disorder', isCorrect: false, ruleOut: 'Ruled out because apprehension is chronic and widespread rather than presenting as sudden, unprovoked discrete surges of intense fear reaching a peak within minutes with autonomic crisis.' },
      { id: 'social-anxiety', label: 'Social Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because fears are generalized to everyday life circumstances rather than circumscribed to scrutiny or humiliation in social/performance situations.' },
      { id: 'illness-anxiety', label: 'Illness Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because worry spans multiple diverse life domains rather than an exclusive preoccupation with having or acquiring a serious undiagnosed medical illness.' }
    ],
    distinguishingFeature: 'Per DSM-5-TR, GAD requires excessive anxiety and worry occurring more days than not for at least 6 months about a number of events or activities, with marked difficulty controlling the worry and at least 3 autonomic/somatic tension symptoms.'
  },
  {
    id: 'diff-2',
    domain: 'Depressive & Mood Disorders',
    title: 'Case Presentation: 42-year-old High School Teacher',
    prose: 'Patient reports feeling depressed, drained of energy, and joyless "as long as I can remember" for at least the past 3.5 years. She has managed to maintain her teaching job, but suffers chronic low self-esteem, fatigue, indecisiveness, and hopelessness. She denies any 2-month interval free of low mood, has never had a manic or hypomanic episode, and does not meet full symptomatic severity for acute major depressive episodes during this period.',
    mse: 'MSE: Constricted depressive affect, psychomotor slowing mild, speech low volume, thought process goal-directed without acute suicidal intent or psychotic features.',
    candidates: [
      { id: 'pdd', label: 'Persistent Depressive Disorder (Dysthymia)', isCorrect: true },
      { id: 'mdd', label: 'Major Depressive Disorder (MDD)', isCorrect: false, ruleOut: 'Ruled out as primary diagnosis because the clinical picture is characterized by continuous chronic depressive symptoms spanning >2 years without acute severe neurovegetative syndromal breakdown.' },
      { id: 'bipolar-2', label: 'Bipolar II Disorder', isCorrect: false, ruleOut: 'Ruled out because there is no history of any hypomanic episode lasting ≥4 days.' },
      { id: 'cyclothymia', label: 'Cyclothymic Disorder', isCorrect: false, ruleOut: 'Ruled out because the patient exhibits chronic persistent depressive mood without alternating hypomanic symptom periods.' }
    ],
    distinguishingFeature: 'DSM-5-TR Persistent Depressive Disorder (PDD) unifies DSM-IV chronic MDD and dysthymia, requiring depressed mood for at least 2 years without remissions exceeding 2 months.'
  },
  {
    id: 'diff-3',
    domain: 'Psychotic Spectrum Disorders',
    title: 'Case Presentation: 21-year-old University Student',
    prose: 'Patient was brought by his family after 7 months of progressive functional decline. For the past 3 months, he has exhibited prominent auditory hallucinations (commenting voices), persecutory delusions that neighbors are monitoring him via wifi, gross alogia, marked emotional flattening, and social withdrawal. There have been no concurrent major depressive or manic episodes.',
    mse: 'MSE: Affect flat, hygiene neglected, latency in response, auditory hallucinations actively attended to, lack of insight into psychotic nature of beliefs.',
    candidates: [
      { id: 'schizophrenia', label: 'Schizophrenia', isCorrect: true },
      { id: 'schizoaffective', label: 'Schizoaffective Disorder', isCorrect: false, ruleOut: 'Ruled out because there are no concurrent major depressive or manic episodes meeting Criterion A mood requirements alongside psychotic symptoms.' },
      { id: 'schizophreniform', label: 'Schizophreniform Disorder', isCorrect: false, ruleOut: 'Ruled out because the total illness duration (including prodromal functional deterioration) has lasted 7 months, exceeding the 6-month upper boundary.' },
      { id: 'delusional', label: 'Delusional Disorder', isCorrect: false, ruleOut: 'Ruled out because prominent auditory hallucinations, alogia, and marked affective flattening are present, which violates Delusional Disorder Criterion A.' }
    ],
    distinguishingFeature: 'DSM-5-TR Schizophrenia Criterion C mandates continuous signs of disturbance for at least 6 months, including at least 1 month of active Criterion A symptoms (delusions, hallucinations, or disorganized speech).'
  },
  {
    id: 'diff-4',
    domain: 'Eating Disorders',
    title: 'Case Presentation: 19-year-old Ballet Dancer',
    prose: 'Patient is admitted with severe bradycardia and hypokalemia. Height 168 cm, weight 41 kg (BMI 14.5 kg/m²). She endorses an intense, terrifying fear of gaining weight and a distorted perception of her thighs as "repulsively fat". She severely restricts caloric intake, but over the past 4 months has had recurring episodes of eating subjective large amounts of food followed immediately by self-induced vomiting and laxative misuse.',
    mse: 'MSE: Emaciated appearance, lanugo hair on arms, intense anxiety regarding intravenous nutritional support, hyper-focused on caloric numbers.',
    candidates: [
      { id: 'anorexia-bp', label: 'Anorexia Nervosa (Binge-Eating/Purging Type)', isCorrect: true },
      { id: 'bulimia', label: 'Bulimia Nervosa', isCorrect: false, ruleOut: 'Crucially ruled out because patient is significantly underweight (BMI 14.5 kg/m²). By DSM-5-TR diagnostic hierarchy, if criteria for Anorexia Nervosa are met, Anorexia takes strict diagnostic precedence over Bulimia.' },
      { id: 'bed', label: 'Binge Eating Disorder (BED)', isCorrect: false, ruleOut: 'Ruled out due to compensatory purging and sub-normal body weight.' },
      { id: 'arfid', label: 'Avoidant/Restrictive Food Intake Disorder (ARFID)', isCorrect: false, ruleOut: 'Ruled out because weight restriction is driven by intense fear of fatness and perceptual body image disturbance.' }
    ],
    distinguishingFeature: 'Underweight status (Criterion A: BMI < 18.5 kg/m²) is the absolute diagnostic boundary separating Anorexia Nervosa (Binge/Purge type) from Bulimia Nervosa.'
  },
  {
    id: 'diff-5',
    domain: 'Personality Disorders',
    title: 'Case Presentation: 27-year-old Graphic Artist',
    prose: 'Patient presents with a lifelong pattern of intense emotional storms, marked fear of abandonment leading to frantic efforts to avoid perceived rejection, a shifting sense of self, recurrent suicidal threats during interpersonal conflicts, chronic feelings of emptiness, and rapid mood shifts lasting only a few hours at a time.',
    mse: 'MSE: Labile affect shifting rapidly between tearful despair and guarded hostility; scars from superficial cutting visible on forearms; cognitive testing intact without formal thought disorder.',
    candidates: [
      { id: 'borderline', label: 'Borderline Personality Disorder (BPD)', isCorrect: true },
      { id: 'bipolar-2', label: 'Bipolar II Disorder', isCorrect: false, ruleOut: 'Ruled out because affective instability shifts over hours in response to interpersonal stressors rather than sustaining discrete hypomanic and depressive episodes lasting days to weeks.' },
      { id: 'histrionic', label: 'Histrionic Personality Disorder', isCorrect: false, ruleOut: 'Ruled out because BPD is distinguished by chronic emptiness, intense fears of abandonment, identity disturbance, and self-harming/suicidal behaviors.' },
      { id: 'ptsd', label: 'Post-Traumatic Stress Disorder', isCorrect: false, ruleOut: 'Ruled out as sole diagnosis because symptoms reflect pervasive characterological identity, relational, and self-injurious instability across adulthood.' }
    ],
    distinguishingFeature: 'DSM-5-TR BPD requires pervasive instability in interpersonal relationships, self-image, and affects, along with marked impulsivity and recurrent self-harming behavior.'
  },
  {
    id: 'diff-6',
    domain: 'Obsessive-Compulsive Spectrum',
    title: 'Case Presentation: 31-year-old Software Quality Engineer',
    prose: 'Patient is referred by his spouse due to extreme marital friction over household rules. He insists that everything in their home must adhere to rigid alphabetical and color-coordinated order, works 80 hours a week because "no one else meets my exact standards", and cannot delegate tasks. He views his standards as completely rational, superior, and egosyntonic, and has no discrete recurrent egodystonic intrusive thoughts or repetitive cleaning rituals.',
    mse: 'MSE: Formal, moralistic, perfectionistic demeanor. Denies egodystonic obsessions or distress about his habits; reports frustration that others fail to adhere to proper rules.',
    candidates: [
      { id: 'ocpd', label: 'Obsessive-Compulsive Personality Disorder (OCPD)', isCorrect: true },
      { id: 'ocd', label: 'Obsessive-Compulsive Disorder (OCD)', isCorrect: false, ruleOut: 'Ruled out because patient lacks true egodystonic obsessions (intrusive unwanted thoughts causing distress) and compulsions; his perfectionism is pervasive and egosyntonic.' },
      { id: 'autism', label: 'Autism Spectrum Disorder', isCorrect: false, ruleOut: 'Ruled out due to absence of childhood social-communication deficits or repetitive motor stereotypies.' },
      { id: 'narcissistic', label: 'Narcissistic Personality Disorder', isCorrect: false, ruleOut: 'Ruled out because preoccupation is driven by devotion to rules, order, and productivity rather than a desire for admiration, grandiosity, or status.' }
    ],
    distinguishingFeature: 'OCD features egodystonic obsessions and compulsions recognized as distressing and irrational; OCPD features a pervasive, egosyntonic preoccupation with orderliness, perfectionism, and control.'
  },
  {
    id: 'diff-7',
    domain: 'Culture & Somatic Concepts of Distress',
    title: 'Case Presentation: 23-year-old Male from Rajasthan',
    prose: 'Patient presents to a clinic in New Delhi complaining of extreme physical exhaustion, memory weakness, burning sensations during micturition, and loss of facial lustre. He attributes these symptoms entirely to nocturnal seminal emissions, stating that semen is the precious concentrated essence of 40 drops of blood, and that its depletion has permanently weakened his brain and vitality. Extensive urological and blood investigations are completely normal.',
    mse: 'MSE: Marked somatic anxiety and guilt regarding nocturnal emissions; cultural somatic idiom coherent with traditional Ayurvedic sukra health concepts.',
    candidates: [
      { id: 'dhat', label: 'Dhat Syndrome (Cultural Concept of Distress)', isCorrect: true },
      { id: 'illness-anxiety', label: 'Illness Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because distress is culturally bound to semen loss and bodily vitality depletion rather than fear of having an unspecified major medical illness like cancer.' },
      { id: 'somatic-symptom', label: 'Somatic Symptom Disorder', isCorrect: false, ruleOut: 'Ruled out as standalone category because symptoms constitute the classic DSM-5-TR cultural concept of distress (Dhat syndrome) prevalent across South Asia.' },
      { id: 'mdd', label: 'Major Depressive Disorder with Somatic Features', isCorrect: false, ruleOut: 'Ruled out because the core syndrome is localized somatic anxiety regarding semen loss without pervasive vegetative depressive signs.' }
    ],
    distinguishingFeature: 'DSM-5-TR explicitly includes Dhat syndrome in its Cultural Concepts of Distress appendix, recognizing semen loss and vitality depletion as a culturally sanctioned idiom of distress.'
  },
  {
    id: 'diff-8',
    domain: 'Stress & Trauma Nosology',
    title: 'Case Presentation: 34-year-old Bank Teller',
    prose: 'Two weeks ago, patient was held at gunpoint during an armed bank robbery. Since then, he experiences recurrent intrusive nightmares of the event, dissociative flashbacks where he feels back in the vault, emotional detachment from his family, hypervigilance, and avoids walking near banks. The symptoms have been present continuously for 14 days.',
    mse: 'MSE: Startle response to loud sounds, tearful when describing event, hypervigilant, oriented to person/place/time.',
    candidates: [
      { id: 'acute-stress', label: 'Acute Stress Disorder (ASD)', isCorrect: true },
      { id: 'ptsd', label: 'Post-Traumatic Stress Disorder (PTSD)', isCorrect: false, ruleOut: 'Strictly ruled out because symptoms have been present for only 14 days. By DSM-5-TR Criterion F, PTSD diagnosis requires symptoms to persist for more than 1 full month (>30 days).' },
      { id: 'adjustment', label: 'Adjustment Disorder', isCorrect: false, ruleOut: 'Ruled out because exposure to life-threatening trauma with full dissociative/intrusion symptoms meets Criterion A for Acute Stress Disorder.' },
      { id: 'panic', label: 'Panic Disorder', isCorrect: false, ruleOut: 'Ruled out because panic sensations are triggered by trauma cues rather than unexpected recurrent surges.' }
    ],
    distinguishingFeature: 'The defining temporal boundary between Acute Stress Disorder and PTSD is 1 month: ASD is diagnosed from 3 days to 1 month post-trauma; PTSD requires symptom persistence beyond 1 month.'
  }
];

let currentTrainerIndex = 0;
let selectedTrainerCandidate = null;
let trainerScore = { total: 0, correct: 0 };

function openTrainerModal() {
  const modal = document.getElementById('trainerModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  loadTrainerCase(currentTrainerIndex);
}

function closeTrainerModal(e) {
  if (e && e.target && e.target !== document.getElementById('trainerModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('trainerModal');
  if (modal) modal.classList.add('hidden');
}

function loadTrainerCase(idx) {
  currentTrainerIndex = idx % TRAINER_VIGNETTES.length;
  const item = TRAINER_VIGNETTES[currentTrainerIndex];
  selectedTrainerCandidate = null;

  document.getElementById('trainerCaseIndex').textContent = \`CASE VIGNETTE \${currentTrainerIndex + 1} OF \${TRAINER_VIGNETTES.length}\`;
  document.getElementById('trainerCaseDomain').textContent = item.domain;
  document.getElementById('trainerCaseTitle').textContent = item.title;
  document.getElementById('trainerCaseProse').textContent = item.prose;
  document.getElementById('trainerCaseMSE').innerHTML = \`<strong>Clinical Mental Status Examination (MSE):</strong> \${esc(item.mse)}\`;

  const grid = document.getElementById('trainerOptionsGrid');
  grid.innerHTML = item.candidates.map((c, i) => \`
    <button class="trainer-option-btn" id="topt-\${i}" onclick="selectTrainerOption(\${i})">
      \${esc(c.label)}
    </button>
  \`).join('');

  document.getElementById('trainerFeedbackCard').classList.add('hidden');
  document.getElementById('trainerEvalBtn').classList.remove('hidden');
  document.getElementById('trainerNextBtn').classList.add('hidden');
}

function selectTrainerOption(candidateIndex) {
  selectedTrainerCandidate = candidateIndex;
  document.querySelectorAll('.trainer-option-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === candidateIndex);
  });
}

function evaluateTrainerDiagnosis() {
  if (selectedTrainerCandidate === null) {
    toast('Please select a candidate diagnosis to evaluate.', 'warning');
    return;
  }
  const item = TRAINER_VIGNETTES[currentTrainerIndex];
  const chosen = item.candidates[selectedTrainerCandidate];
  const isCorrect = chosen.isCorrect;

  trainerScore.total++;
  if (isCorrect) trainerScore.correct++;

  const pct = Math.round((trainerScore.correct / trainerScore.total) * 100);
  const badge = document.getElementById('trainerScoreBadge');
  if (badge) badge.textContent = \`Accuracy: \${trainerScore.correct} / \${trainerScore.total} (\${pct}%)\`;

  item.candidates.forEach((c, i) => {
    const btn = document.getElementById(\`topt-\${i}\`);
    if (btn) {
      if (c.isCorrect) btn.classList.add('correct');
      else if (i === selectedTrainerCandidate) btn.classList.add('incorrect');
    }
  });

  const feedbackCard = document.getElementById('trainerFeedbackCard');
  const feedbackTitle = document.getElementById('trainerFeedbackTitle');
  const distText = document.getElementById('trainerDistinguishingText');
  const ruleOutList = document.getElementById('trainerRuleOutsList');

  if (feedbackCard && feedbackTitle && distText && ruleOutList) {
    feedbackCard.classList.remove('hidden');
    if (isCorrect) {
      feedbackCard.style.borderColor = 'var(--mint)';
      feedbackCard.style.background = 'var(--mint-soft)';
      feedbackTitle.innerHTML = \`<span style="color:var(--mint-deep)">✔ Diagnostic Evaluation Correct: \${esc(chosen.label)}</span>\`;
    } else {
      feedbackCard.style.borderColor = 'var(--crimson)';
      feedbackCard.style.background = 'var(--crimson-soft)';
      feedbackTitle.innerHTML = \`<span style="color:var(--crimson-deep)">✘ Clinical Rule-Out: Primary Diagnosis is \${esc(item.candidates.find(c => c.isCorrect).label)}</span>\`;
    }

    distText.innerHTML = \`<strong>The Distinguishing Clinical Feature:</strong> \${esc(item.distinguishingFeature)}\`;
    ruleOutList.innerHTML = item.candidates.map(c => \`
      <li><strong>\${esc(c.label)}:</strong> \${c.isCorrect ? '<span style="color:var(--mint-deep)">Primary Diagnosis confirmed by symptom cluster.</span>' : esc(c.ruleOut)}</li>
    \`).join('');
  }

  document.getElementById('trainerEvalBtn').classList.add('hidden');
  document.getElementById('trainerNextBtn').classList.remove('hidden');
}

function nextTrainerCase() {
  loadTrainerCase(currentTrainerIndex + 1);
}

// ── 5. FOCUS TIMER & BREATHING ORB ──────────────────────────
let focusDurationSec = 25 * 60;
let focusRemainingSec = 25 * 60;
let isFocusRunning = false;
let focusIntervalTimer = null;

function openFocusTimerModal() {
  const modal = document.getElementById('focusModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateFocusDisplay();
}

function closeFocusModal(e) {
  if (e && e.target && e.target !== document.getElementById('focusModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('focusModal');
  if (modal) modal.classList.add('hidden');
}

function setFocusTimerDuration(mins) {
  focusDurationSec = mins * 60;
  focusRemainingSec = focusDurationSec;
  isFocusRunning = false;
  clearInterval(focusIntervalTimer);
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (toggleBtn) toggleBtn.textContent = 'Start Focus Session';

  ['focusMode25', 'focusMode5', 'focusMode15'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const activeBtn = document.getElementById(\`focusMode\${mins}\`);
  if (activeBtn) activeBtn.classList.add('active');

  updateFocusDisplay();
}

function toggleFocusTimer() {
  isFocusRunning = !isFocusRunning;
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (isFocusRunning) {
    if (toggleBtn) toggleBtn.textContent = 'Pause Session';
    focusIntervalTimer = setInterval(() => {
      if (focusRemainingSec > 0) {
        focusRemainingSec--;
        updateFocusDisplay();
      } else {
        clearInterval(focusIntervalTimer);
        isFocusRunning = false;
        if (toggleBtn) toggleBtn.textContent = 'Session Complete!';
        toast('Focus Session Complete! Take a gentle breath and relax.', 'info', 6000);
      }
    }, 1000);
  } else {
    clearInterval(focusIntervalTimer);
    if (toggleBtn) toggleBtn.textContent = 'Resume Session';
  }
}

function resetFocusTimer() {
  clearInterval(focusIntervalTimer);
  isFocusRunning = false;
  focusRemainingSec = focusDurationSec;
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (toggleBtn) toggleBtn.textContent = 'Start Focus Session';
  updateFocusDisplay();
}

function updateFocusDisplay() {
  const m = Math.floor(focusRemainingSec / 60);
  const s = focusRemainingSec % 60;
  const str = \`\${m.toString().padStart(2, '0')}:\${s.toString().padStart(2, '0')}\`;
  const modalDisplay = document.getElementById('focusModalDisplay');
  const readerDisplay = document.getElementById('readerFocusTimerDisplay');
  if (modalDisplay) modalDisplay.textContent = str;
  if (readerDisplay) readerDisplay.textContent = str;
}

// ── 6. CRISIS SUPPORT MODAL ─────────────────────────────────
function openSupportModal() {
  closeExploreDropdown();
  const modal = document.getElementById('supportModal');
  if (modal) modal.classList.remove('hidden');
}

function closeSupportModal(e) {
  if (e && e.target && e.target !== document.getElementById('supportModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('supportModal');
  if (modal) modal.classList.add('hidden');
}

// Global window registration for Phase 6
window.openLexiconModal = openLexiconModal;
window.closeLexiconModal = closeLexiconModal;
window.selectLexiconLetter = selectLexiconLetter;
window.selectLexiconVolume = selectLexiconVolume;
window.filterLexicon = filterLexicon;
window.openChapterFromLexicon = openChapterFromLexicon;

window.openConstellationModal = openConstellationModal;
window.closeConstellationModal = closeConstellationModal;
window.setConstellationView = setConstellationView;
window.filterConstellationByVolume = filterConstellationByVolume;
window.hoverConstellationNode = hoverConstellationNode;
window.leaveConstellationNode = leaveConstellationNode;
window.openChapterFromConstellation = openChapterFromConstellation;

window.openTimelineModal = openTimelineModal;
window.closeTimelineModal = closeTimelineModal;
window.filterTimeline = filterTimeline;

window.openTrainerModal = openTrainerModal;
window.closeTrainerModal = closeTrainerModal;
window.selectTrainerOption = selectTrainerOption;
window.evaluateTrainerDiagnosis = evaluateTrainerDiagnosis;
window.nextTrainerCase = nextTrainerCase;

window.openFocusTimerModal = openFocusTimerModal;
window.closeFocusModal = closeFocusModal;
window.setFocusTimerDuration = setFocusTimerDuration;
window.toggleFocusTimer = toggleFocusTimer;
window.resetFocusTimer = resetFocusTimer;

window.openSupportModal = openSupportModal;
window.closeSupportModal = closeSupportModal;
window.openExploreItem = openExploreItem;
`;

content = content + '\n\n' + phase6Js;
fs.writeFileSync('script.js', content, 'utf8');
console.log('Successfully built and integrated Phase 6 features into script.js!');
