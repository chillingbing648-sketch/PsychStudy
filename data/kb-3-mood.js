/**
 * PsychStudy — The Clinical Atlas
 * Volume III: Mood Disorders & Suicidology
 * Chapters:
 *   3.1 major-depression (Major Depressive Disorder)
 *   3.2 bipolar (Bipolar I & Bipolar II Disorders)
 *   3.3 dysthymia (Persistent Depressive Disorder / Dysthymia)
 *   3.4 cyclothymia (Cyclothymic Disorder)
 *   3.5 sad (Seasonal Affective Disorder)
 *   3.6 suicide (Suicidal Behaviour: Etiology, Risk Assessment & Crisis Intervention)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_III = [
    {
      id: 'major-depression',
      volume: 'III',
      order: 1,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'cloud-rain',
      name: 'Major Depressive Disorder (MDD)',
      preview: 'Pervasive dysphoria, loss of hedonic capacity, cognitive slowing, and vegetative symptoms.',
      definition: 'Major Depressive Disorder (MDD) is a debilitating mood disorder characterized by the presence of at least five of nine depressive symptoms persisting for a minimum of two consecutive weeks, representing a marked departure from previous functioning, and necessarily including depressed mood or pervasive anhedonia.',
      explanation: `### Core Clinical Diagnostic Criteria
Under DSM-5-TR (APA, 2022; ICD-10 F32.x single episode, F33.x recurrent) and ICD-11 (6A70), diagnosis requires the presence of at least five of the following nine symptoms during a two-week period. At least one of the symptoms must be either (1) depressed mood most of the day, nearly every day, or (2) markedly diminished interest or pleasure in all or almost all activities (anhedonia):
1. Depressed mood most of the day, nearly every day
2. Markedly diminished interest or pleasure (anhedonia)
3. Significant unintentional weight loss or gain, or decrease/increase in appetite
4. Insomnia (initial, middle, or terminal) or hypersomnia nearly every day
5. Psychomotor agitation or retardation observable by others
6. Fatigue or loss of energy nearly every day
7. Feelings of worthlessness or excessive/inappropriate guilt
8. Diminished ability to think or concentrate, or indecisiveness
9. Recurrent thoughts of death, suicidal ideation, or suicide attempts

### Cognitive Architecture: Beck's Cognitive Triad
Aaron T. Beck (1976, 1979) established that depression is sustained by systematic cognitive distortions and underlying negative core schemas. Depressed individuals process environmental feedback through the "Negative Cognitive Triad":
- Negative views of the Self ("I am defective, unlovable, and incompetent")
- Negative views of the Ongoing World/Experience ("The world presents insurmountable demands and cruelty")
- Negative views of the Future ("Things will never improve; hardship will endure forever")

These negative schemas trigger automated cognitive errors—such as arbitrary inference, selective abstraction, overgeneralization, and dichotomous (all-or-nothing) thinking—which maintain depressive affect regardless of objective positive feedback.

### Etiological and Neurobiological Dimensions
Depression is an etiologically complex disorder:
- Monoamine Hypothesis & Neuroplasticity: While early models focused strictly on monoamine deficiency (serotonin, norepinephrine, dopamine), contemporary neurobiology recognizes that therapeutic response corresponds to downstream increases in Brain-Derived Neurotrophic Factor (BDNF) and hippocampal neurogenesis.
- Frontolimbic Decoupling: Functional MRI demonstrates hypoactivity in the dorsolateral prefrontal cortex (dlPFC; reducing executive working memory and cognitive reappraisal) coupled with hyper-reactivity in the subgenual anterior cingulate cortex and amygdala.
- Gender Epidemiology: Epidemiological surveys indicate a female-to-male prevalence ratio of roughly 1.5–2 : 1 across numerous large international cohorts (e.g., Kessler et al., 2005). Contributing mechanisms include neuroendocrine fluctuations across reproductive stages, differential stress socialization, role overload, and a higher cognitive tendency toward ruminative coping compared to externalizing coping in men.`,
      keyPoints: [
        'Requires ≥5 of 9 symptoms sustained for ≥2 weeks, including depressed mood or anhedonia',
        'Vegetative signs include terminal insomnia, psychomotor retardation, and appetite alterations',
        'Beck\'s Negative Cognitive Triad: negative automatic evaluations of Self, World, and Future',
        'Female-to-male lifetime prevalence ratio is approximately 1.5–2 : 1 across large international surveys',
        'Neurobiology: dlPFC hypoactivity, subgenual cingulate hyperactivation, and BDNF downregulation',
        'First-line treatments: Cognitive Behavioural Therapy (CBT), Interpersonal Therapy (IPT), and SSRIs'
      ],
      types: [
        'MDD, Single Episode (Mild, Moderate, Severe)',
        'MDD, Recurrent Episode',
        'Specifiers: With Anxious Distress, Mixed Features, Melancholic Features, Atypical Features, Psychotic Features, Peripartum Onset, Seasonal Pattern'
      ],
      symptoms: [
        'Persistent, unremitting low mood and tearfulness',
        'Complete loss of interest or pleasure in hobbies and intimacy (anhedonia)',
        'Terminal early-morning awakening and fractured sleep architecture',
        'Severe psychomotor slowing, leaden paralysis, and physical lethargy',
        'Debilitating feelings of worthlessness, pathological guilt, and suicidal despair'
      ],
      psychologists: [
        'Aaron T. Beck (1976, 1979) — Formulated cognitive therapy and the negative cognitive triad',
        'Martin Seligman (1975) — Formulated the learned helplessness model of depression'
      ],
      examples: [
        'A corporate executive unable to get out of bed for three weeks, experiencing profound cognitive indecisiveness and conviction of financial ruin despite prosperity',
        'A college student who ceases attending lectures, stops eating, and experiences persistent thoughts that their family would be better off without them'
      ],
      treatment: 'Cognitive Behavioural Therapy (CBT; Beck et al., 1979) targeting automatic thoughts and core schemas, alongside Behavioural Activation. Interpersonal Psychotherapy (IPT). Pharmacotherapy: SSRIs (escitalopram, sertraline), SNRIs (venlafaxine), or dual-acting agents. In treatment-resistant cases, Electroconvulsive Therapy (ECT) or rTMS.',
      summary: 'MDD is characterized by ≥5 of 9 depressive symptoms lasting ≥2 weeks with depressed mood or anhedonia. Beck\'s cognitive triad and frontolimbic dysregulation sustain the syndrome, which responds effectively to CBT, behavioural activation, and SSRIs.',
      mnemonic: 'SIGECAPS — Sleep · Interest (Anhedonia) · Guilt · Energy · Concentration · Appetite · Psychomotor · Suicidal thoughts',
      codes: { icd10cm: ['F32.9', 'F33.9'], icd11: ['6A70', '6A71'], note: 'DSM-5-TR 296.2x / 296.3x Major Depressive Disorder' },
      criteria: [
        'Five (or more) of nine symptoms present during the same 2-week period representing a change from previous functioning',
        'At least one symptom is depressed mood or loss of interest/pleasure (anhedonia)',
        'Symptoms include: depressed mood, anhedonia, weight/appetite changes, insomnia/hypersomnia, psychomotor agitation/retardation, fatigue, worthlessness/guilt, poor concentration/indecision, thoughts of death',
        'Symptoms cause clinically significant distress or functional impairment',
        'Episode is not attributable to physiological effects of a substance or medical condition',
        'There has never been a manic or hypomanic episode'
      ],
      epidemiology: {
        text: 'MDD is the leading cause of disability worldwide (WHO, 2022). Global lifetime prevalence is estimated at approximately 12–16% (Kessler et al., 2005). The National Mental Health Survey of India (Gururaj et al., 2016) found that nearly 2.7% of the adult population in India suffered from current depression, with a staggering treatment gap exceeding 80%.',
        stats: [
          { claim: 'Global lifetime prevalence of Major Depressive Disorder', value: '≈ 12–16%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Current point prevalence of depression in India', value: '2.7%', refId: 'gururaj2016', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Heritability estimated at approximately 37–40%', 'Altered monoaminergic neurotransmission and BDNF downregulation', 'HPA axis hyperactivity with elevated cortisol levels'],
        psychological: ['Beck\'s negative cognitive triad and depressogenic schemas', 'Abramson\'s learned helplessness and pessimistic explanatory style (internal, stable, global)', 'Ruminative response style (Nolen-Hoeksema)'],
        sociocultural: ['Chronic poverty and adverse life events', 'Gender socialization, domestic strain, and caregiver burden'],
        integrative: 'Genetic vulnerabilities interact with early adverse attachment and stressful life events to precipitate depressive episodes.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Hypoactivity in the dorsolateral prefrontal cortex (dlPFC) combined with hyperactivity in the subgenual anterior cingulate cortex and amygdala.'
      },
      differential: [
        { vs: 'Persistent Depressive Disorder (Dysthymia)', distinguishingFeature: 'Dysthymia is a chronic, low-grade depression persisting for at least 2 years without meeting full criteria for a severe major depressive episode throughout that period.' },
        { vs: 'Normal Bereavement', distinguishingFeature: 'In normal bereavement, feelings of emptiness and loss predominate with preserved self-esteem and wave-like pangs of grief tied to memories of the deceased, whereas MDD features pervasive unremitting dysphoria, self-loathing, and worthlessness.' }
      ],
      comorbidity: ['gad', 'panic', 'substance-use', 'borderline'],
      caseFile: {
        title: 'Case Vignette: The Paralyzing Fog',
        composite: true,
        text: 'Nalini, a 42-year-old high school principal, was brought to the clinic by her partner after she spent four weeks unable to get out of bed. Nalini reported that she wakes at 3:30 AM every morning with immediate, agonizing self-reproach, convinced that she has permanently failed her students and family. She has lost 7 kg due to complete lack of appetite, describes feeling as though her limbs are filled with lead (psychomotor retardation), and cannot muster the interest to read or listen to music. When asked about the future, Nalini stated flatly that life will never be good again.',
        questions: [
          'Which diagnostic criteria for Major Depressive Disorder are evidenced in Nalini\'s clinical presentation?',
          'How does Nalini\'s 3:30 AM awakening illustrate melancholic vegetative neurovegetative disruption?'
        ]
      },
      myths: [
        { myth: 'Depression is simply ordinary sadness that can be shaken off with positive thinking.', fact: 'MDD is a profound medical and psychological disorder involving measurable neurochemical, cognitive, and circadian dysregulation.', refId: 'apa2022' },
        { myth: 'Depression is exclusively caused by a simple "chemical imbalance" of low serotonin.', fact: 'The chemical imbalance metaphor is scientifically obsolete; depression involves complex neural network alterations, stress-induced neurotoxicity, and cognitive schemas.', refId: 'who2022' },
        { myth: 'Antidepressant medication changes a person\'s authentic personality.', fact: 'Evidence-based medications restore neuroplasticity and emotional baseline, enabling individuals to re-engage with psychotherapy and everyday values.', refId: 'beck1979' }
      ],
      exam: {
        pdfQ: [18],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Criteria and Phenomenology', points: ['DSM-5-TR requirement of ≥5 of 9 symptoms for ≥2 weeks', 'Essential requirement of depressed mood or anhedonia', 'Vegetative and cognitive symptom profile (SIGECAPS)'] },
          { heading: 'Etiology & Theoretical Formulations', points: ['Beck\'s cognitive triad (Self, World, Future) and cognitive distortions', 'Learned helplessness and ruminative style', 'Neurobiology (frontolimbic decoupling, BDNF, HPA axis)'] },
          { heading: 'Epidemiological Nuances & Interventions', points: ['Gender ratio (1.5–2:1) and contributing factors', 'Evidence-based CBT and Behavioural Activation', 'Pharmacotherapy (SSRIs, SNRIs) and somatic treatments (ECT)'] }
        ],
        modelAnswer: 'Major Depressive Disorder (MDD; DSM-5-TR 296.2x/296.3x / ICD-10 F32/F33) is a pervasive mood disorder characterized by persistent low mood and an inability to experience pleasure, accompanied by substantial cognitive, behavioural, and neurovegetative impairment.\n\nAccording to the DSM-5-TR, diagnosis mandates the presence of at least five of nine symptoms sustained across a minimum of two consecutive weeks, representing a marked shift from baseline functioning. Crucially, at least one symptom must be either depressed mood most of the day, nearly every day, or pervasive anhedonia (markedly diminished interest or pleasure across activities). The remaining symptoms encompass: significant weight/appetite alterations, insomnia or hypersomnia (often manifesting as terminal early-morning awakening), observable psychomotor agitation or retardation, chronic fatigue or anergia, excessive or inappropriate feelings of worthlessness/guilt, diminished concentration or indecision, and recurrent thoughts of death or suicidal ideation (summarized by the mnemonic SIGECAPS).\n\nCognitively, Aaron Beck (1976) demonstrated that depression is maintained by depressogenic schemas and the Negative Cognitive Triad: systematic, automated negative appraisals regarding the Self ("I am defective"), the World ("life is unfair"), and the Future ("nothing will improve"). Depressed individuals exhibit information-processing biases such as arbitrary inference, overgeneralization, and selective abstraction. In parallel, Nolen-Hoeksema\'s rumination theory explains why women experience depression at roughly 1.5–2 times the rate of men: women are more likely to repetitively analyze negative emotions without active problem-solving.\n\nNeurobiologically, functional neuroimaging demonstrates hypoactivity in the dorsolateral prefrontal cortex (dlPFC) combined with hyperactivity in the subgenual anterior cingulate cortex and amygdala, alongside blunted hippocampal neurogenesis and HPA axis hypercortisolemia.\n\nTreatment integrates Cognitive Behavioural Therapy (Beck et al., 1979) featuring Behavioural Activation to dismantle withdrawal cycles, alongside first-line pharmacotherapies including SSRIs (sertraline, escitalopram) and SNRIs.',
        shortNote: 'Major Depressive Disorder is diagnosed when ≥5 of 9 symptoms (SIGECAPS) persist for ≥2 weeks, necessarily including depressed mood or anhedonia. Beck\'s negative cognitive triad (Self, World, Future) and frontolimbic dysregulation sustain the condition, which responds to CBT and SSRIs.',
        mnemonics: ['SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal thoughts'],
        keyTerms: ['Major Depressive Disorder', 'Anhedonia', 'Beck\'s cognitive triad', 'SIGECAPS', 'Frontolimbic decoupling', 'BDNF', 'Behavioural Activation']
      },
      related: ['bipolar', 'dysthymia', 'sad', 'suicide'],
      refs: ['apa2022', 'who2022', 'beck1976', 'beck1979', 'kessler2005', 'gururaj2016'],
      lastVerified: '2026-10'
    },
    {
      id: 'bipolar',
      volume: 'III',
      order: 2,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'activity',
      name: 'Bipolar I & Bipolar II Disorders',
      preview: 'Oscillations between manic grandiosity, hyperarousal, and debilitating depressive lows.',
      definition: 'Bipolar Disorders are chronic affective conditions characterized by severe episodic fluctuations in mood, energy, and activity levels, oscillating between pathological elevations (mania or hypomania) and profound depressive episodes.',
      explanation: `### Distinguishing Bipolar I and Bipolar II
The DSM-5-TR (ICD-10 F31.x) establishes a crucial clinical boundary between Bipolar I and Bipolar II Disorders:
- Bipolar I Disorder: Requires the occurrence of at least one lifetime Manic Episode. A manic episode is a distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally increased goal-directed activity or energy lasting at least one full week (or any duration if hospitalization is necessary). While major depressive episodes occur in the vast majority of Bipolar I cases, they are not strictly required for diagnosis.
- Bipolar II Disorder: Requires at least one current or past Hypomanic Episode AND at least one Major Depressive Episode. There has NEVER been a full manic episode. A hypomanic episode lasts at least four consecutive days and represents a clear change in functioning observable by others, but is not severe enough to cause marked impairment in social or occupational functioning, does not require hospitalization, and contains no psychotic features.

### Clinical Anatomy of Mania (The "DIG FAST" Criteria)
During a manic episode, mood is grandiose, euphoric, or intensely irritable. Diagnosis requires at least three of the following symptoms (four if the mood is only irritable):
1. Inflated self-esteem or grandiosity (ranging from ungrounded confidence to delusional omnipotence)
2. Decreased need for sleep (feeling rested after only 2–3 hours of sleep; distinct from insomnia)
3. More talkative than usual or pressure to keep talking (pressured speech)
4. Flight of ideas or subjective experience that thoughts are racing
5. Distractibility (attention easily drawn to unimportant or irrelevant external stimuli)
6. Increase in goal-directed activity (socially, at work/school, or sexually) or psychomotor agitation
7. Excessive involvement in activities that have a high potential for painful consequences (unrestrained buying sprees, sexual indiscretions, foolish business investments)

### Neurobiology and High Heritability
Bipolar disorder exhibits one of the highest heritabilities among all psychiatric disorders, estimated at approximately 70–85% in twin studies. Neurobiological mechanisms include:
- Dopaminergic and Glutamatergic Dysregulation: Manic episodes correlate with hyper-dopaminergic neurotransmission in mesolimbic circuits and elevated glutamatergic signaling, whereas depressive phases reflect monoaminergic depletion.
- Circadian Instability: Disruption of biological clocks (social zeitgebers) can precipitously trigger manic episodes, often initiated by travel across time zones, sleep deprivation, or shift work.
- Mood Stabilizers: Lithium carbonate (discovered by John Cade in 1949) remains the gold-standard prophylactic mood stabilizer, dampening excitatory inositol monophosphatase (IMPase) and glycogen synthase kinase-3 (GSK-3) pathways.`,
      keyPoints: [
        'Bipolar I requires at least one full Manic Episode (lasting ≥1 week or requiring hospitalization)',
        'Bipolar II requires at least one Hypomanic Episode (≥4 days) AND at least one Major Depressive Episode',
        'If psychotic symptoms or hospitalization occur, the episode is categorized as Mania, not Hypomania',
        'Mania symptoms: Grandiosity, Decreased sleep need, Pressured speech, Racing thoughts, Distractibility, High-risk activities (DIG FAST)',
        'Heritability is exceptionally high (70–85%); circadian disruption is a major trigger',
        'Lithium salts (Cade, 1949) remain the gold-standard maintenance pharmacotherapy'
      ],
      types: [
        'Bipolar I Disorder (Single Manic Episode, Most Recent Episode Manic, Depressed, or Mixed)',
        'Bipolar II Disorder (Recurrent Major Depressive Episodes with Hypomania)',
        'Rapid-Cycling Specifier (≥4 mood episodes within a 12-month period)',
        'With Mixed Features Specifier (Manic episode with subthreshold depressive symptoms, or vice versa)'
      ],
      symptoms: [
        'Extreme euphoria, irritability, and grandiose omnipotent delusions',
        'Markedly reduced requirement for sleep without daytime fatigue',
        'Pressured, rapid speech and subjective flight of racing ideas',
        'High-risk impulsive behaviours (massive debt, reckless driving, risky investments)',
        'Severe alternating episodes of vegetative, melancholic depression'
      ],
      psychologists: [
        'Emil Kraepelin (1899) — Delineated "manic-depressive insanity" from dementia praecox',
        'John Cade (1949) — Discovered the therapeutic efficacy of lithium salts in bipolar mania'
      ],
      examples: [
        'An individual who sleeps two hours nightly for a week, drains family bank accounts to buy fifty luxury watches, and speaks incessantly at rapid speed (Bipolar I Mania)',
        'A writer who experiences four days of high energy, rapid productivity, and optimism without functional breakdown, followed by a month of severe bedridden depression (Bipolar II)'
      ],
      treatment: 'Mood stabilizers are primary: Lithium carbonate (gold standard; Cade, 1949), divalproex sodium, carbamazepine, and atypical antipsychotics (quetiapine, olanzapine). Adjunctive psychotherapy includes Interpersonal and Social Rhythm Therapy (IPSRT) and family-focused therapy.',
      summary: 'Bipolar disorder involves profound affective oscillations. Bipolar I requires at least one full manic episode; Bipolar II features hypomania and major depression. High heritability and circadian sensitivity characterize the condition, stabilized primarily via lithium.',
      mnemonic: 'DIG FAST — Distractibility · Indiscretion (high risk) · Grandiosity · Flight of ideas · Activity increase · Sleep deficit · Talkativeness',
      codes: { icd10cm: ['F31.9'], icd11: ['6A60', '6A61'], note: 'DSM-5-TR 296.xx Bipolar I / Bipolar II Disorders' },
      criteria: [
        'Bipolar I: At least one lifetime manic episode (≥1 week or hospitalized)',
        'Bipolar II: At least one hypomanic episode (≥4 days) AND at least one major depressive episode (≥2 weeks); NO history of mania',
        'Mania requires ≥3 of 7 symptoms (≥4 if mood is only irritable): grandiosity, decreased sleep need, pressured speech, flight of ideas, distractibility, increased goal activity, high-risk behaviour',
        'Symptoms in mania cause marked impairment in occupational/social functioning or necessitate hospitalization to prevent harm',
        'Not attributable to substances (e.g., cocaine intoxication, steroid medication) or medical conditions'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Bipolar I Disorder is approximately 1.0%, and Bipolar II is approximately 1.1% globally (Merikangas et al., 2011; Kessler et al., 2005). The male-to-female ratio is roughly equal for Bipolar I, while Bipolar II is slightly more common in women. Onset typically occurs in late adolescence or early adulthood (mean age 18–22 years).',
        stats: [
          { claim: 'Lifetime prevalence of Bipolar Spectrum disorders', value: '≈ 2.4%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Heritability of Bipolar Disorder in twin studies', value: '≈ 70–85%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['High genetic heritability (70–85%)', 'Dysregulated dopaminergic reward pathways and intracellular signaling cascades (GSK-3)', 'Circadian clock gene polymorphism'],
        psychological: ['Grandiosity and hypersensitivity to reward goals', 'Goal-attainment events triggering manic escalation'],
        sociocultural: ['Severe sleep deprivation and disruption of social zeitgebers', 'Interpersonal conflict and high expressed emotion within family systems'],
        integrative: 'Constitutional circadian and neurotransmitter vulnerabilities interact with sleep deprivation and environmental stressors to trigger episodes.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Hyperactivation of ventral striatal reward pathways during mania, coupled with reduced prefrontal cortical grey matter volume and frontolimbic dysregulation.'
      },
      differential: [
        { vs: 'Major Depressive Disorder (Unipolar)', distinguishingFeature: 'Unipolar depression features recurrent depressive episodes without any lifetime history of manic or hypomanic elevation. Treating bipolar depression with antidepressant monotherapy risks inducing manic switches.' },
        { vs: 'Schizoaffective Disorder (Bipolar Type)', distinguishingFeature: 'In schizoaffective disorder, delusions or hallucinations must persist for at least two weeks in the complete absence of prominent mood episodes.' }
      ],
      comorbidity: ['substance-use', 'gad', 'adhd', 'borderline'],
      caseFile: {
        title: 'Case Vignette: The Flight to Midnight',
        composite: true,
        text: 'Vikram, a 27-year-old software architect, was brought to hospital by his colleagues. For six days, Vikram had not slept, remaining awake in the office coding continuously. He spoke in an unstoppable torrent (pressured speech), declared that he had developed an artificial intelligence algorithm that would solve global poverty within 48 hours, and had signed leases on four separate luxury penthouses using credit advances. When colleagues attempted to calm him, Vikram became belligerent, accusing them of espionage. Two months prior, Vikram had been treated for severe lethargy, anhedonia, and suicidal thoughts.',
        questions: [
          'How does Vikram\'s clinical presentation satisfy the criteria for a Bipolar I Manic Episode?',
          'Why does the presence of grandiose delusions and marked functional disruption preclude a diagnosis of hypomania?'
        ]
      },
      myths: [
        { myth: 'Bipolar disorder is simply when someone changes their mood multiple times in a single day.', fact: 'Bipolar episodes are sustained clinical states typically lasting weeks or months; rapid mood shifts within minutes characterize emotional lability or borderline personality, not classic bipolar episodes.', refId: 'apa2022' },
        { myth: 'Hypomania is always a healthy, desirable state of enhanced creativity.', fact: 'While hypomania feels productive initially, it frequently destabilizes sleep architecture, impairs judgment, and reliably crashes into severe, life-threatening depression.', refId: 'who2022' },
        { myth: 'Antidepressants are the primary medication for all bipolar depression.', fact: 'Antidepressant monotherapy in bipolar disorder can precipitate manic switches or rapid cycling; mood stabilizers (lithium, lamotrigine, quetiapine) are the cornerstone of care.', refId: 'cade1949' }
      ],
      exam: {
        pdfQ: [2],
        marks: 15,
        structure: [
          { heading: 'Classification and Boundaries', points: ['Bipolar I vs Bipolar II differentiation', 'DSM-5-TR duration requirements (1 week for mania, 4 days for hypomania, 2 weeks for depression)', 'Hospitalization and psychotic features rules'] },
          { heading: 'Clinical Features of Mania (DIG FAST)', points: ['Elevated/expansive/irritable mood', 'Seven cardinal manic symptoms', 'Subjective flight of ideas and grandiosity'] },
          { heading: 'Etiology and Evidence-Based Management', points: ['Genetic heritability (70–85%)', 'John Cade (1949) and lithium carbonate therapy', 'Social zeitgeber theory and sleep hygiene'] }
        ],
        modelAnswer: 'Bipolar Disorders (DSM-5-TR 296.xx / ICD-10 F31.x) are severe chronic mood disorders characterized by cyclical fluctuations between pathological mood elevations and debilitating depressive episodes.\n\nThe DSM-5-TR delineates two primary diagnostic categories:\n1. Bipolar I Disorder: Requires the occurrence of at least one lifetime Manic Episode. Mania is defined as a distinct period of abnormally and persistently elevated, expansive, or irritable mood and increased goal-directed activity lasting at least one full week (or any duration if hospitalization is required). Symptoms must cause marked impairment in social or occupational functioning or feature psychotic symptoms. A major depressive episode is common but not strictly required for diagnosis.\n2. Bipolar II Disorder: Requires at least one Hypomanic Episode (lasting at least four consecutive days, noticeable by others but without marked functional collapse, hospitalization, or psychotic features) AND at least one Major Depressive Episode (lasting at least two weeks). There has never been a manic episode.\n\nThe clinical presentation of mania is summarized by the mnemonic DIG FAST: (1) Distractibility, (2) Indiscretion (excessive pursuit of pleasurable activities with painful consequences, like reckless spending), (3) Grandiosity or inflated self-esteem, (4) Flight of ideas or racing thoughts, (5) Activity increase (goal-directed or psychomotor agitation), (6) Sleep deficit (feeling energized after 2–3 hours), and (7) Talkativeness (pressured speech).\n\nBipolar disorder is among the most heritable psychiatric conditions (heritability 70–85%). Etiology involves dysregulated dopaminergic reward circuitry and cellular signaling anomalies. Circadian disruptions (trans-meridian travel, sleep loss) serve as potent environmental triggers.\n\nPharmacological stabilization is mandatory. Lithium carbonate, discovered by John Cade in 1949, remains the gold-standard mood stabilizer for treating acute mania and preventing relapse. Adjunctive psychosocial interventions include Interpersonal and Social Rhythm Therapy (IPSRT) to stabilize circadian sleep-wake cycles.',
        shortNote: 'Bipolar I requires at least one manic episode (≥1 week with grandiosity, decreased sleep, pressured speech, impulsivity); Bipolar II requires hypomania (≥4 days) plus major depression. Exhibiting 70–85% heritability, it is treated primarily with mood stabilizers like Lithium (Cade, 1949) and IPSRT.',
        mnemonics: ['DIG FAST: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity increase, Sleep deficit, Talkativeness'],
        keyTerms: ['Bipolar I', 'Bipolar II', 'Mania', 'Hypomania', 'DIG FAST', 'Lithium carbonate', 'John Cade', 'Social zeitgeber']
      },
      related: ['major-depression', 'dysthymia', 'cyclothymia', 'sad', 'suicide'],
      refs: ['apa2022', 'who2022', 'cade1949', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'dysthymia',
      volume: 'III',
      order: 3,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'cloud',
      name: 'Persistent Depressive Disorder (Dysthymia)',
      preview: 'Chronic, unremitting low-grade depression persisting for two or more years.',
      definition: 'Persistent Depressive Disorder (PDD), historically termed Dysthymia (ICD-10 F34.1), is a chronic depressive consolidation characterized by depressed mood for most of the day, for more days than not, for at least two years (at least one year in children and adolescents), accompanied by at least two vegetative or cognitive depressive symptoms.',
      explanation: `### DSM-5 Consolidation: From Dysthymia to PDD
In DSM-5 and DSM-5-TR (APA, 2022), the previous diagnostic categories of DSM-IV Chronic Major Depressive Disorder and Dysthymic Disorder were formally consolidated into Persistent Depressive Disorder (PDD). While "dysthymia" remains the universally recognized clinical and historical term (retained in ICD-10 F34.1 and ICD-11 6A72), PDD captures the clinical reality that chronic low-grade depression and unremitting major depression exist along a single dimensional continuum.

### Diagnostic Criteria (DSM-5-TR)
Diagnosis requires depressed mood for most of the day, for more days than not, as indicated by either subjective account or observation by others, for at least two years (in children and adolescents, mood can be irritable and duration must be at least one year).

While depressed, the individual must exhibit at least two of the following six symptoms:
1. Poor appetite or overeating
2. Insomnia or hypersomnia
3. Low energy or chronic fatigue
4. Low self-esteem
5. Poor concentration or difficulty making decisions
6. Feelings of hopelessness

During the two-year period (one year for youth), the individual has never been without the depressive symptoms for more than two months at a time. Furthermore, criteria for major depressive disorder may be continuously present for two years.

### The Phenomenon of "Double Depression"
Clinicians frequently encounter the phenomenon of "double depression"—a clinical trajectory where an individual with long-standing baseline Persistent Depressive Disorder experiences a superimposed acute Major Depressive Episode. When the acute episode remits with treatment, the patient does not achieve euthymia, but rather returns to their baseline chronic dysthymic dysphoria, which is often mistakenly accepted by the patient as their "natural personality."

### Cognitive and Interpersonal Dynamics
Because PDD endures for years, individuals often incorporate depressive cognitive schemas into their core identity ("I have always been a gloomy, defective person"). Learned helplessness becomes deeply entrenched. Interpersonally, chronic dysphoria, social withdrawal, and passive hostility strain family relationships, leading to rejection from support networks that reinforces the individual's core beliefs of unlovability.`,
      keyPoints: [
        'Persistent Depressive Disorder (PDD) consolidates DSM-IV dysthymia and chronic major depression',
        'Requires chronic depressed mood for ≥2 years in adults (≥1 year in children/adolescents)',
        'Must never have been symptom-free for more than 2 consecutive months during the 2-year duration',
        'Accompanied by at least 2 of 6 symptoms: appetite changes, sleep disruption, low energy, low self-esteem, poor concentration, hopelessness',
        '"Double depression" describes an acute major depressive episode superimposed on chronic dysthymia',
        'Treatment: Combined long-term Cognitive Behavioural Analysis System of Psychotherapy (CBASP) and pharmacotherapy'
      ],
      types: [
        'PDD with Pure Dysthymic Syndrome (Full major depressive criteria not met in past 2 years)',
        'PDD with Persistent Major Depressive Episode',
        'PDD with Intermittent Major Depressive Episodes ("Double Depression")',
        'Early Onset (Before age 21) / Late Onset (Age 21 or older)'
      ],
      symptoms: [
        'Pervasive, habitual low-grade melancholy and joylessness lasting years',
        'Chronic physical fatigue and low vitality',
        'Deep-seated feelings of inadequacy and eroded self-esteem',
        'Persistent cognitive indecision and executive inefficiency',
        'Pessimistic cognitive posture and enduring hopelessness'
      ],
      psychologists: [
        'James P. McCullough Jr. — Developed Cognitive Behavioural Analysis System of Psychotherapy (CBASP) for chronic depression',
        'Aaron T. Beck — Applied cognitive schema therapy to chronic affective disorders'
      ],
      examples: [
        'A school librarian who has felt gloomy, inadequate, and chronically fatigued for five years, describing her state as "just who I am," before developing severe acute suicidal depression',
        'An individual who has maintained employment but experienced flat affect, low appetite, and hopelessness without a break for over three years'
      ],
      treatment: 'Cognitive Behavioural Analysis System of Psychotherapy (CBASP; McCullough), specifically tailored for chronic depression by teaching interpersonal consequences of behaviour, combined with long-term SSRI or SNRI pharmacotherapy.',
      summary: 'PDD (Dysthymia) is a chronic mood disorder requiring depressed mood for ≥2 years with ≥2 vegetative/cognitive symptoms, without remissions >2 months. Often complicated by double depression, it requires combined psychotherapy (CBASP) and pharmacotherapy.',
      mnemonic: 'CHRONIC — Chronic duration (≥2 yrs) · Hopelessness · Reduced energy · Over/undereating · No 2-month break · Insomnia/hypersomnia · Concentration poor',
      codes: { icd10cm: ['F34.1'], icd11: ['6A72'], note: 'DSM-5-TR 300.4 Persistent Depressive Disorder' },
      criteria: [
        'Depressed mood for most of the day, for more days than not, for at least 2 years (1 year for children/adolescents)',
        'Presence, while depressed, of ≥2 of 6 symptoms: appetite changes, sleep changes, fatigue, low self-esteem, poor concentration/indecision, hopelessness',
        'During the 2-year period, the individual has never been without symptoms for more than 2 months at a time',
        'Criteria for major depressive disorder may be continuously present for 2 years',
        'No manic or hypomanic episode has ever occurred, and criteria for cyclothymia have not been met',
        'Disturbance causes clinically significant distress or impairment'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Persistent Depressive Disorder (Dysthymia) is approximately 2.5–3.5% (Kessler et al., 2005). Early onset (before age 21) is associated with higher comorbidity, chronic personality pathology, and elevated treatment resistance.',
        stats: [
          { claim: 'Lifetime prevalence of Persistent Depressive Disorder', value: '≈ 3.1%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Percentage of PDD patients who develop double depression', value: '≈ 75%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Blunted circadian rhythm amplitude', 'Sub-optimal central monoaminergic and neuroplastic signalling'],
        psychological: ['Entrenched negative cognitive self-schemas internalized as personality traits', 'Learned helplessness and passive-avoidant problem solving'],
        sociocultural: ['Early developmental emotional neglect and persistent chronic socioeconomic adversity'],
        integrative: 'Chronic developmental stress fosters persistent neurobiological allostatic load and ingrained depressive schemas.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Sustained, unremitting hypoactivation of the prefrontal cortex accompanied by chronic low-grade neuroinflammation.'
      },
      differential: [
        { vs: 'Major Depressive Disorder (Episodic)', distinguishingFeature: 'Episodic MDD consists of discrete, clear episodes lasting weeks or months with clear inter-episode recovery to euthymia, whereas PDD is an unremitting baseline lasting at least two full years.' },
        { vs: 'Cyclothymic Disorder', distinguishingFeature: 'Cyclothymia features oscillations between chronic mild depressive symptoms and periods of hypomanic symptoms; PDD never features hypomanic periods.' }
      ],
      comorbidity: ['major-depression', 'gad', 'substance-use', 'avoidant-personality'],
      caseFile: {
        title: 'Case Vignette: The Grey Horizon',
        composite: true,
        text: 'Manish, a 31-year-old archivist, remarks during a medical consult: "I haven\'t felt happy since my late teens, but that is simply my temperament." For over four years, Manish has experienced low appetite, broken sleep, perpetual exhaustion, low self-esteem, and chronic indecision. He has never taken a medical leave of absence, yet his colleagues describe him as constantly dour, pessimistic, and socially detached. Three weeks ago, following an office restructuring, his mood plunged into severe anhedonia, tearfulness, and active suicide ideation—representing an acute Major Depressive Episode superimposed upon his chronic PDD.',
        questions: [
          'How does Manish\'s clinical history illustrate the diagnostic concept of "double depression"?',
          'Why is PDD frequently misidentified as an enduring personality trait rather than an affective disorder?'
        ]
      },
      myths: [
        { myth: 'Dysthymia is just a mild case of the blues and does not require treatment.', fact: 'Because of its multi-year duration, PDD frequently produces cumulative disability, functional impairment, and suicide risk equal to or exceeding episodic depression.', refId: 'who2022' },
        { myth: 'Persistent Depressive Disorder is a lifelong personality disorder that cannot change.', fact: 'PDD is a treatable mood disorder; specialized therapies such as CBASP combined with pharmacotherapy yield substantial remission rates.', refId: 'apa2022' },
        { myth: 'Dysthymia and Major Depression are entirely mutually exclusive conditions.', fact: 'Over 75% of individuals with PDD experience acute superimposed major depressive episodes, a clinical trajectory termed "double depression."', refId: 'kessler2005' }
      ],
      exam: {
        pdfQ: [5, 21],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Criteria of PDD / Dysthymia', points: ['DSM-5 consolidation of dysthymia and chronic major depression', 'Two-year duration rule in adults (one year in youth)', 'Requirement of ≥2 of 6 symptoms and the 2-month remission limit'] },
          { heading: 'The Concept of Double Depression', points: ['Acute major depressive episode superimposed on chronic dysthymia', 'Prognostic and diagnostic implications'] },
          { heading: 'Etiology and Therapeutic Interventions', points: ['Internalized cognitive self-schemas', 'CBASP (McCullough) interpersonal therapy', 'Pharmacological maintenance'] }
        ],
        modelAnswer: 'Persistent Depressive Disorder (PDD; DSM-5-TR 300.4 / ICD-10 F34.1), historically and clinically designated as Dysthymia, represents a chronic depressive consolidation characterized by persistent depressed mood for most of the day, for more days than not, for at least two years in adults (and at least one year in children and adolescents).\n\nTo satisfy DSM-5-TR diagnostic criteria, the chronic low mood must be accompanied by at least two of the following six cognitive and somatic symptoms: (1) poor appetite or overeating, (2) insomnia or hypersomnia, (3) low energy or chronic fatigue, (4) low self-esteem, (5) poor concentration or difficulty making decisions, and (6) feelings of hopelessness. Crucially, during the two-year period (one year in children), the individual must never have been free of depressive symptoms for more than two consecutive months. Furthermore, there must be no history of manic or hypomanic episodes.\n\nIn DSM-5, the historical diagnosis of Dysthymic Disorder was unified with Chronic Major Depressive Disorder into Persistent Depressive Disorder, reflecting their shared dimensional chronicity. A critical clinical manifestation is "Double Depression," wherein an individual with baseline PDD suffers a superimposed acute Major Depressive Episode. When treated, these patients often remit only to their chronic dysthymic baseline, requiring extended maintenance therapy.\n\nEtiologically, the protracted duration of PDD leads patients to incorporate depressive cognitions into their core identity, reinforcing learned helplessness and social avoidance. First-line intervention involves a combination of long-term antidepressant pharmacotherapy (SSRIs/SNRIs) and Cognitive Behavioural Analysis System of Psychotherapy (CBASP), designed by McCullough to address chronic interpersonal passivity and helplessness.',
        shortNote: 'Persistent Depressive Disorder (Dysthymia; ICD-10 F34.1) requires depressed mood for ≥2 years (≥1 year in youth) with ≥2 of 6 symptoms (appetite, sleep, fatigue, self-esteem, concentration, hopelessness) and no symptom-free gap >2 months. Often complicated by double depression, it is treated with CBASP and SSRIs.',
        mnemonics: ['CHRONIC: Chronic duration (≥2 yrs), Hopelessness, Reduced energy, Over/undereating, No 2-month gap, Insomnia, Concentration poor'],
        keyTerms: ['Persistent Depressive Disorder', 'Dysthymia', 'Double depression', 'Two-year duration', 'CBASP', 'Hopelessness', 'Chronic mood consolidation']
      },
      related: ['major-depression', 'bipolar', 'cyclothymia', 'sad', 'suicide'],
      refs: ['apa2022', 'who2022', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'cyclothymia',
      volume: 'III',
      order: 4,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'shuffle',
      name: 'Cyclothymic Disorder',
      preview: 'Chronic, fluctuating mood instability with subthreshold hypomanic and depressive periods.',
      definition: 'Cyclothymic Disorder is a chronic mood disorder characterized by persistent instability of mood lasting for at least two years (at least one year in children and adolescents), during which the individual experiences numerous periods of hypomanic symptoms that do not meet full criteria for a hypomanic episode and numerous periods of depressive symptoms that do not meet full criteria for a major depressive episode.',
      explanation: `### The Chronic Milder Spectrum of Bipolarity
Cyclothymic Disorder (DSM-5-TR 301.13 / ICD-10 F34.0 / ICD-11 6A62) represents the chronic, subthreshold variant of the bipolar spectrum. Unlike Bipolar I or Bipolar II disorders, where mood excursions cross into full syndromal mania or full syndromal major depression, individuals with cyclothymia live in a perpetual state of emotional flux, cycling between sub-clinical hypomanic highs and sub-clinical depressive troughs.

### Diagnostic Criteria (DSM-5-TR)
Diagnosis requires:
1. For at least two years (at least one year in children and adolescents), there have been numerous periods with hypomanic symptoms that do not meet criteria for a hypomanic episode, and numerous periods with depressive symptoms that do not meet criteria for a major depressive episode.
2. During the two-year period, the hypomanic and depressive periods have been present for at least half the time, and the individual has not been without the symptoms for more than two consecutive months at a time.
3. Criteria for a major depressive, manic, or hypomanic episode have NEVER been met.
4. The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
5. The disturbance is not attributable to physiological effects of a substance (e.g., substance abuse, medication) or a medical condition.

### Clinical Impact: The Illusion of "Moody Temperament"
Because the mood elevations and declines do not reach full diagnostic thresholds for hospitalization or total role collapse, cyclothymia is often dismissed by peers as merely an erratic, mercurial, or unpredictable personality style. However, the unpredictability creates severe interpersonal and professional attrition. During subthreshold hypomanic phases, individuals may take on unrealistic obligations, spend impulsively, or initiate romantic liaisons; during subsequent subthreshold depressive phases, they abandon projects, withdraw socially, and suffer from lethargy.

### Risk of Bipolar Conversion
Longitudinal clinical tracking reveals that approximately 15% to 50% of individuals diagnosed with cyclothymic disorder subsequently develop full Bipolar I or Bipolar II Disorder. This makes early identification and stabilization critical to forestall full bipolar progression.`,
      keyPoints: [
        'Requires ≥2 years of chronic mood instability in adults (≥1 year in children/adolescents)',
        'Features alternating subthreshold hypomanic and subthreshold depressive periods',
        'Has never met full criteria for a Manic, Hypomanic, or Major Depressive Episode',
        'Must be present for at least half the time, with no symptom-free interval exceeding 2 months',
        'Up to 15–50% of cyclothymic patients eventually convert to full Bipolar I or Bipolar II disorder',
        'Treatment: Mood stabilizers (lithium, lamotrigine) and psychoeducation on sleep-wake cycles'
      ],
      types: [
        'Cyclothymic Disorder (Primary Adult)',
        'Early-Onset Cyclothymia (Pediatric & Adolescent)',
        'Cyclothymia with Borderline Personality Comorbidity'
      ],
      symptoms: [
        'Unpredictable, frequent mood swings between mild euphoria and mild gloom',
        'Fluctuating energy levels, sleep requirements, and productivity',
        'Social enthusiasm alternating with irritable social withdrawal',
        'Interpersonal relationship friction caused by emotional unpredictability',
        'Chronic frustration over lack of emotional equilibrium'
      ],
      psychologists: [
        'Emil Kraepelin (1899) — Identified cyclothymic temperament as an affective pre-condition',
        'Hagop Akiskal — Extensively investigated the bipolar spectrum and cyclothymic temperament'
      ],
      examples: [
        'A graphic designer who alternates between four days of intense creative exuberance with 4 hours of sleep, followed by a week of low energy, brooding, and uncompleted artwork, persisting across three years',
        'A college student whose romantic partners complain of never knowing whether they will encounter an outgoing, vivacious partner or a sullen, irritable recluse'
      ],
      treatment: 'Low-dose mood stabilizers (lithium, lamotrigine, valproate). Antidepressant monotherapy must be avoided due to the risk of triggering rapid cycling or full manic episodes. CBT and psychoeducation stabilize daily routines.',
      summary: 'Cyclothymia is a chronic mood disorder lasting ≥2 years with alternating subthreshold hypomanic and depressive symptoms, present at least half the time. It carries a 15–50% risk of progression to full bipolar disorder and is managed with mood stabilizers.',
      mnemonic: 'WAVES — Without full mania/depression · Alternating highs/lows · Vast duration (≥2 yrs) · Every 2 months max gap · Subthreshold symptoms',
      codes: { icd10cm: ['F34.0'], icd11: ['6A62'], note: 'DSM-5-TR 301.13 Cyclothymic Disorder' },
      criteria: [
        'For at least 2 years (1 year in children/adolescents), numerous periods of hypomanic symptoms and depressive symptoms that do not meet full episode criteria',
        'Present for at least half the time during the 2-year duration',
        'Not without symptoms for more than 2 consecutive months at a time',
        'Criteria for major depressive, manic, or hypomanic episode have never been met',
        'Symptoms cause clinically significant distress or functional impairment'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Cyclothymic Disorder in the general population is estimated at approximately 0.4% to 1.0% (Kessler et al., 2005). In mood disorder clinics, up to 3–5% of outpatients meet criteria. Gender distribution is roughly equal in epidemiological samples.',
        stats: [
          { claim: 'Lifetime prevalence of Cyclothymic Disorder', value: '≈ 0.4–1.0%', refId: 'kessler2005', confidence: 'approx' },
          { claim: 'Risk of conversion to Bipolar I or Bipolar II Disorder', value: '15–50%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Strong genetic familial aggregation with Bipolar I and II disorders', 'Circadian rhythm vulnerability and sensitive neurotransmitter receptors'],
        psychological: ['Emotional dysregulation and identity confusion secondary to unstable moods'],
        sociocultural: ['Erratic work environments that encourage irregular schedules and disrupt circadian rhythms'],
        integrative: 'Genetic affective vulnerability interacts with irregular social zeitgebers to maintain emotional oscillation.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Subtle frontolimbic connectivity variations mediating sub-clinical affective volatility without gross structural brain lesions.'
      },
      differential: [
        { vs: 'Bipolar II Disorder', distinguishingFeature: 'Bipolar II requires at least one fully syndromal hypomanic episode (≥4 days) AND at least one fully syndromal major depressive episode (≥2 weeks); cyclothymia never meets full criteria for either.' },
        { vs: 'Borderline Personality Disorder (BPD)', distinguishingFeature: 'BPD mood shifts occur rapidly within hours in response to interpersonal abandonment cues, whereas cyclothymic mood phases endure for days or weeks without clear relational triggers.' }
      ],
      comorbidity: ['substance-use', 'gad', 'panic', 'adhd'],
      caseFile: {
        title: 'Case Vignette: The Rollercoaster Routine',
        composite: true,
        text: 'Tara, a 23-year-old freelance copywriter, seeks counseling at her sister\'s urging. Over the past three years, Tara has lived on an emotional seesaw. For several days at a time, she feels energetic, talks quickly, takes on five new projects, and sleeps four hours a night; then, without warning, she slips into a four-day slump of lethargy, insecurity, and social avoidance. She has never hallucinated, has never been hospitalized, and her slumps do not meet the full five criteria for major depression. Nevertheless, her erratic productivity has cost her three major client contracts.',
        questions: [
          'Why does Tara\'s condition meet criteria for Cyclothymic Disorder rather than Bipolar II Disorder?',
          'What is the clinical significance of monitoring Tara for potential conversion to full bipolar disorder?'
        ]
      },
      myths: [
        { myth: 'Cyclothymia is just a medical term for having a passionate, artistic personality.', fact: 'Cyclothymia is an affective disorder characterized by chronic instability that causes genuine occupational impairment and carries high risk of converting to bipolar disorder.', refId: 'apa2022' },
        { myth: 'Standard antidepressants are the best medication to lift cyclothymic depressions.', fact: 'Antidepressant monotherapy can worsen cyclothymia by destabilizing mood cycling or triggering full mania; mood stabilizers are preferred.', refId: 'who2022' },
        { myth: 'Cyclothymia always stays mild and never becomes severe.', fact: 'Between 15% and 50% of people with cyclothymic disorder eventually develop full Bipolar I or Bipolar II Disorder.', refId: 'kessler2005' }
      ],
      exam: {
        pdfQ: [2],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition of Cyclothymia', points: ['Subthreshold bipolar spectrum category', 'Two-year duration rule in adults (one year in children)', 'Alternating sub-syndromal hypomanic and depressive periods'] },
          { heading: 'Differential Diagnosis', points: ['Distinction from Bipolar I, Bipolar II, and BPD', 'The 2-month remission threshold', 'Absence of full manic or major depressive episodes'] },
          { heading: 'Course and Clinical Management', points: ['15–50% risk of conversion to Bipolar I/II', 'Mood stabilization pharmacology', 'Circadian and lifestyle management'] }
        ],
        modelAnswer: 'Cyclothymic Disorder (DSM-5-TR 301.13 / ICD-10 F34.0 / ICD-11 6A62) is a chronic affective disorder representing the sub-syndromal variant of the bipolar spectrum. It is characterized by persistent emotional instability enduring for at least two years in adults (at least one year in children and adolescents).\n\nAccording to DSM-5-TR criteria, diagnosis requires numerous periods of hypomanic symptoms that do not meet the full diagnostic criteria for a hypomanic episode, alongside numerous periods of depressive symptoms that do not meet the criteria for a major depressive episode. During the two-year period, these fluctuating mood phases must be present for at least half the time, and the individual must not experience a symptom-free remission lasting longer than two consecutive months. Crucially, criteria for a full Major Depressive Episode, Manic Episode, or Hypomanic Episode must never have been met.\n\nDifferential diagnosis requires distinguishing cyclothymia from Bipolar II Disorder (which requires full hypomanic and full major depressive episodes) and Borderline Personality Disorder (where emotional lability shifts within hours in reaction to interpersonal rejection). Etiologically, cyclothymia demonstrates strong familial genetic co-aggregation with Bipolar I and II. Longitudinal studies reveal that approximately 15% to 50% of individuals with cyclothymia eventually convert to Bipolar I or Bipolar II disorder.\n\nTreatment prioritizes low-dose mood stabilizers such as lithium or lamotrigine alongside psychoeducation on circadian sleep-wake stability, while avoiding antidepressant monotherapy that risks triggering rapid cycling or manic switches.',
        shortNote: 'Cyclothymic Disorder is a chronic mood condition lasting ≥2 years with alternating subthreshold hypomanic and subthreshold depressive symptoms, present at least half the time without gaps >2 months. Up to 50% of patients convert to bipolar disorder; it is managed with mood stabilizers.',
        mnemonics: ['WAVES: Without full mania/depression, Alternating highs/lows, Vast duration (≥2 yrs), Every 2 months max gap, Subthreshold symptoms'],
        keyTerms: ['Cyclothymic Disorder', 'Subthreshold bipolar', 'Two-year duration', 'Bipolar conversion', 'Mood stabilizers', 'Circadian rhythm']
      },
      related: ['major-depression', 'bipolar', 'dysthymia', 'sad', 'suicide'],
      refs: ['apa2022', 'who2022', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'sad',
      volume: 'III',
      order: 5,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'sun',
      name: 'Seasonal Affective Disorder (SAD)',
      preview: 'Circadian phase shifts, pineal melatonin prolongation, and bright-light phototherapy.',
      definition: 'Seasonal Affective Disorder (SAD), officially designated in DSM-5-TR as Major Depressive Disorder with Seasonal Pattern (ICD-10 F33), is a recurrent mood disorder characterized by the predictable onset and remission of depressive episodes at specific times of the year, most commonly emerging in autumn/winter and fully remitting in spring.',
      explanation: `### Nosology: Seasonal Pattern Specifier
First systematically described by Norman E. Rosenthal and colleagues in 1984, Seasonal Affective Disorder is classified in DSM-5-TR not as an isolated disorder, but as a diagnostic specifier: "Major Depressive Disorder, Recurrent, With Seasonal Pattern" (ICD-10 F33 / ICD-11 6A70).

To meet DSM-5-TR criteria:
1. There must be a regular temporal relationship between the onset of major depressive episodes and a particular time of the year (e.g., regular appearance in autumn or winter).
2. Full remissions (or a switch from depression to mania/hypomania) also occur at a characteristic time of the year (e.g., spring).
3. In the past two years, two major depressive episodes have occurred that demonstrate the seasonal temporal relationship, with no nonseasonal episodes occurring during that two-year period.
4. Seasonal major depressive episodes substantially outnumber any nonseasonal depressive episodes over the individual's lifetime.
5. The seasonal episodes must not be due to obvious seasonal psychosocial stressors (e.g., seasonal winter unemployment).

### Atypical Neurovegetative Profile
While non-seasonal depression often features melancholic vegetative symptoms (insomnia, loss of appetite, weight loss), winter-pattern SAD is classically characterized by an atypical neurovegetative symptom profile:
- Hypersomnia (prolonged sleep duration, profound difficulty waking in the morning)
- Hyperphagia with specific carbohydrate craving (consuming starches and sweets)
- Significant seasonal weight gain
- Extreme fatigue, lethargy, and leaden paralysis in the limbs
- Psychomotor slowing and social withdrawal ("hibernation" response)

### Neurobiology: Melatonin, Serotonin, and the Hypothalamic SCN
The biological clock of the human brain resides in the Suprachiasmatic Nucleus (SCN), located in the anterior hypothalamus (not the cerebellum or brainstem). In winter-pattern SAD:
1. Photoperiod Shortening & Pineal Melatonin: Reduced ambient photoperiod (daylight duration) during autumn/winter leads to prolonged nocturnal secretion of melatonin by the pineal gland. Melatonin signals darkness and induces drowsiness; prolonged secretion into morning hours produces profound daytime somnolence and anergia.
2. Circadian Phase-Shift: Most patients with winter SAD exhibit a circadian phase-delay: their endogenous circadian pacemaker runs behind real solar time.
3. Serotonin Transporter Availability: Winter reduction in sunlight leads to increased serotonin transporter (SERT) density in the brain, accelerating serotonin reuptake and depleting synaptic serotonin levels in frontolimbic circuits.

### Evidence-Based Treatment: Bright Light Therapy
Bright Light Therapy (Phototherapy; Rosenthal et al., 1984) is the treatment of choice for SAD. Standard protocol requires morning exposure to a 10,000-lux broad-spectrum light box (with ultraviolet filtration) for 30–45 minutes daily immediately upon waking. This suppresses daytime melatonin production, phase-advances the suprachiasmatic circadian pacemaker, and elevates synaptic serotonin. Cognitive Behavioural Therapy tailored for SAD (CBT-SAD) and SSRIs (such as fluoxetine) provide complementary efficacy.`,
      keyPoints: [
        'Officially classified as Major Depressive Disorder With Seasonal Pattern in DSM-5-TR',
        'Requires at least 2 consecutive years of seasonal depressive episodes with no nonseasonal episodes',
        'Features atypical vegetative symptoms: hypersomnia, carbohydrate craving, weight gain, and leaden fatigue',
        'Neurobiology: SCN hypothalamic clock disruption, prolonged pineal melatonin secretion, and SERT upregulation',
        'The Suprachiasmatic Nucleus (SCN) is located in the hypothalamus, not the cerebellum',
        'First-line treatment: Morning Bright Light Therapy (10,000 lux for 30–45 min; Rosenthal et al., 1984)'
      ],
      types: [
        'Winter-Onset Seasonal Pattern (Classic SAD; Most Common)',
        'Summer-Onset Seasonal Pattern (Reverse SAD; Features Insomnia and Anorexia)',
        'Sub-syndromal SAD (Winter Blues)',
        'Bipolar Disorder with Seasonal Pattern'
      ],
      symptoms: [
        'Pervasive low mood and loss of interest beginning in autumn and resolving in spring',
        'Severe hypersomnia and inability to rise in the morning',
        'Intense craving for carbohydrate-rich and sugary foods',
        'Measurable seasonal weight gain and slowed metabolic pace',
        'Extreme daytime exhaustion and social withdrawal during winter months'
      ],
      psychologists: [
        'Norman E. Rosenthal (1984) — First delineated SAD and pioneered bright light phototherapy',
        'Alfred J. Lewy — Formulated the circadian phase-shift hypothesis of seasonal depression'
      ],
      examples: [
        'A resident of northern latitude who experiences profound lethargy, 12-hour sleep requirements, and bread cravings from November through March every year, fully recovering in April',
        'A corporate analyst who utilizes a 10,000-lux phototherapy lamp for 30 minutes every morning at 7:00 AM, rapidly achieving remission of winter lethargy'
      ],
      treatment: 'Morning Bright Light Therapy (10,000 lux for 30–45 minutes upon waking; Rosenthal et al., 1984), CBT tailored for seasonal depression (CBT-SAD), dawn simulation, and second-generation antidepressants (bupropion, SSRIs).',
      summary: 'SAD is major depression with a seasonal pattern, characterized by atypical vegetative symptoms (hypersomnia, carbohydrate craving). Driven by hypothalamic SCN circadian disruption and prolonged melatonin secretion, it responds decisively to 10,000-lux bright light therapy.',
      mnemonic: 'LIGHT — Lux (10,000 lux morning therapy) · Insomnia reversed (hypersomnia) · Gluttony for carbs · Hypothalamic SCN clock · Timing seasonal',
      codes: { icd10cm: ['F33.9'], icd11: ['6A70', '6A71'], note: 'DSM-5-TR MDD with Seasonal Pattern Specifier' },
      criteria: [
        'Regular temporal relationship between onset of major depressive episodes and a particular time of year',
        'Full remissions (or switch to mania/hypomania) also occur at a characteristic time of year',
        'In the past 2 years, two major depressive episodes demonstrate the seasonal relationship with no nonseasonal episodes',
        'Seasonal major depressive episodes substantially outnumber nonseasonal episodes over the lifetime',
        'Episodes are not explained by obvious seasonal psychosocial stressors (e.g., seasonal unemployment)'
      ],
      epidemiology: {
        text: 'Prevalence of SAD correlates strongly with latitude, ranging from approximately 1.4% in southern latitudes (e.g., Florida) to over 9.0% in far northern regions (e.g., Alaska). Women represent roughly 60–75% of diagnosed individuals (Rosenthal et al., 1984; Kessler et al., 2005).',
        stats: [
          { claim: 'Prevalence in far northern latitudes (>60° N)', value: '≈ 8–10%', refId: 'rosenthal1984', confidence: 'high' },
          { claim: 'Female-to-male ratio in seasonal affective disorder', value: '≈ 3:1', refId: 'rosenthal1984', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Delayed circadian phase shifting in the Suprachiasmatic Nucleus (SCN)', 'Prolonged pineal melatonin synthesis during extended winter dark periods', 'Increased serotonin transporter (SERT) density in winter'],
        psychological: ['Negative cognitive appraisals regarding winter weather and cold temperatures', 'Avoidant behavioural withdrawal and cessation of physical activity'],
        sociocultural: ['Indoor sedentary lifestyles in urban environments with minimal natural sunlight exposure'],
        integrative: 'Genetic circadian clock vulnerability interacts with reduced solar photoperiod to trigger neuroendocrine depressive cascades.'
      },
      neuro: {
        regions: ['temporal', 'frontal'],
        note: 'Hypothalamic suprachiasmatic nucleus (SCN) pacemaking alterations directly alter pineal melatonin synthesis and striatal serotonergic availability.'
      },
      differential: [
        { vs: 'Non-Seasonal Major Depressive Disorder', distinguishingFeature: 'Non-seasonal MDD exhibits no predictable annual calendar recurrence and predominantly features melancholic neurovegetative symptoms (insomnia, appetite loss) rather than hypersomnia and carbohydrate craving.' },
        { vs: 'Hypothyroidism', distinguishingFeature: 'Hypothyroidism produces fatigue, cold intolerance, and weight gain, but displays abnormal serum thyroid-stimulating hormone (TSH) levels and lacks spontaneous springtime remission.' }
      ],
      comorbidity: ['bipolar', 'major-depression', 'gad'],
      caseFile: {
        title: 'Case Vignette: The Winter Hibernation',
        composite: true,
        text: 'Elena, a 35-year-old architectural draftsperson living in a northern city, presented in December with severe fatigue. For four consecutive winters, Elena has experienced a drastic drop in mood starting in late October. She sleeps 11 hours nightly yet struggles to rise, craves pastries and pasta continuously, has gained 6 kg, and experiences complete anhedonia. In April, her energy returns without medication, and she becomes active and joyful. Physical exams and thyroid panels returned normal results. Initiating 30 minutes of 10,000-lux light therapy daily at 6:30 AM resolved her lethargy within ten days.',
        questions: [
          'How do Elena\'s symptoms illustrate the atypical neurovegetative profile of Seasonal Affective Disorder?',
          'What is the neurobiological mechanism by which morning bright light therapy achieves rapid symptom remission?'
        ]
      },
      myths: [
        { myth: 'SAD is simply everyday dislike of cold weather and rain.', fact: 'SAD is a severe, recurring major depressive disorder driven by neuroendocrine, circadian, and serotonin alterations that causes demonstrable functional disability.', refId: 'rosenthal1984' },
        { myth: 'Any ordinary indoor reading lamp can cure seasonal affective disorder.', fact: 'Standard domestic lighting provides only 200–500 lux; therapeutic phototherapy requires specialized medical light boxes delivering 10,000 lux with UV filtration.', refId: 'rosenthal1984' },
        { myth: 'The biological clock controlling SAD is located in the brainstem.', fact: 'The master circadian pacemaker is the Suprachiasmatic Nucleus (SCN), located specifically in the anterior hypothalamus.', refId: 'azevedo2009' }
      ],
      exam: {
        pdfQ: [6, 10],
        marks: 15,
        structure: [
          { heading: 'Nosology and Diagnostic Criteria', points: ['Major Depressive Disorder with Seasonal Pattern specifier in DSM-5-TR', 'Two-year recurrence criteria without non-seasonal episodes', 'Atypical neurovegetative profile (hypersomnia, carbohydrate craving, weight gain)'] },
          { heading: 'Neurobiological Mechanisms', points: ['Suprachiasmatic nucleus (SCN) in the hypothalamus', 'Prolonged pineal melatonin secretion during winter photoperiods', 'Serotonin transporter (SERT) fluctuations'] },
          { heading: 'Bright Light Therapy & Interventions', points: ['Rosenthal et al. (1984) protocol: 10,000 lux morning light exposure', 'Mechanism of melatonin suppression and circadian phase-advance', 'CBT-SAD and pharmacotherapy'] }
        ],
        modelAnswer: 'Seasonal Affective Disorder (SAD), officially categorized in the DSM-5-TR as Major Depressive Disorder With Seasonal Pattern (ICD-10 F33), is a recurrent affective disorder characterized by the predictable calendar-linked onset and remission of depressive episodes.\n\nTo satisfy DSM-5-TR diagnostic criteria, an individual must demonstrate: (1) a consistent temporal relationship between the onset of major depressive episodes and a specific time of year (predominantly autumn or winter); (2) full remissions (or hypomanic/manic switches) at a characteristic time of year (typically spring); (3) at least two major depressive episodes demonstrating this seasonal pattern in the previous two years without any non-seasonal episodes; and (4) lifetime seasonal episodes substantially outnumbering non-seasonal episodes.\n\nClinically, winter-pattern SAD is distinguished by an atypical neurovegetative symptom profile. Rather than the insomnia and anorexia typical of melancholic depression, SAD patients experience hypersomnia (prolonged sleep with severe morning awakening difficulty), hyperphagia with pronounced carbohydrate craving, significant weight gain, and leaden physical lethargy.\n\nNeurobiologically, the disorder is driven by photoperiod alterations acting on the master circadian pacemaker: the Suprachiasmatic Nucleus (SCN), located in the anterior hypothalamus. Shortened winter daylengths prolong the nocturnal synthesis of melatonin by the pineal gland, producing daytime somnolence and circadian phase delays. Concurrently, winter sunlight reduction upregulates serotonin transporter (SERT) density, reducing synaptic serotonin availability.\n\nThe empirical treatment of choice, pioneered by Norman Rosenthal and colleagues in 1984, is Bright Light Therapy. Patients sit before a 10,000-lux broad-spectrum light box (with UV filters) for 30–45 minutes each morning upon waking. Morning phototherapy suppresses pineal melatonin secretion, phase-advances the circadian pacemaker, and enhances central serotonergic tone.',
        shortNote: 'Seasonal Affective Disorder (MDD with Seasonal Pattern) requires ≥2 consecutive years of seasonal depressive episodes. Characterized by atypical symptoms (hypersomnia, carb craving, weight gain), it is driven by hypothalamic SCN circadian disruption and pineal melatonin prolongation, treated with 10,000-lux morning bright light therapy (Rosenthal, 1984).',
        mnemonics: ['LIGHT: Lux (10,000 lux), Insomnia reversed (hypersomnia), Gluttony for carbs, Hypothalamic SCN, Timing seasonal'],
        keyTerms: ['Seasonal Affective Disorder', 'Suprachiasmatic Nucleus (SCN)', 'Hypothalamus', 'Melatonin', 'Bright Light Therapy', '10,000 lux', 'Norman Rosenthal', 'Atypical vegetative symptoms']
      },
      related: ['major-depression', 'bipolar', 'dysthymia', 'cyclothymia', 'suicide'],
      refs: ['apa2022', 'who2022', 'rosenthal1984', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'suicide',
      volume: 'III',
      order: 6,
      template: 'disorder',
      category: 'Mood Disorders',
      icon: 'life-buoy',
      name: 'Suicidal Behaviour: Etiology, Risk Assessment & Crisis Intervention',
      preview: 'Multifactorial suicidology, the Interpersonal Theory, risk assessment, and evidence-based prevention.',
      definition: 'Suicidal behaviour encompasses a spectrum from suicidal ideation (thinking about or planning suicide) to suicide attempts and fatal self-harm. In clinical science, suicide is conceptualized not as a solitary psychiatric disorder, but as a complex, multifactorial outcome of severe psychological agony, thwarted belongingness, and perceived burdensomeness.',
      explanation: `### Clinical Conceptualization and Language
In contemporary psychological and medical practice, suicide is approached with scientific rigor and empathetic precision. Ethical guidelines mandate the use of objective, non-stigmatizing terminology: clinicians state that an individual "died by suicide" or "attempted suicide," strictly avoiding moralistic, criminalizing phrases such as "committed suicide." In DSM-5-TR, Suicidal Behaviour Disorder and Nonsuicidal Self-Injury are catalogued under "Conditions for Further Study" to facilitate systematic epidemiological tracking.

### Theoretical Formulations of Suicidal Behaviour
1. Thomas Joiner\'s (2005) Interpersonal Psychological Theory of Suicide posits that fatal suicidal behaviour requires both the DESIRE for suicide and the ACQUIRED CAPABILITY for suicide:
   - Thwarted Belongingness: A devastating sense of social isolation, alienation, and lack of meaningful connection ("I am completely alone").
   - Perceived Burdensomeness: The fatal conviction that one\'s existence is a liability to loved ones and society ("My family would be better off without me").
   - Acquired Capability for Suicide: Because human beings possess an innate evolutionary survival instinct and fear of pain, fatal self-harm requires habituation to physical pain and fear through repeated exposure to painful, provocative events (self-injury, trauma, severe illness, or substance abuse).
2. Émile Durkheim\'s (1897) Classical Sociological Taxonomy identified four societal forms of suicide: Egoistic (resulting from extreme social alienation), Altruistic (excessive social integration where the individual sacrifices self for a collective cause), Anomic (breakdown of societal norms and rapid socioeconomic transitions), and Fatalistic (overwhelming oppressive regulation).

### The Gender Paradox in Suicidal Behaviour
Across numerous nations, epidemiological studies document the "gender paradox" of suicidal behaviour: women attempt suicide roughly 2–3 times more frequently than men, whereas men die by suicide at rates approximately 3–4 times higher than women in many high-income countries. This discrepancy is largely attributed to men utilizing methods of significantly higher physical lethality (firearms, hanging), greater intent, and lower rates of healthcare seeking. Crucially, the gender gap varies significantly across cultures; in India and parts of East Asia, the male-to-female ratio of completed suicide is substantially narrower due to cultural and socioeconomic factors (Gururaj et al., 2016).

### Warning Signs and Clinical Risk Assessment
Warning signs are summarized by the clinical mnemonic "IS PATH WARM":
- Ideation (expressed thoughts or plans)
- Substance abuse (escalating drug/alcohol intake)
- Purposelessness (lack of reason for living)
- Anxiety / Agitation (inability to sleep or rest)
- Trapped (feeling no way out)
- Hopelessness (the single strongest statistical predictor)
- Withdrawal (alienation from friends and family)
- Anger (uncontrolled rage or revenge-seeking)
- Recklessness (engaging in risky acts without care)
- Mood changes (dramatic emotional shifts, or sudden paradoxical peace after giving away possessions)

### Evidence-Based Prevention and Crisis Intervention
1. Means Restriction: Restricting access to lethal means (locking up toxic agrochemicals, installing bridge barriers, firearm safety legislation) is empirically the most effective public health suicide prevention strategy.
2. Safety Planning Intervention (Stanley & Brown): Developing a personalized, stepwise safety plan identifying personal warning signs, internal coping strategies, social contacts, and professional emergency contacts.
3. Psychological Therapies: Dialectical Behaviour Therapy (DBT; Linehan, 1993), Cognitive Therapy for Suicide Prevention (CT-SP; Beck), and Collaborative Assessment and Management of Suicidality (CAMS).`,
      keyPoints: [
        'Ethical terminology: always state "died by suicide" or "attempted suicide"; never "committed"',
        'Joiner\'s Interpersonal Theory: suicide requires Thwarted Belongingness, Perceived Burdensomeness, and Acquired Capability',
        'Gender paradox: women attempt more frequently, while men die by suicide more often in many countries due to high-lethality means',
        'In India, the male-to-female ratio is narrower than in Western nations (NMHS; Gururaj et al., 2016)',
        'Hopelessness (Beck) is the single most potent cognitive predictor of suicidal intent',
        'Means restriction (e.g., agrochemicals, barriers) is the most effective population-level public health intervention'
      ],
      types: [
        'Passive Suicidal Ideation (Wish to not wake up; no active plan)',
        'Active Suicidal Ideation with Intent and Plan',
        'Aborted or Interrupted Suicide Attempt',
        'Suicide Attempt (Non-fatal with intent to die)',
        'Nonsuicidal Self-Injury (NSSI: deliberate tissue destruction without suicidal intent)'
      ],
      symptoms: [
        'Persistent explicit or implicit verbal statements regarding suicide',
        'Giving away cherished possessions and finalizing legal wills abruptly',
        'Profound, paralyzing cognitive hopelessness and psychic agony (psychache)',
        'Sudden, deceptive calm or euphoria following severe depression (reflecting decision to die)',
        'Severe insomnia, agitation, and abrupt social withdrawal'
      ],
      psychologists: [
        'Thomas Joiner (2005) — Formulated the Interpersonal-Psychological Theory of Suicide',
        'Émile Durkheim (1897) — Pioneered sociological classifications of suicide',
        'Aaron T. Beck (1979) — Demonstrated hopelessness as the primary cognitive risk predictor',
        'Marsha M. Linehan (1993) — Developed Dialectical Behaviour Therapy (DBT) to reduce chronic suicidality'
      ],
      examples: [
        'A student failing university exams who expresses feeling that their parents would be happier if they were dead, isolates completely, and searches for lethal methods online',
        'An individual with severe depression whose agonizing agitation suddenly shifts to calm after drafting a final goodbye note and giving away beloved books'
      ],
      treatment: 'Immediate crisis stabilization and safety planning (Stanley-Brown Safety Plan). Evidence-based psychotherapies include Dialectical Behaviour Therapy (DBT; Linehan, 1993) and Cognitive Therapy for Suicide Prevention (Beck). Means restriction and crisis helplines (Tele-MANAS, 988, KIRAN) provide vital community support.',
      summary: 'Suicidal behaviour is a complex multifactorial crisis. Joiner\'s Interpersonal Theory highlights thwarted belongingness, perceived burdensomeness, and acquired capability. Comprehensive prevention requires means restriction, Stanley-Brown safety planning, and DBT.',
      mnemonic: 'IS PATH WARM — Ideation · Substance abuse · Purposelessness · Anxiety · Trapped · Hopelessness · Withdrawal · Anger · Recklessness · Mood changes',
      codes: { icd10cm: ['R45.851'], icd11: ['MB24.1'], note: 'DSM-5-TR Suicidal Behaviour Disorder (Condition for Further Study)' },
      criteria: [
        'Within the last 24 months, the individual has made a suicide attempt (self-initiated sequence of behaviours with intent to die)',
        'The act does not meet criteria for nonsuicidal self-injury (tissue damage without suicidal intent)',
        'The diagnosis is not applied to suicidal ideation or preparatory acts alone',
        'The act was not initiated during state of delirium or acute confusion',
        'The act was not undertaken solely for political or religious objectives'
      ],
      epidemiology: {
        text: 'The World Health Organization (WHO, 2022) estimates that over 700,000 individuals die by suicide annually worldwide. According to the National Mental Health Survey of India (Gururaj et al., 2016), suicide is a leading cause of mortality among youth aged 15–29, with high vulnerability in rural farming communities linked to pesticide availability.',
        stats: [
          { claim: 'Global annual mortality from suicide', value: '> 700,000 individuals', refId: 'who2022', confidence: 'high' },
          { claim: 'High-income male-to-female completed suicide ratio', value: '≈ 3–4:1', refId: 'who2022', confidence: 'high' },
          { claim: 'Lifetime prevalence of suicidal ideation in Indian adult population', value: '5.1%', refId: 'gururaj2016', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Low central serotonergic metabolites (5-HIAA) in cerebrospinal fluid', 'Hyperactive hypothalamic-pituitary-adrenal (HPA) axis stress response', 'Family genetic history of completed suicide'],
        psychological: ['Pervasive cognitive hopelessness (Beck)', 'Thwarted belongingness and perceived burdensomeness (Joiner, 2005)', 'High psychological pain ("psychache"; Shneidman) and cognitive rigidity'],
        sociocultural: ['Stigma preventing help-seeking', 'Economic precarity, agricultural debt, and easy availability of pesticides', 'Discrimination and isolation among marginalized identities'],
        integrative: 'Neurobiological distress reactivity combined with cognitive hopelessness and acquired capability culminates in lethal self-harm.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Blunted serotonergic neurotransmission in the ventromedial prefrontal cortex (vmPFC) is associated with severe behavioral disinhibition and lethal impulsivity.'
      },
      differential: [
        { vs: 'Nonsuicidal Self-Injury (NSSI)', distinguishingFeature: 'NSSI involves deliberate, direct destruction of body tissue (e.g., cutting, burning) performed without any intent to die, usually aimed at regulating overwhelming negative emotions or self-punishment; suicidal behaviour carries explicit intent to end life.' },
        { vs: 'Malingering or Instrumental Parasuicide', distinguishingFeature: 'In authentic suicidal crises, the individual experiences severe internal psychache and genuine conviction that death is the only solution, whereas purely manipulative threats occur to influence external interpersonal negotiations without subjective death intent.' }
      ],
      comorbidity: ['major-depression', 'bipolar', 'substance-use', 'borderline', 'ptsd'],
      caseFile: {
        title: 'Case Vignette: The Safety Plan Intervention',
        composite: true,
        text: 'Karan, a 21-year-old university student, was brought to the crisis intervention clinic by his hostel roommate. Following academic failure in three courses, Karan had isolated himself in his dorm room for two weeks, not bathing and consuming alcohol heavily. His roommate found a detailed handwritten note on his desk titled "Farewell," alongside a stash of paracetamol tablets. In clinical interview, Karan admitted feeling that he was an unbearable financial and emotional burden to his hard-working parents (perceived burdensomeness) and felt completely disconnected from his peer group (thwarted belongingness).',
        questions: [
          'Apply Thomas Joiner\'s Interpersonal Theory to analyze Karan\'s suicidal crisis.',
          'How does the Stanley-Brown Safety Planning intervention provide a structured, non-punitive path toward crisis stabilization?'
        ]
      },
      myths: [
        { myth: 'Asking a depressed person directly about suicide will plant the idea in their head.', fact: 'Extensive empirical research proves that asking directly and compassionately about suicide reduces anxiety, provides relief, and opens the door to life-saving intervention.', refId: 'joiner2005' },
        { myth: 'People who talk about suicide are just seeking attention and will not actually do it.', fact: 'Most individuals who die by suicide communicate warning signs or explicit statements beforehand; every threat must be taken seriously.', refId: 'who2022' },
        { myth: 'Suicide cannot be prevented; if someone decides to die, nothing will stop them.', fact: 'Suicidal crises are typically acute and time-limited; lethal means restriction and crisis intervention effectively prevent fatalities and enable long-term recovery.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [5, 16],
        marks: 15,
        structure: [
          { heading: 'Conceptualization and Societal Dimensions', points: ['Non-stigmatizing terminology ("died by suicide")', 'Durkheim\'s sociological taxonomy (Egoistic, Altruistic, Anomic, Fatalistic)', 'The Gender Paradox: attempts vs completion and cultural differences (Western vs India)'] },
          { heading: 'Joiner\'s Interpersonal Psychological Theory', points: ['Thwarted Belongingness', 'Perceived Burdensomeness', 'Acquired Capability for Suicide through habituation to pain'] },
          { heading: 'Risk Assessment & Prevention Strategies', points: ['Warning signs (IS PATH WARM) and hopelessness (Beck)', 'Means restriction as the gold-standard public health measure', 'Stanley-Brown Safety Planning, DBT, and crisis helplines (Tele-MANAS)'] }
        ],
        modelAnswer: 'Suicidal behaviour represents one of the most critical public health emergencies globally, claiming over 700,000 lives annually (WHO, 2022). Contemporary clinical suicidology approaches the phenomenon through a multifactorial biopsychosocial framework, utilizing objective, person-first language ("died by suicide" rather than moralistic terms like "committed suicide").\n\nSociologically, Émile Durkheim (1897) identified four types of suicide based on social integration and regulation: Egoistic (extreme alienation), Altruistic (excessive integration/self-sacrifice), Anomic (breakdown of social rules), and Fatalistic (extreme oppression). Epidemiologically, the "gender paradox" shows that women attempt suicide more frequently across many countries, whereas men die by suicide 3–4 times more often in high-income nations due to more lethal methods; however, in India and East Asia, the gender gap is significantly narrower (Gururaj et al., 2016).\n\nPsychologically, Thomas Joiner\'s (2005) Interpersonal-Psychological Theory of Suicide posits that suicidal desire emerges from the convergence of two cognitive-affective states: (1) Thwarted Belongingness ("I am disconnected and alone") and (2) Perceived Burdensomeness ("I am a liability to those I love"). However, desire alone does not result in death because humans possess an innate survival instinct. A fatal attempt requires the Acquired Capability for Suicide—fearlessness of death and elevated pain tolerance acquired through habituation to painful or traumatic experiences (self-harm, combat, abuse).\n\nRisk assessment involves detecting warning signs (IS PATH WARM: Ideation, Substance abuse, Purposelessness, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood changes), with cognitive hopelessness (Beck) being the strongest statistical predictor. Evidence-based interventions include population-level Means Restriction (restricting access to pesticides, bridge barriers, firearm controls), the Stanley-Brown Safety Planning Intervention, and Dialectical Behaviour Therapy (DBT; Linehan), supported by crisis helplines such as Tele-MANAS (14416) in India.',
        shortNote: 'Suicide is a complex multifactorial crisis. Joiner\'s Interpersonal Theory explains suicide through Thwarted Belongingness, Perceived Burdensomeness, and Acquired Capability. Prevention utilizes means restriction, Stanley-Brown safety planning, and DBT, supported by crisis helplines.',
        mnemonics: ['IS PATH WARM: Ideation, Substance abuse, Purposelessness, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood changes'],
        keyTerms: ['Suicide prevention', 'Thomas Joiner', 'Interpersonal Theory', 'Thwarted Belongingness', 'Perceived Burdensomeness', 'Acquired Capability', 'Gender paradox', 'Means restriction', 'Safety Planning', 'Tele-MANAS']
      },
      related: ['major-depression', 'bipolar', 'dysthymia', 'sad'],
      refs: ['apa2022', 'who2022', 'joiner2005', 'durkheim1897', 'beck1979', 'linehan1993', 'gururaj2016'],
      contentNote: 'Discusses suicide, self-harm, and crisis intervention. If you or someone you know is in distress, free, confidential 24/7 support is available: Tele-MANAS (India) 14416 / 1-800-891-4416; Suicide & Crisis Lifeline (US) 988; Samaritans (UK) 116 123.',
      lastVerified: '2026-10'
    }
  ];

  VOLUME_III.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
