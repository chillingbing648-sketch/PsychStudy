/**
 * PsychStudy — The Clinical Atlas
 * Volume VI: Schizophrenia & Psychotic Spectrum
 * Chapters:
 *   6.1 schizophrenia (Schizophrenia: Spectrum, Symptomatology & Course)
 *   6.2 delusional (Delusional Disorder)
 *   6.3 schizoaffective (Schizoaffective Disorder)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_VI = [
    {
      id: 'schizophrenia',
      volume: 'VI',
      order: 1,
      template: 'disorder',
      category: 'Psychotic Disorders',
      icon: 'eye',
      name: 'Schizophrenia: Spectrum, Symptomatology & Course',
      preview: 'Positive symptoms, the Five A\'s of negative symptoms, dopamine revision III, and NMDA hypofunction.',
      definition: 'Schizophrenia is a severe, chronic psychiatric disorder characterized by profound disruptions in thought, perception, emotional responsiveness, and behaviour, lasting at least six months, including at least one month of active-phase symptoms comprising delusions, hallucinations, or disorganized speech.',
      explanation: `### Historical Conceptualization: Kraepelin and Bleuler
Modern understanding of schizophrenia originated with Emil Kraepelin (1899), who unified catatonia, hebephrenia, and paranoia under the term *Dementia Praecox* (premature dementia), emphasizing an early-onset deterioration in intellectual and social capacity. In 1911, Swiss psychiatrist Eugen Bleuler renamed the condition *Schizophrenia* (from Greek *skhizein* "to split" and *phrēn* "mind"), emphasizing the fragmentation of mental associations rather than inevitable dementia. Bleuler identified the famous "Four A's":
- Loosening of Associations (fragmented, disconnected thinking)
- Inappropriate Affect (emotional blunting or incongruence)
- Autism (withdrawal into internal idiosyncratic fantasy)
- Ambivalence (conflicting simultaneous impulses)

### Modern DSM-5-TR Criteria and Subtype Revisions
Under DSM-5-TR (APA, 2022; ICD-10 F20.9 / ICD-11 6A20), diagnosis requires continuous signs of disturbance for at least six months, including at least one month of active-phase symptoms. The active phase requires at least two of the following five symptoms, with at least one belonging to symptoms 1, 2, or 3:
1. Delusions (firmly held false beliefs resistant to contradictory evidence, e.g., persecutory, grandiose, reference, thought insertion)
2. Hallucinations (perceptual experiences without external sensory stimuli, predominantly auditory verbal hallucinations)
3. Disorganized Speech (derailment, tangentiality, incoherence/"word salad")
4. Grossly Disorganized or Catatonic Behaviour (unusual postures, stupor, excitement, waxy flexibility)
5. Negative Symptoms (diminished emotional expression or avolition)

Crucially, DSM-5 (2013) eliminated the classic DSM-IV subtypes (Paranoid, Disorganized, Catatonic, Undifferentiated, Residual) because they exhibited low diagnostic stability and poor predictive validity. They were replaced with dimensional symptom severity ratings, while catatonia became a transdiagnostic clinical specifier. (Note: Many university curricula in India still reference these classic subtypes historically).

### The Five A's of Negative Symptoms
Negative symptoms represent the loss or reduction of normal psychological capacities and are the primary determinants of long-term functional disability:
1. Affective Flattening (blunted emotional expressiveness in facial movement and voice tone)
2. Alogia (poverty of speech and diminished speech output)
3. Anhedonia (inability to experience physical or social pleasure)
4. Asociality (lack of interest in social interactions and severe withdrawal)
5. Avolition (profound lack of motivation to initiate and sustain goal-directed activities)

### Evolving Neurobiology: Dopamine Version III & Glutamate
1. Dopamine Hypothesis Version III: Howes and Kapur (2009) modernized the classic dopamine hypothesis, establishing that schizophrenia involves elevated presynaptic striatal dopamine synthesis and release—acting as the "final common pathway" where diverse genetic and environmental risk factors converge to produce aberrant salience.
2. NMDA Receptor Hypofunction: Post-mortem and pharmacological evidence (PCP and ketamine inducing both positive and negative symptoms) implicates hypofunction of N-methyl-D-aspartate (NMDA) glutamate receptors on GABAergic interneurons, causing cortical disinhibition and secondary striatal dopamine hyperactivity.
3. Neuroanatomy: Structural imaging reliably demonstrates lateral and third ventricular enlargement, progressive grey matter loss in the superior temporal gyrus (generating auditory verbal hallucinations), and dorsolateral prefrontal hypofrontality.`,
      keyPoints: [
        'Requires continuous disturbance for ≥6 months, including ≥1 month of active symptoms with delusions, hallucinations, or disorganized speech',
        'Bleuler (1911) coined "schizophrenia" and identified the Four A\'s: Associations, Affect, Autism, Ambivalence',
        'Classic DSM-IV subtypes (Paranoid, Disorganized, Catatonic, Residual) were eliminated in DSM-5, replaced by dimensional ratings',
        'Negative symptoms are defined by the 5 A\'s: Affective flattening, Alogia, Anhedonia, Asociality, Avolition',
        'Neurobiology: Howes & Kapur (2009) Dopamine Version III (presynaptic striatal hyper-release) + NMDA glutamate hypofunction',
        'First-line treatment: Antipsychotic medication (atypical/second-generation) alongside assertive community treatment and social skills training'
      ],
      types: [
        'Schizophrenia (First Episode, Multiple Episodes, In Partial/Full Remission)',
        'With Catatonia Specifier',
        'Classic DSM-IV Subtypes (Historical): Paranoid, Disorganized (Hebephrenic), Catatonic, Undifferentiated, Residual',
        'Schizophrenia Spectrum: Schizotypal PD, Delusional Disorder, Brief Psychotic Disorder, Schizophreniform Disorder, Schizoaffective Disorder'
      ],
      symptoms: [
        'Auditory verbal hallucinations (voices commenting, conversing, or commanding)',
        'Delusions of persecution, reference, control, and thought broadcasting',
        'Disorganized syntax, loose associations, and thought blocking',
        'Catatonic stupor, posturing, mutism, or unprompted motor agitation',
        'The 5 A\'s: affective flattening, alogia, anhedonia, asociality, avolition'
      ],
      psychologists: [
        'Eugen Bleuler (1911) — Coined "schizophrenia" and identified the Four A\'s',
        'Emil Kraepelin (1899) — Delineated *Dementia Praecox* from manic depression',
        'Oliver Howes & Shitij Kapur (2009) — Formulated the Dopamine Hypothesis Version III'
      ],
      examples: [
        'A 20-year-old student who hears two continuous running voices criticizing his actions, believes the national intelligence service is reading his thoughts via the WiFi router, and has stopped speaking or bathing for four months',
        'An individual exhibiting catatonic posturing, holding an uncomfortable arm position for hours without moving or responding to verbal stimuli'
      ],
      treatment: 'Second-generation atypical antipsychotics (risperidone, olanzapine, aripiprazole; clozapine for treatment resistance) combined with Assertive Community Treatment (ACT), Social Skills Training, Cognitive Remediation, and Family Psychoeducation.',
      summary: 'Schizophrenia is a severe psychotic disorder lasting ≥6 months with active delusions, hallucinations, or disorganized speech. Characterized by positive symptoms and the 5 A\'s of negative symptoms, it involves presynaptic striatal dopamine and NMDA glutamate hypofunction.',
      mnemonic: 'The 5 A\'s of Negative Symptoms: Affective flattening · Alogia · Anhedonia · Asociality · Avolition',
      codes: { icd10cm: ['F20.9'], icd11: ['6A20'], note: 'DSM-5-TR 295.90 Schizophrenia' },
      criteria: [
        '≥2 active-phase symptoms present for significant portion of 1 month, with ≥1 being delusions, hallucinations, or disorganized speech',
        'Active symptoms: Delusions, Hallucinations, Disorganized speech, Grossly disorganized/catatonic behaviour, Negative symptoms',
        'Level of functioning in one or more major areas (work, interpersonal relations, self-care) is markedly below pre-onset baseline',
        'Continuous signs of disturbance persist for at least 6 months, including at least 1 month of active-phase symptoms',
        'Schizoaffective disorder and depressive/bipolar disorder with psychotic features have been ruled out',
        'Disturbance is not attributable to physiological effects of a substance (e.g., drug of abuse, medication) or another medical condition'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of schizophrenia is approximately 0.7% to 1.0% worldwide, remarkably consistent across diverse geographies (Saha et al., 2005; Kessler et al., 2005). The National Mental Health Survey of India (Gururaj et al., 2016) reported a prevalence of approximately 0.4% in India, noting severe family burden and a vast treatment gap exceeding 75%. Peak onset occurs between ages 18–25 in males and 25–35 in females.',
        stats: [
          { claim: 'Global lifetime prevalence of Schizophrenia', value: '≈ 0.7–1.0%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence of psychotic disorders in Indian adult population', value: '≈ 0.4–0.5%', refId: 'gururaj2016', confidence: 'high' },
          { claim: 'Heritability of schizophrenia in monozygotic twin studies', value: '≈ 80%', refId: 'howes2009', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Polygenic liability with high heritability (≈80%)', 'Elevated presynaptic striatal dopamine synthesis and release (Howes & Kapur, 2009)', 'NMDA receptor hypofunction and impaired parvalbumin-positive GABAergic interneurons', 'Enlarged lateral cerebral ventricles and accelerated cortical thinning'],
        psychological: ['Aberrant salience attribution to neutral environmental stimuli', 'Jumping to conclusions cognitive bias and deficits in mentalization'],
        sociocultural: ['High Expressed Emotion (HEE) within family environments triggering clinical relapse', 'Urban upbringing and migration stress as epidemiological risk factors'],
        integrative: 'Genetic neurodevelopmental vulnerabilities interact with early environmental insults (obstetric complications) and late adolescent cannabis or life stress.'
      },
      neuro: {
        regions: ['temporal', 'frontal'],
        note: 'Bilateral lateral ventricular enlargement, superior temporal gyrus tonotopic activation during auditory hallucinations, and dorsolateral prefrontal hypofrontality.'
      },
      differential: [
        { vs: 'Schizoaffective Disorder', distinguishingFeature: 'In schizoaffective disorder, a prominent mood episode (depressive or manic) occurs concurrently with active psychotic symptoms, but delusions or hallucinations must persist for ≥2 weeks in the ABSENCE of major mood episodes.' },
        { vs: 'Delusional Disorder', distinguishingFeature: 'Delusional disorder is characterized by non-bizarre or bizarre delusions without prominent auditory hallucinations, disorganized speech, catatonia, or the 5 A\'s of negative symptoms.' }
      ],
      comorbidity: ['substance-use', 'tobacco-use-disorder', 'major-depression', 'panic'],
      caseFile: {
        title: 'Case Vignette: The Whispering Static',
        composite: true,
        text: 'Abhay, a 21-year-old computer science undergraduate, was brought to the psychiatric department by his father. Over seven months, Abhay had ceased attending classes, disconnected his computer, and barricaded his hostel window with cardboard. He explained that a syndicate of international cyber-terrorists was broadcasting defamatory commentary into his brain via dental radio frequencies (delusions of control and persecution). He reported hearing two distinct male voices debating his moral character 24 hours a day. When evaluated, Abhay exhibited flat facial affect, monosyllabic responses (alogia), and spent weeks staring blankly without motivation to eat or bathe (avolition).',
        questions: [
          'Which positive and negative symptoms of schizophrenia are demonstrated in Abhay\'s presentation?',
          'Why does symptom duration exceeding six months satisfy the DSM-5-TR timeline for schizophrenia rather than schizophreniform disorder?'
        ]
      },
      myths: [
        { myth: 'Schizophrenia means having a "split personality" or multiple personalities.', fact: 'Schizophrenia means a split from reality; multiple personalities is Dissociative Identity Disorder, an entirely distinct condition.', refId: 'bleuler1911' },
        { myth: 'People with schizophrenia are constantly violent and homicidal.', fact: 'The vast majority of individuals with schizophrenia are never violent; they are statistically far more likely to be victims of violent crime than perpetrators.', refId: 'gururaj2016' },
        { myth: 'Schizophrenia is caused by cold, unloving "schizophrenogenic" parenting.', fact: 'The schizophrenogenic mother hypothesis was thoroughly debunked; schizophrenia is a biological neurodevelopmental disorder with high genetic heritability.', refId: 'howes2009' }
      ],
      exam: {
        pdfQ: [3, 4, 7, 8, 19, 20],
        marks: 15,
        structure: [
          { heading: 'Historical Origins & DSM-5-TR Diagnostic Criteria', points: ['Kraepelin (Dementia Praecox) vs Bleuler (Schizophrenia & 4 A\'s)', 'DSM-5-TR six-month duration and one-month active phase criteria (delusions, hallucinations, disorganized speech)', 'Elimination of classic DSM-IV subtypes in favour of dimensional severity ratings'] },
          { heading: 'Positive vs Negative Symptoms (The 5 A\'s)', points: ['Positive: Hallucinations, Delusions, Disorganized speech/behaviour', 'Negative: Affective flattening, Alogia, Anhedonia, Asociality, Avolition'] },
          { heading: 'Neurobiology and Therapeutic Management', points: ['Dopamine Hypothesis Version III (Howes & Kapur) and presynaptic striatal dopamine', 'NMDA glutamate receptor hypofunction', 'Atypical antipsychotics (D2/5-HT2A antagonists) and psychosocial rehabilitation'] }
        ],
        modelAnswer: 'Schizophrenia (DSM-5-TR 295.90 / ICD-10 F20.9) is a severe, chronic neurodevelopmental psychotic disorder characterized by profound disruptions in perception, thought, affect, and behaviour.\n\nHistorically, Emil Kraepelin (1899) unified diverse psychotic presentations under *Dementia Praecox*, emphasizing cognitive deterioration. In 1911, Eugen Bleuler coined the term *Schizophrenia*, identifying the fundamental "Four A\'s": loosening of Associations, blunted Affect, Autism, and Ambivalence. In DSM-5 and DSM-5-TR, a major structural revision eliminated the classic DSM-IV subtypes (Paranoid, Disorganized, Catatonic, Undifferentiated, Residual) due to low diagnostic stability, replacing them with dimensional symptom ratings.\n\nAccording to DSM-5-TR, diagnosis requires continuous signs of disturbance for at least six months, including at least one month of active-phase symptoms. The active phase requires at least two of the following five symptoms, with at least one being symptom 1, 2, or 3: (1) Delusions (false fixed beliefs resistant to evidence), (2) Hallucinations (perceptual sensations without external stimuli, primarily auditory verbal voices), (3) Disorganized speech (derailment, incoherence), (4) Grossly disorganized or catatonic behaviour, and (5) Negative symptoms. Negative symptoms reflect functional deficits, captured by the "Five A\'s": Affective flattening, Alogia (poverty of speech), Anhedonia, Asociality, and Avolition (loss of motivation).\n\nNeurobiologically, Howes and Kapur (2009) established the Dopamine Hypothesis Version III, demonstrating that schizophrenia involves elevated presynaptic striatal dopamine synthesis and release, driving aberrant salience attribution. This is coupled with NMDA glutamate receptor hypofunction on parvalbumin-positive GABAergic interneurons and lateral ventricular enlargement.\n\nFirst-line treatment combines second-generation atypical antipsychotics (risperidone, olanzapine, aripiprazole; clozapine for treatment resistance) with psychosocial interventions including Assertive Community Treatment (ACT), Social Skills Training, and Family Psychoeducation to lower High Expressed Emotion (HEE).',
        shortNote: 'Schizophrenia involves active psychosis (delusions, hallucinations, disorganized speech) and the 5 A\'s of negative symptoms lasting ≥6 months. Bleuler coined the term (1911); classic DSM-IV subtypes were eliminated in DSM-5. Driven by presynaptic striatal dopamine and NMDA hypofunction, it is treated with atypical antipsychotics and ACT.',
        mnemonics: ['The 5 A\'s of Negative Symptoms: Affective flattening, Alogia, Anhedonia, Asociality, Avolition'],
        keyTerms: ['Schizophrenia', 'Eugen Bleuler', 'Emil Kraepelin', 'Four A\'s', 'Five A\'s', 'Dopamine Hypothesis Version III', 'Howes & Kapur', 'NMDA hypofunction', 'Atypical antipsychotics']
      },
      related: ['delusional', 'schizoaffective', 'bipolar'],
      refs: ['apa2022', 'who2022', 'bleuler1911', 'howes2009', 'kessler2005', 'gururaj2016'],
      lastVerified: '2026-10'
    },
    {
      id: 'delusional',
      volume: 'VI',
      order: 2,
      template: 'disorder',
      category: 'Psychotic Disorders',
      icon: 'alert-circle',
      name: 'Delusional Disorder',
      preview: 'Circumscribed, non-bizarre or bizarre fixed false beliefs with preserved daily functioning.',
      definition: 'Delusional Disorder is characterized by the presence of one or more delusions persisting for at least one month, in the absence of other prominent psychotic symptoms (such as auditory hallucinations or disorganized speech), and without marked impairment in psychosocial functioning outside the specific impact of the delusion.',
      explanation: `### Core Clinical Presentation
Delusional Disorder (DSM-5-TR 297.1 / ICD-10 F22 / ICD-11 6A24) is defined by the presence of encapsulated, firmly held false beliefs that persist despite overwhelming contradictory reality. A hallmark feature distinguishing delusional disorder from schizophrenia is the relative preservation of cognitive functioning, affect, and daily life routines outside the specific focus of the delusional system.

### Diagnostic Criteria (DSM-5-TR)
Under DSM-5-TR:
1. The presence of one (or more) delusions with a duration of 1 month or longer.
2. Criterion A for schizophrenia has NEVER been met. (Note: Hallucinations, if present at all, are not prominent and are related to the delusional theme, e.g., the sensation of being infested with insects in tactile delusions of parasitosis).
3. Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behaviour is not obviously bizarre or odd.
4. If manic or major depressive episodes have occurred, these have been brief relative to the duration of the delusional periods.
5. The disturbance is not attributable to the physiological effects of a substance or medical condition.

### Clinical Subtypes Based on Delusional Themes
The DSM-5-TR classifies delusional disorder into distinct subtypes based on the predominant delusional theme:
1. Erotomanic Type: The delusion that another person, usually of higher social or celebrity status, is secretly in love with the individual.
2. Grandiose Type: The delusion of having some extraordinary, unrecognized talent or insight, or having made an epochal discovery, or having a special relationship with a deity or prominent figure.
3. Jealous Type (Othello Syndrome): The delusion that one\'s spouse or sexual partner is unfaithful, accompanied by obsessive interrogation, tracking, and surveillance.
4. Persecutory Type: The delusion of being conspired against, cheated, spied on, followed, poisoned, maligned, harassed, or obstructed in the pursuit of long-term goals (the most common clinical subtype).
5. Somatic Type: Delusions involving bodily functions or sensations, such as the fixed belief that one emits a foul odor, is infested with internal parasites, or has misshapen body parts.
6. Mixed / Unspecified Type: Delusions that fit no single category.

### Cognitive and Neurobiological Formulations
Cognitive research highlights the "Jumping to Conclusions" (JTC) data-gathering bias. In experimental paradigms (such as the probabilistic beads task), individuals with delusional disorder make definitive judgments based on significantly fewer pieces of evidence than healthy controls. Furthermore, externalizing attributional bias—attributing negative events exclusively to malevolent external agents to protect vulnerable self-esteem—sustains persecutory schemas.`,
      keyPoints: [
        'Requires ≥1 delusion persisting for at least 1 month without prominent hallucinations or disorganized speech',
        'Psychosocial functioning and intellectual faculties are preserved outside the encapsulated delusional system',
        'Subtypes: Erotomanic, Grandiose, Jealous (Othello syndrome), Persecutory (most common), Somatic, Mixed',
        'Cognitive mechanism: "Jumping to Conclusions" (JTC) data-gathering bias and external attributional bias',
        'Unlike schizophrenia, there are no persistent 5 A\'s of negative symptoms or severe cognitive deterioration',
        'Treatment: Antipsychotics (second-generation) and specialized cognitive therapy for delusions (CBTp)'
      ],
      types: [
        'Erotomanic Subtype (Belief another person is secretly in love with them)',
        'Grandiose Subtype (Belief in unrecognized genius, discovery, or divine mission)',
        'Jealous Subtype (Othello Syndrome; unshakeable belief in partner infidelity)',
        'Persecutory Subtype (Belief in conspiracy, poisoning, spying, or harassment)',
        'Somatic Subtype (Delusions of parasitosis, foul body odor, or disease)',
        'Mixed / Unspecified Subtype'
      ],
      symptoms: [
        'Fixed, unshakeable false beliefs sustained for over one month',
        'Meticulous documentation and legal petitions filed against imagined conspirators',
        'Elaborate surveillance and interrogation of spouses (in jealous type)',
        'Circumscribed impairment directly restricted to the delusional theme',
        'Preserved intellectual clarity, vocational capacity, and personal hygiene'
      ],
      psychologists: [
        'Philipp Shannon — Investigated the Othello syndrome and delusional jealousy',
        'Philippa Garety — Documented the "jumping to conclusions" probabilistic bias in delusions'
      ],
      examples: [
        'A corporate engineer who performs flawlessly at work but spends all evenings filing court petitions alleging his landlord is poisoning the apartment water supply (Persecutory Type)',
        'An individual who believes a world-famous television anchor is sending secret romantic messages to her through subtle hand gestures during the evening news (Erotomanic Type)'
      ],
      treatment: 'Second-generation atypical antipsychotics (aripiprazole, risperidone). Specialized Cognitive Behaviour Therapy for Psychosis (CBTp) helps patients evaluate alternative hypotheses without directly challenging the delusion in an adversarial manner.',
      summary: 'Delusional Disorder involves circumscribed delusions lasting ≥1 month with preserved daily functioning and no negative symptoms. Categorized into persecutory, jealous, erotomanic, grandiose, and somatic subtypes, it involves jumping-to-conclusions cognitive biases.',
      mnemonic: 'J-EPGS — Jealous (Othello) · Erotomanic · Persecutory · Grandiose · Somatic',
      codes: { icd10cm: ['F22'], icd11: ['6A24'], note: 'DSM-5-TR 297.1 Delusional Disorder' },
      criteria: [
        'Presence of one or more delusions with a duration of 1 month or longer',
        'Criterion A for schizophrenia has never been met',
        'Apart from the impact of the delusion(s), functioning is not markedly impaired, and behaviour is not bizarre',
        'If mood episodes have occurred, these have been brief relative to the duration of the delusional periods',
        'Not attributable to physiological effects of a substance or another medical condition',
        'Specify whether Erotomanic, Grandiose, Jealous, Persecutory, Somatic, Mixed, or Unspecified'
      ],
      epidemiology: {
        text: 'Delusional Disorder is relatively uncommon, with an estimated lifetime prevalence of approximately 0.2% in the general population (Kessler et al., 2005; APA, 2022). It typically emerges in middle to late adult life (mean onset 40–50 years), with persecutory and jealous subtypes being the most frequently encountered in clinical settings.',
        stats: [
          { claim: 'Lifetime prevalence of Delusional Disorder in adult population', value: '≈ 0.2%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Most prevalent clinical subtype of delusional disorder', value: 'Persecutory (>60%)', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Mild striatal dopaminergic hyper-reactivity without gross structural brain loss', 'Familial aggregation with paranoid personality and schizophrenia spectrum'],
        psychological: ['"Jumping to Conclusions" cognitive bias in probabilistic reasoning', 'Externalizing attributional defense against profound underlying vulnerability'],
        sociocultural: ['Social isolation, severe hearing impairment, and migration into unfamiliar linguistic settings'],
        integrative: 'Sensory isolation and cognitive biases interact to fixate plausible misinterpretations into unshakeable delusions.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Subtle functional alterations in the right prefrontal cortex and striatal salience circuitry during hypothesis testing tasks.'
      },
      differential: [
        { vs: 'Schizophrenia', distinguishingFeature: 'Schizophrenia requires hallucinations, disorganized speech/behaviour, or the 5 A\'s of negative symptoms alongside marked pervasive functional decline; delusional disorder exhibits preserved social functioning outside the delusion.' },
        { vs: 'Obsessive-Compulsive Disorder (Poor Insight)', distinguishingFeature: 'In OCD with poor insight, rituals are performed to neutralize obsessive anxiety, whereas delusions in delusional disorder are fixed convictions without compulsive neutralizing rituals.' }
      ],
      comorbidity: ['major-depression', 'gad', 'paranoid-personality'],
      caseFile: {
        title: 'Case Vignette: The Poisoned Pipe',
        composite: true,
        text: 'Nandlal, a 52-year-old high school mathematics teacher, continues to teach his classes with high acclaim. However, for six months, Nandlal has maintained the unshakeable conviction that his next-door neighbor is pumping odorless carbon monoxide through his bedroom electrical sockets to force him to sell his house. Nandlal has sealed all sockets with wax, installed seven air purifiers, and spent his life savings hiring private chemical laboratories to test the bedroom air. When all laboratory reports returned zero contaminants, Nandlal declared that the laboratories had been bribed. Nandlal has no hallucinations, no thought disorder, and speaks with clear logic until the topic of his neighbor arises.',
        questions: [
          'Why does Nandlal\'s case meet the diagnostic threshold for Delusional Disorder (Persecutory Type) rather than Schizophrenia?',
          'How does Nandlal\'s dismissal of negative laboratory reports illustrate the incorrigibility of a clinical delusion?'
        ]
      },
      myths: [
        { myth: 'People with delusions always speak gibberish and act completely crazy.', fact: 'Individuals with delusional disorder typically speak with impeccable clarity, dress normally, and function well outside their specific encapsulated delusional belief.', refId: 'apa2022' },
        { myth: 'You can cure a delusion by presenting overwhelming logical proof and physical evidence.', fact: 'A clinical delusion is by definition impermeable to logical argument; direct confrontation usually triggers anger and incorporates the clinician into the conspiracy.', refId: 'who2022' },
        { myth: 'Delusional disorder is just another name for paranoid schizophrenia.', fact: 'Delusional disorder is an independent diagnosis lacking the hallucinations, thought disorganization, and negative symptoms of schizophrenia.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [4, 8],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition and Distinguishing Features', points: ['DSM-5-TR requirement of ≥1 delusion for ≥1 month', 'Absence of Criterion A schizophrenia symptoms (no hallucinations/disorganization)', 'Preserved psychosocial functioning outside the delusion'] },
          { heading: 'Clinical Subtypes (J-EPGS)', points: ['Persecutory (most common)', 'Jealous (Othello syndrome)', 'Erotomanic', 'Grandiose', 'Somatic'] },
          { heading: 'Cognitive Mechanisms and Treatment', points: ['"Jumping to Conclusions" (JTC) data-gathering bias', 'Externalizing attributional schemas', 'Second-generation antipsychotics and non-adversarial CBTp'] }
        ],
        modelAnswer: 'Delusional Disorder (DSM-5-TR 297.1 / ICD-10 F22 / ICD-11 6A24) is a psychotic spectrum disorder characterized by the presence of one or more circumscribed delusions lasting for at least one month, in the absence of other prominent psychotic symptoms.\n\nAccording to DSM-5-TR criteria, diagnosis requires: (1) presence of one or more delusions with a duration of at least one month; (2) Criterion A for schizophrenia has never been met (hallucinations, if present, are not prominent and are thematic to the delusion); (3) apart from the direct impact of the delusion, daily functioning is not markedly impaired and behaviour is not obviously bizarre; and (4) any mood episodes that co-occur are brief relative to the delusional duration.\n\nThe DSM-5-TR delineates six primary clinical subtypes based on the predominant theme:\n1. Persecutory Type: Conviction of being conspired against, spied on, poisoned, or cheated (the most common clinical variant).\n2. Jealous Type (Othello Syndrome): Unshakeable conviction that one\'s partner is unfaithful, often resulting in dangerous surveillance.\n3. Erotomanic Type: The belief that another individual, typically of higher social status, is secretly in love with the patient.\n4. Grandiose Type: Delusion of possessing unrecognized genius, divine missions, or vast wealth.\n5. Somatic Type: Delusions of physical defect or disease, such as emitting foul odors or infestation with parasites.\n6. Mixed / Unspecified Type.\n\nCognitively, individuals with delusional disorder demonstrate a pronounced "Jumping to Conclusions" (JTC) bias, making firm decisions based on minimal probabilistic evidence. They also utilize externalizing attributional styles to protect vulnerable self-esteem against perceived threat. Treatment involves second-generation atypical antipsychotics (aripiprazole, risperidone) and non-adversarial Cognitive Behaviour Therapy for Psychosis (CBTp) focused on hypothesis testing.',
        shortNote: 'Delusional Disorder involves ≥1 delusion lasting ≥1 month with preserved daily functioning and no negative symptoms. Subtypes include Persecutory, Jealous (Othello syndrome), Erotomanic, Grandiose, and Somatic. Cognitive drivers include the "Jumping to Conclusions" bias; it is treated with antipsychotics and CBTp.',
        mnemonics: ['J-EPGS: Jealous (Othello), Erotomanic, Persecutory, Grandiose, Somatic'],
        keyTerms: ['Delusional Disorder', 'Circumscribed delusion', 'Othello syndrome', 'Jumping to Conclusions (JTC)', 'Preserved functioning', 'Persecutory', 'Erotomanic', 'CBTp']
      },
      related: ['schizophrenia', 'schizoaffective'],
      refs: ['apa2022', 'who2022', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'schizoaffective',
      volume: 'VI',
      order: 3,
      template: 'disorder',
      category: 'Psychotic Disorders',
      icon: 'layers',
      name: 'Schizoaffective Disorder',
      preview: 'The clinical bridge between schizophrenia and affective mood episodes.',
      definition: 'Schizoaffective Disorder is an uninterrupted period of illness characterized by the concurrent presence of an active major mood episode (major depressive or manic) alongside Criterion A active symptoms of schizophrenia, accompanied by at least two weeks of delusions or hallucinations occurring in the complete absence of a major mood episode.',
      explanation: `### The Diagnostic Bridge: Psychosis Meets Mood
First coined by Jacob Kasanin in 1933, Schizoaffective Disorder (DSM-5-TR 295.70 / ICD-10 F25 / ICD-11 6A21) occupies a crucial diagnostic territory bridging Schizophrenia and Mood Disorders (Bipolar Disorder and Major Depressive Disorder). Clinicians frequently find that patients present with profound psychotic symptoms alongside intense affective highs or lows.

### The Two Mandatory Diagnostic Pillars (DSM-5-TR)
To establish a valid diagnosis of schizoaffective disorder, two strict criteria must both be satisfied:
1. Criterion A: An uninterrupted period of illness during which there is a major mood episode (either a Major Depressive Episode requiring depressed mood, or a Manic Episode) concurrent with active-phase symptoms of schizophrenia (delusions, hallucinations, disorganized speech).
2. The Two-Week Independent Psychosis Rule (Criterion B): Delusions or hallucinations must be present for at least two consecutive weeks in the ABSENCE of a major mood episode (depressive or manic) during the lifetime duration of the illness.
3. Criterion C: Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.
4. Criterion D: The disturbance is not attributable to the effects of a substance or another medical condition.

### Clinical Subtypes: Bipolar vs Depressive
DSM-5-TR categorizes schizoaffective disorder into two clinical subtypes:
- Bipolar Type: This subtype applies if a Manic Episode is part of the presentation. Major depressive episodes also frequently occur.
- Depressive Type: This subtype applies if only Major Depressive Episodes are part of the presentation (no lifetime manic or hypomanic episodes).

### Differential Diagnosis: The Crucial Diagnostic Boundaries
- Versus Schizophrenia: In schizophrenia, mood episodes are either completely absent or present for only a minor fraction of the total illness duration. In schizoaffective disorder, mood episodes occupy the majority of the active illness duration.
- Versus Mood Disorder with Psychotic Features (Bipolar I with Psychosis or MDD with Psychotic Features): In mood disorders with psychotic features, delusions and hallucinations occur EXCLUSIVELY during active mood episodes. Once the depression or mania resolves, the psychosis completely disappears. In schizoaffective disorder, psychosis persists independently for at least two weeks when mood is completely euthymic.

### Neurobiology and Longitudinal Course
Genetic linkage and genome-wide association studies (GWAS) show that schizoaffective disorder shares polygenic risk alleles with both schizophrenia and bipolar disorder. Longitudinally, individuals with schizoaffective disorder demonstrate a functional outcome that is intermediate between the chronic deterioration of schizophrenia and the more episodic recovery of bipolar disorder.

### Treatment Strategies
Treatment requires a multimodal psychopharmacological regimen:
- In the Bipolar Type: A second-generation atypical antipsychotic (paliperidone is the only FDA-approved monotherapy for schizoaffective disorder; olanzapine, risperidone) combined with a mood stabilizer (lithium carbonate or valproate).
- In the Depressive Type: An atypical antipsychotic combined with an antidepressant (SSRI/SNRI).
- Psychosocial Interventions: Cognitive Behavioural Therapy for Psychosis (CBTp), family psychoeducation, and supported employment.`,
      keyPoints: [
        'Requires concurrent active psychosis (delusions/hallucinations) + major mood episode (depressive or manic)',
        'The Two-Week Rule: Must exhibit delusions or hallucinations for ≥2 weeks in the ABSENCE of a major mood episode',
        'Mood symptoms must be present for the majority of the total duration of the illness',
        'Subtypes: Bipolar Type (includes mania) vs Depressive Type (major depression only)',
        'Crucial distinction: in psychotic depression/mania, psychosis occurs only during the mood episode; in schizoaffective, psychosis occurs independently for ≥2 weeks',
        'Treatment: Second-generation antipsychotics (paliperidone) combined with mood stabilizers or antidepressants'
      ],
      types: [
        'Schizoaffective Disorder, Bipolar Type (Includes manic episodes, with or without depression)',
        'Schizoaffective Disorder, Depressive Type (Includes major depressive episodes only)',
        'Schizoaffective Disorder with Catatonia Specifier'
      ],
      symptoms: [
        'Delusions and auditory hallucinations persisting during periods of normal, euthymic mood',
        'Severe manic episodes (euphoria, grandiosity, sleep loss) alternating with psychotic breaks',
        'Profound major depressive episodes (anhedonia, suicidal despair) occurring alongside psychosis',
        'Social and occupational functional impairment spanning months or years',
        'Cognitive executive deficits intermediate between schizophrenia and mood disorders'
      ],
      psychologists: [
        'Jacob Kasanin (1933) — First introduced the concept of schizoaffective psychosis',
        'Emil Kraepelin — Originally struggled to categorize patients with mixed affective-dementia states'
      ],
      examples: [
        'A patient who experiences full-blown manic episodes with grandiose delusions, but who continues to hear persecutory voices commenting on his actions for three weeks after mania has fully resolved (Bipolar Type)',
        'An individual with recurring major depressive episodes who experiences continuous persecutory delusions and auditory hallucinations even during months when his mood is entirely stable (Depressive Type)'
      ],
      treatment: 'Atypical antipsychotics (paliperidone, risperidone, olanzapine) combined with mood stabilizers (lithium, valproate) for bipolar type, or antidepressants for depressive type. Adjunctive CBTp and supported employment.',
      summary: 'Schizoaffective Disorder bridges schizophrenia and affective disorders, requiring concurrent mood and psychotic symptoms plus ≥2 weeks of independent psychosis without mood episodes. Subdivided into bipolar and depressive types, it is treated with antipsychotics and mood stabilizers.',
      mnemonic: 'TWO WEEKS — Two weeks of psychosis without mood symptoms confirms schizoaffective disorder',
      codes: { icd10cm: ['F25.0', 'F25.1'], icd11: ['6A21'], note: 'DSM-5-TR 295.70 Schizoaffective Disorder' },
      criteria: [
        'An uninterrupted period of illness during which there is a major mood episode concurrent with Criterion A of schizophrenia',
        'Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode during lifetime duration of illness',
        'Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of active and residual portions of illness',
        'Disturbance is not attributable to the effects of a substance or medical condition',
        'Specify whether Bipolar Type (if a manic episode is part of the presentation) or Depressive Type (if only major depressive episodes)'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Schizoaffective Disorder is approximately 0.3% in the general population (Kessler et al., 2005; APA, 2022). Incidence is somewhat higher in females, predominantly due to an increased frequency of the depressive subtype among women. Onset typically occurs in early adulthood.',
        stats: [
          { claim: 'Lifetime prevalence of Schizoaffective Disorder', value: '≈ 0.3%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Proportion of mood symptoms across active illness duration', value: '> 50%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Shared polygenic risk loci bridging schizophrenia (MHC, ZNF804A) and bipolar disorder (CACNA1C)', 'Dopaminergic and serotonergic neurotransmitter dysregulation'],
        psychological: ['Severe cognitive appraisals and affective dysregulation interacting with stress'],
        sociocultural: ['Chronic interpersonal conflict and social isolation'],
        integrative: 'Overlapping polygenic liability creates susceptibility to both affective dysregulation and aberrant psychotic salience.'
      },
      neuro: {
        regions: ['temporal', 'frontal'],
        note: 'Intermediate patterns of ventricular enlargement and frontotemporal grey matter volume loss spanning between schizophrenia and bipolar cohorts.'
      },
      differential: [
        { vs: 'Schizophrenia', distinguishingFeature: 'In schizophrenia, mood episodes occupy only a minor fraction of the illness duration; in schizoaffective disorder, mood episodes occupy the majority of the total active illness duration.' },
        { vs: 'Bipolar I Disorder with Psychotic Features', distinguishingFeature: 'In Bipolar I with psychosis, psychotic symptoms occur EXCLUSIVELY during manic or depressive episodes; in schizoaffective disorder, delusions or hallucinations MUST persist for ≥2 weeks in the absence of any mood episode.' }
      ],
      comorbidity: ['substance-use', 'tobacco-use-disorder', 'gad'],
      caseFile: {
        title: 'Case Vignette: The Two-Week Rule in Practice',
        composite: true,
        text: 'Farhan, a 28-year-old graphic artist, was evaluated following a three-year history of psychiatric hospitalizations. For six months last year, Farhan suffered a severe manic episode: he slept two hours nightly, bought three sports cars on credit, and believed he was the divine protector of the galaxy. During this manic phase, he also heard voices commanding him to build antennas. When treated with lithium, Farhan\'s mania fully remitted; his sleep, spending, and mood returned to baseline. However, for four consecutive weeks after his mood stabilized, Farhan continued to hear distinct derogatory voices and maintained the delusion that his food was radioactive. When asked, Farhan reported no sadness, guilt, or euphoria during those four weeks.',
        questions: [
          'How does the persistence of Farhan\'s psychotic symptoms for four weeks without mood symptoms satisfy the "Two-Week Rule" for Schizoaffective Disorder?',
          'Why does this independent psychotic period rule out a diagnosis of Bipolar I Disorder with Psychotic Features?'
        ]
      },
      myths: [
        { myth: 'Schizoaffective disorder is just schizophrenia and depression occurring accidentally at the same time.', fact: 'Schizoaffective disorder is a distinct neurobiological condition with overlapping genetic alleles bridging affective and psychotic illness, requiring unique longitudinal diagnostic criteria.', refId: 'apa2022' },
        { myth: 'If a patient has ever had depression, their schizophrenia diagnosis must be changed to schizoaffective disorder.', fact: 'Schizoaffective disorder requires that mood episodes occupy the majority of the total illness and that delusions/hallucinations persist for at least 2 weeks without any mood symptoms.', refId: 'who2022' },
        { myth: 'Patients with schizoaffective disorder never recover or work again.', fact: 'Because of the prominent affective component, patients with schizoaffective disorder generally have better functional outcomes and treatment response than patients with schizophrenia.', refId: 'kessler2005' }
      ],
      exam: {
        pdfQ: [19, 20],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition and The Two-Week Rule', points: ['Kasanin (1933) and the bridge between psychosis and mood', 'Concurrent active psychosis + major mood episode', 'The mandatory Criterion B: ≥2 weeks of delusions/hallucinations WITHOUT mood symptoms', 'Mood symptoms occupying the majority of active illness duration'] },
          { heading: 'Subtypes (Bipolar vs Depressive)', points: ['Bipolar Type (includes manic episode)', 'Depressive Type (major depressive episodes only)'] },
          { heading: 'Differential Diagnosis & Treatment', points: ['Distinction from Schizophrenia and Bipolar with Psychosis', 'Pharmacotherapy (paliperidone, mood stabilizers, SSRIs)', 'Psychosocial rehabilitation'] }
        ],
        modelAnswer: 'Schizoaffective Disorder (DSM-5-TR 295.70 / ICD-10 F25 / ICD-11 6A21), first described by Jacob Kasanin in 1933, is a complex psychiatric disorder that bridges the diagnostic boundary between Schizophrenia and Mood Disorders.\n\nTo establish a diagnosis under DSM-5-TR, four criteria must be satisfied:\n1. Criterion A: An uninterrupted period of illness during which there is a major mood episode (Major Depressive Episode requiring depressed mood, or a Manic Episode) concurrent with active-phase symptoms of schizophrenia (delusions, hallucinations, disorganized speech).\n2. Criterion B (The Two-Week Independent Psychosis Rule): Delusions or hallucinations must be present for at least two consecutive weeks in the ABSENCE of a major mood episode (depressive or manic) during the lifetime duration of the illness.\n3. Criterion C: Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.\n4. Criterion D: The disturbance is not attributable to substances or another medical condition.\n\nThe DSM-5-TR specifies two clinical subtypes: (1) Bipolar Type, if a manic episode is part of the presentation; and (2) Depressive Type, if only major depressive episodes are present.\n\nDifferential diagnosis is critical. In Schizophrenia, mood episodes are present for only a minor fraction of total illness duration. In Bipolar I or Major Depression with Psychotic Features, psychotic symptoms occur exclusively during active mood episodes; once the mood episode remits, psychosis disappears. In Schizoaffective Disorder, psychotic symptoms persist independently for at least two weeks when mood is completely euthymic.\n\nTreatment integrates second-generation atypical antipsychotics (paliperidone is FDA-approved for schizoaffective monotherapy) alongside mood stabilizers (lithium or valproate for Bipolar Type) or antidepressants (for Depressive Type), supported by Cognitive Behavioural Therapy for Psychosis (CBTp).',
        shortNote: 'Schizoaffective Disorder requires concurrent active psychosis and major mood episodes, PLUS ≥2 weeks of delusions or hallucinations occurring in the ABSENCE of mood symptoms. Subdivided into Bipolar and Depressive types, it is treated with atypical antipsychotics (paliperidone) and mood stabilizers.',
        mnemonics: ['TWO WEEKS: Two weeks of psychosis without mood symptoms confirms schizoaffective disorder'],
        keyTerms: ['Schizoaffective Disorder', 'Jacob Kasanin', 'Two-Week Rule', 'Concurrent mood episode', 'Bipolar Type', 'Depressive Type', 'Differential diagnosis', 'Paliperidone']
      },
      related: ['schizophrenia', 'delusional', 'bipolar', 'major-depression'],
      refs: ['apa2022', 'who2022', 'kessler2005'],
      lastVerified: '2026-10'
    }
  ];

  VOLUME_VI.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
