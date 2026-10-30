/**
 * PsychStudy — The Clinical Atlas
 * Central Diagnostic Quiz Bank
 * Enforces 100% Appendix C Exam Blueprint Coverage (all 25 PDF Fill-in-the-Blanks)
 * with robust normalized alias grading and comprehensive MCQs.
 */

(function(global) {
  global.QUIZ_BANK = {
    fillBlanks: [
      {
        id: 'fb-1',
        pdfRef: 'QB-FIB-1',
        category: 'Anxiety Disorders',
        topic: 'phobias',
        q: 'Fear of social situations is called _____ phobia.',
        a: 'social',
        answers: ['social', 'social phobia', 'social anxiety', 'social anxiety disorder'],
        hint: 'Social anxiety / social scrutiny'
      },
      {
        id: 'fb-2',
        pdfRef: 'QB-FIB-2',
        category: 'Mood Disorders',
        topic: 'bipolar',
        q: 'Extreme mood swings occur in _____ disorder.',
        a: 'bipolar',
        answers: ['bipolar', 'bipolar disorder', 'bipolar affective disorder', 'manic depression', 'manic depressive'],
        hint: 'Oscillates between mania and depression'
      },
      {
        id: 'fb-3',
        pdfRef: 'QB-FIB-3',
        category: 'Psychotic Disorders',
        topic: 'schizophrenia',
        q: 'Hearing voices not present in reality is called _____.',
        a: 'hallucinations',
        answers: ['hallucination', 'hallucinations', 'auditory hallucination', 'auditory hallucinations'],
        hint: 'False sensory perception without external stimulus'
      },
      {
        id: 'fb-4',
        pdfRef: 'QB-FIB-4',
        category: 'Psychotic Disorders',
        topic: 'schizophrenia',
        q: 'False beliefs not based in reality are called _____.',
        a: 'delusions',
        answers: ['delusion', 'delusions', 'paranoid delusions', 'delusional belief', 'delusional beliefs'],
        hint: 'Fixed unshakeable false beliefs'
      },
      {
        id: 'fb-5',
        pdfRef: 'QB-FIB-5',
        category: 'Mood Disorders',
        topic: 'suicide',
        q: 'The intentional act of ending one\'s own life is referred to in clinical suicidology as _____.',
        a: 'suicide',
        answers: ['suicide', 'suicidal', 'suicidal behaviour', 'suicidal behavior', 'dying by suicide'],
        hint: 'Multifactorial fatal self-harm'
      },
      {
        id: 'fb-6',
        pdfRef: 'QB-FIB-6',
        category: 'Mood Disorders',
        topic: 'sad',
        q: 'Seasonal depression is clinically known as _____ affective disorder.',
        a: 'seasonal affective disorder',
        answers: ['seasonal', 'sad', 'seasonal affective disorder', 'seasonal depression', 'seasonal affective'],
        hint: 'Autumn/winter depression linked to sunlight'
      },
      {
        id: 'fb-7',
        pdfRef: 'QB-FIB-7',
        category: 'Foundations',
        topic: 'psych-disorders',
        q: 'The conscious understanding and recognition of one\'s own mental illness is clinically termed _____.',
        a: 'awareness',
        answers: ['awareness', 'understanding', 'insight', 'clinical insight'],
        hint: 'Insight or understanding of illness'
      },
      {
        id: 'fb-8',
        pdfRef: 'QB-FIB-8',
        category: 'Foundations',
        topic: 'models-of-abnormality',
        q: 'The therapeutic approach focusing on unconscious conflicts originated by Freud is called _____.',
        a: 'psychoanalysis',
        answers: ['psychoanalysis', 'psychoanalytic therapy', 'psychodynamic therapy', 'psychoanalytic'],
        hint: 'Sigmund Freud\'s foundational therapy'
      },
      {
        id: 'fb-9',
        pdfRef: 'QB-FIB-9',
        category: 'Foundations',
        topic: 'models-of-abnormality',
        q: 'CBT stands for Cognitive _____ Therapy.',
        a: 'behavioral',
        answers: ['behavioral', 'behavioural', 'behavior', 'behaviour'],
        hint: 'Cognitive and habit modification'
      },
      {
        id: 'fb-10',
        pdfRef: 'QB-FIB-10',
        category: 'Anxiety Disorders',
        topic: 'ocd',
        q: 'Repetitive behaviours performed to reduce anxiety are called _____.',
        a: 'compulsions',
        answers: ['compulsion', 'compulsions', 'rituals', 'compulsive behaviours', 'compulsive behaviors'],
        hint: 'OCD neutralizing rituals'
      },
      {
        id: 'fb-11',
        pdfRef: 'QB-FIB-11',
        category: 'Foundations',
        topic: 'models-of-abnormality',
        q: 'The psychoanalytic approach was developed by Sigmund _____.',
        a: 'Freud',
        answers: ['freud', 'sigmund freud', 's freud'],
        hint: 'Austrian founder of psychoanalysis'
      },
      {
        id: 'fb-12',
        pdfRef: 'QB-FIB-12',
        category: 'Mood Disorders',
        topic: 'major-depression',
        q: 'Electroconvulsive therapy is abbreviated as _____.',
        a: 'ECT',
        answers: ['ect', 'electroconvulsive therapy', 'electro-convulsive therapy'],
        hint: 'Abbreviation for somatic seizure therapy'
      },
      {
        id: 'fb-13',
        pdfRef: 'QB-FIB-13',
        category: 'Eating Disorders',
        topic: 'anorexia',
        q: 'A severe eating disorder involving extreme food restriction is _____ nervosa.',
        a: 'anorexia',
        answers: ['anorexia', 'anorexia nervosa'],
        hint: 'Severe restriction and body dysmorphia'
      },
      {
        id: 'fb-14',
        pdfRef: 'QB-FIB-14',
        category: 'Anxiety Disorders',
        topic: 'phobias',
        q: 'Social anxiety disorder was historically termed _____ phobia.',
        a: 'social',
        answers: ['social', 'social phobia', 'social anxiety'],
        hint: 'Historical term for social anxiety disorder'
      },
      {
        id: 'fb-15',
        pdfRef: 'QB-FIB-15',
        category: 'Foundations',
        topic: 'dsm',
        q: 'The DSM is published by the American _____ Association.',
        a: 'Psychiatric',
        answers: ['psychiatric', 'apa', 'american psychiatric association'],
        hint: 'Medical psychiatric professional association'
      },
      {
        id: 'fb-16',
        pdfRef: 'QB-FIB-16',
        category: 'Anxiety Disorders',
        topic: 'phobias',
        q: 'Intensive exposure to a feared phobic stimulus without escape is called _____.',
        a: 'flooding',
        answers: ['flooding', 'implosion', 'implosive', 'implosion therapy', 'desensitisation', 'desensitization', 'exposure therapy'],
        hint: 'Exposure family: flooding, implosion, or desensitization'
      },
      {
        id: 'fb-17',
        pdfRef: 'QB-FIB-17',
        category: 'Foundations',
        topic: 'models-of-abnormality',
        q: 'The redirection of feelings toward a therapist from past relationships is called _____.',
        a: 'transference',
        answers: ['transference', 'transference reaction'],
        hint: 'Classic psychoanalytic relational concept'
      },
      {
        id: 'fb-18',
        pdfRef: 'QB-FIB-18',
        category: 'Mood Disorders',
        topic: 'major-depression',
        q: 'Persistent low mood, anhedonia, and fatigue characterize major _____ disorder.',
        a: 'depressive',
        answers: ['depressive', 'depression', 'major depressive', 'major depressive disorder', 'mdd'],
        hint: 'Primary unipolar mood diagnosis'
      },
      {
        id: 'fb-19',
        pdfRef: 'QB-FIB-19',
        category: 'Psychotic Disorders',
        topic: 'schizophrenia',
        q: 'A severe psychiatric condition involving a split from reality coined by Eugen Bleuler is _____.',
        a: 'schizophrenia',
        answers: ['schizophrenia', 'psychosis', 'psychotic disorder'],
        hint: 'Bleuler\'s 1911 term replacing dementia praecox'
      },
      {
        id: 'fb-20',
        pdfRef: 'QB-FIB-20',
        category: 'Psychotic Disorders',
        topic: 'schizophrenia',
        q: 'A state characterized by a loss of contact with reality is broadly termed _____.',
        a: 'psychosis',
        answers: ['psychosis', 'schizophrenia', 'psychotic disorders', 'psychotic state'],
        hint: 'General term for loss of contact with reality'
      },
      {
        id: 'fb-21',
        pdfRef: 'QB-FIB-21',
        category: 'Mood Disorders',
        topic: 'dysthymia',
        q: 'Chronic mild depression lasting ≥2 years is clinically termed _____.',
        a: 'dysthymia',
        answers: ['dysthymia', 'persistent depressive disorder', 'pdd', 'dysthymic disorder'],
        hint: 'Persistent Depressive Disorder / legacy term'
      },
      {
        id: 'fb-22',
        pdfRef: 'QB-FIB-22',
        category: 'Anxiety Disorders',
        topic: 'panic',
        q: 'Sudden, unexpected surges of intense terror peaking within minutes are called _____ attacks.',
        a: 'panic',
        answers: ['panic', 'panic attacks', 'panic attack'],
        hint: 'Discrete sympathetic autonomic surge'
      },
      {
        id: 'fb-23',
        pdfRef: 'QB-FIB-23',
        category: 'Anxiety Disorders',
        topic: 'phobias',
        q: 'An irrational, disproportionate fear of a specific object or situation is called a _____.',
        a: 'phobia',
        answers: ['phobia', 'specific phobia', 'phobias'],
        hint: 'Stimulus-bound irrational terror'
      },
      {
        id: 'fb-24',
        pdfRef: 'QB-FIB-24',
        category: 'Foundations',
        topic: 'four-ds',
        q: 'Negative societal attitudes and discrimination toward mental illness are known as _____.',
        a: 'stigma',
        answers: ['stigma', 'social stigma', 'mental health stigma'],
        hint: 'Prejudice forming a major barrier to help-seeking'
      },
      {
        id: 'fb-25',
        pdfRef: 'QB-FIB-25',
        category: 'Anxiety Disorders',
        topic: 'gad',
        q: 'Pervasive, uncontrollable worry lasting ≥6 months is called _____ anxiety disorder.',
        a: 'generalized anxiety disorder',
        answers: ['generalized anxiety disorder', 'generalised anxiety disorder', 'generalized', 'generalised', 'gad'],
        hint: 'Free-floating diffuse anxiety'
      }
    ],
    mcq: [
      {
        id: 'mcq-1',
        category: 'Anxiety Disorders',
        topic: 'ocd',
        q: 'Which clinical feature distinguishes Obsessive-Compulsive Disorder from Generalised Anxiety Disorder?',
        opts: [
          'Chronic diffuse worry regarding finances and health',
          'Intrusive ego-dystonic obsessions accompanied by neutralizing compulsions',
          'Autonomic panic attacks peaking in five minutes',
          'Persistent phobic avoidance of social gatherings'
        ],
        correct: 1,
        exp: 'OCD is characterized by intrusive, ego-dystonic obsessions and repetitive neutralizing compulsions (taking >1 hr/day). In contrast, GAD involves diffuse, real-life worries without compulsive rituals.'
      },
      {
        id: 'mcq-2',
        category: 'Eating Disorders',
        topic: 'anorexia',
        q: 'A meta-analysis of 36 studies on anorexia nervosa (Arcelus et al., 2011) established that:',
        opts: [
          'The disorder exhibits the lowest mortality of any psychiatric illness',
          'Patients have ~5.9× expected mortality, with roughly 1 in 5 deaths attributable to suicide',
          'Full recovery occurs spontaneously in >90% of cases without medical intervention',
          'Amenorrhoea is a mandatory physiological requirement for diagnosis'
        ],
        correct: 1,
        exp: 'Arcelus et al. (2011) demonstrated an aggregate standardized mortality ratio of approximately 5.9 times expected mortality in anorexia nervosa, with roughly 1 in 5 deaths resulting from suicide.'
      },
      {
        id: 'mcq-3',
        category: 'Personality Disorders',
        topic: 'borderline',
        q: 'Dialectical Behaviour Therapy (DBT), developed by Marsha Linehan (1993), is the gold standard for:',
        opts: [
          'Schizophrenia negative symptoms',
          'Borderline Personality Disorder and chronic parasuicidality',
          'Obsessive-Compulsive Personality Disorder',
          'Specific Animal Phobias'
        ],
        correct: 1,
        exp: 'Marsha Linehan developed DBT specifically to treat Borderline Personality Disorder and chronic suicidal gestures, balancing radical acceptance with behavioural change skills.'
      },
      {
        id: 'mcq-4',
        category: 'Mood Disorders',
        topic: 'sad',
        q: 'In Seasonal Affective Disorder (SAD), reduced autumn and winter photoperiod leads to altered regulation of:',
        opts: [
          'Thyroid hormones in the parathyroid gland',
          'Prolonged pineal melatonin secretion and hypothalamic SCN phase delays',
          'Oxytocin receptors in the amygdaloid complex',
          'Insulin and glucagon release in the pancreas'
        ],
        correct: 1,
        exp: 'Reduced daylight leads to prolonged nocturnal secretion of melatonin by the pineal gland and circadian phase delays in the anterior hypothalamic Suprachiasmatic Nucleus (SCN).'
      },
      {
        id: 'mcq-5',
        category: 'Personality Disorders',
        topic: 'antisocial',
        q: 'Under DSM-5-TR, a formal diagnosis of Antisocial Personality Disorder requires that the individual is at least 18 years old and had documented evidence of:',
        opts: [
          'Major Depressive Disorder before age 12',
          'Conduct Disorder with onset before age 15',
          'Separation Anxiety Disorder in early childhood',
          'Attention-Deficit/Hyperactivity Disorder in infancy'
        ],
        correct: 1,
        exp: 'DSM-5-TR mandates that ASPD can only be diagnosed in individuals aged 18 or older with historical evidence of Conduct Disorder beginning before age 15.'
      },
      {
        id: 'mcq-6',
        category: 'Mood Disorders',
        topic: 'suicide',
        q: 'Epidemiological studies of suicidal behaviour document the "gender paradox," which describes how:',
        opts: [
          'Men and women attempt and complete suicide at identical rates worldwide',
          'Women attempt suicide more frequently in many regions, while men die by suicide more often due to high-lethality means',
          'Men attempt suicide more frequently, while women complete suicide more often',
          'Suicide is documented exclusively in high-income industrialized nations'
        ],
        correct: 1,
        exp: 'Across many nations, women attempt suicide more frequently, whereas men die by suicide 3–4 times more often in high-income countries due to high-lethality methods (in India, this disparity is narrower).'
      },
      {
        id: 'mcq-7',
        category: 'Psychotic Disorders',
        topic: 'schizophrenia',
        q: 'The negative symptoms of schizophrenia are clinically characterized by the "Five A\'s," which include:',
        opts: [
          'Auditory hallucinations, Anxiety, Agitation, Amnesia, Anger',
          'Affective flattening, Alogia, Anhedonia, Asociality, Avolition',
          'Aggression, Automatic thoughts, Anorexia, Agoraphobia, Arousal',
          'Associations, Ambivalence, Autism, Affect, Aberrant salience'
        ],
        correct: 1,
        exp: 'The modern Five A\'s of negative symptoms are Affective flattening, Alogia (poverty of speech), Anhedonia (loss of pleasure), Asociality, and Avolition (lack of goal motivation).'
      },
      {
        id: 'mcq-8',
        category: 'Foundations',
        topic: 'four-ds',
        q: 'The Four Ds educational heuristic defines abnormality through Distress, Dysfunction, Deviance, and:',
        opts: [
          'Depression',
          'Disability',
          'Danger',
          'Diagnosis'
        ],
        correct: 2,
        exp: 'Danger (risk of physical harm to self or others) is the fourth D. Notably, the Four Ds are an educational teaching heuristic, not formal DSM diagnostic criteria.'
      },
      {
        id: 'mcq-9',
        category: 'Mood Disorders',
        topic: 'bipolar',
        q: 'The discovery of lithium salts as a prophylactic mood stabilizer in bipolar excitement was made in 1949 by:',
        opts: [
          'Sigmund Freud',
          'John Cade',
          'Aaron Beck',
          'Carl Rogers'
        ],
        correct: 1,
        exp: 'Australian psychiatrist John Cade discovered the therapeutic properties of lithium carbonate in 1949, pioneering modern biological treatments for bipolar mania.'
      },
      {
        id: 'mcq-10',
        category: 'Anxiety Disorders',
        topic: 'phobias',
        q: 'Which specific phobia subtype uniquely exhibits a biphasic vasovagal autonomic response causing fainting (syncope)?',
        opts: [
          'Animal Type (arachnophobia)',
          'Natural Environment Type (acrophobia)',
          'Blood-Injection-Injury (BII) Type',
          'Situational Type (claustrophobia)'
        ],
        correct: 2,
        exp: 'The Blood-Injection-Injury (BII) subtype uniquely features an initial sympathetic spike followed by a precipitous drop in blood pressure and heart rate, leading to vasovagal syncope.'
      },
      {
        id: 'mcq-11',
        category: 'Therapies & Interventions',
        topic: 'psychoanalysis',
        q: 'In classical psychoanalysis, the client\'s unconscious displacement of childhood feelings and expectations onto the therapist is known as:',
        opts: [
          'Catharsis',
          'Countertransference',
          'Transference',
          'Free Association'
        ],
        correct: 2,
        exp: 'Transference is the redirection of feelings and desires unconsciously retained from childhood figures toward a new object, specifically the psychoanalyst.'
      },
      {
        id: 'mcq-12',
        category: 'Therapies & Interventions',
        topic: 'person-centered',
        q: 'Carl Rogers identified three necessary and sufficient core therapist conditions for personality change, which are:',
        opts: [
          'Interpretation, Free Association, Working Through',
          'Empathy, Congruence, Unconditional Positive Regard',
          'Token Reinforcement, Shaping, Extinction',
          'Cognitive Restructuring, Decatastrophizing, Socratic Dialogue'
        ],
        correct: 1,
        exp: 'Rogers (1957) postulated that therapeutic growth requires Empathy, Congruence (genuineness), and Unconditional Positive Regard (non-judgmental acceptance).'
      },
      {
        id: 'mcq-13',
        category: 'Therapies & Interventions',
        topic: 'behavior-therapy',
        q: 'Joseph Wolpe\'s Systematic Desensitization is grounded in which physiological learning principle?',
        opts: [
          'Operant Shaping',
          'Reciprocal Inhibition',
          'Vicarious Modeling',
          'Learned Helplessness'
        ],
        correct: 1,
        exp: 'Wolpe (1958) formulated Reciprocal Inhibition: if a response incompatible with anxiety (e.g., deep relaxation) is elicited with a fear stimulus, anxiety is inhibited.'
      },
      {
        id: 'mcq-14',
        category: 'Therapies & Interventions',
        topic: 'token-economy',
        q: 'In an operant token economy, when tokens or privileges are removed contingent upon disruptive behavior, this procedure is termed:',
        opts: [
          'Positive Punishment',
          'Extinction Burst',
          'Response Cost',
          'Systematic Desensitization'
        ],
        correct: 2,
        exp: 'Response cost is a form of negative punishment where conditioned reinforcers (tokens) are withdrawn following an undesirable target behavior.'
      },
      {
        id: 'mcq-15',
        category: 'Therapies & Interventions',
        topic: 'cbt',
        q: 'Aaron Beck\'s cognitive triad in major depressive disorder comprises negative, automatic beliefs regarding the:',
        opts: [
          'Past, Present, and Future',
          'Self, the World, and the Future',
          'Family, Society, and Work',
          'Id, Ego, and Superego'
        ],
        correct: 1,
        exp: 'Beck (1967, 1976) defined the depressive cognitive triad as negative, distorted core schemas regarding the Self, the World (experiences), and the Future.'
      },
      {
        id: 'mcq-16',
        category: 'Therapies & Interventions',
        topic: 'group-therapy',
        q: 'Which of Irvin Yalom\'s curative factors describes the therapeutic realization that one\'s inner suffering and problems are not completely unique to oneself?',
        opts: [
          'Altruism',
          'Universality',
          'Imparting Information',
          'Existential Factors'
        ],
        correct: 1,
        exp: 'Universality is the disconfirming of a client\'s feeling of singular isolation through the discovery that fellow group members share identical hidden pains and doubts.'
      },
      {
        id: 'mcq-17',
        category: 'Therapies & Interventions',
        topic: 'relationship-counselling',
        q: 'According to John Gottman, which of the "Four Horsemen of the Apocalypse" is the single strongest predictor of marital divorce?',
        opts: [
          'Criticism',
          'Defensiveness',
          'Contempt',
          'Stonewalling'
        ],
        correct: 2,
        exp: 'Contempt (mockery, eye-rolling, sarcasm, superiority) conveys disgust and is identified by Gottman as the most lethal predictor of relationship breakdown.'
      },
      {
        id: 'mcq-18',
        category: 'Therapies & Interventions',
        topic: 'biomedical-therapies',
        q: 'Modern Electroconvulsive Therapy (ECT) is safely administered under general anesthesia alongside which vital pharmacological agent?',
        opts: [
          'An atypical antipsychotic (Olanzapine)',
          'A muscle relaxant (Succinylcholine)',
          'A monoamine oxidase inhibitor',
          'A high-dose stimulant'
        ],
        correct: 1,
        exp: 'Modern modified ECT uses an intravenous short-acting anesthetic (e.g., methohexital) and a muscle relaxant (succinylcholine) to prevent musculoskeletal injury during seizure.'
      },
      {
        id: 'mcq-19',
        category: 'Therapies & Interventions',
        topic: 'alternative-therapies',
        q: 'What is the primary evidence-based non-pharmacological treatment for Seasonal Affective Disorder (SAD)?',
        opts: [
          'Hyperbaric oxygen chamber',
          'Morning bright light phototherapy (10,000 lux)',
          'Acupuncture with moxibustion',
          'High-dose St. John\'s Wort monotherapy'
        ],
        correct: 1,
        exp: 'Morning bright light phototherapy (10,000 lux for 30 minutes; Rosenthal et al., 1984) is the gold-standard treatment, resetting the circadian pacemaker in the hypothalamus.'
      },
      {
        id: 'mcq-20',
        category: 'Culture & Help-Seeking',
        topic: 'culture-bound',
        q: 'Which cultural concept of distress on the Indian subcontinent is characterized by severe anxiety and fatigue attributed to the perceived loss of semen?',
        opts: [
          'Koro',
          'Dhat Syndrome',
          'Taijin Kyofusho',
          'Ataque de Nervios'
        ],
        correct: 1,
        exp: 'Dhat syndrome (described by N.N. Wig, 1960) involves debilitating somatic and psychological distress linked to cultural beliefs surrounding semen (dhatu) preservation.'
      },
      {
        id: 'mcq-21',
        category: 'Culture & Help-Seeking',
        topic: 'stigma',
        q: 'Section 115 of India\'s Mental Healthcare Act 2017 enacted which landmark human rights reform?',
        opts: [
          'Mandated institutionalization for all psychosis cases',
          'Legally decriminalized suicide attempts and mandated government support',
          'Banned all psychiatric medications in community centers',
          'Required court approval for psychotherapy'
        ],
        correct: 1,
        exp: 'Section 115 presumes severe stress and legally prevents criminal prosecution under IPC 309 for individuals attempting suicide, mandating government rehabilitation and care.'
      },
      {
        id: 'mcq-22',
        category: 'Culture & Help-Seeking',
        topic: 'help-seeking-gender',
        q: 'The "gender paradox of suicide" in epidemiological studies refers to the finding that:',
        opts: [
          'Men report more depression, but women die by suicide more often',
          'Women attempt suicide more frequently, but men die by suicide 3–4x more often in many countries',
          'Suicide rates are identical between genders across all nations',
          'Elderly men have lower suicide rates than teenage girls'
        ],
        correct: 1,
        exp: 'Large epidemiological surveys reveal that women make more non-fatal suicide attempts, while men exhibit higher suicide mortality due to selecting higher-lethality means.'
      },
      {
        id: 'mcq-23',
        category: 'Culture & Help-Seeking',
        topic: 'help-seeking-barriers',
        q: 'What is the national 24/7 toll-free tele-mental health helpline number launched across India in October 2022?',
        opts: [
          '100',
          '108',
          '14416 (Tele-MANAS)',
          '1098'
        ],
        correct: 2,
        exp: 'Tele-MANAS (14416 or 1800-891-4416) is the Government of India\'s 24/7 comprehensive digital tele-mental health network coordinated by NIMHANS.'
      },
      {
        id: 'mcq-24',
        category: 'Culture & Help-Seeking',
        topic: 'cultural-issues-mh',
        q: 'Arthur Kleinman\'s clinical anthropology framework for assessing patient illness beliefs is known as:',
        opts: [
          'The Biopsychosocial Grid',
          'Explanatory Models of Illness',
          'The Five Factor Model',
          'The Transference Neurosis'
        ],
        correct: 1,
        exp: 'Kleinman (1978) formulated Explanatory Models to investigate how patients and practitioners perceive the etiology, timing, pathophysiology, course, and treatment of an illness.'
      },
      {
        id: 'mcq-25',
        category: 'Stress & Adjustment',
        topic: 'stress-and-gas',
        q: 'Hans Selye (1936) defined the General Adaptation Syndrome as proceeding through three sequential stages:',
        opts: [
          'Primary Appraisal, Secondary Appraisal, Coping',
          'Alarm Reaction, Stage of Resistance, Stage of Exhaustion',
          'Shock, Despair, Detachment',
          'Denial, Anger, Acceptance'
        ],
        correct: 1,
        exp: 'Selye\'s General Adaptation Syndrome (GAS) progresses through: (1) Alarm Reaction (acute SAM/HPA surge), (2) Stage of Resistance (sustained cortisol), and (3) Stage of Exhaustion.'
      },
      {
        id: 'mcq-26',
        category: 'Stress & Adjustment',
        topic: 'coping-and-appraisal',
        q: 'In Lazarus and Folkman\'s (1984) Transactional Model, secondary appraisal evaluates:',
        opts: [
          'Whether the event is a threat, challenge, or harm/loss',
          'Available personal and social coping resources to handle the demand',
          'The objective physical temperature and noise of the environment',
          'Childhood Freudian psychosexual stages'
        ],
        correct: 1,
        exp: 'Primary appraisal evaluates what is at stake (threat/challenge/harm); Secondary appraisal assesses coping options, personal efficacy, and external support ("What can I do?").'
      },
      {
        id: 'mcq-27',
        category: 'Stress & Adjustment',
        topic: 'defense-mechanisms',
        q: 'The defense mechanism wherein an individual converts an unacceptable unconscious impulse into its exact conscious opposite is called:',
        opts: [
          'Projection',
          'Displacement',
          'Reaction Formation',
          'Sublimation'
        ],
        correct: 2,
        exp: 'Reaction formation neutralizes anxiety by adopting conscious attitudes and behaviors that are the diametric opposites of unconscious wishes (e.g., overt piety masking hatred).'
      },
      {
        id: 'mcq-28',
        category: 'Stress & Adjustment',
        topic: 'defense-mechanisms',
        q: 'In George Vaillant\'s developmental hierarchy, which defense mechanism is categorized as Level IV (Mature)?',
        opts: [
          'Delusional Denial',
          'Acting Out',
          'Repression',
          'Sublimation'
        ],
        correct: 3,
        exp: 'Sublimation (channeling primitive drives into creative or socially constructive activities) is classified by Vaillant as a mature defense, strongly correlating with life adjustment.'
      },
      {
        id: 'mcq-29',
        category: 'Eating Disorders',
        topic: 'anorexia',
        q: 'In the meta-analysis by Arcelus et al. (2011), what standardized mortality ratio was identified in anorexia nervosa?',
        opts: [
          'Approximately 1.2x expected mortality',
          'Approximately 5.9x expected mortality, with ~1 in 5 deaths by suicide',
          'Exactly 20x expected mortality across all age groups',
          'No elevated mortality compared to general population controls'
        ],
        correct: 1,
        exp: 'Arcelus et al. (2011) established that individuals with anorexia nervosa experience ≈ 5.9 times the expected mortality rate, with roughly 20% of deaths resulting from suicide.'
      },
      {
        id: 'mcq-30',
        category: 'Eating Disorders',
        topic: 'binge-eating',
        q: 'In contrast to bulimia nervosa, binge-eating disorder (BED) is diagnostically distinguished by the:',
        opts: [
          'Absence of regular inappropriate compensatory purging behaviors',
          'Requirement of significantly low body weight (< 85% of expected)',
          'Presence of Russell\'s sign on dorsal knuckles',
          'Occurrence of amenorrhea for at least 3 months'
        ],
        correct: 0,
        exp: 'BED involves regular binge eating episodes with loss of control and distress, but lacks the recurrent inappropriate compensatory behaviors (vomiting, laxatives, fasting) of bulimia.'
      },
      {
        id: 'mcq-31',
        category: 'Personality Disorders',
        topic: 'antisocial',
        q: 'A diagnosis of Antisocial Personality Disorder (ASPD) in DSM-5-TR requires evidence of which condition prior to age 15?',
        opts: [
          'Major Depressive Disorder',
          'Conduct Disorder',
          'Separation Anxiety Disorder',
          'Social Anxiety Disorder'
        ],
        correct: 1,
        exp: 'DSM-5-TR criteria for ASPD mandate documented evidence of Conduct Disorder with onset before 15 years of age (e.g., aggression to people/animals, property destruction, theft).'
      },
      {
        id: 'mcq-32',
        category: 'Personality Disorders',
        topic: 'borderline',
        q: 'The primitive psychological defense characteristic of borderline personality disorder, alternating between extreme idealization and extreme devaluation, is:',
        opts: [
          'Intellectualisation',
          'Splitting',
          'Rationalisation',
          'Sublimation'
        ],
        correct: 1,
        exp: 'Splitting is an unconscious defense mechanism where self or others are viewed dichotomously as all-good or all-bad, failing to synthesize ambivalence.'
      },
      {
        id: 'mcq-33',
        category: 'Neurobiology',
        topic: 'sad',
        q: 'The master circadian pacemaker in the human brain, regulating 24-hour sleep-wake rhythms and melatonin secretion, is the:',
        opts: [
          'Cerebellar vermis',
          'Suprachiasmatic nucleus (SCN) of the hypothalamus',
          'Substantia nigra of the midbrain',
          'Hippocampal CA1 pyramidal layer'
        ],
        correct: 1,
        exp: 'The suprachiasmatic nucleus (SCN) is located in the anterior hypothalamus directly above the optic chiasm, acting as the master circadian pacemaker.'
      },
      {
        id: 'mcq-34',
        category: 'Foundations',
        topic: 'dsm',
        q: 'What is the current, authoritative diagnostic manual published by the American Psychiatric Association in March 2022?',
        opts: [
          'DSM-IV-TR',
          'DSM-5 (2013 edition)',
          'DSM-5-TR (Text Revision, 2022)',
          'ICD-10 Clinical Modification'
        ],
        correct: 2,
        exp: 'The DSM-5-TR was published in March 2022, introducing Prolonged Grief Disorder, updated diagnostic criteria codes, and equity-focused revisions.'
      },
      {
        id: 'mcq-35',
        category: 'Foundations',
        topic: 'models-of-abnormality',
        q: 'Mowrer\'s Two-Factor Model explains the development and persistence of phobic avoidance through:',
        opts: [
          'Classical conditioning for fear acquisition and operant negative reinforcement for maintenance',
          'Unconscious id-superego conflict and repression',
          'Genetic mitochondrial DNA mutations and dopamine depletion',
          'Social observational learning without direct conditioning'
        ],
        correct: 0,
        exp: 'O. Hobart Mowrer (1947) demonstrated that fears are acquired via Pavlovian classical conditioning, but maintained because avoidance removes fear (operant negative reinforcement).'
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
