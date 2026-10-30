/**
 * PsychStudy — The Clinical Atlas
 * Volume IV: Eating & Feeding Disorders
 * Chapters:
 *   4.1 anorexia (Anorexia Nervosa)
 *   4.2 bulimia (Bulimia Nervosa)
 *   4.3 binge-eating (Binge Eating Disorder)
 */

(function(global) {
  global.KB = global.KB || [];

  const VOLUME_IV = [
    {
      id: 'anorexia',
      volume: 'IV',
      order: 1,
      template: 'disorder',
      category: 'Eating Disorders',
      icon: 'feather',
      name: 'Anorexia Nervosa',
      preview: 'Severe restriction of energy intake, intense fear of weight gain, and body schema distortion.',
      definition: 'Anorexia Nervosa is a serious, life-threatening eating disorder characterized by persistent restriction of energy intake leading to a significantly low body weight in the context of age, sex, developmental trajectory, and physical health, accompanied by an intense fear of gaining weight and a marked disturbance in body image.',
      explanation: `### Modern Diagnostic Evolution (DSM-5-TR)
The clinical conceptualization of Anorexia Nervosa has evolved significantly. Under older diagnostic frameworks (such as DSM-IV), criteria rigidly required weight below 85% of expected norms and the mandatory presence of amenorrhoea (absence of menstrual cycles) in postmenarchal females. In DSM-5 and DSM-5-TR (APA, 2022; ICD-10 F50.0 / ICD-11 6B80), amenorrhoea was explicitly eliminated—recognizing that it excludes males, pre-pubertal females, females on oral contraceptives, and postmenopausal women. Furthermore, rigid numeric weight thresholds were replaced with the clinical standard: "significantly low body weight," evaluated against standardized developmental and cultural expectations.

### Three Cardinal Diagnostic Features
Under DSM-5-TR, diagnosis requires all three of the following:
1. Restriction of energy intake relative to requirements, leading to a significantly low body weight in the context of age, developmental stage, and physical health.
2. Intense fear of gaining weight or becoming fat, or persistent behaviour that interferes with weight gain, even though at a significantly low weight.
3. Disturbance in the way in which one's body weight or shape is experienced, undue influence of body weight or shape on self-evaluation, or persistent lack of recognition of the seriousness of the current low body weight.

DSM-5-TR delineates two distinct clinical subtypes:
- Restricting Type: During the past 3 months, the individual has not engaged in recurrent episodes of binge eating or purging behaviour (e.g., self-induced vomiting or misuse of laxatives). Weight loss is accomplished primarily through dieting, fasting, and/or excessive exercise.
- Binge-Eating/Purging Type: During the past 3 months, the individual has engaged in recurrent episodes of binge eating or purging behaviour.

### Mortality and Somatic Complications
Anorexia nervosa is one of the most medically hazardous psychiatric conditions. A landmark comprehensive meta-analysis of 36 longitudinal studies by Arcelus, Mitchell, Wales, and Nielsen (2011) established that individuals with anorexia nervosa exhibit an aggregate standardized mortality ratio (SMR) of approximately 5.9 times expected mortality compared to age-matched peers. Crucially, the meta-analysis revealed that roughly one in five deaths in anorexia nervosa were attributable to suicide, alongside severe somatic complications such as cardiac arrhythmias, electrolyte collapse (hypokalemia), bradycardia, osteopenia, and multiorgan failure.

### Neurobiology and Parietal Body Schema Disruption
Functional neuroimaging reveals significant disruptions in parietal-insular somatosensory circuits. Hypoactivation in the right inferior parietal lobule and precuneus leads to a neurobiological disturbance of the internal "body schema," explaining why patients visually and haptically experience their emaciated bodies as overweight. Alterations in dopamine reward pathways also lead individuals with anorexia to find food restriction rewarding rather than aversive.

### Evidence-Based Treatment
Treatment necessitates a phased biopsychosocial approach. The initial absolute priority is medical stabilization and structured nutritional rehabilitation. Once somatic safety is established, evidence-based psychotherapy is introduced: Family-Based Treatment (FBT / Maudsley Method; Lock & Le Grange, 2013) is the gold standard for adolescents, empowering parents to manage nutritional re-feeding. In adults, Enhanced Cognitive Behaviour Therapy for Eating Disorders (CBT-E; Fairburn, 2008) systematically addresses overvaluation of shape and perfectionism.`,
      keyPoints: [
        'DSM-5-TR dropped amenorrhoea and rigid percentage weight thresholds in favour of "significantly low weight"',
        'Requires energy restriction, intense fear of weight gain, and profound body shape disturbance',
        'Subtypes: Restricting Type (dieting, fasting, exercise) vs Binge-Eating/Purging Type',
        'Meta-analysis (Arcelus et al., 2011) demonstrates ≈5.9× expected mortality; ~1 in 5 deaths by suicide',
        'Parietal-insular hypoactivation impairs internal body schema processing, sustaining dysmorphia',
        'Treatments: Medical refeeding, Family-Based Treatment (Maudsley; Lock & Le Grange) for youth, CBT-E (Fairburn)'
      ],
      types: [
        'Restricting Type (Weight loss via dieting, fasting, excessive exercise)',
        'Binge-Eating/Purging Type (Engages in recurrent vomiting, laxative misuse, or purging)',
        'Severity Specifiers (by BMI descriptors): Mild, Moderate, Severe, Extreme'
      ],
      symptoms: [
        'Persistent refusal to maintain minimal physiological body weight',
        'Terrifying, phobic fear of weight gain despite severe physical emaciation',
        'Distorted perception of body shape and size (body schema distortion)',
        'Physiological signs: hypothermia, lanugo hair, bradycardia, hypotension, peripheral edema',
        'Severe denial of medical vulnerability and resistance to treatment'
      ],
      psychologists: [
        'Christopher G. Fairburn (2008) — Developed Enhanced Cognitive Behaviour Therapy (CBT-E) for eating disorders',
        'James Lock & Daniel Le Grange (2013) — Manualized Family-Based Treatment (Maudsley Method) for adolescent anorexia'
      ],
      examples: [
        'A 16-year-old dancer who restricts intake to lettuce and water, runs ten miles daily, and insists she has massive fat stores despite severe emaciation and bradycardia',
        'A university student whose severe food restriction and daily purging led to hospitalization for life-threatening hypokalemic cardiac arrhythmia'
      ],
      treatment: 'Immediate medical stabilization and re-feeding to restore physiological safety. Family-Based Treatment (FBT / Maudsley Method; Lock & Le Grange, 2013) for adolescents; Enhanced CBT (CBT-E; Fairburn, 2008) and Specialist Supportive Clinical Management (SSCM) for adults.',
      summary: 'Anorexia Nervosa involves severe energy restriction, intense fear of weight gain, and body schema distortion. Carrying an SMR of ≈5.9 with ~1 in 5 deaths by suicide (Arcelus et al., 2011), it requires medical stabilization, FBT for adolescents, and CBT-E for adults.',
      mnemonic: 'FEAR — Food restriction · Extreme fear of weight · Altered body image · Refusal to recognize severity',
      codes: { icd10cm: ['F50.00', 'F50.01', 'F50.02'], icd11: ['6B80'], note: 'DSM-5-TR 307.1 Anorexia Nervosa' },
      criteria: [
        'Restriction of energy intake relative to requirements leading to significantly low body weight',
        'Intense fear of gaining weight or becoming fat, or persistent behaviour that interferes with weight gain',
        'Disturbance in body weight/shape experience, undue influence on self-evaluation, or denial of seriousness of low weight',
        'Specify whether Restricting Type or Binge-Eating/Purging Type',
        'Specify current severity based on clinical BMI descriptors (Mild, Moderate, Severe, Extreme)'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Anorexia Nervosa is approximately 0.9% in women and 0.3% in men in international epidemiological surveys (Hudson et al., 2007). In India, prevalence is rising rapidly in urban centers linked to changing media ideals and globalization. Onset peaks in mid-to-late adolescence (ages 14–18).',
        stats: [
          { claim: 'Standardized mortality ratio in anorexia nervosa meta-analysis', value: '≈ 5.9× expected mortality', refId: 'arcelus2011', confidence: 'high' },
          { claim: 'Proportion of deaths attributable to suicide in anorexia nervosa', value: '≈ 1 in 5 deaths', refId: 'arcelus2011', confidence: 'high' },
          { claim: 'Lifetime prevalence of Anorexia Nervosa in adult females', value: '0.9%', refId: 'hudson2007', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Heritability estimated at 50–60%', 'Altered 5-HT1A serotonin receptor density and altered dopamine reward signaling', 'Neuroendocrine dysregulation (blunted leptin and elevated ghrelin)'],
        psychological: ['Clinical perfectionism, cognitive rigidity, and high need for control', 'Overvaluation of shape and weight as the primary determinant of self-worth (Fairburn)'],
        sociocultural: ['Western thin-ideal internalization promoted by visual social media and peer surveillance', 'Acculturation stress in rapidly urbanizing global economies'],
        integrative: 'Perfectionistic and anxious temperaments interact with sociocultural thin-ideal pressures to trigger restriction, which becomes physiologically reinforced.'
      },
      neuro: {
        regions: ['parietal', 'frontal'],
        note: 'Hypoactivation of the right inferior parietal lobule and precuneus impairs objective somatosensory body schema processing, while altered insular activity blunts interoceptive awareness.'
      },
      differential: [
        { vs: 'Bulimia Nervosa', distinguishingFeature: 'Individuals with Bulimia Nervosa maintain body weight at or above normal physiological ranges, whereas individuals with Anorexia Nervosa are at a significantly low body weight.' },
        { vs: 'Avoidant/Restrictive Food Intake Disorder (ARFID)', distinguishingFeature: 'ARFID involves severe food restriction leading to nutritional deficiency and low weight, but lacks any fear of weight gain, body image distortion, or overvaluation of thinness.' }
      ],
      comorbidity: ['major-depression', 'ocd', 'social-anxiety', 'gad'],
      caseFile: {
        title: 'Case Vignette: The Unforgiving Mirror',
        composite: true,
        text: 'Ananya, a 17-year-old classical dancer, was brought to an adolescent medical clinic by her parents after fainting during rehearsals. Over nine months, Ananya had systematically eliminated carbohydrates, dairy, and fats, surviving on black tea and raw cucumber while practicing six hours daily. Despite extreme physical emaciation, sunken eyes, and fine lanugo hair on her back, Ananya wept during the interview, pointing to her abdomen and insisting she was disgustingly flabby. Her resting heart rate was 38 bpm (severe bradycardia), and her blood pressure was 80/50 mmHg, prompting immediate emergency admission for cardiac stabilization.',
        questions: [
          'How does Ananya\'s presentation fulfill DSM-5-TR diagnostic criteria for Anorexia Nervosa (Restricting Type)?',
          'Why does Family-Based Treatment (Maudsley Method) prioritize parental management of re-feeding before addressing psychological themes?'
        ]
      },
      myths: [
        { myth: 'Anorexia nervosa is merely a superficial vanity issue or extreme diet.', fact: 'Anorexia is a severe psychiatric disorder with complex genetic, neurobiological, and cognitive drivers, carrying an aggregate mortality rate 5.9 times higher than expected.', refId: 'arcelus2011' },
        { myth: 'A woman cannot be diagnosed with anorexia nervosa if she is still menstruating.', fact: 'The amenorrhoea criterion was completely eliminated in DSM-5; diagnosis requires energy restriction, intense fear of weight gain, and body schema distortion.', refId: 'apa2022' },
        { myth: 'People with anorexia never eat food because they lack an appetite.', fact: 'Individuals with anorexia experience biological hunger but rigidly suppress it through intense cognitive control and anxiety-driven restriction.', refId: 'fairburn2008' }
      ],
      exam: {
        pdfQ: [8, 13],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Criteria and DSM-5 Revisions', points: ['Elimination of amenorrhoea and rigid 85% weight threshold', 'The three core criteria: energy restriction, fear of weight gain, body schema distortion', 'Subtypes: Restricting vs Binge-Eating/Purging'] },
          { heading: 'Medical Risks and Empirical Mortality', points: ['Arcelus et al. (2011) meta-analysis: 5.9x expected mortality SMR', 'Suicide mortality (~1 in 5 deaths)', 'Systemic somatic collapse: bradycardia, arrhythmias, bone loss'] },
          { heading: 'Etiology and Evidence-Based Interventions', points: ['Parietal body schema distortion and clinical perfectionism', 'Medical stabilization and re-feeding protocols', 'Family-Based Treatment (Maudsley) for youth and CBT-E for adults'] }
        ],
        modelAnswer: 'Anorexia Nervosa (DSM-5-TR 307.1 / ICD-10 F50.0) is a life-threatening psychiatric condition characterized by severe restriction of nutritional intake, extreme fear of weight gain, and profound body schema distortion.\n\nIn DSM-5 and DSM-5-TR, significant revisions modernized the diagnosis: the older DSM-IV requirement of amenorrhoea was dropped to prevent gender and age bias, and the rigid criterion of weight ≤85% of normal was replaced with "significantly low body weight" evaluated in developmental context. Diagnostic criteria mandate: (1) persistent restriction of energy intake leading to significantly low body weight; (2) intense fear of gaining weight or becoming fat, or persistent behaviour preventing weight gain; and (3) disturbance in body weight/shape self-evaluation or denial of the severity of emaciation. Two clinical subtypes are recognized: Restricting Type (weight loss via dieting, fasting, and exercise) and Binge-Eating/Purging Type (recurrent purging or bingeing episodes).\n\nAnorexia exhibits profound medical and psychiatric lethality. A comprehensive meta-analysis of 36 studies by Arcelus, Mitchell, Wales, and Nielsen (2011) established that anorexia nervosa carries a standardized mortality ratio (SMR) of approximately 5.9 times expected mortality. Furthermore, roughly one in five deaths were by suicide. Physiological sequelae include life-threatening cardiac arrhythmias, hypokalemia, hypothermia, lanugo hair, and osteopenia.\n\nEtiologically, functional neuroimaging reveals hypoactivation in the right inferior parietal lobule and precuneus, providing a neurobiological mechanism for severe body schema distortions. Cognitive models (Fairburn, 2008) emphasize the overvaluation of shape/weight and clinical perfectionism. Treatment prioritizes immediate medical re-feeding, followed by Family-Based Treatment (FBT / Maudsley Method; Lock & Le Grange, 2013) for adolescents and Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn) for adult populations.',
        shortNote: 'Anorexia Nervosa involves persistent energy restriction leading to significantly low weight, intense fear of weight gain, and body schema distortion. Exhibiting an SMR of ≈5.9 with ~1 in 5 deaths by suicide (Arcelus et al., 2011), it is treated via medical stabilization, Maudsley FBT, and CBT-E.',
        mnemonics: ['FEAR: Food restriction, Extreme fear of weight, Altered body image, Refusal to recognize severity'],
        keyTerms: ['Anorexia Nervosa', 'Significantly low body weight', 'Body schema distortion', 'Arcelus meta-analysis', 'Standardized mortality ratio', 'Family-Based Treatment (Maudsley)', 'CBT-E', 'Fairburn']
      },
      related: ['bulimia', 'binge-eating', 'ocd', 'major-depression'],
      refs: ['apa2022', 'who2022', 'arcelus2011', 'hudson2007', 'fairburn2008', 'lock2013'],
      contentNote: 'Discusses eating disorders, body dysmorphia, and medical complications. No specific calorie numbers or restrictive weight loss practices are included. If you are struggling with food or body image, support is available via national eating disorder and mental health services.',
      lastVerified: '2026-10'
    },
    {
      id: 'bulimia',
      volume: 'IV',
      order: 2,
      template: 'disorder',
      category: 'Eating Disorders',
      icon: 'refresh-ccw',
      name: 'Bulimia Nervosa',
      preview: 'The binge-purge cycle, inappropriate compensatory behaviours, and overvaluation of shape.',
      definition: 'Bulimia Nervosa is an eating disorder characterized by recurrent episodes of binge eating accompanied by a sense of lack of control, followed by recurrent inappropriate compensatory behaviours (such as self-induced vomiting, laxative abuse, fasting, or excessive exercise) to prevent weight gain, occurring on average at least once a week for three months.',
      explanation: `### The Binge-Purge Cycle
Bulimia Nervosa (DSM-5-TR 307.51 / ICD-10 F50.2 / ICD-11 6B81) is defined by a repetitive, self-perpetuating behavioural cycle:
1. Strict Dietary Restriction: Driven by intense overvaluation of body shape and weight, the individual adheres to rigid, unrealistic dietary rules.
2. The Binge Episode: Dietary deprivation and psychological deprivation inevitably break down, precipitating an objective binge episode: consuming, in a discrete period of time (e.g., within any 2-hour period), an amount of food that is definitely larger than what most individuals would eat under similar circumstances, accompanied by a subjective sense of lack of control.
3. Panic and Compensatory Purging: Overwhelmed by intense guilt, self-disgust, and terror of weight gain, the individual engages in inappropriate compensatory behaviours—most commonly self-induced vomiting, abuse of laxatives, diuretics, or enemas, strict fasting, or compulsive excessive exercise.
4. Temporary Relief and Renewed Restriction: Purging provides temporary psychological relief and autonomic tension reduction, which negatively reinforces the purging behaviour and triggers a renewed commitment to strict dietary restriction, restarting the cycle.

### Diagnostic Criteria (DSM-5-TR)
Under DSM-5-TR, diagnosis requires:
1. Recurrent episodes of binge eating.
2. Recurrent inappropriate compensatory behaviours to prevent weight gain.
3. The binge eating and inappropriate compensatory behaviours both occur, on average, at least once a week for 3 months.
4. Self-evaluation is unduly influenced by body shape and weight.
5. The disturbance does not occur exclusively during episodes of anorexia nervosa.

### Somatic Markers and Medical Hazards
Unlike anorexia, individuals with bulimia nervosa typically maintain body weight within or above normal physiological ranges. Because the disorder is practiced in secret, it often remains undetected for years. However, chronic purging causes severe medical complications:
- Electrolyte Imbalance: Hypokalemia (low potassium) and hypochloremic metabolic alkalosis, carrying severe risks of cardiac arrhythmias and cardiac arrest.
- Russell\'s Sign: Calluses, abrasions, or scars on the dorsal surface of the hands caused by repeated contact with the incisors during self-induced vomiting.
- Sialadenosis: Painful, benign enlargement of the parotid salivary glands ("chipmunk cheeks") secondary to repeated vomiting.
- Dental Enamel Erosion (Perimylolysis): Severe erosion of the lingual surfaces of maxillary teeth caused by hydrochloric gastric acid.

### Cognitive Model and Treatment
Christopher G. Fairburn\'s (2008) transdiagnostic cognitive-behavioural model demonstrates that the central maintaining mechanism in bulimia nervosa is the overvaluation of shape and weight. Treatment of choice is Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn, 2008), which establishes regular eating patterns, eliminates strict dietary restraint, and restructures core self-worth schemas. Fluoxetine (an SSRI at high doses of 60 mg/day) is the only FDA-approved medication demonstrating proven efficacy in reducing binge-purge frequency.`,
      keyPoints: [
        'Requires binge eating + inappropriate compensatory behaviours occurring ≥1/week for 3 months',
        'Crucial distinction from anorexia: individuals with bulimia maintain body weight at or above normal levels',
        'Objective binge: unusually large quantity of food consumed within 2 hours with loss of control',
        'Physical hallmarks: Russell\'s sign (hand calluses), parotid gland enlargement, dental enamel erosion',
        'Electrolyte derangement (hypokalemia) poses life-threatening cardiac arrhythmia risks',
        'Treatment: CBT-E (Fairburn, 2008) is the gold standard; high-dose fluoxetine (60 mg) reduces binge frequency'
      ],
      types: [
        'Bulimia Nervosa (Purging Methods: vomiting, laxatives, diuretics)',
        'Bulimia Nervosa (Non-purging Methods: fasting, excessive exercise)',
        'Severity Specifiers (by compensatory episodes per week): Mild (1–3), Moderate (4–7), Severe (8–13), Extreme (14+)'
      ],
      symptoms: [
        'Recurrent secretive binge-eating episodes with feelings of loss of control',
        'Self-induced vomiting, abuse of laxatives, or compulsive excessive workouts',
        'Intense, pervasive shame and guilt regarding eating habits',
        'Russell\'s sign (scarring on knuckles from induced vomiting)',
        'Swollen parotid salivary glands and severe dental enamel erosion'
      ],
      psychologists: [
        'Christopher G. Fairburn (2008) — Developed Cognitive Behaviour Therapy for Eating Disorders (CBT-E)',
        'Gerald Russell (1979) — First formally delineated Bulimia Nervosa as an ominous variant of anorexia'
      ],
      examples: [
        'A university student who secretly consumes an entire family cake, two tubs of ice cream, and three orders of fries in one hour, followed by crying and purging in the bathroom, repeating this three times weekly',
        'An athlete who forces herself to run for three hours whenever she eats a slice of pizza, driven by intense panic over body shape'
      ],
      treatment: 'Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn, 2008) is the premier evidence-based psychological treatment. High-dose fluoxetine (60 mg/day) significantly attenuates binge-purge urges. Interpersonal Psychotherapy (IPT) provides a robust alternative.',
      summary: 'Bulimia Nervosa involves weekly binge-purge episodes for ≥3 months with preserved normal body weight. Driven by shape overvaluation and maintained by dietary restraint, it is diagnosed clinically and treated definitively with CBT-E and fluoxetine.',
      mnemonic: 'PURGE — Purging/compensatory acts · Uncontrolled binges · Recurrent for 3 months (≥1/wk) · Guilt and shape overvaluation · Electrolyte hazards',
      codes: { icd10cm: ['F50.2'], icd11: ['6B81'], note: 'DSM-5-TR 307.51 Bulimia Nervosa' },
      criteria: [
        'Recurrent episodes of binge eating characterized by eating an abnormally large quantity of food within a 2-hour period and a sense of lack of control',
        'Recurrent inappropriate compensatory behaviours to prevent weight gain (vomiting, laxatives, fasting, excessive exercise)',
        'Both binge eating and compensatory behaviours occur on average at least once a week for 3 months',
        'Self-evaluation is unduly influenced by body shape and weight',
        'Disturbance does not occur exclusively during episodes of anorexia nervosa'
      ],
      epidemiology: {
        text: 'The lifetime prevalence of Bulimia Nervosa is approximately 1.0% in women and 0.1–0.5% in men (Hudson et al., 2007; Kessler et al., 2005). The peak age of onset is slightly later than anorexia, typically occurring in late adolescence and emerging adulthood (ages 17–22).',
        stats: [
          { claim: 'Lifetime prevalence of Bulimia Nervosa in adult females', value: '1.0%', refId: 'hudson2007', confidence: 'high' },
          { claim: 'Standardized mortality ratio for Bulimia Nervosa in meta-analyses', value: '≈ 1.9× expected mortality', refId: 'arcelus2011', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Dysregulated central 5-HT serotonergic satiety pathways', 'Altered dopamine-mediated reward responses to palatable sweet foods'],
        psychological: ['Overvaluation of shape, weight, and thinness as the foundation of self-esteem', 'Dichotomous ("all-or-nothing") cognitive thinking rules regarding food'],
        sociocultural: ['Pervasive social media glorification of thinness and peer comparison', 'Family environments characterized by conflict and body-focused criticism'],
        integrative: 'Dietary restriction creates physiological deprivation that triggers loss-of-control bingeing, followed by purge-reinforced relief.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Blunted prefrontal inhibitory control circuitry during food presentation tasks, alongside altered insular taste reward processing.'
      },
      differential: [
        { vs: 'Anorexia Nervosa (Binge-Eating/Purging Type)', distinguishingFeature: 'Individuals with binge-purging anorexia nervosa are at a significantly low body weight; individuals with bulimia nervosa maintain body weight at or above normal physiological levels.' },
        { vs: 'Binge Eating Disorder (BED)', distinguishingFeature: 'Binge Eating Disorder features recurrent binge eating but lacks any regular inappropriate compensatory behaviours (no vomiting, fasting, or laxative misuse).' }
      ],
      comorbidity: ['major-depression', 'borderline', 'substance-use', 'gad'],
      caseFile: {
        title: 'Case Vignette: The Secret Burden',
        composite: true,
        text: 'Meera, a 22-year-old law student of average weight, presented to the university dental clinic with severe sensitivity and enamel erosion on the back of her upper incisors. The dentist observed calluses across her right knuckles (Russell\'s sign) and bilaterally swollen cheeks (parotid hypertrophy). When gently asked about her eating patterns, Meera broke down, revealing that for two years she had engaged in secretive bingeing four nights a week—consuming massive quantities of pastries and noodles in her bedroom before inducing vomiting in the communal shower. She expressed overwhelming shame, reporting that her entire self-worth depended on keeping her waistline under control.',
        questions: [
          'How do Meera\'s physical symptoms (dental erosion, Russell\'s sign, parotid swelling) reflect the medical consequences of bulimia nervosa?',
          'How does Fairburn\'s cognitive model explain why strict dieting paradoxically triggers Meera\'s binge episodes?'
        ]
      },
      myths: [
        { myth: 'You can easily tell if someone has bulimia nervosa just by looking at their weight.', fact: 'Most individuals with bulimia nervosa maintain an entirely normal body weight or are slightly overweight, keeping their rituals hidden for years.', refId: 'fairburn2008' },
        { myth: 'Purging through vomiting or laxatives eliminates all the calories consumed during a binge.', fact: 'Self-induced vomiting removes at best only half the calories consumed, and laxatives act on the large intestine after calories have already been absorbed.', refId: 'who2022' },
        { myth: 'Bulimia is simply lack of willpower and gluttony.', fact: 'Bulimia is a serious neurobiological and cognitive disorder maintained by extreme dietary restraint, altered serotonin signalling, and deep distress.', refId: 'apa2022' }
      ],
      exam: {
        pdfQ: [8],
        marks: 15,
        structure: [
          { heading: 'Diagnostic Definition and Frequency Criteria', points: ['DSM-5-TR requirement of bingeing + compensatory actions ≥1/week for 3 months', 'Definition of objective binge eating (quantity + lack of control)', 'Crucial weight difference from anorexia nervosa'] },
          { heading: 'Physical Hallmarks and Medical Sequelae', points: ['Hypokalemia and cardiac risks', 'Russell\'s sign, sialadenosis (parotid swelling), perimylolysis (enamel loss)'] },
          { heading: 'Fairburn\'s Cognitive Model and Treatment', points: ['The vicious cycle: strict dieting -> binge -> panic -> purge -> temporary relief', 'Enhanced CBT (CBT-E; Fairburn)', 'High-dose fluoxetine pharmacotherapy'] }
        ],
        modelAnswer: 'Bulimia Nervosa (DSM-5-TR 307.51 / ICD-10 F50.2) is a severe eating disorder characterized by recurrent episodes of binge eating accompanied by compensatory behaviours designed to prevent weight gain.\n\nAccording to DSM-5-TR criteria, diagnosis requires: (1) recurrent binge-eating episodes characterized by consuming an objectively large quantity of food within a discrete 2-hour window and experiencing a subjective loss of control; (2) recurrent inappropriate compensatory behaviours (self-induced vomiting, misuse of laxatives/diuretics, fasting, or excessive exercise); (3) both bingeing and compensatory behaviours occurring, on average, at least once a week for at least three consecutive months; and (4) self-evaluation unduly influenced by body shape and weight. Crucially, the disorder does not occur exclusively during anorexia nervosa; patients with bulimia nervosa maintain normal or above-normal body weight.\n\nClinically, bulimia is associated with distinct somatic markers: Russell\'s sign (knuckle abrasions from contact with teeth during vomiting), sialadenosis (benign enlargement of parotid salivary glands creating a rounded facial appearance), and perimylolysis (hydrochloric acid erosion of dental enamel). The most dangerous physiological hazard is hypokalemia (potassium depletion), which can induce fatal cardiac arrhythmias.\n\nCognitively, Christopher Fairburn\'s (2008) model explains that the core maintaining psychopathology is the overvaluation of shape and weight. This leads to rigid, unrealistic dietary restriction. Dietary deprivation inevitably triggers loss-of-control bingeing; the subsequent panic and guilt drive compensatory purging, which provides immediate anxiety relief (operant negative reinforcement) while renewing the cycle of strict dieting.\n\nTreatment of choice is Enhanced Cognitive Behaviour Therapy (CBT-E; Fairburn), which normalizes eating patterns and dismantles overvaluation schemas. Pharmacotherapy with high-dose fluoxetine (60 mg daily) significantly reduces binge-purge frequency.',
        shortNote: 'Bulimia Nervosa involves weekly binge-purge episodes for ≥3 months with preserved normal body weight. Driven by shape overvaluation and dietary restraint, physical markers include Russell\'s sign, parotid swelling, and hypokalemic cardiac risk. First-line therapy is CBT-E and fluoxetine.',
        mnemonics: ['PURGE: Purging acts, Uncontrolled binges, Recurrent (≥1/wk for 3 mos), Guilt/shape overvaluation, Electrolyte hazards'],
        keyTerms: ['Bulimia Nervosa', 'Objective binge eating', 'Compensatory behaviours', 'Russell\'s sign', 'Sialadenosis', 'Hypokalemia', 'CBT-E', 'Fairburn', 'Fluoxetine']
      },
      related: ['anorexia', 'binge-eating', 'major-depression', 'borderline'],
      refs: ['apa2022', 'who2022', 'fairburn2008', 'arcelus2011', 'hudson2007'],
      contentNote: 'Discusses eating disorders, purging behaviours, and physical complications. No pro-eating disorder tips or specific caloric values are detailed. Confidential support is available through national mental health helplines.',
      lastVerified: '2026-10'
    },
    {
      id: 'binge-eating',
      volume: 'IV',
      order: 3,
      template: 'disorder',
      category: 'Eating Disorders',
      icon: 'pie-chart',
      name: 'Binge Eating Disorder (BED)',
      preview: 'Recurrent loss-of-control binge eating without compensatory purging; the most prevalent eating disorder.',
      definition: 'Binge Eating Disorder (BED) is characterized by recurrent episodes of eating objectively large quantities of food in discrete periods accompanied by a subjective sense of lack of control and marked personal distress, occurring at least once a week for three months, in the complete absence of regular inappropriate compensatory behaviours.',
      explanation: `### Formal Diagnostic Recognition in DSM-5
For decades, binge eating without purging was relegated to an appendix category in DSM-IV ("Eating Disorder Not Otherwise Specified"). In DSM-5 (2013) and maintained in DSM-5-TR (APA, 2022; ICD-10 F50.81 / ICD-11 6B82), Binge Eating Disorder was formally elevated to an independent psychiatric diagnosis. Large-scale epidemiological surveys, including the National Comorbidity Survey Replication (Hudson et al., 2007), established that Binge Eating Disorder is the single most prevalent eating disorder in the general population, with lifetime rates substantially surpassing those of anorexia and bulimia combined.

### Diagnostic Criteria (DSM-5-TR)
Under DSM-5-TR, diagnosis requires:
1. Recurrent episodes of binge eating. An episode of binge eating is characterized by both of the following:
   - Eating, in a discrete period of time (e.g., within any 2-hour period), an amount of food that is definitely larger than what most people would eat in a similar period of time under similar circumstances.
   - A sense of lack of control over eating during the episode (e.g., a feeling that one cannot stop eating or control what or how much one is eating).
2. The binge-eating episodes are associated with at least three (or more) of the following:
   - Eating much more rapidly than normal
   - Eating until feeling uncomfortably full
   - Eating large amounts of food when not feeling physically hungry
   - Eating alone because of feeling embarrassed by how much one is eating
   - Feeling disgusted with oneself, depressed, or very guilty afterward
3. Marked distress regarding binge eating is present.
4. The binge eating occurs, on average, at least once a week for 3 months.
5. The binge eating is NOT associated with the recurrent use of inappropriate compensatory behaviour as in bulimia nervosa and does not occur exclusively during the course of bulimia nervosa or anorexia nervosa.

### Psychological Mechanisms and Emotional Regulation
Unlike bulimia, where bingeing is primarily triggered by physiological starvation from extreme dieting, binge eating in BED functions predominantly as an emotion regulation strategy. Individuals with BED use palatable, energy-dense foods to temporarily soothe, numb, or dissociate from intolerable negative affect, loneliness, anxiety, or interpersonal stress. However, post-binge self-disgust and severe shame promptly trigger renewed negative affect, perpetuating a chronic emotional eating cycle.

### Epidemiology and Comorbidities
In the National Comorbidity Survey Replication (Hudson et al., 2007), lifetime prevalence was estimated at 3.5% among women and 2.0% among men, demonstrating a significantly more balanced gender ratio than anorexia or bulimia. While BED is frequently associated with obesity, the conditions are clinically distinct: the vast majority of obese individuals do not have BED, and BED involves distinct psychological distress, genetic vulnerability, and neurocognitive impulsivity. Medical complications include metabolic syndrome, Type 2 diabetes, hypertension, and non-alcoholic fatty liver disease.

### Treatment Modalities
Gold-standard psychological treatment is Cognitive Behavioural Therapy for Binge Eating (CBT-E; Fairburn, 2008), which focuses on identifying emotional triggers, establishing structured meals, and developing non-food emotional regulation skills. Interpersonal Psychotherapy (IPT) displays equivalent long-term efficacy by resolving social and interpersonal disputes that provoke bingeing. Pharmacological options include lisdexamfetamine (the only FDA-approved medication for moderate-to-severe BED) and topiramate.`,
      keyPoints: [
        'Formally recognized as an independent diagnostic category in DSM-5 (2013)',
        'Most prevalent eating disorder: 3.5% in women, 2.0% in men (Hudson et al., 2007)',
        'Requires binge episodes + ≥3 of 5 behavioral features (rapid eating, eating till uncomfortably full, eating without hunger, eating alone, post-binge self-disgust)',
        'Occurs on average at least once a week for 3 months without compensatory purging',
        'Functions predominantly as a maladaptive emotional regulation strategy for intolerable negative affect',
        'Treatment: CBT-E (Fairburn, 2008), Interpersonal Therapy (IPT), and lisdexamfetamine'
      ],
      types: [
        'Binge Eating Disorder (Mild: 1–3 episodes/week)',
        'Binge Eating Disorder (Moderate: 4–7 episodes/week)',
        'Binge Eating Disorder (Severe: 8–13 episodes/week)',
        'Binge Eating Disorder (Extreme: 14+ episodes/week)'
      ],
      symptoms: [
        'Eating abnormally massive amounts of food in short intervals with total loss of control',
        'Eating in secret due to overwhelming embarrassment and shame',
        'Intense, paralyzing post-binge self-disgust, depression, and guilt',
        'Eating rapidly without physical hunger until painfully bloated and full',
        'Absence of any compensatory purging, vomiting, or excessive workouts'
      ],
      psychologists: [
        'James I. Hudson et al. (2007) — Comprehensive epidemiological documentation of BED prevalence',
        'Christopher G. Fairburn (2008) — Established CBT protocols for binge-eating cessation'
      ],
      examples: [
        'A corporate manager who locks his office door every evening and consumes four burgers, two large fries, and three milkshakes within an hour while feeling powerless to stop, weeping afterward',
        'An individual who binge-eats large containers of rice and sweet snacks in secret late at night when feeling lonely, experiencing severe self-disgust without ever vomiting'
      ],
      treatment: 'CBT for Binge Eating (CBT-E; Fairburn, 2008) is the first-line treatment. Interpersonal Psychotherapy (IPT) yields comparable long-term cessation of bingeing. Pharmacotherapy: Lisdexamfetamine (Vyvanse) and SSRIs.',
      summary: 'BED is characterized by weekly loss-of-control bingeing for ≥3 months without compensatory purging. Elevated to an official diagnosis in DSM-5, it is the most prevalent eating disorder (Hudson et al., 2007) and responds decisively to CBT-E and IPT.',
      mnemonic: 'RAPID — Rapid eating · Alone due to shame · Painfully full · Intolerable post-binge guilt · Daily hunger absent',
      codes: { icd10cm: ['F50.81'], icd11: ['6B82'], note: 'DSM-5-TR 307.51 Binge Eating Disorder' },
      criteria: [
        'Recurrent episodes of binge eating (consuming abnormally large amounts within 2 hours with loss of control)',
        'Associated with ≥3: eating rapidly, eating until uncomfortably full, eating large amounts when not hungry, eating alone from embarrassment, feeling disgusted/guilty after',
        'Marked distress regarding binge eating',
        'Occurs on average at least once a week for 3 months',
        'Not associated with recurrent inappropriate compensatory behaviours as in bulimia nervosa'
      ],
      epidemiology: {
        text: 'The National Comorbidity Survey Replication (Hudson et al., 2007) established that Binge Eating Disorder is the most common eating disorder in the United States, with a lifetime prevalence of 3.5% in females and 2.0% in males. It affects individuals across all age brackets and ethnic backgrounds.',
        stats: [
          { claim: 'Lifetime prevalence of Binge Eating Disorder in adult females', value: '3.5%', refId: 'hudson2007', confidence: 'high' },
          { claim: 'Lifetime prevalence of Binge Eating Disorder in adult males', value: '2.0%', refId: 'hudson2007', confidence: 'high' }
        ]
      },
      etiology: {
        biological: ['Dopaminergic mesolimbic reward system sensitization to hyper-palatable foods', 'Altered mu-opioid receptor binding in striatal networks'],
        psychological: ['Deficits in emotion regulation and distress tolerance', 'Using food as a dissociative mechanism to escape negative self-awareness (Heatherton & Baumeister)'],
        sociocultural: ['Weight stigma, fat-shaming, and societal bias against higher body weight individuals'],
        integrative: 'Neurobiological reward sensitivity interacts with poor emotional regulation skills to establish bingeing as a coping strategy.'
      },
      neuro: {
        regions: ['frontal', 'temporal'],
        note: 'Elevated ventral striatal dopaminergic response to anticipation of palatable food, combined with reduced prefrontal orbitofrontal inhibitory signaling.'
      },
      differential: [
        { vs: 'Bulimia Nervosa', distinguishingFeature: 'Bulimia Nervosa involves regular inappropriate compensatory behaviours (vomiting, laxatives, excessive exercise) to prevent weight gain; BED strictly lacks these compensatory rituals.' },
        { vs: 'Simple Obesity without Psychopathology', distinguishingFeature: 'The majority of obese individuals do not experience recurrent loss-of-control binge episodes accompanied by severe subjective distress, self-disgust, and psychiatric comorbidity.' }
      ],
      comorbidity: ['major-depression', 'gad', 'substance-use', 'bipolar'],
      caseFile: {
        title: 'Case Vignette: Soothing with Sugar',
        composite: true,
        text: 'Rajesh, a 44-year-old accountant, sought treatment for escalating depression and weight gain. He described a lifelong pattern of using food for comfort. Whenever workplace tensions escalate or he feels isolated, Rajesh drives to multiple fast-food outlets on his way home, purchasing large meals from each. Parked in a secluded alley, he consumes all the food within 45 minutes, describing an almost trance-like sensation where his anxieties dissolve. Immediately following the binge, he experiences overwhelming self-loathing, crying in his car and hiding the wrappers. He has never purged or exercised excessively, but repeats this behaviour four times a week.',
        questions: [
          'Which specific DSM-5-TR diagnostic criteria for Binge Eating Disorder are evident in Rajesh\'s case?',
          'Why is the absence of compensatory behaviours essential in distinguishing Rajesh\'s presentation from Bulimia Nervosa?'
        ]
      },
      myths: [
        { myth: 'Binge Eating Disorder is just a fancy medical excuse for overeating or lack of self-control.', fact: 'BED is a formally recognized neurobiological psychiatric disorder characterized by objective loss of control, altered dopaminergic reward signaling, and severe clinical distress.', refId: 'hudson2007' },
        { myth: 'Everyone who is overweight or obese has Binge Eating Disorder.', fact: 'Obesity is a heterogeneous physical health condition; only a minority of individuals with obesity meet criteria for BED, which requires distinct loss-of-control episodes and distress.', refId: 'apa2022' },
        { myth: 'Binge Eating Disorder only affects women.', fact: 'BED has the most balanced gender ratio of any eating disorder, affecting millions of men (approximately 2.0% lifetime male prevalence).', refId: 'hudson2007' }
      ],
      exam: {
        pdfQ: [8],
        marks: 15,
        structure: [
          { heading: 'Formal Recognition and Diagnostic Criteria', points: ['Elevated to official disorder in DSM-5 (2013)', 'Definition of objective binge eating and loss of control', 'Five associated behavioural features (≥3 required)', 'Strict absence of compensatory purging'] },
          { heading: 'Epidemiological Significance', points: ['Hudson et al. (2007) National Comorbidity Survey data (3.5% women, 2.0% men)', 'Most prevalent eating disorder worldwide', 'Balanced gender ratio compared to anorexia/bulimia'] },
          { heading: 'Psychological Mechanisms & Treatment', points: ['Bingeing as an emotion-regulation escape from negative self-awareness', 'CBT-E (Fairburn) and Interpersonal Therapy (IPT)', 'Pharmacotherapy (Lisdexamfetamine)'] }
        ],
        modelAnswer: 'Binge Eating Disorder (BED; DSM-5-TR 307.51 / ICD-10 F50.81) was formally recognized as an independent diagnostic category in the DSM-5 (2013), having previously been considered an example under Eating Disorder Not Otherwise Specified (EDNOS).\n\nAccording to DSM-5-TR criteria, diagnosis requires recurrent episodes of binge eating, defined as consuming an amount of food within a discrete 2-hour window that is definitely larger than what most individuals would eat under similar circumstances, accompanied by a subjective sense of lack of control. Furthermore, episodes must be associated with at least three of the following five features: (1) eating much more rapidly than normal; (2) eating until feeling uncomfortably full; (3) eating large amounts of food when not feeling physically hungry; (4) eating alone due to embarrassment; and (5) feeling disgusted with oneself, depressed, or very guilty afterward. The episodes must occur, on average, at least once a week for three consecutive months, accompanied by marked distress. Crucially, BED is distinguished by the complete absence of regular inappropriate compensatory behaviours (such as self-induced vomiting, laxative abuse, or excessive exercise) typical of bulimia nervosa.\n\nEpidemiologically, landmark data from the National Comorbidity Survey Replication (Hudson et al., 2007) established that BED is the most prevalent eating disorder, affecting approximately 3.5% of women and 2.0% of men over their lifetimes. Unlike anorexia and bulimia, BED displays a much more balanced gender ratio and affects individuals across diverse socioeconomic backgrounds.\n\nEtiologically, binge eating functions primarily as an emotional regulation coping mechanism. Palatable energy-dense foods trigger dopaminergic reward pathways, providing temporary distraction or dissociation from intolerable negative affect, which is subsequently replaced by severe shame and distress. First-line treatments include Cognitive Behaviour Therapy (CBT-E; Fairburn) and Interpersonal Psychotherapy (IPT), alongside FDA-approved lisdexamfetamine.',
        shortNote: 'Binge Eating Disorder (DSM-5, 2013) involves weekly loss-of-control binge eating for ≥3 months without compensatory purging. Characterized by ≥3 features (eating rapidly, painfully full, not hungry, eating alone, post-binge guilt), it is the most prevalent eating disorder (Hudson et al., 2007), treated with CBT-E and IPT.',
        mnemonics: ['RAPID: Rapid eating, Alone due to shame, Painfully full, Intolerable post-binge guilt, Daily hunger absent'],
        keyTerms: ['Binge Eating Disorder', 'DSM-5 formal recognition', 'Hudson et al. (2007)', 'Loss of control', 'Absence of purging', 'Emotion regulation', 'CBT-E', 'Lisdexamfetamine']
      },
      related: ['anorexia', 'bulimia', 'major-depression', 'gad'],
      refs: ['apa2022', 'who2022', 'hudson2007', 'fairburn2008', 'arcelus2011'],
      contentNote: 'Discusses eating disorders and emotional eating patterns. No calorie counts or weight-loss advice are presented. Support is available through national mental health services.',
      lastVerified: '2026-10'
    }
  ];

  VOLUME_IV.forEach(item => global.KB.push(item));
})(typeof window !== 'undefined' ? window : globalThis);
