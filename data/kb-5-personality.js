/**
 * PsychStudy — The Clinical Atlas
 * Volume V: Personality Disorders
 * Chapters:
 *   5.1 personality-overview (Overview of Personality Disorders & Clusters A, B, C)
 *   5.2 antisocial (Antisocial Personality Disorder)
 *   5.3 borderline (Borderline Personality Disorder)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_V = [
    {
      id: 'personality-overview',
      volume: 'V',
      order: 1,
      template: 'disorder',
      category: 'Personality Disorders',
      icon: 'users',
      name: 'Overview of Personality Disorders & Clusters',
      preview: 'Enduring maladaptive traits, the three DSM clusters, and the ICD-11 dimensional paradigm.',
      definition: 'A Personality Disorder is an enduring pattern of inner experience and behaviour that deviates markedly from the expectations of the individual\'s culture, is pervasive and inflexible, has an onset in adolescence or early adulthood, is stable over time, and leads to significant distress or impairment.',
      explanation: `### General Diagnostic Criteria Across All Personality Disorders
Under DSM-5-TR (APA, 2022), a personality disorder represents an inflexible, maladaptive pattern manifested across two or more of the following four domains:
1. Cognition (ways of perceiving and interpreting self, other people, and events)
2. Affectivity (the range, intensity, lability, and appropriateness of emotional response)
3. Interpersonal Functioning (capacity for empathy, intimacy, and conflict resolution)
4. Impulse Control (ability to delay gratification and manage behavioural urges)

Unlike episodic conditions (such as major depressive episodes), personality disorders are ego-syntonic: individuals typically perceive their personality traits as natural, acceptable, and consistent with their authentic self, often blaming external circumstances or other people for interpersonal conflicts.

### The Three Traditional DSM Clusters
The DSM-5-TR groups ten personality disorders into three descriptive clusters:
- Cluster A (Odd / Eccentric): Individuals appear strange, withdrawn, or peculiar.
  1. Paranoid Personality Disorder: Pervasive distrust and suspiciousness of others.
  2. Schizoid Personality Disorder: Pervasive detachment from social relationships and restricted emotional expression.
  3. Schizotypal Personality Disorder: Acute discomfort in close relationships, cognitive or perceptual eccentricities, and odd beliefs/magical thinking.
- Cluster B (Dramatic / Emotional / Erratic): Individuals appear theatrical, volatile, impulsive, or interpersonally disruptive.
  1. Antisocial Personality Disorder: Disregard for and violation of the rights of others.
  2. Borderline Personality Disorder: Instability of interpersonal relationships, self-image, and affects, alongside marked impulsivity.
  3. Histrionic Personality Disorder: Pervasive excessive emotionality and attention-seeking.
  4. Narcissistic Personality Disorder: Grandiosity, need for admiration, and lack of empathy.
- Cluster C (Anxious / Fearful): Individuals appear chronically anxious, timid, or inhibited.
  1. Avoidant Personality Disorder: Social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation.
  2. Dependent Personality Disorder: Submissive and clinging behaviour related to an excessive need to be taken care of.
  3. Obsessive-Compulsive Personality Disorder (OCPD): Preoccupation with orderliness, perfectionism, and mental and interpersonal control.

### The Paradigm Shift: ICD-11 Dimensional Classification
A major milestone occurred on 1 January 2022 when the World Health Organization\'s ICD-11 took legal effect. ICD-11 radically departed from traditional categorical clusters by completely replacing them with a fully dimensional model. Instead of picking rigid categories, clinicians evaluate:
1. Overall Severity of Personality Dysfunction: Classified as Mild, Moderate, or Severe Personality Disorder (based on impairment in self-functioning and interpersonal functioning).
2. Five Prominent Trait Domains: Negative Affectivity, Detachment, Dissociality, Disinhibition, and Anankastia (obsessive-compulsive traits).
3. Optional Borderline Pattern Qualifier: Retained to maintain clinical continuity for targeted psychotherapy.

This dimensional paradigm resolves the chronic limitations of categorical clusters: high co-occurrence across categories, arbitrary diagnostic thresholds, and loss of individual nuances.`,
      keyPoints: [
        'Enduring, inflexible pattern beginning in adolescence/early adulthood, affecting ≥2 of 4 domains (cognition, affect, interpersonal, impulse control)',
        'Characteristically ego-syntonic: patients perceive their traits as part of who they are, often blaming others',
        'Cluster A (Odd/Eccentric): Paranoid, Schizoid, Schizotypal',
        'Cluster B (Dramatic/Erratic): Antisocial, Borderline, Histrionic, Narcissistic',
        'Cluster C (Anxious/Fearful): Avoidant, Dependent, Obsessive-Compulsive (OCPD)',
        'ICD-11 (in effect Jan 2022) replaces categories with a dimensional model: Severity + 5 Trait Domains'
      ],
      types: [
        'Cluster A: Odd or Eccentric Disorders',
        'Cluster B: Dramatic, Emotional, or Erratic Disorders',
        'Cluster C: Anxious or Fearful Disorders',
        'ICD-11 Dimensional Model: Mild, Moderate, Severe Dysfunction + 5 Trait Domains'
      ],
      symptoms: [
        'Enduring rigidity and maladaptive behaviour across diverse personal situations',
        'Chronic, repetitive interpersonal conflict, alienation, and communication breakdowns',
        'Distorted perceptions of self-identity and erratic affect regulation',
        'Ego-syntonic lack of insight regarding the personal contribution to life difficulties',
        'Impaired occupational trajectory due to inflexibility and boundary violations'
      ],
      psychologists: [
        'Theodore Millon — Evolutionary and biosocial model of personality disorders',
        'Robert Spitzer — Spearheaded modern operational criteria for personality disorders'
      ],
      examples: [
        'An individual who believes coworkers are conspiring against him, misinterpreting innocent smiles as hostile mockery (Cluster A: Paranoid)',
        'An individual with OCPD who spends ten hours re-checking office spreadsheets for minor formatting inconsistencies, missing project deadlines entirely (Cluster C)'
      ],
      treatment: 'Long-term specialized psychotherapy is the primary intervention: Dialectical Behaviour Therapy (DBT), Schema Therapy, and Mentalization-Based Treatment (MBT). Pharmacotherapy is purely adjunctive for comorbid mood or anxiety symptoms.',
      summary: 'Personality disorders are pervasive, inflexible patterns originating in adolescence. Grouped into Clusters A (odd), B (erratic), and C (anxious), modern nosology is shifting toward the ICD-11 dimensional paradigm of severity and trait domains.',
      mnemonic: 'MAD, BAD, SAD — Cluster A (Mad/Odd) · Cluster B (Bad/Erratic) · Cluster C (Sad/Anxious)',
      codes: { icd10cm: ['F60.9'], icd11: ['6D10'], note: 'DSM-5-TR General Personality Disorder' },
      criteria: [
        'Enduring pattern of inner experience and behaviour deviating markedly from cultural expectations',
        'Manifested in ≥2 areas: Cognition, Affectivity, Interpersonal functioning, Impulse control',
        'Inflexible and pervasive across a broad range of personal and social situations',
        'Leads to clinically significant distress or impairment in social, occupational, or other functional areas',
        'Pattern is stable and of long duration, tracing back at least to adolescence or early adulthood',
        'Not better explained as a manifestation or consequence of another mental disorder or substance'
      ],
      epidemiology: {
        text: 'The aggregate prevalence of personality disorders in community epidemiological studies is estimated at 9–12% (Kessler et al., 2005). Cluster A disorders affect roughly 3.6%, Cluster B roughly 2.7%, and Cluster C roughly 4.2% of the general population.',
        stats: [
          { claim: 'Aggregate community prevalence of any personality disorder', value: '≈ 9.1–11.5%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence of personality disorders in psychiatric outpatient samples', value: '≈ 40–50%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Genetic heritability estimated at 40–50% across personality traits', 'Altered autonomic nervous system reactivity and frontolimbic connectivity'],
        psychological: ['Maladaptive early childhood attachment ruptures and developmental trauma', 'Dysfunctional early maladaptive schemas (Young)'],
        sociocultural: ['Chaotic family environments, systemic neglect, and rapid societal fragmentation'],
        integrative: 'Constitutional temperamental vulnerabilities (neuroticism, disinhibition) interact with developmental invalidation to produce rigid traits.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Prefrontal orbitofrontal and anterior cingulate structural alterations correlate with impulsivity and affective dysregulation.'
      },
      differential: [
        { vs: 'Episodic Mood and Anxiety Disorders', distinguishingFeature: 'Episodic disorders have a clear clinical onset, fluctuation, and potential return to euthymic baseline, whereas personality disorders represent a lifelong, continuous, inflexible baseline.' },
        { vs: 'Personality Change Due to Another Medical Condition', distinguishingFeature: 'Medical personality change results directly from physiological damage (such as traumatic brain injury, frontal lobe strokes, or neurodegenerative conditions).' }
      ],
      comorbidity: ['major-depression', 'substance-use', 'gad', 'bipolar'],
      caseFile: {
        title: 'Case Vignette: The Rigid Perfectionist',
        composite: true,
        text: 'Devendra, a 46-year-old senior accountant, was referred to counseling after his entire audit team threatened to resign. Devendra demands that all junior staff follow a 24-step document-filing protocol that he personally invented, refusing to delegate any task because he believes others will execute it imperfectly. He works 80 hours a week, has discarded no financial receipts since 1998, and has taken no vacation in twelve years. When his spouse requested a weekend family trip, Devendra berated her for frivolous waste. Devendra sees nothing wrong with his behaviour, insisting that he is simply the only principled professional in a lazy world (ego-syntonic stance).',
        questions: [
          'How does Devendra\'s clinical presentation exemplify an ego-syntonic Cluster C disorder (OCPD)?',
          'How does OCPD differ fundamentally from Obsessive-Compulsive Disorder (OCD)?'
        ]
      },
      myths: [
        { myth: 'Personality disorders are incurable and cannot be treated with modern psychology.', fact: 'Evidence-based therapies like DBT, Schema Therapy, and Mentalization-Based Treatment demonstrate substantial long-term clinical remission and functional recovery.', refId: 'linehan1993' },
        { myth: 'People with personality disorders are simply choosing to be difficult and manipulative.', fact: 'Personality disorders stem from profound neurobiological vulnerabilities and severe childhood attachment trauma; behaviours reflect entrenched survival adaptations.', refId: 'apa2022' },
        { myth: 'The ICD-11 uses the same three-cluster system as the DSM-5.', fact: 'The WHO ICD-11 (Jan 2022) completely eliminated the categorical clusters, adopting a dimensional classification based on severity and five trait domains.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [9],
        marks: 15,
        structure: [
          { heading: 'General Criteria of Personality Disorders', points: ['Inflexible, pervasive patterns affecting ≥2 of 4 domains', 'Onset in adolescence/early adulthood', 'Ego-syntonic vs ego-dystonic distinction'] },
          { heading: 'The Three DSM Clusters', points: ['Cluster A (Odd/Eccentric: Paranoid, Schizoid, Schizotypal)', 'Cluster B (Dramatic/Erratic: Antisocial, Borderline, Histrionic, Narcissistic)', 'Cluster C (Anxious/Fearful: Avoidant, Dependent, OCPD)'] },
          { heading: 'Modern ICD-11 Dimensional Model', points: ['WHO ICD-11 (in effect Jan 2022)', 'Severity grading (Mild, Moderate, Severe)', 'Five trait domains (Negative Affectivity, Detachment, Dissociality, Disinhibition, Anankastia)'] }
        ],
        modelAnswer: 'A Personality Disorder (DSM-5-TR / ICD-10 F60) is defined as an enduring pattern of inner experience and behaviour that deviates markedly from the expectations of the individual\'s culture, is pervasive and inflexible across diverse personal and social situations, has an onset in adolescence or early adulthood, is stable over time, and causes clinically significant distress or impairment.\n\nAccording to the DSM-5-TR, the maladaptive pattern must manifest across two or more of four core functional domains: (1) Cognition (perception of self, others, and events), (2) Affectivity (range, intensity, and appropriateness of emotional response), (3) Interpersonal functioning, and (4) Impulse control. A defining characteristic is their ego-syntonic nature: individuals typically view their personality traits as an authentic reflection of who they are, attributing interpersonal conflict to others.\n\nThe DSM-5-TR groups ten personality disorders into three descriptive clusters:\n- Cluster A (Odd/Eccentric): Paranoid (pervasive suspiciousness), Schizoid (social detachment, restricted affect), and Schizotypal (eccentric thinking, magical beliefs).\n- Cluster B (Dramatic/Emotional/Erratic): Antisocial (disregard for rights of others), Borderline (instability in relationships, self-image, affect), Histrionic (excessive attention-seeking), and Narcissistic (grandiosity, lack of empathy).\n- Cluster C (Anxious/Fearful): Avoidant (social inhibition, fear of rejection), Dependent (submissive clinging), and Obsessive-Compulsive Personality Disorder (OCPD; rigid perfectionism and control).\n\nA revolutionary transformation in psychiatric nosology occurred with the World Health Organization\'s ICD-11 (in effect 1 January 2022). ICD-11 abandoned the traditional categorical clusters in favour of a fully dimensional classification. Clinicians grade overall severity (Mild, Moderate, or Severe Personality Disorder) based on interpersonal and self-dysfunction, and delineate prominent trait domains: Negative Affectivity, Detachment, Dissociality, Disinhibition, and Anankastia.',
        shortNote: 'Personality disorders are pervasive, inflexible trait patterns beginning in adolescence. Categorized into Clusters A (odd), B (erratic), and C (anxious), modern nosology has been modernized by the WHO ICD-11 (in effect Jan 2022), which adopts a dimensional model of severity and five trait domains.',
        mnemonics: ['MAD, BAD, SAD: Cluster A (Mad/Odd), Cluster B (Bad/Erratic), Cluster C (Sad/Anxious)'],
        keyTerms: ['Personality Disorder', 'Ego-syntonic', 'Cluster A, B, C', 'ICD-11 dimensional model', 'Severity grading', 'Negative Affectivity', 'Dissociality', 'Anankastia']
      },
      related: ['antisocial', 'borderline'],
      refs: ['apa2022', 'who2022', 'linehan1993', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'antisocial',
      volume: 'V',
      order: 2,
      template: 'disorder',
      category: 'Personality Disorders',
      icon: 'slash',
      name: 'Antisocial Personality Disorder (ASPD)',
      preview: 'Pervasive disregard for the rights of others, deceitfulness, impulsivity, and lack of remorse.',
      definition: 'Antisocial Personality Disorder (ASPD) is a Cluster B personality disorder characterized by a pervasive pattern of disregard for, and violation of, the rights of others, occurring since age 15 years, as indicated by repeated unlawful behaviours, deceitfulness, impulsivity, irritability and aggressiveness, reckless disregard for safety, consistent irresponsibility, and a marked lack of remorse.',
      explanation: `### Diagnostic Criteria and the Conduct Disorder Requirement
Under DSM-5-TR (APA, 2022; ICD-10 F60.2 / ICD-11 Dissociality), diagnosis mandates that the individual is at least 18 years of age and had evidence of Conduct Disorder with onset before age 15. The pervasive pattern of disregard for others requires the presence of at least three of the following seven features:
1. Failure to conform to social norms with respect to lawful behaviours, as indicated by repeatedly performing acts that are grounds for arrest
2. Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure
3. Impulsivity or failure to plan ahead
4. Irritability and aggressiveness, as indicated by repeated physical fights or assaults
5. Reckless disregard for safety of self or others
6. Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behaviour or honor financial obligations
7. Lack of remorse, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another

### ASPD vs Psychopathy: Cleckley and Hare
While the DSM-5-TR focuses primarily on observable antisocial and criminal behaviours to maximize diagnostic reliability, clinical psychology maintains a vital distinction between ASPD and Psychopathy:
- Hervey Cleckley (1941), in his classic work *The Mask of Sanity*, delineated the core affective and interpersonal features of psychopathy: superficial charm, absence of delusions or nervousness, unreliability, untruthfulness, lack of remorse or shame, poor judgment, egocentricity, and poverty of emotional reactions.
- Robert D. Hare (2003) operationalized Cleckley's concepts in the Hare Psychopathy Checklist-Revised (PCL-R), establishing a 20-item, two-factor assessment:
  - Factor 1 (Interpersonal / Affective): Glibness/superficial charm, grandiose sense of self-worth, pathological lying, conning/manipulative, lack of remorse or guilt, shallow affect, callous/lack of empathy, failure to accept responsibility.
  - Factor 2 (Social Deviance / Lifestyle): Need for stimulation/proneness to boredom, parasitic lifestyle, poor behavioural controls, early behavioural problems, lack of realistic long-term goals, impulsivity, irresponsibility, juvenile delinquency, revocation of conditional release.

Most individuals with psychopathy meet criteria for ASPD, but only a minority of individuals with ASPD score high enough on the PCL-R to meet criteria for psychopathy.

### Neurobiology: Prefrontal Hypoactivity and Amygdala Blunting
Neuroimaging and autonomic studies reveal profound neurobiological markers:
- Prefrontal Cortex Volume Deficits: Research demonstrates an approximate 11% reduction in prefrontal grey matter volume in individuals with antisocial personality, impairing executive impulse inhibition, moral reasoning, and somatic marker processing.
- Amygdala Hypo-Reactivity: Individuals with psychopathy display blunted amygdala reactivity to fearful facial expressions and conditioned distress vocalizations.
- Autonomic Hypo-Arousal: Abnormally low resting heart rate and reduced electrodermal skin conductance indicate low physiological arousal, driving sensation-seeking behaviours to overcome chronic under-arousal.`,
      keyPoints: [
        'Must be at least 18 years old with historical evidence of Conduct Disorder before age 15',
        'Requires ≥3 of 7 criteria: unlawful acts, deceitfulness, impulsivity, aggression, recklessness, irresponsibility, lack of remorse',
        'Cleckley (1941) delineated psychopathy: superficial charm, unreliability, and emotional shallowness',
        'Hare (2003) PCL-R measures Factor 1 (Interpersonal/Affective) and Factor 2 (Lifestyle/Social Deviance)',
        'Neurobiology: ≈11% reduction in prefrontal grey matter, blunted amygdala reactivity, and low resting heart rate',
        'Treatment: Highly refractory to insight therapy; contingency management and structured cognitive interventions offer best outcomes'
      ],
      types: [
        'Antisocial Personality Disorder (Primary Behavioral Diagnosis)',
        'ASPD with Psychopathic Traits (High PCL-R Factor 1 Score)',
        'Dissocial Personality Disorder (ICD-10 / ICD-11)',
        'Secondary (Sociopathic) Antisocial Presentation'
      ],
      symptoms: [
        'Chronic deceitfulness, pathological lying, and exploitative manipulation of others',
        'Impulsive aggression, recurring violent brawls, and domestic volatility',
        'Reckless vehicular operation and dangerous endangerment of others',
        'Total absence of guilt, remorse, or moral conscience following cruelty',
        'Chronic failure to maintain employment or pay legal and family debts'
      ],
      psychologists: [
        'Robert D. Hare (2003) — Developed the Psychopathy Checklist-Revised (PCL-R)',
        'Hervey Cleckley (1941) — Author of *The Mask of Sanity*, pioneering clinical psychopathy studies'
      ],
      examples: [
        'A 25-year-old who cons elderly retirees out of life savings using elaborate false identities, expressing amusement at their distress and demonstrating zero remorse',
        'An individual with a history of adolescent arson and animal cruelty who drives intoxicated at 140 km/h, laughing off passenger screams'
      ],
      treatment: 'Traditional individual psychotherapy is largely ineffective and may enhance manipulative skills. Structured residential programs, contingency management, and cognitive-behavioural programs focused on pro-social problem-solving provide modest benefit.',
      summary: 'ASPD involves pervasive violation of the rights of others since age 15. Differentiated from psychopathy (Hare PCL-R), it is characterized by prefrontal volume deficits and autonomic under-arousal, requiring strict contingency management.',
      mnemonic: 'CORRUPT — Conformity failure (laws) · Obligations ignored · Reckless safety · Remorse absent · Underhanded (deceitful) · Planning failure · Temper violent',
      codes: { icd10cm: ['F60.2'], icd11: ['6D11.2'], note: 'DSM-5-TR 301.7 Antisocial Personality Disorder' },
      criteria: [
        'Pervasive pattern of disregard for and violation of the rights of others since age 15',
        'Indicated by ≥3 of 7: failure to conform to laws, deceitfulness, impulsivity, irritability/aggression, reckless disregard for safety, consistent irresponsibility, lack of remorse',
        'The individual is at least 18 years of age',
        'There is evidence of conduct disorder with onset before age 15 years',
        'The occurrence of antisocial behaviour is not exclusively during the course of schizophrenia or bipolar disorder'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Antisocial Personality Disorder is approximately 3.0% in men and 1.0% in women (Kessler et al., 2005). In correctional and forensic populations, prevalence rates reach 40–70%.',
        stats: [
          { claim: 'Prevalence of ASPD in adult males', value: '≈ 3.0%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence in correctional prison populations', value: '≈ 40–70%', refId: 'hare2003', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Heritability estimated at 50%', 'Low resting heart rate and low skin conductance (autonomic under-arousal theory; Raine)', 'Prefrontal grey matter volume reduction and monoamine oxidase A (MAOA) gene interaction with early severe childhood physical abuse'],
        psychological: ['Hostile attributional bias', 'Poverty of emotional empathy coupled with preserved cognitive theory-of-mind'],
        sociocultural: ['Inconsistent, harsh, or abusive parental discipline', 'Association with deviant delinquent peer groups'],
        integrative: 'Genetic under-arousal combined with early severe childhood physical trauma fosters remorseless antisocial trajectories.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Structural MRI demonstrates an approximate 11% reduction in prefrontal grey matter volume, accompanied by blunted amygdala reactivity to moral distress cues.'
      },
      differential: [
        { vs: 'Borderline Personality Disorder', distinguishingFeature: 'While both feature impulsivity and emotional volatility, BPD is driven by intense fear of abandonment, deep emotional pain, and frequent self-harm, whereas ASPD features remorseless exploitation of others and predatory manipulation.' },
        { vs: 'Narcissistic Personality Disorder', distinguishingFeature: 'Individuals with NPD crave social admiration and prestige and are less consistently violent, physically aggressive, or deceitful than individuals with ASPD.' }
      ],
      comorbidity: ['substance-use', 'bipolar', 'adhd'],
      caseFile: {
        title: 'Case Vignette: The Unmoved Defendant',
        composite: true,
        text: 'Kishore, a 26-year-old mechanic, appeared in court following an armed carjacking. Court records revealed a juvenile history of setting school fires, stealing cars at age 13, and torturing neighborhood dogs (Conduct Disorder before age 15). Kishore demonstrated charming glibness when speaking with the forensic evaluator, chuckling as he described the terrified elderly victim of the carjacking: "If people leave their car running at the petrol pump, they deserve to lose it." Autonomic testing revealed a resting heart rate of 54 bpm. Kishore showed no remorse, no anxiety regarding his upcoming imprisonment, and declared that laws are invented for fools.',
        questions: [
          'How does Kishore\'s clinical history satisfy both the age requirement and Conduct Disorder criteria for ASPD?',
          'How do Kishore\'s glib charm and total lack of remorse reflect Factor 1 psychopathic traits on the Hare PCL-R?'
        ]
      },
      myths: [
        { myth: 'All criminals and lawbreakers have Antisocial Personality Disorder.', fact: 'Many individuals commit crimes due to economic desperation, addiction, or subcultural pressure without exhibiting the pervasive, lifelong, remorseless personality pathology of ASPD.', refId: 'hare2003' },
        { myth: 'Psychopathy and ASPD are completely identical diagnoses.', fact: 'ASPD is a broad behavioural diagnosis in the DSM-5; psychopathy (measured by the Hare PCL-R) is a specialized construct capturing deep affective calloused traits.', refId: 'cleckley1941' },
        { myth: 'Individuals with ASPD lack the ability to understand other people\'s emotions.', fact: 'Individuals with ASPD often possess intact cognitive empathy (theory of mind), enabling them to manipulate others, while lacking emotional/affective empathy.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [9],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Criteria of ASPD', points: ['DSM-5-TR requirement of age ≥18 and Conduct Disorder onset <15', 'Seven core criteria (≥3 required): unlawful acts, deceit, impulsivity, aggression, recklessness, irresponsibility, lack of remorse'] },
          { heading: 'Cleckley and Hare\'s Formulations of Psychopathy', points: ['Hervey Cleckley (1941) *The Mask of Sanity* and superficial charm', 'Robert Hare (2003) PCL-R Factor 1 (Affective/Interpersonal) and Factor 2 (Lifestyle/Social Deviance)'] },
          { heading: 'Neurobiology and Treatment Challenges', points: ['Prefrontal cortex volume deficit (≈11%)', 'Amygdala blunting and autonomic under-arousal (low resting heart rate)', 'Resistance to insight therapy; contingency management'] }
        ],
        modelAnswer: 'Antisocial Personality Disorder (ASPD; DSM-5-TR 301.7 / ICD-10 F60.2) is a severe Cluster B personality disorder characterized by a pervasive pattern of disregard for and violation of the rights of others.\n\nUnder DSM-5-TR, diagnosis requires that the individual is at least 18 years old and had clear evidence of Conduct Disorder with onset before age 15. The pattern of antisocial behaviour must be evidenced by at least three of seven criteria: (1) failure to conform to social norms regarding lawful behaviours (repeated arrests), (2) deceitfulness (repeated lying, conning for profit/pleasure), (3) impulsivity or failure to plan ahead, (4) irritability and aggressiveness (repeated physical fights), (5) reckless disregard for safety of self or others, (6) consistent irresponsibility (failure to maintain employment or pay debts), and (7) lack of remorse (indifference to or rationalizing harm inflicted on others).\n\nIn clinical psychology, a crucial distinction exists between ASPD and Psychopathy. While ASPD emphasizes observable behavioural transgressions, psychopathy focuses on core affective and interpersonal deficits. Hervey Cleckley (1941), in *The Mask of Sanity*, identified psychopathy as characterized by superficial charm, intelligence, untruthfulness, and complete absence of remorse or neurotic anxiety. Robert Hare (2003) operationalized this in the Hare Psychopathy Checklist-Revised (PCL-R), delineating Factor 1 (Interpersonal/Affective: glibness, grandiosity, pathological lying, callous lack of empathy) and Factor 2 (Lifestyle/Social Deviance: impulsivity, parasitic lifestyle, early behaviour problems).\n\nNeurobiologically, individuals with ASPD exhibit an approximate 11% reduction in prefrontal grey matter volume, impairing executive decision-making and fear conditioning. Furthermore, blunted amygdala reactivity to distress cues and low resting heart rates reflect autonomic under-arousal, driving sensation-seeking behaviours. Because insight therapies can be counterproductive, interventions prioritize strict contingency management in structured environments.',
        shortNote: 'Antisocial Personality Disorder requires age ≥18 and Conduct Disorder onset before age 15, evidenced by ≥3 of 7 criteria (unlawful acts, deceit, impulsivity, aggression, recklessness, irresponsibility, lack of remorse). Distinguished from psychopathy (Hare PCL-R; Cleckley, 1941), it involves prefrontal volume deficits and low autonomic arousal.',
        mnemonics: ['CORRUPT: Conformity failure, Obligations ignored, Reckless safety, Remorse absent, Underhanded, Planning failure, Temper violent'],
        keyTerms: ['Antisocial Personality Disorder', 'Conduct Disorder requirement', 'Hervey Cleckley', 'Robert Hare', 'PCL-R', 'Factor 1 vs Factor 2', 'Prefrontal grey matter deficit', 'Autonomic under-arousal']
      },
      related: ['borderline', 'personality-overview'],
      refs: ['apa2022', 'who2022', 'hare2003', 'cleckley1941', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'borderline',
      volume: 'V',
      order: 3,
      template: 'disorder',
      category: 'Personality Disorders',
      icon: 'heart',
      name: 'Borderline Personality Disorder (BPD)',
      preview: 'Affective instability, identity disturbance, fear of abandonment, and Linehan\'s DBT.',
      definition: 'Borderline Personality Disorder (BPD) is a severe Cluster B personality disorder characterized by a pervasive pattern of instability in interpersonal relationships, self-image, and affects, alongside marked impulsivity, beginning by early adulthood and present across a variety of contexts.',
      explanation: `### Core Diagnostic Features (DSM-5-TR)
Under DSM-5-TR (APA, 2022; ICD-10 F60.3 / ICD-11 Borderline Pattern), diagnosis requires the presence of at least five of the following nine criteria:
1. Frantic efforts to avoid real or imagined abandonment
2. A pattern of unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation ("splitting")
3. Identity disturbance: markedly and persistently unstable self-image or sense of self
4. Impulsivity in at least two areas that are potentially self-damaging (e.g., spending, substance abuse, reckless driving, binge eating)
5. Recurrent suicidal behaviour, gestures, or threats, or nonsuicidal self-injurious behaviour (e.g., cutting)
6. Affective instability due to a marked reactivity of mood (e.g., intense episodic dysphoria, irritability, or anxiety usually lasting a few hours and only rarely more than a few days)
7. Chronic feelings of emptiness
8. Inappropriate, intense anger or difficulty controlling anger
9. Transient, stress-related paranoid ideation or severe dissociative symptoms

### Linehan's Biosocial Theory
Marsha M. Linehan (1993) formulated the biosocial developmental model of BPD:
1. Biological Vulnerability: High baseline emotional sensitivity, high emotional reactivity to minimal stimuli, and a slow return to emotional baseline.
2. The Pervasively Invalidating Environment: Early developmental environments where the child's private emotional experiences and expressions are routinely dismissed, punished, trivialized, or pathologized by caregivers.

When a biologically vulnerable child grows up in an invalidating environment, they fail to learn how to label, modulate, or tolerate emotional arousal. Intense behavioural crises (parasuicidality, extreme outbursts) become the only expressions that elicit response from the environment, reinforcing extreme emotional escalation.

### Psychological Defense Mechanisms: Splitting
In psychodynamic formulations (Kernberg), BPD is characterized by "splitting"—a primitive defense mechanism where individuals view others, themselves, and situations in dichotomous, unintegrated extremes of "all good" or "all bad." When an idealized friend or therapist fails to meet an impossible expectation, the patient splits them into an entirely malevolent, hostile figure.

### Evidence-Based Treatment: Dialectical Behaviour Therapy (DBT)
Marsha Linehan (1993) created Dialectical Behaviour Therapy (DBT), the empirically validated gold standard for BPD. Grounded in dialectical philosophy (synthesizing the fundamental tension between radical ACCEPTANCE and behavioural CHANGE), DBT delivers four core skill modules:
- Mindfulness: Cultivating present-moment, non-judgmental awareness of emotional states.
- Distress Tolerance: Crisis survival skills (TIPP skills, radical acceptance) to endure emotional pain without engaging in self-harm.
- Emotion Regulation: Identifying emotions, changing emotional responses (opposite action), and reducing emotional vulnerability.
- Interpersonal Effectiveness: Asserting needs (DEAR MAN skills) while maintaining self-respect and relationships.`,
      keyPoints: [
        'Requires ≥5 of 9 criteria: abandonment terror, splitting, identity instability, impulsivity, suicidal/self-harm gestures, affective lability, emptiness, intense anger, dissociative symptoms',
        'Linehan\'s Biosocial Theory: biological emotional vulnerability interacting with a pervasively invalidating environment',
        'Splitting: primitive defense mechanism alternating between extreme idealization and devaluation',
        'Nonsuicidal self-injury (cutting) frequently used to regulate overwhelming internal psychic agony',
        'Dialectical Behaviour Therapy (DBT; Linehan, 1993) is the empirical gold standard',
        'Four core DBT skill modules: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness'
      ],
      types: [
        'Borderline Personality Disorder (Primary DSM-5-TR Diagnosis)',
        'Borderline Pattern Qualifier (ICD-11)',
        'Emotionally Unstable Personality Disorder (ICD-10 Borderline Type)',
        'Subtypes (Millon): Discouraged, Impulsive, Petulant, Self-Destructive'
      ],
      symptoms: [
        'Frantic panic and rage upon perceived interpersonal separation or abandonment',
        'Volatile relationships oscillating from romantic perfection to bitter hostility',
        'Recurrent deliberate self-harm (cutting) and repeated suicidal crises',
        'Rapid mood crashes lasting hours in response to interpersonal cues',
        'Profound, painful feelings of inner emotional emptiness'
      ],
      psychologists: [
        'Marsha M. Linehan (1993) — Developed Dialectical Behaviour Therapy (DBT) and the biosocial model',
        'Otto Kernberg — Conceptualized borderline personality organization and splitting defense mechanisms'
      ],
      examples: [
        'A 20-year-old student who cuts her wrists after her romantic partner cancels a dinner date, vacillating between screaming that he is an evil abuser and sobbing that she cannot live without him',
        'An individual who abruptly changes career goals, sexual orientation, friendship circles, and aesthetic style five times in two years, describing feeling completely empty inside'
      ],
      treatment: 'Dialectical Behaviour Therapy (DBT; Linehan, 1993) combining weekly individual psychotherapy, weekly skills training groups, between-session phone coaching, and therapist consultation teams. Mentalization-Based Treatment (MBT) and Schema Therapy provide effective alternatives.',
      summary: 'BPD is characterized by affective instability, identity disturbance, relationship volatility (splitting), and recurrent self-harm (≥5 of 9 criteria). Rooted in Linehan\'s biosocial theory, it is treated definitively with Dialectical Behaviour Therapy (DBT).',
      mnemonic: 'DESPAIRING — Disturbed identity · Emotionally labile · Suicidal/self-harm · Paranoia/dissociation · Abandonment terror · Impulsive · Relationships unstable · Inappropriate anger · Nothingness (emptiness) · Guilty splitting',
      codes: { icd10cm: ['F60.3'], icd11: ['6D11.5'], note: 'DSM-5-TR 301.83 Borderline Personality Disorder' },
      criteria: [
        'Pervasive pattern of instability in relationships, self-image, and affects with marked impulsivity',
        'Manifested by ≥5 of 9 symptoms: abandonment avoidance, unstable relationships (splitting), identity disturbance, self-damaging impulsivity, recurrent suicidal/self-harm behavior, affective lability, chronic emptiness, intense anger, stress-induced paranoid ideation/dissociation',
        'Onset by early adulthood and present across diverse contexts',
        'Causes clinically significant distress or functional impairment'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Borderline Personality Disorder is estimated at approximately 1.6–2.0% in the general population, but reaches 10% in psychiatric outpatient clinics and up to 20% in psychiatric inpatient populations (Kessler et al., 2005; Linehan, 1993). In clinical settings, women account for roughly 75% of diagnoses.',
        stats: [
          { claim: 'Community prevalence of Borderline Personality Disorder', value: '≈ 1.6–2.0%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence of BPD among psychiatric inpatient admissions', value: '≈ 20%', refId: 'linehan1993', confidence: 'high' },
          { claim: 'Rate of completed suicide in longitudinal BPD tracking', value: '≈ 8–10%', refId: 'linehan1993', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Heritability estimated at approximately 40–55%', 'Amygdala hyper-reactivity to negative emotional stimuli', 'Hypoactivity in prefrontal regulatory areas (orbitofrontal and dorsolateral PFC)'],
        psychological: ['Pervasively invalidating childhood environments (Linehan)', 'High rates of severe childhood emotional, physical, and sexual trauma (70–80%)'],
        sociocultural: ['Chaotic family disruptions, chronic invalidation, and attachment insecurity'],
        integrative: 'Biological emotion sensitivity interacts with an invalidating environment to impair emotional self-regulation.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Marked basolateral amygdala hyper-reactivity coupled with diminished functional connectivity with the orbitofrontal cortex and anterior cingulate.'
      },
      differential: [
        { vs: 'Bipolar II Disorder', distinguishingFeature: 'In Bipolar II, hypomanic and depressive episodes endure for days or weeks sustained independently of interpersonal events; in BPD, affective lability shifts within hours directly triggered by interpersonal rejection or abandonment cues.' },
        { vs: 'Major Depressive Disorder', distinguishingFeature: 'MDD dysphoria is persistent and vegetative (lasting weeks), whereas BPD mood shifts are reactive, volatile, and accompanied by chronic feelings of emptiness and splitting.' }
      ],
      comorbidity: ['major-depression', 'ptsd', 'substance-use', 'eating-disorders', 'gad'],
      caseFile: {
        title: 'Case Vignette: The Storm of Abandonment',
        composite: true,
        text: 'Simran, a 23-year-old student, was admitted to the emergency department with forearm lacerations following a dispute with her partner. Simran reported that when her partner arrived 45 minutes late from work, she experienced an overwhelming terror that he had abandoned her forever. In a fury, she screamed that he was a heartless liar, smashed a mirror, and cut her arms with a shard to stop the agonizing internal numbness. Two hours later, when her partner wept by her bedside, Simran clung to him, professing that he was the only angel who could save her. Her history revealed four college dropouts, intense identity confusion, and chronic feelings of profound inner void.',
        questions: [
          'Identify the specific DSM-5-TR criteria for BPD demonstrated in Simran\'s emergency room episode.',
          'How does Simran\'s vacillation between demonizing and idealizing her partner illustrate the defense mechanism of splitting?'
        ]
      },
      myths: [
        { myth: 'Individuals with Borderline Personality Disorder are hopeless and will never recover.', fact: 'Longitudinal studies demonstrate that with specialized treatments like DBT, over 70% of individuals achieve sustained clinical remission over ten years.', refId: 'linehan1993' },
        { myth: 'Self-harm in BPD is simply manipulative attention-seeking and can be ignored.', fact: 'Self-injury in BPD reflects intolerable psychic pain; approximately 8–10% of individuals with BPD die by suicide, making every gesture an urgent clinical concern.', refId: 'linehan1993' },
        { myth: 'Medication alone can cure Borderline Personality Disorder.', fact: 'No medication is approved to cure BPD; pharmacotherapy is strictly adjunctive, while specialized psychotherapy (DBT) is the primary treatment.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [3, 9],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition and Nine Criteria', points: ['DSM-5-TR requirement of ≥5 of 9 symptoms', 'Abandonment terror, unstable relationships, identity disturbance, impulsivity, suicidal/self-harm behavior, affective lability, emptiness, anger, stress dissociation'] },
          { heading: 'Etiological Theories', points: ['Linehan\'s Biosocial Theory (biological vulnerability + invalidating environment)', 'Primitive defense mechanism of Splitting (Kernberg)', 'Neurobiology (amygdala hyper-reactivity and prefrontal hypoactivity)'] },
          { heading: 'Dialectical Behaviour Therapy (DBT)', points: ['Developed specifically by Marsha Linehan (1993)', 'Dialectical balance: Acceptance (mindfulness/distress tolerance) vs Change (emotion regulation/interpersonal)', 'Structure: individual therapy, skills group, phone coaching, consultation team'] }
        ],
        modelAnswer: 'Borderline Personality Disorder (BPD; DSM-5-TR 301.83 / ICD-10 F60.3) is a severe Cluster B personality disorder defined by a pervasive pattern of instability in interpersonal relationships, self-image, and affects, alongside marked impulsivity, beginning by early adulthood.\n\nUnder DSM-5-TR, diagnosis requires the presence of at least five of nine clinical criteria: (1) frantic efforts to avoid real or imagined abandonment; (2) unstable and intense interpersonal relationships marked by alternating between extremes of idealization and devaluation (splitting); (3) identity disturbance with persistently unstable self-image; (4) self-damaging impulsivity in at least two areas (spending, sex, substance abuse, reckless driving); (5) recurrent suicidal behaviour, gestures, threats, or nonsuicidal self-injury (e.g., cutting); (6) affective instability due to marked reactivity of mood (intense episodic dysphoria or anxiety lasting hours); (7) chronic feelings of emptiness; (8) inappropriate, intense anger; and (9) transient, stress-related paranoid ideation or severe dissociative symptoms.\n\nEtiologically, Marsha M. Linehan (1993) formulated the seminal Biosocial Developmental Model. The disorder emerges from the transaction between a biological vulnerability (high emotional sensitivity, intense reactivity, slow return to baseline) and a pervasively invalidating developmental environment (where emotional expressions are punished, trivialized, or dismissed). The individual never learns to regulate emotional arousal, turning to parasuicidal self-injury to regulate overwhelming psychic pain. Psychodynamically, Otto Kernberg highlighted the primitive defense mechanism of splitting—viewing self and others as either all-good or all-bad.\n\nThe gold-standard evidence-based intervention is Dialectical Behaviour Therapy (DBT; Linehan, 1993). Grounded in the dialectic between radical acceptance and change, DBT delivers four skill modules: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness across individual therapy and weekly skills training groups.',
        shortNote: 'Borderline Personality Disorder is defined by ≥5 of 9 criteria (abandonment terror, splitting, identity instability, impulsivity, self-harm, affective lability, emptiness, anger, dissociation). Driven by Linehan\'s biosocial theory (emotional vulnerability + invalidating environment), it is treated with Dialectical Behaviour Therapy (DBT).',
        mnemonics: ['DESPAIRING: Disturbed identity, Emotionally labile, Suicidal/self-harm, Paranoia/dissociation, Abandonment terror, Impulsive, Relationships unstable, Inappropriate anger, Nothingness (emptiness), Guilty splitting'],
        keyTerms: ['Borderline Personality Disorder', 'Biosocial theory', 'Marsha Linehan', 'Dialectical Behaviour Therapy (DBT)', 'Splitting', 'Abandonment terror', 'Invalidating environment', 'Affective instability']
      },
      related: ['antisocial', 'personality-overview', 'major-depression', 'ptsd'],
      refs: ['apa2022', 'who2022', 'linehan1993', 'kessler2005'],
      contentNote: 'Discusses self-harm, suicidal crises, and trauma. If you are experiencing distress, confidential crisis assistance is accessible 24/7: Tele-MANAS (India) 14416; 988 (USA); 116 123 (UK).',
      lastVerified: '2026-10'
    }
  ];

  VOLUME_V.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
