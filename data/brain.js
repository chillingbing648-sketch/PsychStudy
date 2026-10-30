/**
 * PsychStudy — The Clinical Atlas
 * Functional Neuroanatomy Engine & Brain Atlas Data
 * Corrected per Appendix A & Azevedo et al. (2009)
 */

(function(global) {
  global.BRAIN_ANATOMY_DATA = {
    frontal: {
      tag: 'Anterior Cerebral Cortex · Brodmann 9, 10, 11, 46, 47 & BA 4, 6, 44, 45',
      name: 'Frontal Lobe & Prefrontal Network',
      color: '#D99A89',
      role: 'Governs high-order executive functions: goal-directed attention, cognitive flexibility, impulse inhibition, risk assessment, abstract reasoning, and expressive language (Broca\'s area).',
      clinical: 'Hypofrontality and reduced dorsolateral prefrontal cortex (dlPFC) metabolism are associated with negative and cognitive symptoms in Schizophrenia. Hyperactive orbitofrontal-striatal loops correlate with intrusive obsessions and ritualistic compulsions in OCD. Ventromedial PFC decoupling from limbic structures impairs affect regulation in Major Depressive Disorder and GAD. Reduced prefrontal grey matter volume is observed in Antisocial Personality Disorder (ASPD).',
      neurotransmitters: 'Dopamine (D1, D2), Norepinephrine (α2A), GABA, Glutamate',
      evidence: 'Strong (Meta-analyses of structural and functional fMRI/PET cohorts)',
      subregions: ['Dorsolateral Prefrontal Cortex (dlPFC)', 'Orbitofrontal Cortex (OFC)', 'Ventromedial Prefrontal Cortex (vmPFC)', 'Anterior Cingulate Cortex (ACC)', 'Primary Motor Cortex (M1)'],
      topicIds: ['gad', 'ocd', 'major-depression', 'antisocial', 'schizophrenia', 'borderline'],
      atlasOverview: `The frontal lobes constitute approximately one-third of the human cerebral cortex. The prefrontal cortex (PFC) coordinates complex goal-directed behaviours through reciprocal connections with limbic structures (amygdala, hippocampus) and basal ganglia loops.

In clinical psychology, prefrontal dysregulation represents a central transdiagnostic mechanism. dlPFC hypoactivity is associated with deficits in working memory and cognitive reappraisal in major depression, while excessive metabolic activity in the orbitofrontal cortex and caudate nucleus correlates with repetitive checking and contamination fears in OCD. Patients with antisocial personality disorder exhibit structural volume deficits in the orbitofrontal and ventromedial regions, associated with impairments in empathy and moral judgement.`
    },
    parietal: {
      tag: 'Superior & Posterior Parietal Cortex · Brodmann 1, 2, 3, 5, 7, 39, 40',
      name: 'Parietal Lobe & Somatosensory Processing',
      color: '#8EADC0',
      role: 'Integrates multimodal somatosensory inputs, spatial cognition, body schema representation, interoceptive awareness, and coordinate transformation for spatial attention.',
      clinical: 'Parietal-insular and somatosensory network alterations are linked to severe body schema distortions in Anorexia Nervosa and Bulimia Nervosa, where individuals experience their body as significantly larger regardless of objective physical status. In PTSD, disrupted parietal gating of somatosensory trauma triggers is associated with tactile and spatial re-experiencing. Somatosensory hypervigilance in Panic Disorder leads to catastrophic misinterpretation of normal autonomic fluctuations.',
      neurotransmitters: 'Glutamate (AMPA, NMDA), Acetylcholine, Serotonin (5-HT2A)',
      evidence: 'Moderate to Strong (Functional neuroimaging and sensory gating paradigms)',
      subregions: ['Primary Somatosensory Cortex (S1)', 'Superior Parietal Lobule (SPL)', 'Inferior Parietal Lobule (IPL)', 'Precuneus', 'Temporoparietal Junction (TPJ)'],
      topicIds: ['anorexia', 'bulimia', 'ptsd', 'panic'],
      atlasOverview: `The parietal lobe translates raw sensory inputs into unified representations of the body in space. The postcentral gyrus (primary somatosensory cortex) maps tactile and visceral feedback somatotopically, while higher-order posterior parietal areas and the precuneus generate the internal "body schema".

In eating disorders (Anorexia and Bulimia Nervosa), functional neuroimaging reveals hypoactivation in the right inferior parietal lobule during body-image evaluation tasks, suggesting a neurobiological correlate for refractory body dysmorphia. In trauma and panic disorders, parietal hyper-connectivity with the insula amplifies physiological sensations, triggering panic attacks and somatic trauma flashbacks.`
    },
    temporal: {
      tag: 'Lateral & Medial Temporal Cortex · Brodmann 20, 21, 22, 28, 38, 41, 42',
      name: 'Temporal Lobe & Limbic Complex',
      color: '#A5B9A0',
      role: 'Central to declarative and episodic memory encoding (hippocampus), emotional valence attribution and fear conditioning (amygdala), auditory speech perception (Wernicke\'s area), and complex visual recognition (fusiform face area).',
      clinical: 'Aberrant spontaneous activation in the superior temporal gyrus is closely associated with auditory verbal hallucinations in Schizophrenia. Hyperactivity of the basolateral amygdala accompanied by stress-induced hippocampal neurotoxicity and volume reduction characterizes treatment-resistant Major Depression and PTSD. Exaggerated amygdala reactivity to conditioned stimuli underlies Specific Phobias and acute panic onset.',
      neurotransmitters: 'Serotonin (5-HT1A, 5-HT2), GABA, Brain-Derived Neurotrophic Factor (BDNF), Glutamate',
      evidence: 'Strong (Replicated fMRI, PET, and volumetric MRI across clinical cohorts)',
      subregions: ['Hippocampus', 'Amygdaloid Complex', 'Superior Temporal Gyrus (Wernicke\'s Area)', 'Fusiform Gyrus', 'Entorhinal Cortex'],
      topicIds: ['schizophrenia', 'phobias', 'ptsd', 'major-depression', 'borderline'],
      atlasOverview: `The medial temporal lobe structures (hippocampus and amygdala) form the core of affective and mnemonic processing. The amygdala evaluates sensory stimuli for emotional threat and survival relevance, while the hippocampus encodes context-dependent autobiographical memories.

In Schizophrenia, functional MRI demonstrates tonotopic activation of the primary auditory and superior temporal cortices during auditory verbal hallucinations in the absence of external acoustic stimuli. In PTSD and chronic depression, sustained glucocorticoid exposure impairs neurogenesis in the dentate gyrus, resulting in hippocampal volume loss and deficits in contextual memory discrimination.`
    },
    occipital: {
      tag: 'Posterior Visual Cortex · Brodmann 17 (V1), 18 (V2), 19 (V3-V5)',
      name: 'Occipital Lobe & Visual Pathways',
      color: '#B4A2CA',
      role: 'Specialized for visual sensory reception, retinotopic feature mapping (edges, contrast, orientation), motion tracking, and upstream feed-forward projections along dorsal (\'where\') and ventral (\'what\') visual streams.',
      clinical: 'Spontaneous occipital hyper-activation without sensory inputs is associated with complex visual hallucinations in Psychotic Spectrum Disorders. Intrusive, vivid visual trauma flashbacks in PTSD correlate with intense visual cortex activation and uninhibited feedback loops. In Anorexia Nervosa, altered connectivity between the primary visual cortex (V1) and extrastriate body area (EBA) correlates with distorted visual processing of body shapes.',
      neurotransmitters: 'GABA (inhibitory tuning), Glutamate, Acetylcholine',
      evidence: 'Moderate (fMRI retinotopic mapping and trauma-recall paradigms)',
      subregions: ['Primary Visual Cortex (V1 / Striate Cortex)', 'Extrastriate Visual Areas (V2, V3, V4, V5/MT)', 'Lingual Gyrus', 'Cuneus'],
      topicIds: ['schizophrenia', 'ptsd', 'anorexia'],
      atlasOverview: `Occupying the posterior pole of each cerebral hemisphere, the occipital lobe processes all visual afferents received from the retina via the lateral geniculate nucleus (LGN). Striate cortex (V1) performs early feature extraction, projecting forward to ventral streams for object and face identification and dorsal streams for spatial localization.

Neuroimaging during PTSD flashback episodes reveals abrupt reactivation of primary and extrastriate visual areas, suggesting that intrusive traumatic recollections are experienced with raw perceptual immediacy rather than as abstract verbal thoughts. In psychotic episodes, aberrant thalamocortical gating is implicated in autonomous activation of visual processing networks.`
    },
    cerebellum: {
      tag: 'Infratentorial Cerebellar Complex & Brainstem Relay',
      name: 'Cerebellum, Brainstem & Autonomic Relays',
      color: '#C69A72',
      role: 'Regulates sensorimotor coordination, autonomic homeostatic stability (cardiorespiratory rhythm in medulla), monoaminergic neurotransmitter synthesis (locus coeruleus, raphe nuclei), and procedural motor memory.',
      clinical: 'Locus coeruleus hypersensitivity and massive sudden norepinephrine discharge trigger the somatic cascade of Panic Attacks (tachycardia, tachypnea, catastrophic dread). The dorsal raphe nucleus provides serotonergic ascending projections to frontolimbic circuits implicated in mood and anxiety regulation.',
      neurotransmitters: 'Norepinephrine, Serotonin, Acetylcholine, Dopamine, GABA',
      evidence: 'Strong (Electrophysiological and neurochemical autonomic studies)',
      subregions: ['Cerebellar Hemispheres & Vermis', 'Pons', 'Medulla Oblongata', 'Locus Coeruleus', 'Dorsal Raphe Nuclei'],
      topicIds: ['panic', 'gad', 'ptsd'],
      atlasOverview: `The cerebellum contains approximately 80% of the brain's total neurons (~69 billion of ~86 billion total; Azevedo et al., 2009) and coordinates not only motor actions but also cognitive processing through cerebro-cerebellar loops with the prefrontal cortex. Immediately adjacent, the brainstem (midbrain, pons, and medulla oblongata) houses vital autonomic centers and the ascending reticular activating system (ARAS).

The brainstem's locus coeruleus is the principal site for brain synthesis of norepinephrine. In Panic Disorder, Klein's suffocation false alarm theory highlights brainstem hypersensitivity to carbon dioxide and lactate, provoking abrupt hyperventilation and fight-or-flight panic surges. (Note: The master circadian pacemaker, the Suprachiasmatic Nucleus, is located in the anterior hypothalamus, not in the cerebellum or brainstem).`
    },
    limbic: {
      tag: 'Subcortical Limbic & Diencephalic Complex',
      name: 'Limbic & Subcortical Network',
      color: '#E09F67',
      role: 'Coordinates primal emotional responses, fear conditioning, memory consolidation, endocrine neuroendocrine homeostasis, reward salience, and master circadian pacemaking.',
      clinical: 'The Suprachiasmatic Nucleus (SCN) of the anterior hypothalamus regulates pineal melatonin secretion and circadian rhythmicity, dysregulated in Seasonal Affective Disorder (SAD). The Amygdala drives fear conditioning in Phobias, Panic, and PTSD. Striatal dopamine dysregulation (caudate, nucleus accumbens) underpins aberrant salience in Schizophrenia, reward-seeking in Bipolar mania, and habit perseveration in OCD.',
      neurotransmitters: 'Serotonin, Dopamine, Melatonin, Corticotropin-Releasing Factor (CRF), Oxytocin',
      evidence: 'Strong (Replicated fMRI, neuroendocrinology, and optogenetics in translational models)',
      subregions: ['Hypothalamus (including Suprachiasmatic Nucleus - SCN)', 'Amygdaloid Complex', 'Hippocampus', 'Thalamus', 'Basal Ganglia / Caudate Nucleus', 'Nucleus Accumbens', 'Anterior Cingulate Cortex (ACC)'],
      topicIds: ['sad', 'bipolar', 'schizophrenia', 'ocd', 'ptsd', 'phobias', 'panic'],
      atlasOverview: `The subcortical limbic system and diencephalon represent evolutionary ancient structures that orchestrate survival, homeostatic regulation, and affective valence.

Crucially, the master circadian pacemaker of the human body—the Suprachiasmatic Nucleus (SCN)—is located directly in the anterior hypothalamus. In Seasonal Affective Disorder (SAD), reduced winter sunlight delays SCN pacemaking, prolonging nocturnal pineal melatonin secretion into waking hours. Concurrently, the striatal reward hubs (nucleus accumbens and caudate) interact with the orbitofrontal cortex to mediate compulsive rituals in OCD and manic reward seeking in Bipolar disorder.`
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
