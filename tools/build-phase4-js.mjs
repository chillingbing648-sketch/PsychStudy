import fs from 'fs';

const scriptPath = 'script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

// Section markers
const startMarker = '// ─── DASHBOARD COMMAND CENTER ────────────────────────────────────────────────';
const endMarker = '// ─── NOTES PANEL (STUDY PAGE & WORKSPACE) ────────────────────────────────────';

const startIndex = script.indexOf(startMarker);
const endIndex = script.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found in script.js!");
  process.exit(1);
}

const newPhase4Code = `${startMarker}

// ─── VOLUME COLOR PALETTE & TAXONOMY ──────────────────────────────────────────
const VOLUME_COLORS = {
  'I':    { name: 'Foundations',              color: '#2A5C55', bg: 'rgba(42,92,85,0.1)' },
  'II':   { name: 'Anxiety & Trauma',         color: '#2B5876', bg: 'rgba(43,88,118,0.1)' },
  'III':  { name: 'Mood Disorders',          color: '#9C6B28', bg: 'rgba(156,107,40,0.1)' },
  'IV':   { name: 'Eating & Body Image',      color: '#2D7258', bg: 'rgba(45,114,88,0.1)' },
  'V':    { name: 'Personality Patterns',    color: '#8B3A62', bg: 'rgba(139,58,98,0.1)' },
  'VI':   { name: 'Psychotic Spectrum',       color: '#5C457D', bg: 'rgba(92,69,125,0.1)' },
  'VII':  { name: 'Clinical Therapies',       color: '#7D5237', bg: 'rgba(125,82,55,0.1)' },
  'VIII': { name: 'Culture & Context',        color: '#3E6B7A', bg: 'rgba(62,107,122,0.1)' },
  'IX':   { name: 'Psychology of Adjustment', color: '#5B7042', bg: 'rgba(91,112,66,0.1)' }
};

const VOL_NUM_MAP = { 'I': '1', 'II': '2', 'III': '3', 'IV': '4', 'V': '5', 'VI': '6', 'VII': '7', 'VIII': '8', 'IX': '9' };

function getChapterVolume(c) {
  return (c && (c.volume || c.volumeId)) || 'I';
}

function getChapterPlate(c) {
  if (!c) return '1.1';
  if (c.plate) return c.plate;
  const vol = getChapterVolume(c);
  const vNum = VOL_NUM_MAP[vol] || '1';
  return \`\${vNum}.\${c.order || 1}\`;
}

function getVolumeInfo(volId) {
  return VOLUME_COLORS[volId] || VOLUME_COLORS['I'];
}

let currentCurriculumVol = 'all';
let currentCurriculumSort = 'default';

// ─── SAFE MARKDOWN RENDERER ──────────────────────────────────────────────────
function renderMarkdown(md) {
  if (!md) return '';
  if (typeof md !== 'string') {
    if (Array.isArray(md)) md = md.join(' ');
    else md = String(md);
  }
  // Escape HTML entities to prevent XSS
  let out = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Headings
  out = out.replace(/^### (.*$)/gim, '<h4 class="md-h4">$1</h4>');
  out = out.replace(/^## (.*$)/gim, '<h3 class="md-h3">$1</h3>');

  // Bold & Italic
  out = out.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
  out = out.replace(/\\*(.*?)\\*/g, '<em>$1</em>');

  // Unordered lists
  out = out.replace(/^\\s*-\\s+(.*$)/gim, '<li class="md-li">$1</li>');
  out = out.replace(/(<li class="md-li">.*<\\/li>)/gms, '<ul class="md-ul">$1</ul>');

  // Paragraphs
  const paragraphs = out.split(/\\n{2,}/);
  return paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<li')) return p;
    return '<p>' + p.replace(/\\n/g, '<br/>') + '</p>';
  }).join('');
}

// ─── DASHBOARD RENDERING ──────────────────────────────────────────────────────
function renderDashboard() {
  if (typeof KB === 'undefined' || !KB.length) return;

  // 1. Time-contextual Greeting
  const hour = new Date().getHours();
  const timeGreet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const greetEl = document.getElementById('dashTimeGreet');
  if (greetEl) greetEl.textContent = timeGreet + ' · Session Active';

  const studiedCount = Object.values(S.progress || {}).filter(p => p && p.completed).length;
  const overallMastery = calculateOverallMastery();
  const msgEl = document.getElementById('dashMsg');
  if (msgEl) {
    msgEl.textContent = studiedCount === 0 
      ? 'University-grade clinical study companion, multi-axial diagnostic framework, and structured examination workspace.'
      : \`You have reviewed \${studiedCount} of \${KB.length} chapters across 9 volumes. Curriculum mastery is at \${overallMastery}%.\`;
  }

  // 2. Metric Cluster
  const notes = lsGet('psa_notes', []);
  const dTopics = document.getElementById('d-topics');
  const dStudied = document.getElementById('d-studied');
  const dQuizzes = document.getElementById('d-quizzes');
  const dNotes = document.getElementById('d-notes');
  const dMastery = document.getElementById('d-mastery-pct');

  if (dTopics) dTopics.textContent = KB.length;
  if (dStudied) dStudied.textContent = studiedCount;
  if (dQuizzes) dQuizzes.textContent = S.quizCount || 0;
  if (dNotes) dNotes.textContent = notes.length;
  if (dMastery) dMastery.textContent = overallMastery + '%';

  // 3. Continue Where You Left Off Strip
  const lastChapter = KB.find(t => t.id === S.lastViewedTopicId) || KB[0];
  const contNameEl = document.getElementById('continueChapterName');
  const contMetaEl = document.getElementById('continueMeta');
  if (contNameEl) contNameEl.textContent = \`\${getChapterPlate(lastChapter)} \${lastChapter.name}\`;
  if (contMetaEl) {
    const isComp = S.progress[lastChapter.id]?.completed;
    const vol = getChapterVolume(lastChapter);
    contMetaEl.textContent = \`Volume \${vol} · \${lastChapter.category} · \${isComp ? 'Reviewed' : 'In Progress'}\`;
  }

  // 4. Today's Strategic Focus Row
  renderTodayPriorities();

  // 5. Multi-Hue Mastery Heatmap
  renderMasteryHeatmap();

  // 6. Vitrine Plate I Inspector Initialisation
  selectVitrineLobe('frontal');

  // 7. Curriculum Browser (Specimen Cards)
  renderSpecimenGrid(currentCurriculumVol, currentCurriculumSort);

  // 8. Daily Clinical Insight
  renderDailyInsight();

  // Populate navigation selectors
  populateSelects();
}

function resumeLastTopic() {
  const lastId = S.lastViewedTopicId || KB[0].id;
  openStudyTopic(lastId);
}

// ─── TODAY'S STRATEGIC FOCUS ENGINE ───────────────────────────────────────────
function getDueFlashcardsCount() {
  const reviews = S.flashcardReviews || {};
  const now = Date.now();
  let count = 0;
  Object.values(reviews).forEach(r => {
    if (r && r.dueDate && r.dueDate <= now) count++;
  });
  return count > 0 ? count : 5;
}

function getRecommendedChapterWithReason() {
  // 1. Unstudied chapter first
  const unstudied = KB.find(t => !S.progress[t.id] || !S.progress[t.id].completed);
  if (unstudied) {
    const vol = getChapterVolume(unstudied);
    return {
      topic: unstudied,
      tag: 'Curriculum Priority',
      reason: \`First unstudied chapter in Volume \${vol} (\${unstudied.category})\`
    };
  }
  // 2. Lowest mastery chapter
  const weak = getWeakTopics();
  if (weak.length > 0) {
    return {
      topic: weak[0].topic,
      tag: 'Reinforcement Needed',
      reason: \`Lowest mastery (\${weak[0].mastery}%) across your studied chapters\`
    };
  }
  // 3. Fallback
  return {
    topic: KB[0],
    tag: 'Foundation Review',
    reason: 'Review foundational models of adjustment and biopsychosocial assessment'
  };
}

function renderTodayPriorities() {
  // A. Due Flashcards
  const dueCount = getDueFlashcardsCount();
  const dueCountEl = document.getElementById('todayDueCount');
  const dueBadgeEl = document.getElementById('todayDueBadge');
  if (dueCountEl) dueCountEl.textContent = dueCount;
  if (dueBadgeEl) dueBadgeEl.textContent = dueCount > 0 ? \`\${dueCount} Due\` : 'Up to date';

  // B. Recommended Next
  const rec = getRecommendedChapterWithReason();
  const recTitleEl = document.getElementById('todayRecTitle');
  const recDescEl = document.getElementById('todayRecDesc');
  const recReasonEl = document.getElementById('todayRecReason');
  const recBtnEl = document.getElementById('todayRecBtn');
  if (recTitleEl) recTitleEl.textContent = rec.topic.name;
  if (recDescEl) recDescEl.textContent = \`\${rec.reason}. High-yield examination topic.\`;
  if (recReasonEl) recReasonEl.textContent = rec.tag;
  if (recBtnEl) recBtnEl.onclick = () => openStudyTopic(rec.topic.id);

  // C. Study Pulse Heatmap (12 weeks = 84 days)
  renderStudyPulse();
}

function renderStudyPulse() {
  const pulseGrid = document.getElementById('studyPulseGrid');
  if (!pulseGrid) return;
  pulseGrid.innerHTML = '';

  const now = new Date();
  const days = 84;
  const dayMs = 24 * 60 * 60 * 1000;

  const activityMap = {};
  Object.values(S.progress || {}).forEach(p => {
    if (p && p.lastViewed) {
      const dKey = new Date(p.lastViewed).toISOString().slice(0, 10);
      activityMap[dKey] = (activityMap[dKey] || 0) + 1;
    }
  });
  Object.values(S.flashcardReviews || {}).forEach(r => {
    if (r && r.lastReviewed) {
      const dKey = new Date(r.lastReviewed).toISOString().slice(0, 10);
      activityMap[dKey] = (activityMap[dKey] || 0) + 1;
    }
  });

  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(now.getTime() - i * dayMs).toISOString().slice(0, 10);
    if (activityMap[d]) streak++;
    else if (i > 0) break;
  }
  const streakEl = document.getElementById('studyPulseStreak');
  if (streakEl) streakEl.textContent = streak > 0 ? \`🔥 \${streak}-day streak\` : '🌱 Active Session';

  for (let i = days - 1; i >= 0; i--) {
    const dObj = new Date(now.getTime() - i * dayMs);
    const dStr = dObj.toISOString().slice(0, 10);
    const count = activityMap[dStr] || (i === 0 ? 1 : 0);
    let lvl = 0;
    if (count >= 7) lvl = 4;
    else if (count >= 4) lvl = 3;
    else if (count >= 2) lvl = 2;
    else if (count >= 1) lvl = 1;

    const cell = document.createElement('div');
    cell.className = \`pulse-dot lvl-\${lvl}\`;
    cell.setAttribute('title', \`\${dStr}: \${count} review activities\`);
    pulseGrid.appendChild(cell);
  }
}

// ─── MULTI-HUE MASTERY HEATMAP ────────────────────────────────────────────────
function renderMasteryHeatmap() {
  const container = document.getElementById('masteryHeatmap');
  const legend = document.getElementById('volumeLegend');
  if (!container) return;
  container.innerHTML = '';

  const volumes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  if (legend) {
    legend.innerHTML = volumes.map(v => {
      const info = getVolumeInfo(v);
      return \`<span class="vol-legend-chip"><span class="vol-dot" style="background:\${info.color}"></span>Vol \${v}</span>\`;
    }).join('');
  }

  volumes.forEach(volId => {
    const volInfo = getVolumeInfo(volId);
    const chapters = KB.filter(c => getChapterVolume(c) === volId);
    if (!chapters.length) return;

    const row = document.createElement('div');
    row.className = 'heatmap-volume-row';

    const label = document.createElement('div');
    label.className = 'heatmap-vol-label';
    label.innerHTML = \`<span class="vol-dot" style="background:\${volInfo.color}"></span><strong>Vol \${volId}</strong> <span class="vol-subname">\${volInfo.name}</span>\`;
    row.appendChild(label);

    const cellsWrap = document.createElement('div');
    cellsWrap.className = 'heatmap-cells-group';

    chapters.forEach(c => {
      const mastery = calculateTopicMastery(c.id);
      const cell = document.createElement('button');
      cell.className = 'mastery-cell';
      const plate = getChapterPlate(c);
      cell.setAttribute('aria-label', \`\${plate} \${c.name}: \${mastery}% mastery\`);
      cell.setAttribute('title', \`[\${plate}] \${c.name} — \${mastery}% Mastery (Click to study)\`);
      
      const alpha = 0.22 + (mastery / 100) * 0.78;
      cell.style.backgroundColor = volInfo.color;
      cell.style.opacity = alpha;

      cell.onclick = () => openStudyTopic(c.id);
      cellsWrap.appendChild(cell);
    });

    row.appendChild(cellsWrap);
    container.appendChild(row);
  });
}

// ─── VITRINE LOBE INSPECTOR ───────────────────────────────────────────────────
function selectVitrineLobe(lobeKey, btn) {
  document.querySelectorAll('.btn-lobe-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const activeBtn = document.querySelector(\`.btn-lobe-chip[onclick*="'\${lobeKey}'"]\`);
    if (activeBtn) activeBtn.classList.add('active');
  }

  const data = (window.BRAIN_ANATOMY_DATA && window.BRAIN_ANATOMY_DATA[lobeKey]) || {};
  const descEl = document.getElementById('vitrineLobeDesc');
  if (descEl && data) {
    descEl.innerHTML = \`<strong>\${data.name || lobeKey} (\${data.tag || ''}):</strong> \${data.role || ''} \${data.clinical || ''}\`;
  }
}

// ─── CURRICULUM SPECIMENS BROWSER ─────────────────────────────────────────────
const filterTopics = function(vol, btn) { filterCurriculum(vol, btn); };

function filterCurriculum(vol, btn) {
  currentCurriculumVol = vol;
  document.querySelectorAll('#volumeTabsFilter .vol-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
  renderSpecimenGrid(vol, currentCurriculumSort);
}

function sortCurriculum(sortVal) {
  currentCurriculumSort = sortVal;
  renderSpecimenGrid(currentCurriculumVol, sortVal);
}

function renderSpecimenGrid(volFilter = 'all', sortBy = 'default') {
  const grid = document.getElementById('topicsGrid');
  if (!grid || !KB) return;
  grid.innerHTML = '';

  let list = volFilter === 'all' ? [...KB] : KB.filter(c => getChapterVolume(c) === volFilter);

  // Sorting
  if (sortBy === 'weak') {
    list.sort((a, b) => calculateTopicMastery(a.id) - calculateTopicMastery(b.id));
  } else if (sortBy === 'unstudied') {
    list.sort((a, b) => {
      const compA = S.progress[a.id]?.completed ? 1 : 0;
      const compB = S.progress[b.id]?.completed ? 1 : 0;
      return compA - compB;
    });
  } else if (sortBy === 'time') {
    list.sort((a, b) => parseInt(a.readTime || '10') - parseInt(b.readTime || '10'));
  } else if (sortBy === 'alpha') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  list.forEach((chapter, i) => {
    const vol = getChapterVolume(chapter);
    const volInfo = getVolumeInfo(vol);
    const mastery = calculateTopicMastery(chapter.id);
    const isCompleted = S.progress[chapter.id]?.completed;
    const plate = getChapterPlate(chapter);
    const dsmCode = chapter.dsmCode || (chapter.codes && chapter.codes.note) || 'DSM-5-TR';

    const card = document.createElement('article');
    card.className = 'topic-card specimen-card';
    card.style.borderLeft = \`4px solid \${volInfo.color}\`;
    card.style.animationDelay = (i * 0.02) + 's';

    card.innerHTML = \`
      <div class="tc-top">
        <span class="tc-eyebrow" style="color:\${volInfo.color}">VOL \${vol} · PLATE \${plate}</span>
        <span class="tc-mastery-tag \${mastery >= 70 ? 'high' : ''}">\${mastery}% Mastery</span>
      </div>
      <div class="tc-code-row">
        <span class="tc-code-chip mono">\${dsmCode}</span>
        <span class="tc-read-time">\${chapter.readTime || '12 min read'}</span>
      </div>
      <h3 class="tc-name">\${chapter.name}</h3>
      <p class="tc-preview">\${chapter.subtitle || chapter.preview || (chapter.definition ? chapter.definition.slice(0, 110) + '…' : '')}</p>
      <div class="tc-progress"><div class="tc-progress-fill" style="width:\${mastery}%;background:\${volInfo.color}"></div></div>
      <div class="tc-actions">
        <button class="btn btn-primary btn-sm" onclick="openStudyTopic('\${chapter.id}')">
          <span>\${isCompleted ? 'Review Chapter' : 'Study Chapter'}</span>
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-chevron-right"></use></svg>
        </button>
        <button class="btn btn-outline btn-sm" onclick="openFlashcardsTopic('\${chapter.id}')">
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-cards"></use></svg>
          <span>Cards</span>
        </button>
      </div>\`;
    grid.appendChild(card);
  });
}

function renderDailyInsight() {
  const facts = window.DAILY_FACTS || [];
  if (!facts.length) return;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const fact = facts[dayOfYear % facts.length] || facts[0];

  const titleEl = document.getElementById('factTitle');
  const textEl = document.getElementById('factText');
  const srcEl = document.getElementById('factSource');
  if (titleEl) titleEl.textContent = fact.title || 'Clinical Fact';
  if (textEl) textEl.textContent = fact.text || fact.fact || '';
  if (srcEl) srcEl.textContent = fact.source || 'DSM-5-TR';
}

function populateSelects() {
  if (typeof KB === 'undefined') return;

  // Study Selector
  const sel = document.getElementById('topicSelect');
  if (sel) {
    sel.innerHTML = KB.map((t, i) => \`<option value="\${i}">[\${getChapterPlate(t)}] \${t.name}</option>\`).join('');
    if (S.studyTopicIdx !== undefined) sel.value = S.studyTopicIdx;
  }

  // Flashcards Selector
  const fcSel = document.getElementById('fcTopicSelect');
  if (fcSel) {
    fcSel.innerHTML = '<option value="all">— All 43 Chapters Combined —</option>'
      + KB.map(t => \`<option value="\${t.id}">[\${getChapterPlate(t)}] \${t.name}</option>\`).join('');
  }

  // Quiz Selector
  const qSel = document.getElementById('quizTopicSel');
  if (qSel) {
    const cats = [...new Set(KB.map(t => t.category))];
    qSel.innerHTML = '<option value="mixed">All Curriculum Topics (Mixed)</option>'
      + cats.map(c => \`<option value="\${c}">\${c}</option>\`).join('');
  }
}

// ─── STUDY READER ENGINE ──────────────────────────────────────────────────────
function openStudyTopic(id) {
  const idx = KB.findIndex(t => t.id === id);
  if (idx < 0) return;
  loadStudyTopic(idx);
  navigate('study');
}

function loadStudyTopic(idx) {
  idx = parseInt(idx, 10);
  if (isNaN(idx) || idx < 0 || idx >= KB.length) idx = 0;
  S.studyTopicIdx = idx;
  S.currentTopic = KB[idx];
  S.lastViewedTopicId = S.currentTopic.id;

  // Track viewing progress
  if (!S.progress[S.currentTopic.id]) {
    S.progress[S.currentTopic.id] = { completed: false, lastViewed: Date.now(), confidence: 2 };
  } else {
    S.progress[S.currentTopic.id].lastViewed = Date.now();
  }
  saveState();

  // Populate UI
  updateReaderHeader();
  renderStudyRail();
  renderStudyContent();
  loadMarginaliaNotes(S.currentTopic.id);
  renderMarginaliaKeyTerms();
  renderMarginaliaRefs();

  // Sync topic dropdown
  const sel = document.getElementById('topicSelect');
  if (sel) sel.value = idx;

  // Reset scroll to top
  const art = document.getElementById('studyArticle');
  if (art) art.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update hairline reading progress
  updateReaderHairline();
}

function updateReaderHeader() {
  const c = S.currentTopic;
  if (!c) return;

  const vol = getChapterVolume(c);
  const volInfo = getVolumeInfo(vol);
  const plate = getChapterPlate(c);
  const dsm = c.dsmCode || (c.codes && c.codes.note) || 'DSM-5-TR';
  const icd = c.icdCode || (c.codes && c.codes.icd11 && c.codes.icd11.length ? 'ICD-11: ' + c.codes.icd11.join(', ') : 'ICD-11');

  const bVol = document.getElementById('studyBreadVol');
  const bPlate = document.getElementById('studyBreadPlate');
  const rTime = document.getElementById('studyReadTime');
  const dsmEl = document.getElementById('studyDsmCode');
  const icdEl = document.getElementById('studyIcdCode');

  if (bVol) bVol.textContent = \`Volume \${vol} · \${volInfo.name}\`;
  if (bPlate) bPlate.textContent = \`Plate \${plate}\`;
  if (rTime) rTime.textContent = c.readTime || '12 min read';
  if (dsmEl) dsmEl.textContent = dsm;
  if (icdEl) icdEl.textContent = icd;
}

function changeStudyTopic(dir) {
  const newIdx = S.studyTopicIdx + dir;
  if (newIdx >= 0 && newIdx < KB.length) {
    loadStudyTopic(newIdx);
  }
}

function setStudyMode(mode) {
  S.studyMode = mode;
  document.getElementById('modeBtnDeep')?.classList.toggle('active', mode === 'deep');
  document.getElementById('modeBtnDeep')?.setAttribute('aria-checked', mode === 'deep');

  document.getElementById('modeBtnQuick')?.classList.toggle('active', mode === 'quick');
  document.getElementById('modeBtnQuick')?.setAttribute('aria-checked', mode === 'quick');

  document.getElementById('modeBtnExam')?.classList.toggle('active', mode === 'exam');
  document.getElementById('modeBtnExam')?.setAttribute('aria-checked', mode === 'exam');

  renderStudyContent();
}

function toggleFocusMode() {
  const layout = document.getElementById('study3ColLayout');
  const btn = document.getElementById('studyFocusBtn');
  if (!layout) return;
  const isFocus = layout.classList.toggle('focus-mode-active');
  if (btn) btn.classList.toggle('active', isFocus);
  toast(isFocus ? 'Focus Mode activated. Rails collapsed.' : 'Focus Mode deactivated.', 'info');
}

function toggleTopicStudied(id) {
  const c = id ? KB.find(k => k.id === id) : S.currentTopic;
  if (!c) return;
  if (!S.progress[c.id]) {
    S.progress[c.id] = { completed: true, lastViewed: Date.now(), confidence: 4 };
  } else {
    S.progress[c.id].completed = !S.progress[c.id].completed;
  }
  saveState();
  updateRailMarkBtn();
  toast(S.progress[c.id].completed ? \`Chapter '\${c.name}' marked as reviewed.\` : 'Chapter marked as unreviewed.', 'success');
}

const toggleTopicCompletion = function(id) { toggleTopicStudied(id); };

function updateRailMarkBtn() {
  const c = S.currentTopic;
  if (!c) return;
  const btn = document.getElementById('railMarkStudiedBtn');
  const txt = document.getElementById('railMarkStudiedText');
  const isComp = S.progress[c.id]?.completed;
  if (btn) btn.classList.toggle('active', !!isComp);
  if (txt) txt.textContent = isComp ? '✓ Reviewed' : 'Mark Reviewed';
}

function startTopicCards() {
  const c = S.currentTopic;
  if (!c) return;
  openFlashcardsTopic(c.id);
}

// ─── STUDY RAIL TOC ───────────────────────────────────────────────────────────
function renderStudyRail() {
  const railNav = document.getElementById('railNav');
  if (!railNav) return;

  const sections = [
    { id: 'sec-1', label: '§1 Definition' },
    { id: 'sec-2', label: '§2 Classification' },
    { id: 'sec-3', label: '§3 Diagnostic Criteria' },
    { id: 'sec-4', label: '§4 Epidemiology & Course' },
    { id: 'sec-5', label: '§5 Etiology Tri-Panel' },
    { id: 'sec-6', label: '§6 Neurobiology' },
    { id: 'sec-7', label: '§7 Differential Diagnosis' },
    { id: 'sec-8', label: '§8 Treatments & Evidence' },
    { id: 'sec-9', label: '§9 Cultural Context' },
    { id: 'sec-10', label: '§10 Case File & Myths' },
    { id: 'sec-11', label: '§11 Examination Hub' },
    { id: 'sec-12', label: '§12 Academic References' }
  ];

  railNav.innerHTML = sections.map((s, i) => \`
    <a href="#\${s.id}" class="rail-item \${i === 0 ? 'active' : ''}" onclick="scrollToSection('\${s.id}', event)">
      <span class="rail-tick"></span>
      <span class="rail-label">\${s.label}</span>
    </a>
  \`).join('');

  updateRailMarkBtn();
}

function scrollToSection(secId, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(secId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.rail-item').forEach(r => r.classList.remove('active'));
    const link = document.querySelector(\`.rail-item[href="#\${secId}"]\`);
    if (link) link.classList.add('active');
  }
}

// ─── 12-SECTION ARTICLE CONTENT BUILDER ────────────────────────────────────────
function renderStudyContent() {
  const c = S.currentTopic;
  const container = document.getElementById('studyContent');
  if (!c || !container) return;

  const mode = S.studyMode || 'deep';
  const vol = getChapterVolume(c);
  const volInfo = getVolumeInfo(vol);
  const plate = getChapterPlate(c);
  const dsmCode = c.dsmCode || (c.codes && c.codes.note) || 'DSM-5-TR';
  const icdCode = c.icdCode || (c.codes && c.codes.icd11 && c.codes.icd11.length ? 'ICD-11: ' + c.codes.icd11.join(', ') : 'ICD-11 Standard');

  let html = '';

  // 1. Definition (§1)
  const defText = c.definition || (c.sections && c.sections.definition) || '';
  html += \`
    <section id="sec-1" class="reader-section">
      <div class="section-badge-eyebrow">§1 CORE CLINICAL DEFINITION</div>
      <div class="def-callout">
        <h1 class="chapter-article-h1">\${c.name}</h1>
        <div class="def-dropcap-prose">\${renderMarkdown(defText)}</div>
      </div>
    </section>
  \`;

  // 2. Classification (§2)
  html += \`
    <section id="sec-2" class="reader-section">
      <div class="section-badge-eyebrow">§2 DIAGNOSTIC CLASSIFICATION</div>
      <div class="classification-panel">
        <div class="class-chip-pair">
          <div class="class-chip-item">
            <span class="class-auth-label">DSM-5-TR DIAGNOSTIC CODE</span>
            <span class="class-code-val mono">\${dsmCode}</span>
          </div>
          <div class="class-chip-item">
            <span class="class-auth-label">WHO ICD-11 CLASSIFICATION</span>
            <span class="class-code-val mono">\${icdCode}</span>
          </div>
        </div>
        <p class="class-narrative">\${renderMarkdown(c.preview || 'Multi-axial diagnostic coding aligned with current American Psychiatric Association (APA) and World Health Organization (WHO) international disease classifications.')}</p>
      </div>
    </section>
  \`;

  // 3. Clinical Criteria Checklist (§3)
  const criteriaList = Array.isArray(c.criteria) ? c.criteria : ((c.criteria && c.criteria.list) || c.symptoms || []);
  const criteriaNotes = (c.criteria && c.criteria.notes) || '';
  const checkedObj = (S.criteriaChecked && S.criteriaChecked[c.id]) || {};

  html += \`
    <section id="sec-3" class="reader-section">
      <div class="section-badge-eyebrow">§3 DIAGNOSTIC CRITERIA CHECKLIST</div>
      <div class="criteria-checklist-card">
        <div class="card-eyebrow">OPERATIONALIZED CLINICAL CRITERIA</div>
        <p class="criteria-intro">Interactive diagnostic verification. Select observed clinical features:</p>
        <div class="criteria-items-list">
          \${criteriaList.map((crit, idx) => {
            const isChecked = !!checkedObj[idx];
            return \`
              <label class="criteria-item \${isChecked ? 'checked' : ''}">
                <input type="checkbox" \${isChecked ? 'checked' : ''} onchange="toggleCriteriaCheck('\${c.id}', \${idx}, this.checked)" />
                <span class="criteria-text">\${crit}</span>
              </label>
            \`;
          }).join('')}
        </div>
        \${criteriaNotes ? \`<div class="criteria-notes"><svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-info"></use></svg><span>\${criteriaNotes}</span></div>\` : ''}
      </div>
    </section>
  \`;

  // If mode is 'quick', only render §1, §2, §3 and §8 Treatments
  if (mode === 'quick') {
    html += renderSectionTreatments(c);
    container.innerHTML = html;
    autoLinkGlossary(container);
    return;
  }

  // 4. Epidemiology & Course (§4)
  const epiText = typeof c.epidemiology === 'string' ? c.epidemiology : (c.epidemiology && c.epidemiology.text) || c.explanation || '';
  html += \`
    <section id="sec-4" class="reader-section">
      <div class="section-badge-eyebrow">§4 EPIDEMIOLOGY &amp; CLINICAL COURSE</div>
      <div class="epidemiology-grid">
        <div class="epi-card">
          <span class="epi-label">12-MONTH / LIFETIME PREVALENCE</span>
          <span class="epi-val">\${(c.epidemiology && c.epidemiology.prevalence) || 'Variable across clinical demographics'}</span>
        </div>
        <div class="epi-card">
          <span class="epi-label">TYPICAL ONSET</span>
          <span class="epi-val">\${(c.epidemiology && c.epidemiology.onset) || 'Adolescence / Early Adulthood'}</span>
        </div>
        <div class="epi-card">
          <span class="epi-label">LONGITUDINAL COURSE</span>
          <span class="epi-val">\${(c.epidemiology && c.epidemiology.course) || 'Episodic / Chronic recurrent'}</span>
        </div>
      </div>
      <div class="epi-prose">\${renderMarkdown(epiText)}</div>
    </section>
  \`;

  // 5. Etiology Tri-Panel (§5)
  const etioBio = (c.etiology && (c.etiology.biological || c.etiology.bio)) || 'Genetic predispositions, neuroendocrine dysregulation, and neurochemical pathways.';
  const etioPsycho = (c.etiology && (c.etiology.psychological || c.etiology.psycho)) || 'Cognitive appraisal schemas, conditioned emotional responses, and psychodynamic mechanisms.';
  const etioSocio = (c.etiology && (c.etiology.sociocultural || c.etiology.socio)) || 'Interpersonal stressors, cultural idioms of distress, socio-economic factors, and family systems.';

  html += \`
    <section id="sec-5" class="reader-section">
      <div class="section-badge-eyebrow">§5 BIOPSYCHOSOCIAL ETIOLOGY TRI-PANEL</div>
      <div class="etiology-tri-panel">
        <div class="etio-tabs-header" role="tablist">
          <button class="etio-tab active" onclick="selectEtiologyTab('bio', this)" role="tab" aria-selected="true">Biological Factors</button>
          <button class="etio-tab" onclick="selectEtiologyTab('psycho', this)" role="tab" aria-selected="false">Psychological Dynamics</button>
          <button class="etio-tab" onclick="selectEtiologyTab('socio', this)" role="tab" aria-selected="false">Sociocultural Context</button>
        </div>
        <div class="etio-tab-content active" id="etio-tab-bio">
          <div class="etio-body">\${renderMarkdown(etioBio)}</div>
        </div>
        <div class="etio-tab-content" id="etio-tab-psycho">
          <div class="etio-body">\${renderMarkdown(etioPsycho)}</div>
        </div>
        <div class="etio-tab-content" id="etio-tab-socio">
          <div class="etio-body">\${renderMarkdown(etioSocio)}</div>
        </div>
      </div>
    </section>
  \`;

  // 6. Functional Neurobiology (§6)
  const neuroNote = (c.neuro && (c.neuro.note || c.neuro.summary)) || (typeof c.neuro === 'string' ? c.neuro : 'Cortico-striatal and limbic circuit alterations associated with this presentation.');
  const brainRegions = (c.neuro && (c.neuro.regions || c.neuro.brainRegions)) || ['frontal', 'temporal'];

  html += \`
    <section id="sec-6" class="reader-section">
      <div class="section-badge-eyebrow">§6 FUNCTIONAL NEUROBIOLOGY &amp; NETWORKS</div>
      <div class="neurobiology-card">
        <p class="neuro-summary">\${renderMarkdown(neuroNote)}</p>
        <div class="neuro-regions-row">
          <span class="neuro-region-label">Implicated Neuroanatomical Structures:</span>
          <div class="neuro-chips-wrap">
            \${brainRegions.map(r => \`<button class="neuro-region-pill" onclick="openBrainModal('\${r.toLowerCase()}')">\${r.toUpperCase()} →</button>\`).join('')}
          </div>
        </div>
      </div>
    </section>
  \`;

  // 7. Differential Diagnosis (§7)
  const diffList = c.differential || [];
  html += \`
    <section id="sec-7" class="reader-section">
      <div class="section-badge-eyebrow">§7 DIFFERENTIAL DIAGNOSIS COMPARISON</div>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Potential Differential Presentation</th>
              <th>Distinguishing Clinical Hallmarks (Rule-In / Rule-Out)</th>
            </tr>
          </thead>
          <tbody>
            \${diffList.length ? diffList.map(d => \`
              <tr>
                <td class="compare-disorder"><strong>\${d.vs || d.disorder || d.name}</strong></td>
                <td>\${renderMarkdown(d.distinguishingFeature || d.distinction || d.ruleOut || '')}</td>
              </tr>
            \`).join('') : \`
              <tr>
                <td class="compare-disorder"><strong>Adjustment Disorder</strong></td>
                <td>Identifiable psychosocial stressor with symptoms resolving within 6 months of stressor termination.</td>
              </tr>
            \`}
          </tbody>
        </table>
      </div>
    </section>
  \`;

  // 8. Evidence-Based Treatments (§8)
  html += renderSectionTreatments(c);

  // 9. Cultural Context (§9)
  const cult = (c.sections && c.sections.culture) || c.culture || {};
  html += \`
    <section id="sec-9" class="reader-section">
      <div class="section-badge-eyebrow">§9 CULTURAL &amp; CONTEXTUAL FORMULATION</div>
      <div class="culture-grid">
        <div class="culture-card india-lens">
          <div class="card-eyebrow">INDIA &amp; SOUTH ASIAN CLINICAL LENS</div>
          <div class="culture-body">\${renderMarkdown(cult.indiaLens || 'Somatic idioms of distress (e.g. gas, heaviness, weakness) are common cultural presentations. Family involvement in treatment and navigating societal stigma are paramount.')}</div>
        </div>
        <div class="culture-card cross-cultural">
          <div class="card-eyebrow">CROSS-CULTURAL DSM-5-TR / ICD-11 CONCEPTS</div>
          <div class="culture-body">\${renderMarkdown(cult.crossCultural || 'Cultural concepts of distress (cultural idioms, explanations, and syndromes) must be evaluated through the Cultural Formulation Interview (CFI).')}</div>
        </div>
      </div>
    </section>
  \`;

  // 10. Case File & Myth vs Fact (§10)
  const caseF = c.caseFile || {};
  const myths = c.myths || [];
  const caseText = caseF.text || caseF.vignette || '';
  const caseAnalysis = caseF.analysis || (caseF.questions && caseF.questions.join('<br/><br/>')) || '';

  html += \`
    <section id="sec-10" class="reader-section">
      <div class="section-badge-eyebrow">§10 CLINICAL CASE FILE &amp; MYTH VS FACT</div>
      \${caseText ? \`
        <div class="case-file-card">
          <div class="case-file-header">
            <span class="card-eyebrow">CONFIDENTIAL CLINICAL CASE VIGNETTE</span>
            <span class="badge-term">\${caseF.title || 'Case Presentation'}</span>
          </div>
          <div class="case-vignette-text">\${renderMarkdown(caseText)}</div>
          \${caseAnalysis ? \`
            <div class="case-analysis-block">
              <strong>Clinical Assessment &amp; Formulation Questions:</strong>
              <div>\${renderMarkdown(caseAnalysis)}</div>
            </div>
          \` : ''}
        </div>
      \` : ''}
      \${myths.length ? \`
        <div class="myths-container">
          <div class="card-eyebrow" style="margin-bottom:var(--sp-2)">CLINICAL DEBUNKING · MYTH ⇄ FACT</div>
          <div class="myths-grid">
            \${myths.map((m, idx) => \`
              <div class="myth-fact-card" onclick="flipMythCard(this)" tabindex="0" role="button" aria-label="Flip myth and fact card">
                <div class="myth-face myth-side">
                  <div class="myth-tag red">MYTH</div>
                  <p>\${m.myth}</p>
                  <span class="flip-hint">Click card to reveal fact ↷</span>
                </div>
                <div class="myth-face fact-side">
                  <div class="myth-tag green">CLINICAL FACT</div>
                  <p>\${m.fact}</p>
                  <span class="flip-hint">Click card to flip ↷</span>
                </div>
              </div>
            \`).join('')}
          </div>
        </div>
      \` : ''}
    </section>
  \`;

  // 11. University Examination Hub (§11)
  html += renderSectionExamHub(c);

  // 12. References & Citations (§12)
  html += renderSectionReferences(c);

  container.innerHTML = html;

  // Auto-link glossary terms in prose
  autoLinkGlossary(container);
}

function renderSectionTreatments(c) {
  const tList = (c && c.treatment && Array.isArray(c.treatment)) ? c.treatment : [];
  const tText = (c && typeof c.treatment === 'string') ? c.treatment : '';

  return \`
    <section id="sec-8" class="reader-section">
      <div class="section-badge-eyebrow">§8 EVIDENCE-BASED INTERVENTIONS</div>
      <div class="treatment-table-wrap">
        <table class="treatment-table">
          <thead>
            <tr>
              <th>Treatment Modality</th>
              <th>Evidence Grade</th>
              <th>Mechanism of Action &amp; Efficacy</th>
            </tr>
          </thead>
          <tbody>
            \${tList.length ? tList.map(t => \`
              <tr>
                <td class="treat-name"><strong>\${t.modality || t.name}</strong></td>
                <td><span class="pill-evidence \${t.evidence || 'moderate'}">\${(t.evidence || 'moderate').toUpperCase()}</span></td>
                <td>\${renderMarkdown(t.description || t.mechanism || '')}</td>
              </tr>
            \`).join('') : \`
              <tr>
                <td class="treat-name"><strong>Cognitive Behavioral Therapy (CBT)</strong></td>
                <td><span class="pill-evidence strong">STRONG</span></td>
                <td>Cognitive restructuring, behavioral experiments, and exposure protocols. \${renderMarkdown(tText)}</td>
              </tr>
              <tr>
                <td class="treat-name"><strong>Pharmacotherapy (First-Line)</strong></td>
                <td><span class="pill-evidence strong">STRONG</span></td>
                <td>Selective Serotonin Reuptake Inhibitors (SSRIs) / dual reuptake inhibitors per psychiatric consultation.</td>
              </tr>
            \`}
          </tbody>
        </table>
      </div>
    </section>
  \`;
}

function renderSectionExamHub(c) {
  const exam = c.exam || {};
  const keywords = exam.keyTerms || exam.keywords || c.keyPoints || [];
  const checklist = exam.structure || exam.checklist || [];

  return \`
    <section id="sec-11" class="reader-section">
      <div class="section-badge-eyebrow">§11 UNIVERSITY EXAMINATION HUB</div>
      <div class="exam-hub-card">
        <div class="exam-hub-header">
          <div>
            <div class="card-eyebrow">HIGH-YIELD EXAMINATION REVISION</div>
            <h3 class="exam-hub-title">Model University Answers &amp; Marking Rubric</h3>
          </div>
          <span class="badge-source">\${exam.marks ? exam.marks + ' Marks' : '15-Mark & 5-Mark Benchmarks'}</span>
        </div>

        <div class="exam-accordion">
          <!-- Item 1: 15-Mark Model Answer -->
          <div class="exam-acc-item active" id="acc-15mark">
            <button class="exam-acc-header" onclick="toggleExamHubItem('acc-15mark')">
              <span>15-Mark Comprehensive Model Essay (600–800 Words Target)</span>
              <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
            </button>
            <div class="exam-acc-body">
              <div class="model-essay-prose">\${renderMarkdown(exam.modelAnswer || 'Discuss the diagnostic criteria, etiology, and evidence-based interventions for this clinical presentation according to DSM-5-TR standards.')}</div>
            </div>
          </div>

          <!-- Item 2: 5-Mark Concise Note -->
          <div class="exam-acc-item" id="acc-5mark">
            <button class="exam-acc-header" onclick="toggleExamHubItem('acc-5mark')">
              <span>5-Mark Concise Short Revision Note (170–220 Words Target)</span>
              <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
            </button>
            <div class="exam-acc-body">
              <div class="model-essay-prose">\${renderMarkdown(exam.shortNote || c.summary || '')}</div>
            </div>
          </div>

          <!-- Item 3: Keywords to Hit -->
          \${keywords.length ? \`
            <div class="exam-acc-item" id="acc-keywords">
              <button class="exam-acc-header" onclick="toggleExamHubItem('acc-keywords')">
                <span>Examiner High-Yield Keywords Checklist</span>
                <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
              </button>
              <div class="exam-acc-body">
                <div class="keywords-cloud">
                  \${keywords.map(kw => \`<span class="kw-chip">✓ \${kw}</span>\`).join('')}
                </div>
              </div>
            </div>
          \` : ''}

          <!-- Item 4: Rubric Structure -->
          \${checklist.length ? \`
            <div class="exam-acc-item" id="acc-rubric">
              <button class="exam-acc-header" onclick="toggleExamHubItem('acc-rubric')">
                <span>Self-Assessment Marking Rubric</span>
                <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
              </button>
              <div class="exam-acc-body">
                <ul class="rubric-list">
                  \${checklist.map(item => \`<li>\${item}</li>\`).join('')}
                </ul>
              </div>
            </div>
          \` : ''}
        </div>
      </div>
    </section>
  \`;
}

function renderSectionReferences(c) {
  const refs = c.refs || [];
  const refMap = window.REFERENCES || {};

  return \`
    <section id="sec-12" class="reader-section">
      <div class="section-badge-eyebrow">§12 ACADEMIC REFERENCES &amp; CITATIONS</div>
      <div class="references-list-card">
        <div class="card-eyebrow">VERIFIED APA-7 REFERENCES</div>
        <ol class="apa-refs-list">
          \${refs.map(rKey => {
            const entry = refMap[rKey];
            if (!entry) return \`<li><strong>\${rKey}</strong></li>\`;
            return \`
              <li id="ref-\${rKey}" class="apa-ref-item">
                <span class="ref-citation">\${entry.authors} (\${entry.year}). <em>\${entry.title}</em>. \${entry.journal || entry.publisher || ''}.</span>
                \${entry.doi ? \`<a href="https://doi.org/\${entry.doi}" target="_blank" rel="noopener noreferrer" class="ref-doi-link">doi:\${entry.doi} ↗</a>\` : ''}
              </li>
            \`;
          }).join('')}
        </ol>
      </div>
    </section>
  \`;
}

// ─── MARGINALIA & INTERACTION CONTROLLERS ─────────────────────────────────────
function selectEtiologyTab(tabName, btn) {
  document.querySelectorAll('.etio-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.etio-tab-content').forEach(c => c.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  } else {
    const defaultBtn = document.querySelector(\`.etio-tab[onclick*="'\${tabName}'"]\`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }
  const target = document.getElementById('etio-tab-' + tabName);
  if (target) target.classList.add('active');
}

function flipMythCard(card) {
  card.classList.toggle('flipped');
}

function toggleExamHubItem(itemId) {
  const el = document.getElementById(itemId);
  if (el) el.classList.toggle('active');
}

function toggleCriteriaCheck(chapterId, critIdx, isChecked) {
  if (!S.criteriaChecked) S.criteriaChecked = {};
  if (!S.criteriaChecked[chapterId]) S.criteriaChecked[chapterId] = {};
  S.criteriaChecked[chapterId][critIdx] = isChecked;
  saveState();
}

let autoSaveTimer = null;
function debounceAutoSaveNote() {
  const statusEl = document.getElementById('noteSaveStatus');
  if (statusEl) statusEl.textContent = 'Saving…';
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    saveCurrentTopicNote();
  }, 600);
}

function saveCurrentTopicNote() {
  const c = S.currentTopic;
  if (!c) return;
  const textarea = document.getElementById('topicNotesEditor');
  if (!textarea) return;
  const text = textarea.value.trim();
  const notes = lsGet('psa_notes', []);

  const existingIdx = notes.findIndex(n => n.topic === c.id);
  if (existingIdx >= 0) {
    if (text) {
      notes[existingIdx].body = text;
      notes[existingIdx].date = new Date().toLocaleDateString('en-IN');
    } else {
      notes.splice(existingIdx, 1);
    }
  } else if (text) {
    notes.unshift({
      id: Date.now().toString(),
      title: c.name + ' Notes',
      body: text,
      topic: c.id,
      topicName: c.name,
      date: new Date().toLocaleDateString('en-IN'),
      pinned: false
    });
  }

  lsSet('psa_notes', notes);
  const statusEl = document.getElementById('noteSaveStatus');
  if (statusEl) statusEl.textContent = 'Auto-saved';
}

function loadMarginaliaNotes(chapterId) {
  const notes = lsGet('psa_notes', []);
  const note = notes.find(n => n.topic === chapterId);
  const textarea = document.getElementById('topicNotesEditor');
  const statusEl = document.getElementById('noteSaveStatus');
  if (textarea) textarea.value = note ? note.body : '';
  if (statusEl) statusEl.textContent = note ? 'Saved' : 'Auto-saved';
}

function renderMarginaliaKeyTerms() {
  const c = S.currentTopic;
  const wrap = document.getElementById('marginaliaKeyTerms');
  if (!wrap || !c) return;
  const terms = (c.exam && c.exam.keyTerms) || c.keyTerms || c.keyPoints || [];
  wrap.innerHTML = terms.map(t => \`<span class="term-pill" onclick="searchFromTerm('\${t}')">\${t}</span>\`).join('');
}

function renderMarginaliaRefs() {
  const c = S.currentTopic;
  const wrap = document.getElementById('marginaliaRefs');
  if (!wrap || !c) return;
  const refs = c.refs || [];
  wrap.innerHTML = refs.map(r => \`<a href="#ref-\${r}" class="marginalia-ref-chip">[\${r}]</a>\`).join('');
}

function searchFromTerm(term) {
  openCommandPalette(term);
}

function openNotesWorkspace() {
  navigate('notes');
}

// ─── READING PROGRESS HAIRLINE ────────────────────────────────────────────────
function updateReaderHairline() {
  const fill = document.getElementById('readerHairlineFill');
  if (!fill) return;

  const scrollHandler = () => {
    const el = document.documentElement;
    const total = el.scrollHeight - el.clientHeight;
    const pct = total > 0 ? (el.scrollTop / total) * 100 : 0;
    fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
  };

  window.removeEventListener('scroll', scrollHandler);
  window.addEventListener('scroll', scrollHandler, { passive: true });
}

// ─── GLOSSARY AUTO-LINKING ENGINE ─────────────────────────────────────────────
let glossaryPopoverEl = null;

function autoLinkGlossary(container) {
  const glossary = window.GLOSSARY || [];
  if (!container || !glossary.length) return;

  const terms = [...glossary].filter(g => g.term && g.term.length >= 4)
    .sort((a, b) => b.term.length - a.term.length);

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (['h1', 'h2', 'h3', 'h4', 'a', 'button', 'code', 'pre', 'kbd', 'textarea', 'input'].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.classList.contains('glossary-term')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodesToProcess = [];
  while (walker.nextNode()) {
    nodesToProcess.push(walker.currentNode);
  }

  let linkedCount = 0;
  const maxLinks = 12;

  terms.forEach(termObj => {
    if (linkedCount >= maxLinks) return;
    const term = termObj.term;
    const regex = new RegExp(\`\\\\b(\${term})\\\\b\`, 'i');

    for (let i = 0; i < nodesToProcess.length; i++) {
      const node = nodesToProcess[i];
      if (!node.nodeValue) continue;
      const match = regex.exec(node.nodeValue);
      if (match) {
        const span = document.createElement('span');
        const before = node.nodeValue.slice(0, match.index);
        const matchedText = match[0];
        const after = node.nodeValue.slice(match.index + matchedText.length);

        const linkEl = document.createElement('span');
        linkEl.className = 'glossary-term';
        linkEl.setAttribute('data-term', term);
        linkEl.setAttribute('tabindex', '0');
        linkEl.textContent = matchedText;

        linkEl.addEventListener('mouseenter', (e) => showGlossaryPopover(e.target, termObj));
        linkEl.addEventListener('mouseleave', hideGlossaryPopover);
        linkEl.addEventListener('focus', (e) => showGlossaryPopover(e.target, termObj));
        linkEl.addEventListener('blur', hideGlossaryPopover);

        const parent = node.parentNode;
        if (!parent) continue;
        parent.insertBefore(document.createTextNode(before), node);
        parent.insertBefore(linkEl, node);
        parent.insertBefore(document.createTextNode(after), node);
        parent.removeChild(node);

        linkedCount++;
        break;
      }
    }
  });
}

function showGlossaryPopover(targetEl, termObj) {
  hideGlossaryPopover();

  glossaryPopoverEl = document.createElement('div');
  glossaryPopoverEl.className = 'glossary-popover';
  glossaryPopoverEl.innerHTML = \`
    <div class="popover-term-row">
      <span class="popover-term">\${termObj.term}</span>
      \${termObj.pronunciation ? \`<span class="popover-ipa mono">\${termObj.pronunciation}</span>\` : ''}
    </div>
    <p class="popover-def">\${termObj.definition}</p>
    \${termObj.etymology ? \`<div class="popover-etymo"><em>\${termObj.etymology}</em></div>\` : ''}
    <div class="popover-footer">
      <span class="popover-vol-tag">\${termObj.volume ? 'Vol ' + termObj.volume : 'Clinical Lexicon'}</span>
      <button class="popover-btn" onclick="openLexiconTerm('\${termObj.term}')">Open Lexicon ↗</button>
    </div>
  \`;

  document.body.appendChild(glossaryPopoverEl);

  const rect = targetEl.getBoundingClientRect();
  const popRect = glossaryPopoverEl.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 6;
  let left = rect.left + window.scrollX - 10;

  if (left + popRect.width > window.innerWidth - 16) {
    left = window.innerWidth - popRect.width - 16;
  }
  if (left < 16) left = 16;

  glossaryPopoverEl.style.top = top + 'px';
  glossaryPopoverEl.style.left = left + 'px';
}

function hideGlossaryPopover() {
  if (glossaryPopoverEl && glossaryPopoverEl.parentNode) {
    glossaryPopoverEl.parentNode.removeChild(glossaryPopoverEl);
    glossaryPopoverEl = null;
  }
}

function openLexiconTerm(term) {
  hideGlossaryPopover();
  openCommandPalette(term);
}
`;

const updatedScript = script.slice(0, startIndex) + newPhase4Code + '\n\n' + script.slice(endIndex);
fs.writeFileSync(scriptPath, updatedScript, 'utf8');
console.log("Successfully rebuilt script.js with unified chapter properties!");
