# PsychStudy → "The Clinical Atlas" — Master Premium Improvements Prompt
**For:** Gemini Flash inside Google Antigravity · **Project:** `PsychStudyV2/` · **Course:** Psychology of Adjustment

**How to use**
1. Open the `PsychStudyV2` folder as the workspace in Antigravity (it must contain `index.html`, `style.css`, `script.js`, `AGENTS.md`, `assets/brain-anatomy.jpg` and `QB of psychology of adjustment .pdf`).
2. Use **Planning mode**. Paste everything from `=== BEGIN PROMPT ===` to `=== END PROMPT ===` — or save this file as `MASTER_PROMPT.md` in the project root and send: *"Read MASTER_PROMPT.md fully and execute it end to end."*
3. If the agent stops mid-way (output limits), send: *"Continue with the next unfinished phase of MASTER_PROMPT.md. Do not redo finished phases. Run the validator first."*

---

=== BEGIN PROMPT ===

<role>
You are a four-person team in one: (1) a Principal UI/UX Designer with an editorial / medical-publishing sensibility, (2) a Senior Front-End Engineer (vanilla HTML/CSS/JS), (3) a Clinical-Psychology Subject-Matter Editor (undergraduate/postgraduate level; DSM-5-TR and ICD-11; Indian university context), and (4) a QA Engineer who never ships anything unverified.
</role>

<mission>
Transform `PsychStudyV2/` — a working vanilla-JS single-page study app — from a competent-but-generic dashboard into a distinctive, premium, niche psychology study environment: **"The Clinical Atlas"**. It should feel like the kind of beautiful, obsessive, hand-crafted study website a psychology student bookmarks and opens every day: a modern neuro-atlas printed like a mid-century medical plate-book by day, an imaging-suite at night.

Three outcomes, equally weighted — all three must be delivered:
1. **UI/UX** — a unique art direction, a refined design system, delightful and accessible interactions, flawless at 1440 / 1024 / 768 / 390 px, in light and dark.
2. **Knowledge** — deeper, factually correct, properly referenced content, with every question in the attached `QB of psychology of adjustment .pdf` answerable from the site.
3. **Structure** — a clear hierarchy (Volumes → Chapters → numbered Sections) so the student always knows where they are and what to read next.
</mission>

<operating_rules>
1. **Read first.** Read `AGENTS.md`, then the whole of `index.html`, `style.css`, `script.js`, extract the text of the PDF, and look at `assets/brain-anatomy.jpg`. Do not assume the structure — Section 1 below is a verified audit; trust it, then confirm it yourself.
2. **Plan, then build.** Create an *Implementation Plan* artifact and a *Task List* artifact before touching code. Then execute the phases in Section 8 in order. Do not stop to ask questions: make the best decision, and record it in the plan. If a fact is uncertain, do not guess — list it under "Uncertain facts" in the final report.
3. **AGENTS.md stays in force** (vanilla SPA, no React/Vue/Next, central `S` store, `lsGet`/`lsSet`, design-tokens-first, flashcard ratings `again/hard/good/easy` feeding re-queue and mastery, deterministic explainable mastery). **One deliberate exception:** the knowledge base may be split out of `script.js` into plain `<script defer>` data files (Section 7). Update `AGENTS.md` at the end to describe the new structure.
4. **Must keep working when double-clicked (`file://`).** No bundler, no npm runtime dependencies, no ES modules, no `fetch()` of local JSON, no CSS `mask-image` or canvas `getImageData` on local images (blocked on `file://`). Fonts/PDF.js may stay on their CDNs; fallbacks must still look intentional offline.
5. **Never break user data.** Keep every existing `id` in `KB` unchanged (progress is keyed by id). Keep localStorage keys and shapes backward-compatible: `psychstudy_progress`, `psychstudy_fc_reviews`, `psychstudy_quiz_attempts`, `psychstudy_last_topic`, `psa_quizcount`, `psa_notes`, `psa_theme`, legacy `psa_progress`. You may add fields and new keys, never remove or rename.
6. **No placeholders, ever.** No `...`, "etc.", "TODO", "lorem", "content continues", or truncated arrays in any data file. If a file gets long, split it into more files — never truncate. Every file you write must be complete and syntactically valid.
7. **Verify with your own eyes.** After each phase, open the app in the Antigravity browser, capture screenshots (light + dark × 1440 / 768 / 390), read the console (zero errors), click through every page, and fix what you see before moving on. Keep the "before" screenshots from Phase 0 for the final walkthrough.
8. **Quality over speed.** Depth, accuracy and polish are judged; speed is not. Do not summarise content you were told to write in full.
9. Keep the footer credit **"Made by Harsh Dubey"** and the product name **PsychStudy**.
</operating_rules>

---

## 1. VERIFIED AUDIT — GROUND TRUTH

**What exists**
- Files: `index.html` (1,104 lines), `style.css` (1,864), `script.js` (2,364 lines, ≈171 KB), `AGENTS.md`, `assets/brain-anatomy.jpg`, `QB of psychology of adjustment .pdf`.
- Six pages: `#pg-dashboard`, `#pg-study`, `#pg-flashcards`, `#pg-notes`, `#pg-quiz`, `#pg-exam`; plus command palette (`#cmdPalette`), brain modal (`#brainModal`), bottom nav, toasts, PDF import (PDF.js loaded dynamically from cdnjs).
- Data: `KB` = 22 topics (Foundations 6, Anxiety 5, Mood 5, Eating 3, Personality 2, Psychotic 1); `FLASHCARD_DECKS` = hand-written cards for only 7 topics (the "All" deck therefore has just 13 cards); `QUIZ_BANK` = 15 fill-blanks + 8 MCQs; `EXAM_DATA` = one 30-mark paper; `DAILY_FACTS` = 5; `BRAIN_ANATOMY_DATA` = 5 regions.
- Current look: warm off-white + lavender/indigo (`--primary:#5B4BC4`), Inter everywhere (the declared "Neue Montreal" is never loaded, so it silently falls back to Inter), rounded white cards, emoji as topic icons. Clean but templated — nothing says "psychology".
- The PDF is the course **exam blueprint**: 25 fill-in-the-blanks + 16 long-answer questions (full list in Appendix C).

**Defects found by running the app (fix all of them)**
| # | Defect | Evidence |
|---|---|---|
| a | **Quiz domain filter is broken** | Choosing Foundations / Anxiety / Mood / Personality returns **0 questions** (bank items have no topic/category field; the filter substring-matches topic names). |
| b | **Fill-blank grading is exact-match** (`ans === q.a`) | The dysthymia item *hints* "Persistent depressive disorder" yet marks that answer wrong; "Sigmund Freud", "hallucinations", "SAD"/"Seasonal Affective Disorder" etc. also fail. |
| c | **Mastery is not truly per-topic** | Any "mixed" quiz attempt credits every topic equally — after one mixed quiz all 22 topics collapse to only two distinct mastery values. Revision Priorities / Mastery-by-Domain are therefore misleading. |
| d | `assets/brain-anatomy.jpg` is shipped but referenced nowhere | A beautiful painted lateral brain is unused while a crude hand-drawn SVG is shown instead. |
| e | Study page hard-codes "DSM-5 Classification" on every topic and titles a section "DSM-5 Diagnostic Criteria & Symptoms" even for Stigma, Culture-bound syndromes, etc. | `renderStudyContent()` |
| f | **Undefined / failing CSS colours** | `--blue`, `--blue-light`, `--pink`, `--pink-light`, `--violet` are used (`CAT_COLOR`, `.s-card-title`) but never defined → category chips for Anxiety/Personality/Psychotic lose their colour. `--mint #A5B9A0` used as text ≈ **2.1:1** contrast; `--text-3 #8E8D99` ≈ 3.3:1; terracotta text ≈ 2.4:1 (WCAG AA needs 4.5:1). Visible as washed-out card titles. |
| g | Study prose is capped at 68 ch inside full-width cards → the right half of every card is empty; **91 inline `style=""` strings** in `script.js` bypass the design system. |
| h | Top navbar overcrowded: "Exam Paper", "Search curriculum…", "Import PDF" wrap to two lines at 1440 px; mobile bottom nav omits Exam. |
| i | Brain SVG: labels clipped ("Somatosensory & Spatial Sc…", "Visual Reception & Processi…", "Motor Coordination & Autonom…"); lobe shapes crude; dashboard "Curriculum Mastery by Domain" renders as stacked text rows with an almost invisible track. |
| j | **Unescaped user text in `innerHTML`** (notes titles/bodies, imported-PDF text, `renderNotesGrid`) → stored-XSS risk. |
| k | Topic `icon` fields are emoji used as UI icons (inconsistent across OS). |
| l | Content gap: **10 of the 16 PDF long-answer questions have no dedicated chapter** (all therapies, help-seeking, cultural issues in care). Only 5 bullets each exist in the exam paper's short notes. Also nothing on stress/coping despite the course title. |

---

## 2. ART DIRECTION — "THE CLINICAL ATLAS"

**Concept.** *Day = "Paper & Ink":* warm vellum paper, ink-black serif headlines, hairline rules, plate numbers and figure captions, one histology-stain accent. *Night = "Imaging Suite":* near-black with luminous, fMRI-like accents. Every domain of psychology gets its own "stain" colour used consistently across chips, rings, SVGs and the heatmap.

**Signature motifs (use all, with restraint — they are seasoning, not the meal)**
1. **Plate-book editorial layout** — "Plate IV · Mood Disorders", figure captions "Fig. 3.2", small-caps eyebrows, hairline rules, registration-mark `+` corners on specimen cards, tabular numerals.
2. **Case-file metaphor** — topics are "Chapters" in "Volumes"; vignettes are styled as paper case files ("Case 07 · fictional composite") with a paper-clip; mastered chapters get a rubber-stamp **REVIEWED** mark (SVG, slight rotation, ink-in animation).
3. **Rorschach blots** — generative, bilaterally symmetric SVG inkblots (mirrored paths + `feTurbulence`/`feDisplacementMap`, seeded per topic) used for hero art, loaders, empty states and chapter openers. Decorative only (`aria-hidden`). Add a "Did you know" that projective tests have limited validity.
4. **EEG-trace dividers** — hairline SVG waveforms (alpha / beta / theta flavours) between sections; draw-in on scroll; static under `prefers-reduced-motion`.
5. **fMRI-style heat maps** for mastery (see Dashboard) — luminance-monotone ramps in each domain hue, never red-green, always with text values/tooltips.
6. **Dark museum vitrine** for the brain plate in *both* themes.

**Tokens.** Retheme by changing token **values**; keep existing token **names** (`--bg`, `--surface`, `--border`, `--text`, `--primary` …) so nothing breaks; add the new ones; define or remove every undefined variable. All text colours below were contrast-checked (≥ 4.5:1) on both paper surfaces.
```css
:root{                         /* PAPER & INK */
  --bg:#F3EEE4; --surface:#FBF8F1; --surface-inset:#EFE8DA; --border:#DDD4C1; --border-strong:#C2B8A2;
  --text:#1B1A22; --text-2:#55525F; --text-3:#6B6774;
  --primary:#3B2F8F;           /* hematoxylin */  --primary-light:#E9E5F7;
  --eosin:#B03A55; --methylene:#0B6B73;
  --d-foundations:#3F4A5A; --d-anxiety:#8A5A00; --d-mood:#4B3FA3; --d-eating:#B03A55;
  --d-personality:#1F6F5F; --d-psychotic:#8B3A8E; --d-therapy:#0B6B73; --d-culture:#A8481F; --d-adjustment:#5A6B2A;
}
[data-theme="dark"]{           /* IMAGING SUITE */
  --bg:#0C0D12; --surface:#14151C; --surface-inset:#1B1C25; --border:#262833; --border-strong:#3A3D4D;
  --text:#ECE9F2; --text-2:#A9A5B6; --text-3:#8A869A;
  --primary:#A99CFF; --primary-light:#25213E; --eosin:#F08AA0; --methylene:#5CC8D0;
  --d-foundations:#9FB0C6; --d-anxiety:#F0B94D; --d-mood:#A99CFF; --d-eating:#F08AA0;
  --d-personality:#6FD1B8; --d-psychotic:#D88BDB; --d-therapy:#5CC8D0; --d-culture:#F0976B; --d-adjustment:#B5C96A;
}
```
(Check `--d-adjustment` contrast yourself; adjust to ≥ 4.5:1.) Respect `prefers-color-scheme` on first visit, then the saved `psa_theme`.

**Typography** (one Google Fonts request, `display=swap`, only the weights/axes you use; sensible fallbacks Georgia / system-ui / ui-monospace):
- Display headings: **Fraunces** (variable; opsz + weight; italic for emphasis words).
- Long-form reading: **Newsreader** 17–18 px / 1.7, measure 62–68 ch.
- UI / labels / buttons: **Instrument Sans**.
- DSM/ICD codes, statistics, keyboard hints: **JetBrains Mono**.
- Use `text-wrap: balance` (headings), `text-wrap: pretty` (paragraphs), `font-variant-numeric: tabular-nums`, `font-variant-caps: all-small-caps` with 0.08em tracking for eyebrows, a restrained drop-cap on each chapter's first paragraph. Remove the dead "Neue Montreal" `@font-face` blocks. Keep the fluid `clamp()` scale and add a hero size ≈ `clamp(2.75rem, 2rem + 3.5vw, 5rem)`.

**Motion.** Spring-ish easing already in `--ease`; durations 150–250 ms for UI, 400–700 ms for reveals. Use the View Transitions API for page changes (feature-detected, with a fade fallback). 3-D card flip, ink-fill progress, stamp-in. Everything honours `prefers-reduced-motion`. No parallax, no autoplay audio, no confetti.

**Anti-patterns (do not do):** purple-gradient-on-white "AI look", emoji as UI icons, stock photos, fake testimonials or fake statistics, centred-everything layouts, identical rounded cards everywhere, heavy drop-shadows, glassmorphism overload, text below 4.5:1.

**Icons.** Replace emoji with a single inline SVG sprite (`<symbol>`s; 24 px grid, 1.5 px stroke, round caps) — vendoring Lucide/Feather paths is allowed (ISC/MIT). Every topic `icon` field becomes a sprite key.

---

## 3. INFORMATION ARCHITECTURE — VOLUMES → CHAPTERS → SECTIONS

**Navigation (desktop):** one-line, `white-space:nowrap` bar — Home · Study · Flashcards · Quizzes · Exam · Notes · **Explore ▾** (Brain Atlas · Concept Map · Timeline · Lexicon · Support). Right cluster: ⌘/Ctrl-K search button, theme toggle, progress ring. Labels collapse to icons + tooltips at 1024–1279 px, hamburger below 1024. Import PDF moves into Notes/Settings. **Mobile bottom bar:** Home · Study · Cards · Quiz · More (sheet: Notes, Exam, Explore, Settings, Support).

**Volumes (domains).** Keep all 22 existing ids. Move `culture-mental-illness`, `culture-bound`, `stigma` into Volume VIII.
| Vol. | Name | Existing | New (id) |
|---|---|---|---|
| I | Foundations of Abnormality | `psych-disorders`, `four-ds`, `dsm` | `models-of-abnormality` |
| II | Anxiety, OCD & Trauma | `gad`, `panic`, `phobias`, `ocd`, `ptsd` | — |
| III | Mood Disorders & Suicide | `major-depression`, `dysthymia`, `sad`, `bipolar`, `suicide` | — |
| IV | Eating Disorders | `anorexia`, `bulimia`, `binge-eating` | — |
| V | Personality Disorders | `antisocial`, `borderline` | — |
| VI | Psychotic Disorders | `schizophrenia` | — |
| VII | Therapies & Interventions | — | `therapy-overview` (insight vs action vs biomedical), `psychoanalysis`, `person-centered`, `behavior-therapy`, `token-economy`, `cbt`, `group-therapy`, `relationship-counselling`, `biomedical-therapies`, `alternative-therapies` |
| VIII | Culture, Stigma & Help-Seeking | `culture-mental-illness`, `culture-bound`, `stigma` | `help-seeking-gender`, `help-seeking-barriers`, `cultural-issues-mh` |
| IX *(stretch)* | Stress, Coping & Adjustment | — | `stress-and-gas`, `coping-and-appraisal`, `defense-mechanisms` |

Target: 36 chapters (+3 stretch). Update category names, `CAT_COLOR`, domain filter pills, "22 Psychology Topics" strings (make counts dynamic: `KB.length`), flashcard "All Topics", quiz slider max, etc.

**Standard chapter sections** (numbered, anchor-linked, with a sticky "In this chapter" rail + scroll-spy). Use the template that fits the chapter's `template` field:
- **`disorder`**: §1 Overview & Definition · §2 Classification (DSM-5-TR / ICD-11, codes) · §3 Clinical Picture · §4 Epidemiology & Course · §5 Etiology (Biological / Psychological / Sociocultural) · §6 Neurobiology (+ link to Atlas region) · §7 Assessment & Differential Diagnosis · §8 Treatment & Evidence · §9 Culture & Context (India lens) · §10 Case File & Myths-vs-Facts · §11 Exam Hub · §12 References.
- **`therapy`**: §1 Origins & Key Figures · §2 Core Concepts · §3 Techniques & Process (step-by-step) · §4 Applications · §5 Evidence & Evaluation · §6 Strengths & Limitations · §7 Ethics & Cultural Fit · §8 Case File · §9 Exam Hub · §10 References.
- **`social`** (culture/help-seeking/stress): §1 Overview · §2 Key Concepts · §3 Evidence & Data (with India lens) · §4 Barriers / Mechanisms · §5 What Helps · §6 Case File · §7 Exam Hub · §8 References.
Every chapter ends with **Prev / Next chapter**, "Mark reviewed", and "Practise this chapter" (jumps into flashcards/quiz filtered to the chapter).

---

## 4. CONTENT STANDARD & DATA SCHEMA

**Voice:** rigorous but readable, like a good university textbook plus a clever tutor. Person-first language ("a person with schizophrenia"). Educational tone, never "you have…". Paraphrase DSM/ICD criteria in your own words — never reproduce copyrighted manual text verbatim.

**Depth targets per chapter:** definition 30–60 words · explanation 400–700 words in 4–7 paragraphs with `### ` sub-headings (write a tiny, safe renderer for `###`, `**bold**`, `*italic*`, lists) · ≥ 6 key points · ≥ 4 references · ≥ 3 myths-vs-facts · 1 case vignette (fictional composite, 120–200 words, with 2–3 reflective questions) · ≥ 6 flashcards · ≥ 5 MCQs · ≥ 2 cloze items · 1 exam model answer. For `disorder` chapters add a **differential table** versus ≥ 2 related disorders and a **comorbidity** list.

**Schema v2 — extend, never remove** (existing fields `id, name, category, icon, preview, definition, explanation, keyPoints, types, symptoms, psychologists, examples, treatment, summary, mnemonic` stay valid):
```js
{ id, volume:'III', order:2, template:'disorder'|'therapy'|'social', category, icon:'sprite-key',
  name, preview, definition, explanation /* with ### */,
  codes:{ icd10cm:['F34.1'], icd11:[], note:'verify against DSM-5-TR' },   // only codes you are certain of (see Appendix E)
  criteria:[ 'paraphrased criterion…' ],   // disorders; keep the 'symptoms' field too
  epidemiology:{ text, stats:[{ claim, value, refId, confidence:'high'|'approx' }] },
  etiology:{ biological:[], psychological:[], sociocultural:[], integrative:'diathesis–stress / biopsychosocial note' },
  neuro:{ regions:['frontal','temporal'], note:'hedged, evidence-graded' },
  differential:[ { vs:'topic-id', distinguishingFeature:'…' } ], comorbidity:['topic-id'],
  treatment:{ summary, options:[ { name, evidence:'strong'|'moderate'|'emerging'|'limited', note } ] },
  cultural:'India lens + cross-cultural note',
  caseFile:{ title, composite:true, text, questions:[] },
  myths:[ { myth, fact, refId } ],
  exam:{ pdfQ:[8], marks:15, structure:[{ heading, points:[] }], modelAnswer:'…', shortNote:'…', mnemonics:[], keyTerms:[] },
  related:['topic-id'], refs:['refId'], contentNote:'Discusses suicide…' /* optional */, lastVerified:'2026-10' }
```
Keep `treatment` readable by the old renderer during migration (string or object), then switch the reader to the new one.

**Referencing rules (strict — this is where trust is won or lost)**
- Create one `REFERENCES` registry (`refId → APA-7 string`). Chapters cite by id; the reader shows numbered superscripts and a References section; a global Bibliography page lists all.
- **Use the pre-vetted list in Appendix B freely. For anything else, cite only works you are certain exist, at the level you are certain about** (e.g., "World Health Organization, 2022" without page numbers). **Never invent DOIs, URLs, volume/page numbers, authors or statistics.** DOIs/URLs only if you opened and verified them in the browser.
- Every number needs a `refId` and a confidence flag; otherwise write qualitatively ("roughly", "in many surveys").
- Neuroscience claims: use *associated with / implicated in / suggests*, not *causes / confirms / directly generates*; add a note that neuroimaging findings are group-level correlations, not diagnostic tests.
- Apply **every correction in Appendix A** to the existing text.

**Safety & ethics rules for content** — Suicide, self-harm, eating disorders, PTSD chapters carry a collapsible *content note* linking to Support. Say "died by suicide", never "committed". No method detail beyond course-level prevention concepts (e.g., means restriction). Eating disorders: **no weight/calorie numbers, targets, or tips** — use DSM-5-TR severity descriptors, not figures. Put an "Educational use only — not for self-diagnosis or treatment" notice in the footer and on the Support page.

---

## 5. PAGE-BY-PAGE SPECIFICATION

### 5.1 Home (Dashboard) — "The Atlas Desk"
- **Hero:** asymmetric editorial layout. Oversized Fraunces headline with an italic accent word ("A clinical atlas of the *mind*"), one-line subtitle, a large ⌘/Ctrl-K search field as the primary call to action, and a "Continue where you left off" strip (last chapter, section, % read). Rorschach blot as quiet background art.
- **Brain plate teaser** → links to Explore ▾ Brain Atlas (full spec in 5.7). Keep a compact interactive version here.
- **Mastery Heatmap:** replaces the plain domain bars. One cell per chapter grouped by Volume, luminance = mastery in the domain hue; hover/focus tooltip with name + % + "due cards"; click opens the chapter. Beside it: domain progress rings and the metric cluster (Chapters reviewed X/36, Quizzes, Notes, Mastery %).
- **Today:** (1) due flashcards count with "Start review", (2) recommended next chapter with an *explainable reason* ("lowest quiz accuracy in Anxiety"), (3) Daily Clinical Insight rotating from ≥ 40 verified facts each with a source, (4) **Study Pulse** — a 12-week activity heatmap (local data) and streak, with no guilt-tripping copy.
- **Curriculum browser:** Volume tabs (not 6 identical pills) + a responsive grid of **specimen cards** (domain-colour spine, plate number, DSM/ICD code chip in mono, 1-line preview, mastery stamp/ring, "Study" / "Cards" actions, read-time). Sort/filter: Volume, template, "weak first", "unstudied".
- Footer: product line, "DSM-5-TR & ICD-11 aligned", "Educational use only", Support link, **Made by Harsh Dubey**.

### 5.2 Study Reader — the heart of the product
- ≥ 1280 px: three columns — **Chapter rail** (sticky TOC with scroll-spy, section progress ticks) · **Article** (62–68 ch, Newsreader) · **Marginalia** (notes editor, key terms, references; collapsible). 768–1279: rail becomes an "In this chapter" dropdown, notes a drawer. < 768: single column, notes as a bottom sheet.
- Top: breadcrumb "Volume III · Mood Disorders › 3.2", **reading-progress hairline**, read-time, content-note banner when relevant.
- Section components (all built as classes, **zero new inline styles**): Definition callout · criteria checklist · differential **compare table** · etiology **tri-panel** (Bio / Psycho / Socio tabs) · treatment table with **evidence-grade pills** · **Case File** card · **Myth ⇄ Fact** flip cards · **Exam Hub** accordion (model answer, mnemonics, cloze practice, "answer-writing checklist").
- **Modes:** Deep · Quick Revision · **Exam-Answer** (the structure + model answer + keywords to hit, with word-count targets). Plus **Focus mode** (hides rail & marginalia).
- **Glossary auto-linking:** any term in the glossary is dotted-underlined in prose; hover/focus/tap opens a popover with definition + etymology + "open in Lexicon". (Safe DOM text-node walker; skip inside links/headings/code.)
- **Selection toolbar** *(P2)*: select text → "Add to notes" / "Highlight" (persist to `psychstudy_highlights`).
- Labels must reflect the chapter (no more blanket "DSM-5 Classification").

### 5.3 Flashcards — "Index-card deck"
- Visual: ruled index card with red margin line and a domain-colour top tab; 3-D flip (crossfade under reduced motion); subtle paper grain made with CSS gradients only.
- **Coverage:** the "All" deck includes every chapter. ≥ 6 hand-written cards per chapter (≥ 220 total), in 6 types: *Define · Cloze · Differentiate (A vs B) · Vignette → diagnosis · Theorist/Term match · Mnemonic*. Keep the generic `generateCardsFromTopic` only as a fallback.
- **Scheduler (SM-2-lite, explainable):** `again` → requeue in-session (≈10 min); `hard` → ×1.2; `good` → ×ease; `easy` → ×ease×1.3; ease adjusts ±; due dates stored in `psychstudy_fc_reviews` with the existing `difficulty` and `lastReviewed` fields preserved (mastery reads `difficulty`). Decks: *Due today · New · Weak (again/hard) · By chapter · By Volume · Exam-only*. Keyboard: Space flip, 1–4 rate, ←/→ navigate, `U` undo; swipe on mobile. End-of-session summary with a "retention" mini-chart.

### 5.4 Quizzes — "Diagnostic Assessment"
- **Fix defects a–c.** Every item gets `{ id, topic, category, type, difficulty, explanation, refId? }`. Fill-blank items carry `answers:[…aliases]`; grading normalises case, punctuation, articles, plural/spelling variants (behavioral/behavioural, generalized/generalised) and accepts aliases; show the canonical key plus a one-line "why".
- **Bank targets:** ≥ 60 cloze (all 25 from the PDF — Appendix C), ≥ 175 MCQs (≥ 5 per chapter), ≥ 20 **vignette → diagnosis** items, ≥ 15 true/false **misconception** items, a few *match-the-pairs*. Slider max = bank size for the selection.
- **Modes:** Practice (instant feedback) · Exam Simulation (timed, no feedback until submit) · Weak-Spots (adaptive from per-topic mastery) · By Volume/Chapter.
- **Results:** score, per-topic breakdown, "review mistakes" (adds missed items to flashcard queue). Store attempts with `byTopic:{ id:{ c, t } }` (keep old fields). Rebuild `calculateTopicMastery` to use *that topic's* results only; keep it deterministic and explainable (study 30 / flashcards 35 / quiz 35 as today, now genuinely per-topic) and show the breakdown on hover in the heatmap.

### 5.5 Exam Paper — "University Examination Suite"
- Keep Paper A (30 marks, 1 h). Add **Paper B** (new, fully from the PDF blueprint) and the **Question Bank**: all 16 PDF long-answer questions as an accordion, each with `{ marks, structure checklist, 15-mark model answer (600–800 words), 5-mark short note (170–220 words), keywords-to-hit, linked chapters }`.
- **Answer-writing coach:** timer, live word count vs target, structure checklist from `exam.structure`, self-marking rubric, then "reveal model answer" side-by-side.
- Print CSS: A4, serif, running header (course · time · marks), page numbers, answer key hidden unless toggled.

### 5.6 Notes Workspace
Keep `psa_notes` shape. Add: markdown-lite with preview, tags, chapter linking + backlinks ("Notes on this chapter" appears in the reader), pin, search, **export/import JSON**, print. **Escape all user text** (`esc()` helper) and sanitise imported-PDF text. PDF import keeps working, moves into Settings/Notes and shows a proper progress state.

### 5.7 Brain Atlas (Explore ▾) — rebuild the weakest visual
- **Plate I:** present `assets/brain-anatomy.jpg` in a dark vitrine (both themes). Crop away its baked-in label columns, title and legend (≈ x 11–81 %, y 9–83 % of the image — verify visually). Draw **your own** HTML/SVG labels with leader lines (legible, themable, keyboard-focusable; no clipping at any width).
- **Hotspots (Option A, preferred):** segment the lobes from the JPG by colour (frontal salmon, parietal blue, temporal green, occipital purple, cerebellum orange-brown, brainstem tan) with a **dev-time script** (Python PIL/numpy or Node), trace each to a simplified SVG path (≤ 80 points) and embed inline in an overlay `<svg>` with the same `viewBox` as the cropped plate. Hover/focus/active → glow + dim the rest. **Verify alignment by screenshot with outlines drawn; never ship misaligned overlays.** *Option B (if segmentation fails twice):* static plate + numbered pins at lobe centroids + the region list.
- **Second tab: "Limbic & subcortical schematic"** — clean labelled schematic ("not to scale"): amygdala, hippocampus, hypothalamus (**the suprachiasmatic nucleus lives here**), thalamus, basal ganglia/striatum, nucleus accumbens, insula, anterior cingulate, locus coeruleus, raphe nuclei. Each structure links to the disorders it is implicated in and to those chapters.
- Update `BRAIN_ANATOMY_DATA`: fix errors (Appendix A), add `evidence` levels and hedged language, keep `topicIds` links, and surface "Linked chapters" chips.

### 5.8 Command palette
Index chapters (name, aliases, definition, keywords), glossary terms, exam questions, notes. Fuzzy match, grouped results, ↑/↓/Enter, recent searches, `/` to focus search, show **Ctrl K** on non-Mac. Escape HTML in results.

### 5.9 Settings sheet
Theme (Light / Dark / System), reading size (S/M/L), reduce-motion override, export/import all data (JSON), reset progress (typed confirmation). No telemetry.

---

## 6. SIGNATURE FEATURES (the "cool, niche" layer)
1. **Lexicon** — A–Z glossary of **≥ 150 terms** with pronunciation, a one-line definition, **etymology** (e.g., *schizophrenia* ← Gk *skhizein* "to split" + *phrēn* "mind"; *phobia* ← *Phobos*; *hysteria* ← *hystera* "womb", now historical), linked chapters, and filter by Volume. Powers the auto-link popovers.
2. **Concept Map ("Constellation")** — static-layout SVG graph of chapters coloured by Volume; edges = comorbidity / differential / treatment links from the data; click a node → chapter; hover highlights neighbours; keyboard-navigable; a list view for accessibility.
3. **Timeline** — horizontal, scrollable history of mental-health care (seed events in Appendix D, each with a one-line significance and source), filter by *Concepts / Treatments / Law & Policy (India)*.
4. **Differential Diagnosis Trainer** — "Spot the disorder": vignette → choose ≥ 1 of 3–4 → explanation with the distinguishing feature (reuses `differential` data).
5. **Focus timer** — Pomodoro (25/5) with a breathing-orb animation (4-6 pacing option), pause/skip, no sound; sits in the reader header.
6. **Support page** — crisis and support resources (Appendix F), safe-messaging note, disclaimer, "how to talk to a friend" 5-line guide.
7. **Mastery stamp** — REVIEWED ink stamp on chapters ≥ 80 % mastery.
8. **Daily Insight** — ≥ 40 verified facts, each with a `refId`; deterministic rotation by date.

---

## 7. ENGINEERING, ACCESSIBILITY, PERFORMANCE

**File structure** (classic scripts, `defer`, in this order; no modules):
```
index.html  style.css  script.js  (logic only)  AGENTS.md  MASTER_PROMPT.md
assets/  brain-anatomy.jpg  icons.svg(or inline sprite)
data/  refs.js  kb-1-foundations.js  kb-2-anxiety.js  kb-3-mood.js  kb-4-eating.js  kb-5-personality.js
       kb-6-psychotic.js  kb-7-therapies.js  kb-8-culture.js  kb-9-adjustment.js
       cards.js  quiz.js  exam.js  glossary.js  timeline.js  facts.js  brain.js
tools/  validate-data.mjs  (Node, zero deps — dev only)
```
Data files append to `window.PS_DATA` / push into `KB`; `script.js` assembles them. Keep globals `S`, `KB`, `lsGet`, `lsSet`, `navigate` and existing function names callable (inline `onclick` may remain, but new code uses `data-` attributes + delegated listeners).

**CSS:** organise with `@layer tokens, base, layout, components, pages, utilities;`. Replace all 91 inline styles in `script.js` with classes. Delete dead tokens only after grepping. Add `@media print`, `forced-colors`, `prefers-reduced-motion`, `prefers-color-scheme` handling.

**Validator (`tools/validate-data.mjs`) — build it in Phase 2 and run it after every data file.** It loads data files in a `vm` sandbox and **fails (exit 1)** on: duplicate ids · missing required fields · unknown `topicIds`/`related`/`vs` references · `refs` not in `REFERENCES` · word counts below Section 4 targets · placeholder strings (`TODO`, `lorem`, `...`, `etc.`) · cloze items without `answers` · missing `pdfQ` coverage (every PDF item mapped) · MCQs with `correct` out of range · duplicate flashcard terms · chapters lacking cards/quiz/exam entries. Print a coverage table at the end.

**Accessibility (WCAG 2.2 AA):** every text/background pair ≥ 4.5:1 (3:1 for large text/UI), visible `:focus-visible` rings, skip link, landmarks, ARIA tabs/dialogs with focus trapping and Esc, hotspots operable by keyboard, touch targets ≥ 44 px, `lang="en"`, no colour-only meaning (heatmap and stamps have text), reduced-motion respected, 200 % zoom without loss.

**Performance:** no layout shift (CLS < 0.05), lazy-render the grid, `content-visibility:auto` on long sections, debounce search, no heavy libraries; **no console errors or warnings**. Lighthouse targets if measurable: Performance ≥ 90 (mobile), Accessibility ≥ 95, Best Practices ≥ 95.

**Security:** `esc()` every user-originated string; never interpolate ids into inline JS strings without escaping; sanitise imported PDF text.

---

## 8. EXECUTION PHASES (do them in order; each ends with verification)

| Phase | Work | Gate before moving on |
|---|---|---|
| **0 Recon & plan** | Read everything; baseline screenshots (light/dark × 1440/768/390) of all pages; write Implementation Plan + Task List; confirm Section 1 audit. | Plan artifact written. |
| **1 Foundation** | Tokens, fonts, CSS layers, icon sprite, nav/shell (fix h), define/remove undefined vars (f), escaping (j), fix quiz filter + alias grading scaffold + per-topic mastery (a–c). | Zero console errors; all six pages still work; screenshots reviewed. |
| **2 Data architecture** | Split data into `data/`, migrate the 22 topics **unchanged in meaning**, apply Appendix A fixes, create `REFERENCES`, build + pass the validator. | Validator exits 0. |
| **3 Content** | Write chapters **Volume by Volume** in this order: VII Therapies → VIII Culture & Help-seeking → I Foundations (+ `models-of-abnormality`) → deepen II–VI to schema v2 → IX stretch. After **each** volume: run the validator, fix, then continue. | Validator exits 0 after every volume; targets in Section 4 met. |
| **4 Reader · Home · Atlas** | Build 5.2, 5.1, 5.7 (incl. glossary popovers, heatmap, brain plate + hotspots + limbic schematic). | Screenshots at all breakpoints/themes; hotspot alignment proof. |
| **5 Learning tools** | 5.3 flashcards + scheduler, 5.4 quizzes, 5.5 exam suite + 16-question bank, 5.6 notes, 5.8 palette, 5.9 settings. | Every PDF item answerable (validator coverage table = 100 %). |
| **6 Signature layer** | Lexicon, Concept Map, Timeline, Differential Trainer, Focus timer, Support page, Rorschach art, EEG dividers, stamps. | Each feature keyboard- and screen-reader-checked. |
| **7 QA & handover** | Full regression of every flow; a11y pass (contrast script + keyboard-only walk-through); responsive pass; print preview of Exam; reduced-motion pass; `file://` test; update `AGENTS.md`; produce Walkthrough artifact (before/after screenshots). | Definition of Done below is fully ticked. |

---

## 9. DEFINITION OF DONE (all must be true)
- [ ] All Section 1 defects (a–l) fixed and demonstrated.
- [ ] 36 chapters (+ stretch) in 8 Volumes, each following its section template, with the depth targets met (validator-enforced).
- [ ] Every one of the 25 PDF fill-blanks and 16 PDF long-answer questions is covered by a chapter, ≥ 1 flashcard, quiz/cloze item and (for the 16) a model answer.
- [ ] Appendix A corrections applied everywhere (reader, flashcards, quiz, exam, atlas, daily facts, footer strings).
- [ ] No fabricated citations; every statistic has a `refId`; uncertain items listed in the final report.
- [ ] Light and dark themes both polished; no text below 4.5:1; no horizontal scroll at 390 px; nav never wraps at 1440 px.
- [ ] Brain plate uses `brain-anatomy.jpg` with aligned hotspots (or Option B), no clipped labels; limbic schematic included.
- [ ] Zero console errors/warnings; works from `file://`; keyboard-only usable; reduced-motion respected.
- [ ] `tools/validate-data.mjs` passes; `AGENTS.md` updated; Walkthrough artifact with before/after screenshots delivered.
- [ ] Final report lists: what changed, files added, decisions taken, **uncertain facts to verify**, and any P2 items not completed.

**Priority if time runs short:** P0 = Sections 1 defects, 4 (accuracy), 5.2, 5.4, 5.5, Volume VII–VIII content. P1 = 5.1, 5.3, 5.7, 5.8. P2 = Section 6 extras and selection highlights. Never trade accuracy or accessibility for flair.

---

## APPENDIX A — FACT CORRECTIONS TO APPLY
| Where | Currently says | Correct to |
|---|---|---|
| DSM chapter, footer, hero badge, study labels | "Current edition is DSM-5 (2013)"; "DSM-5 Aligned" | **DSM-5-TR (text revision, March 2022)** is current; DSM-5 was 2013. Say "DSM-5-TR & ICD-11 aligned". ICD-11 took effect 1 Jan 2022 (personality disorders there are dimensional: severity + trait domains). |
| Four Ds | "Diagnosed using the four Ds… classified using DSM-5" | The **Four Ds (Distress, Dysfunction, Deviance, Danger) are a textbook teaching heuristic, not DSM criteria.** Add the DSM-5-TR idea of a mental disorder in your own words: a clinically significant disturbance in cognition, emotion regulation or behaviour reflecting dysfunction in underlying processes, usually with distress or disability, and *not* merely an expected response to a stressor or a culturally sanctioned behaviour. |
| DSM history | DSM-III "first multi-axial" kept without comment | Keep, and add: **multiaxial system was dropped in DSM-5.** |
| Homosexuality | "removed from DSM in 1974" | APA trustees voted **Dec 1973**; removal appeared in the 1974 printing of DSM-II; "ego-dystonic homosexuality" lingered until DSM-III-R (1987). |
| Schizophrenia subtypes | Paranoid / disorganised / catatonic / residual shown as current types | These are **DSM-IV subtypes, removed in DSM-5 (2013)**, replaced by dimensional symptom-severity ratings; catatonia is now a specifier. Keep them (Indian syllabi still ask) but label "classic DSM-IV subtypes". |
| Schizophrenia mnemonic | "HAPPY and FLAT" | Use the standard **"5 A's" of negative symptoms**: affective flattening, alogia, anhedonia, asociality, avolition. Add that the dopamine hypothesis has been revised (Howes & Kapur, 2009) and glutamate/NMDA hypofunction is also implicated. |
| Anorexia nervosa | "≤ 85 % of normal weight", "amenorrhoea", "mortality up to 20 %" | Weight/amenorrhoea criteria are **DSM-IV**; DSM-5 uses **significantly low body weight** and dropped amenorrhoea. Do **not** show numeric weight thresholds. Mortality: **meta-analysis (Arcelus et al., 2011) ≈ 5.9× expected mortality; about 1 in 5 deaths were by suicide** — replace "up to 20 %" and "highest of any mental disorder" with that, hedged. Update flashcards, MCQ explanation, daily facts. |
| Binge-eating disorder | — | Add: **formally recognised as its own diagnosis in DSM-5 (2013)**; most prevalent eating disorder in US survey data (Hudson et al., 2007). |
| Dysthymia | Only "dysthymia" | **DSM-5/-TR: Persistent Depressive Disorder** (≥ 2 years adults; ≥ 1 year children/adolescents); "dysthymia" is the legacy term (ICD-10 F34.1). Accept both in quizzes. |
| Social phobia | "Social phobia" | **Social anxiety disorder** in DSM-5; keep "social phobia" as the exam-friendly legacy term. |
| Culture-bound syndromes | Only that term | **DSM-5 replaced it with "cultural concepts of distress"** (cultural syndromes, idioms of distress, causal explanations) and added the **Cultural Formulation Interview**. Keep the classic term for exams, teach the modern one. Add *ataque de nervios, taijin kyofusho, susto, brain fag* as further examples; retain Dhat, Koro, Hikikomori, Grisi siknis. |
| Hysteria | "disappeared" | Absorbed into **conversion disorder / functional neurological symptom disorder** and somatic symptom disorders. |
| Brain Atlas | "Cerebellar… suprachiasmatic nucleus (SCN)" in the cerebellum/brainstem panel | **The SCN is in the hypothalamus**, not the cerebellum/brainstem — move it to the limbic/subcortical view. |
| Brain Atlas | "cerebellum contains more than 50 % of neurons" | **≈ 80 % (~69 of ~86 billion; Azevedo et al., 2009).** |
| Brain Atlas | "Cerebellar cognitive-affective syndrome contributes to bipolar disorder" | Unsupported → remove. Soften "directly generates", "confirms", "provides a neurobiological basis" to "is associated with / suggests". |
| Gender & depression | "70 % more likely" | Say "roughly 1.5–2 : 1 in many large surveys (e.g., Kessler et al.)"; avoid false precision. |
| Suicide | gender "4×" flat | "Men die by suicide ≈ 3–4× more often in many high-income countries while women attempt more often (the *gender paradox*); ratios differ by country — in India the gap is narrower." Prefer hedged wording. |
| Rosenhan (1973) | cited without caveat | Keep, add critical evaluation (methodological criticisms; later scrutiny of the study). |
| General | "over 200 disorders" | Replace with "hundreds of diagnostic categories" unless you cite an exact count. |

## APPENDIX B — PRE-VETTED SOURCES (cite freely; add nothing else unless certain)
American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.). APA Publishing. · World Health Organization. (2022). *ICD-11: International classification of diseases* (11th rev.). · Gururaj, G., et al. (2016). *National Mental Health Survey of India, 2015–16*. NIMHANS. · Government of India. (2017). *The Mental Healthcare Act, 2017* (Act No. 10 of 2017). · Rosenhan, D. L. (1973). On being sane in insane places. *Science, 179*(4070), 250–258. · Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. *Journal of Consulting Psychology, 21*(2), 95–103. · Rogers, C. R. (1951). *Client-centered therapy*. Houghton Mifflin. · Watson, J. B., & Rayner, R. (1920). Conditioned emotional reactions. *Journal of Experimental Psychology, 3*(1), 1–14. · Wolpe, J. (1958). *Psychotherapy by reciprocal inhibition*. Stanford University Press. · Ayllon, T., & Azrin, N. H. (1968). *The token economy*. Appleton-Century-Crofts. · Beck, A. T. (1976). *Cognitive therapy and the emotional disorders*. International Universities Press. · Beck, A. T., Rush, A. J., Shaw, B. F., & Emery, G. (1979). *Cognitive therapy of depression*. Guilford. · Linehan, M. M. (1993). *Cognitive-behavioral treatment of borderline personality disorder*. Guilford. · Breuer, J., & Freud, S. (1895). *Studies on hysteria*. · Freud, S. (1900). *The interpretation of dreams*. · Bleuler, E. (1911). *Dementia praecox oder Gruppe der Schizophrenien*. · Yalom, I. D., & Leszcz, M. (2020). *The theory and practice of group psychotherapy* (6th ed.). Basic Books. · Gottman, J. M., & Silver, N. (1999). *The seven principles for making marriage work*. Crown. · Johnson, S. M. (2004). *The practice of emotionally focused couple therapy* (2nd ed.). Brunner-Routledge. · Foa, E. B., & Kozak, M. J. (1986). Emotional processing of fear. *Psychological Bulletin, 99*(1), 20–35. · Salkovskis, P. M. (1985). Obsessional-compulsive problems: A cognitive-behavioural analysis. *Behaviour Research and Therapy, 23*(5), 571–583. · Clark, D. M. (1986). A cognitive approach to panic. *Behaviour Research and Therapy, 24*(4), 461–470. · Klein, D. F. (1993). False suffocation alarms, spontaneous panics, and related conditions. *Archives of General Psychiatry, 50*(4), 306–317. · Ehlers, A., & Clark, D. M. (2000). A cognitive model of posttraumatic stress disorder. *Behaviour Research and Therapy, 38*(4), 319–345. · Kessler, R. C., et al. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders in the National Comorbidity Survey Replication. *Archives of General Psychiatry, 62*(6), 593–602. · Arcelus, J., Mitchell, A. J., Wales, J., & Nielsen, S. (2011). Mortality rates in patients with anorexia nervosa and other eating disorders: A meta-analysis of 36 studies. *Archives of General Psychiatry, 68*(7), 724–731. · Hudson, J. I., Hiripi, E., Pope, H. G., & Kessler, R. C. (2007). The prevalence and correlates of eating disorders in the National Comorbidity Survey Replication. *Biological Psychiatry, 61*(3), 348–358. · Fairburn, C. G. (2008). *Cognitive behavior therapy and eating disorders*. Guilford. · Lock, J., & Le Grange, D. (2013). *Help your teenager beat an eating disorder* (2nd ed.). Guilford. · Rosenthal, N. E., et al. (1984). Seasonal affective disorder: A description of the syndrome and preliminary findings with light therapy. *Archives of General Psychiatry, 41*(1), 72–80. · Howes, O. D., & Kapur, S. (2009). The dopamine hypothesis of schizophrenia: Version III. *Schizophrenia Bulletin, 35*(3), 549–562. · Cade, J. F. J. (1949). Lithium salts in the treatment of psychotic excitement. *Medical Journal of Australia, 2*(10), 349–352. · Azevedo, F. A. C., et al. (2009). Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain. *Journal of Comparative Neurology, 513*(5), 532–541. · Corrigan, P. (2004). How stigma interferes with mental health care. *American Psychologist, 59*(7), 614–625. · Addis, M. E., & Mahalik, J. R. (2003). Men, masculinity, and the contexts of help seeking. *American Psychologist, 58*(1), 5–14. · Kleinman, A. (1988). *Rethinking psychiatry*. Free Press. · Kleinman, A., Eisenberg, L., & Good, B. (1978). Culture, illness, and care. *Annals of Internal Medicine, 88*(2), 251–258. · Joiner, T. (2005). *Why people die by suicide*. Harvard University Press. · Durkheim, É. (1897). *Le suicide*. · Hare, R. D. (2003). *Manual for the Hare Psychopathy Checklist–Revised* (2nd ed.). Multi-Health Systems. · Cleckley, H. (1941). *The mask of sanity*. Mosby. · Selye, H. (1936). A syndrome produced by diverse nocuous agents. *Nature, 138*, 32. · Lazarus, R. S., & Folkman, S. (1984). *Stress, appraisal, and coping*. Springer.

## APPENDIX C — EXAM BLUEPRINT FROM THE PDF (`QB of psychology of adjustment .pdf`)
**Fill-in-the-blanks (25) → canonical answer · aliases to accept.** 1 social · social anxiety — 2 bipolar — 3 hallucinations · hallucination — 4 delusions · delusion — 5 suicide — 6 seasonal affective disorder · SAD — 7 awareness · understanding · insight — 8 psychoanalysis · psychoanalytic therapy · psychodynamic therapy — 9 behavioral · behavioural — 10 compulsions · rituals · compulsive behaviours — 11 Freud · Sigmund Freud — 12 ECT — 13 anorexia — 14 social · social anxiety — 15 psychiatric — 16 *source is ambiguous* → accept flooding · implosion · implosive · desensitisation/desensitization and show a note explaining the exposure-therapy family — 17 transference — 18 depressive · depression · major depressive — 19 schizophrenia · psychosis · psychotic disorder — 20 psychosis · schizophrenia · psychotic disorders — 21 dysthymia · persistent depressive disorder · PDD · dysthymic disorder — 22 panic — 23 phobia · specific phobia · phobias — 24 stigma — 25 generalized/generalised anxiety disorder · GAD.
**Currently missing from `QUIZ_BANK`:** items 5, 7, 8, 12, 13, 14, 16, 18, 19, 20, 22, 23, 25 (13 of 25).

**Long-answer questions (16) → chapters.** 1 mental illness across time & cultures + culture-bound syndromes → `culture-mental-illness`, `culture-bound`, Timeline · 2 anxiety disorders (GAD, OCD) → `gad`, `ocd` · 3 gender differences in help-seeking → `help-seeking-gender` · 4 behaviour therapy → `behavior-therapy` · 5 person-centred therapy → `person-centered` · 6 cultural issues in mental-health care → `cultural-issues-mh` · 7 psychoanalysis & techniques → `psychoanalysis` · 8 eating disorders (anorexia, bulimia, binge eating) → `anorexia`, `bulimia`, `binge-eating` · 9 personality disorders (antisocial, borderline) → `antisocial`, `borderline` · 10 reasons for reluctance to seek professional help → `help-seeking-barriers`, `stigma` · 11 behavioural therapies & token economy → `behavior-therapy`, `token-economy` · 12 group therapy → `group-therapy` · 13 relationship counselling → `relationship-counselling` · 14 alternative therapies → `alternative-therapies` · 15 define psychological disorders + four criteria → `psych-disorders`, `four-ds` · 16 suicide: causes, warning signs, prevention → `suicide`.
Content hints: psychoanalysis — free association, dream analysis, transference/countertransference, resistance, interpretation, catharsis, Freud's topographic & structural models, defence mechanisms. Person-centred — actualising tendency, conditions of worth, unconditional positive regard, empathy, congruence (genuineness). Behaviour therapy — classical (Pavlov, Watson & Rayner), operant (Skinner), systematic desensitisation (Wolpe), flooding/implosion, aversion, modelling (Bandura), exposure & response prevention. Token economy — target behaviours, tokens, back-up reinforcers, exchange rates, response cost, settings, ethics, generalisation limits. Group therapy — Yalom's curative factors, group types (psychoeducational, support, process, self-help), size, stages, advantages/limits. Relationship counselling — Gottman (Four Horsemen, repair), EFT/attachment, communication skills (active listening, "I" statements), when *not* to use couples work (e.g., intimate-partner violence). Alternative therapies — mindfulness (MBSR/MBCT), yoga, meditation, art/music/dance-movement therapy, bright-light therapy for SAD, exercise, traditional/ayurvedic systems, herbal remedies & interaction risks — **label each with an honest evidence grade**. Biomedical — antipsychotics, antidepressants, mood stabilisers (lithium), anxiolytics, ECT (modern practice: anaesthesia + muscle relaxant), rTMS.

## APPENDIX D — TIMELINE SEED (dates verified; add one-line significance + source to each)
Neolithic trephination (purpose debated) · c. 460–370 BCE Hippocrates, natural/humoral explanations · 1247 Bethlem (London) founded, later "Bedlam" · c. 1486–87 *Malleus Maleficarum* · 1793 Pinel at Bicêtre ("moral treatment", traditional date) · 1840s Dorothea Dix asylum reform · 1883 Kraepelin's *Compendium* (1899 6th ed.: dementia praecox vs manic-depressive illness) · 1895 *Studies on Hysteria* · 1900 *The Interpretation of Dreams* · 1911 Bleuler coins "schizophrenia" · 1913 Watson's behaviourist manifesto · 1938 first ECT (Cerletti & Bini) · 1949 Cade, lithium · 1951 Rogers, *Client-Centered Therapy* · 1952 DSM-I; chlorpromazine · 1963 US Community Mental Health Act (deinstitutionalisation) · 1973 Rosenhan; APA vote on homosexuality · 1980 DSM-III (PTSD; multiaxial) · 1982 India's National Mental Health Programme · 1987 India's Mental Health Act · 1993 Linehan's DBT manual · 2013 DSM-5 · 2017 Mental Healthcare Act (India) · 2022 DSM-5-TR (adds prolonged grief disorder) and ICD-11 in effect · Oct 2022 Tele-MANAS launched (India).

## APPENDIX E — CODES YOU MAY USE (omit any you cannot verify)
GAD F41.1 · Panic disorder F41.0 · Social anxiety disorder F40.10 · OCD F42.2 · PTSD F43.10 · Persistent depressive disorder F34.1 · Major depressive disorder F32.x (single) / F33.x (recurrent) · Bipolar I F31.x (by current episode) · Schizophrenia F20.9 · Bulimia nervosa F50.2 · Binge-eating disorder F50.81 · Antisocial PD F60.2 · Borderline PD F60.3.

## APPENDIX F — SUPPORT PAGE RESOURCES (open each official site to verify; if you cannot, link the organisation's site instead of printing a number)
India: Tele-MANAS **14416** (also 1-800-891-4416), 24×7 · KIRAN **1800-599-0019**, 24×7 · iCall (TISS) **9152987821**, *not 24×7 — listed as Mon–Sat, 10 am–8 pm; show hours and re-verify* · AASRA **+91-9820466726**, 24×7 · national emergency **112**. (Cross-checked against one secondary directory only — confirm on the official sites.) US: **988**. UK & Ireland: Samaritans **116 123**. Elsewhere: findahelpline.com. Wording: supportive, no promises about confidentiality or outcomes, "if you may be in immediate danger, call your local emergency number".

## FINAL REPORT FORMAT
End with: (1) a 10-line summary of what changed, (2) before/after screenshot grid (light & dark), (3) validator coverage table, (4) **Uncertain facts to verify** (bulleted), (5) P2 items not completed, (6) how to run/test.

=== END PROMPT ===
