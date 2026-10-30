/**
 * PsychStudy — The Clinical Atlas
 * Central Clinical Lexicon & Etymological Glossary
 * Contains >= 150 verified clinical psychology terms with phonetics and etymologies.
 */

(function(global) {
  global.GLOSSARY = [
    // Volume I: Foundations of Abnormality
    {
      term: 'Abnormality',
      ipa: '/ˌæbnɔːrˈmæləti/',
      def: 'Behavior, emotion, or cognition that is statistically atypical, culturally deviant, causes subjective distress, or results in psychological dysfunction.',
      etymology: 'Latin ab- ("away from") + norma ("carpenter\'s rule" or "standard").',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Four Ds', 'Deviance', 'Dysfunction']
    },
    {
      term: 'Four Ds',
      ipa: '/fɔːr diːz/',
      def: 'An educational teaching heuristic conceptualizing abnormal behavior through Deviance, Distress, Dysfunction, and Danger.',
      etymology: 'Didactic pedagogical framework coined in modern American psychiatric textbooks.',
      volume: 'I',
      chapterId: 'four-ds',
      related: ['Distress', 'Deviance', 'Dysfunction', 'Danger']
    },
    {
      term: 'Distress',
      ipa: '/dɪˈstrɛs/',
      def: 'Unpleasant subjective emotional pain, suffering, or anguish experienced by an individual.',
      etymology: 'Old French destresse, from Latin distringere ("to pull apart, stretch tight").',
      volume: 'I',
      chapterId: 'four-ds',
      related: ['Eustress', 'Four Ds', 'Dysfunction']
    },
    {
      term: 'Dysfunction',
      ipa: '/dɪsˈfʌŋkʃən/',
      def: 'Significant interference with occupational, academic, interpersonal, or daily role-functioning capacity.',
      etymology: 'Greek dys- ("impaired, abnormal") + Latin functio ("performance, execution").',
      volume: 'I',
      chapterId: 'four-ds',
      related: ['Four Ds', 'Impairment', 'Harmful Dysfunction']
    },
    {
      term: 'Deviance',
      ipa: '/ˈdiːviəns/',
      def: 'Statistical rarity or departure from prevailing cultural norms and societal expectations.',
      etymology: 'Late Latin deviare ("to turn from the straight road"), from de- ("off") + via ("way, road").',
      volume: 'I',
      chapterId: 'four-ds',
      related: ['Statistical Norm', 'Cultural Relativism']
    },
    {
      term: 'Danger',
      ipa: '/ˈdeɪndʒər/',
      def: 'Risk of acute self-harm, suicide, or physical harm directed toward others, indicating crisis triage.',
      etymology: 'Old French dangier ("jurisdiction, power, peril"), from Vulgar Latin dominiarium ("lordship").',
      volume: 'I',
      chapterId: 'four-ds',
      related: ['Four Ds', 'Crisis Triage', 'Suicidality']
    },
    {
      term: 'Harmful Dysfunction',
      ipa: '/ˈhɑːrmfəl dɪsˈfʌŋkʃən/',
      def: 'Jerome Wakefield’s definition of mental disorder: failure of an internal evolutionary mechanism that causes value-judged harm.',
      etymology: 'Philosophical concept synthesized in 1992 merging evolutionary biology and societal value judgment.',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Evolutionary Psychology', 'Wakefield', 'Nosology']
    },
    {
      term: 'Diathesis-Stress Model',
      ipa: '/daɪˈæθəsɪs strɛs ˈmɒdəl/',
      def: 'Theory positing that psychopathology results from biological or psychological vulnerability (diathesis) triggered by environmental stressors.',
      etymology: 'Greek diathesis ("disposition, condition of body or mind"), from diatithenai ("to arrange").',
      volume: 'I',
      chapterId: 'models-of-abnormality',
      related: ['Biopsychosocial', 'Epigenetics', 'Allostasis']
    },
    {
      term: 'Biopsychosocial Model',
      ipa: '/ˌbaɪoʊˌsaɪkoʊˈsoʊʃəl ˈmɒdəl/',
      def: 'Holistic clinical paradigm (Engel, 1977) attributing illness to dynamic interactions of biological, psychological, and social factors.',
      etymology: 'Coined by George Engel from Greek bios ("life"), psyche ("mind"), and Latin socius ("companion").',
      volume: 'I',
      chapterId: 'models-of-abnormality',
      related: ['Etiology', 'Holism', 'Systems Theory']
    },
    {
      term: 'Nosology',
      ipa: '/nɒˈsɒlədʒi/',
      def: 'The scientific branch of medicine dealing with the systematic classification and categorization of diseases.',
      etymology: 'Greek nosos ("disease") + -logia ("study of, branch of knowledge").',
      volume: 'I',
      chapterId: 'dsm',
      related: ['Taxonomy', 'Etiology', 'Diagnosis']
    },
    {
      term: 'Epidemiology',
      ipa: '/ˌɛpɪˌdiːmiˈɒlədʒi/',
      def: 'The study of the distribution, patterns, determinants, and frequency of health-related states in specific populations.',
      etymology: 'Greek epi ("upon") + demos ("people") + -logia ("study of").',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Prevalence', 'Incidence', 'Comorbidity']
    },
    {
      term: 'Prevalence',
      ipa: '/ˈprɛvələns/',
      def: 'The total proportion of individuals in a specified population presenting with a particular disorder at or during a defined period.',
      etymology: 'Latin praevalentia ("superior strength, prevailing"), from praevalere ("to be very powerful").',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Incidence', 'Lifetime Prevalence', 'Point Prevalence']
    },
    {
      term: 'Incidence',
      ipa: '/ˈɪnsɪdəns/',
      def: 'The rate of new cases of a disorder diagnosed within a specified population over a discrete time window (typically one year).',
      etymology: 'Latin incidere ("to fall upon, happen, occur"), from in- ("upon") + cadere ("to fall").',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Prevalence', 'Epidemiology', 'Morbidity']
    },
    {
      term: 'Comorbidity',
      ipa: '/ˌkoʊmɔːrˈbɪdəti/',
      def: 'The simultaneous presence of two or more distinct medical or psychiatric disorders in a single individual.',
      etymology: 'Latin com- ("together with") + morbidus ("sickly, diseased"). Coined in 1970 by Alvan Feinstein.',
      volume: 'I',
      chapterId: 'psych-disorders',
      related: ['Dual Diagnosis', 'Differential Diagnosis']
    },
    {
      term: 'DSM-5-TR',
      ipa: '/ˌdiː ɛs ˈɛm faɪv tiː ɑːr/',
      def: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision; current APA classification published in March 2022.',
      etymology: 'Acronym for Diagnostic and Statistical Manual of Mental Disorders, established by the APA.',
      volume: 'I',
      chapterId: 'dsm',
      related: ['ICD-11', 'APA', 'Operational Criteria']
    },
    {
      term: 'ICD-11',
      ipa: '/ˌaɪ siː ˈdiː ɪˈlɛvən/',
      def: 'International Classification of Diseases, Eleventh Revision; global diagnostic standard developed by the World Health Organization, effective Jan 2022.',
      etymology: 'Acronym for International Classification of Diseases, maintained by the WHO since 1948.',
      volume: 'I',
      chapterId: 'dsm',
      related: ['WHO', 'DSM-5-TR', 'Dimensional Diagnosis']
    },
    {
      term: 'Etiology',
      ipa: '/ˌiːtiˈɒlədʒi/',
      def: 'The study of the causes, origins, and contributing causal mechanisms underlying a disease or pathological condition.',
      etymology: 'Greek aitiologia ("giving a cause"), from aitia ("cause") + -logia ("study").',
      volume: 'I',
      chapterId: 'models-of-abnormality',
      related: ['Pathogenesis', 'Diathesis', 'Mechanism']
    },

    // Volume II: Anxiety, OCD & Trauma
    {
      term: 'Agoraphobia',
      ipa: '/ˌæɡərəˈfoʊbiə/',
      def: 'Intense, incapacitating fear or anxiety about being in places or situations from which escape might be difficult or help unavailable during panic.',
      etymology: 'Greek agora ("marketplace, assembly place") + phobos ("dread, flight, fear"). Coined in 1871 by Westphal.',
      volume: 'II',
      chapterId: 'panic',
      related: ['Panic Disorder', 'Avoidance', 'Interoceptive Exposure']
    },
    {
      term: 'Autonomic Arousal',
      ipa: '/ˌɔːtəˈnɒmɪk əˈraʊzəl/',
      def: 'Involuntary physiological activation initiated by the sympathetic nervous system, including tachycardia, sweating, and tremor.',
      etymology: 'Greek autonomos ("self-governing", auto- "self" + nomos "law") + Middle English arousen.',
      volume: 'II',
      chapterId: 'gad',
      related: ['Fight-or-Flight', 'Epinephrine', 'Sympathetic']
    },
    {
      term: 'Compulsion',
      ipa: '/kəmˈpʌlʃən/',
      def: 'Repetitive, stereotyped behaviors or mental acts that an individual feels driven to perform in response to an obsession or rigid rules.',
      etymology: 'Latin compulsio ("a driving, compelling"), from compellere ("to drive together, force").',
      volume: 'II',
      chapterId: 'ocd',
      related: ['Obsession', 'OCD', 'ERP']
    },
    {
      term: 'Depersonalization',
      ipa: '/diːˌpɜːrsənəlaɪˈzeɪʃən/',
      def: 'A dissociative experience of feeling detached from or being an outside observer of one’s own mental processes or physical body.',
      etymology: 'Latin de- ("away from") + persona ("actor\'s mask, person") + -ize + -ation.',
      volume: 'II',
      chapterId: 'panic',
      related: ['Derealization', 'Dissociation', 'Panic Disorder']
    },
    {
      term: 'Derealization',
      ipa: '/diːˌrɪəlaɪˈzeɪʃən/',
      def: 'A dissociative alteration in perception where the external world feels unreal, dreamlike, foggy, or artificial.',
      etymology: 'Latin de- ("un-, away") + res ("thing, reality") + -ize + -ation.',
      volume: 'II',
      chapterId: 'panic',
      related: ['Depersonalization', 'Dissociation', 'Perceptual Distortion']
    },
    {
      term: 'Exposure and Response Prevention (ERP)',
      ipa: '/ɪkˈspoʊʒər ænd rɪˈspɒns prɪˈvɛnʃən/',
      def: 'First-line behavioral therapy for OCD where patients confront obsession triggers while deliberately refraining from performing compulsive rituals.',
      etymology: 'Latin exponere ("to set forth, expose") + respondere ("to answer") + praevenire ("to anticipate").',
      volume: 'II',
      chapterId: 'ocd',
      related: ['Habituation', 'Extinction', 'Meyer', 'Foa']
    },
    {
      term: 'Fear Hierarchy',
      ipa: '/fɪər ˈhaɪərɑːrki/',
      def: 'A graduated list of anxiety-provoking stimuli ranked in ascending order by subjective units of distress (SUDs) used in desensitization.',
      etymology: 'Old English fær ("calamity, danger") + Greek hierarkhia ("rule of a high priest").',
      volume: 'II',
      chapterId: 'phobias',
      related: ['Systematic Desensitization', 'SUDs', 'Wolpe']
    },
    {
      term: 'Flooding',
      ipa: '/ˈflʌdɪŋ/',
      def: 'An exposure therapy technique in which a client is immediately and continuously exposed to a feared stimulus at maximum intensity without escape.',
      etymology: 'Old English flod ("flowing body of water"); metaphorically applied to overwhelming sensory exposure.',
      volume: 'II',
      chapterId: 'phobias',
      related: ['Implosion', 'Extinction', 'Habituation']
    },
    {
      term: 'Generalized Anxiety Disorder (GAD)',
      ipa: '/ˈdʒɛnərəlaɪzd æŋˈzaɪəti dɪsˈɔːrdər/',
      def: 'Excessive, uncontrollable anxiety and worry across multiple life domains occurring more days than not for at least 6 months.',
      etymology: 'Latin generalis ("belonging to all") + anxietas ("uneasiness, angst"). Formulated in DSM-III (1980).',
      volume: 'II',
      chapterId: 'gad',
      related: ['Worry', 'Metacognition', 'Borkovec']
    },
    {
      term: 'Hypervigilance',
      ipa: '/ˌhaɪpərˈvɪdʒɪləns/',
      def: 'An elevated state of sensory sensitivity accompanied by an exaggerated intensity of scanning the environment for threats.',
      etymology: 'Greek hyper ("over, beyond") + Latin vigilare ("to watch, be watchful").',
      volume: 'II',
      chapterId: 'ptsd',
      related: ['PTSD', 'Limbic System', 'Startle Response']
    },
    {
      term: 'Interoceptive Conditioning',
      ipa: '/ˌɪntəroʊˈsɛptɪv kənˈdɪʃənɪŋ/',
      def: 'Classical conditioning where internal somatic cues (e.g., palpitations, breathlessness) become conditioned stimuli eliciting panic.',
      etymology: 'Latin inter ("within") + capere ("to take, sense") + condicio ("agreement"). Coined by Razran.',
      volume: 'II',
      chapterId: 'panic',
      related: ['Panic Attack', 'Clark', 'Catastrophic Misinterpretation']
    },
    {
      term: 'Obsession',
      ipa: '/əbˈsɛʃən/',
      def: 'Recurrent and persistent thoughts, urges, or images experienced as intrusive and unwanted, causing marked anxiety or distress.',
      etymology: 'Latin obsessio ("a besieging, blockade"), from obsidere ("to sit opposite, besiege").',
      volume: 'II',
      chapterId: 'ocd',
      related: ['Compulsion', 'Ego-Dystonic', 'Thought-Action Fusion']
    },
    {
      term: 'Panic Attack',
      ipa: '/ˈpænɪk əˈtæk/',
      def: 'An abrupt surge of intense fear or intense discomfort reaching a peak within minutes, accompanied by at least 4 somatic/cognitive symptoms.',
      etymology: 'Greek Pan ("god of pastures, woods, and flocks whose shouting caused terrified stampedes").',
      volume: 'II',
      chapterId: 'panic',
      related: ['Panic Disorder', 'Agoraphobia', 'Suffocation Alarm']
    },
    {
      term: 'Phobia',
      ipa: '/ˈfoʊbiə/',
      def: 'A marked, persistent, and irrational fear of a specific object or situation that leads to active avoidance or enduring with intense distress.',
      etymology: 'Greek Phobos ("god of fear and terror, son of Ares and Aphrodite").',
      volume: 'II',
      chapterId: 'phobias',
      related: ['Specific Phobia', 'Social Anxiety', 'Systematic Desensitization']
    },
    {
      term: 'Post-Traumatic Stress Disorder (PTSD)',
      ipa: '/poʊst trɔːˈmætɪk strɛs dɪsˈɔːrdər/',
      def: 'Trauma- and stressor-related disorder characterized by intrusion symptoms, avoidance, negative alterations in cognitions/mood, and hyperarousal.',
      etymology: 'Latin post ("after") + Greek trauma ("wound, physical injury"). Introduced in DSM-III (1980).',
      volume: 'II',
      chapterId: 'ptsd',
      related: ['Intrusion', 'Avoidance', 'Trauma-Informed']
    },
    {
      term: 'Safety Behaviors',
      ipa: '/ˈseɪfti bɪˈheɪvjərz/',
      def: 'Subtle behavioral actions or covert mental rituals performed to prevent a feared catastrophe, inadvertently maintaining anxiety beliefs.',
      etymology: 'Middle English saufte ("security") + Anglo-French behaving ("bearing, manner"). Formulated in CBT by Salkovskis.',
      volume: 'II',
      chapterId: 'gad',
      related: ['Avoidance', 'Salkovskis', 'Exposure']
    },
    {
      term: 'Systematic Desensitization',
      ipa: '/ˌsɪstəˈmætɪk diːˌsɛnsɪtɪˈzeɪʃən/',
      def: 'Behavior therapy developed by Joseph Wolpe based on reciprocal inhibition, pairing progressive relaxation with graded hierarchy exposures.',
      etymology: 'Greek systema ("organized whole") + Latin de- ("away") + sentire ("to feel"). Coined in 1958.',
      volume: 'II',
      chapterId: 'phobias',
      related: ['Wolpe', 'Reciprocal Inhibition', 'Fear Hierarchy']
    },
    {
      term: 'Thought-Action Fusion',
      ipa: '/θɔːt ˈækʃən ˈfjuːʒən/',
      def: 'A cognitive bias in OCD where having an intrusive thought is equated with having committed the act or makes the act more likely to happen.',
      etymology: 'Psychological construct formulated in 1993 by Shafran and Rachman.',
      volume: 'II',
      chapterId: 'ocd',
      related: ['Obsession', 'Moral Fusion', 'Rachman']
    },

    // Volume III: Mood Disorders & Suicide
    {
      term: 'Anhedonia',
      ipa: '/ˌænhiˈdoʊniə/',
      def: 'Markedly diminished interest or pleasure in all, or almost all, activities most of the day; cardinal symptom of major depression.',
      etymology: 'Greek an- ("without") + hedone ("pleasure"). Coined in 1896 by French psychologist Théodule Ribot.',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Major Depression', 'Dopamine', 'Ventral Striatum']
    },
    {
      term: 'Bipolar I Disorder',
      ipa: '/baɪˈpoʊlər wʌn dɪsˈɔːrdər/',
      def: 'Affective disorder characterized by the occurrence of at least one lifetime manic episode lasting ≥ 7 days or requiring hospitalization.',
      etymology: 'Latin bis ("twice") + polus ("pole, end of an axis"). Coined in modern psychiatric literature in the 1960s.',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Mania', 'Hypomania', 'Lithium']
    },
    {
      term: 'Bipolar II Disorder',
      ipa: '/baɪˈpoʊlər tuː dɪsˈɔːrdər/',
      def: 'Affective disorder requiring at least one hypomanic episode (≥ 4 days) AND at least one major depressive episode, with no history of full mania.',
      etymology: 'Distinction between Bipolar I and II formulated by David Dunner and Ronald Fieve in 1976.',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Hypomania', 'Major Depression', 'Cyclothymia']
    },
    {
      term: 'Circadian Dysregulation',
      ipa: '/sɜːrˈkeɪdiən dɪsˌrɛɡjʊˈleɪʃən/',
      def: 'Disruption of endogenous ~24-hour biological pacemakers governed by the suprachiasmatic nucleus, strongly implicated in mood disorders.',
      etymology: 'Latin circa ("about") + dies ("day") + Greek dys- ("bad, abnormal") + Latin regula ("rule").',
      volume: 'III',
      chapterId: 'sad',
      related: ['Suprachiasmatic Nucleus', 'Melatonin', 'SAD']
    },
    {
      term: 'Cyclothymia',
      ipa: '/ˌsaɪkloʊˈθaɪmiə/',
      def: 'Chronic affective disorder lasting ≥ 2 years in adults involving numerous periods with hypomanic symptoms and depressive symptoms.',
      etymology: 'Greek kyklos ("circle, ring") + thymos ("mind, spirit, passion"). Coined by Ewald Hecker in 1877.',
      volume: 'III',
      chapterId: 'cyclothymia',
      related: ['Bipolar', 'Subthreshold', 'Mood Swings']
    },
    {
      term: 'Dysthymia',
      ipa: '/dɪsˈθaɪmiə/',
      def: 'Chronic depressed mood lasting for at least 2 years in adults (1 year in youth); termed Persistent Depressive Disorder in DSM-5-TR.',
      etymology: 'Greek dys- ("ill, bad") + thymos ("mood, soul, spirit"). Reintroduced by Robert Spitzer in 1980.',
      volume: 'III',
      chapterId: 'dysthymia',
      related: ['Persistent Depressive Disorder', 'Chronic Depression']
    },
    {
      term: 'Electroconvulsive Therapy (ECT)',
      ipa: '/ɪˌlɛktroʊkənˈvʌlsɪv ˈθɛrəpi/',
      def: 'Biomedical procedure using brief electrical stimulation under general anesthesia and muscle relaxation to induce a generalized therapeutic seizure.',
      etymology: 'Greek elektron ("amber, electricity") + Latin convellere ("to pull together") + Greek therapeia ("healing").',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Cerletti', 'Treatment-Resistant', 'Modern ECT']
    },
    {
      term: 'Euphoria',
      ipa: '/juːˈfɔːriə/',
      def: 'An exaggerated or inappropriate state of overwhelming elation, optimism, and well-being seen in hypomanic and manic episodes.',
      etymology: 'Greek euphoria ("power of enduring easily, well-bearing"), from eu- ("well") + pherein ("to bear").',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Mania', 'Hypomania', 'Affect']
    },
    {
      term: 'Flight of Ideas',
      ipa: '/flaɪt ɒv aɪˈdiːəz/',
      def: 'A rapid, continuous flow of accelerated speech with abrupt topic transitions linked by superficial associations or puns.',
      etymology: 'Metaphorical derivation from flight ("rapid passing through air") + Greek idea ("form, notion").',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Mania', 'Pressured Speech', 'Tangentiality']
    },
    {
      term: 'Grandiosity',
      ipa: '/ˌɡrændiˈɒsɪti/',
      def: 'An inflated appraisal of one’s own worth, importance, power, knowledge, or identity, ranging from boasting to delusional conviction.',
      etymology: 'French grandiose, from Italian grandioso, from Latin grandis ("large, great").',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Mania', 'Delusion of Grandeur', 'DIG FAST']
    },
    {
      term: 'Hypomania',
      ipa: '/ˌhaɪpoʊˈmeɪniə/',
      def: 'A distinct period of persistently elevated, expansive, or irritable mood lasting ≥ 4 consecutive days without causing severe functional impairment or psychosis.',
      etymology: 'Greek hypo- ("under, below") + mania ("madness, frenzy"). Coined in 1881 by Emanuel Mendel.',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Bipolar II', 'Mania', 'DIG FAST']
    },
    {
      term: 'Learned Helplessness',
      ipa: '/lɜːrnd ˈhɛlpləsnəs/',
      def: 'Condition resulting from exposure to uncontrollable aversive events, producing cognitive deficits and passive behavioral surrender (Seligman, 1975).',
      etymology: 'Psychological paradigm coined by Martin Seligman following classical canine conditioning experiments.',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Seligman', 'Depression', 'Attributional Style']
    },
    {
      term: 'Lithium Carbonate',
      ipa: '/ˈlɪθiəm ˈkɑːrbəneɪt/',
      def: 'Monovalent metallic alkali salt discovered by John Cade (1949); gold-standard maintenance pharmacotherapy for bipolar disorder.',
      etymology: 'Greek lithos ("stone") + Latin carbo ("coal"). Discovered as element in 1817 by Arfwedson.',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Cade', 'Mood Stabilizer', 'Prophylaxis']
    },
    {
      term: 'Major Depressive Disorder (MDD)',
      ipa: '/ˈmeɪdʒər dɪˈprɛsɪv dɪsˈɔːrdər/',
      def: 'Disorder defined by ≥ 2 weeks of depressed mood or loss of interest/pleasure plus ≥ 4 neurovegetative symptoms (DSM-5-TR F32/F33).',
      etymology: 'Latin deprimere ("to press down"), from de- ("down") + premere ("to press").',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Anhedonia', 'Beck Triad', 'SIGECAPS']
    },
    {
      term: 'Mania',
      ipa: '/ˈmeɪniə/',
      def: 'A distinct period of abnormally and persistently elevated, expansive, or irritable mood and increased goal-directed activity lasting ≥ 1 week.',
      etymology: 'Greek mania ("madness, frenzy, passion"). Recognized in classical Hippocratic medicine.',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Bipolar I', 'Hypomania', 'DIG FAST']
    },
    {
      term: 'Melatonin',
      ipa: '/ˌmɛləˈtoʊnɪn/',
      def: 'Pineal neurohormone synthesized from serotonin and regulated by the suprachiasmatic nucleus; governs dark-phase circadian somnolence.',
      etymology: 'Greek melas ("black") + tonos ("tension, tone"). Discovered in 1958 by Aaron B. Lerner.',
      volume: 'III',
      chapterId: 'sad',
      related: ['Circadian', 'Suprachiasmatic', 'Phototherapy']
    },
    {
      term: 'Psychomotor Agitation',
      ipa: '/ˌsaɪkoʊˈmoʊtər ˌædʒɪˈteɪʃən/',
      def: 'Purposeless, non-goal-directed physical hyperactivity driven by internal tension, including pacing, hand-wringing, and inability to sit still.',
      etymology: 'Greek psyche ("mind") + Latin motor ("mover") + Latin agitare ("to set in violent motion").',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Major Depression', 'Psychomotor Retardation']
    },
    {
      term: 'Psychomotor Retardation',
      ipa: '/ˌsaɪkoʊˈmoʊtər ˌriːtɑːrˈdeɪʃən/',
      def: 'Observable visible slowing down of speech, thinking, emotional processing, and body movements seen in severe melancholic depression.',
      etymology: 'Greek psyche ("mind") + Latin motor ("mover") + Latin retardare ("to delay, hold back").',
      volume: 'III',
      chapterId: 'major-depression',
      related: ['Major Depression', 'Melancholia', 'Bradykinesia']
    },
    {
      term: 'Rapid Cycling',
      ipa: '/ˈræpɪd ˈsaɪklɪŋ/',
      def: 'Bipolar course specifier defined by the occurrence of ≥ 4 distinct mood episodes (major depressive, manic, or hypomanic) within a 12-month period.',
      etymology: 'Latin rapidus ("hurried, swift") + Greek kyklos ("wheel, circle").',
      volume: 'III',
      chapterId: 'bipolar',
      related: ['Bipolar I', 'Bipolar II', 'Course Specifier']
    },
    {
      term: 'Seasonal Affective Disorder (SAD)',
      ipa: '/ˈsiːzənəl əˈfɛktɪv dɪsˈɔːrdər/',
      def: 'Recurrent depressive pattern characterized by onset during autumn/winter months and complete remission in spring/summer; treated with bright light.',
      etymology: 'Latin satio ("sowing time, season") + affectus ("disposition, mood"). Formulated by Rosenthal et al. (1984).',
      volume: 'III',
      chapterId: 'sad',
      related: ['Phototherapy', 'Rosenthal', 'Melatonin']
    },
    {
      term: 'Suicidal Ideation',
      ipa: '/ˌsuːɪˈsaɪdəl ˌaɪdiˈeɪʃən/',
      def: 'Thoughts, contemplations, or preoccupations with death, dying, or taking one’s own life, ranging from passive wishes to active planning.',
      etymology: 'Modern Latin suicidium (sui "of oneself" + caedere "to kill") + Late Latin ideare ("to form an idea").',
      volume: 'III',
      chapterId: 'suicide',
      related: ['Joiner', 'Means Restriction', 'Tele-MANAS']
    },
    {
      term: 'Thwarted Belongingness',
      ipa: '/θwɔːrtɪd bɪˈlɒŋɪŋnəs/',
      def: 'Thomas Joiner’s Interpersonal Theory construct describing the painful psychological state of feeling socially isolated and disconnected from others.',
      etymology: 'Old Norse thvert ("transverse, adverse") + Old English gelang ("at hand, dependent").',
      volume: 'III',
      chapterId: 'suicide',
      related: ['Joiner', 'Perceived Burdensomeness', 'Suicide Prevention']
    },

    // Volume IV: Eating Disorders
    {
      term: 'Amenorrhea',
      ipa: '/eɪˌmɛnəˈriːə/',
      def: 'The abnormal absence of menstruation; previously a mandatory DSM-IV criterion for anorexia nervosa, eliminated in DSM-5.',
      etymology: 'Greek a- ("without") + men ("month") + rhoia ("flow").',
      volume: 'IV',
      chapterId: 'anorexia',
      related: ['Anorexia Nervosa', 'DSM-5 Revisions', 'Endocrine']
    },
    {
      term: 'Anorexia Nervosa',
      ipa: '/ˌænəˈrɛksiə nɜːrˈvoʊsə/',
      def: 'Eating disorder characterized by restriction of energy intake leading to significantly low body weight, intense fear of weight gain, and body image distortion.',
      etymology: 'Greek an- ("without") + orexis ("appetite") + Latin nervosa ("nervous origin"). Coined in 1873 by Sir William Gull.',
      volume: 'IV',
      chapterId: 'anorexia',
      related: ['Body Schema', 'Arcelus', 'Restricting Type']
    },
    {
      term: 'Binge Eating',
      ipa: '/bɪndʒ ˈiːtɪŋ/',
      def: 'Consuming an objectively large amount of food within a discrete period accompanied by a subjective sense of lack of control.',
      etymology: 'Dialect English binge ("to soak a wooden vessel; to carouse, drink heavily").',
      volume: 'IV',
      chapterId: 'binge-eating',
      related: ['Binge Eating Disorder', 'Bulimia', 'Loss of Control']
    },
    {
      term: 'Binge-Eating Disorder (BED)',
      ipa: '/bɪndʒ ˈiːtɪŋ dɪsˈɔːrdər/',
      def: 'Recurrent binge eating episodes (≥ 1/week for 3 months) marked by distress and absence of regular compensatory purging; recognized in DSM-5 (2013).',
      etymology: 'Formally recognized as a standalone diagnosis in DSM-5 based on Hudson et al. (2007) prevalence data.',
      volume: 'IV',
      chapterId: 'binge-eating',
      related: ['Hudson', 'Loss of Control', 'DSM-5']
    },
    {
      term: 'Body Schema Distortion',
      ipa: '/ˈbɒdi ˈskiːmə dɪsˈtɔːrʃən/',
      def: 'Disturbance in the perceptual and cognitive representation of one’s own body shape, size, and weight.',
      etymology: 'Greek schema ("form, shape, figure") + Latin distortio ("a twisting awry").',
      volume: 'IV',
      chapterId: 'anorexia',
      related: ['Anorexia', 'Body Dysmorphia', 'Parietal Lobe']
    },
    {
      term: 'Bulimia Nervosa',
      ipa: '/bʊˈlɪmiə nɜːrˈvoʊsə/',
      def: 'Eating disorder characterized by recurrent binge eating followed by inappropriate compensatory behaviors (purging, fasting, over-exercise) at normal weight.',
      etymology: 'Greek bous ("ox") + limos ("hunger") + Latin nervosa. First described as a syndrome by Gerald Russell in 1979.',
      volume: 'IV',
      chapterId: 'bulimia',
      related: ['Russell', 'Compensatory', 'Purging']
    },
    {
      term: 'Compensatory Behavior',
      ipa: '/kəmˈpɛnsətɔːri bɪˈheɪvjər/',
      def: 'Actions taken to counteract caloric intake and prevent weight gain, including self-induced vomiting, laxative abuse, enemas, or excessive exercise.',
      etymology: 'Latin compensare ("to weigh together, counterbalance").',
      volume: 'IV',
      chapterId: 'bulimia',
      related: ['Bulimia', 'Purging', 'Russell Sign']
    },
    {
      term: 'Electrolyte Imbalance',
      ipa: '/ɪˈlɛktrəlaɪt ɪmˈbæləns/',
      def: 'Critical medical complication of purging involving dangerous shifts in potassium, sodium, and chloride (e.g., hypokalemia triggering cardiac arrhythmias).',
      etymology: 'Greek elektron ("amber") + lytos ("loosened, dissolved") + Latin in- ("not") + bilanx ("two scales").',
      volume: 'IV',
      chapterId: 'bulimia',
      related: ['Hypokalemia', 'Arrhythmia', 'Purging']
    },
    {
      term: 'Lanugo',
      ipa: '/ləˈnuːɡoʊ/',
      def: 'Fine, soft, downy hair that grows on the face, trunk, and limbs of individuals experiencing severe starvation as a thermoregulatory adaptation.',
      etymology: 'Latin lanugo ("down, woolly substance"), from lana ("wool").',
      volume: 'IV',
      chapterId: 'anorexia',
      related: ['Anorexia', 'Starvation Syndrome', 'Hypothermia']
    },
    {
      term: 'Maudsley Approach (FBT)',
      ipa: '/ˈmɔːdzli əˈproʊtʃ/',
      def: 'Evidence-based Family-Based Treatment for adolescent anorexia nervosa where parents temporarily take control of refeeding under clinical guidance.',
      etymology: 'Named after the Maudsley Hospital in London, England, where the protocol was formulated in the 1980s.',
      volume: 'IV',
      chapterId: 'anorexia',
      related: ['Lock & Le Grange', 'Refeeding', 'Adolescent ED']
    },
    {
      term: 'Purging',
      ipa: '/ˈpɜːrdʒɪŋ/',
      def: 'The manual or chemical evacuation of gastrointestinal contents, most commonly through self-induced emesis or laxative misuse.',
      etymology: 'Latin purgare ("to cleanse, purify"), from purus ("pure") + agere ("to drive, do").',
      volume: 'IV',
      chapterId: 'bulimia',
      related: ['Bulimia', 'Russell Sign', 'Electrolytes']
    },
    {
      term: 'Russell’s Sign',
      ipa: '/ˈrʌsəlz saɪn/',
      def: 'Calluses, abrasions, or hyperkeratosis on the dorsal knuckles caused by repeated contact with incisors during self-induced vomiting.',
      etymology: 'Named after British psychiatrist Gerald Russell, who identified the sign in his landmark 1979 paper.',
      volume: 'IV',
      chapterId: 'bulimia',
      related: ['Gerald Russell', 'Purging', 'Physical Signs']
    },

    // Volume V: Personality Disorders
    {
      term: 'Affective Instability',
      ipa: '/əˈfɛktɪv ˌɪnstəˈbɪləti/',
      def: 'Marked reactivity of mood, with intense episodic dysphoria, irritability, or anxiety usually lasting a few hours and rarely more than a few days.',
      etymology: 'Latin affectus ("disposition of mind") + instabilis ("unstable, unsteady").',
      volume: 'V',
      chapterId: 'borderline',
      related: ['BPD', 'Emotional Dysregulation', 'Linehan']
    },
    {
      term: 'Antisocial Personality Disorder (ASPD)',
      ipa: '/ˌæntiˈsoʊʃəl ˌpɜːrsəˈnæləti dɪsˈɔːrdər/',
      def: 'Pervasive pattern of disregard for and violation of the rights of others occurring since age 15, requiring childhood conduct disorder history.',
      etymology: 'Greek anti ("against") + Latin socius ("social, companion") + personalitas ("personality").',
      volume: 'V',
      chapterId: 'antisocial',
      related: ['Hare PCL-R', 'Conduct Disorder', 'Cleckley']
    },
    {
      term: 'Borderline Personality Disorder (BPD)',
      ipa: '/ˈbɔːrdərlaɪn ˌpɜːrsəˈnæləti dɪsˈɔːrdər/',
      def: 'Pervasive pattern of instability in interpersonal relationships, self-image, and affects, along with marked impulsivity and abandonment fears.',
      etymology: 'Coined by Adolph Stern (1938) to describe patients residing on the "border line" between neurosis and psychosis.',
      volume: 'V',
      chapterId: 'borderline',
      related: ['DBT', 'Splitting', 'Linehan', 'Biosocial']
    },
    {
      term: 'Dialectical Behavior Therapy (DBT)',
      ipa: '/ˌdaɪəˈlɛktɪkəl bɪˈheɪvjər ˈθɛrəpi/',
      def: 'Third-wave cognitive-behavioral treatment (Linehan, 1993) synthesizing Zen mindfulness acceptance with behavioural change mechanisms for BPD.',
      etymology: 'Greek dialektike ("art of discussion, resolving opposites through synthesis").',
      volume: 'V',
      chapterId: 'borderline',
      related: ['Linehan', 'Mindfulness', 'Distress Tolerance']
    },
    {
      term: 'Emotional Dysregulation',
      ipa: '/ɪˈmoʊʃənəl dɪsˌrɛɡjʊˈleɪʃən/',
      def: 'Inability to modulate or manage emotional state and affective arousal within a functional, normative operating range.',
      etymology: 'Latin emovere ("to move out, stir up") + Greek dys- ("impaired") + Latin regula ("rule").',
      volume: 'V',
      chapterId: 'borderline',
      related: ['BPD', 'Amygdala', 'PFC', 'Linehan']
    },
    {
      term: 'Impulsivity',
      ipa: '/ˌɪmpʌlˈsɪvəti/',
      def: 'Tendency to act rapidly on whims or immediate internal urges without forethought, premeditation, or consideration of long-term consequences.',
      etymology: 'Latin impulsus ("a pushing against, shock, instigation"), from impellere ("to push forward").',
      volume: 'V',
      chapterId: 'antisocial',
      related: ['BPD', 'ASPD', 'Orbitofrontal Cortex']
    },
    {
      term: 'Mentalization',
      ipa: '/ˌmɛntəlaɪˈzeɪʃən/',
      def: 'The capacity to perceive, infer, and interpret human behavior in terms of intentional mental states (needs, desires, feelings, beliefs; Fonagy).',
      etymology: 'Latin mens ("mind") + -ize + -ation. Conceptualized in attachment theory by Peter Fonagy.',
      volume: 'V',
      chapterId: 'borderline',
      related: ['Fonagy', 'Theory of Mind', 'Attachment']
    },
    {
      term: 'Psychopathy',
      ipa: '/saɪˈkɒpəθi/',
      def: 'Neuropsychiatric construct (Cleckley, Hare) characterized by shallow affect, lack of empathy, guiltlessness, glibness, and persistent antisocial deviance.',
      etymology: 'Greek psyche ("mind, soul") + pathos ("suffering, disease"). Introduced in Germany in 1891 by Koch.',
      volume: 'V',
      chapterId: 'antisocial',
      related: ['Hare PCL-R', 'Cleckley', 'ASPD']
    },
    {
      term: 'Splitting',
      ipa: '/ˈsplɪtɪŋ/',
      def: 'Primitive defense mechanism where self or others are viewed dichotomously as all-good or all-bad, failing to integrate ambivalent qualities.',
      etymology: 'Middle English splitte ("to divide, cleave"). Formulated in psychoanalysis by Fairbairn and Kernberg.',
      volume: 'V',
      chapterId: 'borderline',
      related: ['BPD', 'Defense Mechanism', 'Idealization']
    },

    // Volume VI: Psychotic Disorders
    {
      term: 'Alogia',
      ipa: '/eɪˈloʊdʒiə/',
      def: 'Negative symptom characterized by poverty of speech, manifesting in restricted fluency, productivity, and content of verbal communication.',
      etymology: 'Greek a- ("without") + logos ("speech, word, reason"). Introduced into psychiatric nosology in the 19th century.',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Negative Symptoms', '5 As', 'Schizophrenia']
    },
    {
      term: 'Auditory Hallucination',
      ipa: '/ˈɔːdɪtɔːri həˌluːsɪˈneɪʃən/',
      def: 'Sensory perception of voices, murmurs, or sounds occurring in the external acoustic space in the absence of an actual physical auditory stimulus.',
      etymology: 'Latin audire ("to hear") + hallucinatus ("wandering in mind, dreaming").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Positive Symptoms', 'Bleuler', 'Schneiderian First Rank']
    },
    {
      term: 'Avolition',
      ipa: '/ˌeɪvoʊˈlɪʃən/',
      def: 'Severe lack of initiative, drive, or motivation to initiate and persist in meaningful goal-directed activities; cardinal negative symptom.',
      etymology: 'Greek a- ("without") + Latin volitio ("desire, will"), from velle ("to wish").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Negative Symptoms', '5 As', 'Ventral Striatum']
    },
    {
      term: 'Blunted Affect',
      ipa: '/ˈblʌntɪd ˈæfɛkt/',
      def: 'Marked reduction in the intensity, range, and outward expression of emotional reactivity, nonverbal gestures, and prosody.',
      etymology: 'Middle English blunt ("dull, obtuse") + Latin affectus ("state of mind").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Affective Flattening', 'Negative Symptoms', '5 As']
    },
    {
      term: 'Catatonia',
      ipa: '/ˌkætəˈtoʊniə/',
      def: 'Neuropsychiatric psychomotor syndrome marked by immobility, mutism, waxy flexibility, stupor, posturing, or excessive purposeless excitement.',
      etymology: 'Greek kata ("down, under") + tonos ("tension, tone"). Coined in 1874 by Karl Kahlbaum.',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Kahlbaum', 'Waxy Flexibility', 'Specifier']
    },
    {
      term: 'Delusion',
      ipa: '/dɪˈluːʒən/',
      def: 'A fixed, false idiosyncratic belief that is firmly maintained despite incontrovertible and obvious objective evidence to the contrary.',
      etymology: 'Latin delusio ("a cheating, deceiving"), from deludere ("to play false, mock").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Persecutory', 'Grandiose', 'Thought Insertion']
    },
    {
      term: 'Delusion of Reference',
      ipa: '/dɪˈluːʒən ɒv ˈrɛfərəns/',
      def: 'Delusional conviction that innocuous external environmental cues (e.g., news broadcasts, billboards, lyrics) contain special personal messages.',
      etymology: 'Latin deludere + referre ("to bring back, carry back").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Aberrant Salience', 'Dopamine', 'Schizophrenia']
    },
    {
      term: 'Dopamine Hypothesis',
      ipa: '/ˈdoʊpəmiːn haɪˈpɒθəsɪs/',
      def: 'Neurochemical model attributing psychotic symptoms to dysregulated dopamine; updated to Version III: presynaptic striatal dopamine elevation (Howes & Kapur).',
      etymology: 'Acronym DOPA (3,4-dihydroxyphenylalanine) + amine + Greek hypothesis ("foundation, basis").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Howes & Kapur', 'Striatum', 'Antipsychotics']
    },
    {
      term: 'Expressed Emotion (EE)',
      ipa: '/ɪkˈsprɛst ɪˈmoʊʃən/',
      def: 'Familial communication pattern characterized by high critical comments, hostility, and emotional over-involvement, predictive of relapse.',
      etymology: 'Construct operationalized in 1958 by George Brown at the Medical Research Council in London.',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Family Therapy', 'Relapse', 'Brown']
    },
    {
      term: 'Negative Symptoms',
      ipa: '/ˈnɛɡətɪv ˈsɪmptəmz/',
      def: 'Deficits or absences in normal human functioning, summarized by the "5 As": Affective flattening, Alogia, Anhedonia, Asociality, and Avolition.',
      etymology: 'Latin negativus ("that which denies"), from negare ("to deny") + Greek symptoma ("chance, casualty").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['5 As', 'Prefrontal Hypofunction', 'Avolition']
    },
    {
      term: 'Positive Symptoms',
      ipa: '/ˈpɒzətɪv ˈsɪmptəmz/',
      def: 'Excesses, distortions, or abnormal additions to normal conscious experience and behavior, notably hallucinations, delusions, and thought disorder.',
      etymology: 'Latin positivus ("formally laid down, settled"), from ponere ("to place, put").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Hallucination', 'Delusion', 'Dopamine']
    },
    {
      term: 'Prodrome',
      ipa: '/ˈproʊdroʊm/',
      def: 'The early phase of subthreshold or attenuated symptoms that precedes the acute active psychotic onset of a disorder.',
      etymology: 'Greek prodromos ("running forward, forerunner"), from pro ("before") + dromos ("a running").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Attenuated Psychosis', 'Early Intervention', 'Schizophrenia']
    },
    {
      term: 'Schizophrenia',
      ipa: '/ˌskɪtsəˈfriːniə/',
      def: 'Severe chronic psychiatric disorder marked by disturbances in thought, perception, affect, and behavior lasting ≥ 6 months (DSM-5-TR F20.9).',
      etymology: 'Greek skhizein ("to split, divide") + phren ("mind, heart, diaphragm"). Coined in 1911 by Eugen Bleuler.',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Bleuler', 'Positive Symptoms', 'Negative Symptoms', 'Dopamine']
    },
    {
      term: 'Tardive Dyskinesia',
      ipa: '/ˈtɑːrdɪv ˌdɪskɪˈniːʒiə/',
      def: 'Potentially irreversible neurological movement disorder marked by involuntary choreoathetoid movements caused by chronic dopamine-blocking antipsychotics.',
      etymology: 'Latin tardus ("slow, late") + Greek dys- ("abnormal") + kinesis ("movement").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['First-Generation Antipsychotics', 'Extrapyramidal', 'D2 Receptor']
    },
    {
      term: 'Thought Insertion',
      ipa: '/θɔːt ɪnˈsɜːrʃən/',
      def: 'The delusional belief that thoughts that are not one’s own are being placed or beamed directly into one’s mind by an outside agency.',
      etymology: 'Kurt Schneider (1959) First-Rank Symptom; Latin inserere ("to introduce, insert").',
      volume: 'VI',
      chapterId: 'schizophrenia',
      related: ['Schneider', 'Passivity Phenomenon', 'Delusion']
    },

    // Volume VII: Therapies & Interventions
    {
      term: 'Abreaction',
      ipa: '/ˌæbriˈækʃən/',
      def: 'The emotional release and conscious reliving of a repressed traumatic memory, accompanied by its originally associated painful affect.',
      etymology: 'German Abreagieren (ab- "away, off" + reagieren "to react"). Coined by Breuer & Freud (1895).',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Catharsis', 'Psychoanalysis', 'Freud']
    },
    {
      term: 'Active Listening',
      ipa: '/ˈæktɪv ˈlɪsənɪŋ/',
      def: 'A core person-centered communication skill where the therapist attentively reflects back the emotional content and meaning of client statements.',
      etymology: 'Latin activus ("practical, active") + Old English hlysnan ("to listen"). Formalized by Carl Rogers.',
      volume: 'VII',
      chapterId: 'person-centered',
      related: ['Rogers', 'Empathy', 'Reflection']
    },
    {
      term: 'Aversion Therapy',
      ipa: '/əˈvɜːrʒən ˈθɛrəpi/',
      def: 'Behavioral conditioning technique pairing an unwanted habitual stimulus with an unpleasant, noxious stimulus to extinguish attraction.',
      etymology: 'Latin aversio ("a turning away"), from avertere ("to turn away") + Greek therapeia ("healing").',
      volume: 'VII',
      chapterId: 'behavior-therapy',
      related: ['Counterconditioning', 'Classical Conditioning']
    },
    {
      term: 'Behavioral Activation',
      ipa: '/bɪˈheɪvjərəl ˌæktɪˈveɪʃən/',
      def: 'Empirically supported intervention that systematically increases positive reinforcement from the environment by scheduling pleasant and mastery activities.',
      etymology: 'American English behavioral + Latin activatio ("a making active"). Formalized by Neil Jacobson.',
      volume: 'VII',
      chapterId: 'behavior-therapy',
      related: ['Jacobson', 'Depression', 'Operant Reinforcement']
    },
    {
      term: 'Catharsis',
      ipa: '/kəˈθɑːrsɪs/',
      def: 'The therapeutic process of venting, discharging, and liberating suppressed emotional energy through conscious expression.',
      etymology: 'Greek katharsis ("cleansing, purging"), from kathairein ("to purify"). Used by Aristotle and adopted by Breuer.',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Abreaction', 'Breuer & Freud', 'Studies on Hysteria']
    },
    {
      term: 'Cognitive Restructuring',
      ipa: '/ˈkɒɡnətɪv ˌriːˈstrʌktʃərɪŋ/',
      def: 'Core CBT intervention in which clients learn to identify, evaluate, challenge, and replace cognitive distortions with balanced thoughts.',
      etymology: 'Latin cognoscere ("to know") + re- ("again") + struere ("to build"). Developed by Aaron Beck.',
      volume: 'VII',
      chapterId: 'cbt',
      related: ['Beck', 'Cognitive Distortions', 'Thought Record']
    },
    {
      term: 'Cognitive Triad',
      ipa: '/ˈkɒɡnətɪv ˈtraɪæd/',
      def: 'Aaron Beck’s model of depressive thinking: negative, rigid, automatic cognitive schemas regarding the Self, the World, and the Future.',
      etymology: 'Latin cognoscere + Greek trias ("group of three"). Formulated by Aaron T. Beck in 1967.',
      volume: 'VII',
      chapterId: 'cbt',
      related: ['Beck', 'Depression', 'Negative Automatic Thoughts']
    },
    {
      term: 'Congruence',
      ipa: '/kənˈɡruːəns/',
      def: 'Genuineness and authenticity in the therapist, where inner affective experience matches outward verbal and nonverbal expression.',
      etymology: 'Latin congruentia ("agreement, symmetry"), from congruere ("to come together, agree"). Coined by Carl Rogers.',
      volume: 'VII',
      chapterId: 'person-centered',
      related: ['Rogers', 'Core Conditions', 'Genuineness']
    },
    {
      term: 'Counterconditioning',
      ipa: '/ˌkaʊntərkənˈdɪʃənɪŋ/',
      def: 'Behavioral technique that conditions a new, incompatible response to an existing conditioned stimulus that previously elicited anxiety.',
      etymology: 'Latin contra- ("against") + condicio ("terms, condition"). Formulated by Mary Cover Jones (1924) and Joseph Wolpe (1958).',
      volume: 'VII',
      chapterId: 'behavior-therapy',
      related: ['Wolpe', 'Reciprocal Inhibition', 'Mary Cover Jones']
    },
    {
      term: 'Countertransference',
      ipa: '/ˌkaʊntərtrænsˈfɜːrəns/',
      def: 'The therapist’s unconscious emotional reactions, projections, and conflicts directed toward the patient, requiring clinical supervision.',
      etymology: 'German Gegenübertragung. Coined by Sigmund Freud in 1910.',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Transference', 'Freud', 'Psychoanalysis']
    },
    {
      term: 'Free Association',
      ipa: '/friː əˌsoʊsiˈeɪʃən/',
      def: 'Fundamental rule of psychoanalysis: the client verbalizes every fleeting thought, image, or feeling without censorship or selection.',
      etymology: 'German freie Assoziation. Introduced by Sigmund Freud to replace hypnosis in the 1890s.',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Psychoanalysis', 'Unconscious', 'Resistance']
    },
    {
      term: 'Interpretation',
      ipa: '/ɪnˌtɜːrprɪˈteɪʃən/',
      def: 'Therapist’s explanatory hypothesis pointing out the unconscious meaning, latent wishes, defenses, or resistances of a client’s material.',
      etymology: 'Latin interpretatio ("explanation, translation"), from interpres ("agent, explainer").',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Insight', 'Latent Content', 'Working Through']
    },
    {
      term: 'Latent Content',
      ipa: '/ˈleɪtənt ˈkɒntɛnt/',
      def: 'The hidden, unconscious psychological meaning, forbidden impulses, and symbolic wishes underlying a dream or symptom.',
      etymology: 'Latin latens ("lying hidden, concealed"), from latere ("to lie hid"). Freud (1900).',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Manifest Content', 'Dream Work', 'Freud']
    },
    {
      term: 'Manifest Content',
      ipa: '/ˈmænɪfɛst ˈkɒntɛnt/',
      def: 'The conscious, surface storyline, imagery, and literal narrative of a dream as consciously remembered upon waking.',
      etymology: 'Latin manifestus ("plainly evident, caught in the act"). Freud (1900).',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Latent Content', 'Dream Analysis', 'Freud']
    },
    {
      term: 'Mindfulness',
      ipa: '/ˈmaɪndfʊlnəs/',
      def: 'The non-judgmental, moment-by-moment intentional awareness of internal and external experiences (Kabat-Zinn, 1990).',
      etymology: 'Translation of Pali term sati ("memory, awareness, attention") from Buddhist Vipassana tradition.',
      volume: 'VII',
      chapterId: 'alternative-therapies',
      related: ['MBSR', 'Kabat-Zinn', 'Meditation']
    },
    {
      term: 'Negative Automatic Thoughts (NATs)',
      ipa: '/ˈnɛɡətɪv ˌɔːtəˈmætɪk θɔːts/',
      def: 'Fleeting, involuntary, situation-specific negative appraisals that immediately precede and trigger painful emotional distress in CBT.',
      etymology: 'Construct central to Aaron Beck’s cognitive model of emotional disorders (1976).',
      volume: 'VII',
      chapterId: 'cbt',
      related: ['Beck', 'Cognitive Distortions', 'Restructuring']
    },
    {
      term: 'Operant Conditioning',
      ipa: '/ˈɒpərənt kənˈdɪʃənɪŋ/',
      def: 'Learning paradigm (Skinner, 1953) where voluntary behavior is strengthened or weakened by its environmental consequences (reinforcement/punishment).',
      etymology: 'Latin operari ("to work, produce") + condicio. Coined by B. F. Skinner in 1937.',
      volume: 'VII',
      chapterId: 'behavior-therapy',
      related: ['Skinner', 'Token Economy', 'Reinforcement']
    },
    {
      term: 'Person-Centered Therapy',
      ipa: '/ˈpɜːrsən ˈsɛntərd ˈθɛrəpi/',
      def: 'Humanistic therapy founded by Carl Rogers positing that growth occurs when a therapist provides UPR, empathy, and congruence.',
      etymology: 'Originally termed "Non-Directive Therapy" (1942), later "Client-Centered" (1951), and "Person-Centered".',
      volume: 'VII',
      chapterId: 'person-centered',
      related: ['Rogers', 'Self-Actualisation', 'UPR']
    },
    {
      term: 'Psychoanalysis',
      ipa: '/ˌsaɪkoʊəˈnæləsɪs/',
      def: 'Theory of mind and clinical therapeutic system founded by Sigmund Freud focusing on unconscious intrapsychic conflict and transference.',
      etymology: 'Greek psyche ("soul, mind") + analysis ("a loosening, dissolving"). Coined by Freud in French in 1896.',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Freud', 'Free Association', 'Transference']
    },
    {
      term: 'Reciprocal Inhibition',
      ipa: '/rɪˈsɪprəkəl ˌɪnhɪˈbɪʃən/',
      def: 'Joseph Wolpe’s physiological principle: if a response incompatible with anxiety (e.g., relaxation) occurs simultaneously with a threat cue, anxiety is suppressed.',
      etymology: 'Latin reciprocus ("returning, alternating") + inhibere ("to hold back, curb"). Coined in 1958.',
      volume: 'VII',
      chapterId: 'behavior-therapy',
      related: ['Wolpe', 'Systematic Desensitization', 'Counterconditioning']
    },
    {
      term: 'Resistance',
      ipa: '/rɪˈzɪstəns/',
      def: 'Any client action, silence, or obstruction in therapy that opposes the process of bringing unconscious material into consciousness.',
      etymology: 'Latin resistere ("to hold back, oppose, withstand"). Central concept in psychoanalytic technique.',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Psychoanalysis', 'Defense', 'Transference']
    },
    {
      term: 'Response Cost',
      ipa: '/rɪˈspɒns kɒst/',
      def: 'An operant negative punishment procedure in token economies where tokens or privileges are removed contingent upon maladaptive behavior.',
      etymology: 'Behavioral modification operational terminology (Ayllon & Azrin, 1968).',
      volume: 'VII',
      chapterId: 'token-economy',
      related: ['Token Economy', 'Negative Punishment', 'Ayllon']
    },
    {
      term: 'Schema',
      ipa: '/ˈskiːmə/',
      def: 'An enduring, stable cognitive structure that filters, interprets, and organizes information about the self, others, and the world.',
      etymology: 'Greek schema ("shape, form, figure"). Introduced into cognitive psychology by Piaget and Beck.',
      volume: 'VII',
      chapterId: 'cbt',
      related: ['Beck', 'Core Beliefs', 'Cognitive Triad']
    },
    {
      term: 'Token Economy',
      ipa: '/ˈtoʊkən ɪˈkɒnəmi/',
      def: 'Behavioral contingency management system (Ayllon & Azrin, 1968) using secondary reinforcers (tokens) exchangeable for backup reinforcers.',
      etymology: 'Old English tacen ("sign, symbol") + Greek oikonomia ("household management").',
      volume: 'VII',
      chapterId: 'token-economy',
      related: ['Ayllon & Azrin', 'Operant', 'Backup Reinforcer']
    },
    {
      term: 'Transference',
      ipa: '/trænsˈfɜːrəns/',
      def: 'The unconscious displacement and redirection of feelings, expectations, and attitudes from significant childhood figures onto the therapist.',
      etymology: 'Latin transferre ("to bear across, carry over"), from trans- ("across") + ferre ("to carry"). Freud (1895).',
      volume: 'VII',
      chapterId: 'psychoanalysis',
      related: ['Countertransference', 'Freud', 'Working Through']
    },
    {
      term: 'Unconditional Positive Regard (UPR)',
      ipa: '/ˌʌnkənˈdɪʃənəl ˈpɒzətɪv rɪˈɡɑːrd/',
      def: 'Carl Rogers’s core condition of therapy: warm, non-possessive acceptance of the client without judgment, conditions of worth, or reservations.',
      etymology: 'Construct formulated by Carl Rogers in his 1957 paper on necessary and sufficient conditions.',
      volume: 'VII',
      chapterId: 'person-centered',
      related: ['Rogers', 'Conditions of Worth', 'Self-Actualisation']
    },

    // Volume VIII: Culture, Stigma & Help-Seeking
    {
      term: 'Acculturation',
      ipa: '/əˌkʌltʃəˈreɪʃən/',
      def: 'The multifaceted process of cultural and psychological change that occurs when individuals balance maintenance of heritage culture and host culture norms.',
      etymology: 'Latin ad- ("to, toward") + cultura ("tillage, culture") + -ation. Coined by John Wesley Powell in 1880.',
      volume: 'VIII',
      chapterId: 'culture-mental-illness',
      related: ['Berry', 'Marginalization', 'Cultural Adaptation']
    },
    {
      term: 'Ataque de Nervios',
      ipa: '/aˈtake ðe ˈneɾβjos/',
      def: 'A cultural syndrome prevalent in Latin American communities involving trembling, crying, screaming, aggression, and dissociative seizures following severe interpersonal distress.',
      etymology: 'Spanish phrase translating literally to "attack of nerves". DSM-5 cultural concept of distress.',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Cultural Syndromes', 'DSM-5-TR', 'Idiom of Distress']
    },
    {
      term: 'Brain Fag',
      ipa: '/breɪn fæɡ/',
      def: 'An idiom of distress described among students in West Africa marked by cognitive fatigue, difficulty concentrating, head pain, and burning sensations.',
      etymology: 'English colloquialism brain + fag ("fatigue, weary toil"). Documented by Prince (1960).',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Cultural Syndromes', 'Somatization', 'Kleinman']
    },
    {
      term: 'Cultural Formulation Interview (CFI)',
      ipa: '/ˈkʌltʃərəl ˌfɔːrmjʊˈleɪʃən ˈɪntərvjuː/',
      def: 'A 16-question semi-structured interview protocol in DSM-5-TR assessing the cultural context of a patient’s presenting mental health problems.',
      etymology: 'Introduced by the DSM-5 Cross-Cultural Issues Subgroup (2013) to operationalize Arthur Kleinman’s explanatory models.',
      volume: 'VIII',
      chapterId: 'cultural-issues-mh',
      related: ['Kleinman', 'Explanatory Model', 'DSM-5-TR']
    },
    {
      term: 'Cultural Syndromes',
      ipa: '/ˈkʌltʃərəl ˈsɪndroʊmz/',
      def: 'Clusters of co-occurring invariant symptoms that tend to be recognized within a specific cultural group as distinct patterns of distress (DSM-5-TR).',
      etymology: 'Term replacing the historical concept of "culture-bound syndromes" in DSM-5 to emphasize universality and contextual variability.',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Dhat', 'Koro', 'Hikikomori', 'Susto']
    },
    {
      term: 'Dhat Syndrome',
      ipa: '/dɑːt ˈsɪndroʊm/',
      def: 'A cultural concept of distress recognized across the Indian subcontinent characterized by severe anxiety, fatigue, and somatic complaints attributed to semen loss.',
      etymology: 'Sanskrit dhatu ("constituent metal, semen, bodily elixir"). Described clinically by Wig in 1960.',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Ayurvedic Medicine', 'Somatization', 'India']
    },
    {
      term: 'Epistemic Injustice',
      ipa: '/ˌɛpɪˈstiːmɪk ɪnˈdʒʌstɪs/',
      def: 'A wrong done to someone specifically in their capacity as a knower, frequently experienced when psychiatric patients\' testimonies are dismissed as irrational.',
      etymology: 'Greek episteme ("knowledge") + Latin injustitia ("injustice"). Coined by philosopher Miranda Fricker in 2007.',
      volume: 'VIII',
      chapterId: 'stigma',
      related: ['Stigma', 'Fricker', 'Testimonial Injustice']
    },
    {
      term: 'Explanatory Models',
      ipa: '/ɪkˈsplænətɔːri ˈmɒdəlz/',
      def: 'Arthur Kleinman’s (1978) framework examining the personal notions about an episode of sickness held by patients, families, and practitioners.',
      etymology: 'Synthesized in medical anthropology by physician-anthropologist Arthur Kleinman.',
      volume: 'VIII',
      chapterId: 'cultural-issues-mh',
      related: ['Kleinman', 'Illness vs Disease', 'CFI']
    },
    {
      term: 'Grisi Siknis',
      ipa: '/ˈɡriːsi ˈsɪknɪs/',
      def: 'A culture-bound contagious attack behavior seen among the Miskito people of Central America, characterized by frenzy, panic, and hallucinations.',
      etymology: 'Miskito language creole adaptation of "crazy sickness".',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Cultural Syndromes', 'Mass Psychogenic']
    },
    {
      term: 'Hikikomori',
      ipa: '/hiːkiːkoʊˈmɔːri/',
      def: 'A cultural phenomenon originating in Japan involving acute social withdrawal where an individual isolates in their bedroom for ≥ 6 months.',
      etymology: 'Japanese hiki ("to pull back") + komoru ("to seclude oneself"). Coined in 1998 by Tamaki Saito.',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Social Withdrawal', 'Cultural Syndromes']
    },
    {
      term: 'Institutional Stigma',
      ipa: '/ˌɪnstɪˈtjuːʃənəl ˈstɪɡmə/',
      def: 'Systemic policies, legal frameworks, and structural underfunding by private and governmental entities that restrict opportunities for persons with mental illness.',
      etymology: 'Corrigan (2004); Latin institutum ("custom, establishment") + Greek stigma.',
      volume: 'VIII',
      chapterId: 'stigma',
      related: ['Corrigan', 'Structural Violence', 'Public Stigma']
    },
    {
      term: 'Internalized Stigma (Self-Stigma)',
      ipa: '/ɪnˈtɜːrnəlaɪzd ˈstɪɡmə/',
      def: 'The psychological process by which an individual endorses negative societal prejudices and applies them to themselves, diminishing self-efficacy.',
      etymology: 'Corrigan (2004); Latin internus ("inward") + Greek stigma.',
      volume: 'VIII',
      chapterId: 'stigma',
      related: ['Corrigan', 'Public Stigma', 'Help-Seeking Barriers']
    },
    {
      term: 'Koro',
      ipa: '/ˈkɔːroʊ/',
      def: 'Cultural syndrome documented in Southeast Asia where a person experiences overpowering anxiety that their genitalia are retracting into the abdomen, risking death.',
      etymology: 'Malay term meaning "head of a turtle", referencing anatomical retraction.',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Cultural Syndromes', 'Southeast Asia', 'Panic']
    },
    {
      term: 'Mental Health Literacy',
      ipa: '/ˈmɛntəl hɛlθ ˈlɪtərəsi/',
      def: 'Knowledge and beliefs about mental disorders which aid their recognition, management, and prevention (Jorm et al., 1997).',
      etymology: 'Latin mens + Old English hælth + Latin litteratus ("educated"). Coined by Anthony Jorm.',
      volume: 'VIII',
      chapterId: 'help-seeking-barriers',
      related: ['Help-Seeking', 'Jorm', 'Early Detection']
    },
    {
      term: 'Public Stigma',
      ipa: '/ˈpʌblɪk ˈstɪɡmə/',
      def: 'The general population’s collective endorsement of stereotypes, negative prejudice, and discriminatory behaviors against people with mental illness.',
      etymology: 'Latin publicus ("belonging to the people") + Greek stigma ("mark, tattoo, brand").',
      volume: 'VIII',
      chapterId: 'stigma',
      related: ['Corrigan', 'Discrimination', 'Stereotype']
    },
    {
      term: 'Somatization',
      ipa: '/ˌsoʊmətəlaɪˈzeɪʃən/',
      def: 'The psychological expression of emotional and psychosocial distress through physical bodily symptoms without organic medical etiology.',
      etymology: 'Greek soma ("body") + -ize + -ation. Coined by Wilhelm Stekel in 1911.',
      volume: 'VIII',
      chapterId: 'cultural-issues-mh',
      related: ['Kleinman', 'Dhat', 'Somatic Symptom']
    },
    {
      term: 'Stigma',
      ipa: '/ˈstɪɡmə/',
      def: 'A profound mark of social disgrace, discrediting, or disapproval that leads to social exclusion, prejudice, and systemic discrimination.',
      etymology: 'Greek stigma ("mark made by a pointed instrument, brand burned into the skin of enslaved persons or criminals").',
      volume: 'VIII',
      chapterId: 'stigma',
      related: ['Goffman', 'Corrigan', 'Self-Stigma', 'Public Stigma']
    },
    {
      term: 'Susto',
      ipa: '/ˈsuːstoʊ/',
      def: 'Cultural syndrome recognized in Latin America attributed to a frightening event that causes the soul to leave the body, producing weakness and depression.',
      etymology: 'Spanish noun susto ("fright, scare, sudden dread").',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Soul Loss', 'Cultural Syndromes', 'Latin America']
    },
    {
      term: 'Taijin Kyofusho',
      ipa: '/taɪˈdʒɪn kjoʊˈfuːʃoʊ/',
      def: 'A Japanese cultural syndrome involving intense dread that one’s body parts, odor, or facial expressions will offend, embarrass, or displease other people.',
      etymology: 'Japanese taijin ("interpersonal, other person") + kyofu ("fear, phobia") + sho ("symptom, syndrome").',
      volume: 'VIII',
      chapterId: 'culture-bound',
      related: ['Social Anxiety', 'Offensive Type', 'Japan']
    },
    {
      term: 'Tele-MANAS',
      ipa: '/ˌtɛli ˈmɑːnəs/',
      def: 'India’s 24x7 national tele-mental health assistance helpline (14416) launched in October 2022 to provide universal, multilingual mental health triage.',
      etymology: 'Greek tele ("at a distance") + Sanskrit manas ("mind, intellect, soul"); acronym: Tele Mental Health Assistance and Networking Across States.',
      volume: 'VIII',
      chapterId: 'help-seeking-barriers',
      related: ['NMHP', 'NIMHANS', 'Crisis Intervention']
    },

    // Volume IX: Stress, Coping & Adjustment
    {
      term: 'Alarm Reaction',
      ipa: '/əˈlɑːrm riˈækʃən/',
      def: 'The initial stage of Selye’s GAS: immediate mobilization of the sympathetic nervous system and SAM axis producing fight-or-flight arousal.',
      etymology: 'Old French a l\'arme ("to arms!") + Latin reactio ("acting back"). Selye (1936).',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['GAS', 'Selye', 'Epinephrine', 'HPA Axis']
    },
    {
      term: 'Allostasis',
      ipa: '/ˌæləˈsteɪsɪs/',
      def: 'The active biological process through which the brain and body maintain stability (homeostasis) through physiological or behavioral change.',
      etymology: 'Greek allos ("other, different") + stasis ("standing still, state"). Coined in 1988 by Sterling and Eyer.',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Allostatic Load', 'McEwen', 'Homeostasis']
    },
    {
      term: 'Allostatic Load',
      ipa: '/ˌæləˈstætɪk loʊd/',
      def: 'The cumulative physiological cost and systemic wear-and-tear on tissues and organs resulting from chronic, repeated, or unmitigated stress (McEwen).',
      etymology: 'Concept formulated in 1993 by neuroendocrinologist Bruce McEwen.',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Allostasis', 'McEwen', 'Cortisol', 'Neuroinflammation']
    },
    {
      term: 'Challenge Appraisal',
      ipa: '/ˈtʃælɪndʒ əˈpreɪzəl/',
      def: 'Cognitive appraisal (Lazarus & Folkman) viewing a demanding encounter as an opportunity for mastery, skill development, and personal growth.',
      etymology: 'Anglo-French chalenge ("accusation, dispute") + Old French apreisier ("to evaluate").',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Primary Appraisal', 'Lazarus', 'Approach Motivation']
    },
    {
      term: 'Coping',
      ipa: '/ˈkoʊpɪŋ/',
      def: 'Constantly changing cognitive and behavioral efforts to manage specific external and internal demands appraised as taxing personal resources.',
      etymology: 'Old French couper ("to strike, cut") and Greek kolaphos ("a blow with the fist"). Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Problem-Focused', 'Emotion-Focused', 'Lazarus']
    },
    {
      term: 'Defense Mechanisms',
      ipa: '/dɪˈfɛns ˈmɛkənɪzəmz/',
      def: 'Unconscious psychological strategies deployed by the ego to protect against anxiety resulting from intrapsychic conflict between id and superego.',
      etymology: 'Latin defensio ("a warding off") + Greek mechane ("machine, contrivance"). Freud (1900); Anna Freud (1936).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Repression', 'Projection', 'Sublimation', 'Vaillant']
    },
    {
      term: 'Denial',
      ipa: '/dɪˈnaɪəl/',
      def: 'Primitive defense mechanism characterized by the refusal to acknowledge objective reality, painful facts, or traumatic occurrences.',
      etymology: 'Latin denegare ("to deny, reject completely"), from de- ("completely") + negare ("to say no").',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Primitive Defense', 'Anna Freud', 'Vaillant Level I']
    },
    {
      term: 'Displacement',
      ipa: '/dɪsˈpleɪsmənt/',
      def: 'Defense mechanism redirecting instinctual drives (typically anger) from their original dangerous target onto a less threatening substitute.',
      etymology: 'Old French desplacer ("to move from its place"). Freud (1900).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Neurotic Defense', 'Drive Redirection', 'Freud']
    },
    {
      term: 'Emotion-Focused Coping',
      ipa: '/ɪˈmoʊʃən ˈfoʊkəst ˈkoʊpɪŋ/',
      def: 'Coping aimed at regulating internal emotional distress through cognitive reappraisal, acceptance, emotional expression, or distraction.',
      etymology: 'Formulated by Lazarus & Folkman (1984); Latin emovere + focus ("hearth, fireplace").',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Lazarus', 'Problem-Focused Coping', 'Appraisal']
    },
    {
      term: 'Eustress',
      ipa: '/ˈjuːstrɛs/',
      def: 'Positive, constructive psychological stress that is perceived as manageable and enhances motivation, cognitive sharpness, and performance.',
      etymology: 'Greek eu- ("good, well") + Old French estresse ("narrowness, oppression"). Coined by Hans Selye.',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Selye', 'Distress', 'Yerkes-Dodson']
    },
    {
      term: 'Exhaustion Stage',
      ipa: '/ɪɡˈzɔːstʃən steɪdʒ/',
      def: 'Final phase of Selye’s GAS: prolonged unmitigated stress depletes adaptive reserves, culminating in immunosuppression and systemic organ breakdown.',
      etymology: 'Latin exhaurire ("to drain completely, draw out"), from ex- ("out") + haurire ("to drain").',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['GAS', 'Selye', 'Allostatic Load', 'Burnout']
    },
    {
      term: 'General Adaptation Syndrome (GAS)',
      ipa: '/ˈdʒɛnərəl ˌædæpˈteɪʃən ˈsɪndroʊm/',
      def: 'Hans Selye’s triphasic physiological accommodation to severe environmental stressors: Alarm Reaction, Resistance, and Exhaustion.',
      etymology: 'Selye (1936); Latin adaptare ("to fit to") + Greek syndrome ("concurrence").',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Selye', 'Alarm', 'Resistance', 'Exhaustion']
    },
    {
      term: 'Glucocorticoids',
      ipa: '/ˌɡluːkoʊˈkɔːrtɪkɔɪdz/',
      def: 'Adrenocortical steroid hormones (predominantly cortisol in humans) synthesized in response to ACTH, regulating gluconeogenesis and immune response.',
      etymology: 'Greek glykys ("sweet") + Latin cortex ("bark, outer shell") + Greek -oeides ("resembling").',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Cortisol', 'HPA Axis', 'Adrenal Cortex']
    },
    {
      term: 'Harm/Loss Appraisal',
      ipa: '/hɑːrm lɒs əˈpreɪzəl/',
      def: 'Primary cognitive appraisal evaluating damage or injury that has already transpired (e.g., bereavement, disability, economic destruction).',
      etymology: 'Old English hearm ("grief, hurt") + los ("destruction") + Old French apreisier. Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Primary Appraisal', 'Lazarus', 'Threat Appraisal']
    },
    {
      term: 'HPA Axis',
      ipa: '/ˌeɪtʃ piː ˈeɪ ˈæksɪs/',
      def: 'The Hypothalamic-Pituitary-Adrenal neuroendocrine cascade: CRH from hypothalamus triggers pituitary ACTH, prompting adrenal cortisol synthesis.',
      etymology: 'Anatomical acronym for Hypothalamus, Pituitary Gland, and Adrenal Glands.',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Cortisol', 'CRH', 'ACTH', 'Allostasis']
    },
    {
      term: 'Intellectualisation',
      ipa: '/ˌɪntəlɛktʃuəlaɪˈzeɪʃən/',
      def: 'Defense mechanism stripping emotional affect from a painful or threatening event, analyzing it through cold, detached, abstract intellectual discourse.',
      etymology: 'Latin intellectualis ("belonging to understanding"), from intelligere ("to understand") + -ize + -ation.',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Isolation of Affect', 'Anna Freud', 'Rationalisation']
    },
    {
      term: 'Primary Appraisal',
      ipa: '/ˈpraɪməri əˈpreɪzəl/',
      def: 'The cognitive evaluation of whether an environmental encounter represents harm/loss, impending threat, or potential challenge (Lazarus).',
      etymology: 'Latin primarius ("first of all") + Old French apreisier. Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Secondary Appraisal', 'Lazarus', 'Cognitive Appraisal']
    },
    {
      term: 'Problem-Focused Coping',
      ipa: '/ˈprɒbləm ˈfoʊkəst ˈkoʊpɪŋ/',
      def: 'Coping strategies directed at changing or managing the stressor directly through active planning, problem-solving, and assertive behavioral modification.',
      etymology: 'Greek problema ("task, obstacle") + focus + coping. Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Emotion-Focused Coping', 'Goodness-of-Fit', 'Lazarus']
    },
    {
      term: 'Projection',
      ipa: '/prəˈdʒɛkʃən/',
      def: 'Defense mechanism where one’s own disowned, unacceptable impulses, thoughts, or aggressive traits are attributed to another person.',
      etymology: 'Latin proiectio ("a throwing forward"), from proicere ("to throw forth"). Freud (1894).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Ego Defense', 'Freud', 'Paranoia']
    },
    {
      term: 'Rationalisation',
      ipa: '/ˌræʃənəlaɪˈzeɪʃən/',
      def: 'Defense mechanism concocting socially acceptable, logical justifications for actions or feelings actually motivated by unconscious impulses.',
      etymology: 'Latin rationalis ("of reason"), from ratio ("reckoning, reason"). Coined in psychoanalysis by Ernest Jones (1908).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Ernest Jones', 'Ego Defense', 'Intellectualisation']
    },
    {
      term: 'Reaction Formation',
      ipa: '/riˈækʃən fɔːrˈmeɪʃən/',
      def: 'Defense mechanism replacing an unacceptable unconscious desire with its exact conscious opposite through exaggerated, rigid behavior.',
      etymology: 'Latin reactio + formatio ("a shaping"). Freud (1905).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Ego Defense', 'Freud', 'Overcompensation']
    },
    {
      term: 'Regression',
      ipa: '/rɪˈɡrɛʃən/',
      def: 'Defense mechanism characterized by retreating to behavioral, affective, or cognitive patterns characteristic of an earlier developmental stage.',
      etymology: 'Latin regressio ("a going back, return"), from regredi ("to go back"). Freud (1900).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Psychosexual Stages', 'Freud', 'Immature Defense']
    },
    {
      term: 'Repression',
      ipa: '/rɪˈprɛʃən/',
      def: 'The primal defense mechanism: involuntary, unconscious banishment of anxiety-provoking thoughts, impulses, or trauma memories from consciousness.',
      etymology: 'Latin repressio ("a pressing back, restraining"), from reprimere ("to press back"). Freud (1915).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Suppression', 'Unconscious', 'Primary Defense']
    },
    {
      term: 'Resistance Stage (GAS)',
      ipa: '/rɪˈzɪstəns steɪdʒ/',
      def: 'Second phase of Selye’s GAS: physiological adaptation is maintained through sustained cortisol secretion, gluconeogenesis, and behavioral coping.',
      etymology: 'Latin resistere ("to withstand"). Selye (1936).',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['GAS', 'Selye', 'Cortisol', 'Adaptation']
    },
    {
      term: 'SAM Axis',
      ipa: '/ˌɛs eɪ ˈɛm ˈæksɪs/',
      def: 'Sympathetic-Adreno-Medullary system: neural pathway triggering rapid release of epinephrine and norepinephrine for immediate emergency fight-or-flight.',
      etymology: 'Anatomical abbreviation for Sympathetic nervous system, Adrenal Medulla.',
      volume: 'IX',
      chapterId: 'stress-and-gas',
      related: ['Epinephrine', 'Fight-or-Flight', 'Cannon']
    },
    {
      term: 'Secondary Appraisal',
      ipa: '/ˈsɛkəndɛri əˈpreɪzəl/',
      def: 'Cognitive audit assessing available personal and social coping resources and self-efficacy to deal with an appraised threat or challenge.',
      etymology: 'Latin secondarius ("belonging to the second class") + Old French apreisier. Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Primary Appraisal', 'Lazarus', 'Self-Efficacy']
    },
    {
      term: 'Sublimation',
      ipa: '/ˌsʌblɪˈmeɪʃən/',
      def: 'The most mature defense mechanism: transforming instinctual, unacceptable aggressive or sexual drives into socially productive, admired creative channels.',
      etymology: 'Latin sublimare ("to elevate, lift up on high"), from sublimis ("uplifted, exalted"). Freud (1905).',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Mature Defense', 'Vaillant Level IV', 'Freud']
    },
    {
      term: 'Suppression',
      ipa: '/səˈprɛʃən/',
      def: 'The conscious, deliberate postponement of paying attention to an impulse, conflict, or stressor until an appropriate future time.',
      etymology: 'Latin suppressio ("a pressing down"), from supprimere ("to press under").',
      volume: 'IX',
      chapterId: 'defense-mechanisms',
      related: ['Repression', 'Mature Defense', 'Vaillant']
    },
    {
      term: 'Threat Appraisal',
      ipa: '/θrɛt əˈpreɪzəl/',
      def: 'Primary appraisal anticipating prospective harm, suffering, or catastrophic loss in the near or distant future (Lazarus).',
      etymology: 'Old English threat ("coercion, affliction") + Old French apreisier. Lazarus & Folkman (1984).',
      volume: 'IX',
      chapterId: 'coping-and-appraisal',
      related: ['Primary Appraisal', 'Harm/Loss', 'Challenge']
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
