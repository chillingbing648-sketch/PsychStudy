/**
 * PsychStudy — The Clinical Atlas
 * University Examination Suite Data
 * Paper A, Paper B, and 16 Long-Answer Blueprint Questions (Appendix C)
 */

(function(global) {
  const paperA_data = {
    title: 'Paper A: Clinical Foundations & Affective Disorders',
    subject: 'Psychology of Adjustment',
    time: '1 Hour',
    total: 30,
    q1: {
      label: 'Fill in the Blanks (1 mark each)',
      marks: 15,
      items: [
        { q: 'Fear of social situations is called _____ phobia.', a: 'social', topicId: 'phobias' },
        { q: 'Extreme mood swings occur in _____ disorder.', a: 'bipolar', topicId: 'bipolar' },
        { q: 'Hearing voices not present in reality is called _____.', a: 'hallucinations', topicId: 'schizophrenia' },
        { q: 'False beliefs not based in reality are called _____.', a: 'delusions', topicId: 'schizophrenia' },
        { q: 'CBT stands for Cognitive _____ Therapy.', a: 'Behavioral', topicId: 'models-of-abnormality' },
        { q: 'The psychoanalytic approach was developed by Sigmund _____.', a: 'Freud', topicId: 'models-of-abnormality' },
        { q: 'Chronic mild depression lasting at least 2 years is called _____.', a: 'dysthymia', topicId: 'dysthymia' },
        { q: 'Repetitive behaviours performed to reduce anxiety are called _____.', a: 'compulsions', topicId: 'ocd' },
        { q: 'The DSM is published by the American _____ Association.', a: 'Psychiatric', topicId: 'dsm' },
        { q: 'The redirection of feelings toward a therapist from past relationships is called _____.', a: 'transference', topicId: 'models-of-abnormality' },
        { q: 'Seasonal depression is clinically known as _____ affective disorder.', a: 'Seasonal Affective Disorder', topicId: 'sad' },
        { q: 'A severe eating disorder involving extreme weight loss is _____ nervosa.', a: 'anorexia', topicId: 'anorexia' },
        { q: 'Sudden intense episodes of overwhelming fear are called _____ attacks.', a: 'panic', topicId: 'panic' },
        { q: 'Negative social attitudes toward mental illness are known as _____.', a: 'stigma', topicId: 'four-ds' },
        { q: 'The use of rewards to reinforce desired behaviour in therapy is called _____ economy.', a: 'token', topicId: 'models-of-abnormality' }
      ]
    },
    q2: {
      label: 'Long Answer Questions (Attempt ANY ONE)',
      marks: 15,
      A: 'Explain the major anxiety disorders with special reference to Generalised Anxiety Disorder (GAD) and Obsessive-Compulsive Disorder (OCD). Discuss their symptoms, diagnostic criteria, causes, and treatment approaches.',
      B: 'Discuss suicide as a psychological concern. Explain its causes (biological, psychological, and social), warning signs, and evidence-based prevention strategies with suitable examples.',
      hints: [
        'Define each disorder clearly using DSM-5-TR criteria',
        'Discuss biological, psychological, and sociocultural causes',
        'Include key psychologists and theoretical models (Clark, Borkovec, Salkovskis, Joiner)',
        'Explain evidence-based treatment approaches (CBT, ERP, DBT)',
        'Support your answer with real-world or clinical examples'
      ]
    },
    q3: {
      label: 'Short Notes (Attempt ANY THREE — 5 marks each)',
      marks: 15,
      topics: [
        {
          t: 'The Four Criteria of Abnormality (The 4 Ds)',
          pts: [
            'Distress: Subjective emotional suffering and internal pain',
            'Dysfunction: Interference with occupational, scholastic, or daily role capacity (Wakefield)',
            'Deviance: Statistical rarity and cultural norm transgression evaluated in context',
            'Danger: Least common criterion but mandates emergency crisis triage for physical safety',
            'Educational teaching heuristic rather than formal DSM-5-TR diagnostic criteria'
          ]
        },
        {
          t: 'Eating Disorders: Anorexia & Bulimia Differences',
          pts: [
            'Anorexia: Energy restriction leading to significantly low weight, fear of fat, body schema distortion',
            'Bulimia: Weekly binge-purge cycles for ≥3 months with preserved normal body weight',
            'Mortality: Anorexia exhibits ≈5.9× expected mortality, with ~1 in 5 deaths by suicide (Arcelus et al., 2011)',
            'Physical signs: Russell\'s sign (knuckle abrasions), parotid swelling, hypokalemia in bulimia',
            'Treatments: Family-Based Treatment (Maudsley) for youth, Enhanced CBT (CBT-E; Fairburn) for adults'
          ]
        },
        {
          t: 'Positive and Negative Symptoms of Schizophrenia',
          pts: [
            'Positive symptoms: Aberrant additions to consciousness (hallucinations, delusions, disorganized speech)',
            'Negative symptoms (The 5 A\'s): Affective flattening, Alogia, Anhedonia, Asociality, Avolition',
            'Etiology: Howes & Kapur (2009) Dopamine Version III (presynaptic striatal dopamine elevation)',
            'DSM-5 revisions: Classic DSM-IV subtypes eliminated in favour of dimensional severity ratings',
            'Treatment: Atypical antipsychotics (D2/5-HT2A antagonists) alongside Assertive Community Treatment'
          ]
        },
        {
          t: 'Bipolar I vs Bipolar II Disorder',
          pts: [
            'Bipolar I: Mandatory occurrence of at least one full manic episode (≥1 week or hospitalized)',
            'Bipolar II: At least one hypomanic episode (≥4 days) AND at least one major depressive episode; no mania',
            'Mania criteria: DIG FAST (Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness)',
            'Heritability: Exceptionally high twin concordance (70–85%) with circadian rhythm sensitivity',
            'Maintenance: Lithium carbonate discovered by John Cade (1949) remains the prophylactic gold standard'
          ]
        },
        {
          t: 'Borderline Personality Disorder & DBT',
          pts: [
            'Core features: Pervasive affective instability, abandonment terror, identity disturbance, and impulsivity',
            'Primitive defense: Splitting (dichotomous oscillation between idealization and devaluation)',
            'Biosocial theory (Linehan): Emotional vulnerability interacting with a pervasively invalidating environment',
            'Dialectical Behaviour Therapy (DBT): Synthesizes radical acceptance with behavioural change',
            'Four DBT modules: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness'
          ]
        }
      ]
    }
  };

  const paperB_data = {
    title: 'Paper B: Clinical Assessment, Neurobiology & Interventions',
    subject: 'Psychology of Adjustment',
    time: '1 Hour',
    total: 30,
    q1: {
      label: 'Fill in the Blanks (1 mark each)',
      marks: 15,
      items: [
        { q: 'The term schizophrenia was coined in 1911 by Eugen _____.', a: 'Bleuler' },
        { q: 'In panic disorder, catastrophic misinterpretation of somatic cues was formulated by David _____.', a: 'Clark' },
        { q: 'The master circadian pacemaker in the brain is the _____ nucleus of the hypothalamus.', a: 'suprachiasmatic' },
        { q: 'Antisocial personality disorder requires documented conduct disorder before age _____.', a: '15' },
        { q: 'The gold-standard behavioural therapy for OCD is Exposure and _____ Prevention.', a: 'Response' },
        { q: 'A biphasic vasovagal drop causing syncope is unique to Blood-Injection-_____ phobia.', a: 'Injury' },
        { q: 'The psychological defense of alternating between idealization and devaluation is called _____.', a: 'splitting' },
        { q: 'A standardized mortality ratio of 5.9x in anorexia nervosa was established by _____ et al. (2011).', a: 'Arcelus' },
        { q: 'The discovery of lithium as a mood stabilizer in 1949 was made by John _____.', a: 'Cade' },
        { q: 'Joiner\'s Interpersonal Theory attributes suicide desire to Thwarted Belongingness and Perceived _____.', a: 'Burdensomeness' },
        { q: 'The cerebellum contains approximately _____ percent of the brain\'s total neurons.', a: '80' },
        { q: 'Persistent Depressive Disorder was historically and clinically termed _____.', a: 'dysthymia' },
        { q: 'The most prevalent eating disorder in epidemiological surveys is Binge _____ Disorder.', a: 'Eating' },
        { q: 'In DSM-5-TR, catatonia was made a cross-diagnostic clinical _____.', a: 'specifier' },
        { q: 'Morning bright light phototherapy for SAD utilizes a light intensity of _____ lux.', a: '10000' }
      ]
    },
    q2: {
      label: 'Long Answer Questions (Attempt ANY ONE — 15 marks)',
      marks: 15,
      A: 'Critically analyze how clinical psychology defines abnormal behaviour. Contrast the educational Four Ds heuristic with formal DSM-5-TR diagnostic standards, and discuss the evolution of psychiatric nosology from DSM-I to DSM-5-TR and ICD-11.',
      B: 'Compare and contrast Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder across diagnostic criteria, clinical maintaining mechanisms, medical complications, and evidence-based psychological treatments.',
      hints: [
        'Differentiate between heuristic teaching models and operational criteria sets',
        'Cite Arcelus et al. (2011) and Hudson et al. (2007) for epidemiological figures',
        'Detail Fairburn\'s cognitive models and the Maudsley Family-Based Treatment protocol'
      ]
    }
  };

  // The 16 Long-Answer Questions from the PDF Blueprint (Appendix C)
  const QUESTION_BANK = [
    {
      id: 'QB-LA-1',
      num: 1,
      pdfQ: 1,
      title: 'Mental Illness Across Time and Cultures & Cultural Concepts of Distress',
      marks: 15,
      chapters: ['culture-mental-illness', 'culture-bound'],
      structure: [
        { heading: 'Historical Evolution of Mental Illness', points: ['Neolithic trephination and ancient supernaturalism', 'Hippocratic naturalism and humoral theory', 'Medieval demonology and Malleus Maleficarum (1486)', 'Moral reform movement: Pinel (1793) and Dorothea Dix (1840s)'] },
        { heading: 'Cultural Relativity vs Universalism', points: ['Universal neurobiological vulnerability vs cultural symptom expression', 'Kleinman’s medical anthropology: illness experience vs disease pathology'] },
        { heading: 'Cultural Concepts of Distress (DSM-5-TR)', points: ['Replacement of "culture-bound syndromes" with cultural concepts of distress', 'Dhat syndrome in India (semen loss and vitality depletion)', 'Koro, Ataque de Nervios, Taijin Kyofusho, and Hikikomori'] },
        { heading: 'Clinical Implications', points: ['The Cultural Formulation Interview (CFI)', 'Preventing ethnocentric misdiagnosis in diverse clinical settings'] }
      ],
      modelAnswer: `The conceptualisation of mental illness has undergone profound historical transformations, shifting across millennia from supernatural and theological explanations to organic biological models, and ultimately toward the contemporary biopsychosocial framework. In prehistoric times, evidence of cranial trephination suggests early hominids attempted to release trapped spirits or relieve intracranial pressure. Classical Greco-Roman medicine initiated naturalistic somatogenic understandings: Hippocrates rejected demonic possession, asserting that mental disturbances arose from humoral imbalances (black bile producing melancholia). However, the European Middle Ages witnessed a severe regression into demonology, epitomized by the publication of the inquisitorial treatise Malleus Maleficarum (1486), which sanctioned the brutal persecution and execution of individuals exhibiting psychotic and dissociative symptoms as witches.

The modern humanistic era commenced in the late eighteenth century with the Moral Treatment movement, led by Philippe Pinel at Bicêtre Hospital in Paris (1793), who famously unchained psychiatric inmates, and William Tuke at the York Retreat. In nineteenth-century North America and Europe, Dorothea Dix's relentless advocacy spearheaded the construction of state psychiatric hospitals. The late nineteenth and twentieth centuries inaugurated scientific nosology with Emil Kraepelin's biological classification, Sigmund Freud's psychodynamic mapping of the unconscious, and the mid-century psychopharmacological revolution catalyzed by chlorpromazine in 1952.

Cross-cultural psychiatry addresses the tension between universalism (the view that neuropsychiatric disorders are biological constants) and cultural relativism (the view that psychopathology is culturally constructed). Arthur Kleinman distinguished between disease—the biological malfunction identified by clinicians—and illness—the subjective human experience of suffering shaped by cultural idioms, explanatory models, and social institutions. 

In DSM-5 and DSM-5-TR, the outdated label "culture-bound syndrome" was replaced with "cultural concepts of distress," categorised into cultural syndromes, cultural idioms of distress, and cultural explanations. Prominent examples include:
1. Dhat Syndrome: Highly prevalent across the Indian subcontinent, characterised by debilitating anxiety, fatigue, and somatization attributed to the perceived loss of semen (dhatu) through nocturnal emissions or urine. Rooted in Ayurvedic doctrines of semen as the vital bodily essence (shukra), it reflects cultural anxiety regarding masculine depletion.
2. Koro: Prevalent in Southeast Asia, marked by acute, overwhelming panic that the genitalia are retracting into the abdomen and will cause imminent death.
3. Ataque de Nervios: Documented in Latin America, featuring trembling, uncontrollable crying, shouting, and dissociative seizures triggered by acute family distress.
4. Taijin Kyofusho: Observed in Japan, involving intense social anxiety that one's body parts, odor, or gaze will embarrass or offend others, contrasting with Western social phobia.
5. Hikikomori: Extreme social withdrawal in Japan where youth isolate in bedrooms for months or years.

To prevent diagnostic bias and ethnocentric misinterpretation, modern clinical practice utilizes the DSM-5-TR Cultural Formulation Interview (CFI), ensuring that diagnostic formulation honors the client's cultural explanatory model without pathologizing normative traditions.`,
      shortNote: `The understanding of mental illness has evolved from prehistoric trephination and medieval demonology (Malleus Maleficarum) to Hippocratic somatic naturalism, Pinel’s moral reform (1793), and modern scientific nosology. In cross-cultural psychology, Arthur Kleinman emphasized the distinction between biological disease and culturally experienced illness. DSM-5-TR retired the legacy term "culture-bound syndromes" in favor of "cultural concepts of distress." Prominent syndromes include Dhat syndrome in India (fatigue and distress attributed to semen loss), Koro in Southeast Asia (penile retraction panic), Ataque de Nervios in Latin America, and Taijin Kyofusho in Japan. Clinicians utilize the Cultural Formulation Interview (CFI) to evaluate cultural idioms of distress and prevent diagnostic error.`,
      keyTerms: ['Trephination', 'Hippocratic Humors', 'Moral Treatment', 'Pinel', 'Kleinman', 'Cultural Concepts of Distress', 'Dhat Syndrome', 'CFI'],
      rubric: [
        { marks: 4, criteria: 'Comprehensive historical progression from antiquity through moral reform to modern nosology' },
        { marks: 4, criteria: 'Accurate differentiation between disease and illness; universalism vs cultural relativism' },
        { marks: 4, criteria: 'Detailed description of cultural concepts of distress (Dhat, Koro, Ataque, Taijin Kyofusho)' },
        { marks: 3, criteria: 'Clinical application, CFI in DSM-5-TR, and APA referencing' }
      ]
    },
    {
      id: 'QB-LA-2',
      num: 2,
      pdfQ: 2,
      title: 'Anxiety Disorders: Generalised Anxiety Disorder (GAD) and Obsessive-Compulsive Disorder (OCD)',
      marks: 15,
      chapters: ['gad', 'ocd'],
      structure: [
        { heading: 'Diagnostic Criteria (DSM-5-TR)', points: ['GAD: Excessive uncontrollable worry for ≥6 months + ≥3 somatic symptoms', 'OCD: Presence of obsessions, compulsions, or both consuming >1 hour/day'] },
        { heading: 'Clinical Picture & Phenomenological Distinction', points: ['GAD as diffuse apprehension vs OCD as intrusive ego-dystonic rituals', 'Difference between normal worry and clinical rumination'] },
        { heading: 'Etiology & Theoretical Models', points: ['GAD: Borkovec Avoidance Model, intolerance of uncertainty, amygdala-PFC connectivity', 'OCD: Cortico-striato-thalamo-cortical (CSTC) hyperactivation, Salkovskis inflated responsibility'] },
        { heading: 'Evidence-Based Interventions', points: ['CBT for GAD: cognitive restructuring, stimulus control, acceptance', 'ERP for OCD: graded exposure, ritual prevention, habituation vs inhibitory learning'] }
      ],
      modelAnswer: `Anxiety disorders represent the most prevalent diagnostic category in psychiatric epidemiology. Under DSM-5-TR, Generalised Anxiety Disorder (GAD; F41.1) is classified as an Anxiety Disorder, whereas Obsessive-Compulsive Disorder (OCD; F42.2) is categorized within the distinct chapter "Obsessive-Compulsive and Related Disorders," reflecting distinct phenomenology and neurocircuitry.

Generalised Anxiety Disorder is characterized by excessive, chronic, and uncontrollable anxiety and worry about a multitude of everyday events or activities, occurring more days than not for at least six months. To meet diagnostic thresholds, the worry must be associated with at least three of the following six somatic and cognitive symptoms (only one required in children): (1) restlessness or feeling keyed up, (2) being easily fatigued, (3) difficulty concentrating or mind going blank, (4) irritability, (5) muscle tension, and (6) sleep disturbance. The clinical picture is defined by diffuse, free-floating apprehension and catastrophic cognitive forecasting.

Obsessive-Compulsive Disorder is characterized by the presence of obsessions, compulsions, or both that are time-consuming (taking more than one hour per day) or cause clinically significant distress or impairment. Obsessions are recurrent, persistent thoughts, urges, or images experienced as intrusive and unwanted, eliciting marked anxiety (e.g., contamination fears, aggressive urges). Compulsions are repetitive physical behaviors (hand washing, ordering) or mental rituals (counting, praying) that the individual feels driven to perform according to rigid rules to reduce distress or prevent a dreaded catastrophe. Unlike delusions, obsessions in OCD are typically ego-dystonic; the individual recognizes their irrationality.

Etiological models reveal distinct cognitive and neurobiological substrates. In GAD, Thomas Borkovec’s Avoidance Model posits that verbal worry functions as cognitive avoidance, blunting intense autonomic arousal and preventing emotional processing of core fears. Dugas formulated the Intolerance of Uncertainty model, demonstrating that individuals with GAD interpret ambiguity as threatening. Neurobiologically, GAD involves hypoactivity in the prefrontal cortex resulting in failure to downregulate amygdalar hyperresponsiveness. 

In OCD, Paul Salkovskis (1985) formulated the cognitive model of Inflated Responsibility and Thought-Action Fusion, where individuals interpret normal intrusive thoughts as evidence of personal culpability for catastrophe. Neuroimaging consistently demonstrates dysregulation in the Cortico-Striato-Thalamo-Cortical (CSTC) loop, specifically hyperactivation in the orbitofrontal cortex and anterior cingulate gyrus, generating an erroneous, perpetual feeling that "something is wrong."

Treatment approaches reflect these distinct mechanisms. For GAD, Cognitive Behavioural Therapy (CBT) incorporates cognitive restructuring to challenge probability overestimations, worry exposure, progressive muscle relaxation, and intolerance of uncertainty training. For OCD, Exposure and Response Prevention (ERP; Foa & Kozak, 1986) is the gold-standard psychological treatment. ERP systematically exposes patients to obsession triggers while strictly preventing compulsive rituals, facilitating habituation and inhibitory learning. Pharmacotherapy for both conditions utilizes selective serotonin reuptake inhibitors (SSRIs), with OCD requiring substantially higher doses and longer trials.`,
      shortNote: `GAD (DSM-5-TR F41.1) is characterized by excessive, uncontrollable worry across domains for ≥6 months accompanied by ≥3 somatic symptoms (restlessness, fatigue, concentration deficits, irritability, muscle tension, insomnia). Borkovec’s Avoidance Model explains worry as cognitive suppression of autonomic arousal. OCD (F42.2) involves intrusive, distressing obsessions and repetitive compulsions taking >1 hour/day. Salkovskis (1985) identified inflated responsibility and thought-action fusion as key cognitive drivers. Neurobiologically, GAD reflects impaired prefrontal-amygdala connectivity, whereas OCD stems from hyperactivation in the Cortico-Striato-Thalamo-Cortical (CSTC) loop. CBT with cognitive restructuring is first-line for GAD; Exposure and Response Prevention (ERP) is the gold-standard behavioural intervention for OCD.`,
      keyTerms: ['GAD', 'OCD', 'Borkovec Avoidance Model', 'CSTC Loop', 'Salkovskis', 'Inflated Responsibility', 'ERP', 'SSRIs'],
      rubric: [
        { marks: 4, criteria: 'Accurate DSM-5-TR diagnostic criteria for GAD and OCD' },
        { marks: 4, criteria: 'Phenomenological comparison: diffuse worry vs intrusive ego-dystonic rituals' },
        { marks: 4, criteria: 'Theoretical models and neurobiology: Borkovec, CSTC circuit, Salkovskis' },
        { marks: 3, criteria: 'Evidence-based treatment protocols: CBT, ERP, and pharmacotherapy' }
      ]
    },
    {
      id: 'QB-LA-3',
      num: 3,
      pdfQ: 3,
      title: 'Gender Differences in Mental Health Help-Seeking and The Gender Paradox of Suicide',
      marks: 15,
      chapters: ['help-seeking-gender', 'suicide'],
      structure: [
        { heading: 'Epidemiological Patterns in Help-Seeking', points: ['Female-to-male help-seeking ratio (≈ 1.5–2:1)', 'Discrepancy between subjective distress and formal consultation'] },
        { heading: 'Sociological & Psychological Mechanisms', points: ['Addis & Mahalik (2003) socialisation of masculinity', 'Stoicism, self-reliance, emotional restriction, and fear of weakness', 'Gendered presentation of distress: externalising vs internalising'] },
        { heading: 'The Gender Paradox of Suicide', points: ['Non-fatal attempt rates higher in women; suicide mortality higher in men', 'Lethality of means, social isolation, and alcohol comorbidity', 'Narrowing of the gap in India (domestic and agrochemical factors)'] },
        { heading: 'Policy & Clinical Interventions', points: ['Tailoring male-friendly services (action-oriented framing)', 'Anonymous digital helplines (Tele-MANAS 14416)', 'Community screening initiatives'] }
      ],
      modelAnswer: `Epidemiological investigations across global and Indian populations demonstrate consistent gender disparities in psychiatric help-seeking. Women seek professional mental health services at approximately 1.5 to 2 times the rate of men, despite prevalence data indicating comparable aggregate rates of mental health morbidity across genders. While women exhibit higher rates of internalising disorders (major depression, anxiety), men demonstrate markedly higher rates of externalising disorders, substance abuse, and antisocial conduct.

The psychological mechanisms underlying men's reluctance to consult mental health professionals have been systematically analysed by Addis and Mahalik (2003) through the lens of masculine gender role socialization. Traditional masculine norms emphasize stoicism, self-reliance, emotional restriction, toughness, and competitive achievement. Within this normative framework, acknowledging emotional distress or seeking professional psychological guidance is cognitively appraised as an admission of personal vulnerability, incompetence, or loss of autonomy. Consequently, men frequently mask underlying affective distress through externalising behaviors—such as increased irritability, risk-taking, vocational overwork, and substance misuse—which are rarely recognized as depressive equivalents by either themselves or their social circles. In contrast, female socialization encourages emotional expression, verbal disclosure, and the utilization of supportive interpersonal networks, thereby lowering psychological barriers to clinical consultation.

This gender divide in help-seeking intersects with one of the most sobering phenomena in psychiatric epidemiology: the Gender Paradox of Suicide. Large-scale international data indicate that women engage in non-fatal suicide attempts significantly more frequently than men; however, men die by suicide at rates three to four times higher than women in many high-income nations. This paradox is driven by several interrelated factors:
1. Lethality of Method: Men disproportionately select irreversible, violent methods (firearms, hanging, lethal falls), whereas women are more likely to ingest medication overdoses, which allow opportunities for medical resuscitation.
2. Timing of Intervention: Due to socialized reluctance to seek help, men typically present to services only in states of acute, decompensated crisis, bypassing early psychotherapeutic intervention.
3. Alcohol and Substance Misuse: Alcohol, which disinhibits impulse control and increases cognitive myopia, is far more frequently implicated in male suicides.
In India, as noted in the National Mental Health Survey (Gururaj et al., 2016), the gender gap in suicide mortality is narrower than in Western nations. Factors such as marriage-related pressures, domestic conflict, and pesticide poisoning in rural agricultural communities elevate mortality among young Indian women.

Addressing these disparities requires re-engineering mental health delivery systems. Clinical communication must adopt male-friendly framings, presenting psychological support as actionable "mental fitness," strength-building, and problem-solving rather than passive vulnerability. Low-threshold, anonymous digital platforms, such as India's Tele-MANAS (14416), remove the public scrutiny associated with clinic visits. Community-level interventions, such as workplace mental health training and sports club outreach, effectively dismantle gendered stigma.`,
      shortNote: `Women seek professional mental health care at approximately 1.5–2 times the rate of men despite equal overall distress levels. Addis and Mahalik (2003) attribute this to traditional masculine socialisation prioritizing stoicism, self-reliance, and emotional suppression. Men frequently present with externalising depressive equivalents (substance abuse, anger) rather than verbalized sorrow. This intersects with the Gender Paradox of Suicide: women attempt suicide more frequently, but men die by suicide 3–4x more often in many countries due to utilizing higher-lethality methods (hanging, firearms) and late crisis presentation. In India, the mortality gap is narrower due to domestic stressors and rural agrochemical access. Interventions require action-oriented reframing and anonymous platforms like Tele-MANAS (14416).`,
      keyTerms: ['Help-Seeking Gap', 'Addis & Mahalik', 'Masculine Socialisation', 'Gender Paradox of Suicide', 'Method Lethality', 'Tele-MANAS', 'NMHS India'],
      rubric: [
        { marks: 4, criteria: 'Epidemiological statistics on help-seeking and internalising vs externalising presentations' },
        { marks: 4, criteria: 'Socialisation theory (Addis & Mahalik) and barriers to male emotional disclosure' },
        { marks: 4, criteria: 'Detailed exposition of the Gender Paradox of Suicide with method lethality and India context' },
        { marks: 3, criteria: 'Clinical adaptation strategies and national public health initiatives' }
      ]
    },
    {
      id: 'QB-LA-4',
      num: 4,
      pdfQ: 4,
      title: 'Behaviour Therapy: Classical and Operant Conditioning Foundations & Clinical Techniques',
      marks: 15,
      chapters: ['behavior-therapy'],
      structure: [
        { heading: 'Foundational Principles of Behaviourism', points: ['Rejection of introspective mentalism; focus on observable behaviour', 'Classical conditioning (Pavlov, Watson & Rayner 1920)', 'Operant conditioning (Skinner 1953)'] },
        { heading: 'Techniques Grounded in Classical Conditioning', points: ['Systematic Desensitisation (Wolpe 1958) & Reciprocal Inhibition', 'Flooding and Implosion therapy (extinction principles)', 'Aversion therapy'] },
        { heading: 'Techniques Grounded in Operant Conditioning', points: ['Contingency management, shaping, and extinction', 'Behavioral activation for depression', 'Token economies'] },
        { heading: 'Evaluation & Contemporary Standing', points: ['Empirical strengths, brevity, and measurable outcome targets', 'Criticisms: symptom substitution myth vs cognitive neglect; emergence of CBT'] }
      ],
      modelAnswer: `Behaviour therapy represents an empirical clinical approach that applies laboratory-tested principles of learning theory to modify maladaptive human behaviour. Rooted in the behaviourist tradition pioneered by John B. Watson (1913), behaviour therapy rejects unobservable psychoanalytic constructs—such as the unconscious and intrapsychic conflict—asserting that abnormal behaviours are learned through the same lawful mechanisms as normal behaviours and can therefore be unlearned or modified through new conditioning.

The theoretical foundations rest on two primary learning paradigms:
1. Classical (Pavlovian) Conditioning: Demonstrates that when an unconditioned stimulus (UCS) that naturally elicits an unconditioned response (UCR) is repeatedly paired with a neutral conditioned stimulus (CS), the CS acquires the capacity to evoke a conditioned response (CR). In 1920, John B. Watson and Rosalie Rayner demonstrated experimentally that phobic anxiety could be conditioned in humans (the "Little Albert" study), pairing a white rat with a loud clang to produce generalized phobic avoidance.
2. Operant (Skinnerian) Conditioning: Formulated by B. F. Skinner (1953), operant conditioning posits that voluntary behaviours are shaped and maintained by environmental consequences. Reinforcement (positive or negative) increases the probability of a behaviour, whereas punishment decreases it. Avoidance behaviors in anxiety are powerfully maintained through negative reinforcement: escaping the feared stimulus terminates distress, solidifying avoidance.

Clinical techniques derived from classical conditioning include:
- Systematic Desensitisation: Developed by Joseph Wolpe (1958), this procedure relies on reciprocal inhibition—the principle that if a response incompatible with anxiety (such as deep muscle relaxation) can be made to occur simultaneously with anxiety-evoking cues, the association between those cues and fear is broken. Clients construct a graduated fear hierarchy, rated using Subjective Units of Distress (SUDs), and systematically pair imaginal or in vivo exposures with relaxation.
- Flooding: Continuous, prolonged exposure to high-intensity feared stimuli without the option of escape until the sympathetic nervous system exhausts and extinction occurs.
- Aversion Therapy: Pairing an undesirable habit with an aversive stimulus (e.g., emetic drugs paired with alcohol) to produce a conditioned aversion.

Clinical techniques derived from operant conditioning include:
- Shaping: Reinforcing successive approximations toward a complex terminal target behavior.
- Behavioral Activation (BA): An evidence-based treatment for depression that breaks the cycle of inactivity by systematically scheduling rewarding and mastery-oriented activities.
- Contingency Management & Token Economies: Using tangible reinforcement schedules to cultivate adaptive functioning.

Behaviour therapy is renowned for its scientific rigor, operationalized targets, and strong empirical efficacy in treating phobias, OCD, and developmental disorders. While early critics claimed behaviour therapy merely treated symptoms without addressing root causes, decades of empirical evidence have disproven the "symptom substitution" hypothesis, establishing behavioural principles as integral foundations of modern CBT.`,
      shortNote: `Behaviour therapy applies principles of classical (Pavlov, Watson) and operant (Skinner) conditioning to modify observable maladaptive actions. Watson and Rayner (1920) demonstrated fear conditioning, while Mowrer explained that phobias are maintained by negative reinforcement via avoidance. Key classical conditioning techniques include: (1) Systematic Desensitisation (Wolpe, 1958), which utilizes reciprocal inhibition and fear hierarchies to countercondition anxiety; (2) Flooding, which enforces prolonged exposure to induce extinction; and (3) Aversion therapy. Operant techniques include shaping, Behavioral Activation (scheduling positive reinforcement for depression), and Token Economies. Behaviour therapy is empirically validated, measurable, and free from the myth of symptom substitution.`,
      keyTerms: ['Classical Conditioning', 'Operant Conditioning', 'Watson & Rayner', 'Skinner', 'Wolpe', 'Reciprocal Inhibition', 'Systematic Desensitisation', 'Flooding', 'Behavioral Activation'],
      rubric: [
        { marks: 4, criteria: 'Theoretical foundations: classical and operant paradigms clearly explained' },
        { marks: 4, criteria: 'Detailed description of Wolpe’s systematic desensitisation and reciprocal inhibition' },
        { marks: 4, criteria: 'Operant techniques: shaping, behavioural activation, and contingency management' },
        { marks: 3, criteria: 'Critical evaluation, absence of symptom substitution, and scientific rigor' }
      ]
    },
    {
      id: 'QB-LA-5',
      num: 5,
      pdfQ: 5,
      title: 'Person-Centred Therapy: Theoretical Principles, Core Conditions, and Critical Evaluation',
      marks: 15,
      chapters: ['person-centered'],
      structure: [
        { heading: 'Philosophical & Humanistic Foundations', points: ['Carl Rogers (1951, 1957); Third Force psychology', 'The actualising tendency as innate human motivation', 'Self-concept: real self vs ideal self and incongruence'] },
        { heading: 'The Three Necessary and Sufficient Conditions', points: ['Empathy: sensing the client\'s private world "as if" it were one’s own', 'Unconditional Positive Regard (UPR): non-judgmental acceptance', 'Congruence / Genuineness: therapist authenticity and transparent presence'] },
        { heading: 'Therapeutic Process & Non-Directive Techniques', points: ['Active listening, reflection of feelings, clarifying meaning', 'Rejection of diagnostic labeling, expert interpretation, and behavioral advice'] },
        { heading: 'Evaluation & Cross-Cultural Suitability', points: ['Strengths: profound impact on counselling ethos and common factors', 'Limitations: insufficient for psychosis/severe OCD; Western individualistic bias in collective cultures (India)'] }
      ],
      modelAnswer: `Person-Centred Therapy (originally termed Client-Centred Therapy) was developed by American psychologist Carl R. Rogers in the 1940s and 1950s as a core pillar of "Third Force" humanistic psychology, emerging in direct opposition to psychoanalytic determinism and behavioural reductionism. Rogers posited a fundamentally optimistic view of human nature: every individual possesses an innate, organismic striving termed the Actualising Tendency—the directional urge toward self-maintenance, enhancement, and the realization of inherent psychological potential.

In Rogerian personality theory, psychological maladjustment originates from the internalization of Conditions of Worth. In early childhood, parental and societal acceptance is frequently made conditional upon meeting prescribed behavioral or academic expectations ("I love you only when you achieve"). Consequently, the developing individual learns to disown authentic feelings and desires, producing an acute state of Incongruence between the Real Self (organismic experiencing) and the Ideal Self (the internalized standards required to feel worthy). Incongruence engenders chronic vulnerability, defensiveness, and psychological distress.

In his seminal 1957 paper published in the Journal of Consulting Psychology, Rogers articulated the "Necessary and Sufficient Conditions of Therapeutic Personality Change." He asserted that if six interpersonal relational conditions exist and continue over a period of time, constructive personality change will invariably occur. The three primary therapist attitudes are:
1. Congruence (Genuineness): The therapist is authentically themselves within the relationship, with no professional façade or false posturing. Their internal affective experience matches their outward verbal and nonverbal communication.
2. Unconditional Positive Regard (UPR): The therapist experiences warm, non-possessive caring and acceptance for the client as a person of unconditional human worth, without judgment, evaluation, or reservation. UPR provides a corrective emotional experience that dissolves the client's rigid conditions of worth.
3. Accurate Empathic Understanding: The therapist senses the client's private emotional world "as if" it were their own, grasping meanings and emotional nuances, and successfully communicating this understanding back to the client.

The process of person-centred therapy is strictly non-directive. The therapist refrains from diagnostic testing, psychological interpretation, giving advice, or directing session content. Instead, the clinician utilizes refined active listening, paraphrasing, and reflection of feelings. By feeling unconditionally received, the client lowers defensive barriers, explores previously disowned aspects of the self, and aligns their ideal self with authentic organismic experiencing.

Critically, Rogers's assertion that these conditions are universally "sufficient" has been challenged. While modern common-factors research (Wampold, Frank) confirms that empathy and the therapeutic alliance are indispensable across all psychotherapies, pure person-centred therapy is generally insufficient for severe psychiatric conditions such as schizophrenia, bipolar mania, or severe OCD, which require specialized biological or exposure-based protocols. Furthermore, from a cross-cultural perspective (such as in India), the non-directive stance can initially perplex clients from hierarchical cultures who seek expert, structured guidance, requiring culturally responsive adaptation.`,
      shortNote: `Carl Rogers (1951, 1957) founded Person-Centred Therapy upon the premise that all humans possess an innate Actualising Tendency. Psychological distress arises from Incongruence between the Real Self and Ideal Self, caused by internalized Conditions of Worth. In his 1957 paper, Rogers delineated three core therapist attitudes that are necessary and sufficient for growth: (1) Congruence (genuineness and absence of a professional façade), (2) Unconditional Positive Regard (UPR; non-judgmental acceptance without reservation), and (3) Accurate Empathic Understanding (grasping the client\'s internal frame of reference). The technique is non-directive, relying on active listening and emotional reflection. While Rogers’s relational principles revolutionized modern psychotherapy, pure non-directive therapy is insufficient for severe neuropsychiatric disorders and may conflict with expectations of directive guidance in traditional collective cultures.`,
      keyTerms: ['Carl Rogers', 'Actualising Tendency', 'Incongruence', 'Conditions of Worth', 'Congruence', 'Unconditional Positive Regard', 'Empathy', 'Non-Directive'],
      rubric: [
        { marks: 4, criteria: 'Rogerian humanistic theory: actualising tendency, conditions of worth, and incongruence' },
        { marks: 5, criteria: 'Detailed exposition of the three core conditions (Empathy, Congruence, UPR)' },
        { marks: 3, criteria: 'Non-directive techniques: active listening and reflection of feelings' },
        { marks: 3, criteria: 'Critical evaluation: common factors evidence, clinical boundaries, and cultural fit' }
      ]
    },
    {
      id: 'QB-LA-6',
      num: 6,
      pdfQ: 6,
      title: 'Cultural Issues in Mental Health Care: Explanatory Models, Somatization, and Culturally Competent Care',
      marks: 15,
      chapters: ['cultural-issues-mh', 'culture-mental-illness'],
      structure: [
        { heading: 'The Intersection of Culture and Psychopathology', points: ['Critique of Western ethnocentrism in psychiatric diagnosis', 'Arthur Kleinman (1978): Disease (biomedical) vs Illness (cultural experience)'] },
        { heading: 'Kleinman’s Explanatory Models Framework', points: ['Five core clinical questions: Etiology, timing, pathophysiology, course, treatment', 'Bridging doctor-patient semantic and explanatory chasms'] },
        { heading: 'Somatization and Traditional Healing in India', points: ['Somatic idioms of distress as culturally sanctioned suffering', 'Concurrent utilization of AYUSH and faith-healing shrines (dargas, temples)', 'The Bellary District Mental Health Model (NMHP)'] },
        { heading: 'Culturally Adapted Clinical Interventions', points: ['The DSM-5-TR Cultural Formulation Interview (CFI)', 'Family-involved collaborative decision making vs Western individualism'] }
      ],
      modelAnswer: `Culture is not merely a superficial backdrop against which psychiatric symptoms occur; rather, culture actively structures how psychological distress is experienced, communicated, interpreted, and managed. Historically, clinical psychiatry has suffered from Western ethnocentrism, projecting Euro-American diagnostic categories onto non-Western populations without sufficient contextual sensitivity.

In cross-cultural psychiatry, Arthur Kleinman (1978, 1988) introduced the foundational distinction between Disease and Illness:
- Disease: The biological and neurophysiological malfunction conceptualized through biomedical diagnostic categories.
- Illness: The human experience of suffering—how the patient, their family, and social network perceive, explain, live with, and respond to the symptoms.

To operationalize this clinical reality, Kleinman formulated the Explanatory Models (EM) framework. Explanatory models are the notions that patients, families, and healthcare providers hold regarding an episode of sickness. Kleinman proposed that clinicians elicit five core dimensions:
1. Etiology: What does the patient believe caused the problem (e.g., supernatural displeasure, karma, bad blood, stress)?
2. Time and Mode of Onset: Why did the problem manifest at this specific juncture?
3. Pathophysiology: How does the sickness operate inside the mind and body?
4. Course and Severity: How long will it last, and what are its anticipated consequences?
5. Expected Treatment: What therapeutic modalities (allopathic, herbal, spiritual) does the client believe are essential for recovery?

In India and across many parts of Asia and Africa, Somatization represents a prominent idiom of distress. Rather than verbalizing psychological affect using Western terminology such as "depression" or "existential angst," patients frequently articulate emotional suffering through bodily complaints: gas in the head, chest tightness, burning sensations in the hands and feet, or generalized physical weakness. Somatization is not hypochondriasis or deceit; it is a culturally sanctioned, dignity-preserving idiom that minimizes social stigma and garners familial support.

Furthermore, healthcare pathways in India feature pluralistic medical systems. The National Mental Health Survey (Gururaj et al., 2016) noted that an estimated 60% to 80% of individuals with mental health concerns consult traditional folk healers, faith shrines (e.g., Balaji temple, Erwadi darga), or AYUSH practitioners prior to or concurrently with psychiatric consultation. Clinicians who dismiss these beliefs outright alienate patients and precipitate treatment default. Instead, modern clinical guidelines recommend integrating traditional healers into community mental health triage, as pioneered by the Bellary District Model under India's National Mental Health Programme (NMHP).

Culturally competent mental health care requires deploying the DSM-5-TR Cultural Formulation Interview (CFI). Clinicians must involve family systems in treatment planning, recognise collectivist coping strategies, accommodate somatic idioms, and negotiate shared therapeutic goals that integrate biomedical interventions with culturally congruent wellness practices.`,
      shortNote: `Culture profoundly shapes the manifestation and treatment of psychopathology. Arthur Kleinman (1978) distinguished between Disease (biomedical pathology) and Illness (the subjective cultural experience of suffering). Kleinman’s Explanatory Models framework explores five patient perceptions: etiology, onset, pathophysiology, course, and expected treatment. In India, distress commonly surfaces as Somatization—bodily idioms such as head pressure, chest tightness, or fatigue—which provide culturally sanctioned pathways to seek care without severe social stigma. Healthcare pathways in India are pluralistic, involving traditional faith healers and AYUSH systems alongside allopathy. Culturally competent psychiatric assessment mandates using the DSM-5-TR Cultural Formulation Interview (CFI), respecting family involvement, and bridging clinical models with client beliefs.`,
      keyTerms: ['Arthur Kleinman', 'Disease vs Illness', 'Explanatory Models', 'Somatization', 'Cultural Idioms of Distress', 'Pluralistic Healing', 'CFI', 'NMHP'],
      rubric: [
        { marks: 4, criteria: 'Ethnocentrism critique and Kleinman’s distinction between Disease and Illness' },
        { marks: 4, criteria: 'Detailed analysis of the Explanatory Models framework and its five dimensions' },
        { marks: 4, criteria: 'Somatization and pluralistic health pathways in India (NMHS data)' },
        { marks: 3, criteria: 'Culturally competent interventions, CFI in DSM-5-TR, and family involvement' }
      ]
    },
    {
      id: 'QB-LA-7',
      num: 7,
      pdfQ: 7,
      title: 'Psychoanalysis: Theoretical Foundations, Structural Model, and Core Clinical Techniques',
      marks: 15,
      chapters: ['psychoanalysis'],
      structure: [
        { heading: 'Foundational Theory of Mind', points: ['Sigmund Freud; Studies on Hysteria (Breuer & Freud 1895)', 'Topographic model: Conscious, Preconscious, Unconscious', 'Structural model: Id (pleasure), Ego (reality), Superego (morality)'] },
        { heading: 'Anxiety and Defense Mechanisms', points: ['Neurotic, realistic, and moral anxiety', 'Primary defenses: Repression, projection, reaction formation, sublimation'] },
        { heading: 'Core Clinical Techniques of Psychoanalysis', points: ['The Fundamental Rule: Free Association', 'Dream analysis: Manifest content vs latent content via dream work', 'Analysis of Transference and Countertransference', 'Resistance and Interpretation; Working Through'] },
        { heading: 'Critical Evaluation & Modern Relevance', points: ['Scientific criticisms: untestability, duration, and cost', 'Contemporary psychodynamic psychotherapy and neuroscience parallels'] }
      ],
      modelAnswer: `Psychoanalysis, formulated by Sigmund Freud between the late nineteenth and early twentieth centuries, represents both a comprehensive theory of personality and an intensive psychotherapeutic system. Originating in Freud's collaboration with Josef Breuer on Studies on Hysteria (1895), psychoanalysis revolutionized psychology by demonstrating that conscious experience is profoundly influenced by unconscious dynamic forces, repressed traumatic memories, and instinctual sexual and aggressive drives (Eros and Thanatos).

Freud conceptualized the human mind through two interrelated frameworks:
1. The Topographic Model (1900): Divides the psyche into three levels of awareness: the Conscious (immediate sensory awareness), the Preconscious (information accessible through deliberate attention), and the Unconscious (the repository of repressed drives, painful conflicts, and unacceptable wishes that are barred from consciousness by psychological censorship).
2. The Structural Model (1923): Formulated in The Ego and the Id, conceptualizing three interacting psychic agencies:
   - The Id: The primitive, instinctual reservoir present at birth, operating entirely under the Pleasure Principle, demanding immediate gratification of libidinal and aggressive drives without regard for reality or morality.
   - The Ego: The executive agency that develops out of the id through contact with reality, operating under the Reality Principle. The ego mediates between the instinctual demands of the id, the moral prohibitions of the superego, and the realistic constraints of the physical world.
   - The Superego: The internalised moral conscience and ego-ideal assimilated through parental socialisation and resolution of the Oedipus complex.

When intrapsychic conflict threatens to overwhelm the ego with neurotic or moral anxiety, the ego initiates unconscious Defense Mechanisms. The primary mechanism is Repression—the involuntary banishment of threatening impulses into the unconscious. Other prominent defenses include Projection (attributing disowned impulses to others), Reaction Formation (adopting the diametric conscious opposite of an unacceptable wish), Displacement, and Sublimation (the mature redirection of drives into socially admired creative pursuits).

The clinical technique of psychoanalysis aims to make the unconscious conscious, thereby transforming neurotic misery into normal human coping. Core therapeutic procedures include:
- Free Association: Termed by Freud the fundamental rule of psychoanalysis, in which the patient reclines on a couch and verbalizes every passing thought, feeling, or fantasy without conscious censorship, allowing repressed unconscious chains of association to surface.
- Dream Analysis: Described by Freud (1900) as the "royal road to the unconscious." The analyst deciphers the Manifest Content (the recalled surface storyline) to reveal the Latent Content (the underlying forbidden unconscious wish) by interpreting the mechanisms of "dream work" (condensation, displacement, and secondary revision).
- Analysis of Transference: The patient unconsciously redirects feelings, attitudes, and conflicts originally experienced with primary childhood caretakers onto the analyst. The development and resolution of the "transference neurosis" provides a live relational laboratory for structural personality change.
- Working Through Resistance: Analyzing subtle client behaviors (silence, lateness, intellectualisation) that impede the uncovering of unconscious material.

Critically, classical psychoanalysis has been faulted for its lack of empirical falsifiability (Karl Popper), prohibitive duration, and high financial cost. However, modified Contemporary Short-Term Psychodynamic Psychotherapy has garnered substantial empirical support for depression and personality disorders, while modern affective neuroscience has validated many core psychoanalytic premises, including implicit memory and unconscious emotional processing.`,
      shortNote: `Psychoanalysis, founded by Sigmund Freud, posits that human behavior is driven by unconscious conflicts. Freud formulated the Topographic model (Conscious, Preconscious, Unconscious) and the Structural model: Id (pleasure principle), Ego (reality principle), and Superego (moral conscience). Intrapsychic conflict produces anxiety, prompting unconscious ego defenses such as Repression, Projection, and Sublimation. The clinical objective is to make the unconscious conscious through core techniques: (1) Free Association (the fundamental rule of uncensored verbalization), (2) Dream Analysis (interpreting latent unconscious wishes beneath manifest storylines), (3) Analysis of Transference (displacing childhood emotional dynamics onto the therapist) and Countertransference, and (4) Interpreting Resistance. While classical psychoanalysis faced criticism for unscientific unfalsifiability and excessive length, contemporary psychodynamic therapy remains an evidence-based clinical modality.`,
      keyTerms: ['Sigmund Freud', 'Topographic Model', 'Structural Model', 'Id', 'Ego', 'Superego', 'Repression', 'Free Association', 'Dream Analysis', 'Transference'],
      rubric: [
        { marks: 4, criteria: 'Theoretical architecture: topographic and structural models (Id, Ego, Superego)' },
        { marks: 3, criteria: 'Ego defenses and intrapsychic anxiety mechanisms' },
        { marks: 5, criteria: 'Core clinical techniques: Free Association, Dream Analysis, Transference, Resistance' },
        { marks: 3, criteria: 'Critical evaluation: Popper’s falsifiability critique and modern psychodynamic status' }
      ]
    },
    {
      id: 'QB-LA-8',
      num: 8,
      pdfQ: 8,
      title: 'Eating Disorders: Comparative Analysis of Anorexia Nervosa, Bulimia Nervosa, and Binge-Eating Disorder',
      marks: 15,
      chapters: ['anorexia', 'bulimia', 'binge-eating'],
      structure: [
        { heading: 'Diagnostic Criteria & Differential Profiling', points: ['Anorexia Nervosa: Restriction, significantly low weight, body schema distortion', 'Bulimia Nervosa: Recurrent binge-purge cycles at normal body weight', 'Binge-Eating Disorder: Binge eating without compensatory purging (DSM-5)'] },
        { heading: 'Epidemiological & Mortality Realities', points: ['Arcelus et al. (2011) meta-analysis: 5.9x expected mortality in anorexia; 1 in 5 deaths by suicide', 'Hudson et al. (2007) prevalence data: BED as most common eating disorder'] },
        { heading: 'Etiology & Maintaining Mechanisms', points: ['Fairburn’s transdiagnostic model: Over-evaluation of shape and weight', 'Biological: Hypothalamic feeding circuits; starvation neurobiology', 'Sociocultural pressures and thin-ideal internalization'] },
        { heading: 'Medical Complications & Evidence-Based Treatments', points: ['Hypokalemia, cardiac arrhythmias, Russell\'s sign, osteopenia', 'Adolescents: Family-Based Treatment (Maudsley; Lock & Le Grange 2013)', 'Adults: Enhanced CBT (CBT-E; Fairburn 2008)'] }
      ],
      modelAnswer: `Eating disorders are complex psychiatric illnesses characterized by severe disturbances in eating behaviors, body image perception, and metabolic regulation. DSM-5 and DSM-5-TR classify three primary disorders: Anorexia Nervosa (F50.0), Bulimia Nervosa (F50.2), and Binge-Eating Disorder (F50.81).

Anorexia Nervosa is defined by three cardinal criteria: (1) Restriction of energy intake relative to requirements, leading to a significantly low body weight in the context of age, sex, developmental trajectory, and physical health; (2) Intense fear of gaining weight or becoming fat, or persistent behavior that interferes with weight gain; and (3) Disturbance in the experience of one's body weight or shape, undue influence of weight on self-evaluation, or persistent lack of recognition of the seriousness of current low body weight. DSM-5 removed the historical DSM-IV requirement of amenorrhea and numerical weight cut-offs (such as <85% of expected weight), recognizing the transdiagnostic nature of the pathology.

Bulimia Nervosa is characterized by recurrent episodes of binge eating—consuming an objectively large quantity of food within a discrete period accompanied by a sense of lack of control—followed by recurrent inappropriate compensatory behaviors to prevent weight gain (self-induced vomiting, laxative misuse, fasting, or excessive exercise). These behaviors must occur at least once a week for three months. Crucially, individuals with bulimia typically maintain a body weight at or above normal range, differentiating them from anorexia.

Binge-Eating Disorder (BED), formally recognized as an independent diagnostic category in DSM-5 based on robust epidemiological evidence (Hudson et al., 2007), involves recurrent binge-eating episodes occurring at least once weekly for three months. Binge episodes are accompanied by marked distress and at least three of the following: eating much more rapidly than normal, eating until uncomfortably full, eating large amounts when not physically hungry, eating alone due to embarrassment, and feeling disgusted, depressed, or guilty afterward. In contrast to bulimia, BED lacks recurrent compensatory purging behaviors, and individuals frequently present with clinical obesity.

The medical complications and mortality associated with eating disorders are profound. In a landmark meta-analysis of 36 studies, Arcelus, Mitchell, Wales, and Nielsen (2011) demonstrated that anorexia nervosa exhibits a standardized mortality ratio (SMR) of approximately 5.9 times expected mortality, with roughly one in five deaths resulting from suicide. Physical sequelae include bradycardia, prolonged QTc intervals, hypokalemia (triggering fatal arrhythmias in purging types), osteopenia, and Russell's sign (knuckle calluses from self-induced vomiting).

Christopher Fairburn’s (2008) cognitive maintenance model identifies the over-evaluation of shape and weight as the core engine driving extreme dietary rules. Violation of rigid rules precipitates binge eating, which triggers compensatory panic, reaffirming the perceived need for restriction.

Treatment protocols differ by age and diagnosis. For adolescents with anorexia nervosa, Family-Based Treatment (FBT / The Maudsley Approach; Lock & Le Grange, 2013) is the gold-standard intervention, empowering parents to manage weight restoration. For adults with anorexia, bulimia, and BED, Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn) represents the first-line evidence-based protocol, systematically dismantling dietary restraint and regularizing eating patterns.`,
      shortNote: `Eating disorders in DSM-5-TR comprise: (1) Anorexia Nervosa, marked by energy restriction leading to significantly low weight, intense fear of weight gain, and body schema distortion; (2) Bulimia Nervosa, characterized by weekly binge eating followed by inappropriate compensatory purging (vomiting, laxatives) while maintaining normal body weight; and (3) Binge-Eating Disorder (BED; formally codified in DSM-5), marked by binge eating with distress but without compensatory behaviors. Arcelus et al. (2011) established that anorexia carries ≈ 5.9x expected mortality, with ~20% of deaths by suicide. Medical complications include hypokalemia, cardiac arrhythmias, and Russell\'s sign. Evidence-based treatments include Family-Based Treatment (Maudsley model) for adolescents and Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn, 2008) for adults.`,
      keyTerms: ['Anorexia Nervosa', 'Bulimia Nervosa', 'Binge-Eating Disorder', 'Arcelus Meta-Analysis', 'Russell\'s Sign', 'Hypokalemia', 'Fairburn CBT-E', 'Maudsley FBT'],
      rubric: [
        { marks: 4, criteria: 'Precise DSM-5-TR diagnostic comparison across Anorexia, Bulimia, and BED' },
        { marks: 4, criteria: 'Mortality epidemiology (Arcelus et al., 2011) and severe medical complications' },
        { marks: 4, criteria: 'Cognitive maintaining mechanisms (Fairburn transdiagnostic model)' },
        { marks: 3, criteria: 'Evidence-based interventions: Maudsley FBT for adolescents and CBT-E for adults' }
      ]
    },
    {
      id: 'QB-LA-9',
      num: 9,
      pdfQ: 9,
      title: 'Personality Disorders: Comparative Analysis of Antisocial and Borderline Personality Disorders',
      marks: 15,
      chapters: ['antisocial', 'borderline'],
      structure: [
        { heading: 'General Diagnostic Architecture of Personality Disorders', points: ['Pervasive, inflexible, maladaptive patterns of inner experience and behaviour', 'Categorical (DSM-5-TR Cluster B) vs Dimensional (ICD-11 / Alternative Model)'] },
        { heading: 'Antisocial Personality Disorder (ASPD)', points: ['Disregard for and violation of rights of others since age 15', 'Mandatory childhood Conduct Disorder requirement', 'Psychopathy construct (Cleckley 1941, Hare PCL-R 2003); prefrontal/amygdala hyporeactivity'] },
        { heading: 'Borderline Personality Disorder (BPD)', points: ['Instability of relationships, self-image, affect, and marked impulsivity', 'Primitive defense of Splitting (idealization vs devaluation)', 'Linehan’s Biosocial Theory: emotional vulnerability + invalidating environment'] },
        { heading: 'Treatment Strategies & Clinical Prognosis', points: ['ASPD: Treatment resistance, management of aggression, forensic rehabilitation', 'BPD: Dialectical Behaviour Therapy (DBT; Linehan 1993) and its four core modules'] }
      ],
      modelAnswer: `Personality disorders in DSM-5-TR represent enduring patterns of inner experience and behavior that deviate markedly from the expectations of the individual's culture, are pervasive and inflexible, have an onset in adolescence or early adulthood, are stable over time, and lead to clinically significant distress or impairment. Both Antisocial Personality Disorder (ASPD; F60.2) and Borderline Personality Disorder (BPD; F60.3) belong to Cluster B—the dramatic, emotional, and erratic cluster.

Antisocial Personality Disorder is characterized by a pervasive pattern of disregard for and violation of the rights of others occurring since age 15, as indicated by at least three criteria: (1) failure to conform to lawful social norms, (2) deceitfulness and repeated lying or conning, (3) impulsivity and failure to plan ahead, (4) irritability and aggressiveness (frequent physical fights), (5) reckless disregard for safety of self or others, (6) consistent irresponsibility, and (7) lack of remorse, being indifferent to or rationalizing having hurt, mistreated, or stolen from another. Crucially, the individual must be at least 18 years old, and there must be objective evidence of Conduct Disorder with onset before age 15. In clinical research, ASPD overlaps with the construct of Psychopathy, operationalized by Robert Hare (2003) using the Psychopathy Checklist-Revised (PCL-R), characterized by glib superficial charm, callousness, shallow affect, and pathological lying. Neurobiological research demonstrates hypo-reactivity in the amygdala and orbitofrontal cortex, explaining deficient fear conditioning and insensitivity to punishment.

Borderline Personality Disorder is defined by a pervasive pattern of instability in interpersonal relationships, self-image, and affects, along with marked impulsivity, beginning by early adulthood and present across contexts. DSM-5-TR requires at least five of nine symptoms: (1) frantic efforts to avoid real or imagined abandonment, (2) unstable and intense interpersonal relationships characterized by alternating between extreme idealization and devaluation (Splitting), (3) identity disturbance, (4) impulsivity in at least two potentially self-damaging areas, (5) recurrent suicidal behavior, gestures, or non-suicidal self-injury, (6) affective instability due to marked reactivity of mood, (7) chronic feelings of emptiness, (8) inappropriate, intense anger, and (9) transient, stress-related paranoid ideation or severe dissociative symptoms.

Marsha Linehan’s (1993) Biosocial Theory conceptualizes BPD as a systemic disorder of the emotion regulation system. It arises from an innate biological vulnerability (hyper-reactive emotional sensitivity, slow return to baseline) interacting with a pervasively Invalidating Environment—a developmental context wherein the child’s emotional communications are routinely trivialized, punished, or dismissed as illegitimate.

Treatment profiles differ substantially between the two conditions. ASPD is notoriously treatment-resistant; conventional psychotherapy is rarely sought voluntarily, and interventions typically focus on contingency management, behavioral containment, and forensic rehabilitation. Conversely, BPD has become highly treatable due to specialized evidence-based psychotherapies, foremost being Dialectical Behaviour Therapy (DBT; Linehan, 1993). DBT synthesizes the dialectic tension between radical acceptance (Zen mindfulness) and active behavioral change across four modules: (1) Core Mindfulness, (2) Distress Tolerance (e.g., TIPP skills), (3) Emotion Regulation, and (4) Interpersonal Effectiveness. Longitudinal studies indicate that with DBT, over 70% of individuals with BPD achieve sustained symptomatic remission.`,
      shortNote: `Cluster B personality disorders feature dramatic, erratic behaviors. Antisocial Personality Disorder (ASPD; F60.2) requires a pervasive disregard for the rights of others since age 15, evidenced by deceitfulness, impulsivity, physical aggression, irresponsibility, lack of remorse, and documented childhood Conduct Disorder before age 15. Psychopathy (Cleckley, Hare PCL-R) emphasizes shallow affect and callousness linked to amygdalar hypo-reactivity. Borderline Personality Disorder (BPD; F60.3) features instability of relationships, self-image, and affect, abandonment terror, impulsivity, chronic emptiness, and the primitive defense of Splitting. Linehan’s Biosocial Theory explains BPD as biological emotional sensitivity interacting with an invalidating environment. ASPD presents high clinical treatment resistance, whereas BPD responds robustly to Dialectical Behaviour Therapy (DBT; Linehan, 1993) across its four skills modules.`,
      keyTerms: ['Cluster B', 'Antisocial PD', 'Conduct Disorder', 'Hare PCL-R', 'Borderline PD', 'Splitting', 'Linehan Biosocial Theory', 'Dialectical Behaviour Therapy'],
      rubric: [
        { marks: 4, criteria: 'Comparative DSM-5-TR diagnostic criteria for ASPD (including Conduct Disorder) and BPD' },
        { marks: 4, criteria: 'Psychopathy construct, Hare PCL-R, and neurobiological underpinnings of ASPD' },
        { marks: 4, criteria: 'Etiology of BPD: Linehan’s Biosocial Theory and the primitive defense of Splitting' },
        { marks: 3, criteria: 'Treatment differences: forensic management for ASPD vs DBT modules for BPD' }
      ]
    },
    {
      id: 'QB-LA-10',
      num: 10,
      pdfQ: 10,
      title: 'Sociocultural and Individual Barriers to Seeking Professional Mental Health Care',
      marks: 15,
      chapters: ['help-seeking-barriers', 'stigma'],
      structure: [
        { heading: 'The Global & Indian Mental Health Treatment Gap', points: ['NMHS India (2015-16) data: >70% treatment gap across states', 'Dichotomy between structural and attitudinal barriers'] },
        { heading: 'Attitudinal & Psychological Barriers', points: ['Public stigma, self-stigma, and anticipated discrimination (Corrigan 2004)', 'Desire for self-reliance and fear of social disclosure', 'Low mental health literacy (Jorm 1997)'] },
        { heading: 'Structural, Economic & Systemic Barriers', points: ['Shortage of psychiatric human resources in rural regions', 'Out-of-pocket healthcare expenditure and absent insurance parity', 'Fragmented primary healthcare integration'] },
        { heading: 'Strategic Interventions & Policy Frameworks', points: ['Mental Healthcare Act 2017 (parity and decriminalization of suicide)', 'Tele-MANAS national digital helpline (14416)', 'Community-based stigma reduction and primary care training (NMHP)'] }
      ],
      modelAnswer: `Despite substantial advancements in psychiatric therapeutics, the overwhelming majority of individuals with diagnosable mental disorders globally and in India do not receive evidence-based professional treatment. In psychiatric epidemiology, this discrepancy is known as the "treatment gap." The National Mental Health Survey of India (Gururaj et al., 2016), conducted by NIMHANS across 12 states, revealed an alarming treatment gap exceeding 70% to 85% for common and severe mental disorders. Analysis reveals that this gap is driven by a complex interplay of attitudinal (psychological) and structural (systemic) barriers.

Attitudinal barriers represent personal, cultural, and cognitive hurdles that impede an individual's recognition of illness or willingness to consult a professional:
1. Stigma and Social Disapproval: As conceptualized by Patrick Corrigan (2004), stigma operates on multiple levels. Public stigma involves societal stereotypes that individuals with mental illness are dangerous, unpredictable, or incompetent. Anticipated stigma causes individuals to conceal symptoms for fear of losing employment, marriage prospects, or social status. Most damagingly, Self-Stigma occurs when an individual internalizes these negative societal prejudices, generating profound shame and erosion of self-efficacy ("Why try?").
2. Desire for Self-Reliance: Large-scale surveys consistently find that the single most common attitudinal barrier is the belief that one should manage emotional problems independently, viewing professional help-seeking as a moral failure or character weakness.
3. Deficits in Mental Health Literacy: Defined by Anthony Jorm (1997) as knowledge and beliefs regarding mental disorders which aid their recognition, management, or prevention. Many individuals fail to recognize early warning signs of depression or psychosis, attributing them instead to laziness, physical weakness, or supernatural causation.

Structural and systemic barriers encompass physical, geographical, and economic impediments to service utilization:
1. Extreme Human Resource Shortages: India faces a severe scarcity of mental health professionals, with fewer than 0.75 psychiatrists and 0.07 psychologists per 100,000 population, concentrated predominantly in urban tier-one cities, leaving rural populations medically unserved.
2. Financial Catastrophe: Out-of-pocket health expenditure in India accounts for the vast majority of medical costs. Families face indirect costs of travel, lost wages, and continuous medication expenses.
3. Fragmented Primary Integration: General practitioners and community health centers often lack basic training to diagnose psychiatric morbidity, resulting in inappropriate referrals and years of diagnostic delay.

To overcome these formidable barriers, multi-tiered systemic interventions are underway. Legally, the Mental Healthcare Act 2017 mandated insurance parity between mental and physical illnesses, banned inhuman procedures, and legally decriminalized suicide attempts (Section 115). Geographically, the Government of India launched Tele-MANAS (14416) in October 2022, establishing a 24/7 free, multilingual tele-mental health network that bypasses rural transport hurdles and offers immediate, anonymous crisis intervention. Finally, community-based anti-stigma campaigns that facilitate direct social contact with persons in recovery represent the most empirically validated method to dismantle societal prejudice.`,
      shortNote: `The National Mental Health Survey of India (2015-16) documented a treatment gap exceeding 70–85%. Barriers to help-seeking fall into two broad domains: Attitudinal and Structural. Attitudinal barriers, analyzed by Patrick Corrigan (2004), center on Public Stigma, Anticipated Discrimination, and Internalized Self-Stigma, which erode self-efficacy. Additional attitudinal barriers include excessive desires for self-reliance and low Mental Health Literacy (Jorm, 1997), leading individuals to misattribute psychiatric illness to personal weakness. Structural barriers include acute shortages of mental health specialists (<1 psychiatrist per 100,000 population in India), financial burdens of out-of-pocket payments, and rural isolation. Overcoming these hurdles requires legislative reform (Mental Healthcare Act 2017), universal free digital access (Tele-MANAS 14416), and community primary care integration under the NMHP.`,
      keyTerms: ['Treatment Gap', 'NMHS India', 'Patrick Corrigan', 'Public Stigma', 'Self-Stigma', 'Mental Health Literacy', 'Mental Healthcare Act 2017', 'Tele-MANAS'],
      rubric: [
        { marks: 4, criteria: 'Empirical data on the mental health treatment gap in India and globally' },
        { marks: 4, criteria: 'Attitudinal barriers: Corrigan’s stigma typology, self-reliance, and mental health literacy' },
        { marks: 4, criteria: 'Structural and economic barriers: human resource deficits and out-of-pocket costs' },
        { marks: 3, criteria: 'Policy and digital solutions: Mental Healthcare Act 2017 and Tele-MANAS (14416)' }
      ]
    },
    {
      id: 'QB-LA-11',
      num: 11,
      pdfQ: 11,
      title: 'Behavioural Modification: Principles, Design, and Operational Architecture of the Token Economy',
      marks: 15,
      chapters: ['behavior-therapy', 'token-economy'],
      structure: [
        { heading: 'Foundational Operant Conditioning Principles', points: ['Skinnerian operant framework: positive and negative reinforcement', 'Primary reinforcers vs conditioned (secondary) reinforcers'] },
        { heading: 'Architecture of a Token Economy (Ayllon & Azrin 1968)', points: ['Identification of clear, observable target behaviours', 'Selection of the token medium (points, poker chips, cards)', 'Establishment of the backup reinforcer menu', 'Determining exchange rates and reinforcement schedules'] },
        { heading: 'Operational Procedures & Component Mechanisms', points: ['Continuous vs intermittent reinforcement; immediate delivery', 'Response Cost: rules, ethics, and negative punishment guidelines', 'Fading and generalisation planning for discharge'] },
        { heading: 'Evaluation, Ethics & Clinical Settings', points: ['Efficacy in institutional psychiatric wards and special education', 'Ethical mandates: protecting basic human rights and dignity', 'Limitations: extinction of behaviors in naturalistic environments'] }
      ],
      modelAnswer: `A Token Economy is an intensive, empirically validated behaviour modification system grounded in the operant conditioning principles formulated by B. F. Skinner (1953). Pioneered clinically by Teodoro Ayllon and Nathan Azrin (1968) in psychiatric hospital wards, a token economy systematically uses conditioned reinforcers (tokens) to bridge the temporal and physical gap between the emission of a desirable target behaviour and the receipt of meaningful primary or backup rewards.

The theoretical engine of the token economy rests on the distinction between:
- Primary (Unconditioned) Reinforcers: Stimuli that are inherently rewarding without prior learning because they satisfy innate physiological needs (food, hydration, sensory comfort).
- Conditioned (Secondary) Reinforcers: Previously neutral stimuli that acquire reinforcing properties through repeated pairings with backup reinforcers. In a token economy, tokens—such as poker chips, plastic points, stamps, or digital tallies—function as Generalized Conditioned Reinforcers because they can be exchanged for a wide variety of diverse backup items, insulating them against the rapid satiation that limits single rewards.

Constructing a clinically viable token economy requires a rigorous multi-step operational architecture:
1. Pinpointing Target Behaviours: Target behaviours must be defined in objective, measurable, and observable terms (e.g., "attending morning occupational therapy by 9:00 AM," "making one’s bed," or "brushing teeth for two minutes") rather than vague personality traits.
2. Selecting the Token Medium: The token must be light, tangible, durable, counterfeit-resistant, and easily delivered immediately following the desired response.
3. Developing the Backup Reinforcer Menu: Establishing a comprehensive inventory of privileges, recreational activities, premium foods, personal outing passes, and canteen vouchers that participants genuinely value.
4. Establishing Exchange Values: Setting precise mathematical exchange rates detailing how many tokens are earned for each target behavior and how many tokens are required to purchase specific backup privileges, maintaining motivational equilibrium.
5. Establishing Time and Place for Exchange: Scheduling regular, structured store or bank redemption sessions.

An optional disciplinary component is Response Cost—a form of negative punishment wherein a predetermined number of tokens are forfeited contingent upon the emission of severe disruptive or aggressive behaviors. Ethically and clinically, response cost must be applied calmly, consistently, and without emotional reactivity. Under contemporary legal standards (such as India's Mental Healthcare Act 2017), tokens must never be deducted from basic human rights: food, bedding, personal hygiene items, medical care, and family communication can never be contingent upon token performance.

The primary clinical limitation of token economies is Generalisation Failure. When patients are discharged from tightly controlled psychiatric wards into community environments where tokens are absent, target behaviors frequently undergo rapid extinction. To circumvent this hurdle, clinicians must incorporate Fading: systematically transitioning patients from continuous tangible token schedules to intermittent schedules, social praise, and naturalistic intrinsic reinforcers prior to discharge.`,
      shortNote: `Pioneered by Teodoro Ayllon and Nathan Azrin (1968), a Token Economy is a behavioral modification system based on Skinner’s operant conditioning. It utilizes Generalized Conditioned Reinforcers (tokens, chips, tallies) that are delivered immediately upon completion of operationalized target behaviors and later exchanged for Backup Reinforcers from a menu of privileges. Core design components include: (1) defining observable target behaviors, (2) selecting a counterfeit-resistant token medium, (3) compiling a valued backup reinforcer menu, and (4) setting balanced exchange rates. An optional component is Response Cost (negative punishment deducting tokens for infractions), which must never infringe upon basic human rights (meals, hygiene, contact). A major clinical challenge is generalisation to natural environments, necessitating systematic fading to social praise and intrinsic reinforcement before discharge.`,
      keyTerms: ['Token Economy', 'Ayllon & Azrin', 'Skinner', 'Generalized Conditioned Reinforcer', 'Backup Reinforcers', 'Response Cost', 'Fading', 'Generalisation'],
      rubric: [
        { marks: 4, criteria: 'Operant foundations: primary vs conditioned reinforcers and temporal bridging' },
        { marks: 5, criteria: 'Operational architecture: target behaviors, token medium, backup menu, exchange rates' },
        { marks: 3, criteria: 'Response cost mechanism and human rights / ethical boundaries' },
        { marks: 3, criteria: 'Evaluation: institutional efficacy and resolving generalisation failure via fading' }
      ]
    },
    {
      id: 'QB-LA-12',
      num: 12,
      pdfQ: 12,
      title: 'Group Psychotherapy: Theoretical Foundations, Curative Factors, and Stages of Group Development',
      marks: 15,
      chapters: ['group-therapy'],
      structure: [
        { heading: 'Foundations & Typologies of Group Work', points: ['Psychoeducational, support, process-oriented, and self-help groups', 'Optimal group composition, size (6–10 members), and boundary setting'] },
        { heading: 'Irvin Yalom’s 11 Curative Factors', points: ['Universality, Instillation of Hope, Imparting Information, Altruism', 'The Corrective Recapitulation of the Primary Family Group', 'Development of Socializing Techniques, Imitative Behavior, Interpersonal Learning', 'Group Cohesiveness, Catharsis, and Existential Factors'] },
        { heading: 'Tuckman’s Developmental Stages of Group Evolution', points: ['Forming (orientation and dependency)', 'Storming (conflict, differentiation, and rebellion)', 'Norming (cohesion and shared standards)', 'Performing (interpersonal work and insight)', 'Adjourning (termination and consolidation)'] },
        { heading: 'Clinical Advantages, Limitations, and Contraindications', points: ['Social microcosm of real-world relationships; cost-effectiveness', 'Breach of confidentiality risks; contraindications (acute psychosis, active suicidality)'] }
      ],
      modelAnswer: `Group psychotherapy represents an established, evidence-based modality wherein a trained clinician utilizes interpersonal dynamics within a curated collection of peers to facilitate psychological insight, emotional relief, and behavioral change. Group therapy is not merely individual therapy conducted in a crowd; rather, it functions as a dynamic "social microcosm" reflecting how each member relates to others in daily life.

Group modalities fall along a structural continuum:
- Psychoeducational Groups: Structured, didactic, manualized cohorts focusing on information dissemination and skill acquisition (e.g., anger management, DBT skills cohorts).
- Support Groups: Centered on shared life crises or chronic medical conditions (e.g., bereavement, cancer support).
- Process-Oriented Psychotherapy Groups: Less structured cohorts focusing on the "here-and-now" emotional interactions and interpersonal feedback among members.
- Self-Help / 12-Step Fellowships: Peer-led cohorts operating without professional clinicians (e.g., Alcoholics Anonymous).
The optimal size for an outpatient process group is typically 6 to 10 members; smaller groups risk silence, whereas larger groups fragment into cliques.

In his classic text, Irvin D. Yalom (Yalom & Leszcz, 2020) delineated 11 primary Curative Factors that drive therapeutic growth in groups:
1. Universality: The profound disconfirmation of a member’s feeling of unique isolation through the realization that other participants harbor identical secret pains, shameful thoughts, and insecurities.
2. Instillation of Hope: Observing the recovery of senior group members inspires optimism and self-efficacy.
3. Imparting Information: Didactic instruction by the leader and operational advice from peers.
4. Altruism: Gaining self-worth by realizing that one’s own life experiences can assist and console others.
5. The Corrective Recapitulation of the Primary Family Group: Unresolved childhood conflicts with parents and siblings are reenacted with fellow members and the therapist, allowing healthy, corrective interpersonal resolution.
6. Development of Socializing Techniques: Improving basic interpersonal communication skills through direct constructive feedback.
7. Imitative Behaviour: Modeling effective coping styles and assertiveness displayed by peers.
8. Interpersonal Learning: Learning how one’s unconscious behaviors impact others through direct, immediate "here-and-now" feedback.
9. Group Cohesiveness: The group analogue of the individual therapeutic alliance; the sense of warmth, solidarity, and mutual belonging that facilitates risk-taking.
10. Catharsis: The therapeutic venting and emotional expression of long-buried feelings.
11. Existential Factors: Confronting ultimate human concerns: mortality, freedom, isolation, and meaning.

Groups progress through predictable developmental stages, conceptualized by Bruce Tuckman (1965):
- Forming: Orientation phase characterized by anxiety, polite ambiguity, and high dependence on the leader.
- Storming: Emergence of conflict, resistance, competition for status, and direct challenges to the leader's authority. Navigating storming is essential for genuine trust.
- Norming: Development of mutual cohesion, shared ground rules, psychological safety, and honest vulnerability.
- Performing: Productive stage wherein deep interpersonal exploration, constructive confrontation, and behavioral change occur.
- Adjourning: Termination stage focusing on processing grief, consolidating gains, and planning for independent maintenance.

Clinical advantages include cost-effectiveness, combating isolation, and providing a realistic interpersonal testing ground. Contraindications include acute psychosis with paranoid agitation, active lethal suicidality, severe sociopathy, and acute organic delirium, all of which mandate initial individual crisis stabilization.`,
      shortNote: `Group psychotherapy utilizes interpersonal dynamics among peers to foster psychological change. Yalom and Leszcz (2020) formulated 11 primary Curative Factors: Universality (realizing one is not alone), Instillation of Hope, Imparting Information, Altruism, Corrective Family Recapitulation, Socializing Techniques, Imitative Behavior, Interpersonal Learning (the social microcosm), Group Cohesiveness, Catharsis, and Existential Factors. Tuckman (1965) delineated five developmental stages: Forming (polite orientation), Storming (conflict and authority challenges), Norming (cohesion and trust), Performing (productive interpersonal work), and Adjourning (termination). Group therapy is uniquely effective for social anxiety and interpersonal deficits, but is contraindicated in acute psychosis or active suicidality.`,
      keyTerms: ['Group Psychotherapy', 'Irvin Yalom', 'Curative Factors', 'Universality', 'Social Microcosm', 'Cohesiveness', 'Tuckman Stages', 'Forming to Performing'],
      rubric: [
        { marks: 3, criteria: 'Typologies of group therapy and structural parameters (size, composition)' },
        { marks: 6, criteria: 'Comprehensive analysis of Yalom’s 11 curative factors with clinical examples' },
        { marks: 3, criteria: 'Tuckman’s five developmental stages from Forming through Adjourning' },
        { marks: 3, criteria: 'Clinical indications, advantages, limitations, and absolute contraindications' }
      ]
    },
    {
      id: 'QB-LA-13',
      num: 13,
      pdfQ: 13,
      title: 'Relationship and Couples Counselling: Theoretical Models, Assessment, and Clinical Interventions',
      marks: 15,
      chapters: ['relationship-counselling'],
      structure: [
        { heading: 'Theoretical Frameworks of Relationship Functioning', points: ['Adult Attachment Theory (Bowlby, Hazan & Shaver)', 'Systems theory and circular causality in dyadic interaction'] },
        { heading: 'The Gottman Method and the Four Horsemen', points: ['John Gottman’s empirical marriage research (1999)', 'The Four Horsemen: Criticism, Contempt, Defensiveness, Stonewalling', 'Antidotes: Gentle startup, appreciation, responsibility, physiological self-soothing'] },
        { heading: 'Emotionally Focused Therapy for Couples (EFT)', points: ['Sue Johnson (2004): Adult attachment bonds and emotional de-escalation', 'Restructuring negative interactional cycles (pursue-withdraw)', 'Accessing primary vulnerable emotions beneath secondary reactive anger'] },
        { heading: 'Clinical Assessment, Skills & Critical Contraindications', points: ['Communication training: Active listening, "I" statements, repair attempts', 'Strict contraindications: Active intimate partner violence (IPV) and severe coercive control'] }
      ],
      modelAnswer: `Relationship and couples counselling is a specialized therapeutic domain focused on resolving relational distress, rebuilding intimate attachment bonds, and improving dyadic communication. Rather than viewing either partner as an identified patient, couples therapy conceptualizes the relationship itself as the client, analyzing problems through systemic circular causality—where each partner’s reaction serves as the stimulus for the other’s counter-reaction.

Two prominent theoretical frameworks dominate contemporary evidence-based practice:
1. Adult Attachment Theory: Formulated by John Bowlby and expanded by Hazan and Shaver, positing that romantic love operates as an adult attachment process. Partners look to each other for a "secure base" and "safe haven." When attachment security is threatened, individuals deploy adaptive strategies: anxious attachment evokes hyperactivating strategies (nagging, pursuing, demanding contact), while avoidant attachment evokes deactivating strategies (emotional withdrawal, silence, stonewalling).
2. The Gottman Method: Grounded in decades of physiological and behavioral observation by John M. Gottman and Nan Silver (1999) at the University of Washington "Love Lab." Gottman demonstrated that marital stability is determined not by the presence of conflict, but by how conflict is managed. Gottman identified the "Four Horsemen of the Apocalypse"—four toxic communication patterns that reliably predict relationship dissolution with over 90% accuracy:
   - Criticism: Attacking a partner's character or personality rather than addressing a specific behavior ("You always forget everything, you are so selfish"). Antidote: Gentle Startup using "I" statements focusing on specific needs.
   - Contempt: Communicating disgust, mockery, eye-rolling, sarcasm, or superiority. Contempt is the single most lethal predictor of divorce. Antidote: Building a culture of appreciation, gratitude, and mutual respect.
   - Defensiveness: Warding off a perceived attack by playing the victim, making excuses, or counter-attacking ("I wouldn't forget if you didn't nag so much"). Antidote: Taking responsibility for one's own contribution to the issue.
   - Stonewalling: Emotionally shutting down, withdrawing from the interaction, and refusing to communicate, typically occurring when physiological heart rate exceeds 100 bpm (diffuse physiological arousal). Antidote: Calling a 20-minute time-out for physiological self-soothing.

Emotionally Focused Therapy (EFT), formulated by Sue Johnson (2004), is an empirically validated experiential treatment grounded in attachment theory. EFT conceptualizes chronic marital conflict as a desperate struggle for emotional reconnection. Couples become trapped in rigid, repetitive cycles—most commonly the "Pursue-Withdraw" dance, wherein one partner's anxious pursuit triggers the other's defensive withdrawal, which further escalates the pursuer's panic. In EFT, the therapist helps partners de-escalate this cycle by looking beneath Secondary Emotions (reactive anger, frustration) to access Primary Attachment Vulnerabilities (fears of inadequacy, abandonment, unworthiness). When partners risk sharing primary vulnerabilities, compassionate bonding is restored.

Critical Assessment and Safety Mandates:
A fundamental ethical imperative in couples therapy is assessing for Intimate Partner Violence (IPV). Conjoint couples therapy is strictly contraindicated when active physical violence, terrorization, or severe coercive control is present. Conducting joint sessions in violent contexts endangers the victim, as disclosures made in the consulting room can trigger violent retaliation at home. In such scenarios, clinicians must halt couples counseling, establish immediate safety plans, and refer partners to separate individual services.`,
      shortNote: `Couples counselling treats the relationship system rather than isolated individuals. Two dominant models guide clinical practice: (1) The Gottman Method (1999), based on empirical observational research, identifies the "Four Horsemen of the Apocalypse" that predict divorce: Criticism, Contempt (the single strongest predictor), Defensiveness, and Stonewalling. Antidotes include gentle startups, building cultures of appreciation, taking responsibility, and physiological self-soothing during flooded states. (2) Emotionally Focused Therapy (EFT; Sue Johnson, 2004), grounded in adult attachment theory, de-escalates rigid "pursue-withdraw" interaction cycles by helping partners express primary attachment vulnerabilities (fear of abandonment) beneath secondary reactive anger. Crucially, couples therapy is strictly contraindicated when active intimate partner violence (IPV) or coercive control is present.`,
      keyTerms: ['Couples Counselling', 'Adult Attachment', 'Gottman Method', 'Four Horsemen', 'Contempt', 'Emotionally Focused Therapy', 'Sue Johnson', 'Pursue-Withdraw', 'IPV Contraindication'],
      rubric: [
        { marks: 3, criteria: 'Systems theory and adult attachment foundations in romantic dyads' },
        { marks: 5, criteria: 'Gottman’s Four Horsemen, predictive research, and their clinical antidotes' },
        { marks: 4, criteria: 'Emotionally Focused Therapy (EFT; Johnson): pursue-withdraw loops and primary affects' },
        { marks: 3, criteria: 'Communication skills and strict contraindications (intimate partner violence / IPV)' }
      ]
    },
    {
      id: 'QB-LA-14',
      num: 14,
      pdfQ: 14,
      title: 'Alternative and Complementary Therapies: Clinical Mechanisms, Applications, and Evidence-Graded Evaluation',
      marks: 15,
      chapters: ['alternative-therapies'],
      structure: [
        { heading: 'Overview of Complementary & Integrative Medicine', points: ['Definition of CAM vs conventional biomedical/psychological treatments', 'The necessity of honest, objective evidence-grading (strong, moderate, limited, risky)'] },
        { heading: 'Mindfulness and Meditation Protocols (Strong Evidence)', points: ['Mindfulness-Based Stress Reduction (MBSR; Kabat-Zinn 1990)', 'Mindfulness-Based Cognitive Therapy (MBCT; Segal, Williams, Teasdale)', 'Neurobiological substrates: prefrontal cortex regulation and amygdala reduction'] },
        { heading: 'Somatic & Environmental Interventions', points: ['Morning Bright Light Phototherapy for SAD (Rosenthal 1984; 10,000 lux)', 'Aerobic exercise as an evidence-based adjunctive treatment for depression', 'Creative expressive arts therapies (art, music, dance-movement therapy)'] },
        { heading: 'Traditional Systems & Pharmacological Herb Risks', points: ['Ayurvedic and traditional herbal medicines (Ashwagandha, St. John\'s Wort)', 'Critical pharmacological risks: St. John’s Wort drug interactions and Serotonin Syndrome', 'Clinical integration guidelines: ethical disclosure and non-judgmental assessment'] }
      ],
      modelAnswer: `Complementary and Alternative Medicine (CAM) in mental health encompasses a diverse spectrum of psychological, somatic, and spiritual practices utilized alongside or outside conventional psychiatric pharmacotherapy and psychotherapy. In clinical psychology, it is essential to avoid both uncritical acceptance of unproven commercial wellness fads and dogmatic dismissal of modalities supported by clinical trials. Interventions must be appraised using rigorous, evidence-graded hierarchies.

1. Mindfulness and Meditation Interventions (Evidence Grade: Strong)
Mindfulness—defined by Jon Kabat-Zinn (1990) as non-judgmental, moment-by-moment intentional awareness of internal and external experience—has transitioned from ancient Buddhist contemplative roots into mainstream evidence-based medicine. Two primary manualized protocols are:
- Mindfulness-Based Stress Reduction (MBSR): An 8-week structured program utilizing mindful breathing, body scanning, and gentle hatha yoga to treat chronic pain, stress, and anxiety.
- Mindfulness-Based Cognitive Therapy (MBCT): Developed by Zindel Segal, Mark Williams, and John Teasdale, synthesizing MBSR with cognitive therapy principles. Clinical trials confirm that MBCT is as effective as maintenance antidepressant medication in preventing depressive relapse in individuals with three or more prior episodes of major depression.
Neuroimaging reveals that regular mindfulness practice strengthens prefrontal-limbic functional connectivity, decreases amygdala hyper-reactivity, and reduces default mode network (DMN) rumination.

2. Somatic and Environmental Interventions (Evidence Grade: Strong to Moderate)
- Bright Light Phototherapy: The gold-standard treatment for Seasonal Affective Disorder (SAD; Rosenthal et al., 1984). Administered using an ultraviolet-filtered lightbox emitting 10,000 lux for 30 minutes each morning upon waking. Photons stimulate retinal ganglion cells, projecting via the retinohypothalamic tract to the suprachiasmatic nucleus (SCN) of the anterior hypothalamus, resetting circadian rhythms and suppressing morning melatonin secretion.
- Aerobic Exercise: Meta-analyses confirm that regular moderate-to-vigorous aerobic exercise (150 minutes weekly) exhibits moderate-to-large effect sizes in treating mild-to-moderate depression, stimulating brain-derived neurotrophic factor (BDNF), enhancing hippocampal neurogenesis, and normalizing inflammatory cytokines.
- Creative Arts Therapies: Modalities such as Art Therapy, Music Therapy, and Dance-Movement Therapy provide non-verbal avenues for emotional expression and trauma processing, displaying emerging-to-moderate evidence for trauma recovery and schizophrenia rehabilitation.

3. Traditional Herbal Formulations & Safety Warnings (Evidence Grade: Mixed to Risky)
Traditional systems in India (Ayurveda, Yoga, Naturopathy, Unani, Siddha, Homeopathy - AYUSH) frequently prescribe adaptogenic herbs such as Ashwagandha (Withania somnifera) for anxiety, which demonstrates emerging evidence for cortisol reduction. 
However, clinicians must remain vigilant regarding severe herb-drug interactions:
- St. John's Wort (Hypericum perforatum): Possesses mild-to-moderate efficacy in mild depression, but acts as a potent inducer of hepatic CYP3A4 enzymes (lowering circulating levels of oral contraceptives, immunosuppressants, and antiretrovirals). Crucially, when combined with prescription SSRIs, it risks precipitating fatal Serotonin Syndrome (hyperthermia, autonomic storm, rigidity, and delirium).
Clinicians must routinely assess alternative remedy usage with non-judgmental curiosity, ensuring patient safety through informed pharmacovigilance.`,
      shortNote: `Alternative therapies must be evaluated through rigorous evidence grading: (1) Strong Evidence: Mindfulness-Based Stress Reduction (MBSR; Kabat-Zinn) and Mindfulness-Based Cognitive Therapy (MBCT; Segal et al.), which reduce amygdala reactivity and prevent depressive relapse as effectively as maintenance antidepressants. (2) Strong Evidence: Morning Bright Light Phototherapy (10,000 lux; Rosenthal et al., 1984) for Seasonal Affective Disorder (SAD), acting via the retinohypothalamic tract onto the suprachiasmatic nucleus (SCN). (3) Moderate Evidence: Aerobic exercise (upregulating BDNF and neurogenesis) and creative arts therapies. (4) Mixed / High-Risk: Herbal formulations such as St. John’s Wort, which, despite mild antidepressant properties, potently induces CYP3A4 enzymes and risks fatal Serotonin Syndrome when combined with prescription SSRIs. Clinicians must routinely monitor CAM practices to prevent dangerous interactions.`,
      keyTerms: ['CAM', 'Mindfulness', 'MBSR', 'MBCT', 'Phototherapy', 'Suprachiasmatic Nucleus', 'Exercise BDNF', 'St. John’s Wort', 'Serotonin Syndrome'],
      rubric: [
        { marks: 3, criteria: 'Evidence-grading framework distinguishing proven modalities from unverified practices' },
        { marks: 4, criteria: 'Mindfulness protocols (MBSR, MBCT) and neurobiological mechanisms of action' },
        { marks: 4, criteria: 'Phototherapy for SAD (10,000 lux; SCN) and aerobic exercise neurobiology' },
        { marks: 4, criteria: 'Herbal remedies, pharmacological risks (St. John\'s Wort), and Serotonin Syndrome' }
      ]
    },
    {
      id: 'QB-LA-15',
      num: 15,
      pdfQ: 15,
      title: 'Conceptualising Psychological Disorders: Diagnostic Definitions and The Four Criteria of Abnormality',
      marks: 15,
      chapters: ['psych-disorders', 'four-ds'],
      structure: [
        { heading: 'The Formal Diagnostic Definition of a Mental Disorder', points: ['DSM-5-TR definition: clinically significant disturbance in cognition, emotion, or behaviour', 'Underlying biological, psychological, or developmental dysfunction', 'Exclusion of culturally sanctioned or expectable responses to common stressors'] },
        { heading: 'Jerome Wakefield’s Harmful Dysfunction Analysis', points: ['Synthesis of objective evolutionary dysfunction and societal value-judged harm'] },
        { heading: 'The Four Criteria of Abnormality (The Four Ds)', points: ['Distress: Subjective suffering and affective pain', 'Dysfunction: Objective role breakdown (Wakefield criteria)', 'Deviance: Statistical rarity vs cultural norm transgression', 'Danger: Emergency crisis triage for self-harm or violence'] },
        { heading: 'Critical Evaluation & Nosological Limitations', points: ['Heuristic nature of the 4 Ds (not formal DSM criteria)', 'The danger of psychiatric labeling and medicalization of normal sadness'] }
      ],
      modelAnswer: `Defining psychological abnormality is one of the most foundational yet challenging endeavors in clinical psychology and psychiatry. The line demarcating normal human emotional variation from clinical psychopathology is dimensional rather than categorical.

Under the current Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR; American Psychiatric Association, 2022), a Mental Disorder is defined as:
"A syndrome characterized by clinically significant disturbance in an individual's cognition, emotion regulation, or behavior that reflects a dysfunction in the psychological, biological, or developmental processes underlying mental functioning. Mental disorders are usually associated with significant distress or disability in social, occupational, or other important activities. An expectable or culturally approved response to a common stressor or loss, such as the death of a loved one, is not a mental disorder. Socially deviant behavior (e.g., political, religious, or sexual) and conflicts that are primarily between the individual and society are not mental disorders unless the deviance or conflict results from a dysfunction in the individual, as described above."

To anchor this definition philosophically, philosopher of medicine Jerome Wakefield (1992) formulated the influential Harmful Dysfunction analysis. Wakefield argued that a disorder exists if and only if two simultaneous criteria are met:
1. An objective, scientific component ("Dysfunction"): An internal evolutionary psychological or biological mechanism fails to perform its naturally selected function (e.g., the fear mechanism fires in the absence of danger).
2. A socially constructed value component ("Harm"): The failure produces consequences that are judged as harmful by the standards of the person's specific cultural context.

In clinical pedagogy and university curricula, abnormal behavior is frequently evaluated using the educational heuristic known as The Four Ds:
1. Distress: The subjective experience of emotional pain, sorrow, anguish, or internal turmoil. While distress is a cardinal feature of depression and anxiety, it is neither necessary nor sufficient for disorder: some disorders (such as manic episodes or antisocial psychopathy) feature little subjective distress, whereas healthy grief causes immense distress without psychopathology.
2. Dysfunction: The impairment of an individual’s ability to execute daily cognitive, occupational, scholastic, or interpersonal roles. For example, a person whose severe hand-washing compulsions cause them to lose employment exhibits clinical dysfunction.
3. Deviance: Statistical rarity and deviation from prevailing sociocultural norms, expectations, and values. However, statistical deviance alone does not constitute disorder: genius, extraordinary athletic talent, and eccentric artistic lifestyles are statistically deviant yet highly adaptive. Furthermore, cultural norms evolve over time; historically, behaviors such as homosexuality were classified as deviant before being declassified.
4. Danger: Behavior that poses an immediate risk of physical harm, injury, or fatality to oneself (suicidal intent, severe self-neglect) or to others (violent psychotic agitation). Although Danger is the least common criterion among mental health presentations, it is the most urgent, overriding elective therapeutic pacing and mandating emergency crisis intervention.

Importantly, clinical educators must emphasize that the Four Ds represent an educational teaching heuristic, not operationalized DSM-5-TR diagnostic criteria. Strict adherence to evidence-based diagnostic criteria is required to prevent the inappropriate medicalization of normal existential suffering.`,
      shortNote: `The DSM-5-TR defines a mental disorder as a clinically significant disturbance in cognition, emotion regulation, or behavior reflecting an underlying biological, psychological, or developmental dysfunction, usually associated with distress or functional disability, excluding culturally sanctioned responses to stressors. Jerome Wakefield formulated the "Harmful Dysfunction" analysis, requiring both an evolutionary mechanism failure (dysfunction) and cultural harm. Clinically, abnormality is taught using the Four Ds heuristic: (1) Distress (subjective emotional pain), (2) Dysfunction (interference with social, occupational, or academic roles), (3) Deviance (statistical rarity and cultural norm transgression), and (4) Danger (risk of physical harm to self or others, mandating crisis triage). The Four Ds are an educational teaching framework rather than formal DSM criteria.`,
      keyTerms: ['DSM-5-TR Definition', 'Harmful Dysfunction', 'Jerome Wakefield', 'Four Ds', 'Distress', 'Dysfunction', 'Deviance', 'Danger'],
      rubric: [
        { marks: 4, criteria: 'Verbatim/accurate paraphrased DSM-5-TR definition and exclusionary boundaries' },
        { marks: 3, criteria: 'Wakefield’s Harmful Dysfunction analysis (evolutionary failure + cultural harm)' },
        { marks: 5, criteria: 'Comprehensive breakdown of the Four Ds with clinical strengths and limitations' },
        { marks: 3, criteria: 'Clarification that the 4 Ds are a teaching heuristic, not formal manual criteria' }
      ]
    },
    {
      id: 'QB-LA-16',
      num: 16,
      pdfQ: 16,
      title: 'Suicidal Behaviour: Multifactorial Etiology, Clinical Warning Signs, and Evidence-Based Prevention Strategies',
      marks: 15,
      chapters: ['suicide'],
      structure: [
        { heading: 'Conceptualisation & Sociological/Psychological Models', points: ['Émile Durkheim (1897): Egoistic, Altruistic, Anomic, and Fatalistic suicide', 'Thomas Joiner’s Interpersonal-Psychological Theory of Suicide (2005)', 'Desire (Thwarted Belongingness + Perceived Burdensomeness) + Acquired Capability'] },
        { heading: 'Multifactorial Biopsychosocial Etiology', points: ['Biological: Serotonergic hypofunction (low CSF 5-HIAA), genetic vulnerability', 'Psychological: Cognitive rigidity, hopelessness, severe trauma history', 'Sociocultural: Economic insolvency, stigma, discrimination, domestic discord'] },
        { heading: 'Clinical Warning Signs & Emergency Triage', points: ['Acute warning signs (IS PATH WARM heuristic): Ideation, Sub abuse, Purposelessness, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood changes', 'Direct verbal threats, settling affairs, giving away prized possessions'] },
        { heading: 'Evidence-Based Prevention & Intervention Strategies', points: ['Means Restriction: The single most effective public health suicide prevention strategy', 'Psychotherapy: Dialectical Behaviour Therapy (DBT) and CBT for Suicide Prevention (CBT-SP)', 'Safety Planning Intervention (Stanley & Brown); Tele-MANAS (14416) in India'] }
      ],
      modelAnswer: `Suicide is a complex, tragic public health catastrophe resulting from the confluence of neurobiological vulnerabilities, acute psychological distress, and adverse sociocultural environments. In contemporary clinical suicidology, suicide is recognized not as an isolated moral failure or random impulse, but as the fatal outcome of unbearable psychological pain—what Edwin Shneidman termed "psychache."

Sociological and psychological models provide foundational frameworks:
1. Émile Durkheim’s Sociological Typology (1897): Durkheim demonstrated that suicide rates correlate inversely with social integration and moral regulation, identifying four archetypes:
   - Egoistic: Resulting from low social integration and extreme alienation.
   - Altruistic: Resulting from excessive social integration, sacrificing oneself for the group (e.g., kamikaze pilots).
   - Anomic: Triggered by sudden societal collapse, economic disruption, or rapid rule deregulation.
   - Fatalistic: Caused by unbearable, oppressive societal over-regulation (e.g., enslaved persons).
2. Thomas Joiner’s Interpersonal Theory of Suicide (2005): Joiner resolved why many people desire death but few die by suicide. Joiner posited that the lethal desire for suicide emerges from the simultaneous intersection of two painful interpersonal states:
   - Thwarted Belongingness: The painful experience of being alienated and socially isolated ("I am completely alone").
   - Perceived Burdensomeness: The distorted cognitive conviction that one’s existence is a liability to loved ones ("My family would be better off without me").
Crucially, Joiner emphasized that the desire for suicide alone is insufficient for fatal action; the individual must also possess the Acquired Capability for Suicide—fearlessness of physical pain and fearlessness of death developed through habituation to violence, repeated self-harm, physical abuse, or combat trauma.

The etiology of suicidal behaviour is fundamentally biopsychosocial:
- Biological: Post-mortem and cerebrospinal fluid (CSF) studies consistently demonstrate blunted serotonergic neurotransmission and decreased levels of 5-hydroxyindoleacetic acid (5-HIAA) in the ventromedial prefrontal cortex, impairing behavioral impulse control.
- Psychological: High trait neuroticism, Aaron Beck’s construct of pervasive Cognitive Hopelessness, severe childhood sexual or physical abuse, and profound perfectionism.
- Sociocultural: Financial catastrophe, debt crises among agricultural workers, relationship dissolution, domestic violence, and lack of social support.

Clinical assessment requires identifying acute warning signs, summarized by the evidence-based "IS PATH WARM" mnemonic: Ideation, Substance abuse, Purposelessness, Anxiety/agitation, Trapped feelings, Hopelessness, Withdrawal from social contact, Anger, Recklessness, and Mood changes. Red-flag behaviors include explicit verbal disclosures of wanting to die, giving away prized possessions, drafting farewell notes, and unexpected calm after deep depression (indicating a settled decision).

Evidence-based prevention strategies operate across population and clinical tiers:
1. Means Restriction: The single most potent, life-saving public health strategy worldwide. Restricting access to lethal suicide methods—such as banning lethal pesticides in rural agricultural communities, constructing bridge safety barriers, and regulating firearm access—produces permanent reductions in suicide rates because suicidal crises are frequently acute, transient, and method-specific.
2. Clinical Psychotherapy: Dialectical Behaviour Therapy (DBT; Linehan) and Cognitive Therapy for Suicide Prevention (CBT-SP) are proven to dramatically reduce repeat suicide attempts by teaching emotion regulation and distress tolerance.
3. Safety Planning Intervention (Stanley & Brown): A structured, personalized clinical tool identifying personal warning signs, internal coping strategies, distracting social contacts, and emergency crisis telephone contacts.
4. National Helplines: In India, the launch of Tele-MANAS (14416 / 1-800-891-4416) provides free, 24/7 multilingual tele-mental health triage, supported by the decriminalization of suicide attempts under Section 115 of the Mental Healthcare Act 2017.`,
      shortNote: `Suicide is a multifactorial public health crisis. Sociologically, Durkheim (1897) identified Egoistic, Altruistic, Anomic, and Fatalistic suicides based on social integration and regulation. Psychologically, Thomas Joiner’s (2005) Interpersonal Theory posits that suicidal desire arises from Thwarted Belongingness and Perceived Burdensomeness, but lethal action requires the Acquired Capability for Suicide (habituation to pain and fearlessness of death). Biologically, blunted prefrontal serotonergic signaling (low CSF 5-HIAA) impairs impulse inhibition. Acute warning signs are indexed by the "IS PATH WARM" mnemonic (Ideation, Substance use, Purposelessness, Anxiety, Trapped, Hopelessness, Withdrawal, Anger, Recklessness, Mood swings). Prevention relies heavily on Means Restriction (pesticide bans, bridge barriers), Stanley & Brown Safety Plans, DBT, and 24/7 crisis helplines such as India's Tele-MANAS (14416).`,
      keyTerms: ['Durkheim Typology', 'Thomas Joiner', 'Thwarted Belongingness', 'Perceived Burdensomeness', 'Acquired Capability', 'Serotonergic 5-HIAA', 'IS PATH WARM', 'Means Restriction', 'Tele-MANAS'],
      rubric: [
        { marks: 4, criteria: 'Theoretical models: Durkheim’s sociology and Joiner’s Interpersonal Theory' },
        { marks: 4, criteria: 'Biopsychosocial etiology: neurobiology (serotonin 5-HIAA), psychological hopelessness, and social factors' },
        { marks: 4, criteria: 'Clinical warning signs (IS PATH WARM) and behavioral indicators of acute crisis' },
        { marks: 3, criteria: 'Evidence-based prevention: Means restriction, Stanley-Brown safety planning, and Tele-MANAS' }
      ]
    }
  ];

  // Provide root compatibility for legacy renderExam() alongside Paper A / Paper B & Question Bank
  global.EXAM_DATA = {
    subject: paperA_data.subject,
    time: paperA_data.time,
    total: paperA_data.total,
    q1: paperA_data.q1,
    q2: paperA_data.q2,
    q3: paperA_data.q3,
    paperA: paperA_data,
    paperB: paperB_data,
    questionBank: QUESTION_BANK
  };
})(typeof window !== 'undefined' ? window : globalThis);
