/**
 * PsychStudy — The Clinical Atlas
 * Volume I: Foundations of Clinical Psychology
 * Chapters:
 *   1.1 psych-disorders (What Are Psychological Disorders?)
 *   1.2 four-ds (Four Criteria of Abnormality - The 4 Ds)
 *   1.3 dsm (The DSM and Diagnostic Classification)
 *   1.4 models-of-abnormality (Models of Abnormality: Biological, Psychodynamic, Behavioural, Cognitive, Humanistic, Sociocultural)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_I = [
    {
      id: 'psych-disorders',
      volume: 'I',
      order: 1,
      template: 'foundations',
      category: 'Foundations',
      icon: 'hospital',
      name: 'What Are Psychological Disorders?',
      preview: 'Defining clinical psychopathology beyond simple statistical or cultural abnormality.',
      definition: 'A psychological disorder is a clinically significant disturbance in an individual\'s cognition, emotion regulation, or behaviour that reflects underlying biological, psychological, or developmental dysfunction. These syndromes produce persistent subjective distress or objective functional impairment in social, occupational, or other vital activities.',
      explanation: `### The Boundaries of Psychopathology
Psychological disorder cannot be equated with mere eccentric or statistically unusual behaviour. Many clinically severe conditions, such as major depressive episodes and generalised anxiety, exhibit high lifetime prevalence rates, whereas socially unconventional behaviours, such as extreme sports or counter-cultural lifestyle choices, do not constitute psychopathology in the absence of internal dysfunction and distress.

### Diagnostic Criteria and Clinical Significance
Modern diagnostic nosologies, specifically the DSM-5-TR (American Psychiatric Association, 2022) and the ICD-11 (World Health Organization, 2022), establish that a syndrome must involve recognizable clusters of signs and symptoms. A key requirement is clinical significance: the psychological symptoms must interfere with an individual's autonomy, occupational capacity, inter-personal stability, or physiological health.

### Cultural Relativism and Normative Standards
No single universal definition of abnormal psychology exists in absolute isolation from sociocultural context. What one community views as pathological may be understood elsewhere as an adaptive reaction or spiritual encounter. Consequently, diagnostic frameworks require that culturally sanctioned reactions to normative stressors—such as standard bereavement practices—are explicitly excluded from diagnostic consideration.

### Modern Biopsychosocial Integration
Contemporary clinical science rejects mind-body Cartesian dualism. Psychological disorders are conceptualized through the biopsychosocial framework: an intricate interplay of genetic vulnerabilities, neurochemical functioning, early childhood attachment patterns, cognitive processing schemas, and systemic socioeconomic stressors.`,
      keyPoints: [
        'A psychological disorder reflects underlying biological, psychological, or developmental dysfunction',
        'High prevalence does not negate clinical severity; common disorders remain clinically profound',
        'Symptoms must cause demonstrable distress or disability across occupational and social domains',
        'Culturally normative reactions and expected responses to loss do not constitute mental disorders',
        'Modern classification is guided by the DSM-5-TR (2022) and WHO ICD-11 (2022)',
        'Etiology is transdiagnostic and biopsychosocial rather than strictly monocausal'
      ],
      types: [
        'Neurodevelopmental Disorders',
        'Schizophrenia Spectrum & Other Psychotic Disorders',
        'Bipolar and Related Disorders',
        'Depressive Disorders',
        'Anxiety Disorders',
        'Obsessive-Compulsive and Related Disorders',
        'Trauma- and Stressor-Related Disorders',
        'Feeding and Eating Disorders',
        'Personality Disorders'
      ],
      symptoms: [
        'Persistent subjective emotional distress',
        'Severe functional impairment across daily roles',
        'Disorganized thought processes or executive dysfunction',
        'Marked interpersonal alienation or social withdrawal',
        'Maladaptive behavioral cycles causing physical harm or danger'
      ],
      psychologists: [
        'Emil Kraepelin (1883) — Laid the foundation for contemporary psychiatric disease classification',
        'Arthur Kleinman (1988) — Illustrated how cultural idioms shape subjective experiences of illness'
      ],
      examples: [
        'A corporate analyst experiencing persistent insomnia, psychomotor agitation, and inability to work following complicated bereavement',
        'A student experiencing recurring panic attacks leading to severe agoraphobic housebound avoidance'
      ],
      treatment: 'Interventions integrate evidence-based psychotherapies (such as CBT and psychodynamic modalities), pharmacotherapy when indicated, and systemic psychosocial rehabilitation.',
      summary: 'Psychological disorders represent recognizable clusters of cognitive, affective, and behavioral symptoms reflecting underlying internal dysfunction. They are classified systematically using DSM-5-TR and ICD-11 criteria.',
      mnemonic: 'CID — Cognition · Internal Dysfunction · Distress or Disability',
      codes: { icd10cm: [], icd11: [], note: 'Foundational concept spanning all mental disorder codes' },
      criteria: [
        'Clinically significant disturbance in cognition, emotion regulation, or behaviour',
        'Reflects dysfunction in psychological, biological, or developmental processes underlying mental functioning',
        'Associated with significant distress or disability in social, occupational, or other important activities',
        'Not an expectable or culturally approved response to a common stressor or loss',
        'Not primarily socially deviant behaviour or political/religious conflicts unless resulting from individual dysfunction'
      ],
      epidemiology: {
        text: 'The National Mental Health Survey of India (Gururaj et al., 2016) reported a lifetime prevalence of mental disorders of approximately 13.7% in the adult population, with substantial treatment gaps across rural and urban sectors.',
        stats: [
          { claim: 'Lifetime prevalence of any mental disorder in India', value: '13.7%', refId: 'gururaj2016', confidence: 'high' },
          { claim: 'Global lifetime prevalence of common mental disorders across nations', value: '≈ 25–30%', refId: 'kessler2005', confidence: 'approx' }
        ]
      },
      etiology: {
        biological: ['Genetic predispositions', 'Neurotransmitter receptor sensitivities', 'Structural brain connectivity'],
        psychological: ['Maladaptive cognitive schemas', 'Learned helplessness', 'Attachment disruption'],
        sociocultural: ['Poverty and marginalization', 'Discrimination and social exclusion', 'Chronic environmental stress'],
        integrative: 'The diathesis-stress model posits that inherited constitutional vulnerabilities interact with life stress to precipitate disorder.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Functional neuroimaging reveals that disruptions in frontolimbic connectivity are correlated with emotional dysregulation across multiple diagnostic categories.'
      },
      differential: [
        { vs: 'Normal Life Distress', distinguishingFeature: 'Normal grief or situational stress lacks underlying process dysfunction and typically attenuates with time and support without pervasive role collapse.' },
        { vs: 'Eccentricity or Subcultural Deviance', distinguishingFeature: 'Unconventional or counter-normative lifestyle choices do not produce internal psychological suffering or involuntary functional disability.' }
      ],
      comorbidity: ['major-depression', 'gad', 'substance-use'],
      caseFile: {
        title: 'Case Vignette: Re-evaluating Functional Breakdown',
        composite: true,
        text: 'Marcus, a 34-year-old architectural draftsperson, presented after six months of deteriorating performance at work. Following the unexpected collapse of a long-term business partnership, he developed pervasive self-reproach, cognitive slowing, and debilitating morning dread. While Marcus initially attributed his state to expected grief, he soon found himself unable to open client portfolios, answer phone calls, or maintain nutritional hygiene, losing 8 kg and isolating completely from his support network.',
        questions: [
          'How does Marcus\'s clinical presentation satisfy the criteria for a disorder versus a culturally normative grief reaction?',
          'Which specific signs indicate underlying cognitive and occupational dysfunction rather than mere deviance from productivity expectations?'
        ]
      },
      myths: [
        { myth: 'Psychological disorders are rare and affect only a fragile fraction of society.', fact: 'Surveys indicate that more than one in four individuals will meet diagnostic criteria for a mental disorder during their lifetime.', refId: 'kessler2005' },
        { myth: 'Abnormal behaviour is simply anything that violates local societal expectations.', fact: 'Societal deviance alone is not a disorder; clinical criteria require personal distress or substantial functional disability resulting from internal dysfunction.', refId: 'apa2022' },
        { myth: 'A psychological diagnosis implies an unalterable biological defect.', fact: 'Most mental health conditions respond robustly to evidence-based psychotherapy, psychosocial skill-building, and medication.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [15],
        marks: 15,
        structure: [
          { heading: 'Definition of Psychological Disorder', points: ['DSM-5-TR definition of clinical disturbance', 'Exclusion of expectable social stressors and political deviance', 'Concept of internal psychological/biological dysfunction'] },
          { heading: 'Core Diagnostic Elements', points: ['Subjective distress versus objective dysfunction', 'The role of clinical significance thresholds', 'Biopsychosocial etiology'] },
          { heading: 'Cultural and Contextual Caveats', points: ['Normative cultural variation', 'Kleinman\'s explanatory models', 'Dangers of pathologizing non-conformity'] }
        ],
        modelAnswer: 'A psychological disorder is formally defined in the DSM-5-TR (American Psychiatric Association, 2022) as a clinically significant disturbance in an individual\'s cognition, emotion regulation, or behaviour that reflects a dysfunction in the psychological, biological, or developmental processes underlying mental functioning. These syndromes are typically associated with significant distress or disability in social, occupational, or other important activities.\n\nCrucially, diagnostic criteria require that an expectable or culturally approved response to a common stressor or loss, such as the death of a loved one, is not a mental disorder. Similarly, socially deviant behaviour (e.g., political, religious, or sexual non-conformity) and conflicts that are primarily between the individual and society do not constitute mental disorders unless the deviance or conflict results from an underlying dysfunction in the individual.\n\nHistorically, defining psychopathology required balancing subjective suffering against societal expectations. Wakefield\'s influential "harmful dysfunction" analysis posits that a disorder requires two components: a value term based on social norms (harm) and a scientific term based on evolutionary biology (dysfunction of an internal mechanism). Modern nosology relies on operationalized clinical criteria to ensure reliable communication across clinical settings while actively mitigating stigma through person-first terminology.',
        shortNote: 'A psychological disorder is a clinically significant disturbance in cognition, emotion regulation, or behaviour reflecting underlying biological, psychological, or developmental dysfunction (DSM-5-TR; APA, 2022). It requires demonstrable subjective distress or impairment in social and occupational functioning, excluding expectable cultural reactions to stressors.',
        mnemonics: ['CID: Cognition, Internal dysfunction, Distress/Disability'],
        keyTerms: ['Harmful dysfunction', 'Clinical significance', 'DSM-5-TR', 'Etiological heterogeneity', 'Diathesis-stress']
      },
      related: ['four-ds', 'dsm', 'models-of-abnormality'],
      refs: ['apa2022', 'who2022', 'gururaj2016', 'kessler2005', 'rosenhan1973'],
      lastVerified: '2026-10'
    },
    {
      id: 'four-ds',
      volume: 'I',
      order: 2,
      template: 'foundations',
      category: 'Foundations',
      icon: 'scale',
      name: 'Four Criteria of Abnormality (The 4 Ds)',
      preview: 'The classic clinical teaching heuristic: Distress, Dysfunction, Deviance, and Danger.',
      definition: 'The Four Ds—Distress, Dysfunction, Deviance, and Danger—form a widely utilized educational heuristic for evaluating whether thoughts, emotions, or behaviours warrant clinical concern. While not formal DSM criteria, they provide an intuitive framework for distinguishing clinical disorder from benign eccentricity.',
      explanation: `### The Educational Role of the Four Ds
The Four Ds serve as a widely taught clinical heuristic rather than formal diagnostic criteria in the DSM-5-TR or ICD-11. Clinicians use these four interconnected dimensions to systematically appraise whether unusual presentations cross the threshold into clinical pathology.

### Distress: Subjective Emotional Suffering
Distress captures the internal, subjective suffering of the individual. Conditions such as major depressive disorder, panic disorder, and generalized anxiety are marked by profound emotional agony, dread, and despair. However, distress alone is neither necessary nor sufficient: individuals in manic episodes or those with antisocial personality disorder may feel euphoric or unbothered, while intense grief after tragic bereavement is distressing yet psychologically normative.

### Dysfunction: Role Impairment and Disability
Dysfunction measures the extent to which symptoms impede an individual\'s capacity to carry out routine developmental, occupational, social, and academic roles. When an individual with severe obsessive-compulsive checking rituals takes four hours to leave the house and loses employment, dysfunction is objectively established. Wakefield terms this the breakdown of internal psychological mechanisms designed to facilitate daily living.

### Deviance: Statistical and Sociocultural Norm Violations
Deviance refers to behaviours, beliefs, or emotional expressions that deviate markedly from statistical averages or societal standards. Crucially, deviance must always be evaluated within its specific cultural framework. Innovative artists or political protestors deviate from norms without psychopathology. Conversely, culture-bound idioms of distress may appear bizarre to external observers but remain culturally coherent.

### Danger: Risk of Physical Harm
Danger is the least common but most urgent criterion, denoting behaviour that threatens physical injury or death to oneself or others. This includes acute suicidal intent, severe self-neglect in catatonic states, or violent paranoid delusions. When danger is identified, immediate crisis stabilization and ethical triage take precedence over elective psychotherapeutic explorations.`,
      keyPoints: [
        'The Four Ds are an educational teaching heuristic, not formal DSM-5-TR diagnostic criteria',
        'Distress evaluates subjective emotional pain, though some disorders lack insight or distress',
        'Dysfunction assesses objective breakdown in occupational, family, and social responsibilities',
        'Deviance requires careful contextual appraisal; harmless eccentricity is not psychopathology',
        'Danger is the least frequent criterion but mandates immediate emergency crisis triage',
        'Valid diagnosis requires synthesized clinical judgment rather than automated tallying'
      ],
      types: [
        'Distress — Subjective agony and internal pain',
        'Dysfunction — Behavioral disruption of life routines',
        'Deviance — Statistical rarity and social norm violation',
        'Danger — Physical hazard to self or community'
      ],
      symptoms: [
        'Inability to sustain occupational or scholastic responsibilities',
        'Unrelenting dysphoria, terror, or emotional numbness',
        'Socially disruptive or culturally incomprehensible actions',
        'Active or passive suicidal behavior and severe self-harm'
      ],
      psychologists: [
        'David L. Rosenhan (1973) — Challenged the reliability of psychiatric labelling in hospital environments',
        'Thomas Szasz (1960) — Challenged the conceptualization of mental illness as medical disease'
      ],
      examples: [
        'An individual missing work for three consecutive weeks due to severe depressive psychomotor retardation (Dysfunction)',
        'An individual performing compulsive handwashing until hands bleed to avert imagined contamination (Distress & Dysfunction)'
      ],
      treatment: 'Clinical intervention is tailored to the primary dimension: distress is alleviated through psychotherapy and pharmacotherapy; dysfunction through occupational therapy and behavioural activation; danger through crisis intervention and safety planning.',
      summary: 'The Four Ds (Distress, Dysfunction, Deviance, Danger) offer an educational heuristic for appraising abnormal behaviour. They emphasize that diagnosis requires evaluating subjective suffering, functional impairment, cultural context, and safety.',
      mnemonic: 'DDDD — Distress · Dysfunction · Deviance · Danger',
      codes: { icd10cm: [], icd11: [], note: 'Pedagogical heuristic across clinical diagnostic manuals' },
      criteria: [
        'Subjective emotional suffering or psychological pain (Distress)',
        'Objective interference with occupational, academic, or social functioning (Dysfunction)',
        'Marked deviation from cultural, social, or statistical norms (Deviance)',
        'Demonstrable risk of physical injury or fatality to self or others (Danger)'
      ],
      epidemiology: {
        text: 'The presence of dysfunction and distress is a mandatory prerequisite across DSM-5-TR disorders. The National Mental Health Survey of India (2016) highlighted that severe dysfunction affects nearly 1% of the population requiring intensive rehabilitation.',
        stats: [
          { claim: 'Adult population in India suffering from severe mental disorders with marked disability', value: '≈ 0.8–1.0%', refId: 'gururaj2016', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Neuroendocrine stress dysregulation', 'Genetic vulnerabilities'],
        psychological: ['Cognitive distortions', 'Maladaptive coping mechanisms'],
        sociocultural: ['Societal intolerance of diversity', 'Socioeconomic marginalization'],
        integrative: 'Appraising abnormality requires integrating subjective psychological reports with biological markers and sociocultural norms.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Neurobiological dysfunction in prefrontal inhibitory circuits often manifests clinically as impaired impulse control and functional disability.'
      },
      differential: [
        { vs: 'Harmless Eccentricity', distinguishingFeature: 'Eccentrics knowingly deviate from social norms but experience joy, vitality, and preserved self-care without dysfunction or involuntary distress.' },
        { vs: 'Moral Transgression or Crime', distinguishingFeature: 'Criminal acts violate legal norms (deviance/danger) but do not necessarily stem from an internal psychological disorder or cognitive breakdown.' }
      ],
      comorbidity: ['psych-disorders', 'gad', 'major-depression'],
      caseFile: {
        title: 'Case Vignette: The Recluse and the Artist',
        composite: true,
        text: 'Arthur, a 62-year-old retired clerk, lives alone and spends twelve hours daily constructing complex mechanical sculptures from discarded clocks. His kitchen is cluttered, but his hygiene is intact, his nutritional needs are met, and he expresses profound satisfaction and peace in his creative solitude. Contrast Arthur with Brian, a 28-year-old software engineer, who has locked himself in his bedroom for six months, sobbing uncontrollably, unable to log on to his remote workstation, and surviving on dry crackers while pleading for relief from unbearable despair.',
        questions: [
          'Apply the Four Ds to compare Arthur\'s eccentricity with Brian\'s clinical presentation.',
          'Why does Brian\'s case meet the threshold for clinical intervention whereas Arthur\'s does not?'
        ]
      },
      myths: [
        { myth: 'Any behaviour that breaks social convention is an indicator of mental illness.', fact: 'Deviance from social norms without personal distress or functional impairment represents diversity or eccentricity, not psychopathology.', refId: 'apa2022' },
        { myth: 'Mental health diagnoses are based on laboratory blood tests that measure the Four Ds.', fact: 'The Four Ds are clinical and observational heuristics; diagnostic nosologies rely on structured clinical interviews and behavioural criteria.', refId: 'who2022' },
        { myth: 'Individuals with psychological disorders are uniformly dangerous and violent.', fact: 'The danger criterion is the least common D; the vast majority of individuals with mental disorders are never violent, and are far more likely to be victims than perpetrators.', refId: 'gururaj2016' }
      ],
      exam: {
        pdfQ: [15],
        marks: 15,
        structure: [
          { heading: 'Introduction to the Four Ds', points: ['Clarify that the 4 Ds are an educational heuristic rather than official DSM-5-TR criteria', 'List Distress, Dysfunction, Deviance, Danger'] },
          { heading: 'Detailed Breakdown of Each D', points: ['Distress: subjective suffering and its clinical limits', 'Dysfunction: role disruption and Wakefield harmful dysfunction', 'Deviance: cultural relativity vs statistical rarity', 'Danger: risk to self or others and legal triage'] },
          { heading: 'Critical Synthesis and Caveats', points: ['Interdependence of criteria', 'Rosenhan\'s study and labelling hazards', 'Cultural competence in clinical appraisal'] }
        ],
        modelAnswer: 'The Four Ds—Distress, Dysfunction, Deviance, and Danger—constitute the classical pedagogical framework used to explore the concept of psychological abnormality. While modern psychiatric manuals such as the DSM-5-TR and ICD-11 define disorders via operationalized symptom criteria, the Four Ds offer a foundational conceptual architecture for clinical reasoning.\n\n1. Distress: Refers to subjective emotional or physical suffering. Most individuals who seek clinical help experience intense anxiety, sadness, insomnia, or agony. However, distress is not universally present; individuals with bipolar mania or antisocial personality disorder may experience no distress, while normative grief induces severe distress without psychopathology.\n\n2. Dysfunction: Refers to impaired daily functioning across occupational, social, academic, or self-care roles. In Wakefield\'s harmful dysfunction analysis, dysfunction represents the failure of an internal cognitive, emotional, or physiological mechanism to perform its natural function.\n\n3. Deviance: Involves thoughts, feelings, or actions that depart significantly from cultural norms or statistical averages. Deviance alone is never sufficient for diagnosis, as creative non-conformity and political dissent must not be medicalized. Clinicians must apply Kleinman\'s cultural formulation principles to distinguish pathology from cultural variation.\n\n4. Danger: Denotes potential physical harm to oneself (suicidality, severe self-harm, extreme self-neglect) or others (severe aggressive psychosis). Danger is the least frequent criterion but demands prompt triage and crisis intervention.\n\nIn conclusion, no single D defines abnormality in isolation. Clinical psychopathology is established through the synthesis of distress and dysfunction within a culturally sensitive diagnostic evaluation.',
        shortNote: 'The Four Ds—Distress, Dysfunction, Deviance, and Danger—are a clinical teaching heuristic. Distress assesses subjective pain, Dysfunction examines role breakdown, Deviance notes norm departure within cultural context, and Danger addresses safety. They highlight that clinical abnormality requires comprehensive context rather than rigid labelling.',
        mnemonics: ['DDDD: Distress, Dysfunction, Deviance, Danger'],
        keyTerms: ['Teaching heuristic', 'Subjective distress', 'Wakefield harmful dysfunction', 'Cultural relativism', 'Crisis triage']
      },
      related: ['psych-disorders', 'dsm', 'models-of-abnormality'],
      refs: ['apa2022', 'who2022', 'rosenhan1973', 'gururaj2016'],
      lastVerified: '2026-10'
    },
    {
      id: 'dsm',
      volume: 'I',
      order: 3,
      template: 'foundations',
      category: 'Foundations',
      icon: 'book',
      name: 'The DSM and Diagnostic Classification',
      preview: 'Evolution of psychiatric nosology from DSM-I to DSM-5-TR and ICD-11 harmonization.',
      definition: 'The Diagnostic and Statistical Manual of Mental Disorders (DSM), published by the American Psychiatric Association, is the predominant operational classification system in clinical psychology. Its current iteration, DSM-5-TR (March 2022), categorizes hundreds of diagnostic categories using descriptive, criterion-based algorithms.',
      explanation: `### Historical Evolution of the DSM
The DSM was first published in 1952 by the American Psychiatric Association (APA) to provide standard terminology for mental conditions. DSM-I and DSM-II were heavily influenced by psychodynamic theory and Adolf Meyer's psychobiological perspective, viewing disorders as "reactions" to environmental stressors and unconscious conflicts.

### The Paradigm Shift: DSM-III and Operational Criteria
The publication of DSM-III in 1980, spearheaded by Robert Spitzer, revolutionized modern clinical nosology. DSM-III abandoned unproven psychodynamic theories of etiology in favour of an atheoretical, descriptive approach based on explicit, operationalized inclusion and exclusion criteria. It introduced the famous multiaxial diagnostic system (Axes I through V) to capture clinical syndromes, personality disorders, medical conditions, psychosocial stressors, and global functional capacity.

### Modern Structural Changes: DSM-5 and DSM-5-TR
In May 2013, DSM-5 enacted major structural revisions. Most notably, the rigid multiaxial system was completely discontinued; Axis I, II, and III diagnoses were unified into a single clinical diagnostic stream, with WHO Disability Assessment Schedule (WHODAS 2.0) replacing the Global Assessment of Functioning (GAF) scale. The current edition, DSM-5-TR (Text Revision, released in March 2022), incorporated comprehensive revisions to text narratives, integrated prolonged grief disorder, and introduced specific diagnostic codes for suicidal behaviour and nonsuicidal self-injury.

### Person-First Language and Stigma Mitigation
Modern diagnostic manuals mandate person-first terminology (e.g., "an individual with schizophrenia" rather than "a schizophrenic"). This linguistic discipline emphasizes that a psychological diagnosis is an aspect of an individual's health status rather than their total ontological identity, reducing institutional and societal stigma.

### Historical Societal Revisions: The Declassification of Homosexuality
The DSM reflects ongoing advances in empirical science and social ethics. A pivotal milestone occurred in December 1973 when the APA Board of Trustees voted to remove homosexuality from the DSM, with the change appearing in the 1974 printing of DSM-II. The transitional diagnostic category of "ego-dystonic homosexuality" persisted until its complete elimination in DSM-III-R (1987).

### Global Harmonization with the WHO ICD-11
The World Health Organization\'s ICD-11 (officially entering into effect on 1 January 2022) serves as the legally binding global standard for international morbidity and mortality statistics. While the DSM provides detailed clinical guidance primarily in North America and academic training, modern DSM-5-TR criteria and codes are meticulously harmonized with ICD-10-CM and ICD-11 clinical classifications.`,
      keyPoints: [
        'Current authoritative edition is the DSM-5-TR (Text Revision, published March 2022)',
        'DSM-III (1980) introduced operationalized diagnostic criteria; multiaxial system was discontinued in DSM-5 (2013)',
        'DSM-5-TR classifies hundreds of diagnostic categories using descriptive, atheoretical criteria',
        'Person-first language (e.g., "person with bipolar disorder") is mandatory to minimize stigma',
        'APA trustees voted in December 1973 to declassify homosexuality; removal printed in 1974 DSM-II',
        'ICD-11 (in effect 1 January 2022) introduces dimensional models for personality disorders and stress'
      ],
      types: [
        'Descriptive Categorical Classification',
        'Dimensional Severity Assessments',
        'Cross-Cutting Symptom Measures',
        'Cultural Formulation Interview (CFI)'
      ],
      symptoms: [
        'Operationalized inclusion criteria (duration, symptom frequency)',
        'Mandatory clinical significance threshold (distress or impairment)',
        'Exclusionary rules ruling out substance use and medical conditions'
      ],
      psychologists: [
        'Robert Spitzer (1980) — Architect of DSM-III and the operational criteria revolution',
        'David L. Rosenhan (1973) — Landmark pseudo-patient study illustrating diagnostic reification'
      ],
      examples: [
        'A psychiatrist diagnosing Major Depressive Episode using the requisite threshold of ≥5 out of 9 symptoms sustained for ≥2 weeks',
        'Utilizing the Cultural Formulation Interview (CFI) to explore how a migrant patient conceptualizes distress'
      ],
      treatment: 'The DSM provides descriptive taxonomy rather than prescriptive treatment recipes. Accurate diagnosis guides evidence-based clinical practice guidelines and interdisciplinary communication.',
      summary: 'The DSM-5-TR (2022) provides standardized criteria for diagnosing psychological disorders. Evolving from psychoanalytic origins to modern descriptive nosology, it coordinates with ICD-11 while prioritizing person-first language and cultural formulation.',
      mnemonic: 'DOCS — Descriptive · Operationalized Criteria · Clinical Significance · Stigma Reduction',
      codes: { icd10cm: [], icd11: [], note: 'Taxonomic reference framework governing clinical diagnostic coding' },
      criteria: [
        'Explicit operational symptom criteria (minimum counts and durations)',
        'Clinically significant distress or impairment across key life roles',
        'Symptoms not attributable to direct physiological effects of a substance',
        'Symptoms not better explained by another distinct psychiatric disorder'
      ],
      epidemiology: {
        text: 'The DSM classification system is utilized across more than 80% of clinical psychology training programs globally. Epidemiological surveys applying DSM criteria indicate that nearly 50% of the population meets criteria for at least one disorder over their lifetime (Kessler et al., 2005).',
        stats: [
          { claim: 'Lifetime prevalence of any DSM-IV/5 disorder in US population', value: '46.4%', refId: 'kessler2005', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Polygenic liability across spectrum disorders'],
        psychological: ['Cognitive, behavioral, and developmental vulnerability factors'],
        sociocultural: ['Sociopolitical and cultural determinants of diagnostic thresholds'],
        integrative: 'The DSM adopts an intentionally atheoretical stance regarding etiology to foster consensus across diverse therapeutic orientations.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'The DSM-5-TR Research Domain Criteria (RDoC) initiative explores transdiagnostic neurobiological circuits bridging categorical diagnostic boundaries.'
      },
      differential: [
        { vs: 'ICD-11 Classification', distinguishingFeature: 'The WHO ICD-11 is a global multilingual public health standard with fully dimensional personality disorder ratings, whereas the DSM-5-TR is an APA clinical manual retaining categorical personality disorder clusters alongside an alternative dimensional model.' },
        { vs: 'Psychodynamic Diagnostic Manual (PDM-2)', distinguishingFeature: 'The PDM emphasizes depth-psychological character styles, internal mental functioning, and subjective therapeutic relationship dynamics rather than descriptive symptom checklists.' }
      ],
      comorbidity: ['psych-disorders', 'four-ds'],
      caseFile: {
        title: 'Case Vignette: Applying Operational Criteria',
        composite: true,
        text: 'Dr. Anita Roy evaluates a 22-year-old postgraduate scholar referred for chronic exhaustion and pervasive apathy. Rather than relying on an intuitive impression, Dr. Roy conducts a systematic clinical interview mapping against DSM-5-TR criteria for Major Depressive Disorder: confirming depressed mood daily, loss of interest in laboratory research, insomnia, fatigue, feelings of worthlessness, psychomotor retardation, and concentration impairment persisting for 6 weeks, while ruling out hypothyroidism via blood serum tests.',
        questions: [
          'Why are operational exclusion criteria (e.g., ruling out medical conditions) essential to psychiatric nosology?',
          'How does the removal of the multiaxial system in DSM-5 simplify modern clinical documentation?'
        ]
      },
      myths: [
        { myth: 'The DSM-5 is the current edition of the diagnostic manual.', fact: 'The DSM-5-TR (Text Revision), published in March 2022, is the current authoritative edition, featuring updated texts and new codes.', refId: 'apa2022' },
        { myth: 'The DSM still utilizes the five-axis multiaxial diagnostic framework.', fact: 'The multiaxial system was completely discontinued in DSM-5 (2013) to bring psychiatric classification into alignment with general medicine.', refId: 'apa2022' },
        { myth: 'Homosexuality was removed from the DSM in 1980 with DSM-III.', fact: 'The APA Board of Trustees voted in December 1973 to declassify homosexuality, which took effect in the 1974 printing of DSM-II.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [6, 15],
        marks: 15,
        structure: [
          { heading: 'Evolution of Diagnostic Systems', points: ['From psychoanalytic origins (DSM-I/II) to descriptive revolution (DSM-III)', 'Multiaxial framework in DSM-III/IV and its elimination in DSM-5', 'Current status of DSM-5-TR (March 2022) and ICD-11 (January 2022)'] },
          { heading: 'Key Diagnostic Principles', points: ['Atheoretical symptom-based criteria', 'Clinical significance threshold', 'Person-first language'] },
          { heading: 'Critical Appraisals and Historical Milestones', points: ['Rosenhan study (1973) and psychiatric labelling', 'Declassification of homosexuality (1973/1974)', 'Categorical versus dimensional debate'] }
        ],
        modelAnswer: 'The Diagnostic and Statistical Manual of Mental Disorders (DSM), published by the American Psychiatric Association, represents the primary taxonomy for clinical diagnosis and psychological research. Its evolution reflects profound conceptual shifts in mental healthcare.\n\nFirst published in 1952 (DSM-I) and revised in 1968 (DSM-II), early editions were grounded in psychodynamic theory, framing disorders as emotional reactions to unconscious conflict. In 1980, DSM-III introduced an atheoretical paradigm shift led by Robert Spitzer, establishing operationalized criteria sets based on observable symptoms. It also established a multiaxial diagnostic format (Axes I–V) to separate clinical syndromes from lifelong personality pathology and medical contexts.\n\nIn 2013, DSM-5 enacted major overhauls, eliminating the multiaxial structure to integrate psychiatric disorders with general medical coding. The current authoritative manual, DSM-5-TR (Text Revision, published March 2022), incorporates refined prevalence statistics, updated culture-related diagnostic features, and the formal inclusion of Prolonged Grief Disorder. In parallel, the World Health Organization\'s ICD-11 took legal effect in January 2022, presenting a dimensional framework for personality pathology.\n\nThroughout its history, the DSM has evolved in response to empirical evidence and human rights considerations, famously demonstrated by the December 1973 APA trustees\' vote to declassify homosexuality. Today, the manual enforces person-first language to minimize stigma and incorporates the Cultural Formulation Interview to ensure equitable clinical assessments.',
        shortNote: 'The DSM (currently DSM-5-TR, published March 2022 by the APA) provides operationalized descriptive criteria for diagnosing mental disorders. It dropped the multiaxial framework in 2013, harmonizes with the WHO ICD-11 (in effect Jan 2022), and uses person-first language to counteract labelling stigma.',
        mnemonics: ['DOCS: Descriptive, Operational, Clinical significance, Stigma-reducing'],
        keyTerms: ['DSM-5-TR (2022)', 'ICD-11', 'Robert Spitzer', 'Multiaxial discontinuation', 'Person-first language', 'Operational criteria']
      },
      related: ['psych-disorders', 'four-ds', 'models-of-abnormality'],
      refs: ['apa2022', 'who2022', 'rosenhan1973', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'models-of-abnormality',
      volume: 'I',
      order: 4,
      template: 'foundations',
      category: 'Foundations',
      icon: 'layers',
      name: 'Models of Abnormality',
      preview: 'Biological, psychodynamic, behavioural, cognitive, humanistic, and sociocultural paradigms.',
      definition: 'Models of abnormality are theoretical frameworks that explain the etiology, development, and treatment of psychological disorders. The primary models—biological, psychodynamic, behavioural, cognitive, humanistic, and sociocultural—are synthesized today within the comprehensive biopsychosocial and diathesis-stress paradigms.',
      explanation: `### The Necessity of Theoretical Paradigms
No single perspective can fully capture the complexity of human psychology. Clinicians rely on theoretical models (or paradigms) to organize observations, hypothesize underlying causal mechanisms, and design tailored intervention strategies.

### Biological (Medical) Model
The biological paradigm views psychological disorders as diseases or physiological dysfunctions. Etiological factors include genetic predispositions, neuroanatomical abnormalities, neuroendocrine irregularities, and altered neurotransmitter receptor dynamics. Treatments emphasize pharmacological management, neuromodulation, and lifestyle neurobiology.

### Psychodynamic Paradigm
Originating with Sigmund Freud (1900), the psychodynamic model attributes mental disorders to unconscious conflicts, repressed traumatic memories, and maladaptive defense mechanisms originating in early childhood psychosexual stages. Contemporary psychodynamic theory focuses on relational schemas, internal object representations, and defensive resistance.

### Behavioural Paradigm
Grounded in empirical learning theory (Watson & Rayner, 1920; Skinner, 1953; Wolpe, 1958), the behavioural model posits that abnormal behaviours are learned through classical conditioning (conditioned emotional reactions), operant conditioning (reinforcement of avoidance), and observational modelling. Treatment utilizes exposure therapies and contingency management.

### Cognitive Paradigm
Developed by Aaron T. Beck (1976) and Albert Ellis (1962), the cognitive model asserts that maladaptive psychological reactions stem from distorted cognitive appraisals, irrational beliefs, and negative core schemas. Therapeutic intervention focuses on identifying automated negative thoughts and systematic cognitive restructuring.

### Humanistic-Existential Paradigm
Pioneered by Carl Rogers (1951, 1957) and Abraham Maslow, this humanistic perspective views individuals as possessing an inherent drive toward self-actualization. Psychopathology arises when societal conditions of worth block self-actualization, generating incongruence between the actual self and the ideal self.

### Sociocultural and Biopsychosocial Integration
The sociocultural model explores how environmental poverty, systemic prejudice, family dynamics, and cultural idioms shape distress (Kleinman, 1988). The integrative biopsychosocial and diathesis-stress frameworks unite these paradigms: biological vulnerabilities (diatheses) interact with psychological and environmental stressors to precipitate clinical disorder.`,
      keyPoints: [
        'No single paradigm possesses exclusive explanatory authority over psychopathology',
        'Biological model addresses genetics, brain circuitry, and neurochemistry',
        'Psychodynamic model explores unconscious conflicts and developmental fixations',
        'Behavioural model explains maladaptive habits through classical and operant conditioning',
        'Cognitive model attributes distress to systematic cognitive distortions and core schemas',
        'Humanistic model views disorder as blockage of innate self-actualizing tendencies',
        'Diathesis-stress and biopsychosocial models integrate biological and environmental factors'
      ],
      types: [
        'Biological / Medical Model',
        'Psychodynamic Model (Freud, Jung, Adler)',
        'Behavioural Model (Pavlov, Skinner, Wolpe)',
        'Cognitive Model (Beck, Ellis)',
        'Humanistic Model (Rogers, Maslow)',
        'Sociocultural Paradigm (Kleinman, Szasz)'
      ],
      symptoms: [
        'Somatic and neurochemical disruptions',
        'Unconscious defense mechanisms and transference patterns',
        'Maladaptive conditioned phobic avoidance',
        'Catastrophizing, arbitrary inference, and cognitive distortions',
        'Incongruence, low self-efficacy, and existential alienation'
      ],
      psychologists: [
        'Aaron T. Beck (1976) — Developed cognitive therapy and identified negative cognitive triads',
        'Carl R. Rogers (1951, 1957) — Pioneered person-centred humanistic therapy',
        'Sigmund Freud (1900) — Formulated psychoanalysis and unconscious intrapsychic theory',
        'Joseph Wolpe (1958) — Developed systematic desensitization based on reciprocal inhibition'
      ],
      examples: [
        'Explaining phobias through Mowrer\'s two-factor theory: acquired via classical conditioning, maintained via operant negative reinforcement',
        'Explaining depression through Beck\'s cognitive triad: negative automated views of self, world, and future'
      ],
      treatment: 'Multimodal clinical practice synthesizes pharmacological symptom relief with cognitive-behavioural restructuring, psychodynamic insight, and supportive social interventions.',
      summary: 'Models of abnormality provide complementary lenses for conceptualizing psychopathology. Modern clinical practice bridges biological, psychodynamic, behavioural, cognitive, humanistic, and sociocultural perspectives through the overarching biopsychosocial paradigm.',
      mnemonic: 'B-PB-C-HS — Biological · Psychodynamic · Behavioural · Cognitive · Humanistic · Sociocultural',
      codes: { icd10cm: [], icd11: [], note: 'Integrative theoretical frameworks underpinning all psychiatric conditions' },
      criteria: [
        'Appraisal of biological vulnerability and physical health status',
        'Evaluation of unconscious dynamics and developmental attachment history',
        'Functional analysis of environmental antecedents and reinforced behaviours',
        'Assessment of underlying cognitive schemas and automatic thought patterns',
        'Examination of cultural stressors, family systems, and social support'
      ],
      epidemiology: {
        text: 'Surveys of clinical psychologists show that over 65% identify as integrative or eclectic in clinical practice, synthesizing cognitive-behavioural techniques with humanistic and interpersonal perspectives.',
        stats: [
          { claim: 'Clinical psychologists adopting integrative/multimodal treatment orientations', value: '≈ 60–70%', refId: 'kessler2005', confidence: 'approx' }
        ]
      },
      etiology: {
        biological: ['Genetics, monoamine neurochemistry, hypothalamic-pituitary-adrenal axis'],
        psychological: ['Conditioned responses, cognitive distortions, intrapsychic defense mechanisms'],
        sociocultural: ['Poverty, gender role expectations, systemic discrimination'],
        integrative: 'The diathesis-stress model balances constitutional vulnerabilities against experiential stressors.'
      },
      neuro: {
        regions: ['frontal', 'temporal', 'parietal'],
        note: 'Cognitive therapies activate top-down prefrontal inhibitory control over hyper-reactive limbic structures.'
      },
      differential: [
        { vs: 'Reductionist Biological Monism', distinguishingFeature: 'Integrative biopsychosocial models recognize that environmental stress and cognitive interpretations actively alter gene expression and neural plasticity (epigenetics).' },
        { vs: 'Radical Behaviourism', distinguishingFeature: 'Modern cognitive-behavioural models explicitly incorporate internal cognitive representations rather than treating the mind strictly as an unobservable black box.' }
      ],
      comorbidity: ['psych-disorders', 'four-ds', 'dsm'],
      caseFile: {
        title: 'Case Vignette: Multidimensional Formulation of Agoraphobia',
        composite: true,
        text: 'Priya, a 26-year-old teacher, developed acute panic while driving over a crowded flyover during peak traffic. Under a biological lens, her family history reveals autonomic hyper-reactivity; under a behavioural lens, driving over the bridge became a conditioned stimulus triggering panic, while returning home provided immediate operant relief via negative reinforcement; under a cognitive lens, she catastrophically misinterprets palpitations as signs of impending myocardial infarction; under a sociocultural lens, intense career expectations in a major metropolis heightened baseline stress.',
        questions: [
          'How does Mowrer\'s two-stage behavioural model explain Priya\'s persistent avoidance of the flyover?',
          'How can a clinical team integrate cognitive restructuring with biological psychoeducation to formulate a comprehensive treatment plan?'
        ]
      },
      myths: [
        { myth: 'Mental health professionals must strictly adhere to one pure theoretical school.', fact: 'The overwhelming majority of modern clinicians practice integrative or biopsychosocial psychotherapy, drawing on techniques from multiple evidence-based models.', refId: 'beck1976' },
        { myth: 'The biological model proves that psychotherapy is ineffective compared to medication.', fact: 'Neuroimaging reveals that successful cognitive-behavioural and interpersonal therapy produces physiological changes in neural circuitry comparable to pharmacotherapy.', refId: 'who2022' },
        { myth: 'Humanistic therapy is merely uncritical validation without scientific backing.', fact: 'Carl Rogers conducted rigorous empirical research on core therapeutic conditions, demonstrating that empathy, congruence, and positive regard are fundamental predictors of clinical outcome.', refId: 'rogers1957' }
      ],
      exam: {
        pdfQ: [15],
        marks: 15,
        structure: [
          { heading: 'Overview of Theoretical Models', points: ['Purpose of paradigms in clinical psychology', 'Limitations of single-model reductionism'] },
          { heading: 'Core Paradigms and Contributions', points: ['Biological/Medical (neurotransmitters, genetics, medication)', 'Psychodynamic (Freud, unconscious conflict, defenses)', 'Behavioural (conditioning, Wolpe, exposure)', 'Cognitive (Beck, cognitive distortions, restructuring)', 'Humanistic (Rogers, conditions of worth, actualization)', 'Sociocultural (poverty, cultural idioms, family systems)'] },
          { heading: 'Biopsychosocial Synthesis', points: ['Engel\'s biopsychosocial model', 'Diathesis-stress formulation', 'Clinical case illustration'] }
        ],
        modelAnswer: 'Psychological abnormality cannot be comprehensively explained through any solitary theoretical lens. Clinicians utilize distinct models of abnormality to understand etiology and guide intervention.\n\n1. The Biological Model: Views psychopathology as a disease process resulting from neurochemical dysregulation, structural brain pathology, or genetic vulnerability. Treatments prioritize pharmacotherapy and somatic interventions.\n\n2. The Psychodynamic Model: Founded by Sigmund Freud, this paradigm attributes psychological distress to unconscious intrapsychic conflicts between the Id, Ego, and Superego, rooted in early childhood experiences and maladaptive defense mechanisms.\n\n3. The Behavioural Model: Founded on classical conditioning (Pavlov, Watson) and operant conditioning (Skinner), this model posits that both normal and abnormal behaviours are acquired through environmental learning. Joseph Wolpe\'s systematic desensitization demonstrates how conditioned anxieties can be extinguished through counter-conditioning.\n\n4. The Cognitive Model: Developed by Aaron Beck and Albert Ellis, this perspective views psychopathology as the product of distorted automatic thoughts, irrational assumptions, and dysfunctional core schemas. Interventions center on cognitive restructuring.\n\n5. The Humanistic Model: Carl Rogers emphasized the individual\'s innate drive toward self-actualization. Distress arises from incongruence between the actual self and the ideal self, imposed by conditional positive regard. Person-centred therapy provides unconditional positive regard, empathy, and congruence.\n\n6. The Sociocultural Model: Examines how societal stressors, socioeconomic inequality, gender roles, and cultural concepts of distress shape mental illness.\n\nToday, the biopsychosocial paradigm and the diathesis-stress model synthesize these schools, demonstrating that biological predispositions interact continuously with psychological coping and sociocultural environments.',
        shortNote: 'Models of abnormality—biological, psychodynamic, behavioural, cognitive, humanistic, and sociocultural—offer complementary frameworks for understanding mental disorders. The modern biopsychosocial and diathesis-stress paradigms integrate these perspectives into a unified clinical formulation.',
        mnemonics: ['B-PB-C-HS: Biological, Psychodynamic, Behavioural, Cognitive, Humanistic, Sociocultural'],
        keyTerms: ['Biopsychosocial model', 'Diathesis-stress', 'Cognitive restructuring', 'Reciprocal inhibition', 'Self-actualization', 'Unconscious conflict']
      },
      related: ['psych-disorders', 'four-ds', 'dsm'],
      refs: ['beck1976', 'rogers1957', 'watson1920', 'wolpe1958', 'freud1900', 'skinner1953'],
      lastVerified: '2026-10'
    }
  ];

  VOLUME_I.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
