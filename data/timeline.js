/**
 * PsychStudy — The Clinical Atlas
 * Historical Timeline of Mental Health Care
 * Strictly verified events, dates, and significance (Appendix D)
 */

(function(global) {
  global.TIMELINE_EVENTS = [
    {
      id: 'trephination',
      year: 'c. 6500 BCE',
      numYear: -6500,
      title: 'Neolithic Trephination',
      category: 'treatments',
      era: 'Ancient',
      significance: 'Prehistoric surgical practice of boring holes into the human cranium; purpose debated between releasing malevolent spirits and relieving intracranial trauma.',
      refId: 'apa2022'
    },
    {
      id: 'hippocrates',
      year: 'c. 460–370 BCE',
      numYear: -400,
      title: 'Hippocratic Humoral Theory',
      category: 'concepts',
      era: 'Ancient',
      significance: 'Hippocrates challenged demonic explanations, positing naturalistic somatic etiologies where mental pathology arose from imbalances of the four bodily humours.',
      refId: 'apa2022'
    },
    {
      id: 'bethlem',
      year: '1247',
      numYear: 1247,
      title: 'Foundation of Bethlem Royal Hospital',
      category: 'treatments',
      era: 'Medieval',
      significance: 'Established in London, Bethlem later became notoriously known as "Bedlam", epitomizing early custodial institutionalisation and public exhibition of inmates.',
      refId: 'who2022'
    },
    {
      id: 'malleus',
      year: '1486–1487',
      numYear: 1486,
      title: 'Publication of Malleus Maleficarum',
      category: 'concepts',
      era: 'Renaissance',
      significance: 'Inquisitorial treatise by Heinrich Kramer formalizing demonic possession and witchcraft doctrines, sanctioning brutal persecution of psychopathology across Europe.',
      refId: 'who2022'
    },
    {
      id: 'pinel',
      year: '1793',
      numYear: 1793,
      title: 'Pinel’s Moral Treatment at Bicêtre',
      category: 'treatments',
      era: 'Moral Reform',
      significance: 'Philippe Pinel unchained psychiatric patients at Bicêtre Hospital, pioneering humanitarian psychosocial care and asylum reform.',
      refId: 'who2022'
    },
    {
      id: 'dix',
      year: '1840s',
      numYear: 1841,
      title: 'Dorothea Dix Asylum Crusade',
      category: 'policy',
      era: 'Moral Reform',
      significance: 'Relentless advocacy spearheaded the founding and expansion of over 30 state psychiatric hospitals across North America and Europe, decrying prison abuses.',
      refId: 'who2022'
    },
    {
      id: 'kraepelin',
      year: '1883–1899',
      numYear: 1883,
      title: 'Kraepelinian Nosology',
      category: 'concepts',
      era: 'Early 20th Century',
      significance: 'Emil Kraepelin formulated biological taxonomy in his Compendium, drawing the foundational distinction between Dementia Praecox and Manic-Depressive Insanity.',
      refId: 'bleuler1911'
    },
    {
      id: 'studies-hysteria',
      year: '1895',
      numYear: 1895,
      title: 'Studies on Hysteria',
      category: 'concepts',
      era: 'Early 20th Century',
      significance: 'Josef Breuer and Sigmund Freud introduced the "talking cure" and the psychogenic unconscious etiology of somatic conversion symptoms.',
      refId: 'breuer1895'
    },
    {
      id: 'interpretation-dreams',
      year: '1900',
      numYear: 1900,
      title: 'The Interpretation of Dreams',
      category: 'concepts',
      era: 'Early 20th Century',
      significance: 'Sigmund Freud detailed the topographic model of the mind (conscious, preconscious, unconscious) and posited dreams as the royal road to the unconscious.',
      refId: 'freud1900'
    },
    {
      id: 'bleuler',
      year: '1911',
      numYear: 1911,
      title: 'Bleuler Coins "Schizophrenia"',
      category: 'concepts',
      era: 'Early 20th Century',
      significance: 'Eugen Bleuler redefined Kraepelin’s dementia praecox as schizophrenia, shifting emphasis from early dementia to the intrapsychic splitting of mental associations.',
      refId: 'bleuler1911'
    },
    {
      id: 'watson',
      year: '1913',
      numYear: 1913,
      title: 'Watson’s Behaviourist Manifesto',
      category: 'concepts',
      era: 'Early 20th Century',
      significance: 'John B. Watson established behaviourism, arguing that psychology must discard introspective mentalism in favor of strictly observable stimulus-response laws.',
      refId: 'watson1920'
    },
    {
      id: 'ect',
      year: '1938',
      numYear: 1938,
      title: 'Invention of Electroconvulsive Therapy',
      category: 'treatments',
      era: 'Mid 20th Century',
      significance: 'Ugo Cerletti and Lucio Bini conducted the first successful therapeutic electrically induced grand mal seizure in Rome, creating a mainstay for treatment-resistant depression.',
      refId: 'who2022'
    },
    {
      id: 'lithium',
      year: '1949',
      numYear: 1949,
      title: 'Cade Discovers Lithium Prophylaxis',
      category: 'treatments',
      era: 'Mid 20th Century',
      significance: 'Australian psychiatrist John Cade reported that lithium carbonate calm manic excitement, inaugurating the pharmacological era of mood stabilization.',
      refId: 'cade1949'
    },
    {
      id: 'rogers',
      year: '1951',
      numYear: 1951,
      title: 'Client-Centered Therapy',
      category: 'treatments',
      era: 'Mid 20th Century',
      significance: 'Carl Rogers revolutionized psychotherapy with person-centered counseling, replacing clinical authoritarianism with unconditional positive regard, empathy, and congruence.',
      refId: 'rogers1951'
    },
    {
      id: 'dsm1-chlorpromazine',
      year: '1952',
      numYear: 1952,
      title: 'DSM-I & The Dawn of Antipsychotics',
      category: 'policy',
      era: 'Mid 20th Century',
      significance: 'APA published the first DSM; simultaneously, Henri Laborit, Jean Delay, and Pierre Deniker demonstrated chlorpromazine’s tranquilizing efficacy, emptying asylums.',
      refId: 'apa2022'
    },
    {
      id: 'community-mental-health',
      year: '1963',
      numYear: 1963,
      title: 'Community Mental Health Act',
      category: 'policy',
      era: 'Deinstitutionalisation',
      significance: 'U.S. President John F. Kennedy signed legislation funding community centers, accelerating worldwide deinstitutionalisation and local mental healthcare integration.',
      refId: 'who2022'
    },
    {
      id: 'rosenhan-homosexuality',
      year: '1973',
      numYear: 1973,
      title: 'Rosenhan Study & APA Homosexuality Vote',
      category: 'concepts',
      era: 'Nosological Reform',
      significance: 'David Rosenhan’s "On Being Sane in Insane Places" exposed institutional labeling bias; concurrently, APA Trustees voted in December 1973 to declassify homosexuality as a disorder.',
      refId: 'rosenhan1973'
    },
    {
      id: 'dsm3',
      year: '1980',
      numYear: 1980,
      title: 'DSM-III Operational Revolution',
      category: 'concepts',
      era: 'Modern Nosology',
      significance: 'Robert Spitzer led the shift to descriptive, atheoretical, operationalized diagnostic criteria; introduced the multiaxial framework and recognized PTSD.',
      refId: 'apa2022'
    },
    {
      id: 'nmhp-india',
      year: '1982',
      numYear: 1982,
      title: 'National Mental Health Programme of India',
      category: 'policy',
      era: 'Modern Nosology',
      significance: 'India launched the NMHP to decentralize mental healthcare, deploying the Bellary District Model to integrate psychiatric care into primary public health centers.',
      refId: 'gururaj2016'
    },
    {
      id: 'mha-1987',
      year: '1987',
      numYear: 1987,
      title: 'Indian Mental Health Act 1987',
      category: 'policy',
      era: 'Modern Nosology',
      significance: 'Replaced the colonial 1912 Indian Lunacy Act, updating regulations for psychiatric hospital establishment and custodial admissions.',
      refId: 'goi2017'
    },
    {
      id: 'linehan-dbt',
      year: '1993',
      numYear: 1993,
      title: 'Linehan’s DBT Manual for BPD',
      category: 'treatments',
      era: 'Modern Nosology',
      significance: 'Marsha Linehan published Dialectical Behaviour Therapy, synthesizing Zen mindfulness and behavioural modification to treat chronic suicidality and Borderline Personality.',
      refId: 'linehan1993'
    },
    {
      id: 'dsm5',
      year: '2013',
      numYear: 2013,
      title: 'DSM-5 Eliminates Multiaxial System',
      category: 'concepts',
      era: 'Contemporary',
      significance: 'DSM-5 abandoned the five-axis model, retired classic schizophrenia subtypes in favor of dimensional rating, and formally recognized Binge-Eating Disorder.',
      refId: 'apa2022'
    },
    {
      id: 'mhca-2017',
      year: '2017',
      numYear: 2017,
      title: 'Mental Healthcare Act 2017 (India)',
      category: 'policy',
      era: 'Contemporary',
      significance: 'Landmark human rights legislation: legally decriminalized suicide attempts (Section 115), banned barbaric procedures, and codified legally binding advance directives.',
      refId: 'goi2017'
    },
    {
      id: 'dsm5tr-icd11',
      year: '2022',
      numYear: 2022,
      title: 'DSM-5-TR & ICD-11 Global Harmonization',
      category: 'concepts',
      era: 'Contemporary',
      significance: 'DSM-5-TR (March 2022) added Prolonged Grief Disorder and refined diagnostic equity; ICD-11 (Jan 2022) debuted fully digital, dimensional personality assessment.',
      refId: 'apa2022'
    },
    {
      id: 'tele-manas',
      year: '2022',
      numYear: 2022,
      title: 'Launch of Tele-MANAS (India)',
      category: 'policy',
      era: 'Contemporary',
      significance: 'Government of India instituted 24/7 national tele-mental health helpline network (14416) anchored by NIMHANS, providing multilingual psychological emergency triage.',
      refId: 'gururaj2016'
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
