# PsychStudy — Agent Context & Rules

## Project Overview
**PsychStudy ("The Clinical Atlas")** is a university-standard clinical psychology study environment, diagnostic framework, and revision suite aligned with **DSM-5-TR** and **WHO ICD-11**. It operates as a zero-dependency, high-performance vanilla single-page application (HTML5, CSS3, ES6+) that runs fully offline via double-clicking `index.html`.

## Architecture & File Structure
- `index.html`: Main SPA structure containing sections for Atlas Desk Dashboard, 3-Column Academic Reader, Active Recall Flashcards (SM-2-lite), Diagnostic Quiz Engine, University Examination Suite, Notes Workspace, Command Palette (`⌘K`), and Modals for Lexicon, Constellation, Timeline, Differential Trainer, Focus Timer, and Crisis Support.
- `style.css`: Comprehensive design system with CSS custom properties:
  - **Luminous Living Palette (Day)**: Clean clinic porcelain canvas (`#F8FAFC`), crisp white cards (`#FFFFFF`), refined slate borders (`#E2E8F0`), and bioluminescent synaptic indigo (`#4338CA`).
  - **Imaging Suite (Night)**: Nocturnal dark slate workstation (`#090D16`), deep blue-slate cards (`#131A2B`), and neon glowing accents (`#818CF8`, `#38BDF8`, `#2DD4BF`).
  - **9 Domain Stains**: Vol I (`#0D9488`), Vol II (`#0284C7`), Vol III (`#7C3AED`), Vol IV (`#E11D48`), Vol V (`#9333EA`), Vol VI (`#2563EB`), Vol VII (`#10B981`), Vol VIII (`#D97706`), Vol IX (`#059669`).
  - **Typography Scales**: `Fraunces` (Editorial Display), `Newsreader` (Academic Reading Prose), `Instrument Sans` (Modern UI / Navigation / Controls), and `JetBrains Mono` (Clinical DSM/ICD Codes & Metrics).
- `script.js`: Core controller managing knowledge base (43 chapters), SM-2-lite spaced repetition flashcards, deterministic mastery scoring, cloze alias evaluation, question bank, live writing coach, notes workspace, modal controllers, and local storage persistence.
- `data/`: 17 validated ESM/vanilla data modules passing `tools/validate-data.mjs` (43 chapters, 121 flashcards, 60 quiz questions, 16 long-answer questions, 168 glossary terms, 25 timeline milestones, 42 clinical facts, 47 APA-7 references).
- `assets/`: Human brain neuroanatomy lateral visual plate (`assets/brain-anatomy.jpg`), logo (`PsychStudy Brain Learning Logo.png`), and favicon (`Minimal White Brain Sprout Icon.png`).

## Key Rules for AI Coding Agents
1. **Preserve Working Architecture**: Do not convert to React/Next.js/Vue or introduce build bundlers. The application must run cleanly from `file:///` offline without npm dependencies or local server requirements.
2. **Centralized Data Store**: Use `S` object and `lsGet`/`lsSet` helpers for state management and local persistence (`psychstudy_progress`, `psychstudy_fc_reviews`, `psychstudy_quiz_attempts`, `psa_notes`, `psychstudy_criteria_checked`).
3. **Design System First**: Always reuse CSS variables (`var(--primary)`, `var(--surface)`, `var(--border)`, `var(--radius)`, etc.) rather than hardcoding colors or arbitrary pixel values.
4. **Active Recall & Spaced Repetition**: Keep flashcard confidence ratings (`again`, `hard`, `good`, `easy`) connected to card re-queuing, interval calculations, and topic mastery.
5. **Deterministic Intelligence**: Mastery scores and recommended next topics use explainable, deterministic calculations based on completion, quiz accuracy, and flashcard confidence.
6. **Mandatory Attribution**: Strict preservation of footer credit: **"Made by Harsh Dubey"**.
7. **Accessibility & Contrast**: Maintain WCAG AA compliance (contrast ratio ≥ 4.5:1 for normal text, ≥ 3.0:1 for large text/icons) across both Light and Dark themes.
