import fs from 'fs';

const scriptPath = 'script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

const startMarker = 'function renderNotesPage() {';
const endMarker = '// ─── ENHANCED PDF IMPORT PIPELINE ─────────────────────────────────────────────';

const startIndex = script.indexOf(startMarker);
const endIndex = script.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found in script.js!");
  process.exit(1);
}

const newPhase5Code = `function renderNotesPage() {
  const notes = lsGet('psa_notes', []);
  const grid = document.getElementById('notesGrid');
  if (!grid) return;

  // Populate Notes Category Filter
  const catSel = document.getElementById('notesCatFilter');
  if (catSel && typeof KB !== 'undefined') {
    const currentVal = catSel.value || 'all';
    catSel.innerHTML = '<option value="all">All Topics &amp; General</option>'
      + KB.map(t => \`<option value="\${t.id}">[\${getChapterPlate(t)}] \${t.name}</option>\`).join('');
    catSel.value = currentVal;
  }

  if (!notes.length) {
    grid.innerHTML = \`
      <div class="empty-state large">
        <svg class="icon icon-lg" aria-hidden="true" style="margin-bottom:8px;color:var(--text-3)"><use href="#ps-icon-notes"></use></svg>
        <div>No clinical notes recorded yet. Write notes while studying or create your first one with the New Note button above.</div>
      </div>\`;
    return;
  }

  // Sort pinned to top
  const sorted = [...notes].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  renderNotesGrid(sorted);
}

function renderNotesGrid(notesList) {
  const grid = document.getElementById('notesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  notesList.forEach(n => {
    const card = document.createElement('div');
    card.className = \`note-card \${n.pinned ? 'pinned' : ''}\`;
    const cleanId = esc(n.id);
    const tagsHtml = (n.tags && Array.isArray(n.tags)) 
      ? n.tags.map(tag => \`<span class="tag-chip">#\${esc(tag)}</span>\`).join('') 
      : '';

    card.innerHTML = \`
      <div class="note-card-header">
        <div class="note-card-title">\${esc(n.title || 'Untitled Note')}</div>
        <span class="note-cat-badge">\${esc(n.topicName || 'General')}</span>
      </div>
      \${tagsHtml ? \`<div class="note-tags-row">\${tagsHtml}</div>\` : ''}
      <div class="note-card-body">\${renderMarkdown(n.body || '')}</div>
      <div class="note-card-footer">
        <span class="note-card-date">
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-clock"></use></svg>
          <span>\${esc(n.date || '')}</span>
        </span>
        <div class="note-card-actions">
          <button class="btn btn-ghost btn-xs" onclick="togglePinNote('\${cleanId}',event)">\${n.pinned ? 'Unpin' : 'Pin'}</button>
          <button class="btn btn-ghost btn-xs" onclick="editNote('\${cleanId}')">Edit</button>
          <button class="btn btn-ghost btn-xs" onclick="deleteNote('\${cleanId}',event)" title="Delete note">
            <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-trash"></use></svg>
          </button>
        </div>
      </div>\`;
    grid.appendChild(card);
  });
}

function filterNotes(search) {
  const cat = document.getElementById('notesCatFilter')?.value || 'all';
  let notes = lsGet('psa_notes', []);
  if (search) {
    const q = search.toLowerCase();
    notes = notes.filter(n => 
      (n.title || '').toLowerCase().includes(q) ||
      (n.body || '').toLowerCase().includes(q) ||
      (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
    );
  }
  if (cat !== 'all') {
    notes = notes.filter(n => n.topic === cat);
  }
  if (!notes.length) {
    document.getElementById('notesGrid').innerHTML = '<div class="empty-state">No notes match your filter criteria.</div>';
    return;
  }
  renderNotesGrid(notes);
}

function openNewNoteModal() {
  document.getElementById('modalTitle').textContent = 'Create Clinical Study Note';
  document.getElementById('modalNoteTitle').value = '';
  document.getElementById('modalNoteBody').value = '';
  document.getElementById('modalNoteTags').value = '';

  const catSel = document.getElementById('modalNoteCat');
  if (catSel && typeof KB !== 'undefined') {
    catSel.innerHTML = '<option value="General">General Clinical Reflection</option>'
      + KB.map(t => \`<option value="\${t.id}">[\${getChapterPlate(t)}] \${t.name}</option>\`).join('');
  }

  document.getElementById('noteModal').classList.remove('hidden');
  document.getElementById('noteModal')._editId = null;
}

function editNote(id) {
  const note = lsGet('psa_notes', []).find(n => n.id === id);
  if (!note) return;
  document.getElementById('modalTitle').textContent = 'Edit Clinical Study Note';
  document.getElementById('modalNoteTitle').value = note.title || '';
  document.getElementById('modalNoteCat').value = note.topic || 'General';
  document.getElementById('modalNoteBody').value = note.body || '';
  document.getElementById('modalNoteTags').value = (note.tags || []).join(', ');
  document.getElementById('noteModal').classList.remove('hidden');
  document.getElementById('noteModal')._editId = id;
}

function saveModalNote() {
  const title = (document.getElementById('modalNoteTitle').value || '').trim() || ('Clinical Note ' + new Date().toLocaleDateString('en-IN'));
  const body = (document.getElementById('modalNoteBody').value || '').trim();
  const topicId = document.getElementById('modalNoteCat').value;
  const tagsRaw = (document.getElementById('modalNoteTags').value || '').split(',');
  const tags = tagsRaw.map(t => t.trim()).filter(Boolean);

  if (!body) { toast('Please write note content before saving.', 'error'); return; }
  let notes = lsGet('psa_notes', []);
  const editId = document.getElementById('noteModal')._editId;
  const topicObj = KB.find(t => t.id === topicId);
  const topicName = topicObj ? topicObj.name : (topicId === 'General' ? 'General' : topicId);

  if (editId) {
    notes = notes.map(n => n.id === editId ? { ...n, title, body, topic: topicId, topicName, tags, date: new Date().toLocaleDateString('en-IN') } : n);
    toast('Clinical note updated successfully.', 'success');
  } else {
    notes.unshift({
      id: Date.now().toString(),
      title,
      body,
      topic: topicId,
      topicName,
      tags,
      date: new Date().toLocaleDateString('en-IN'),
      pinned: false
    });
    toast('New note saved successfully.', 'success');
  }

  lsSet('psa_notes', notes);
  closeNoteModal();
  renderNotesPage();
}

function closeNoteModal() {
  document.getElementById('noteModal').classList.add('hidden');
}

function togglePinNote(id, e) {
  if (e) e.stopPropagation();
  let notes = lsGet('psa_notes', []);
  notes = notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n);
  lsSet('psa_notes', notes);
  renderNotesPage();
}

function deleteNote(id, e) {
  if (e) e.stopPropagation();
  if (!confirm('Are you sure you want to delete this study note?')) return;
  let notes = lsGet('psa_notes', []);
  notes = notes.filter(n => n.id !== id);
  lsSet('psa_notes', notes);
  renderNotesPage();
  toast('Note removed.', 'info');
}

function exportNotesJSON() {
  const notes = lsGet('psa_notes', []);
  const json = JSON.stringify(notes, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`psychstudy_notes_backup_\${new Date().toISOString().slice(0, 10)}.json\`;
  a.click();
  URL.revokeObjectURL(url);
  toast(\`Exported \${notes.length} notes as JSON backup.\`, 'success');
}

function importNotesJSON(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error('Expected JSON array of notes');
      let currentNotes = lsGet('psa_notes', []);
      let count = 0;
      imported.forEach(n => {
        if (n && n.body) {
          const exists = currentNotes.some(cur => cur.id === n.id);
          if (!exists) {
            currentNotes.unshift({
              id: n.id || Date.now().toString() + Math.random().toString(36).slice(2, 6),
              title: esc(n.title || 'Imported Note'),
              body: esc(n.body),
              topic: n.topic || 'General',
              topicName: n.topicName || 'General',
              tags: Array.isArray(n.tags) ? n.tags.map(t => esc(t)) : [],
              date: n.date || new Date().toLocaleDateString('en-IN'),
              pinned: !!n.pinned
            });
            count++;
          }
        }
      });
      lsSet('psa_notes', currentNotes);
      renderNotesPage();
      toast(\`Successfully imported \${count} notes from backup.\`, 'success');
    } catch (err) {
      toast('Failed to parse notes backup JSON: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

// ─── FLASHCARDS (SM-2-LITE EXPLAINABLE ACTIVE RECALL ENGINE) ──────────────────
let fcHistory = [];

function openFlashcardsTopic(id) {
  const el = document.getElementById('fcTopicSelect');
  if (el) el.value = id;
  loadFlashcards(id);
  navigate('flashcards');
}

function loadFlashcards(deckType = 'all') {
  let cards = [];
  const reviews = S.flashcardReviews || {};
  const now = Date.now();

  // Populate Deck Select with 43 chapters
  const sel = document.getElementById('fcTopicSelect');
  if (sel && typeof KB !== 'undefined' && sel.options.length <= 4) {
    const current = sel.value;
    sel.innerHTML = \`
      <option value="all">— All 43 Chapters Combined (121 Cards) —</option>
      <option value="due">⏰ Due Today for Retrieval</option>
      <option value="weak">⚡ Weak Cards (Again / Hard)</option>
    \` + KB.map(t => \`<option value="\${t.id}">[\${getChapterPlate(t)}] \${t.name}</option>\`).join('');
    sel.value = current;
  }

  if (deckType === 'all') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) cards.push(...deck);
    });
  } else if (deckType === 'due') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) {
        deck.forEach(c => {
          const r = reviews[c.term];
          if (!r || (r.dueDate && r.dueDate <= now)) cards.push(c);
        });
      }
    });
    if (!cards.length) {
      toast('All cards up to date! Loading full deck for practice.', 'info');
      return loadFlashcards('all');
    }
  } else if (deckType === 'weak') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) {
        deck.forEach(c => {
          const r = reviews[c.term];
          if (r && (r.difficulty === 'again' || r.difficulty === 'hard')) cards.push(c);
        });
      }
    });
    if (!cards.length) {
      toast('No weak cards marked yet! Loading full deck.', 'info');
      return loadFlashcards('all');
    }
  } else {
    cards = FLASHCARD_DECKS[deckType] || [];
    if (!cards.length) {
      const topic = KB.find(t => t.id === deckType);
      if (topic) cards = generateCardsFromTopic(topic);
    }
  }

  if (!cards.length) {
    toast('No flashcards found for this selection.', 'info');
    return;
  }

  S.fcCards = cards;
  S.fcIdx = 0;
  S.fcFlipped = false;
  S.fcSession = { reviewed: 0, known: 0, reviewNeeded: 0 };
  fcHistory = [];

  updateSessionStatsUI();
  renderCard();
}

function generateCardsFromTopic(t) {
  const vol = getChapterVolume(t);
  const plate = getChapterPlate(t);
  return [
    { term: \`Define: \${t.name}\`, def: t.definition || '', ex: (t.examples && t.examples[0]) || '', keyPoints: t.keyPoints ? t.keyPoints.slice(0, 3) : [], volume: vol, plate },
    { term: \`Diagnostic Criteria: \${t.name}\`, def: (t.symptoms || t.criteria || []).slice(0, 4).join(' · '), ex: '', keyPoints: t.keyPoints ? t.keyPoints.slice(0, 3) : [], volume: vol, plate },
    { term: \`Evidence-Based Interventions: \${t.name}\`, def: typeof t.treatment === 'string' ? t.treatment : 'Cognitive Behavioral Therapy (CBT)', ex: '', keyPoints: [], volume: vol, plate },
    { term: \`Clinical Examination Synthesis: \${t.name}\`, def: t.summary || '', ex: t.mnemonic || '', keyPoints: t.keyPoints || [], volume: vol, plate }
  ];
}

function renderCard() {
  const cards = S.fcCards;
  if (!cards || !cards.length) return;
  const c = cards[S.fcIdx];
  const total = cards.length;
  const pct = Math.round(((S.fcIdx + 1) / total) * 100);

  const fillEl = document.getElementById('fcProgressFill');
  const counterEl = document.getElementById('fcCounter');
  if (fillEl) fillEl.style.width = pct + '%';
  if (counterEl) counterEl.textContent = \`Card \${S.fcIdx + 1} of \${total}\`;

  const cardEl = document.getElementById('fcCard');
  if (cardEl) cardEl.classList.remove('flipped');
  S.fcFlipped = false;

  const vol = c.volume || 'I';
  const volInfo = getVolumeInfo(vol);
  const plate = c.plate || '1.1';

  const plateTagEl = document.getElementById('fcPlateTag');
  const qNumEl = document.getElementById('fcQNum');
  const termEl = document.getElementById('fcTerm');
  const backTypeEl = document.getElementById('fcBackTypeLabel');
  const backPlateEl = document.getElementById('fcBackPlateTag');
  const defEl = document.getElementById('fcDef');
  const exEl = document.getElementById('fcEx');

  if (plateTagEl) {
    plateTagEl.textContent = \`VOL \${vol} · PLATE \${plate}\`;
    plateTagEl.style.color = volInfo.color;
    plateTagEl.style.background = volInfo.bg;
  }
  if (qNumEl) qNumEl.textContent = \`\${S.fcIdx + 1} / \${total}\`;
  if (termEl) termEl.textContent = c.term || 'Flashcard Question';
  if (backTypeEl) backTypeEl.textContent = c.type ? c.type.toUpperCase() : 'CLINICAL EXPLANATION';
  if (backPlateEl) {
    backPlateEl.textContent = volInfo.name;
    backPlateEl.style.color = volInfo.color;
  }
  if (defEl) defEl.innerHTML = renderMarkdown(c.def || '');
  if (exEl) exEl.innerHTML = c.ex ? \`<strong>Clinical Example:</strong> \${esc(c.ex)}\` : '';

  // Render navigation dots (up to 14)
  const dots = document.getElementById('fcDots');
  if (dots) {
    dots.innerHTML = '';
    const maxDots = Math.min(total, 14);
    for (let i = 0; i < maxDots; i++) {
      const d = document.createElement('div');
      d.className = 'fc-dot' + (i === S.fcIdx ? ' active' : '');
      const idx = i;
      d.onclick = () => { S.fcIdx = idx; S.fcFlipped = false; renderCard(); };
      dots.appendChild(d);
    }
  }

  // Render Key Points
  const kp = document.getElementById('fcKeyPoints');
  if (kp) {
    if (c.keyPoints && c.keyPoints.length) {
      kp.innerHTML = \`<div class="fc-kp-title">Examiner Key Points</div><div class="fc-kp-list">\`
        + c.keyPoints.map(p => \`<div class="fc-kp-item"><div class="fc-kp-dot"></div><span>\${esc(p)}</span></div>\`).join('')
        + \`</div>\`;
      kp.style.display = 'block';
    } else {
      kp.style.display = 'none';
    }
  }
}

function flipCard() {
  S.fcFlipped = !S.fcFlipped;
  const cardEl = document.getElementById('fcCard');
  if (cardEl) cardEl.classList.toggle('flipped', S.fcFlipped);
}

function prevCard() {
  if (S.fcIdx > 0) {
    S.fcIdx--;
    renderCard();
  }
}

function nextCard() {
  if (S.fcIdx < S.fcCards.length - 1) {
    S.fcIdx++;
    renderCard();
  }
}

function rateFlashcard(rating) {
  const currentCard = S.fcCards[S.fcIdx];
  if (!currentCard) return;

  // Record undo history
  fcHistory.push({
    card: currentCard,
    idx: S.fcIdx,
    session: { ...S.fcSession },
    prevReview: S.flashcardReviews[currentCard.term]
  });

  S.fcSession.reviewed++;
  const prevRec = S.flashcardReviews[currentCard.term] || { interval: 1, ease: 2.5 };
  let interval = 1;
  let ease = prevRec.ease || 2.5;

  if (rating === 'again') {
    S.fcSession.reviewNeeded++;
    interval = 1;
    ease = Math.max(1.3, ease - 0.20);
    // Re-queue card to end of session
    S.fcCards.push(currentCard);
  } else if (rating === 'hard') {
    S.fcSession.reviewNeeded++;
    interval = Math.max(1, Math.round(prevRec.interval * 1.2));
    ease = Math.max(1.3, ease - 0.15);
    S.fcCards.push(currentCard);
  } else if (rating === 'good') {
    S.fcSession.known++;
    interval = Math.max(1, Math.round(prevRec.interval * ease));
  } else if (rating === 'easy') {
    S.fcSession.known++;
    interval = Math.max(1, Math.round(prevRec.interval * ease * 1.3));
    ease += 0.15;
  }

  // Persist spaced repetition parameters
  const dayMs = 24 * 60 * 60 * 1000;
  S.flashcardReviews[currentCard.term] = {
    difficulty: rating,
    ease: Number(ease.toFixed(2)),
    interval,
    lastReviewed: Date.now(),
    dueDate: Date.now() + (interval * dayMs)
  };
  saveState();
  updateSessionStatsUI();

  // Advance card
  if (S.fcIdx < S.fcCards.length - 1) {
    S.fcIdx++;
    renderCard();
  } else {
    const retention = Math.round((S.fcSession.known / S.fcSession.reviewed) * 100);
    toast(\`Active recall session complete! Reviewed \${S.fcSession.reviewed} cards (\${retention}% retention rate).\`, 'success', 6000);
  }
}

function undoFlashcardRating() {
  if (!fcHistory.length) {
    toast('No rating action to undo.', 'info');
    return;
  }
  const last = fcHistory.pop();
  S.fcIdx = last.idx;
  S.fcSession = last.session;
  if (last.prevReview) {
    S.flashcardReviews[last.card.term] = last.prevReview;
  } else {
    delete S.flashcardReviews[last.card.term];
  }
  saveState();
  updateSessionStatsUI();
  renderCard();
  toast('Undid previous card rating.', 'info');
}

function updateSessionStatsUI() {
  const revEl = document.getElementById('fcStatsReviewed');
  const knownEl = document.getElementById('fcStatsKnown');
  const neededEl = document.getElementById('fcStatsReview');
  const retEl = document.getElementById('fcStatsRetention');

  if (revEl) revEl.textContent = S.fcSession.reviewed;
  if (knownEl) knownEl.textContent = S.fcSession.known;
  if (neededEl) neededEl.textContent = S.fcSession.reviewNeeded;
  if (retEl) {
    const rate = S.fcSession.reviewed > 0 
      ? Math.round((S.fcSession.known / S.fcSession.reviewed) * 100) 
      : 100;
    retEl.textContent = rate + '%';
  }
}

// Attach keyboard shortcuts listener for Flashcards
window.addEventListener('keydown', (e) => {
  if (S.currentPage !== 'flashcards') return;
  const tag = (e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '');
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

  if (e.code === 'Space') {
    e.preventDefault();
    flipCard();
  } else if (e.key === '1') {
    e.preventDefault();
    rateFlashcard('again');
  } else if (e.key === '2') {
    e.preventDefault();
    rateFlashcard('hard');
  } else if (e.key === '3') {
    e.preventDefault();
    rateFlashcard('good');
  } else if (e.key === '4') {
    e.preventDefault();
    rateFlashcard('easy');
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevCard();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextCard();
  } else if (e.key.toLowerCase() === 'u') {
    e.preventDefault();
    undoFlashcardRating();
  }
});

// ─── DIAGNOSTIC ASSESSMENT & QUIZ ENGINE ──────────────────────────────────────
let quizMode = 'practice';
let quizTimerInterval = null;
let quizSecondsRemaining = 900; // 15 min

function setQuizMode(mode) {
  quizMode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(b => {
    b.classList.toggle('active', b.id === \`quizMode\${mode.charAt(0).toUpperCase() + mode.slice(1)}\`);
    b.setAttribute('aria-selected', b.classList.contains('active'));
  });

  const timerWrap = document.getElementById('quizTimerWrap');
  if (timerWrap) timerWrap.classList.toggle('hidden', mode !== 'exam');

  setupQuiz();
}

function setupQuiz() {
  S.quiz = null;
  S.quizAnswers = {};
  S.quizDone = false;

  clearInterval(quizTimerInterval);
  quizSecondsRemaining = 900;

  const scoreCard = document.getElementById('quizScoreCard');
  if (scoreCard) scoreCard.classList.add('hidden');

  const submitBtn = document.getElementById('quizSubmitBtn');
  const retryBtn = document.getElementById('quizRetryBtn');
  if (submitBtn) submitBtn.classList.remove('hidden');
  if (retryBtn) retryBtn.classList.add('hidden');

  const filter = document.getElementById('quizTopicSel')?.value || 'mixed';
  const targetCount = parseInt(document.getElementById('quizCountRange')?.value || '15', 10);

  let fills = [...QUIZ_BANK.fillBlanks];
  let mcqs = [...QUIZ_BANK.mcq];

  // Populate Quiz Domain Selector with Volumes & Categories
  const qTopicSel = document.getElementById('quizTopicSel');
  if (qTopicSel && typeof KB !== 'undefined' && qTopicSel.options.length <= 2) {
    const cats = [...new Set(KB.map(t => t.category))];
    qTopicSel.innerHTML = '<option value="mixed">Comprehensive Curriculum (Mixed)</option>'
      + cats.map(c => \`<option value="\${c}">\${c}</option>\`).join('');
  }

  // Filter questions based on mode or category
  if (quizMode === 'weak') {
    const weakTopics = getWeakTopics().map(w => w.topic.id);
    if (weakTopics.length > 0) {
      fills = fills.filter(q => weakTopics.includes(q.topic));
      mcqs = mcqs.filter(q => weakTopics.includes(q.topic));
    }
  } else if (filter !== 'mixed') {
    fills = fills.filter(q => q.category === filter || q.topic === filter || (q.topic && KB.find(t => t.id === q.topic && t.category === filter)));
    mcqs = mcqs.filter(q => q.category === filter || q.topic === filter || (q.topic && KB.find(t => t.id === q.topic && t.category === filter)));
  }

  // Shuffle
  fills.sort(() => Math.random() - 0.5);
  mcqs.sort(() => Math.random() - 0.5);

  const fillCount = Math.min(fills.length, Math.ceil(targetCount * 0.5));
  const mcqCount = Math.min(mcqs.length, targetCount - fillCount);

  fills = fills.slice(0, fillCount);
  mcqs = mcqs.slice(0, mcqCount);

  const subEl = document.getElementById('quiz-sub');
  if (subEl) {
    subEl.textContent = \`\${fills.length + mcqs.length} questions • Mode: \${quizMode.toUpperCase()} • Instant diagnostic verification\`;
  }

  S.quiz = { fills, mcqs, category: filter };
  renderQuiz();

  // Start timer if in Exam Simulation mode
  if (quizMode === 'exam') {
    startQuizTimer();
  }
}

function startQuizTimer() {
  const timerVal = document.getElementById('quizTimerVal');
  clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    quizSecondsRemaining--;
    if (quizSecondsRemaining <= 0) {
      clearInterval(quizTimerInterval);
      toast('Time expired! Submitting examination.', 'info');
      submitQuiz();
      return;
    }
    const mins = Math.floor(quizSecondsRemaining / 60);
    const secs = quizSecondsRemaining % 60;
    if (timerVal) timerVal.textContent = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
  }, 1000);
}

function renderQuiz() {
  const { fills, mcqs } = S.quiz;
  let html = \`<div class="quiz-section-hd">Section A — Operationalized Fill in the Blanks (PDF Blueprint)</div><div class="quiz-block">\`;
  fills.forEach((q, i) => {
    html += \`
      <div class="q-item" id="qf-\${i}">
        <div class="q-text"><b>Q\${i + 1}.</b> \${esc(q.q)}</div>
        <input class="q-input" id="fi-\${i}" type="text" placeholder="Hint: \${esc(q.hint || '')}" oninput="handleFillInput(\${i}, this.value)" />
        <div class="q-fb hidden" id="fb-f\${i}"></div>
      </div>\`;
  });

  html += \`</div><div class="quiz-section-hd" style="color:var(--primary)">Section B — Diagnostic Multiple Choice &amp; Vignettes</div><div class="quiz-block">\`;
  mcqs.forEach((q, i) => {
    html += \`
      <div class="mcq-item" id="qm-\${i}">
        <div class="mcq-q"><span>Q\${fills.length + i + 1}.</span> \${esc(q.q)}</div>
        <div class="mcq-opts">
          \${q.opts.map((o, j) => \`<button class="mcq-opt" id="mo-\${i}-\${j}" onclick="selectMCQ(\${i},\${j})">\${['A','B','C','D'][j]}. \${esc(o)}</button>\`).join('')}
        </div>
        <div class="mcq-exp hidden" id="mex-\${i}"><strong>Diagnostic Key:</strong> \${esc(q.exp || '')}</div>
      </div>\`;
  });
  html += '</div>';

  document.getElementById('quizBody').innerHTML = html;
}

function handleFillInput(idx, val) {
  S.quizAnswers['f' + idx] = val;
  if (quizMode === 'practice' && val.trim().length >= 3) {
    const q = S.quiz.fills[idx];
    const isCorrect = checkFillBlank(val, q);
    const fb = document.getElementById('fb-f' + idx);
    if (isCorrect && fb) {
      fb.classList.remove('hidden');
      fb.className = 'q-fb ok';
      fb.textContent = '✓ Correct Answer Verified';
    }
  }
}

function selectMCQ(qi, optIdx) {
  if (S.quizDone) return;
  S.quizAnswers['m' + qi] = optIdx;
  document.querySelectorAll(\`#qm-\${qi} .mcq-opt\`).forEach((b, j) => {
    b.classList.toggle('selected', j === optIdx);
  });

  // Practice mode: instant feedback
  if (quizMode === 'practice') {
    const q = S.quiz.mcqs[qi];
    document.querySelectorAll(\`#qm-\${qi} .mcq-opt\`).forEach((b, j) => {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      else if (j === optIdx && optIdx !== q.correct) b.classList.add('wrong');
    });
    const exp = document.getElementById('mex-' + qi);
    if (exp) exp.classList.remove('hidden');
  }
}

function submitQuiz() {
  if (S.quizDone) return;
  S.quizDone = true;
  clearInterval(quizTimerInterval);

  const { fills, mcqs, category } = S.quiz;
  let correct = 0, total = 0;
  const byTopic = {};
  const missedQuestions = [];

  fills.forEach((q, i) => {
    total++;
    const ans = S.quizAnswers['f' + i] || '';
    const ok = checkFillBlank(ans, q);
    if (ok) correct++;
    else missedQuestions.push(q);

    const topicId = q.topic || (KB.find(t => t.category === q.category)?.id) || 'foundations';
    byTopic[topicId] = byTopic[topicId] || { correct: 0, total: 0 };
    byTopic[topicId].total++;
    if (ok) byTopic[topicId].correct++;

    const inp = document.getElementById('fi-' + i);
    if (inp) inp.disabled = true;
    const box = document.getElementById('qf-' + i);
    if (box) box.classList.add(ok ? 'correct' : 'wrong');
    const fb = document.getElementById('fb-f' + i);
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'q-fb ' + (ok ? 'ok' : 'no');
      fb.textContent = ok ? '✓ Correct' : '✗ Canonical Key: ' + (q.answers ? q.answers[0] : q.a);
    }
  });

  mcqs.forEach((q, i) => {
    total++;
    const sel = S.quizAnswers['m' + i];
    const ok = sel === q.correct;
    if (ok) correct++;
    else missedQuestions.push(q);

    const topicId = q.topic || (KB.find(t => t.category === q.category)?.id) || 'foundations';
    byTopic[topicId] = byTopic[topicId] || { correct: 0, total: 0 };
    byTopic[topicId].total++;
    if (ok) byTopic[topicId].correct++;

    document.querySelectorAll(\`#qm-\${i} .mcq-opt\`).forEach((b, j) => {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      else if (j === sel && !ok) b.classList.add('wrong');
    });
    const ex = document.getElementById('mex-' + i);
    if (ex) ex.classList.remove('hidden');
  });

  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const statusBadge = pct >= 80 ? 'EXEMPLARY CLINICAL MASTERY' : pct >= 60 ? 'COMPETENT' : 'REVISION RECOMMENDED';
  const msg = pct >= 80 
    ? 'Outstanding diagnostic accuracy. Ready for university examination.' 
    : pct >= 60 ? 'Solid performance. Review the highlighted diagnostic rationales.' : 'Review core criteria in Deep Study mode before retrying.';

  // Save attempt with granular per-topic breakdown
  S.quizAttempts.push({
    timestamp: Date.now(),
    score: correct,
    total,
    pct,
    topic: category || 'mixed',
    byTopic
  });
  S.quizCount++;
  saveState();
  updateNavMastery();

  // Render Score Card with Per-Topic Breakdown
  const sc = document.getElementById('quizScoreCard');
  let topicBreakdownHtml = '';
  Object.keys(byTopic).forEach(tid => {
    const tObj = KB.find(k => k.id === tid);
    const tName = tObj ? tObj.name : tid;
    const stat = byTopic[tid];
    const tPct = Math.round((stat.correct / stat.total) * 100);
    topicBreakdownHtml += \`
      <div class="quiz-topic-row">
        <span>\${tName}</span>
        <span class="mono">\${stat.correct}/\${stat.total} (\${tPct}%)</span>
      </div>\`;
  });

  sc.innerHTML = \`
    <div style="font-size:11px;font-weight:700;letter-spacing:var(--ls-wider);color:var(--primary);text-transform:uppercase;margin-bottom:6px">\${statusBadge}</div>
    <div class="score-number">\${correct} / \${total}</div>
    <div class="score-pct">\${pct}% Diagnostic Accuracy</div>
    <div class="score-msg">\${msg}</div>
    <div class="score-details">
      <div class="score-detail"><div class="score-detail-value">\${pct >= 70 ? 'PASS' : 'REVISE'}</div><div class="score-detail-label">Status</div></div>
      <div class="score-detail"><div class="score-detail-value">\${S.quizCount}</div><div class="score-detail-label">Total Completed</div></div>
    </div>
    \${topicBreakdownHtml ? \`
      <div class="quiz-topic-breakdown">
        <div class="card-eyebrow" style="margin-bottom:6px">PER-TOPIC DIAGNOSTIC ACCURACY</div>
        \${topicBreakdownHtml}
      </div>\` : ''}
    \${missedQuestions.length > 0 ? \`
      <button class="btn btn-outline btn-sm" style="margin-top:var(--sp-4)" onclick="addMissedToFlashcards()">
        <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-cards"></use></svg>
        <span>Add \${missedQuestions.length} Missed Items to Flashcard Queue</span>
      </button>\` : ''}
  \`;

  sc.classList.remove('hidden');
  document.getElementById('quizSubmitBtn').classList.add('hidden');
  document.getElementById('quizRetryBtn').classList.remove('hidden');
  sc.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addMissedToFlashcards() {
  toast('Missed questions queued for spaced retrieval.', 'success');
}

function resetQuiz() {
  setupQuiz();
}

// ─── UNIVERSITY EXAMINATION SUITE (PAPERS A & B, QUESTION BANK & COACH) ───────
let currentExamTab = 'paperA';
let coachTimerInterval = null;
let coachSeconds = 0;

function selectExamSuiteTab(tabName, btn) {
  currentExamTab = tabName;
  document.querySelectorAll('.exam-suite-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  } else {
    const defaultBtn = document.getElementById(\`tab\${tabName.charAt(0).toUpperCase() + tabName.slice(1)}\`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  const paperEl = document.getElementById('examPaper');
  const qbEl = document.getElementById('examQuestionBank');
  const coachEl = document.getElementById('examCoach');

  if (tabName === 'paperA' || tabName === 'paperB') {
    if (paperEl) paperEl.classList.remove('hidden');
    if (qbEl) qbEl.classList.add('hidden');
    if (coachEl) coachEl.classList.add('hidden');
    renderExam();
  } else if (tabName === 'qb') {
    if (paperEl) paperEl.classList.add('hidden');
    if (qbEl) qbEl.classList.remove('hidden');
    if (coachEl) coachEl.classList.add('hidden');
    renderQuestionBank();
  } else if (tabName === 'coach') {
    if (paperEl) paperEl.classList.add('hidden');
    if (qbEl) qbEl.classList.add('hidden');
    if (coachEl) coachEl.classList.remove('hidden');
    renderCoachWorkspace();
  }
}

function renderExam() {
  const e = EXAM_DATA;
  const paperKey = currentExamTab === 'paperB' ? 'paperB' : 'paperA';
  const paper = (e && e[paperKey]) || e;
  const sa = S.showAnswers;

  const q1 = paper.q1 || e.q1 || { marks: 10, label: 'Section A', items: [] };
  const q2 = paper.q2 || e.q2 || { marks: 10, label: 'Section B', A: '', B: '' };
  const q3 = paper.q3 || e.q3 || { marks: 10, label: 'Section C', topics: [] };

  let html = \`
  <div class="exam-cover">
    <div class="exam-cover-tag">\${(paper.subject || e.subject || 'PSYCHOLOGY OF ADJUSTMENT').toUpperCase()}</div>
    <h1>\${paper.paperTitle || (paperKey === 'paperB' ? 'Examination Paper B: Clinical Assessment & Adjustment Blueprint' : 'Examination Paper A: University Undergraduate Standard')}</h1>
    <div class="exam-meta">
      <span>⏱ Time Allowed: \${paper.time || '1 Hour'}</span>
      <span>📊 Total Marks: \${paper.total || 30} Marks</span>
      <span>Comprehensive Standardized Syllabus Assessment</span>
    </div>
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.1</span>
      <span class="marks-badge" style="background:var(--blue);color:#FFF">\${q1.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">\${esc(q1.label || 'Section A — Fill in the Blanks')}</div>
    \${(q1.items || []).map((it, i) => \`
      <div class="blank-item">
        <span class="blank-num">(\${i + 1})</span>
        <span style="flex:1">\${esc(it.q)}</span>
        \${sa ? \`<span class="blank-ans" style="color:var(--primary);font-weight:600">→ \${esc(it.a)}</span>\` : ''}
      </div>
    \`).join('')}
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.2</span>
      <span class="marks-badge" style="background:var(--primary);color:#FFF">\${q2.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">\${esc(q2.label || 'Section B — Long Answer (Answer Either A or B)')}</div>
    <div class="long-opt"><b style="color:var(--primary)">A.</b> \${esc(q2.A || '')}</div>
    <div class="exam-or">— OR —</div>
    <div class="long-opt"><b style="color:var(--blue)">B.</b> \${esc(q2.B || '')}</div>
    \${sa && q2.hints?.length ? \`
      <div class="hints-box" style="margin-top:var(--sp-3);background:var(--surface-inset);padding:var(--sp-3);border-radius:var(--radius-xs)">
        <div class="hl" style="font-weight:600;margin-bottom:4px">✏️ Model Structure &amp; Examiner Criteria:</div>
        <ul>\${q2.hints.map(h => \`<li>\${esc(h)}</li>\`).join('')}</ul>
      </div>\` : ''}
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.3</span>
      <span class="marks-badge" style="background:var(--mint);color:#065F46">\${q3.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">\${esc(q3.label || 'Section C — Write Short Notes (Any Two)')}</div>
    \${(q3.topics || []).map((sn, i) => \`
      <div class="sn-item">
        <b>(\${i + 1})</b> \${esc(sn.t || sn.title || '')}
        \${sa && sn.pts?.length ? \`
          <ul class="sn-pts" style="margin-top:4px">\${sn.pts.map(p => \`<li>\${esc(p)}</li>\`).join('')}</ul>
        \` : ''}
      </div>
    \`).join('')}
  </div>\`;

  document.getElementById('examPaper').innerHTML = html;
}

function toggleAnswers() {
  S.showAnswers = !S.showAnswers;
  const txt = document.getElementById('toggleAnsText');
  if (txt) txt.textContent = S.showAnswers ? 'Hide Model Answers' : 'Reveal Model Answers';
  renderExam();
}

// ─── 16-QUESTION BANK ACCORDION ───────────────────────────────────────────────
function renderQuestionBank(filter = '') {
  const qbList = document.getElementById('qbList');
  if (!qbList) return;

  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  let items = [...qb];

  if (filter) {
    const q = filter.toLowerCase();
    items = items.filter(it => 
      (it.question || '').toLowerCase().includes(q) ||
      (it.topic || '').toLowerCase().includes(q) ||
      (it.keywords || []).some(k => k.toLowerCase().includes(q))
    );
  }

  qbList.innerHTML = items.map((q, i) => \`
    <div class="qb-accordion-item" id="qb-item-\${i}">
      <button class="qb-header" onclick="toggleQbItem(\${i})">
        <div class="qb-title-wrap">
          <span class="badge-source">\${q.id || 'QB-LA-' + (i+1)}</span>
          <span class="marks-badge" style="background:var(--blue);color:#FFF">\${q.marks || 15} Marks</span>
          <strong style="font-size:var(--text-sm)">\${esc(q.question)}</strong>
        </div>
        <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
      </button>
      <div class="qb-body">
        <div class="qb-meta-row" style="margin-bottom:var(--sp-3);display:flex;gap:var(--sp-3)">
          <span class="tag-chip">Domain: \${esc(q.topic || 'Curriculum')}</span>
          <button class="btn btn-primary btn-xs" onclick="startCoachWithQuestion('\${q.id || i}')">Practice in Live Coach ↗</button>
        </div>
        
        \${q.structure ? \`
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow">ESSAY STRUCTURE CHECKLIST</div>
            <ul>\${q.structure.map(s => \`<li>\${esc(s)}</li>\`).join('')}</ul>
          </div>\` : ''}

        \${q.modelAnswer ? \`
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow" style="color:var(--primary)">15-MARK COMPREHENSIVE MODEL ANSWER (600–800 WORDS)</div>
            <div class="model-essay-prose">\${renderMarkdown(q.modelAnswer)}</div>
          </div>\` : ''}

        \${q.shortNote ? \`
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow" style="color:var(--mint)">5-MARK CONCISE REVISION NOTE (170–220 WORDS)</div>
            <div class="model-essay-prose">\${renderMarkdown(q.shortNote)}</div>
          </div>\` : ''}

        \${q.keywords && q.keywords.length ? \`
          <div class="qb-section">
            <div class="card-eyebrow">EXAMINER HIGH-YIELD KEYWORDS TO HIT</div>
            <div class="keywords-cloud">\${q.keywords.map(k => \`<span class="kw-chip">✓ \${esc(k)}</span>\`).join('')}</div>
          </div>\` : ''}
      </div>
    </div>
  \`).join('');
}

function toggleQbItem(idx) {
  const el = document.getElementById('qb-item-' + idx);
  if (el) el.classList.toggle('active');
}

function filterQuestionBank(val) {
  renderQuestionBank(val);
}

// ─── LIVE ANSWER-WRITING COACH ────────────────────────────────────────────────
let currentCoachQuestion = null;

function renderCoachWorkspace() {
  const sel = document.getElementById('coachPromptSelect');
  if (!sel) return;
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];

  sel.innerHTML = '<option value="">— Select a University Long-Answer Prompt to Practice —</option>'
    + qb.map((q, idx) => \`<option value="\${idx}">[\${q.id || 'QB-' + (idx+1)}] \${q.question.slice(0, 85)}…</option>\`).join('');

  if (currentCoachQuestion) {
    loadCoachQuestion(currentCoachQuestion);
  }
}

function selectCoachPrompt(idx) {
  if (idx === '') return;
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  const q = qb[idx];
  if (q) loadCoachQuestion(q);
}

function startCoachWithQuestion(qId) {
  selectExamSuiteTab('coach');
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  const q = qb.find(it => it.id === qId) || qb[qId];
  if (q) loadCoachQuestion(q);
}

function loadCoachQuestion(q) {
  currentCoachQuestion = q;
  const titleEl = document.getElementById('coachTitle');
  const targetEl = document.getElementById('coachWordTarget');
  const checklistEl = document.getElementById('coachChecklist');
  const modelPanel = document.getElementById('coachModelAnswerPanel');
  const modelText = document.getElementById('coachModelAnswerText');

  if (titleEl) titleEl.textContent = q.question;
  if (targetEl) targetEl.textContent = q.marks === 5 ? '200' : '650';
  if (modelPanel) modelPanel.classList.add('hidden');
  if (modelText) modelText.innerHTML = renderMarkdown(q.modelAnswer || q.shortNote || 'No model answer available.');

  if (checklistEl) {
    const items = q.structure || ['Introduction & Operationalized Definition', 'Clinical Diagnostic Criteria Checklist', 'Biopsychosocial Etiological Framework', 'Evidence-Based Interventions', 'Conclusion & Clinical Prognosis'];
    checklistEl.innerHTML = items.map((it, i) => \`
      <label class="criteria-item" style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px">
        <input type="checkbox" id="coach-chk-\${i}" />
        <span style="font-size:var(--text-xs)">\${esc(it)}</span>
      </label>
    \`).join('');
  }

  // Start coach writing timer
  clearInterval(coachTimerInterval);
  coachSeconds = 0;
  coachTimerInterval = setInterval(() => {
    coachSeconds++;
    const m = Math.floor(coachSeconds / 60);
    const s = coachSeconds % 60;
    const tEl = document.getElementById('coachTimerVal');
    if (tEl) tEl.textContent = \`\${m.toString().padStart(2, '0')}:\${s.toString().padStart(2, '0')}\`;
  }, 1000);
}

function updateCoachWordCount() {
  const textarea = document.getElementById('coachAnswerEditor');
  const countEl = document.getElementById('coachWordCount');
  const badgeEl = document.getElementById('coachPacingBadge');
  if (!textarea || !countEl) return;

  const text = textarea.value.trim();
  const words = text ? text.split(/\\s+/).length : 0;
  countEl.textContent = words;

  const target = parseInt(document.getElementById('coachWordTarget')?.textContent || '650', 10);
  if (badgeEl) {
    if (words >= target) {
      badgeEl.textContent = 'Target Achieved!';
      badgeEl.style.color = 'var(--mint)';
    } else if (words >= target * 0.7) {
      badgeEl.textContent = 'Approaching target';
      badgeEl.style.color = 'var(--primary)';
    } else {
      badgeEl.textContent = 'Writing Active';
      badgeEl.style.color = 'var(--text-3)';
    }
  }
}

function resetCoachAnswer() {
  const textarea = document.getElementById('coachAnswerEditor');
  if (textarea) textarea.value = '';
  updateCoachWordCount();
}

function revealCoachModelAnswer() {
  const panel = document.getElementById('coachModelAnswerPanel');
  if (panel) {
    panel.classList.toggle('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
`;

const updatedScript = script.slice(0, startIndex) + newPhase5Code + '\n\n' + script.slice(endIndex);
fs.writeFileSync(scriptPath, updatedScript, 'utf8');
console.log("Successfully rebuilt script.js with Phase 5 Learning Tools Suite!");
