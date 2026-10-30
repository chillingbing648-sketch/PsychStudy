/**
 * PsychStudy — The Clinical Atlas
 * Volume II: Anxiety & Stress-Related Disorders
 * Chapters:
 *   2.1 gad (Generalised Anxiety Disorder)
 *   2.2 panic (Panic Disorder & Agoraphobia)
 *   2.3 phobias (Specific Phobias & Social Anxiety Disorder)
 *   2.4 ocd (Obsessive-Compulsive Disorder)
 *   2.5 ptsd (Post-Traumatic Stress Disorder)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_II = [
    {
      id: 'gad',
      volume: 'II',
      order: 1,
      template: 'disorder',
      category: 'Anxiety Disorders',
      icon: 'zap',
      name: 'Generalised Anxiety Disorder (GAD)',
      preview: 'Pervasive, uncontrollable worry and chronic autonomic hyperarousal.',
      definition: 'Generalised Anxiety Disorder (GAD) is characterized by persistent, excessive, and uncontrollable worry regarding various everyday domains—such as health, finances, work, and family—occurring more days than not for at least six months, accompanied by distinct physical symptoms of somatic tension.',
      explanation: `### Core Clinical Presentation
Generalised Anxiety Disorder is defined by chronic, diffuse, and "free-floating" apprehensive expectation. Unlike situational anxiety or specific phobias, the worry in GAD is not tethered to a singular objective threat; rather, it shifts fluidly between multiple everyday domains. The individual finds it difficult or impossible to control the worry or disengage from catastrophic anticipation.

### Diagnostic Criteria (DSM-5-TR & ICD-11)
According to the DSM-5-TR (APA, 2022; ICD-10 F41.1), diagnosis requires excessive anxiety and worry occurring on most days for at least six months. The anxiety must be accompanied by at least three of six cardinal physical and cognitive symptoms (only one required in children):
1. Restlessness or feeling keyed up or on edge
2. Being easily fatigued
3. Difficulty concentrating or mind going blank
4. Irritability
5. Muscle tension (the most specific somatic hallmark)
6. Sleep disturbance (difficulty falling asleep, restless sleep)

The disturbance must cause clinically significant distress or functional impairment and must not be due to the physiological effects of a substance (e.g., caffeine intoxication, hyperthyroidism) or another mental disorder.

### Cognitive and Behavioural Mechanisms
Cognitive models highlight that worry serves a maladaptive avoidance function (Borkovec). Individuals with GAD hold positive metacognitive beliefs about worry (e.g., "worrying prepares me for the worst"), using abstract verbal worry to blunt visceral autonomic arousal, which paradoxically prevents emotional processing. Furthermore, intolerance of uncertainty leads individuals to treat any ambiguous future scenario as an imminent catastrophic threat.

### Neurobiological Correlates
Neuroimaging studies implicate dysregulation within the frontolimbic network. Reduced functional connectivity between the prefrontal cortex (specifically the ventromedial prefrontal cortex and anterior cingulate) and the basolateral amygdala leads to deficient top-down inhibitory control over threat-processing circuits. Alterations in gamma-aminobutyric acid (GABA-A) receptor sensitivity and central serotonergic signaling are strongly implicated.`,
      keyPoints: [
        'Requires excessive, uncontrollable worry across multiple domains for at least 6 months',
        'Diagnosis necessitates at least 3 of 6 somatic symptoms: restlessness, fatigue, poor concentration, irritability, muscle tension, sleep disturbance',
        'Muscle tension is the somatic hallmark distinguishing GAD from major depressive episodes',
        'Borkovec\'s avoidance theory posits that verbal worry blunts autonomic processing of emotional imagery',
        'Frontolimbic dysregulation impairs top-down prefrontal inhibition of amygdala threat reactivity',
        'First-line interventions: Cognitive Behavioural Therapy (CBT) and SSRIs/SNRIs'
      ],
      types: [
        'Generalised Anxiety Disorder (Primary)',
        'GAD with Somatosensory Amplification',
        'Late-Onset GAD in Older Adults',
        'Anxious Distress Specifier'
      ],
      symptoms: [
        'Persistent, uncontrollable apprehension regarding mundane life events',
        'Chronic motor and muscular tension (neck stiffness, clenched jaw, tension headaches)',
        'Autonomic hyperarousal, fatigue, and persistent restlessness',
        'Gastrointestinal distress, indigestion, and irritable bowel symptoms',
        'Severely disrupted sleep architecture, sleep onset delay, and unrefreshing rest'
      ],
      psychologists: [
        'Thomas Borkovec — Formulated the cognitive avoidance theory of worry in GAD',
        'David M. Clark — Extended cognitive models of panic and anxiety disorders'
      ],
      examples: [
        'An accountant who spends four hours nightly catastrophizing over minor emails, developing severe tension migraines and chronic exhaustion',
        'A parent constantly convinced that children are in imminent lethal danger despite safe circumstances, repeatedly telephoning schools'
      ],
      treatment: 'Gold-standard intervention combines Cognitive Behavioural Therapy (worry exposure, behavioural experiments, tolerance of uncertainty) with pharmacotherapy (SSRIs, SNRIs). Relaxation training (progressive muscle relaxation) targets somatic tension.',
      summary: 'GAD is a chronic disorder defined by pervasive, uncontrollable worry lasting ≥6 months with at least three somatic signs of tension. Frontolimbic decoupling and cognitive intolerance of uncertainty sustain the condition, which responds effectively to CBT and serotonergic agents.',
      mnemonic: 'FIRMS-C — Fatigue · Irritability · Restlessness · Muscle tension · Sleep disturbance · Concentration difficulty',
      codes: { icd10cm: ['F41.1'], icd11: ['6B00'], note: 'DSM-5-TR 300.02 Generalised Anxiety Disorder' },
      criteria: [
        'Excessive anxiety and worry occurring more days than not for at least 6 months about multiple life domains',
        'The individual finds it difficult to control the worry',
        'Accompanied by ≥3 of 6 somatic symptoms: restlessness, fatigue, impaired concentration, irritability, muscle tension, sleep disturbance',
        'Causes clinically significant distress or impairment in social, occupational, or other functional areas',
        'Not attributable to the physiological effects of a substance or another general medical condition'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of GAD in global epidemiological surveys is approximately 4.3–5.7% (Kessler et al., 2005). The National Mental Health Survey of India (2016) reported that anxiety disorders represent the most prevalent class of psychiatric conditions, with women diagnosed approximately twice as often as men.',
        stats: [
          { claim: 'Lifetime prevalence of GAD in adult population', value: '≈ 5.7%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence ratio of women to men diagnosed with GAD', value: '≈ 2:1', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Heritability estimated at approximately 30–32%', 'GABA-A receptor subunit alterations', 'Dysregulated autonomic flexibility (reduced heart rate variability)'],
        psychological: ['Intolerance of uncertainty', 'Metacognitive beliefs about worry', 'Avoidance of emotional contrast'],
        sociocultural: ['Rapid socioeconomic transitions', 'Chronic economic precarity', 'Traumatic childhood life events'],
        integrative: 'Genetic vulnerability to neuroticism interacts with early adversity and metacognitive habits to sustain chronic threat appraisal.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Hypoactive ventromedial prefrontal cortex (vmPFC) coupled with hyperactive basolateral amygdala reflects impaired habituation to non-threatening cues.'
      },
      differential: [
        { vs: 'Major Depressive Disorder', distinguishingFeature: 'While both share fatigue and concentration difficulties, GAD is dominated by forward-looking anxious anticipation, whereas depression is defined by past-focused loss, despair, and pervasive anhedonia.' },
        { vs: 'Obsessive-Compulsive Disorder', distinguishingFeature: 'GAD worries focus on realistic, mundane concerns (health, money, family) without ego-dystonic intrusive rituals, whereas OCD features bizarre or ego-dystonic obsessions accompanied by neutralizing compulsions.' }
      ],
      comorbidity: ['major-depression', 'panic', 'phobias', 'social-anxiety'],
      caseFile: {
        title: 'Case Vignette: The Burden of Perpetual Vigilance',
        composite: true,
        text: 'Sunita, a 38-year-old administrative manager, presented with a two-year history of debilitating exhaustion and constant tension headaches. She reported that from the moment she wakes, her mind generates an uninterrupted chain of catastrophic forecasts: her train will derail, her department will be liquidated, or her son will fall fatally ill at school. She acknowledges that these fears are statistically irrational, yet she spends three hours each evening reorganizing household emergency binders to feel momentarily safe. Physical exams revealed elevated blood pressure, severe trapezial myofascial knots, and chronic insomnia.',
        questions: [
          'Which diagnostic criteria for GAD are clearly evidenced in Sunita\'s presentation?',
          'How does Sunita\'s use of emergency binders illustrate behavioural avoidance and safety behaviours?'
        ]
      },
      myths: [
        { myth: 'GAD is simply having a naturally "worrisome" personality and is not a genuine disorder.', fact: 'GAD is a recognized neurobiological condition characterized by frontolimbic network decoupling, profound autonomic strain, and measurable occupational disability.', refId: 'apa2022' },
        { myth: 'Worrying in GAD helps people solve practical problems more effectively.', fact: 'Research by Borkovec demonstrates that worry in GAD is abstract and perseverative, impairing effective problem-solving and functioning as an emotional avoidance strategy.', refId: 'kessler2005' },
        { myth: 'Relaxation techniques alone are sufficient to cure severe GAD.', fact: 'While relaxation reduces somatic tension, cognitive restructuring and intolerance of uncertainty exposure in CBT are required to dismantle core worry cycles.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [2, 25],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Criteria of GAD', points: ['DSM-5-TR duration (≥6 months) and uncontrollability', 'Six somatic symptoms (FIRMS-C) with requirement of ≥3', 'Exclusion of medical causes'] },
          { heading: 'Etiology & Neurobiology', points: ['Borkovec\'s cognitive avoidance theory', 'Intolerance of uncertainty', 'Frontolimbic prefrontal-amygdala decoupling and GABAergic transmission'] },
          { heading: 'Differential Diagnosis & Treatment', points: ['Distinction from OCD, Panic, and MDD', 'CBT protocols (worry exposure, behavioural experiments)', 'First-line pharmacotherapy (SSRIs/SNRIs)'] }
        ],
        modelAnswer: 'Generalised Anxiety Disorder (GAD; DSM-5-TR code 300.02 / ICD-10 F41.1) is characterized by persistent, excessive, and uncontrollable worry occurring on more days than not for at least six months across numerous life domains, such as occupational performance, finances, and family health.\n\nTo meet formal DSM-5-TR diagnostic criteria, the worry must be associated with at least three of the following six somatic symptoms (only one is required in pediatric presentations): (1) restlessness or feeling keyed up, (2) being easily fatigued, (3) difficulty concentrating, (4) irritability, (5) muscle tension, and (6) sleep disturbance. Muscle tension serves as a key physiological marker differentiating GAD from depressive syndromes.\n\nEtiologically, cognitive models highlight Borkovec\'s avoidance theory, which posits that abstract verbal worry blunts the visceral autonomic distress of vivid emotional imagery, paradoxically preventing emotional extinction. Intolerance of uncertainty acts as a cognitive catalyst, leading individuals to interpret ambiguity as severe threat. Neurobiologically, functional neuroimaging demonstrates reduced functional connectivity between the ventromedial prefrontal cortex (vmPFC) and the basolateral amygdala, leading to failure of top-down inhibitory control over threat-processing circuits. Heritability is estimated at approximately 30%, linked to altered GABAergic and serotonergic neurotransmission.\n\nTreatment integrates evidence-based Cognitive Behavioural Therapy (targeting metacognitive beliefs, uncertainty tolerance, and situational exposures) with first-line pharmacotherapy (SSRIs like escitalopram and sertraline, or SNRIs like venlafaxine).',
        shortNote: 'GAD is a chronic anxiety disorder characterized by uncontrollable, pervasive worry lasting ≥6 months with ≥3 of 6 somatic symptoms: restlessness, fatigue, concentration problems, irritability, muscle tension, and sleep disturbance. Treatment utilizes CBT and SSRIs/SNRIs.',
        mnemonics: ['FIRMS-C: Fatigue, Irritability, Restlessness, Muscle tension, Sleep disturbance, Concentration difficulty'],
        keyTerms: ['Free-floating anxiety', 'Intolerance of uncertainty', 'Borkovec avoidance model', 'Frontolimbic decoupling', 'GABA-A receptors', 'CBT']
      },
      related: ['panic', 'phobias', 'ocd', 'ptsd'],
      refs: ['apa2022', 'who2022', 'kessler2005', 'clark1986', 'gururaj2016'],
      lastVerified: '2026-10'
    },
    {
      id: 'panic',
      volume: 'II',
      order: 2,
      template: 'disorder',
      category: 'Anxiety Disorders',
      icon: 'alert-triangle',
      name: 'Panic Disorder & Agoraphobia',
      preview: 'Abrupt surges of intense terror, autonomic surges, and fear of catastrophic physical collapse.',
      definition: 'Panic Disorder is marked by recurrent, unexpected panic attacks—abrupt surges of intense fear or discomfort peaking within minutes—followed by at least one month of persistent concern about additional attacks or maladaptive behavioural changes designed to avoid them.',
      explanation: `### Phenomenology of the Panic Attack
A panic attack is a discrete, abrupt surge of intense fear or overwhelming physiological discomfort that reaches a peak within minutes. During this period, the sympathetic nervous system unleashes a massive fight-or-flight cascade. According to the DSM-5-TR (ICD-10 F41.0), an attack requires the abrupt onset of at least 4 of 13 somatic and cognitive symptoms:
- Palpitations, pounding heart, or accelerated heart rate
- Sweating and diaphoresis
- Trembling or shaking
- Sensations of shortness of breath or smothering
- Feelings of choking
- Chest pain or discomfort
- Nausea or abdominal distress
- Feeling dizzy, unsteady, lightheaded, or faint
- Chills or heat sensations
- Paresthesias (numbness or tingling sensations)
- Derealization (feelings of unreality) or depersonalization (detached from oneself)
- Fear of losing control or "going crazy"
- Fear of dying

### Panic Disorder vs Agoraphobia
Panic attacks can occur within the context of any anxiety, trauma, or mood disorder. However, Panic Disorder is diagnosed only when attacks occur unexpectedly ("out of the blue") and are followed by at least one month of persistent anticipatory anxiety regarding future attacks or catastrophic consequences (e.g., having a heart attack), or a significant maladaptive change in behaviour. In DSM-5, Agoraphobia (marked fear of public spaces, transportation, enclosed places, lines, or being outside alone where escape might be difficult) is classified as an independent diagnosis that may or may not co-occur with Panic Disorder.

### Cognitive Theory: Catastrophic Misinterpretation
David M. Clark\'s (1986) seminal cognitive model demonstrates that panic attacks arise when individuals catastrophically misinterpret benign physiological sensations. Normal fluctuations in autonomic activity (e.g., palpitations from climbing stairs or mild hyperventilation from stuffy air) are perceived as impending physical or mental disaster ("My heart is failing," "I am having a stroke"). This cognitive misappraisal triggers an escalation of anxiety, releasing more adrenaline and intensifying the somatic sensations, thereby locking the individual into a self-perpetuating vicious spiral.

### Neurobiology: Brainstem Hypersensitivity and the Locus Coeruleus
Donald Klein\'s (1993) suffocation false alarm theory highlights hypersensitive carbon-dioxide sensors in the brainstem (medulla and locus coeruleus). The locus coeruleus, the brain\'s primary norepinephrine factory, fires precipitously in response to perceived hypoxia, activating instantaneous hyperventilation, tachycardia, and catastrophic dread. Amygdala hyper-reactivity subsequently attaches conditioned fear to interoceptive bodily cues.`,
      keyPoints: [
        'Panic attack: abrupt surge of intense fear peaking within minutes with ≥4 of 13 cardinal symptoms',
        'Panic Disorder requires recurrent unexpected attacks followed by ≥1 month of anticipatory dread or avoidant behavioural changes',
        'DSM-5 separated Agoraphobia into an independent diagnostic category that can co-occur with Panic Disorder',
        'Clark\'s cognitive model explains panic through catastrophic misinterpretation of normal somatic sensations',
        'Klein\'s suffocation false alarm theory links panic to brainstem and locus coeruleus hypersensitivity',
        'First-line treatment: CBT featuring Interoceptive Exposure, alongside SSRIs/SNRIs'
      ],
      types: [
        'Panic Disorder without Agoraphobia',
        'Panic Disorder with Agoraphobia',
        'Agoraphobia (Independent Diagnosis)',
        'Nocturnal Panic (Attacks arising from deep sleep)'
      ],
      symptoms: [
        'Tachycardia, palpitations, and pounding pulse',
        'Dyspnea, hyperventilation, and air hunger sensations',
        'Paresthesias, perioral numbness, and peripheral tingling',
        'Derealization, depersonalization, and unreality feelings',
        'Catastrophic fear of immediate death, stroke, or psychiatric collapse'
      ],
      psychologists: [
        'David M. Clark (1986) — Cognitive model of panic and catastrophic misinterpretation',
        'Donald F. Klein (1993) — Formulated the suffocation false alarm theory of panic'
      ],
      examples: [
        'A university lecturer experiencing sudden tachycardia and dyspnea while presenting, fleeing the room convinced she was dying of a cardiac arrest',
        'An individual who ceases riding the metro, avoiding crowded grocery stores and elevators due to terror of being unable to escape during a panic attack'
      ],
      treatment: 'CBT with Interoceptive Exposure (systematically inducing bodily sensations like spinning in a chair or breathing through a straw to break the fear-of-fear cycle) is the gold standard, alongside SSRIs (sertraline, paroxetine) or SNRIs.',
      summary: 'Panic Disorder involves recurrent unexpected panic surges followed by ≥1 month of anticipatory dread. Clark\'s cognitive model and Klein\'s locus coeruleus false alarm hypothesis explain the somatic spiral, treated through interoceptive CBT exposure.',
      mnemonic: 'STUDENTS FEAR Dying: Sweating · Trembling · Unsteadiness · Dyspnea · Elevated HR · Nausea · Tingling · Suffocation · Fear of Dying',
      codes: { icd10cm: ['F41.0'], icd11: ['6B01'], note: 'DSM-5-TR 300.01 Panic Disorder' },
      criteria: [
        'Recurrent unexpected panic attacks with ≥4 of 13 somatic and cognitive symptoms',
        'At least one attack has been followed by 1 month (or more) of persistent concern about additional attacks or consequences',
        'A significant maladaptive change in behaviour related to the attacks (e.g., avoiding exercise or unfamiliar locations)',
        'The disturbance is not attributable to the physiological effects of a substance (e.g., caffeine intoxication) or medical condition (e.g., pheochromocytoma, hyperthyroidism)',
        'Not better explained by another mental disorder (e.g., not occurring only in response to feared social situations)'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Panic Disorder is approximately 2–3% in North American and European studies (Kessler et al., 2005). The National Mental Health Survey of India (2016) noted significant clinical under-recognition, with patients frequently presenting to cardiology emergency departments rather than psychiatric services.',
        stats: [
          { claim: 'Lifetime prevalence of Panic Disorder', value: '≈ 2.7%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Female-to-male clinical diagnosis ratio', value: '≈ 2:1', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Locus coeruleus noradrenergic hyper-responsiveness', 'Hypersensitive medullary respiratory control circuits', 'Genetic heritability estimated at 43%'],
        psychological: ['Anxiety sensitivity (fear of anxiety-related bodily sensations)', 'Catastrophic misinterpretation of interoceptive cues'],
        sociocultural: ['Stressful life transitions', 'Bereavement and attachment ruptures in adolescence'],
        integrative: 'Neurobiological respiratory hypersensitivity combined with high anxiety sensitivity produces acute panic spirals.'
      },
      neuro: {
        regions: ['cerebellum', 'temporal'],
        note: 'Hyperactivation of the locus coeruleus in the brainstem coupled with exaggerated central amygdala reactivity drives the massive autonomic sympathetic surge.'
      },
      differential: [
        { vs: 'Somatic Medical Emergencies (Myocardial Infarction, Pheochromocytoma)', distinguishingFeature: 'Medical emergencies demonstrate abnormal electrocardiograms (ECGs), elevated cardiac enzymes (troponin), or catecholamine metabolites, whereas panic displays normal cardiovascular anatomy despite extreme physiological arousal.' },
        { vs: 'Specific Phobia', distinguishingFeature: 'Specific phobia panic attacks are completely predictable and cued only by exposure to the phobic stimulus (e.g., spiders, heights), whereas Panic Disorder features unexpected, un-cued attacks.' }
      ],
      comorbidity: ['gad', 'major-depression', 'substance-use'],
      caseFile: {
        title: 'Case Vignette: The Emergency Room Cycle',
        composite: true,
        text: 'Dev, a 31-year-old financial analyst, was rushed to the emergency department three times in two weeks. Each episode began abruptly with chest tightness, dizziness, profuse sweating, and a heart rate exceeding 140 bpm. Convinced he was experiencing a fatal coronary event, Dev underwent exhaustive cardiac workups, echocardiograms, and Holter monitoring, all of which returned normal findings. Terrified of a recurring attack, Dev ceased all cardiovascular exercise, began carrying a blood pressure monitor everywhere, and refused to drive on expressways.',
        questions: [
          'How does Dev\'s presentation fulfill the diagnostic criteria for Panic Disorder with interoceptive avoidance?',
          'How does carrying a blood pressure monitor serve as a "safety behaviour" that maintains panic disorder?'
        ]
      },
      myths: [
        { myth: 'Panic attacks can cause cardiac arrest or physical asphyxiation.', fact: 'A panic attack is a healthy sympathetic fight-or-flight surge; while intensely distressing, it is physically harmless and naturally self-limiting.', refId: 'clark1986' },
        { myth: 'Paper bag breathing is the recommended clinical first aid for all panic attacks.', fact: 'Rebreathing into a paper bag carries medical risks of hypoxia and reinforces panic catastrophizing; modern CBT teaches slow diaphragmatic paced breathing.', refId: 'who2022' },
        { myth: 'People with agoraphobia are simply afraid of open fields.', fact: 'Agoraphobia is the fear of being in spaces (public transport, crowds, bridges) where escape might be difficult or help unavailable should panic-like symptoms develop.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [2, 22],
        marks: 15,
        structure: [
          { heading: 'Clinical Features of Panic Disorder', points: ['Symptom surge peaking in minutes', 'Thirteen DSM-5-TR symptoms (≥4 required)', 'The 1-month anticipatory anxiety and behavioural modification criteria'] },
          { heading: 'Theoretical and Neurobiological Models', points: ['Clark\'s cognitive model of catastrophic misinterpretation', 'Klein\'s suffocation false alarm theory and locus coeruleus norepinephrine release'] },
          { heading: 'Treatment and Interoceptive Exposure', points: ['CBT and interoceptive desensitization rationale', 'Safety behaviour elimination', 'Pharmacotherapy (SSRIs, dangers of long-term benzodiazepine dependence)'] }
        ],
        modelAnswer: 'Panic Disorder (DSM-5-TR 300.01 / ICD-10 F41.0) is characterized by recurrent unexpected panic attacks accompanied by persistent concern about additional attacks or maladaptive behavioural alterations to avoid them.\n\nA panic attack is an abrupt surge of intense fear or extreme physiological discomfort peaking within minutes. To satisfy DSM-5-TR criteria, the attack must involve at least 4 of 13 cardinal symptoms: palpitations, sweating, trembling, shortness of breath, feelings of choking, chest pain, nausea, dizziness, chills/heat sensations, paresthesias, derealization/depersonalization, fear of losing control, and fear of dying. Following the attack, the individual must exhibit at least one month of persistent worry about further attacks or catastrophic implications (e.g., heart attacks), or significant avoidant behavioural adaptations.\n\nCognitively, David M. Clark (1986) formulated the model of catastrophic misinterpretation. Individuals with high anxiety sensitivity misinterpret benign physiological sensations (such as tachycardia from climbing stairs or mild lightheadedness from hyperventilation) as imminent medical disasters. This catastrophic misinterpretation fuels sympathetic autonomic arousal, releasing catecholamines that intensify somatic sensations, resulting in an escalating panic loop. Neurobiologically, Donald Klein\'s (1993) suffocation false alarm hypothesis links panic to hypersensitive carbon dioxide and lactate chemoreceptors in the brainstem. The locus coeruleus fires acutely, flooding the forebrain with norepinephrine.\n\nThe gold-standard psychological treatment is Cognitive Behavioural Therapy incorporating Interoceptive Exposure. Patients are guided through deliberate physical exercises (hyperventilating, spinning, breathing through straws) to experience feared sensations in a safe setting, extinguishing the conditioned fear-of-fear cycle. First-line pharmacotherapies include SSRIs and SNRIs.',
        shortNote: 'Panic Disorder involves recurrent unexpected panic attacks (surges peaking in minutes with ≥4 of 13 symptoms) followed by ≥1 month of anticipatory dread or avoidant adaptations. Clark\'s cognitive model explains panic through catastrophic misinterpretation of somatic sensations, successfully treated with interoceptive exposure CBT.',
        mnemonics: ['STUDENTS FEAR: Sweating, Trembling, Unsteadiness, Dyspnea, Elevated HR, Nausea, Tingling, Suffocation, Fear of dying'],
        keyTerms: ['Panic attack', 'Catastrophic misinterpretation', 'Clark\'s cognitive model', 'Suffocation false alarm', 'Locus coeruleus', 'Interoceptive exposure', 'Agoraphobia']
      },
      related: ['gad', 'phobias', 'ocd', 'ptsd'],
      refs: ['apa2022', 'who2022', 'clark1986', 'klein1993', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'phobias',
      volume: 'II',
      order: 3,
      template: 'disorder',
      category: 'Anxiety Disorders',
      icon: 'shield',
      name: 'Specific Phobias & Social Anxiety Disorder',
      preview: 'Irrational stimulus-cued terror, social evaluative dread, and conditioned avoidance.',
      definition: 'A phobia is an intense, persistent, and irrational fear of a specific object, activity, or social situation that poses little or no actual threat. The exposure to the phobic stimulus provokes immediate anxiety, and the individual avoids the situation or endures it with intense distress for at least six months.',
      explanation: `### Specific Phobia: Diagnostic Subtypes
Specific Phobia (DSM-5-TR 300.29 / ICD-10 F40.2) is characterized by marked, unreasonable fear or anxiety about a specific object or situation. The fear is disproportionate to the actual danger, lasts ≥6 months, and causes significant functional impairment. The DSM-5-TR categorizes specific phobias into five major subtypes:
1. Animal Type (spiders, snakes, dogs, insects)
2. Natural Environment Type (heights, storms, water)
3. Blood-Injection-Injury (BII) Type (injections, blood, medical procedures)
4. Situational Type (airplanes, elevators, enclosed spaces)
5. Other Type (choking, vomiting, loud sounds)

### The Unique Physiology of Blood-Injection-Injury Phobia
While most phobias produce an exclusively sympathetic fight-or-flight acceleration (tachycardia, hypertension), the Blood-Injection-Injury (BII) subtype displays a unique biphasic vasovagal response. An initial brief rise in heart rate is followed by a precipitous drop in blood pressure and heart rate, leading to vasovagal syncope (fainting). Consequently, standard exposure must be modified with applied tension techniques to maintain arterial pressure.

### Social Anxiety Disorder (Social Phobia)
Social Anxiety Disorder (DSM-5-TR 300.23 / ICD-10 F40.10; historically termed "social phobia") involves marked fear or anxiety regarding one or more social situations in which the individual is exposed to potential scrutiny by others. Feared situations include social interactions (conversing with strangers), being observed (eating or working), and performing in front of others (public speaking). The individual fears that they will act in a way or show anxiety symptoms (blushing, trembling, sweating) that will be negatively evaluated (humiliating, embarrassing, rejecting).

### Etiology and Mowrer's Two-Stage Learning Model
Mowrer\'s (1960) two-factor theory provides the foundation for understanding phobic acquisition:
1. Classical Conditioning: A neutral stimulus (CS, e.g., a dog) is paired with a traumatic or fearful unconditioned stimulus (UCS, e.g., being bitten), creating a conditioned fear response (Watson & Rayner, 1920).
2. Operant Conditioning: The individual avoids the phobic object. Escaping the phobic stimulus immediately terminates the unpleasant feeling of anxiety, providing negative reinforcement. Because the individual avoids the stimulus, the fear never has the opportunity to extinguish naturally.

Seligman\'s evolutionary preparedness theory explains why humans develop phobias far more readily toward evolutionary hazards (spiders, heights, snakes) than toward modern lethal hazards (electrical outlets, automobiles).`,
      keyPoints: [
        'Specific phobia involves disproportionate fear lasting ≥6 months across five clinical subtypes',
        'Blood-Injection-Injury (BII) subtype uniquely features a biphasic vasovagal drop causing fainting',
        'Social Anxiety Disorder involves intense fear of negative evaluation and scrutiny in social settings',
        'Mowrer\'s two-factor theory: phobias are acquired via classical conditioning and maintained via operant negative reinforcement',
        'Seligman\'s preparedness theory explains evolutionary predisposition to fear snakes, heights, and dark spaces',
        'Treatment: Systematic Desensitization (Wolpe) and in vivo Exposure Therapy'
      ],
      types: [
        'Specific Phobia: Animal Type',
        'Specific Phobia: Natural Environment Type',
        'Specific Phobia: Blood-Injection-Injury (BII) Type',
        'Specific Phobia: Situational Type',
        'Social Anxiety Disorder (Generalized / Performance Only)'
      ],
      symptoms: [
        'Immediate intense terror or panic upon exposure to the feared object',
        'Active avoidance behaviours that severely constrain personal routines',
        'Severe anticipatory dread days before entering a feared scenario',
        'Biphasic vasovagal syncope (fainting) specifically in BII phobia',
        'Intense autonomic blushing, trembling, and nausea in social scrutiny'
      ],
      psychologists: [
        'Joseph Wolpe (1958) — Developed Systematic Desensitization based on reciprocal inhibition',
        'John B. Watson & Rosalie Rayner (1920) — Little Albert experiment demonstrating conditioned phobias',
        'Martin Seligman (1971) — Evolutionary preparedness theory of phobias'
      ],
      examples: [
        'An executive unable to accept a global promotion because flying on commercial airplanes induces incapacitating panic (Situational Phobia)',
        'A medical student who faints during routine phlebotomy labs due to biphasic vasovagal drop (BII Phobia)'
      ],
      treatment: 'Systematic desensitization (Wolpe, 1958) using an anxiety hierarchy paired with reciprocal inhibition, in vivo graded exposure, and applied muscle tension (for BII phobia). For social anxiety, CBT with social cognitive restructuring and exposure is primary.',
      summary: 'Phobias represent irrational, stimulus-bound terror lasting ≥6 months. Mowrer\'s two-factor theory explains their acquisition and operant maintenance. Wolpe\'s systematic desensitization and graded exposure provide empirical cure.',
      mnemonic: 'ANBSO — Animal · Natural environment · Blood-injury · Situational · Other',
      codes: { icd10cm: ['F40.2', 'F40.10'], icd11: ['6B03', '6B04'], note: 'DSM-5-TR 300.29 Specific Phobia; 300.23 Social Anxiety Disorder' },
      criteria: [
        'Marked fear or anxiety about a specific object or situation',
        'The phobic object or situation almost always provokes immediate fear or anxiety',
        'The phobic object or situation is actively avoided or endured with intense fear',
        'The fear is out of proportion to the actual danger posed by the specific object or situation',
        'The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more',
        'Causes clinically significant distress or functional impairment'
      ],
      epidemiology: {
        text: 'Specific phobias are among the most common psychiatric conditions, with a lifetime prevalence of approximately 12.5% in the general population (Kessler et al., 2005). Social Anxiety Disorder exhibits a lifetime prevalence of 12.1%, with onset typically in early adolescence.',
        stats: [
          { claim: 'Lifetime prevalence of Specific Phobias', value: '12.5%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Lifetime prevalence of Social Anxiety Disorder', value: '12.1%', refId: 'kessler2005', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Evolutionary preparedness for survival threats', 'Autonomic vasovagal hyper-reflexivity in BII phobia'],
        psychological: ['Classical conditioning of traumatic associations', 'Operant negative reinforcement through avoidance', 'Cognitive attentional bias toward social threat cues'],
        sociocultural: ['Observational learning / vicarious conditioning from anxious caregivers', 'Cultural expectations regarding modesty versus self-assertion'],
        integrative: 'Genetic biological vulnerability combines with classical conditioning experiences and operant avoidance habits.'
      },
      neuro: {
        regions: ['temporal'],
        note: 'Hyper-reactivity of the basolateral amygdala in response to visual phobic stimuli without adequate top-down prefrontal moderation.'
      },
      differential: [
        { vs: 'Panic Disorder', distinguishingFeature: 'Panic disorder features un-cued unexpected panic surges occurring in benign settings, whereas phobias provoke fear exclusively when anticipating or encountering the specific feared stimulus.' },
        { vs: 'Agoraphobia', distinguishingFeature: 'Agoraphobia involves fear of multiple public settings where escape is perceived as impossible should panic occur, whereas specific situational phobias focus exclusively on the specific setting itself (e.g., plane crash in aviophobia).' }
      ],
      comorbidity: ['gad', 'panic', 'major-depression'],
      caseFile: {
        title: 'Case Vignette: Overcoming the Fear of Dogs',
        composite: true,
        text: 'Rohan, a 19-year-old engineering student, was bitten by a stray dog at age seven. For twelve years, Rohan has refused to walk through parks, cross residential neighborhoods, or visit friends who own pets. Even hearing a distant dog bark causes palpitations, hyperventilation, and immediate flight across traffic lanes. In therapy, his clinician construct a graded fear hierarchy: beginning with viewing line drawings of dogs, progressing to photographs, observing a caged dog across a lawn, and concluding with petting a gentle therapy dog on a leash.',
        questions: [
          'Identify the unconditioned stimulus (UCS), conditioned stimulus (CS), and conditioned response (CR) in Rohan\'s case.',
          'How does Wolpe\'s concept of reciprocal inhibition explain why relaxation dampens conditioned phobic anxiety?'
        ]
      },
      myths: [
        { myth: 'Phobias are simply minor fears that everyone experiences and can be overcome by willpower alone.', fact: 'Clinical phobias involve severe, involuntary neurobiological fear reactions that persistently disable lifestyle routines without structured exposure therapy.', refId: 'wolpe1958' },
        { myth: 'Exposure therapy re-traumatizes patients by forcing them into dangerous situations.', fact: 'Evidence-based exposure therapy is always collaborative, graded, and paced, systematically dismantling fear schemas without psychological injury.', refId: 'foa1986' },
        { myth: 'People with Blood-Injection-Injury phobia faint because of hysterical anxiety.', fact: 'BII fainting is caused by an objective physiological vasovagal reflex characterized by sudden parasympathetic bradycardia and hypotension.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [1, 14, 23],
        marks: 15,
        structure: [
          { heading: 'Definition and Subtypes of Specific Phobias', points: ['DSM-5-TR criteria (6 months duration, disproportionate fear)', 'Five subtypes: Animal, Natural Environment, BII, Situational, Other', 'Distinct vasovagal syncope in BII phobia'] },
          { heading: 'Etiological Theories', points: ['Watson & Rayner (Little Albert) classical conditioning', 'Mowrer\'s two-stage model: classical acquisition and operant avoidance', 'Seligman\'s evolutionary preparedness theory'] },
          { heading: 'Treatment Modalities', points: ['Joseph Wolpe\'s Systematic Desensitization and reciprocal inhibition', 'In vivo graded exposure and flooding techniques', 'Applied tension protocol for BII phobia'] }
        ],
        modelAnswer: 'A Phobia (DSM-5-TR 300.29 / ICD-10 F40.2) is defined as an intense, persistent, and irrational fear of a specific object, creature, or situation that poses no genuine objective danger. Exposure to the phobic stimulus provokes immediate autonomic terror, and the situation is actively avoided or endured with severe distress for at least six months, producing significant functional impairment.\n\nThe DSM-5-TR recognizes five clinical subtypes of Specific Phobia: (1) Animal type (e.g., snakes, dogs), (2) Natural Environment type (e.g., heights, water), (3) Blood-Injection-Injury (BII) type, (4) Situational type (e.g., elevators, airplanes), and (5) Other type. The BII subtype is biologically unique: whereas other phobias evoke sympathetic tachycardia and fight-or-flight arousal, BII phobia triggers an initial sympathetic spike followed by a precipitous biphasic parasympathetic vasovagal collapse, dropping blood pressure and heart rate, frequently resulting in syncope (fainting).\n\nEtiologically, Mowrer\'s (1960) two-factor theory demonstrates how learning principles sustain phobic pathology. First, a neutral stimulus becomes paired with a traumatic or noxious event through classical conditioning (as classically demonstrated in Watson and Rayner\'s 1920 Little Albert experiment). Second, the individual avoids the conditioned stimulus. Escaping the phobic cue immediately relieves anxiety; this reduction in unpleasant arousal provides powerful operant negative reinforcement, preserving the phobia by precluding natural extinction. Martin Seligman added evolutionary preparedness theory, showing that humans are biologically primed to acquire fears of ancestral threats (snakes, darkness, heights).\n\nTreatment is dominated by behavioural exposure therapies. Joseph Wolpe (1958) pioneered Systematic Desensitization based on reciprocal inhibition: pairing a relaxation response incompatible with anxiety with a graded hierarchy of feared stimuli. In vivo graded exposure remains the most effective clinical intervention.',
        shortNote: 'A phobia is an irrational, persistent fear of a stimulus lasting ≥6 months. Subtypes include Animal, Natural Environment, Blood-Injection-Injury (featuring biphasic vasovagal syncope), Situational, and Other. Mowrer\'s two-factor theory explains acquisition (classical conditioning) and maintenance (operant negative reinforcement), treated with Wolpe\'s systematic desensitization.',
        mnemonics: ['ANBSO: Animal, Natural environment, Blood-injury, Situational, Other'],
        keyTerms: ['Specific Phobia', 'Social Anxiety Disorder', 'Mowrer two-factor theory', 'Biphasic vasovagal syncope', 'Systematic desensitization', 'Joseph Wolpe', 'Preparedness theory']
      },
      related: ['gad', 'panic', 'ocd', 'ptsd'],
      refs: ['apa2022', 'who2022', 'watson1920', 'wolpe1958', 'foa1986', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'ocd',
      volume: 'II',
      order: 4,
      template: 'disorder',
      category: 'Anxiety Disorders',
      icon: 'refresh-cw',
      name: 'Obsessive-Compulsive Disorder (OCD)',
      preview: 'Intrusive ego-dystonic obsessions, neutralizing compulsions, and cortico-striatal circuits.',
      definition: 'Obsessive-Compulsive Disorder (OCD) is characterized by the presence of recurrent, intrusive, and unwanted thoughts, urges, or images (obsessions) that cause marked anxiety or distress, alongside repetitive mental or behavioural rituals (compulsions) performed to neutralize the anxiety according to rigid rules.',
      explanation: `### The Separation of OCD from Anxiety Disorders
In DSM-5 and DSM-5-TR (ICD-10 F42.2), Obsessive-Compulsive Disorder was separated from traditional Anxiety Disorders and placed into its own dedicated chapter: Obsessive-Compulsive and Related Disorders (alongside body dysmorphic disorder, hoarding disorder, trichotillomania, and excoriation disorder). This nosological shift recognizes the unique neurocircuitry, phenomenological presentation, and pharmacological response profiles characteristic of OCD.

### Obsessions vs Compulsions
- Obsessions are recurrent, persistent thoughts, urges, or mental images that are experienced as intrusive, unwanted, and ego-dystonic (incompatible with the individual's self-image and core values). Common themes include contamination (germs, chemicals), pathological doubt/responsibility for harm (leaving stoves on, hitting a pedestrian), symmetry/exactness, and taboo thoughts (unacceptable violent, sexual, or blasphemous impulses).
- Compulsions are repetitive physical behaviours (handwashing, checking, ordering) or mental acts (praying, counting, silent phrase repeating) that an individual feels driven to perform in response to an obsession or according to rigid rules. Compulsions are intended to prevent an imagined dreaded event or reduce intense inner distress; however, they are either clearly excessive or not realistically connected to the threat.

The obsessions or compulsions must be time-consuming (taking more than 1 hour per day) or cause clinically significant distress or functional impairment.

### Cognitive Models: Inflated Responsibility and Thought-Action Fusion
Paul Salkovskis (1985) demonstrated that intrusive thoughts are universally experienced by non-clinical populations. In individuals with OCD, however, these intrusions activate dysfunctional cognitive schemas:
1. Inflated Responsibility: The belief that one possesses the power to cause or prevent catastrophic harm unless rituals are performed.
2. Thought-Action Fusion (TAF): The belief that having an immoral thought is morally equivalent to performing the action (Moral TAF), or that thinking about a catastrophe increases the likelihood of its occurrence (Likelihood TAF).

### Neurocircuitry: The CSTC Hyperactive Loop
Neuroimaging consistently implicates hyper-connectivity within the Cortico-Striato-Thalamo-Cortical (CSTC) loop. Specifically, an overactive "error detection" loop connecting the Orbitofrontal Cortex (OFC, which signals danger), the Anterior Cingulate Cortex (ACC, signaling that something is amiss), and the Caudate Nucleus within the striatum fails to filter out intrusive signals, locking the patient into perseverative ritualistic checking.`,
      keyPoints: [
        'OCD features intrusive ego-dystonic obsessions and anxiety-neutralizing compulsions taking >1 hour/day',
        'Separated from Anxiety Disorders in DSM-5 into Obsessive-Compulsive and Related Disorders',
        'Salkovskis cognitive model: inflated responsibility and thought-action fusion drive compulsive rituals',
        'Compulsive rituals provide immediate negative reinforcement, locking the patient into a vicious cycle',
        'Cortico-Striato-Thalamo-Cortical (CSTC) loop hyperactivity underpins persistent error signals',
        'First-line psychological treatment: Exposure and Response Prevention (ERP); pharmacotherapy: high-dose SSRIs'
      ],
      types: [
        'Contamination Obsessions with Cleaning/Washing Compulsions',
        'Harm Obsessions with Checking Compulsions',
        'Symmetry/Ordering Obsessions with Arranging Compulsions',
        'Taboo/Unacceptable Thoughts with Mental Rituals',
        'Specifiers: With Good/Fair Insight, Poor Insight, Absent Insight/Delusional Beliefs'
      ],
      symptoms: [
        'Intrusive, ego-dystonic mental images or doubts that provoke intense anxiety',
        'Repetitive behavioural rituals consuming hours daily (checking, washing, repeating)',
        'Silent mental compulsions (counting sequences, neutralizing phrases)',
        'Extreme avoidance of triggers that might spark intrusive doubts',
        'Persistent dermatological injury (raw, bleeding hands from excessive washing)'
      ],
      psychologists: [
        'Paul M. Salkovskis (1985) — Cognitive-behavioural formulation of inflated responsibility in OCD',
        'Edna B. Foa (1986) — Pioneered Exposure and Response Prevention (ERP) protocols for OCD'
      ],
      examples: [
        'A teacher who checks door locks and stove knobs 40 times before sleeping, spending two hours each night to prevent an imagined fire',
        'An individual who washes their hands with industrial bleach for forty minutes after touching a doorknob, crying while doing so'
      ],
      treatment: 'Exposure and Response Prevention (ERP; Foa & Kozak, 1986)—where patients systematically confront feared obsessional stimuli while strictly refraining from performing the neutralizing compulsion—is the psychological gold standard. High-dose SSRIs or clomipramine are the primary pharmacotherapies.',
      summary: 'OCD is characterized by intrusive obsessions and neutralizing compulsions taking ≥1 hr/day. Hyperactive CSTC frontostriatal loops and cognitive thought-action fusion sustain the cycle, which responds definitively to Exposure and Response Prevention (ERP).',
      mnemonic: 'CSTC — Cortico · Striato · Thalamo · Cortical loop hyperactivity drives OCD rituals',
      codes: { icd10cm: ['F42.2'], icd11: ['6B20'], note: 'DSM-5-TR 300.3 Obsessive-Compulsive Disorder' },
      criteria: [
        'Presence of obsessions, compulsions, or both',
        'Obsessions defined by recurrent, persistent, intrusive, ego-dystonic thoughts, urges, or images causing anxiety',
        'Compulsions defined by repetitive behaviours or mental acts aimed at preventing anxiety according to rigid rules',
        'Obsessions or compulsions are time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment',
        'Symptoms are not attributable to the physiological effects of a substance or medical condition',
        'Specify level of insight: Good/fair, Poor, or Absent/delusional beliefs'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of OCD is approximately 2.3% globally (Kessler et al., 2005). The National Mental Health Survey of India (2016) reported a prevalence of approximately 0.8% in community samples, with onset typically in late adolescence or early twenties.',
        stats: [
          { claim: 'Lifetime prevalence of OCD in adult population', value: '≈ 2.3%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Average time consumed by rituals in severe untreated OCD', value: '> 3–4 hours/day', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Hyperactivity in the Orbitofrontal Cortex (OFC) and Caudate Nucleus (CSTC loop)', 'Serotonergic transporter gene variants', 'Heritability estimated at 45–50% in twin studies'],
        psychological: ['Inflated personal responsibility for harm', 'Thought-action fusion (moral and likelihood)', 'Perfectionism and intolerance of ambiguity'],
        sociocultural: ['Rigid, hyper-punitive religious or moral upbringings amplifying scrupulosity obsessions'],
        integrative: 'Constitutional frontostriatal hyperactivity interacts with hyper-responsible cognitive appraisal schemas.'
      },
      neuro: {
        regions: ['frontal'],
        note: 'Functional neuroimaging reveals hyperactivity in the orbitofrontal cortex (OFC) and anterior cingulate cortex (ACC), which fails to terminate error signaling via striatal caudate filtering.'
      },
      differential: [
        { vs: 'Generalised Anxiety Disorder', distinguishingFeature: 'GAD involves pervasive worries regarding real-life everyday problems (health, work, money), whereas OCD is dominated by bizarre, unrealistic, or ego-dystonic obsessions accompanied by neutralizing rituals.' },
        { vs: 'Obsessive-Compulsive Personality Disorder (OCPD)', distinguishingFeature: 'OCPD is an ego-syntonic personality pattern characterized by pervasive perfectionism and rigidity without true intrusive obsessions or distinct neutralizing compulsions.' }
      ],
      comorbidity: ['major-depression', 'gad', 'social-anxiety', 'tic-disorders'],
      caseFile: {
        title: 'Case Vignette: The Locked Door Dilemma',
        composite: true,
        text: 'Kavita, a 24-year-old software programmer, is unable to arrive at work before 11:00 AM despite waking at 6:00 AM. Her mornings are dominated by an agonizing checking routine: she must inspect the apartment gas valves, taps, and door deadbolt exactly 16 times in sequence. If she loses count or experiences a distracting thought, she feels overwhelming dread that her apartment will explode, murdering her neighbors, and she restarts the cycle from the beginning. While Kavita recognizes intellectually that her fears are irrational (good insight), the urge to check is irresistible.',
        questions: [
          'Differentiate the cognitive obsession from the behavioural compulsion in Kavita\'s presentation.',
          'How would an Exposure and Response Prevention (ERP) hierarchy be constructed to dismantle Kavita\'s checking rituals?'
        ]
      },
      myths: [
        { myth: 'OCD is simply a personality quirk characterized by loving neatness and clean desks.', fact: 'OCD is a debilitating neurobiological disorder driven by terrifying, intrusive thoughts and exhausting, time-consuming rituals that cause intense personal suffering.', refId: 'salkovskis1985' },
        { myth: 'Compulsions should be accommodated by family members to reduce the patient\'s anxiety.', fact: 'Family accommodation of rituals temporarily relieves distress but reinforces the compulsive cycle, worsening long-term disorder severity.', refId: 'foa1986' },
        { myth: 'People with taboo violent obsessions in OCD are dangerous and likely to act on them.', fact: 'Obsessions in OCD are strictly ego-dystonic; patients find the thoughts horrifying and take extreme measures to prevent any possibility of harm.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [2, 10],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Features of OCD', points: ['DSM-5-TR definition of obsessions vs compulsions', 'Ego-dystonic quality and time criteria (>1 hour daily)', 'Insight specifiers'] },
          { heading: 'Cognitive and Neurobiological Etiology', points: ['Salkovskis model: inflated responsibility and thought-action fusion', 'Operant negative reinforcement cycle', 'Cortico-Striato-Thalamo-Cortical (CSTC) loop and orbitofrontal cortex hyperactivity'] },
          { heading: 'Evidence-Based Interventions', points: ['Exposure and Response Prevention (ERP; Foa & Kozak)', 'Mechanism of habituation and inhibitory learning', 'Pharmacotherapy (high-dose SSRIs, clomipramine)'] }
        ],
        modelAnswer: 'Obsessive-Compulsive Disorder (OCD; DSM-5-TR code 300.3 / ICD-10 F42.2) is characterized by the presence of obsessions, compulsions, or both, that are time-consuming (taking more than one hour per day) or cause clinically significant distress or functional impairment.\n\nObsessions are recurrent, persistent thoughts, urges, or images experienced as intrusive and unwanted, generating marked anxiety. They are fundamentally ego-dystonic, meaning they conflict with the patient\'s values and self-identity. Common themes include contamination, pathological doubt, symmetry, and unacceptable aggressive or sexual intrusions. Compulsions are repetitive physical behaviours (e.g., washing, checking, ordering) or mental acts (e.g., counting, repeating phrases silently) that an individual feels compelled to perform to neutralize anxiety or prevent a dreaded catastrophe according to rigid rules.\n\nCognitive models (Salkovskis, 1985) demonstrate that intrusive thoughts occur universally; psychopathology develops when an individual interprets intrusions as catastrophic through inflated personal responsibility and Thought-Action Fusion (the belief that having an immoral thought is ethically equivalent to committing the act, or increases its probability). Performing the compulsion terminates anxiety immediately, providing powerful operant negative reinforcement that perpetuates the cycle.\n\nNeurobiologically, functional MRI reveals hyperactivation within the Cortico-Striato-Thalamo-Cortical (CSTC) loop. The orbitofrontal cortex (OFC) and anterior cingulate cortex (ACC) continuously broadcast erroneous warning signals that the caudate nucleus fails to filter, producing an uncontrollable sensation that "something is wrong."\n\nThe gold-standard psychological treatment is Exposure and Response Prevention (ERP), developed by Edna Foa. Patients confront feared obsessions (exposure) while systematically refraining from neutralizing compulsions (response prevention), enabling inhibitory learning and extinction of conditioned distress.',
        shortNote: 'OCD involves intrusive ego-dystonic obsessions and neutralizing compulsions taking >1 hr/day. Cognitive models highlight inflated responsibility and thought-action fusion; neurobiology implicates hyperactive CSTC frontostriatal loops. First-line therapy is Exposure and Response Prevention (ERP).',
        mnemonics: ['CSTC: Cortico-Striato-Thalamo-Cortical hyperactive error-detection loop'],
        keyTerms: ['Obsessions', 'Compulsions', 'Ego-dystonic', 'Thought-action fusion', 'Inflated responsibility', 'CSTC loop', 'Exposure and Response Prevention (ERP)']
      },
      related: ['gad', 'panic', 'phobias', 'ptsd'],
      refs: ['apa2022', 'who2022', 'salkovskis1985', 'foa1986', 'kessler2005'],
      lastVerified: '2026-10'
    },
    {
      id: 'ptsd',
      volume: 'II',
      order: 5,
      template: 'disorder',
      category: 'Anxiety Disorders',
      icon: 'heart-off',
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      preview: 'Intrusive re-experiencing, trauma avoidance, hyperarousal, and hippocampal alterations.',
      definition: 'Post-Traumatic Stress Disorder (PTSD) is a severe condition that develops following exposure to actual or threatened death, serious injury, or sexual violence. It is defined by four core symptom clusters: intrusive recollections, persistent avoidance, negative alterations in cognitions and mood, and marked alterations in arousal and reactivity lasting more than one month.',
      explanation: `### Traumatic Exposure (Criterion A)
In DSM-5-TR (ICD-10 F43.10), PTSD requires direct or indirect exposure to traumatic events involving actual or threatened death, serious bodily injury, or sexual violence. This encompasses:
1. Directly experiencing the traumatic event
2. Witnessing, in person, the event as it occurred to others
3. Learning that the traumatic event occurred to a close family member or close friend (must have been violent or accidental)
4. Experiencing repeated or extreme exposure to aversive details of traumatic events (e.g., first responders collecting human remains; not through electronic media unless work-related)

### The Four Diagnostic Symptom Clusters
Symptoms must persist for more than one month and encompass four distinct clusters:
- Cluster B: Intrusion Symptoms (≥1 required): Recurrent, involuntary, intrusive distressing memories; traumatic nightmares; dissociative flashback episodes where the individual feels or acts as if the trauma were recurring; intense physiological reactivity to trauma cues.
- Cluster C: Avoidance Symptoms (≥1 required): Persistent avoidance of trauma-related internal memories, thoughts, or feelings, as well as external reminders (people, places, conversations, objects) that trigger recollection.
- Cluster D: Negative Alterations in Cognition and Mood (≥2 required): Inability to recall key features of the trauma (dissociative amnesia); persistent negative beliefs about oneself or the world ("I am bad," "The world is completely dangerous"); distorted blame of self or others; pervasive negative emotional states (horror, anger, guilt); marked anhedonia; estrangement from others; inability to experience positive emotions.
- Cluster E: Alterations in Arousal and Reactivity (≥2 required): Irritable behaviour and angry outbursts; reckless or self-destructive behaviour; hypervigilance; exaggerated startle response; concentration impairment; sleep disturbance.

### Cognitive Model of PTSD
Ehlers and Clark\'s (2000) influential cognitive model demonstrates that PTSD persists when trauma survivors process traumatic memories in a manner that produces a sense of current, impending threat. This occurs through:
1. Poor Contextualization of Trauma Memory: Traumatic events are encoded with high perceptual intensity but fragmented temporal and contextual organization, leading to involuntary perceptual cue-triggered retrieval.
2. Negative Appraisals of Trauma and Its Sequelae: Interpreting trauma memories or post-trauma symptoms (e.g., "I am going crazy," "My soul is permanently shattered") as evidence that life is ruined.

### Neurobiological Circuitry: The Fear Extinction Deficit
Neuroimaging reveals that PTSD is characterized by profound neurocircuitry alterations:
- Amygdala Hyperactivity: Exaggerated basolateral amygdala firing generates continuous sympathetic arousal and fear conditioning.
- Medial Prefrontal Cortex (mPFC / ACC) Hypoactivity: Deficits in top-down inhibitory control over the amygdala prevent normal extinction of conditioned trauma responses.
- Hippocampal Volume Reduction: Sustained neurotoxic exposure to elevated glucocorticoids impairs neurogenesis in the hippocampus, degrading the brain\'s capacity to differentiate past traumatic memory from present safety.`,
      keyPoints: [
        'Requires Criterion A exposure to actual/threatened death, serious injury, or sexual violence',
        'Four cardinal symptom clusters lasting >1 month: Intrusion, Avoidance, Negative cognitions/mood, Hyperarousal',
        'Ehlers & Clark cognitive model: fragmented memory encoding and negative threat appraisals sustain symptoms',
        'Amygdala hyperactivity coupled with medial prefrontal hypoactivity impairs fear extinction',
        'Hippocampal neurotoxic volume loss impairs discrimination between past trauma and present safety',
        'Evidence-based trauma therapies: Trauma-Focused CBT (TF-CBT), Prolonged Exposure (PE), and EMDR'
      ],
      types: [
        'PTSD with Dissociative Symptoms (Depersonalization or Derealization)',
        'PTSD with Delayed Expression (Diagnostic criteria met ≥6 months after trauma)',
        'Complex PTSD (ICD-11: includes disturbances in self-organization, affect dysregulation, relational impairment)',
        'Acute Stress Disorder (Symptoms lasting from 3 days to 1 month following trauma)'
      ],
      symptoms: [
        'Intrusive traumatic memories, nightmares, and dissociative flashbacks',
        'Active avoidance of trauma reminders, thoughts, conversations, and locations',
        'Trauma-related guilt, pervasive negative beliefs, and emotional numbness',
        'Hypervigilance, marked irritability, and exaggerated acoustic startle response',
        'Severe insomnia, terminal sleep awakenings, and concentration deficits'
      ],
      psychologists: [
        'Anke Ehlers & David M. Clark (2000) — Formulated the cognitive model of chronic PTSD',
        'Edna B. Foa (1986) — Developed Prolonged Exposure (PE) therapy for trauma survivors'
      ],
      examples: [
        'A military veteran ducking beneath a table in panic upon hearing fireworks, feeling completely transported back to a combat ambush',
        'A road accident survivor who refuses to enter any motor vehicle for a year and suffers recurrent nightmares of shattering glass'
      ],
      treatment: 'Gold-standard treatments include Trauma-Focused Cognitive Behavioural Therapy (TF-CBT), Prolonged Exposure (PE; Foa), and Eye Movement Desensitization and Reprocessing (EMDR). SSRIs (sertraline, paroxetine) serve as first-line pharmacotherapy.',
      summary: 'PTSD arises from Criterion A life-threatening trauma and involves four clusters—intrusions, avoidance, negative mood/cognitions, and hyperarousal—lasting >1 month. Frontolimbic dysregulation and memory fragmentation sustain threat appraisals, treated via trauma-focused exposure.',
      mnemonic: 'TRAUMA — Traumatic event · Re-experiencing · Avoidance · Unable to function · Month or more · Arousal elevated',
      codes: { icd10cm: ['F43.10'], icd11: ['6B40'], note: 'DSM-5-TR 309.81 Post-Traumatic Stress Disorder' },
      criteria: [
        'Exposure to actual or threatened death, serious injury, or sexual violence (Criterion A)',
        '≥1 intrusion symptom (distressing memories, nightmares, flashbacks, cue reactivity)',
        '≥1 avoidance symptom (avoiding trauma thoughts/feelings or external reminders)',
        '≥2 negative alterations in cognitions and mood (amnesia, negative beliefs, distorted blame, negative affect, anhedonia, detachment)',
        '≥2 alterations in arousal and reactivity (irritability, reckless behaviour, hypervigilance, startle, concentration, sleep)',
        'Duration of disturbance is more than 1 month',
        'Causes clinically significant distress or impairment in functioning'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of PTSD among adults in the United States is approximately 6.8% (Kessler et al., 2005). Prevalence is significantly higher among combat veterans and survivors of physical and sexual assault (reaching 20–30%). In India, post-disaster surveys document high rates following natural catastrophes.',
        stats: [
          { claim: 'Lifetime prevalence of PTSD in general population', value: '6.8%', refId: 'kessler2005', confidence: 'high' },
          { claim: 'Prevalence among survivors of severe interpersonal violence', value: '≈ 25–35%', refId: 'apa2022', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Sensitized amygdala threat responsiveness', 'Hypocortisolemia and dysregulated HPA axis feedback', 'Reduced hippocampal volume and neurogenesis'],
        psychological: ['Data-driven fragmented memory encoding during peri-trauma panic', 'Negative cognitive appraisals of symptoms and self'],
        sociocultural: ['Lack of post-trauma social support', 'Secondary revictimization and community stigma'],
        integrative: 'Peri-traumatic neuroendocrine surge impairs hippocampal contextual binding, leaving intrusive sensory fragments unintegrated.'
      },
      neuro: {
        regions: ['temporal', 'frontal', 'occipital'],
        note: 'Amygdala hyperactivity coupled with medial prefrontal cortex hypoactivity impairs fear extinction, while reduced hippocampal volume impairs context discrimination.'
      },
      differential: [
        { vs: 'Acute Stress Disorder (ASD)', distinguishingFeature: 'Acute Stress Disorder presents with similar traumatic intrusion, avoidance, and arousal symptoms but is diagnosed between 3 days and 1 month following the event; PTSD is diagnosed when symptoms persist beyond 1 month.' },
        { vs: 'Adjustment Disorder', distinguishingFeature: 'Adjustment disorder occurs in response to an ordinary life stressor (divorce, job loss) rather than a Criterion A life-threatening trauma and lacks the full four-cluster symptom profile.' }
      ],
      comorbidity: ['major-depression', 'substance-use', 'gad', 'panic'],
      caseFile: {
        title: 'Case Vignette: The Shattered Horizon',
        composite: true,
        text: 'Arjun, a 29-year-old paramedic, responded to a catastrophic industrial explosion that resulted in multiple fatalities. Three months later, Arjun presented with profound personality change. He experiences intrusive, waking flashbacks triggered by diesel fumes or sirens, where he feels the heat of the fire and hears screams as if happening in real time. He avoids television news, drives twenty miles out of his way to bypass the industrial park, sleeps less than three hours nightly due to terrifying nightmares, and constantly checks building exits in hypervigilance.',
        questions: [
          'How do Arjun\'s symptoms map onto the four DSM-5-TR symptom clusters for PTSD?',
          'Why does symptom persistence beyond one month differentiate Arjun\'s condition from an Acute Stress Reaction?'
        ]
      },
      myths: [
        { myth: 'PTSD occurs exclusively in military combat soldiers.', fact: 'While common in combat veterans, PTSD can develop in anyone exposed to life-threatening events, including vehicular accidents, natural disasters, sexual violence, and severe medical crises.', refId: 'apa2022' },
        { myth: 'Developing PTSD indicates personal weakness or lack of moral resilience.', fact: 'PTSD is a physiological condition driven by frontolimbic neurocircuitry alterations and involuntary fear conditioning resulting from severe trauma.', refId: 'ehlers2000' },
        { myth: 'People with PTSD should be encouraged to recount every graphic detail immediately after a disaster.', fact: 'Psychological debriefing immediately following trauma can heighten arousal and re-traumatize victims; modern guidelines recommend supportive psychological first aid.', refId: 'who2022' }
      ],
      exam: {
        pdfQ: [14],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition and Criterion A', points: ['DSM-5-TR traumatic exposure thresholds', 'Distinction from Acute Stress Disorder (>1 month requirement)'] },
          { heading: 'The Four Symptom Clusters', points: ['Intrusions (memories, nightmares, flashbacks)', 'Avoidance (internal and external reminders)', 'Negative cognitions and mood (amnesia, guilt, anhedonia)', 'Arousal and reactivity (hypervigilance, startle, irritability)'] },
          { heading: 'Cognitive and Neurobiological Models', points: ['Ehlers & Clark cognitive model (memory fragmentation, threat appraisal)', 'Amygdala hyperactivity, medial prefrontal hypoactivity, and hippocampal volume reduction', 'Prolonged Exposure (PE) and Trauma-Focused CBT'] }
        ],
        modelAnswer: 'Post-Traumatic Stress Disorder (PTSD; DSM-5-TR 309.81 / ICD-10 F43.10) is a severe psychiatric condition triggered by exposure to actual or threatened death, serious injury, or sexual violence (Criterion A), whether directly experienced, witnessed, or learned regarding a close family member.\n\nDiagnosis requires that symptoms persist for more than one month across four distinct symptom clusters: (1) Intrusion symptoms (≥1 required), including involuntary distressing memories, nightmares, dissociative flashbacks, and intense physiological reactivity to trauma cues; (2) Avoidance symptoms (≥1 required), characterized by persistent avoidance of internal thoughts/feelings or external people/locations associated with the trauma; (3) Negative alterations in cognitions and mood (≥2 required), including trauma-related amnesia, exaggerated negative worldviews ("no one can be trusted"), distorted self-blame, pervasive negative emotional states, anhedonia, and estrangement from others; and (4) Alterations in arousal and reactivity (≥2 required), including hypervigilance, exaggerated acoustic startle responses, irritability/outbursts, reckless behaviour, and severe insomnia.\n\nEtiologically, Ehlers and Clark\'s (2000) cognitive model explains that trauma memories are encoded under conditions of extreme autonomic terror, leading to perceptual data-driven fragmentation without adequate temporal and autobiographical context. Furthermore, catastrophic appraisals of symptoms (e.g., "I am permanently broken") maintain a sense of current threat. Neurobiologically, neuroimaging demonstrates elevated hyperactivity in the basolateral amygdala, impaired top-down inhibition from the ventromedial prefrontal and anterior cingulate cortices, and reduced hippocampal volume resulting from sustained glucocorticoid neurotoxicity.\n\nFirst-line psychological interventions include Trauma-Focused CBT, Prolonged Exposure (PE; Foa), and Eye Movement Desensitization and Reprocessing (EMDR), which systematically process trauma narratives and achieve fear extinction.',
        shortNote: 'PTSD develops following Criterion A traumatic exposure and requires symptoms across four clusters lasting >1 month: intrusions, avoidance, negative cognitions/mood, and hyperarousal. Neurobiology involves amygdala hyper-reactivity, prefrontal hypoactivity, and hippocampal volume reductions, treated with trauma-focused CBT and prolonged exposure.',
        mnemonics: ['TRAUMA: Traumatic event, Re-experiencing, Avoidance, Unable to function, Month or more, Arousal elevated'],
        keyTerms: ['Criterion A trauma', 'Intrusions', 'Flashbacks', 'Ehlers & Clark model', 'Hypervigilance', 'Prolonged Exposure', 'Fear extinction deficit']
      },
      related: ['gad', 'panic', 'phobias', 'ocd'],
      refs: ['apa2022', 'who2022', 'ehlers2000', 'foa1986', 'kessler2005'],
      lastVerified: '2026-10'
    }
  ];

  VOLUME_II.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
