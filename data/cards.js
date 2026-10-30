/**
 * PsychStudy — The Clinical Atlas
 * Active Recall Flashcards & Spaced Repetition Decks
 * Spanning Volumes I–VI Chapters
 */

(function(global) {
  global.FLASHCARD_DECKS = {
    all: null,
    'psych-disorders': [
      {
        id: 'fc-pd-1',
        topicId: 'psych-disorders',
        term: 'What defines a psychological disorder?',
        def: 'A clinically significant disturbance in cognition, emotion regulation, or behaviour reflecting underlying biological, psychological, or developmental dysfunction, causing distress or disability.',
        ex: 'Pervasive cognitive slowing, executive paralysis, and vocational collapse following severe bereavement.',
        keyPoints: ['Must involve underlying internal dysfunction', 'Causes significant distress or disability', 'Not an expectable cultural reaction to loss'],
        type: 'concept'
      },
      {
        id: 'fc-pd-2',
        topicId: 'psych-disorders',
        term: 'Statistical Rarity vs Clinical Abnormality',
        def: 'Statistical rarity does not define disorder (common disorders like depression are frequent), nor does social unconventionality (eccentricity is not psychopathology).',
        ex: 'High-altitude mountaineering is statistically rare but not a disorder; mild depression is statistically common but clinically significant.',
        keyPoints: ['Common conditions remain clinically profound', 'Deviance without distress/dysfunction is not disorder', 'Diagnostic criteria require functional impairment'],
        type: 'diagnostic'
      },
      {
        id: 'fc-pd-3',
        topicId: 'psych-disorders',
        term: 'The Biopsychosocial Model',
        def: 'An integrative paradigm positing that mental health outcomes emerge from dynamic interactions between biological vulnerabilities, psychological schemas, and sociocultural contexts.',
        ex: 'Genetic vulnerability to anxiety interacting with early childhood trauma and urban poverty to trigger panic disorder.',
        keyPoints: ['Rejects mind-body dualism', 'Integrates genetics, psychology, and environment', 'Foundation of modern clinical psychology'],
        type: 'concept'
      }
    ],
    'four-ds': [
      {
        id: 'fc-4d-1',
        topicId: 'four-ds',
        term: 'The Four Ds of Abnormality',
        def: 'An educational teaching heuristic—Distress, Dysfunction, Deviance, and Danger—used to appraise whether thoughts, emotions, or actions warrant clinical attention.',
        ex: 'Distress (panic), Dysfunction (missing work), Deviance (paranoia), Danger (suicidal intent).',
        keyPoints: ['Educational heuristic, not formal DSM criteria', 'Synthesizes subjective and objective data', 'Danger is the least common D but most urgent'],
        type: 'concept'
      },
      {
        id: 'fc-4d-2',
        topicId: 'four-ds',
        term: 'Dysfunction (Wakefield Harmful Dysfunction)',
        def: 'The failure of an internal cognitive, affective, or biological mechanism to perform its natural evolutionary function, producing social or occupational role breakdown.',
        ex: 'Inability to leave home or maintain employment due to severe checking rituals in OCD.',
        keyPoints: ['Objective impairment in daily life roles', 'Harm is defined by cultural value judgment', 'Dysfunction represents internal mechanism failure'],
        type: 'diagnostic'
      },
      {
        id: 'fc-4d-3',
        topicId: 'four-ds',
        term: 'The Danger Criterion in Triage',
        def: 'Behaviour that poses an immediate risk of physical injury or fatality to oneself (suicidality) or others (violent psychosis), mandating emergency crisis triage.',
        ex: 'An individual with severe command hallucinations directing lethal self-harm.',
        keyPoints: ['Least common criterion across disorders', 'Overrides elective therapeutic pacing for immediate safety', 'Requires emergency safety planning or hospitalization'],
        type: 'diagnostic'
      }
    ],
    'dsm': [
      {
        id: 'fc-dsm-1',
        topicId: 'dsm',
        term: 'What is the DSM-5-TR?',
        def: 'The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (published March 2022 by the APA); the authoritative descriptive classification manual in clinical psychology.',
        ex: 'A clinician verifies whether five of nine criteria are met for Major Depressive Disorder.',
        keyPoints: ['Current edition is DSM-5-TR (March 2022)', 'Atheoretical, descriptive operational criteria', 'Coordinates with WHO ICD-11 codes'],
        type: 'concept'
      },
      {
        id: 'fc-dsm-2',
        topicId: 'dsm',
        term: 'Discontinuation of the Multiaxial System',
        def: 'The five-axis multiaxial diagnostic format (introduced in DSM-III) was completely discontinued in DSM-5 (2013) to align psychiatric diagnosis with general medical nosology.',
        ex: 'Former Axis I, II, and III diagnoses are now unified into a single clinical diagnostic listing.',
        keyPoints: ['Discontinued in DSM-5 (2013)', 'Replaced with unified non-axial diagnostic listing', 'WHODAS 2.0 replaced GAF scale'],
        type: 'concept'
      },
      {
        id: 'fc-dsm-3',
        topicId: 'dsm',
        term: 'Person-First Language in Clinical Documentation',
        def: 'Linguistic practice naming the human being before the clinical condition (e.g., "a person with schizophrenia" rather than "a schizophrenic") to reduce diagnostic stigma.',
        ex: 'Writing "individuals diagnosed with bipolar disorder" in clinical reports rather than "bipolar patients".',
        keyPoints: ['Affirms human identity beyond diagnosis', 'Mandated by APA clinical style standards', 'Reduces institutional and social prejudice'],
        type: 'concept'
      }
    ],
    'models-of-abnormality': [
      {
        id: 'fc-mod-1',
        topicId: 'models-of-abnormality',
        term: 'The Diathesis-Stress Paradigm',
        def: 'An integrative model asserting that psychological disorders develop when an underlying constitutional vulnerability (diathesis) is triggered by environmental stressors.',
        ex: 'A person with high genetic risk for depression developing an episode only after experiencing a traumatic job loss.',
        keyPoints: ['Diathesis = genetic or developmental vulnerability', 'Stress = environmental or psychological triggers', 'Neither diathesis nor stress alone guarantees disorder'],
        type: 'concept'
      },
      {
        id: 'fc-mod-2',
        topicId: 'models-of-abnormality',
        term: 'Mowrer\'s Two-Factor Learning Model',
        def: 'A behavioural model explaining that phobias are acquired through classical conditioning (stimulus association) and maintained through operant conditioning (negative reinforcement via avoidance).',
        ex: 'Fear of dogs acquired after a dog bite (classical); avoiding all parks eliminates fear, reinforcing the avoidance habit (operant).',
        keyPoints: ['Classical conditioning explains fear acquisition', 'Operant negative reinforcement explains persistence', 'Preventing avoidance enables extinction'],
        type: 'treatment'
      },
      {
        id: 'fc-mod-3',
        topicId: 'models-of-abnormality',
        term: 'Beck\'s Cognitive Restructuring',
        def: 'A therapeutic process identifying, challenging, and reframing automated cognitive distortions and maladaptive core schemas to alleviate emotional suffering.',
        ex: 'Helping a patient examine empirical evidence for the catastrophic thought "If I fail this exam, my life is completely over."',
        keyPoints: ['Targets automated negative thoughts (ANTs)', 'Examines empirical evidence for schemas', 'Restructures cognitive distortions into balanced appraisals'],
        type: 'treatment'
      }
    ],
    'gad': [
      {
        id: 'fc-gad-1',
        topicId: 'gad',
        term: 'DSM-5-TR Diagnostic Duration for GAD',
        def: 'Excessive anxiety and worry occurring more days than not for at least 6 months regarding multiple everyday life domains, accompanied by difficult-to-control worry.',
        ex: 'Worrying continuously about work, health, finances, and family safety without a break for over eight months.',
        keyPoints: ['Duration threshold is ≥6 months', 'Pervasive and free-floating across life domains', 'Must cause significant functional impairment'],
        type: 'diagnostic'
      },
      {
        id: 'fc-gad-2',
        topicId: 'gad',
        term: 'Somatic Symptoms of GAD (FIRMS-C)',
        def: 'At least 3 of 6 symptoms required in adults: Fatigue, Irritability, Restlessness, Muscle tension, Sleep disturbance, Concentration difficulty.',
        ex: 'Chronic neck tension, fatigue, and difficulty falling asleep in an anxious accountant.',
        keyPoints: ['Requires ≥3 of 6 symptoms in adults (only 1 in youth)', 'Muscle tension is the somatic hallmark of GAD', 'Restlessness reflects chronic autonomic tension'],
        type: 'diagnostic'
      },
      {
        id: 'fc-gad-3',
        topicId: 'gad',
        term: 'Borkovec\'s Cognitive Avoidance Theory of Worry',
        def: 'The theory that abstract verbal worry serves as a cognitive avoidance strategy, blunting intense autonomic physiological imagery at the cost of preventing emotional processing.',
        ex: 'An individual repeats verbal what-if statements to avoid experiencing vivid visceral terror of catastrophic loss.',
        keyPoints: ['Verbal worry blunts visceral arousal', 'Prevents extinction of fear schemas', 'Intolerance of uncertainty maintains worry loops'],
        type: 'concept'
      }
    ],
    'panic': [
      {
        id: 'fc-pan-1',
        topicId: 'panic',
        term: 'Diagnostic Definition of a Panic Attack',
        def: 'An abrupt surge of intense fear or extreme discomfort peaking within minutes, accompanied by at least 4 of 13 somatic and cognitive symptoms.',
        ex: 'Sudden tachycardia, shortness of breath, trembling, dizziness, and terror of dying peaking in six minutes in an empty room.',
        keyPoints: ['Peaks rapidly within minutes', 'Requires ≥4 of 13 DSM-5-TR symptoms', 'Can occur from calm or anxious baseline'],
        type: 'diagnostic'
      },
      {
        id: 'fc-pan-2',
        topicId: 'panic',
        term: 'Clark\'s Cognitive Model of Panic',
        def: 'David M. Clark\'s formulation that panic attacks occur when individuals catastrophically misinterpret benign autonomic bodily sensations as signs of impending physical or mental disaster.',
        ex: 'Misinterpreting a normal post-exercise heart flutter as evidence of an imminent massive cardiac arrest.',
        keyPoints: ['Catastrophic misinterpretation is the central catalyst', 'Creates escalating sympathetic fight-or-flight loop', 'Interoceptive exposure dismantles fear of sensations'],
        type: 'concept'
      },
      {
        id: 'fc-pan-3',
        topicId: 'panic',
        term: 'Suffocation False Alarm Theory (Klein)',
        def: 'Donald Klein\'s hypothesis that panic disorder involves hypersensitive brainstem carbon-dioxide and lactate sensors in the locus coeruleus, precipitating sudden false alarms of asphyxiation.',
        ex: 'Experiencing sudden air hunger and tachypnea when sitting in a mildly warm, enclosed conference room.',
        keyPoints: ['Involves brainstem locus coeruleus hypersensitivity', 'Massive norepinephrine discharge triggers panic surge', 'Explains nocturnal panic and CO2 sensitivity'],
        type: 'neuro'
      }
    ],
    'phobias': [
      {
        id: 'fc-phob-1',
        topicId: 'phobias',
        term: 'Blood-Injection-Injury (BII) Phobia',
        def: 'A specific phobia subtype uniquely characterized by a biphasic vasovagal autonomic response: an initial sympathetic spike followed by a precipitous drop in blood pressure and heart rate, causing syncope.',
        ex: 'A medical student who faints during routine venipuncture blood draws due to sudden hypotension.',
        keyPoints: ['Unique biphasic vasovagal reflex', 'Causes fainting (syncope), unlike other phobias', 'Treated with applied muscle tension techniques'],
        type: 'diagnostic'
      },
      {
        id: 'fc-phob-2',
        topicId: 'phobias',
        term: 'Social Anxiety Disorder (Social Phobia)',
        def: 'Marked fear or anxiety about one or more social situations where the individual may be scrutinized by others, fearing negative evaluation, humiliation, or rejection lasting ≥6 months.',
        ex: 'Intense dread of eating in public or presenting in meetings due to fear of trembling or blushing.',
        keyPoints: ['Duration must be ≥6 months', 'Driven by fear of negative scrutiny and embarrassment', 'DSM-5 term is Social Anxiety Disorder (SAD)'],
        type: 'diagnostic'
      },
      {
        id: 'fc-phob-3',
        topicId: 'phobias',
        term: 'Wolpe\'s Systematic Desensitization',
        def: 'A behavioural treatment based on reciprocal inhibition: pairing deep relaxation with a graded hierarchy of feared phobic stimuli to progressively extinguish conditioned anxiety.',
        ex: 'A spider-phobic client learns progressive muscle relaxation while gradually viewing photos, plastic models, and live terrarium spiders.',
        keyPoints: ['Developed by Joseph Wolpe (1958)', 'Uses reciprocal inhibition (relaxation vs anxiety)', 'Constructs an anxiety stimulus hierarchy'],
        type: 'treatment'
      }
    ],
    'ocd': [
      {
        id: 'fc-ocd-1',
        topicId: 'ocd',
        term: 'Obsessions vs Compulsions',
        def: 'Obsessions are recurrent, intrusive, ego-dystonic thoughts, urges, or images causing anxiety. Compulsions are repetitive physical or mental rituals performed to neutralize the anxiety.',
        ex: 'Obsession: "My hands are contaminated with deadly poison." Compulsion: Washing hands 40 times with scalding water.',
        keyPoints: ['Obsessions = intrusive cognitive phenomena (ego-dystonic)', 'Compulsions = neutralizing behavioural/mental rituals', 'Must consume >1 hour daily or cause marked distress'],
        type: 'diagnostic'
      },
      {
        id: 'fc-ocd-2',
        topicId: 'ocd',
        term: 'Thought-Action Fusion (TAF)',
        def: 'A cognitive bias in OCD where having an intrusive thought is viewed as morally equivalent to committing the act (Moral TAF), or believed to increase the likelihood of the event occurring (Likelihood TAF).',
        ex: 'Believing that thinking about a family member dying in a crash makes the crash more likely to happen.',
        keyPoints: ['Salkovskis cognitive formulation', 'Inflated sense of personal responsibility', 'Triggers compulsive neutralizing rituals'],
        type: 'concept'
      },
      {
        id: 'fc-ocd-3',
        topicId: 'ocd',
        term: 'Exposure and Response Prevention (ERP)',
        def: 'The gold-standard CBT intervention for OCD, where patients systematically confront feared obsessional stimuli (exposure) while strictly refraining from performing neutralizing compulsions (response prevention).',
        ex: 'Touching a hospital door handle and sitting for an hour without washing hands until anxiety naturally habituates.',
        keyPoints: ['Developed by Edna Foa (1986)', 'Breaks the operant negative reinforcement loop', 'Promotes inhibitory learning and habituation'],
        type: 'treatment'
      }
    ],
    'ptsd': [
      {
        id: 'fc-ptsd-1',
        topicId: 'ptsd',
        term: 'The Four Symptom Clusters of PTSD',
        def: 'Intrusion (flashbacks, nightmares), Avoidance (internal/external cues), Negative alterations in cognitions and mood (amnesia, guilt, detachment), and Alterations in arousal/reactivity lasting >1 month.',
        ex: 'A combat veteran experiencing waking flashbacks, avoiding fireworks, feeling emotionally numb, and exhibiting hypervigilance.',
        keyPoints: ['Requires Criterion A life-threatening trauma exposure', 'Four distinct symptom clusters', 'Symptoms must persist for more than one month'],
        type: 'diagnostic'
      },
      {
        id: 'fc-ptsd-2',
        topicId: 'ptsd',
        term: 'Ehlers & Clark Cognitive Model of PTSD',
        def: 'The model explaining that chronic PTSD persists because trauma memories are encoded with fragmented perceptual immediacy and appraised as an ongoing, imminent threat to personal integrity.',
        ex: 'Interpreting trauma memories as evidence that "the world is totally dangerous" and "I am permanently broken."',
        keyPoints: ['Fragmented, data-driven perceptual encoding', 'Negative appraisal of trauma sequelae maintains threat', 'TF-CBT restructures trauma memory into autobiographical context'],
        type: 'concept'
      },
      {
        id: 'fc-ptsd-3',
        topicId: 'ptsd',
        term: 'Neurobiology of PTSD: Amygdala & Hippocampus',
        def: 'PTSD is characterized by hyperactivation in the basolateral amygdala, hypoactivity in the medial prefrontal cortex (impaired fear extinction), and hippocampal volume reduction from chronic glucocorticoid exposure.',
        ex: 'Deficits in hippocampal context discrimination causing an individual to react to a car backfire as if transported back to a bomb explosion.',
        keyPoints: ['Amygdala hyper-reactivity drives autonomic terror', 'Prefrontal hypoactivity impairs top-down fear extinction', 'Hippocampal volume loss impairs context discrimination'],
        type: 'neuro'
      }
    ],
    'major-depression': [
      {
        id: 'fc-mdd-1',
        topicId: 'major-depression',
        term: 'DSM-5-TR Core Diagnostic Rule for MDD',
        def: 'Requires ≥5 of 9 depressive symptoms present during the same 2-week period, with at least one symptom being depressed mood or pervasive anhedonia (loss of pleasure).',
        ex: 'Depressed mood daily, anhedonia, insomnia, fatigue, and feelings of worthlessness for three consecutive weeks.',
        keyPoints: ['Must include depressed mood OR anhedonia', 'Duration threshold is ≥2 weeks', 'Must represent marked departure from baseline functioning'],
        type: 'diagnostic'
      },
      {
        id: 'fc-mdd-2',
        topicId: 'major-depression',
        term: 'Beck\'s Negative Cognitive Triad',
        def: 'Depressive affect is maintained by automated, negative, rigid schemas across three domains: the Self ("I am defective"), the World ("life is unfair"), and the Future ("nothing will improve").',
        ex: 'A student failing one test concludes: "I am worthless, no one cares about me, and my career is ruined forever."',
        keyPoints: ['Formulated by Aaron T. Beck (1976)', 'Maintains cognitive distortions (all-or-nothing thinking)', 'Core target of cognitive restructuring in CBT'],
        type: 'concept'
      },
      {
        id: 'fc-mdd-3',
        topicId: 'major-depression',
        term: 'Gender Ratio in Major Depressive Disorder',
        def: 'Large epidemiological surveys (e.g., Kessler et al., 2005) indicate that women experience depression at approximately 1.5 to 2 times the rate of men.',
        ex: 'Higher prevalence linked to neuroendocrine reproductive transitions, role burden, and higher tendencies toward ruminative coping.',
        keyPoints: ['Ratio is roughly 1.5–2:1 in adult cohorts', 'Avoids false precision of older claims', 'Ruminative response style amplifies vulnerability'],
        type: 'concept'
      }
    ],
    'bipolar': [
      {
        id: 'fc-bip-1',
        topicId: 'bipolar',
        term: 'Bipolar I vs Bipolar II Disorder',
        def: 'Bipolar I requires at least one lifetime Manic Episode (lasting ≥1 week or requiring hospitalization). Bipolar II requires at least one Hypomanic Episode (≥4 days) AND at least one Major Depressive Episode; no full mania.',
        ex: 'Bipolar I: Spending life savings during 5 sleepless days of grandiose euphoria. Bipolar II: 4 days of high productivity followed by severe bedridden depression.',
        keyPoints: ['Bipolar I = at least one full manic episode', 'Bipolar II = hypomania + major depression; no mania', 'Hospitalization or psychosis automatically indicates Mania'],
        type: 'diagnostic'
      },
      {
        id: 'fc-bip-2',
        topicId: 'bipolar',
        term: 'Symptoms of a Manic Episode (DIG FAST)',
        def: 'Distractibility, Indiscretion (high-risk acts), Grandiosity, Flight of ideas, Activity increase, Sleep requirement reduction, Talkativeness (pressured speech).',
        ex: 'Sleeping 2 hours and feeling completely rested, investing in three reckless companies, and speaking in an unstoppable torrent.',
        keyPoints: ['Requires ≥3 symptoms (≥4 if mood is only irritable)', 'Decreased need for sleep is distinct from insomnia', 'High-risk behaviours produce painful consequences'],
        type: 'diagnostic'
      },
      {
        id: 'fc-bip-3',
        topicId: 'bipolar',
        term: 'Lithium in Bipolar Disorder (Cade, 1949)',
        def: 'Discovered by John Cade in 1949, lithium carbonate is the gold-standard maintenance mood stabilizer, dampening excitatory signaling pathways and reducing suicide risk.',
        ex: 'Long-term maintenance with lithium prevents relapse into both manic and depressive episodes.',
        keyPoints: ['Discovered by John Cade in 1949', 'Gold standard for bipolar prophylaxis', 'Proven anti-suicidal properties'],
        type: 'treatment'
      }
    ],
    'dysthymia': [
      {
        id: 'fc-dys-1',
        topicId: 'dysthymia',
        term: 'Persistent Depressive Disorder (PDD / Dysthymia)',
        def: 'Depressed mood for most of the day, for more days than not, for at least 2 years in adults (≥1 year in children/adolescents), with no symptom-free interval longer than 2 months.',
        ex: 'A person experiencing continuous low energy, broken sleep, low self-esteem, and hopelessness for four years.',
        keyPoints: ['Duration must be ≥2 years in adults (≥1 year in youth)', 'Consolidated dysthymia and chronic MDD in DSM-5', 'No symptom-free gap exceeding 2 consecutive months'],
        type: 'diagnostic'
      },
      {
        id: 'fc-dys-2',
        topicId: 'dysthymia',
        term: 'The Concept of "Double Depression"',
        def: 'A clinical trajectory where an individual with baseline Persistent Depressive Disorder (Dysthymia) suffers a superimposed acute Major Depressive Episode.',
        ex: 'A chronic dysthymic librarian who plunges into severe psychomotor retardation and acute suicidal ideation following job loss.',
        keyPoints: ['Occurs in up to 75% of individuals with PDD', 'Treatment often remits only to chronic dysthymic baseline', 'Requires extended maintenance psychotherapy and medication'],
        type: 'diagnostic'
      }
    ],
    'sad': [
      {
        id: 'fc-sad-1',
        topicId: 'sad',
        term: 'Atypical Symptoms in Seasonal Affective Disorder',
        def: 'Winter-pattern SAD classically features atypical neurovegetative signs: hypersomnia (prolonged sleep with morning exhaustion), carbohydrate cravings, weight gain, and leaden physical lethargy.',
        ex: 'Sleeping 11 hours nightly, craving pasta and sweets, and gaining 5 kg every winter between November and March.',
        keyPoints: ['Contrast with insomnia and anorexia in melancholic MDD', 'Carbohydrate cravings reflect altered serotonin dynamics', 'Remits predictably in spring/summer'],
        type: 'diagnostic'
      },
      {
        id: 'fc-sad-2',
        topicId: 'sad',
        term: 'Bright Light Therapy Protocol (Rosenthal et al., 1984)',
        def: 'Morning exposure to a 10,000-lux broad-spectrum light box (with UV filtration) for 30–45 minutes daily upon waking, suppressing melatonin and phase-advancing the hypothalamic SCN clock.',
        ex: 'Sitting in front of a 10,000-lux lamp for 30 minutes at 7:00 AM daily throughout winter.',
        keyPoints: ['Pioneered by Norman Rosenthal (1984)', 'Requires 10,000 lux broad-spectrum light', 'Suppresses pineal melatonin and phase-advances circadian rhythm'],
        type: 'treatment'
      }
    ],
    'suicide': [
      {
        id: 'fc-sui-1',
        topicId: 'suicide',
        term: 'Joiner\'s Interpersonal Theory of Suicide',
        def: 'Fatal suicidal behaviour requires the convergence of suicidal desire (Thwarted Belongingness + Perceived Burdensomeness) and the Acquired Capability for lethal self-harm.',
        ex: 'An isolated individual feeling like an unbearable burden who has habituated to physical pain through repeated previous self-injury.',
        keyPoints: ['Thwarted Belongingness = social alienation', 'Perceived Burdensomeness = feeling like a liability to loved ones', 'Acquired Capability = fearlessness of death and elevated pain tolerance'],
        type: 'concept'
      },
      {
        id: 'fc-sui-2',
        topicId: 'suicide',
        term: 'Means Restriction as a Public Health Strategy',
        def: 'Restricting access to lethal means (locking up pesticides, installing bridge barriers, firearm controls) is empirically the most effective public health suicide prevention measure.',
        ex: 'Restricting toxic agricultural pesticides in rural communities producing substantial reductions in regional suicide mortality.',
        keyPoints: ['Most effective population-level suicide prevention measure', 'Capitalizes on the acute, time-limited nature of suicidal crises', 'Does not result in complete method substitution'],
        type: 'treatment'
      }
    ],
    'anorexia': [
      {
        id: 'fc-ano-1',
        topicId: 'anorexia',
        term: 'DSM-5-TR Revisions for Anorexia Nervosa',
        def: 'Eliminated the mandatory requirement of amenorrhoea and the rigid 85% weight threshold in favour of "significantly low body weight" evaluated in developmental and physical health context.',
        ex: 'Diagnosing an adolescent male who severely restricts food and exhibits body dysmorphia regardless of menstruation.',
        keyPoints: ['Dropped amenorrhoea to include males and postmenopausal women', 'Dropped rigid 85% weight threshold', 'Severity graded qualitatively by clinical BMI descriptors'],
        type: 'diagnostic'
      },
      {
        id: 'fc-ano-2',
        topicId: 'anorexia',
        term: 'Mortality Rates in Anorexia Nervosa (Arcelus et al., 2011)',
        def: 'Meta-analysis of 36 studies established a standardized mortality ratio of approximately 5.9 times expected mortality; approximately 1 in 5 deaths in anorexia nervosa were by suicide.',
        ex: 'Demonstrates the profound physiological and psychiatric lethality of severe eating disorders.',
        keyPoints: ['SMR is approximately 5.9× expected mortality', 'Roughly 1 in 5 deaths attributable to suicide', 'Replaces older imprecise claims of "up to 20%"'],
        type: 'concept'
      },
      {
        id: 'fc-ano-3',
        topicId: 'anorexia',
        term: 'Family-Based Treatment (FBT / Maudsley Method)',
        def: 'The premier evidence-based outpatient psychotherapy for adolescent anorexia nervosa, empowering parents to manage nutritional re-feeding before addressing individual adolescent autonomy.',
        ex: 'Parents collaboratively planning, serving, and monitoring all meals for their adolescent daughter until physiological weight is restored.',
        keyPoints: ['Gold standard for adolescent anorexia (Lock & Le Grange, 2013)', 'Parents actively oversee nutritional restoration', 'Non-blaming stance toward family members'],
        type: 'treatment'
      }
    ],
    'bulimia': [
      {
        id: 'fc-bul-1',
        topicId: 'bulimia',
        term: 'Diagnostic Frequency Rule for Bulimia Nervosa',
        def: 'Recurrent binge-eating episodes accompanied by inappropriate compensatory behaviours (vomiting, laxatives, fasting, exercise) occurring on average at least once a week for 3 months.',
        ex: 'Bingeing and purging three times a week for six months with body weight in the normal physiological range.',
        keyPoints: ['Requires ≥1 episode per week for 3 months', 'Must feature inappropriate compensatory behaviours', 'Body weight is maintained at or above normal levels'],
        type: 'diagnostic'
      },
      {
        id: 'fc-bul-2',
        topicId: 'bulimia',
        term: 'Russell\'s Sign & Somatic Complications',
        def: 'Russell\'s sign is callous scarring on the knuckles from contact with incisors during self-induced vomiting; accompanied by parotid enlargement (sialadenosis) and hypokalemia.',
        ex: 'A normal-weight patient presenting with scarred right knuckles, swollen cheeks, and dangerous low serum potassium levels.',
        keyPoints: ['Russell\'s sign = knuckle scarring from induced vomiting', 'Sialadenosis = benign parotid gland enlargement', 'Hypokalemia carries severe cardiac arrhythmia risk'],
        type: 'diagnostic'
      }
    ],
    'binge-eating': [
      {
        id: 'fc-bed-1',
        topicId: 'binge-eating',
        term: 'Binge Eating Disorder (DSM-5 Recognition & Features)',
        def: 'Recurrent loss-of-control bingeing for ≥1/week for 3 months with ≥3 behavioural signs (eating rapidly, painfully full, not hungry, eating alone, post-binge guilt) with NO compensatory purging.',
        ex: 'Consuming large amounts of fast food in secret when feeling stressed, weeping with self-loathing without vomiting.',
        keyPoints: ['Formally recognized in DSM-5 (2013)', 'Strict absence of compensatory purging', 'Most prevalent eating disorder: 3.5% women, 2.0% men (Hudson et al., 2007)'],
        type: 'diagnostic'
      }
    ],
    'antisocial': [
      {
        id: 'fc-aspd-1',
        topicId: 'antisocial',
        term: 'Conduct Disorder Requirement in ASPD',
        def: 'Diagnosis of Antisocial Personality Disorder requires that the individual is at least 18 years old and had documented evidence of Conduct Disorder with onset before age 15.',
        ex: 'A 24-year-old with a juvenile court history of setting fires, running away, and cruelty to animals before age 14.',
        keyPoints: ['Individual must be at least 18 years old', 'Must have documented Conduct Disorder before age 15', 'Requires ≥3 of 7 adult antisocial criteria'],
        type: 'diagnostic'
      },
      {
        id: 'fc-aspd-2',
        topicId: 'antisocial',
        term: 'Hare Psychopathy Checklist-Revised (PCL-R)',
        def: 'A 20-item diagnostic tool measuring Factor 1 (Interpersonal/Affective: superficial charm, grandiosity, pathological lying, lack of remorse) and Factor 2 (Lifestyle/Social Deviance: impulsivity, irresponsibility, juvenile delinquency).',
        ex: 'Differentiating a charming, remorseless corporate con artist from an impulsive, chaotic offender.',
        keyPoints: ['Developed by Robert Hare (2003)', 'Factor 1 = core callous/affective traits', 'Factor 2 = socially deviant/lifestyle traits'],
        type: 'diagnostic'
      }
    ],
    'borderline': [
      {
        id: 'fc-bpd-1',
        topicId: 'borderline',
        term: 'The Defense Mechanism of Splitting',
        def: 'A primitive psychological defense where an individual views self and others in dichotomous, unintegrated extremes of "all good" (idealization) or "all bad" (devaluation).',
        ex: 'Declaring a therapist to be a miraculous savior on Tuesday, and a sadistic abuser on Thursday after a 5-minute session cancellation.',
        keyPoints: ['Alternates between idealization and devaluation', 'Reflects inability to integrate ambivalent qualities', 'Common in Borderline Personality Disorder (Kernberg)'],
        type: 'concept'
      },
      {
        id: 'fc-bpd-2',
        topicId: 'borderline',
        term: 'Linehan\'s Dialectical Behaviour Therapy (DBT)',
        def: 'The gold-standard psychotherapy for BPD, synthesizing the dialectic of radical acceptance and behavioural change across four modules: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness.',
        ex: 'Learning TIPP distress-tolerance skills to survive an acute abandonment panic without resorting to wrist-cutting.',
        keyPoints: ['Developed by Marsha Linehan (1993)', 'Balances radical acceptance with behavioural change', 'Four modules: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness'],
        type: 'treatment'
      }
    ],
    'schizophrenia': [
      {
        id: 'fc-schiz-1',
        topicId: 'schizophrenia',
        term: 'Positive vs Negative Symptoms in Schizophrenia',
        def: 'Positive symptoms are excess additions to normal consciousness (hallucinations, delusions, disorganized speech). Negative symptoms are reductions in normal functioning (the 5 A\'s).',
        ex: 'Positive: Hearing commanding voices. Negative: Flat facial expression and complete loss of motivation to bathe or dress.',
        keyPoints: ['Positive = added phenomena (hallucinations, delusions)', 'Negative = deficits (5 A\'s: affective flattening, alogia, anhedonia, asociality, avolition)', 'Antipsychotics primarily improve positive symptoms'],
        type: 'diagnostic'
      },
      {
        id: 'fc-schiz-2',
        topicId: 'schizophrenia',
        term: 'Dopamine Hypothesis Version III (Howes & Kapur, 2009)',
        def: 'The modern dopamine model demonstrating that schizophrenia involves elevated presynaptic striatal dopamine synthesis and release, which acts as the final common pathway for aberrant salience.',
        ex: 'Presynaptic dopamine surges causing neutral background noises to be perceived with intense, threatening personal significance.',
        keyPoints: ['Focuses on presynaptic striatal dopamine elevation', 'Final common pathway of genetic and environmental risks', 'Explains aberrant salience attribution in psychosis'],
        type: 'neuro'
      },
      {
        id: 'fc-schiz-3',
        topicId: 'schizophrenia',
        term: 'Bleuler\'s Four A\'s of Schizophrenia (1911)',
        def: 'Eugen Bleuler coined "schizophrenia" (1911) and identified four primary diagnostic hallmarks: loosening of Associations, blunted Affect, Autism, and Ambivalence.',
        ex: 'Fragmented syntax (associations), flat emotional tone (affect), fantasy withdrawal (autism), and conflicting impulses (ambivalence).',
        keyPoints: ['Coined "schizophrenia" in 1911', 'Emphasized psychological splitting rather than dementia', 'Associations, Affect, Autism, Ambivalence'],
        type: 'concept'
      }
    ],

    // Volume VII: Therapies & Interventions
    'therapy-overview': [
      {
        id: 'fc-to-1',
        topicId: 'therapy-overview',
        term: 'Insight vs Action Therapies',
        def: 'Insight therapies (psychoanalytic, humanistic) focus on understanding underlying unconscious conflicts and expanding self-awareness; action therapies (CBT, behavior therapy) focus directly on changing maladaptive habits and cognitive distortions.',
        ex: 'Psychoanalysis exploring childhood roots of anxiety (insight) vs ERP practicing dog approach exercises (action).',
        keyPoints: ['Insight fosters deep intrapsychic understanding', 'Action focuses on operational behavioural modification', 'Modern integrative practice blends both modalities'],
        type: 'concept'
      },
      {
        id: 'fc-to-2',
        topicId: 'therapy-overview',
        term: 'Common Factors in Psychotherapy (The Dodo Bird Verdict)',
        def: 'Research (Frank, Wampold) demonstrating that shared non-specific factors—primarily the therapeutic alliance, empathy, and positive expectation—account for significant variance in treatment outcomes across modalities.',
        ex: 'A client improving in therapy due to feeling heard and validated, regardless of whether the therapist is psychodynamic or CBT.',
        keyPoints: ['Therapeutic alliance is the strongest predictor of change', 'Empathy, positive regard, and collaborative goals are universal', 'Specific techniques augment the common relational foundation'],
        type: 'concept'
      },
      {
        id: 'fc-to-3',
        topicId: 'therapy-overview',
        term: 'Biomedical vs Psychological Interventions',
        def: 'Biomedical therapies (pharmacotherapy, ECT, rTMS) target neurochemical and neurobiological substrates; psychological therapies modify cognitive schemas, emotional processing, and behavioral patterns.',
        ex: 'Treating major depression with an SSRI to normalize serotonin signalling combined with CBT to restructure automatic thoughts.',
        keyPoints: ['Combination therapy often yields superior outcomes in severe conditions', 'Biomedical targets somatic mechanisms; psychotherapy fosters cognitive resilience', 'Medication may facilitate engagement in psychotherapy'],
        type: 'concept'
      }
    ],
    'psychoanalysis': [
      {
        id: 'fc-pa-1',
        topicId: 'psychoanalysis',
        term: 'The Fundamental Rule of Psychoanalysis: Free Association',
        def: 'The therapeutic technique wherein the client verbalizes every passing thought, fantasy, or feeling without conscious selection, editing, or censorship.',
        ex: 'Speaking aloud whatever comes to mind upon hearing the word "father" to uncover unconscious representations.',
        keyPoints: ['Developed by Sigmund Freud to replace hypnosis', 'Bypasses conscious ego defense mechanisms', 'Uncovers repressed unconscious conflicts and wishes'],
        type: 'treatment'
      },
      {
        id: 'fc-pa-2',
        topicId: 'psychoanalysis',
        term: 'Transference and Countertransference',
        def: 'Transference is the patient\'s unconscious displacement of childhood feelings and expectations onto the therapist; countertransference is the therapist\'s emotional reaction to the patient.',
        ex: 'A client reacting with rage when the therapist is 2 minutes late, unconsciously reliving childhood emotional neglect by a parent.',
        keyPoints: ['Transference acts as a living laboratory of early relationships', 'Working through transference fosters structural personality change', 'Countertransference requires self-analysis and supervision'],
        type: 'concept'
      },
      {
        id: 'fc-pa-3',
        topicId: 'psychoanalysis',
        term: 'Manifest vs Latent Content in Dream Analysis',
        def: 'Manifest content is the conscious, literal storyline of a dream as recalled; latent content is the hidden, symbolic, unconscious impulse or wish transformed by dream work.',
        ex: 'Dreaming of missing a train (manifest) symbolizing an unconscious fear of mortality and failure to meet paternal expectations (latent).',
        keyPoints: ['Freud termed dreams the "royal road to the unconscious"', 'Dream work includes condensation, displacement, and symbolization', 'Interpretation translates manifest narrative into latent meaning'],
        type: 'diagnostic'
      }
    ],
    'person-centered': [
      {
        id: 'fc-pc-1',
        topicId: 'person-centered',
        term: 'Carl Rogers\'s Three Core Necessary and Sufficient Conditions',
        def: 'Empathy (deeply grasping the client\'s internal frame of reference), Congruence (therapist authenticity and genuineness), and Unconditional Positive Regard (non-judgmental acceptance).',
        ex: 'A therapist openly accepting a client\'s confession of moral shame without condemnation or subtle moral lecturing.',
        keyPoints: ['Formulated by Carl Rogers in 1957', 'Rejects clinical authority and expert interpretation', 'Prerequisites for releasing the actualising tendency'],
        type: 'concept'
      },
      {
        id: 'fc-pc-2',
        topicId: 'person-centered',
        term: 'Conditions of Worth and Incongruence',
        def: 'Conditions of worth are conditional parental/societal standards that teach children they are only lovable when conforming; this causes incongruence between the real self and ideal self.',
        ex: 'A student pursuing engineering solely to win parental love, suppressing their authentic desire to write music.',
        keyPoints: ['Origin of neurotic psychological distress in humanistic theory', 'Incongruence generates defensive anxiety and vulnerability', 'UPR dissolves external conditions of worth'],
        type: 'diagnostic'
      },
      {
        id: 'fc-pc-3',
        topicId: 'person-centered',
        term: 'The Actualising Tendency',
        def: 'The innate, universal organismic motivation to grow, maintain, and enhance the self toward realization of full human potential.',
        ex: 'A plant bending toward sunlight; a human striving toward self-actualisation and creative fulfillment when freed from shame.',
        keyPoints: ['Foundational assumption of humanistic psychology', 'Clients are deemed the supreme experts on their own lives', 'Therapist acts as a facilitator, not a director'],
        type: 'concept'
      }
    ],
    'behavior-therapy': [
      {
        id: 'fc-bt-1',
        topicId: 'behavior-therapy',
        term: 'Wolpe\'s Principle of Reciprocal Inhibition',
        def: 'The premise that if a physiological response incompatible with anxiety (such as deep muscle relaxation) is elicited in the presence of an anxiety-provoking stimulus, the fear response is weakened.',
        ex: 'Relaxing the neck and shoulders while visualizing a gentle spider, inhibiting autonomic panic.',
        keyPoints: ['Introduced by Joseph Wolpe (1958)', 'Theoretical foundation of Systematic Desensitization', 'Utilizes graded fear hierarchies and SUDs ratings'],
        type: 'treatment'
      },
      {
        id: 'fc-bt-2',
        topicId: 'behavior-therapy',
        term: 'Flooding vs Systematic Desensitization',
        def: 'Flooding involves immediate, intense, prolonged exposure to the top of the fear hierarchy until extinction occurs; systematic desensitization involves gradual step-by-step counterconditioning from bottom to top.',
        ex: 'Sitting in a locked elevator for 90 minutes until panic subsides (flooding) vs imagining an elevator door while doing breathing exercises (desensitization).',
        keyPoints: ['Flooding relies on exhaustion of sympathetic arousal and habituation', 'Desensitization minimizes client distress through incremental pacing', 'Both produce extinction of conditioned avoidance'],
        type: 'treatment'
      },
      {
        id: 'fc-bt-3',
        topicId: 'behavior-therapy',
        term: 'Behavioral Activation in Depression',
        def: 'An evidence-based behavioral intervention that systematically schedules rewarding and mastery-oriented activities to break the cycle of depressive avoidance and inactivity.',
        ex: 'Scheduling a 15-minute morning walk and completing a long-delayed bill payment to restore positive environmental reinforcement.',
        keyPoints: ['Targets inertia and social withdrawal in MDD', 'Increases positive reinforcement from the environment', 'Monitors activity-mood correlations using daily activity logs'],
        type: 'treatment'
      }
    ],
    'token-economy': [
      {
        id: 'fc-te-1',
        topicId: 'token-economy',
        term: 'Operant Architecture of a Token Economy',
        def: 'A behavior modification system where conditioned reinforcers (tokens, points, chips) are delivered immediately upon completion of target behaviors and later exchanged for backup reinforcers.',
        ex: 'Inpatients earning tokens for showering and making beds, which they exchange for canteen snacks or recreation time.',
        keyPoints: ['Formulated by Teodoro Ayllon and Nathan Azrin (1968)', 'Bridges the temporal gap between behavior and primary reward', 'Requires clear definition of target behaviors and exchange rates'],
        type: 'treatment'
      },
      {
        id: 'fc-te-2',
        topicId: 'token-economy',
        term: 'Response Cost and Negative Punishment',
        def: 'An optional token economy component where specific predetermined quantities of tokens are forfeited contingent upon disruptive or aggressive behavior.',
        ex: 'Losing 5 tokens for swearing or refusing to return recreation equipment.',
        keyPoints: ['Operant negative punishment mechanism', 'Must be applied consistently and calmly without anger', 'Must not infringe upon fundamental human or constitutional rights'],
        type: 'treatment'
      },
      {
        id: 'fc-te-3',
        topicId: 'token-economy',
        term: 'Generalisation Limits in Token Economies',
        def: 'The common clinical challenge where acquired target behaviors extinguish once the client leaves the institutional setting and enters natural environments lacking tokens.',
        ex: 'A patient keeping a tidy room in the psychiatric ward but reverting to disorganization upon returning home.',
        keyPoints: ['Requires systematic fading of tokens to natural reinforcers', 'Incorporate social praise and self-reinforcement before discharge', 'Train family members in contingency management'],
        type: 'concept'
      }
    ],
    'cbt': [
      {
        id: 'fc-cbt-1',
        topicId: 'cbt',
        term: 'Beck\'s Cognitive Triad in Depression',
        def: 'The pervasive negative cognitive schema system regarding: (1) The Self ("I am worthless"), (2) The World/Experiences ("Everything is hostile"), and (3) The Future ("Nothing will ever improve").',
        ex: 'A depressed individual failing one quiz and concluding they are completely incompetent, unteachable, and destined for poverty.',
        keyPoints: ['Formulated by Aaron T. Beck (1967, 1976)', 'Maintains depressed affect and behavioural withdrawal', 'Direct target of cognitive restructuring'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cbt-2',
        topicId: 'cbt',
        term: 'Cognitive Distortions: Catastrophizing and All-or-Nothing Thinking',
        def: 'Systematic errors in cognitive processing: Catastrophizing anticipates the worst possible outcome; All-or-Nothing thinking views situations in rigid black-and-white extremes.',
        ex: 'Thinking "If I make one mistake during my speech, my career is completely ruined" (catastrophizing and dichotomous thinking).',
        keyPoints: ['Identified and challenged using a Thought Record', 'Treated as testable hypotheses rather than objective truths', 'Behavioral experiments gather empirical contrary evidence'],
        type: 'concept'
      },
      {
        id: 'fc-cbt-3',
        topicId: 'cbt',
        term: 'Collaborative Empiricism and Socratic Questioning',
        def: 'The core CBT therapeutic stance where therapist and client work as co-investigators testing the validity of the client\'s thoughts through guided discovery and questioning.',
        ex: 'Therapist asking: "What evidence supports that belief? Is there another way of interpreting this situation?"',
        keyPoints: ['Avoids debate, lecture, or coercive persuasion', 'Empowers client to discover alternative cognitive perspectives', 'Promotes autonomy and self-directed problem-solving'],
        type: 'treatment'
      }
    ],
    'group-therapy': [
      {
        id: 'fc-gt-1',
        topicId: 'group-therapy',
        term: 'Yalom\'s Primary Curative Factors in Group Psychotherapy',
        def: 'Irvin Yalom\'s 11 therapeutic mechanisms including Universality (not being alone), Instillation of Hope, Imparting Information, Altruism, Interpersonal Learning, and Group Cohesiveness.',
        ex: 'A client realizing that other group members share their identical hidden shame about social anxiety (Universality).',
        keyPoints: ['Formulated by Irvin Yalom & Molyn Leszcz (2020)', 'The group functions as a social microcosm of external life', 'Group cohesiveness correlates directly with therapeutic outcome'],
        type: 'concept'
      },
      {
        id: 'fc-gt-2',
        topicId: 'group-therapy',
        term: 'Tuckman\'s Stages of Group Development',
        def: 'The sequential stages through which therapy and support groups evolve: Forming (orientation), Storming (conflict and challenge), Norming (cohesion and rules), and Performing (productive work).',
        ex: 'Members questioning the therapist\'s competence and competing for dominance during the Storming phase.',
        keyPoints: ['Formulated by Bruce Tuckman (1965)', 'Conflict is a natural and necessary developmental hurdle', 'Norming establishes psychological safety and trust'],
        type: 'concept'
      },
      {
        id: 'fc-gt-3',
        topicId: 'group-therapy',
        term: 'Psychoeducational vs Process Groups',
        def: 'Psychoeducational groups focus on didactic instruction and skill acquisition (e.g., anger management, DBT skills); process groups focus on interpersonal dynamics and here-and-now interactions.',
        ex: 'Teaching sleep hygiene and relaxation techniques (psychoeducational) vs exploring member feelings toward each other (process).',
        keyPoints: ['Psychoeducational groups are structured and manualized', 'Process groups are unstructured and experiential', 'Both utilize peer feedback and modeling'],
        type: 'concept'
      }
    ],
    'relationship-counselling': [
      {
        id: 'fc-rc-1',
        topicId: 'relationship-counselling',
        term: 'Gottman\'s Four Horsemen of the Apocalypse',
        def: 'Four toxic communication styles that reliably predict relationship dissolution: Criticism (attacking personality), Defensiveness (warding off perceived attack), Contempt (superiority and disgust), and Stonewalling (emotional shutdown).',
        ex: 'Saying "You never think of anyone but yourself, you\'re pathetic" with eye-rolling (Contempt).',
        keyPoints: ['Formulated by John Gottman (1999)', 'Contempt is the single most lethal predictor of relationship breakdown', 'Antidotes: gentle startup, taking responsibility, appreciation, physiological self-soothing'],
        type: 'diagnostic'
      },
      {
        id: 'fc-rc-2',
        topicId: 'relationship-counselling',
        term: 'Emotionally Focused Therapy (EFT) for Couples',
        def: 'Short-term evidence-based couples therapy developed by Sue Johnson grounded in adult attachment theory, restructuring rigid interaction cycles into secure attachment bonds.',
        ex: 'Helping a distant partner express that their emotional withdrawal stems from terrified fear of inadequacy and rejection.',
        keyPoints: ['Developed by Sue Johnson (2004)', 'Re-frames destructive arguments as bids for connection', 'De-escalates blame and accesses primary vulnerable attachment emotions'],
        type: 'treatment'
      },
      {
        id: 'fc-rc-3',
        topicId: 'relationship-counselling',
        term: 'Contraindications for Couples Therapy: Intimate Partner Violence (IPV)',
        def: 'Couples therapy is strictly contraindicated when active intimate partner violence, severe intimidation, or coercive control is present, because joint sessions endanger the victim.',
        ex: 'Refusing joint sessions and facilitating an immediate safety plan for a spouse being physically abused at home.',
        keyPoints: ['Safety takes absolute priority over relationship repair', 'Joint sessions can empower the abuser to retaliate for disclosures', 'Mandates separate individual referrals and emergency shelter coordination'],
        type: 'diagnostic'
      }
    ],
    'biomedical-therapies': [
      {
        id: 'fc-bm-1',
        topicId: 'biomedical-therapies',
        term: 'Modern Electroconvulsive Therapy (ECT) Protocol',
        def: 'A safe, modern medical procedure inducing a therapeutic generalized seizure using brief pulse electrical stimulation under general anesthesia (methohexital) and muscle relaxation (succinylcholine).',
        ex: 'Rapidly relieving life-threatening catatonia or psychotic depression in a patient who has completely stopped eating.',
        keyPoints: ['Modern ECT is painless and performed under anesthesia', 'Highest efficacy rate of any acute treatment for severe unipolar depression', 'Potential transient retrograde memory impairment for surrounding events'],
        type: 'treatment'
      },
      {
        id: 'fc-bm-2',
        topicId: 'biomedical-therapies',
        term: 'Lithium Carbonate in Bipolar Disorder',
        def: 'Discovered by John Cade in 1949; a monovalent salt that remains the gold standard for long-term mood stabilization and is uniquely proven to reduce suicide mortality in bipolar disorder.',
        ex: 'Monitoring serum lithium levels (target 0.6–1.0 mEq/L) to prevent toxicity while maintaining affective euthymia.',
        keyPoints: ['Discovered by John Cade (1949)', 'Requires regular renal and thyroid function monitoring', 'Narrow therapeutic index requires precise therapeutic blood levels'],
        type: 'treatment'
      },
      {
        id: 'fc-bm-3',
        topicId: 'biomedical-therapies',
        term: 'Repetitive Transcranial Magnetic Stimulation (rTMS)',
        def: 'A non-invasive neuromodulatory technique delivering pulsed magnetic fields to stimulate neuronal activity in the dorsolateral prefrontal cortex (DLPFC) for treatment-resistant depression.',
        ex: 'A patient receiving daily 30-minute outpatient DLPFC magnetic pulses without anesthesia, experiencing no systemic medication side effects.',
        keyPoints: ['Non-invasive and does not induce seizures or require anesthesia', 'Targeted stimulation of left DLPFC in depression', 'Evidence-based option when medication and psychotherapy fail'],
        type: 'treatment'
      }
    ],
    'alternative-therapies': [
      {
        id: 'fc-alt-1',
        topicId: 'alternative-therapies',
        term: 'Mindfulness-Based Stress Reduction (MBSR) & MBCT',
        def: 'Standardized 8-week secular programs developed by Jon Kabat-Zinn and Zindel Segal integrating mindfulness meditation and yoga, proven to reduce stress and prevent depressive relapse.',
        ex: 'Practicing the body scan and mindful breathing daily to develop metacognitive awareness of rumination triggers.',
        keyPoints: ['Secular synthesis of Vipassana mindfulness and clinical psychology', 'MBCT is recommended in clinical guidelines for recurrent depression', 'Enhances prefrontal emotional regulation and reduces amygdala reactivity'],
        type: 'treatment'
      },
      {
        id: 'fc-alt-2',
        topicId: 'alternative-therapies',
        term: 'Morning Bright Light Phototherapy for SAD',
        def: 'First-line non-pharmacological treatment for Seasonal Affective Disorder delivering 10,000 lux of white fluorescent light for 30 minutes each morning to reset circadian melatonin rhythms.',
        ex: 'Sitting in front of a 10,000 lux lightbox at 7:00 AM each winter morning to relieve lethargy and carbohydrate cravings.',
        keyPoints: ['Formulated by Norman Rosenthal et al. (1984)', 'Acts via retinohypothalamic tract to the suprachiasmatic nucleus', 'Suppresses morning melatonin and aligns circadian phase'],
        type: 'treatment'
      },
      {
        id: 'fc-alt-3',
        topicId: 'alternative-therapies',
        term: 'Risks of Herbal Remedies: St. John\'s Wort & Serotonin Syndrome',
        def: 'St. John\'s Wort (Hypericum perforatum) has mild antidepressant properties but induces CYP3A4 enzymes and, when combined with prescription SSRIs, risks fatal Serotonin Syndrome.',
        ex: 'A patient taking over-the-counter St. John\'s Wort alongside fluoxetine, precipitating hyperthermia, tremor, and delirium.',
        keyPoints: ['Alternative remedies are pharmacologically active and carry real risks', 'Clinicians must routinely assess herbal supplement use', 'Evidence grades distinguish proven therapies from dangerous interactions'],
        type: 'diagnostic'
      }
    ],

    // Volume VIII: Culture, Stigma & Help-Seeking
    'culture-mental-illness': [
      {
        id: 'fc-cmi-1',
        topicId: 'culture-mental-illness',
        term: 'Cultural Relativism vs Universalism in Psychopathology',
        def: 'Cultural relativism argues that abnormal behavior can only be understood within its cultural framework; universalism posits that fundamental neuropsychiatric disorders exist universally across humanity.',
        ex: 'Schizophrenia exhibiting universal dopamine alterations worldwide while specific delusions reflect local religious or political motifs.',
        keyPoints: ['Integrates universal neuropsychological core with cultural expression', 'Rejects Western ethnocentrism in psychiatric diagnosis', 'Cultural context determines tolerance and impairment thresholds'],
        type: 'concept'
      },
      {
        id: 'fc-cmi-2',
        topicId: 'culture-mental-illness',
        term: 'Somatization of Psychological Distress in Non-Western Cultures',
        def: 'The clinical presentation of emotional suffering primarily through physical somatic idioms (e.g., gastric burning, chest heaviness, tension) common in India and Asia.',
        ex: 'A depressed patient visiting a general physician complaining of "weakness in the bones" and "gas in the head" rather than sadness.',
        keyPoints: ['Arthur Kleinman\'s clinical anthropology findings', 'Somatic symptoms are culturally sanctioned and less stigmatized', 'Clinicians must avoid dismissing somatic complaints as hypochondriasis'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cmi-3',
        topicId: 'culture-mental-illness',
        term: 'Historical Demonological Explanations of Mental Illness',
        def: 'Ancient and medieval belief systems attributing abnormal behavior to possession by malevolent spirits, witchcraft, or divine retribution, treated with exorcism or trephination.',
        ex: 'The publication of Malleus Maleficarum (1486) fueling torture of mentally ill women as witches.',
        keyPoints: ['Contrasted with Hippocratic somatic humoral theory', 'Demonological views still persist in traditional faith-healing shrines', 'Fosters high public stigma and delay in modern medical help-seeking'],
        type: 'concept'
      }
    ],
    'culture-bound': [
      {
        id: 'fc-cb-1',
        topicId: 'culture-bound',
        term: 'Dhat Syndrome in the Indian Subcontinent',
        def: 'A cultural concept of distress characterized by debilitating anxiety, fatigue, and somatization attributed to the perceived loss of semen (dhatu) through nocturnal emissions or urination.',
        ex: 'A young man in North India presenting with extreme weakness and palpitations, convinced his body is wasting away from semen loss.',
        keyPoints: ['Documented by N. N. Wig (1960)', 'Rooted in classical Ayurvedic concepts of semen as vital bodily elixir (shukra)', 'Treated through sex education, cognitive reassurance, and culturally sensitive CBT'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cb-2',
        topicId: 'culture-bound',
        term: 'Koro and Ataque de Nervios',
        def: 'Koro (Southeast Asia) is acute panic that the penis or vulva is retracting into the abdomen, risking death; Ataque de Nervios (Latin America) involves shouting, crying, and seizure-like episodes following distress.',
        ex: 'A sudden epidemic of acute penile retraction panic in a coastal Malaysian fishing village (Koro).',
        keyPoints: ['DSM-5 replaced "culture-bound syndromes" with "cultural concepts of distress"', 'Represent localized idioms of distress and causal attributions', 'Require culturally grounded reassurance rather than antipsychotics'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cb-3',
        topicId: 'culture-bound',
        term: 'Hikikomori and Taijin Kyofusho in Japan',
        def: 'Hikikomori is severe acute social withdrawal where adolescents or adults isolate in their rooms for ≥ 6 months; Taijin Kyofusho is intense fear that one\'s body or odor will offend others.',
        ex: 'A 22-year-old in Tokyo refusing to leave their bedroom for two years, having meals left outside the door (Hikikomori).',
        keyPoints: ['Taijin Kyofusho contrasts with Western social anxiety (fear of offending vs fear of embarrassment)', 'Hikikomori reflects immense academic and corporate pressure in post-industrial societies', 'Involves deep interplay between cultural shame and social withdrawal'],
        type: 'diagnostic'
      }
    ],
    'stigma': [
      {
        id: 'fc-stg-1',
        topicId: 'stigma',
        term: 'Public Stigma vs Self-Stigma (Corrigan, 2004)',
        def: 'Public stigma comprises societal stereotypes, prejudice, and discriminatory behaviors against people with mental illness; self-stigma occurs when an individual internalizes these negative stereotypes.',
        ex: 'Public: Refusing to rent an apartment to a person with bipolar disorder. Self: A person thinking "I have depression, so I am weak and useless."',
        keyPoints: ['Formulated by Patrick Corrigan (2004)', 'Self-stigma destroys self-efficacy and prevents help-seeking', 'Interventions include social contact and cognitive reframing'],
        type: 'concept'
      },
      {
        id: 'fc-stg-2',
        topicId: 'stigma',
        term: 'Institutional Stigma and the Treatment Gap',
        def: 'Systemic underfunding, discriminatory legislation, and unequal healthcare coverage for psychiatric conditions compared to physical illnesses by institutions.',
        ex: 'Health insurance policies excluding coverage for psychiatric hospitalizations or capping mental health benefits.',
        keyPoints: ['Maintains the immense mental health treatment gap (NMHS India: >70%)', 'Creates structural barriers to dignity and vocational rehabilitation', 'Addressed in India by the Mental Healthcare Act 2017 mandating parity'],
        type: 'concept'
      },
      {
        id: 'fc-stg-3',
        topicId: 'stigma',
        term: 'The Mental Healthcare Act 2017 (India) & Section 115',
        def: 'Landmark human rights legislation that legally decriminalized suicide attempts (Section 115), banned electroconvulsive therapy without anesthesia, and codified psychiatric advance directives.',
        ex: 'Prohibiting prosecution of individuals surviving suicide attempts and mandating government provision of free mental healthcare.',
        keyPoints: ['Passed in 2017 by the Parliament of India (Act No. 10 of 2017)', 'Presumes severe stress under Section 115, overturning IPC Section 309', 'Establishes Central and State Mental Health Authorities'],
        type: 'concept'
      }
    ],
    'help-seeking-gender': [
      {
        id: 'fc-hsg-1',
        topicId: 'help-seeking-gender',
        term: 'The Gender Gap in Mental Health Help-Seeking',
        def: 'Epidemiological finding that women seek professional psychiatric help at approximately 1.5–2 times the rate of men, despite comparable rates of psychiatric distress across genders.',
        ex: 'Surveys showing women actively utilizing university counseling while male peers suffer in silence or self-medicate with alcohol.',
        keyPoints: ['Addis & Mahalik (2003) framework on masculine role socialization', 'Driven by traditional masculinity norms: self-reliance, stoicism, emotional suppression', 'Reluctance increases vulnerability to lethal suicide in men'],
        type: 'concept'
      },
      {
        id: 'fc-hsg-2',
        topicId: 'help-seeking-gender',
        term: 'The Gender Paradox of Suicide',
        def: 'Epidemiological phenomenon wherein women in high-income nations attempt suicide more frequently, while men die by suicide 3–4 times more often due to choosing higher-lethality means.',
        ex: 'Men using firearms or hanging; women using medication overdoses. In India, the gap is narrower due to common domestic and agrochemical exposures.',
        keyPoints: ['Choice of highly lethal methods drives the male mortality rate', 'Reluctance to seek early psychological help compounds acute crisis risk', 'Demonstrates the life-saving importance of means restriction'],
        type: 'diagnostic'
      },
      {
        id: 'fc-hsg-3',
        topicId: 'help-seeking-gender',
        term: 'Tailoring Mental Health Services for Men',
        def: 'Evidence-based strategies to engage men by reframing help-seeking as active problem-solving, strength, and resilience rather than emotional vulnerability.',
        ex: 'Community initiatives like "Men\'s Sheds" and sports-club mental fitness programs that bypass traditional clinical jargon.',
        keyPoints: ['Action-oriented and goal-focused therapeutic framing', 'Anonymous digital and telephone helplines increase male uptake', 'Reduces perceived threat to masculine identity'],
        type: 'treatment'
      }
    ],
    'help-seeking-barriers': [
      {
        id: 'fc-hsb-1',
        topicId: 'help-seeking-barriers',
        term: 'Structural vs Attitudinal Barriers to Mental Healthcare',
        def: 'Structural barriers are concrete systemic deficits (costs, absence of clinics, transportation, lack of psychiatrists); attitudinal barriers are beliefs (stigma, desire for self-reliance, low trust).',
        ex: 'Structural: Rural resident living 200 km from the nearest psychiatrist. Attitudinal: Believing "talking about problems is a sign of weakness."',
        keyPoints: ['Attitudinal barriers often outrank financial barriers in large surveys', 'National Mental Health Survey of India found treatment gap > 70%', 'Multi-pronged interventions must address both clinic supply and cultural beliefs'],
        type: 'concept'
      },
      {
        id: 'fc-hsb-2',
        topicId: 'help-seeking-barriers',
        term: 'Mental Health Literacy (Jorm et al., 1997)',
        def: 'Knowledge and beliefs about mental disorders that aid in their recognition, management, or prevention, including recognizing symptoms and knowing available evidence-based treatments.',
        ex: 'A family recognizing that a teenager\'s social withdrawal and apathy is clinical depression rather than "laziness", seeking prompt care.',
        keyPoints: ['Formulated by Anthony Jorm in 1997', 'Low mental health literacy leads to average delays of years before diagnosis', 'Public education campaigns measurably shorten duration of untreated illness'],
        type: 'concept'
      },
      {
        id: 'fc-hsb-3',
        topicId: 'help-seeking-barriers',
        term: 'Tele-MANAS (14416): Overcoming Access Barriers in India',
        def: 'India\'s 24/7 free national tele-mental health helpline network launched in October 2022, providing multilingual psychiatric triage, counseling, and referral nationwide.',
        ex: 'A student in a remote village dialing 14416 to receive immediate crisis intervention and counseling in their regional language.',
        keyPoints: ['Launched October 2022 by Ministry of Health and Family Welfare', 'NIMHANS serves as the apex coordinating digital center', 'Provides anonymous, free, instant access, dissolving geographical barriers'],
        type: 'treatment'
      }
    ],
    'cultural-issues-mh': [
      {
        id: 'fc-cimh-1',
        topicId: 'cultural-issues-mh',
        term: 'Kleinman\'s Explanatory Models of Illness (1978)',
        def: 'Arthur Kleinman\'s clinical anthropology framework assessing how patients and families understand: (1) Etiology, (2) Onset, (3) Pathophysiology, (4) Course/Severity, and (5) Expected Treatment.',
        ex: 'Clinician asking: "What do you call your problem? What do you believe caused it? What kind of treatment do you think will help?"',
        keyPoints: ['Distinguishes between disease (biological malfunction) and illness (human experience of suffering)', 'Bridges clinical misunderstandings between Western providers and traditional patients', 'Operationalized in DSM-5-TR as the Cultural Formulation Interview (CFI)'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cimh-2',
        topicId: 'cultural-issues-mh',
        term: 'Cultural Formulation Interview (CFI) in DSM-5-TR',
        def: 'A 16-question semi-structured interview protocol assessing cultural definition of the problem, cultural perceptions of cause, stressors and support, and cultural factors affecting help-seeking.',
        ex: 'Using the CFI to assess whether a patient\'s hearing of ancestor voices is experienced as psychotic distress or spiritual communing.',
        keyPoints: ['Standardized tool included in DSM-5 and DSM-5-TR', 'Assesses client and family explanatory frameworks', 'Essential for culturally competent diagnostic formulation'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cimh-3',
        topicId: 'cultural-issues-mh',
        term: 'Folk and Traditional Healing Systems in India',
        def: 'Traditional healthcare modalities (Ayurveda, Yoga, Unani, Siddha, Homeopathy - AYUSH, and faith-healing shrines) frequently utilized as first-line remedies before seeking psychiatric care.',
        ex: 'Families visiting temples or dargas for mental illness due to beliefs in supernatural curses, delaying medical consultation by months.',
        keyPoints: ['Over 60–80% of psychiatric patients in rural India consult faith healers first', 'Modern clinical guidance recommends collaborative community mental health outreach', 'Respecting cultural beliefs facilitates eventual compliance with medical care'],
        type: 'concept'
      }
    ],

    // Volume IX: Stress, Coping & Adjustment
    'stress-and-gas': [
      {
        id: 'fc-sg-1',
        topicId: 'stress-and-gas',
        term: 'Selye\'s General Adaptation Syndrome (GAS) Triad',
        def: 'Hans Selye (1936) defined the universal biological response to stressors through three sequential stages: (1) Alarm Reaction, (2) Stage of Resistance, and (3) Stage of Exhaustion.',
        ex: 'Sudden tachycardia and cortisol surge (Alarm), sustained work under deadline (Resistance), and subsequent systemic illness (Exhaustion).',
        keyPoints: ['Nonspecific biological response to any noxious demand', 'Classic triad: adrenal enlargement, thymic atrophy, gastric ulcers', 'Exhaustion reflects depletion of physiological reserves'],
        type: 'concept'
      },
      {
        id: 'fc-sg-2',
        topicId: 'stress-and-gas',
        term: 'SAM Axis vs HPA Axis in Stress Physiology',
        def: 'The SAM axis (sympathetic-adreno-medullary) triggers rapid release of epinephrine for immediate fight-or-flight; the HPA axis (hypothalamic-pituitary-adrenal) secretes sustained cortisol for gluconeogenesis.',
        ex: 'Instant pounding heart upon nearly hitting a car (SAM) vs days of elevated glucose and suppressed immunity during finals week (HPA).',
        keyPoints: ['SAM: neural, immediate, catecholamines (epinephrine, norepinephrine)', 'HPA: hormonal, prolonged, glucocorticoids (cortisol)', 'Both systems dysregulate under chronic stress'],
        type: 'neuro'
      },
      {
        id: 'fc-sg-3',
        topicId: 'stress-and-gas',
        term: 'Allostasis and Allostatic Load (McEwen)',
        def: 'Allostasis is the active biological maintenance of stability through change; allostatic load is the cumulative systemic wear-and-tear resulting from chronic, unmitigated stress activation.',
        ex: 'Chronic hypertension, metabolic syndrome, and hippocampal dendritic atrophy resulting from years of relentless corporate stress.',
        keyPoints: ['Formulated by Bruce McEwen (1993)', 'Expands upon Selye\'s homeostatic model', 'Correlates with cardiovascular morbidity and cognitive decline'],
        type: 'concept'
      }
    ],
    'coping-and-appraisal': [
      {
        id: 'fc-ca-1',
        topicId: 'coping-and-appraisal',
        term: 'Primary vs Secondary Cognitive Appraisal (Lazarus & Folkman)',
        def: 'Primary appraisal evaluates the significance of an encounter (harm/loss, threat, or challenge); secondary appraisal assesses available personal and social coping resources ("What can I do?").',
        ex: 'Primary: "This final exam determines my career (threat/challenge)." Secondary: "I have 3 weeks and a study group; I can manage this."',
        keyPoints: ['Lazarus & Folkman (1984) Transactional Model', 'Stress is mediated by cognitive appraisal, not objective events', 'Challenge appraisal elicits positive motivation and resilience'],
        type: 'concept'
      },
      {
        id: 'fc-ca-2',
        topicId: 'coping-and-appraisal',
        term: 'Problem-Focused vs Emotion-Focused Coping',
        def: 'Problem-focused coping acts directly to modify the environmental stressor (planning, active problem-solving); emotion-focused coping regulates internal emotional distress (reappraisal, acceptance).',
        ex: 'Studying for an exam (problem-focused) vs deep breathing to calm test anxiety (emotion-focused).',
        keyPoints: ['Formulated by Lazarus & Folkman (1984)', 'Goodness-of-fit: problem-focused excels in controllable situations', 'Emotion-focused is vital when dealing with uncontrollable losses (e.g., bereavement)'],
        type: 'treatment'
      },
      {
        id: 'fc-ca-3',
        topicId: 'coping-and-appraisal',
        term: 'The Goodness-of-Fit Hypothesis in Coping',
        def: 'Psychological adaptation is optimal when the type of coping matches the controllability of the stressor: problem-focused for controllable events, emotion-focused for uncontrollable events.',
        ex: 'Endlessly researching cancer cures for a terminal loved one instead of practicing emotional acceptance and grief processing (poor fit).',
        keyPoints: ['Neither coping style is universally superior', 'Rigid coping styles produce chronic distress', 'Cognitive flexibility facilitates matching strategy to situational reality'],
        type: 'concept'
      }
    ],
    'defense-mechanisms': [
      {
        id: 'fc-dm-1',
        topicId: 'defense-mechanisms',
        term: 'Repression: The Primal Defense Mechanism',
        def: 'The involuntary, unconscious banishment of anxiety-provoking thoughts, impulses, or trauma memories from conscious awareness into the dynamic unconscious (Freud).',
        ex: 'A person having no conscious recollection of a severe childhood motor vehicle accident despite suffering no head trauma.',
        keyPoints: ['Cornerstone of Sigmund Freud\'s psychoanalytic theory', 'Contrasts with suppression (which is conscious and voluntary)', 'Repressed material exerts dynamic pressure through dreams and parapraxes'],
        type: 'concept'
      },
      {
        id: 'fc-dm-2',
        topicId: 'defense-mechanisms',
        term: 'Projection vs Reaction Formation',
        def: 'Projection attributes one\'s own disowned impulses to others; Reaction Formation converts an unacceptable unconscious impulse into its exact conscious opposite.',
        ex: 'An aggressive person believing everyone else is hostile (Projection); an intensely resentful sibling acting with saccharine overt sweetness (Reaction Formation).',
        keyPoints: ['Both defenses operate unconsciously to protect the ego from guilt', 'Projection drives paranoia and interpersonal hostility', 'Reaction formation is characterized by rigid, exaggerated conscious attitudes'],
        type: 'diagnostic'
      },
      {
        id: 'fc-dm-3',
        topicId: 'defense-mechanisms',
        term: 'Sublimation and Vaillant\'s Hierarchy of Defenses',
        def: 'Sublimation is the mature defense of channeling primitive aggressive or sexual drives into constructive, creative, socially admired endeavors (e.g., surgery, athletic sport, fine art).',
        ex: 'An individual with aggressive tendencies becoming an Olympic boxer or investigative journalist.',
        keyPoints: ['Highest level (Level IV: Mature) in George Vaillant\'s empirical hierarchy', 'Does not involve repression or symptom formation', 'Strongly predicts lifespan psychological well-being and marital stability'],
        type: 'concept'
      },
      {
        id: 'fc-dm-4',
        topicId: 'defense-mechanisms',
        term: 'Intellectualisation vs Rationalisation',
        def: 'Intellectualisation insulates against emotional pain by retreating into detached abstract analysis; Rationalisation invents plausible logical excuses to justify behaviors driven by unconscious motives.',
        ex: 'Analyzing funeral statistics to avoid weeping (Intellectualisation) vs saying "I failed because the teacher was unfair" (Rationalisation).',
        keyPoints: ['Both operate as cognitive ego defenses', 'Intellectualisation removes emotion; rationalisation disguises motivation', 'Common in highly educated or articulate individuals'],
        type: 'diagnostic'
      },
      {
        id: 'fc-cbt-4',
        topicId: 'cbt',
        term: 'Behavioral Experiments in Cognitive Therapy',
        def: 'Planned experiential activities designed to gather empirical evidence to test the validity of a client\'s specific negative automatic prediction.',
        ex: 'Purposely dropping a pen in a lecture to test the belief: "Everyone will stare and ridicule me for making a sound."',
        keyPoints: ['More potent than verbal cognitive restructuring alone', 'Client predicts outcome before the test and records real observations', 'Debunks catastrophic misinterpretations in real time'],
        type: 'treatment'
      },
      {
        id: 'fc-cbt-5',
        topicId: 'cbt',
        term: 'Decatastrophizing and the Continuum Technique',
        def: 'Techniques that reduce panic by exploring: (1) "What is the absolute worst that could happen?", (2) "How would I cope?", and (3) placing the event on a 0–100% severity scale.',
        ex: 'Realizing that spilling water on a presentation podium is a 15/100 inconvenience, not a 100/100 career-ending catastrophe.',
        keyPoints: ['Counters black-and-white catastrophizing', 'Restores secondary appraisal and coping self-efficacy', 'Standard CBT problem-solving intervention'],
        type: 'treatment'
      },
      {
        id: 'fc-ptsd-4',
        topicId: 'ptsd',
        term: 'Intrusive Memories vs Normal Recall in PTSD',
        def: 'PTSD flashbacks are sensory-bound, involuntary, fragmented trauma memories lacking context (Brewin\'s Situationally Accessible Memory), experienced as happening in the here-and-now.',
        ex: 'A car backfire triggering instantaneous panic and diving under a desk as if back in a combat zone.',
        keyPoints: ['Impaired contextual integration by the hippocampus', 'Amygdala hyper-reactivity without top-down prefrontal inhibition', 'Prolonged Exposure and EMDR restore narrative hippocampal context'],
        type: 'neuro'
      },
      {
        id: 'fc-mdd-4',
        topicId: 'major-depression',
        term: 'Depressive Rumination (Nolen-Hoeksema, 1991)',
        def: 'A repetitive, passive focus on the causes, meanings, and consequences of one\'s depressive symptoms without engaging in active problem-solving.',
        ex: 'Spending hours lying awake asking "Why do I feel this way? What is wrong with my brain?" without initiating any action.',
        keyPoints: ['Drives prolonged duration and greater severity of depressive episodes', 'Contrasts with active problem-focused coping', 'Addressed directly in Behavioral Activation and Rumination-Focused CBT'],
        type: 'concept'
      },
      {
        id: 'fc-bp-4',
        topicId: 'bipolar',
        term: 'Interpersonal and Social Rhythm Therapy (IPSRT)',
        def: 'An evidence-based psychotherapy developed by Ellen Frank stabilizing circadian rhythms and sleep-wake cycles through rigid daily scheduling of wake times, meals, and social contacts.',
        ex: 'Maintaining a strict 7:00 AM wake time seven days a week to prevent circadian phase shifts that trigger hypomania.',
        keyPoints: ['Formulated by Ellen Frank (2005)', 'Circadian clock sensitivity is central to bipolar diathesis', 'Significantly reduces affective episode recurrence when paired with mood stabilizers'],
        type: 'treatment'
      },
      {
        id: 'fc-an-4',
        topicId: 'anorexia',
        term: 'Ego-Syntonic vs Ego-Dystonic Nature of Eating Disorders',
        def: 'Anorexia is typically ego-syntonic (the individual values restriction and thinness as achievements); Bulimia and OCD are typically ego-dystonic (symptoms cause shame and are recognized as unacceptable).',
        ex: 'Anorexic client feeling pride and empowerment from fasting vs bulimic client experiencing profound distress and secret shame after purging.',
        keyPoints: ['Ego-syntonic nature makes treatment engagement challenging in anorexia', 'Requires motivational interviewing before confronting dietary rules', 'Family-Based Treatment directly bypasses adolescent denial'],
        type: 'diagnostic'
      },
      {
        id: 'fc-bn-4',
        topicId: 'bulimia',
        term: 'Fairburn\'s Cognitive Maintenance Model of Bulimia',
        def: 'The cyclical trap where extreme dietary restriction leads to physiological/psychological vulnerability to binge eating, followed by panic, purging, and renewed harsh dietary restriction.',
        ex: 'Severe starvation diet → inevitable midnight binge → self-disgust & vomiting → renewed vow to starve even harder tomorrow.',
        keyPoints: ['Formulated by Christopher Fairburn (2008)', 'Over-evaluation of shape and weight is the core psychopathology', 'Regular eating patterns break the cycle without needing extreme restriction'],
        type: 'concept'
      },
      {
        id: 'fc-bed-4',
        topicId: 'binge-eating',
        term: 'Binge-Eating Disorder (BED) vs Bulimia Nervosa',
        def: 'BED involves regular binge eating episodes with loss of control and marked emotional distress, but crucially WITHOUT the regular inappropriate compensatory purging behaviors of bulimia.',
        ex: 'Consuming large amounts of food in secret followed by intense guilt and disgust, without vomiting, laxatives, or excessive fasting.',
        keyPoints: ['Formally recognized as a distinct diagnosis in DSM-5 (2013)', 'Most prevalent eating disorder in epidemiological surveys (Hudson et al., 2007)', 'Treated with CBT-E, interpersonal psychotherapy, and behavioral weight management'],
        type: 'diagnostic'
      },
      {
        id: 'fc-schiz-4',
        topicId: 'schizophrenia',
        term: 'High Expressed Emotion (High EE) and Relapse',
        def: 'A familial environment characterized by frequent critical comments, hostility, and emotional over-involvement, which doubles the rate of psychotic relapse in schizophrenia.',
        ex: 'Relatives constantly berating a patient for staying in bed or intrusive helicoptering over every movement.',
        keyPoints: ['First documented by George Brown (1958) at MRC London', 'Family psychoeducation reducing EE dramatically cuts hospitalization rates', 'High EE acts as an environmental neuroendocrine stressor triggering dopamine surges'],
        type: 'concept'
      },
      {
        id: 'fc-ocd-4',
        topicId: 'ocd',
        term: 'Inflated Responsibility in OCD (Salkovskis, 1985)',
        def: 'Paul Salkovskis\'s cognitive model positing that obsessions become clinical when individuals interpret intrusive thoughts as their personal responsibility to prevent catastrophe.',
        ex: 'Thinking "If I do not check the stove four times, my family will die in a fire and it will be completely my fault."',
        keyPoints: ['Formulated by Paul M. Salkovskis in 1985', 'Transforms normal fleeting intrusive thoughts into clinical obsessions', 'ERP and cognitive restructuring directly target the illusion of responsibility'],
        type: 'concept'
      },
      {
        id: 'fc-gad-4',
        topicId: 'gad',
        term: 'The Contrast Avoidance Model of Worry (Newman)',
        def: 'Michelle Newman\'s theory positing that individuals with GAD worry continuously to maintain negative arousal, thereby avoiding the sharp emotional pain of a sudden negative contrast.',
        ex: 'Worrying constantly about exam failure so that if bad news arrives, they are already miserable and avoid the shock of surprise.',
        keyPoints: ['Worry acts as an emotional buffer against unexpected negative shifts', 'Maintained through negative reinforcement', 'CBT targets emotional tolerance of contrast shifts'],
        type: 'concept'
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
