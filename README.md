# PsychStudy — The Clinical Atlas

[![Data Integrity Check](https://github.com/chillingbing648-sketch/PsychStudy/actions/workflows/deploy.yml/badge.svg)](https://github.com/chillingbing648-sketch/PsychStudy/actions)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-4338CA)](https://chillingbing648-sketch.github.io/PsychStudy/)
[![Aligned with](https://img.shields.io/badge/Diagnostic%20Standard-DSM--5--TR%20%7C%20ICD--11-0D9488)](https://github.com/chillingbing648-sketch/PsychStudy)

> **University-standard clinical psychology study companion, multi-axial diagnostic framework, and structured examination workspace.**

Made by **Harsh Dubey**.

---

## 🌟 Overview

**PsychStudy ("The Clinical Atlas")** is a university-standard revision environment and diagnostic learning suite strictly aligned with the **American Psychiatric Association DSM-5-TR** and the **World Health Organization ICD-11**. It operates as a zero-dependency, high-performance vanilla single-page application (HTML5, CSS3, ES6+) that runs fully offline and in modern browsers.

---

## 🔬 Core Learning Engines

1. **3-Column Academic Reader (`#pg-study`)**:
   - 12-section operationalized chapter reader covering Definition (§1), Classification (§2), Criteria Checklist (§3), Epidemiology (§4), Biopsychosocial Etiology Tri-Panel (§5), Functional Neurobiology (§6), Differential Diagnosis Comparison (§7), Evidence-Based Treatments (§8), Cultural Formulation (§9), Clinical Case File & Myths (§10), Examination Hub (§11), and Academic APA-7 References (§12).
   - Dynamic reading modes: **Deep**, **Quick**, and **Exam Answer Structure**.

2. **Active Recall & Spaced Retrieval (`#pg-flashcards`)**:
   - 121 curated index cards across all 43 curriculum chapters.
   - SM-2-lite spaced repetition algorithm with confidence rating hotkeys (`[1] Again`, `[2] Hard`, `[3] Good`, `[4] Easy`, `[Space] Flip`, `[U] Undo`).

3. **Diagnostic Assessment & Quiz Suite (`#pg-quiz`)**:
   - Instant 1-click launchpad presets: **⚡ Rapid 10**, **🎯 Standard 20**, **🏆 Timed Exam (15 min)**, and **🧠 Weak Spots**.
   - Section A: Operationalized cloze recall with canonical criterion validation and clinical clues.
   - Section B: Case vignettes with multiple choice differential diagnostics and diagnostic rationales.
   - Real-time Assessment HUD with question jump navigation.

4. **Topological Concept Map ("Constellation")**:
   - Interactive knowledge graph spanning all 43 chapters and 39 comorbidity/differential links.
   - Ethereal hairline connections that illuminate on hover/selection with comorbidity inspector drawer and 1-tap chapter routing.

5. **University Examination Suite & Question Bank (`#pg-exam`)**:
   - Standardized Examination Papers A & B (30 marks each).
   - Question Bank of 16 long-answer examination prompts with model rubrics and marking criteria.
   - Live Answer-Writing Coach with real-time timer, word count, and model answers.

6. **Interactive Neuroanatomy Atlas**:
   - Lateral visual plate detailing frontal, temporal, parietal, occipital, limbic, and cerebellar structures.

---

## 💻 Tech Stack & Architecture

- **Vanilla HTML5, CSS3, and ES6+ Modern JavaScript**
- **Zero npm runtime dependencies, zero build step**
- **Persistent State**: Deterministic mastery tracking stored in `localStorage` (`psychstudy_progress`, `psychstudy_fc_reviews`, `psychstudy_quiz_attempts`, `psa_notes`).
- **Responsive Ergonomics**: Tailored for both high-resolution workstations and touch-friendly mobile devices with safe-area insets and bottom sheet drawers.

---

## 🚀 Running Locally & Verification

Clone the repository and open `index.html` directly in your browser:

```bash
git clone https://github.com/chillingbing648-sketch/PsychStudy.git
cd PsychStudy
```

To run data integrity tests:

```bash
node tools/validate-data.mjs
```

---

## 📜 Attribution & License

Designed and developed by **Harsh Dubey**.  
Created strictly for non-commercial university psychological sciences education and revision.
