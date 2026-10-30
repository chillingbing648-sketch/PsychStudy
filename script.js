'use strict';
/* ═══════════════════════════════════════════════════════════
   PSYCHSTUDY — "The Clinical Atlas"
   script.js  |  Core Application Controller & Clinical Learning Engines
   ═══════════════════════════════════════════════════════════ */

// ─── SECURITY & SANITIZATION UTILITIES ────────────────────────────────────────
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeQuizAnswer(ans) {
  if (!ans) return '';
  return String(ans).toLowerCase()
    .replace(/^(the|a|an)\s+/i, '')
    .replace(/[\.,\-\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/behavioural/g, 'behavioral')
    .replace(/generalised/g, 'generalized')
    .replace(/desensitisation/g, 'desensitization')
    .replace(/electroconvulsive/g, 'electro convulsive')
    .trim();
}

function checkFillBlank(userAns, q) {
  const normUser = normalizeQuizAnswer(userAns);
  if (!normUser) return false;
  if (Array.isArray(q.answers)) {
    return q.answers.some(ans => normalizeQuizAnswer(ans) === normUser);
  }
  if (q.a) {
    if (normalizeQuizAnswer(q.a) === normUser) return true;
    const parts = q.a.split(/[,/·]/).map(p => normalizeQuizAnswer(p));
    if (parts.includes(normUser)) return true;
  }
  return false;
}

// ─── KNOWLEDGE BASE (Central Data Store or Local Fallback) ───────────────────
const KB = (typeof window !== 'undefined' && window.KB && window.KB.length > 0) ? window.KB : [
  {
    id:'psych-disorders',
    name:'What Are Psychological Disorders?',
    category:'Foundations',
    icon:'🏥',
    preview:'Understanding psychological disorders beyond simple "abnormal" behaviour.',
    definition:'A psychological disorder involves persistent patterns of thoughts, feelings, or behaviours that cause significant distress, dysfunction, deviance from social norms, or danger to the individual or others.',
    explanation:`Psychological disorder does not simply mean "abnormal" behaviour. Many disorders such as depression and anxiety are statistically common yet clinically significant. Not all socially unusual behaviours (e.g., streaking) qualify as disorders.

The modern understanding recognises that psychological disorders involve clusters of symptoms that interfere with a person's daily functioning, emotional well-being, relationships, or physical health. These clusters form the basis of modern diagnostic systems such as the DSM-5.

There is no single universal definition of a psychological disorder. What counts as normal or abnormal varies across cultures, time periods, and social norms. Despite this ambiguity, recognisable patterns of dysfunction guide diagnosis and treatment.`,
    keyPoints:[
      'Psychological disorder ≠ simply abnormal behaviour',
      'Common disorders (depression, anxiety) are not statistically rare',
      'Symptoms must cause clinically significant distress or impairment',
      'Defined by patterns of thought, feeling, or behaviour over time',
      'The DSM-5 is the primary diagnostic classification system'
    ],
    types:['Anxiety Disorders','Mood Disorders','Psychotic Disorders','Eating Disorders','Personality Disorders'],
    symptoms:['Persistent distress or sadness','Impaired daily functioning','Social withdrawal','Bizarre or erratic behaviour','Persistent irrational fears'],
    psychologists:['APA — Publishes the DSM diagnostic manual','Emil Kraepelin — Founded modern psychiatric classification'],
    examples:['Lisa (case study) — grief, depression, and work dysfunction after loss of parents','A person with major depression unable to leave their bed for days'],
    treatment:'Psychological disorders are treated through psychotherapy (CBT, psychoanalysis, person-centred therapy), pharmacological interventions, or a combination of both approaches.',
    summary:'Psychological disorders are clinically significant patterns of distress or dysfunction. They are diagnosed using the four Ds criteria and classified using DSM-5 diagnostic criteria by trained mental health professionals.',
    mnemonic:'The Four Ds: Distress · Dysfunction · Deviance · Danger'
  },
  {
    id:'four-ds',
    name:'Four Criteria of Abnormality (The 4 Ds)',
    category:'Foundations',
    icon:'📐',
    preview:'Distress, Dysfunction, Deviance, Danger — the criteria for defining abnormal behaviour.',
    definition:'The four Ds are the primary criteria used to determine whether a pattern of behaviour constitutes a psychological disorder: Distress, Dysfunction, Deviance, and Danger.',
    explanation:`Distress refers to significant emotional suffering caused by the behaviour or experience — for example, intense grief, persistent sadness, or overwhelming fear. This criterion emphasises subjective suffering.

Dysfunction means that the behaviour interferes significantly with the person's ability to carry out daily responsibilities — such as maintaining work performance, social relationships, or self-care. Lisa, in the case study, exemplified dysfunction by missing work and being unable to manage household tasks.

Deviance involves behaviours that fall far outside the norms of the person's cultural or social context. However, deviance alone is not sufficient — it must be considered in context. For example, unusual religious practices may appear deviant but are culturally normal.

Danger refers to behaviour that poses a risk to the person or others — such as suicidal behaviour or serious aggression. This is the least common criterion and not required for diagnosis in all cases.`,
    keyPoints:[
      'Distress — causes significant emotional or psychological suffering',
      'Dysfunction — impairs work, relationships, or daily activities',
      'Deviance — behaviour outside accepted social or cultural norms',
      'Danger — poses risk to self or others (least common criterion)',
      'Multiple criteria must often be present for a clinical diagnosis'
    ],
    types:['Distress — subjective suffering','Dysfunction — objective impairment','Deviance — norm violation','Danger — risk to self or others'],
    symptoms:['Intense emotional suffering','Inability to perform normal roles','Socially unacceptable behaviour patterns','Self-harming or dangerous acts'],
    psychologists:['Rosenhan (1973) — On being sane in insane places','Thomas Szasz — Challenged the concept of mental illness'],
    examples:['Lisa missing work and unable to manage her household after bereavement (Dysfunction)','A person experiencing severe panic attacks every day (Distress)'],
    treatment:'Treatment is guided by which criteria are most prominent. Distress is addressed through psychotherapy; dysfunction through rehabilitation and skills training; danger through crisis intervention.',
    summary:'The Four Ds provide a practical framework for identifying psychological disorders. All four criteria are relevant, though not all must be present simultaneously. Context and cultural sensitivity are essential when applying these criteria.',
    mnemonic:'DDDD — Distress, Dysfunction, Deviance, Danger'
  },
  {
    id:'dsm',
    name:'The DSM and Diagnostic Classification',
    category:'Foundations',
    icon:'📖',
    preview:'The DSM is the leading system for classifying and diagnosing psychological disorders worldwide.',
    definition:'The Diagnostic and Statistical Manual of Mental Disorders (DSM), published by the American Psychiatric Association, is the primary classification system used by clinicians to diagnose over 200 psychological disorders.',
    explanation:`The DSM was first published in 1952 and has undergone multiple revisions as scientific understanding of mental health has evolved. The latest major update, DSM-5, was published in 2013 and provides standardised criteria for clinicians worldwide.

The DSM focuses on identifying patterns of symptoms rather than interpreting causes. This is because for many disorders, the exact causes remain unknown. Clinicians use the DSM by comparing an individual's symptoms with the descriptions and criteria listed for each disorder.

Importantly, the DSM uses person-first language — referring to "a person with schizophrenia" rather than "a schizophrenic." This approach promotes empathy and reduces stigma in clinical settings.

The DSM reflects scientific updates and societal changes over time. A landmark example is the removal of homosexuality from the DSM in 1974, reflecting both evolving scientific evidence and changing social attitudes.`,
    keyPoints:[
      'Published by the American Psychiatric Association (APA)',
      'Current edition is DSM-5 (published 2013)',
      'Diagnoses over 200 psychological disorders',
      'Focuses on symptoms, not causes (descriptive approach)',
      'Uses person-first language to reduce stigma'
    ],
    types:['DSM-I (1952)','DSM-II (1968)','DSM-III (1980) — first multi-axial','DSM-IV (1994)','DSM-5 (2013) — current edition'],
    symptoms:['Clinicians compare patient symptoms to DSM criteria','Duration, severity, and impact assessed','Shared diagnostic language across clinicians'],
    psychologists:['American Psychiatric Association — publishers','Robert Spitzer — led development of DSM-III'],
    examples:['Homosexuality removed from DSM in 1974 — reflecting changing cultural and scientific understanding','OCD diagnosed when intrusive thoughts and compulsions cause > 1 hour of distress daily'],
    treatment:'The DSM guides treatment selection by helping clinicians match disorders to evidence-based interventions — such as CBT for depression or exposure therapy for phobias.',
    summary:'The DSM is the global standard for diagnosing psychological disorders. It is descriptive, symptom-focused, and regularly updated to reflect evolving science and cultural understanding. Its person-first approach helps reduce stigma.',
    mnemonic:'DSM = Diagnostic Statistical Manual — "Describe Symptoms Methodically"'
  },
  {
    id:'culture-mental-illness',
    name:'Mental Illness Across Time and Culture',
    category:'Foundations',
    icon:'🌍',
    preview:'How culture, history, and social context shape the definition of mental illness.',
    definition:'The understanding and classification of mental illness varies significantly across different historical periods and cultural contexts, showing that what is considered "abnormal" is not fixed but shaped by social, cultural, and scientific factors.',
    explanation:`Throughout history, mental disorders have been explained in vastly different ways. In ancient times, unusual behaviour was often attributed to supernatural forces or demonic possession. As psychology and psychiatry developed, medical and scientific explanations replaced these beliefs.

An example of historical change is the reclassification of homosexuality: once labelled a disorder due to moral social beliefs, it was later understood as a natural variation of human sexuality and removed from the DSM in 1974. Similarly, "hysteria" — once extremely common among women — has disappeared from diagnostic systems as society and medicine evolved.

Culture shapes how people interpret thoughts, emotions, and behaviours. For example, hearing voices of deceased individuals is generally considered a symptom of schizophrenia in Western societies, but in many traditional Native American communities, it is viewed as a spiritual experience and not pathological.

In parts of the Middle East, visions and auditory experiences are often interpreted as spiritual gifts. These cultural differences show that psychological symptoms must always be understood within their social and cultural contexts.`,
    keyPoints:[
      'Definitions of mental illness change across history and cultures',
      'Homosexuality was removed from the DSM in 1974',
      'Hearing voices may be spiritual in some cultures, pathological in others',
      '"Hysteria" diagnosis has disappeared as understanding evolved',
      'Culture-bound syndromes reflect unique cultural expressions of distress'
    ],
    types:['Historical shifts in diagnosis','Cross-cultural variations','Culture-bound syndromes','Colonial psychiatry'],
    symptoms:['Culture-specific expressions of distress','Behaviours normal in one culture, pathological in another'],
    psychologists:['Arthur Kleinman — Pioneered cross-cultural psychiatry','George Devereux — Founded ethno-psychiatry'],
    examples:['Hearing ancestral voices — pathology in Western medicine, spirituality in Native American culture','Grisi siknis (Central America) — running frenzied with intense anxiety and anger','Hikikomori (Japan) — prolonged social withdrawal due to social pressure'],
    treatment:'Culturally competent care requires clinicians to understand the patient\'s cultural background, beliefs, and the cultural meaning of their symptoms before making a diagnosis.',
    summary:'Mental illness is not defined by universal, fixed criteria. Historical periods and cultural contexts fundamentally shape what is considered abnormal. Culture-bound syndromes and historical reclassifications demonstrate that diagnosis must always be sensitive to social and cultural context.',
    mnemonic:'CHS — Culture · History · Society shape our understanding of mental illness'
  },
  {
    id:'culture-bound',
    name:'Culture-Bound Syndromes',
    category:'Foundations',
    icon:'🌐',
    preview:'Psychological disorders that exist primarily within specific cultural or regional groups.',
    definition:'Culture-bound syndromes are psychological conditions that are specific to particular cultural groups and reflect the unique ways that culture shapes the experience and expression of psychological distress.',
    explanation:`Some psychological disorders exist primarily within certain cultural or regional groups. These are known as culture-bound syndromes, and they illustrate how cultural beliefs shape the form that psychological distress takes.

Grisi siknis is found mainly in Central America and is characterised by intense headaches, extreme anxiety, sudden anger, and episodes where the person begins running frenziedly without control. The condition is often explained in spiritual terms within the affected communities.

Hikikomori is found mostly in Japan, where individuals isolate themselves in their rooms for months or even years due to overwhelming social pressures related to academic performance and social expectations. It reflects Japan's intense cultural emphasis on social success.

Dhat syndrome is prevalent in South Asia, where men believe that losing semen through nocturnal emissions or masturbation causes physical and psychological weakness, including fatigue, anxiety, and sexual dysfunction.

These syndromes challenge universal definitions of mental illness and highlight the difficulty of applying Western diagnostic categories globally. They demonstrate that culture is not merely a context for mental illness — it actively shapes its expression.`,
    keyPoints:[
      'Culture-bound syndromes are culturally specific forms of psychological distress',
      'Grisi siknis — Central America — anxiety, anger, running episodes',
      'Hikikomori — Japan — extreme social withdrawal, months-long isolation',
      'Dhat syndrome — South Asia — belief semen loss causes weakness',
      'These syndromes challenge universal diagnostic systems like DSM'
    ],
    types:['Grisi siknis (Central America)','Hikikomori (Japan)','Dhat syndrome (South Asia)','Windigo (Native North America)','Susto (Latin America)','Koro (Southeast Asia)'],
    symptoms:['Culturally specific fears and behaviours','Symptoms explained in cultural or spiritual terms','Often misdiagnosed when using Western criteria'],
    psychologists:['Roberto Lewis-Fernández — Research on culture-bound syndromes','Sing Lee — Research on hikikomori and cultural psychiatry'],
    examples:['A Japanese student withdrawing for 2 years after exam failure (hikikomori)','A South Asian man presenting with fatigue, anxiety, and concern about semen loss (Dhat)'],
    treatment:'Treatment requires cultural competence — integrating traditional cultural healers, understanding cultural explanations, and adapting Western therapeutic models to fit cultural beliefs.',
    summary:'Culture-bound syndromes are unique expressions of psychological distress shaped by specific cultural beliefs and social pressures. They demonstrate that mental illness cannot be understood without understanding culture, and that global diagnostic systems must be applied with cultural sensitivity.',
    mnemonic:'GHD — Grisi siknis · Hikikomori · Dhat syndrome (three key examples)'
  },
  {
    id:'stigma',
    name:'Stigma in Mental Health',
    category:'Foundations',
    icon:'🚫',
    preview:'How stigma creates barriers that prevent people from seeking mental health treatment.',
    definition:'Stigma refers to the negative attitudes, stereotypes, and discrimination directed toward individuals with mental illness, which creates serious barriers to treatment, social inclusion, and personal well-being.',
    explanation:`Stigma creates barriers that prevent people from seeking help, maintaining relationships, and accessing opportunities in education and employment. Research shows that many people would rather admit to a minor criminal offence than reveal that they have been hospitalised for a mental health disorder.

Families sometimes hide mental health issues due to fear of social judgment, shame, or discrimination. This contributes to isolation, delayed treatment, and worsened outcomes for the affected person.

Using respectful language is an important tool for reducing stigma. For example, saying "a person living with depression" instead of "a depressed person" shifts the language from defining a person by their illness to recognising their full humanity. Similarly, avoiding offensive terms such as "crazy," "lunatic," or "psycho" helps create a more supportive environment.

Stigma operates at multiple levels: public stigma involves societal stereotypes and discrimination; self-stigma involves the internalisation of those negative beliefs by the person with the disorder, leading to shame, reduced self-esteem, and reluctance to seek help.`,
    keyPoints:[
      'Stigma = negative attitudes, stereotypes, and discrimination toward mental illness',
      'Public stigma — societal discrimination and stereotypes',
      'Self-stigma — internalisation of shame by the affected person',
      'Person-first language reduces stigma (e.g., "person with schizophrenia")',
      'Stigma is a major barrier to seeking professional help'
    ],
    types:['Public stigma','Self-stigma (internalised stigma)','Structural stigma (institutional barriers)','Courtesy stigma (affecting families)'],
    symptoms:['Avoidance of help-seeking','Social withdrawal and isolation','Shame and reduced self-esteem','Delayed or inadequate treatment'],
    psychologists:['Erving Goffman — Coined the sociological concept of stigma','Patrick Corrigan — Research on mental health stigma reduction'],
    examples:['People preferring to admit to a crime rather than reveal psychiatric hospitalisation','A family hiding a relative\'s schizophrenia diagnosis from neighbours to avoid shame'],
    treatment:'Anti-stigma campaigns, mental health education, personal contact with individuals with mental illness, and media portrayal reforms are evidence-based approaches to reducing stigma.',
    summary:'Stigma is a powerful barrier to mental health care and social inclusion. It operates at public, personal, and institutional levels. Using person-first language, increasing public education, and encouraging open conversations about mental health are essential steps in reducing stigma.',
    mnemonic:'STAMP out Stigma: Stereotypes · Treatment barriers · Attitudes · Media · Person-first language'
  },
  {
    id:'gad',
    name:'Generalised Anxiety Disorder (GAD)',
    category:'Anxiety Disorders',
    icon:'😰',
    preview:'Persistent "free-floating" anxiety that follows the person everywhere, without a clear cause.',
    definition:'Generalised Anxiety Disorder (GAD) is characterised by persistent, excessive, and uncontrollable worry about multiple life areas, accompanied by physical symptoms, that is present most days for at least six months and causes significant distress or impairment.',
    explanation:`GAD is often described as "free-floating" anxiety — the anxiety seems to follow the person everywhere and they often cannot identify a specific cause for their worry. Unlike phobias or panic disorder where fear is triggered by specific cues, GAD involves pervasive, generalised worry about everyday life events.

A person with GAD might constantly worry that a family member is unsafe even when there is no apparent danger, or may feel unable to stop worrying about finances, work, health, or relationships. The worry feels uncontrollable and disproportionate to the actual situation.

Physical symptoms are prominent in GAD and include chronic headaches, muscular tension, digestive problems, and constant physical fatigue. People with GAD often appear restless or edgy and may display strained facial expressions or fidgeting.

GAD is highly comorbid with depression, social anxiety, and substance use disorders. Some individuals fear that their anxiety will make them "go crazy" or cause a serious physical illness, which perpetuates the anxiety cycle.`,
    keyPoints:[
      'Persistent "free-floating" anxiety — no specific trigger identified',
      'Worry must be present most days for at least 6 months (DSM-5)',
      'Physical symptoms: headaches, muscle tension, fatigue, indigestion',
      'Difficulty concentrating and making decisions',
      'Highly comorbid with depression and other anxiety disorders'
    ],
    types:['Worry-predominant GAD','Somatic symptom-predominant GAD'],
    symptoms:['Constant, uncontrollable worry','Difficulty identifying what they fear','Physical: headaches, muscle tension, indigestion, fatigue','Difficulty concentrating or making decisions','Restlessness and irritability','Fear that anxiety will cause physical or mental harm'],
    psychologists:['Monroe & Reid (2009) — Research on anxiety and everyday stressors','David Barlow — Influential model of GAD'],
    examples:['A person worrying constantly about their family\'s safety even when nothing is wrong','A student unable to stop worrying about exam results for months, unable to sleep or concentrate'],
    treatment:'CBT (particularly relaxation training and cognitive restructuring), mindfulness-based therapy, and SSRIs are the most evidence-based treatments for GAD.',
    summary:'GAD involves chronic, pervasive worry without a specific object, accompanied by physical symptoms. Unlike normal anxiety which is temporary and manageable, GAD persists for at least six months and significantly impairs daily functioning. CBT and medication are the primary treatments.',
    mnemonic:'GAD = Generalised Anxiety that persists for ≥6 Days per week for ≥6 months (excessive worry)'
  },
  {
    id:'panic',
    name:'Panic Disorder',
    category:'Anxiety Disorders',
    icon:'💥',
    preview:'Recurrent, unexpected panic attacks with intense fear and physical symptoms lasting 15–30 minutes.',
    definition:'Panic Disorder involves repeated, unexpected panic attacks — sudden episodes of intense fear or discomfort reaching a peak within minutes — followed by persistent concern about future attacks or significant changes in behaviour to avoid perceived triggers.',
    explanation:`A panic attack is a discrete episode of intense fear characterised by rapid onset of physical and psychological symptoms. They can occur unexpectedly without any clear trigger, or may be associated with specific situations such as public speaking, driving, or crowded places.

During a panic attack, symptoms include cold sweats, dizziness, rapid heartbeat (palpitations), difficulty breathing, chest pain, and an overwhelming sense of inescapable doom — the feeling of "I might die right now." Attacks typically last 15–30 minutes but can occasionally persist for up to an hour.

The unpredictability of panic attacks creates anticipatory anxiety — the person becomes anxious about when the next attack will occur. This leads to avoidance behaviours: the person may begin avoiding malls, public meetings, driving, or other situations where they fear losing control or being unable to escape.

This avoidance can progressively restrict the person's life and may develop into agoraphobia — the fear of situations from which escape might be difficult.`,
    keyPoints:[
      'Panic attacks — sudden, intense fear reaching a peak within minutes',
      'Attacks occur unpredictably or in specific situations',
      'Duration: typically 15–30 minutes',
      'Anticipatory anxiety — fear of the next attack',
      'May lead to avoidance behaviours and agoraphobia'
    ],
    types:['Unexpected (uncued) panic attacks','Situationally-predisposed panic attacks','Nocturnal panic attacks'],
    symptoms:['Cold sweats and dizziness','Rapid heartbeat (palpitations)','Difficulty breathing','Chest pain or discomfort','Feeling of inescapable doom ("I might die")','Depersonalisation or derealisation'],
    psychologists:['Taylor (2010) — Research on panic disorder triggers','David Clark — Cognitive model of panic disorder'],
    examples:['Person having a panic attack while driving and avoiding all long journeys thereafter','A student experiencing panic attacks before presentations, eventually refusing to attend class'],
    treatment:'CBT (specifically interoceptive exposure) is highly effective. Breathing retraining, cognitive restructuring, and SSRIs/SNRIs are also standard treatments.',
    summary:'Panic Disorder involves recurrent unexpected panic attacks followed by persistent worry about future attacks. The unpredictability of attacks drives avoidance behaviours that progressively restrict the person\'s daily life. CBT and medications are highly effective treatments.',
    mnemonic:'PANIC = Palpitations · Apprehension · Numbness/sweating · Intense fear · Chest pain'
  },
  {
    id:'phobias',
    name:'Phobic Disorders',
    category:'Anxiety Disorders',
    icon:'😱',
    preview:'Irrational, excessive fear of specific objects or situations that causes significant distress and avoidance.',
    definition:'A phobia is a persistent, excessive, and irrational fear of a specific object, activity, or situation that causes significant distress and leads the person to actively avoid the feared stimulus, interfering with normal functioning.',
    explanation:`Phobic disorders become clinical when the fear causes significant distress or impairs daily functioning. Simple fears that do not impact daily life are not considered phobias. Phobias typically begin in childhood; mild ones often fade, but severe phobias can persist into adulthood.

Specific Phobia involves excessive, irrational fear of a particular object or situation — such as dogs, snakes, heights (acrophobia), closed spaces (claustrophobia), or blood. The person recognises the fear is irrational but is unable to control it.

Social Phobia (Social Anxiety Disorder) involves extreme shyness and fear of being observed, scrutinised, or negatively evaluated by others. It includes fear of public speaking, eating in public, writing in front of others, or using public restrooms. People may self-medicate with alcohol to reduce anxiety.

Agoraphobia involves intense anxiety in situations where escape might be difficult — such as crowded places, public transport, markets, or open spaces. It can lead to the person becoming virtually housebound.

Unusual phobias include Coulrophobia (clowns), Gamophobia (marriage), Mysophobia (germs), and Topophobia (performing on stage).`,
    keyPoints:[
      'Three major types: Specific Phobia, Social Phobia, Agoraphobia',
      'Fear must be excessive, persistent, and cause significant impairment',
      'Person recognises the fear is irrational but cannot control it',
      'Avoidance behaviours reinforce and maintain the phobia over time',
      'Exposure therapy is the most effective treatment'
    ],
    types:['Specific Phobia — objects or situations','Social Phobia — fear of negative evaluation','Agoraphobia — fear of crowded/inescapable situations'],
    symptoms:['Immediate anxiety response to feared stimulus','Avoidance of feared object or situation','Recognition that fear is excessive','Significant impairment in daily functioning'],
    psychologists:['Watson & Rayner (1920) — Little Albert experiment (classical conditioning of fear)','Joseph Wolpe — Developed systematic desensitisation for phobias'],
    examples:['A person who cannot ride public transport because of agoraphobia','Social phobic student avoiding presentations despite academic consequences'],
    treatment:'Exposure therapy (systematic desensitisation or flooding) is the gold standard. Cognitive restructuring and virtual reality exposure are increasingly used. Beta-blockers may help for performance anxiety.',
    summary:'Phobic disorders involve excessive, irrational fear leading to avoidance that significantly impairs functioning. The three main types are Specific Phobia, Social Phobia, and Agoraphobia. Exposure-based therapies are highly effective and produce lasting results.',
    mnemonic:'SSA Phobias = Specific · Social · Agoraphobia'
  },
  {
    id:'ocd',
    name:'Obsessive-Compulsive Disorder (OCD)',
    category:'Anxiety Disorders',
    icon:'🔄',
    preview:'Intrusive obsessions driving repetitive compulsions that temporarily relieve anxiety in a self-reinforcing cycle.',
    definition:'OCD is a mental health condition characterised by recurring, unwanted obsessions (intrusive thoughts) that generate anxiety, and compulsions (repetitive behaviours) performed to neutralise that anxiety, causing significant distress and interfering with daily functioning.',
    explanation:`Obsessions are intrusive, unwanted, repetitive thoughts, images, or urges that cause significant anxiety. Common obsessions include contamination fears ("If I touch this, I will get sick"), harm fears ("Did I leave the stove on? What if the house burns?"), superstitious beliefs, and perfectionist needs for order and symmetry.

Compulsions are repetitive behaviours or mental acts the person feels driven to perform in response to an obsession, following rigid rules. The compulsion temporarily reduces anxiety, but this relief reinforces the cycle — the anxiety returns, driving another compulsion.

An analogy: imagine a song stuck in your head — annoying but temporary. Now imagine the same thought returning hundreds of times a day, and feeling compelled to snap your fingers each time to stop it. This reflects the intrusive-relief cycle in OCD.

Types of compulsive behaviour include: Hoarders (collecting items excessively), Repeaters (performing actions a set number of times, e.g., checking the lock 15 times), Orderers (arranging objects in a perfectly specific way), and Checkers (repeatedly checking appliances, doors, switches). OCD rituals can consume hours each day.`,
    keyPoints:[
      'Obsessions — intrusive, unwanted thoughts causing anxiety',
      'Compulsions — repetitive behaviours to neutralise the anxiety',
      'Relief from compulsions is temporary — reinforcing the cycle',
      'Common obsessions: contamination, harm, order, superstition',
      'Common compulsions: checking, cleaning, ordering, counting'
    ],
    types:['Contamination OCD','Harm OCD','Symmetry/order OCD','Hoarding OCD','Intrusive thought OCD'],
    symptoms:['Time-consuming rituals (>1 hour/day)','Insight into irrationality (usually)','Significant distress and interference','Rituals providing temporary relief','Shame and exhaustion from rituals'],
    psychologists:['Paul Salkovskis — Cognitive model of OCD','Edna Foa — Developed Exposure and Response Prevention (ERP)'],
    examples:['Washing hands 30 times after touching a doorknob to prevent contamination fear','Checking the gas stove every 5 minutes before leaving the house'],
    treatment:'Exposure and Response Prevention (ERP) is the gold standard CBT approach. SSRIs (e.g., fluoxetine) are also effective. Combining ERP with medication yields the best outcomes.',
    summary:'OCD involves a self-reinforcing cycle of obsessions and compulsions. Obsessions generate anxiety; compulsions temporarily relieve it; the relief reinforces the cycle. ERP therapy — confronting feared stimuli without engaging in the compulsion — is the most effective treatment.',
    mnemonic:'OCD Cycle: Obsession → Anxiety → Compulsion → Temporary Relief → Obsession returns'
  },
  {
    id:'ptsd',
    name:'Post-Traumatic Stress Disorder (PTSD)',
    category:'Anxiety Disorders',
    icon:'⚡',
    preview:'Severe anxiety disorder following traumatic events, characterised by flashbacks, avoidance, and hyperarousal.',
    definition:'PTSD is a severe anxiety disorder that develops after direct or witnessed exposure to a traumatic event, characterised by intrusive re-experiencing, persistent avoidance, negative changes in cognition and mood, and heightened arousal lasting more than one month.',
    explanation:`PTSD can develop after experiencing or witnessing events such as physical or sexual assault, war and terrorism, natural disasters, plane crashes, or large-scale violence. It can also develop from extensive exposure to traumatic details — for example, first responders who regularly encounter victims of violence.

Re-experiencing symptoms include flashbacks (vivid reliving of the traumatic event), disturbing nightmares, and intrusive thoughts. These can feel as real and terrifying as the original trauma.

Avoidance behaviours involve deliberately avoiding places, people, activities, or thoughts associated with the trauma. Emotional numbing and social withdrawal are common.

Hyperarousal symptoms include intense fear, exaggerated startle response, irritability, difficulty sleeping, and sudden mood swings. These reflect a persistent state of physiological alertness — the nervous system remains in "threat mode."

Additional effects include depression, difficulty concentrating, poor academic or work performance, and self-medication with drugs or alcohol to manage overwhelming symptoms.`,
    keyPoints:[
      'Develops after experiencing or witnessing a traumatic event',
      'Four symptom clusters: Re-experiencing, Avoidance, Negative cognitions/mood, Hyperarousal',
      'Flashbacks — vivid, intrusive reliving of the traumatic event',
      'Avoidance of reminders of the trauma (places, people, thoughts)',
      'Risk groups: soldiers, first responders, assault survivors, disaster victims'
    ],
    types:['Acute PTSD (1–3 months post-trauma)','Chronic PTSD (>3 months)','Delayed-onset PTSD (>6 months after event)','Complex PTSD (repeated/prolonged trauma)'],
    symptoms:['Flashbacks and nightmares','Emotional numbing and withdrawal','Hypervigilance and startle response','Irritability and mood swings','Sleep disturbance','Depression and concentration problems'],
    psychologists:['Judith Herman — Trauma and Recovery (Complex PTSD)','Bessel van der Kolk — "The Body Keeps the Score"'],
    examples:['A soldier returning from war who cannot stop reliving battle scenes and avoids crowded places','Rahul (case study) — 19-year-old with depression, social withdrawal, and suicidal ideation after academic failure'],
    treatment:'Trauma-Focused CBT, EMDR (Eye Movement Desensitisation and Reprocessing), and SSRIs are evidence-based treatments. Social support and safety are essential foundations.',
    summary:'PTSD is a severe, complex disorder that can follow any traumatic experience. Its four core symptom clusters significantly impair daily functioning. Early intervention with trauma-focused CBT or EMDR dramatically improves outcomes and reduces the risk of chronicity.',
    mnemonic:'PTSD symptoms: RAH = Re-experiencing · Avoidance · Hyperarousal'
  },
  {
    id:'major-depression',
    name:'Major Depressive Disorder',
    category:'Mood Disorders',
    icon:'😢',
    preview:'Intense, persistent sadness and hopelessness that severely impairs daily functioning for at least two weeks.',
    definition:'Major Depressive Disorder (MDD) is a mood disorder characterised by at least one major depressive episode — persistent depressed mood or loss of interest/pleasure for at least two weeks, accompanied by symptoms that significantly impair daily functioning.',
    explanation:`Major depression involves intense and unrealistic sadness along with deep feelings of worthlessness. Common symptoms include decreased energy, loss of interest in everyday activities, poor appetite or changes in eating, feelings of inadequacy, frequent crying, and a pessimistic or hopeless outlook.

Severity varies considerably. Some individuals manage daily tasks despite moderate symptoms, while others experience such severe symptoms that functioning at work, home, or socially becomes nearly impossible. In extreme cases, even getting out of bed is overwhelming, sometimes requiring hospitalisation.

Women are approximately 70% more likely than men to develop major depression. Biological explanations include hormonal fluctuations and brain imaging evidence showing that depression-related brain regions are eight times larger in women. Social explanations include the greater burden of household work, childcare, and multiple role demands experienced by many women. Women are also more likely to ruminate — to dwell on and replay problems repeatedly — which intensifies depressive episodes.

More than 50% of individuals who have one episode of major depression experience another within two years, making relapse prevention an important component of long-term management.`,
    keyPoints:[
      'Persistent depressed mood or loss of pleasure for ≥2 weeks (DSM-5)',
      'Women are 70% more likely than men to develop MDD',
      'Biological causes: genetics, neurotransmitter imbalance, brain structure',
      'Cognitive causes: negative thinking patterns and rumination',
      'Over 50% experience recurrence within 2 years of first episode'
    ],
    types:['Mild MDD','Moderate MDD','Severe MDD (with or without psychotic features)','MDD with seasonal pattern (SAD)','MDD with peripartum onset'],
    symptoms:['Persistent sadness, emptiness, or hopelessness','Loss of interest in previously enjoyed activities','Fatigue and decreased energy','Changes in appetite and weight','Sleep disturbances (insomnia or hypersomnia)','Feelings of worthlessness or excessive guilt','Difficulty concentrating','Recurrent thoughts of death or suicide'],
    psychologists:['Aaron Beck — Cognitive model of depression','Martin Seligman — Learned helplessness theory','Freud — Mourning and melancholia'],
    examples:['Lisa (case study) — depression following loss of both parents and work stress','A person unable to leave their bed for days, neglecting personal hygiene and relationships'],
    treatment:'CBT is highly effective, particularly behavioural activation. Antidepressants (SSRIs) are first-line medications. Combination therapy (CBT + medication) often produces the best outcomes.',
    summary:'Major Depressive Disorder involves persistent, debilitating sadness and loss of interest that impairs all areas of daily life. It is more common in women due to biological and social factors. Cognitive and biological causes interact. CBT and antidepressants are the most effective treatments.',
    mnemonic:'SIGECAPS = Sleep · Interest · Guilt · Energy · Concentration · Appetite · Psychomotor · Suicide (MDD symptom checklist)'
  },
  {
    id:'dysthymia',
    name:'Dysthymic Disorder (Persistent Depressive Disorder)',
    category:'Mood Disorders',
    icon:'☁️',
    preview:'Chronic, mild depression lasting at least two years that colours everyday experience without fully disabling the person.',
    definition:'Dysthymic Disorder, now called Persistent Depressive Disorder (PDD), is a chronic, mild form of depression in which the person experiences low mood for most of the day, more days than not, for at least two years, accompanied by additional symptoms but without the full severity of a major depressive episode.',
    explanation:`Unlike major depression, dysthymia does not fully disable a person. However, it prevents individuals from feeling genuinely good or experiencing consistent joy. People describe feeling chronically "blue," tired, low in self-esteem, and pessimistic — as if life is always slightly grey.

A helpful analogy is Eeyore from Winnie the Pooh — constantly gloomy, low-energy, and pessimistic, but still functioning. People with dysthymia often adapt to the mood as their "normal baseline" and may not realise they are experiencing a disorder.

Symptoms include chronic sadness, low energy, low self-esteem, pessimism, and difficulty feeling joy. Because the symptoms are mild but persistent, many people do not seek treatment — often believing that "this is just how I am."

For a diagnosis, symptoms must be present most of the time for at least two years (Gureje, 2011). It is possible to experience a major depressive episode on top of dysthymia — known as "double depression."`,
    keyPoints:[
      'Chronic mild depression lasting ≥2 years',
      'Does not fully disable, but prevents feeling genuinely good',
      'Often goes unrecognised — person adapts to it as their "baseline"',
      'Symptoms: low mood, low energy, low self-esteem, pessimism',
      '"Double depression" = major depressive episode on top of dysthymia'
    ],
    types:['Persistent Depressive Disorder (early onset, before 21)','Persistent Depressive Disorder (late onset, after 21)','With atypical features','With anxious distress'],
    symptoms:['Chronic low mood','Low energy and fatigue','Low self-esteem','Pessimistic or hopeless outlook','Poor concentration','Difficulty making decisions','Decreased appetite or overeating'],
    psychologists:['Gureje (2011) — Research on dysthymia duration and diagnosis','James Kocsis — Research on chronic depression treatment'],
    examples:['Eeyore from Winnie the Pooh — constant gloom without severe crisis','A person who has felt "not quite right" for years, never experiencing genuine joy but still going to work'],
    treatment:'Psychotherapy (CBT, interpersonal therapy) and antidepressants are both effective. Combined treatment is particularly recommended for chronic depression. Treatment takes longer than for acute depression.',
    summary:'Dysthymia is a chronic, low-grade depression that persists for at least two years. Though not as severe as MDD, it significantly reduces quality of life and is often under-recognised. Early identification and treatment — through CBT and antidepressants — can substantially improve functioning.',
    mnemonic:'Dysthymia = "Dys" (bad) + "thymos" (mood) — bad mood that lasts at least 2 years'
  },
  {
    id:'sad',
    name:'Seasonal Affective Disorder (SAD)',
    category:'Mood Disorders',
    icon:'❄️',
    preview:'Seasonal pattern of depression typically emerging in winter when sunlight exposure decreases.',
    definition:'Seasonal Affective Disorder (SAD) is a form of major depression or bipolar disorder with a seasonal pattern, most commonly characterised by recurring depression during winter months when daylight hours are reduced, and remission in spring/summer.',
    explanation:`SAD is recognised as a distinct specifier of depression that follows a seasonal pattern. Symptoms worsen when sunlight exposure decreases, typically beginning in autumn and lifting in spring. Some individuals experience summer-onset SAD, though this is less common.

Possible causes include genetic susceptibility (over two-thirds of people with SAD have a relative with a mood disorder), disruption of the body's circadian rhythm by reduced sunlight, and overproduction of melatonin. The pineal gland releases melatonin in darkness, causing drowsiness and lethargy. Long winter nights may lead to melatonin overproduction in vulnerable individuals.

Reduced sunlight also affects serotonin production — a neurotransmitter closely associated with mood regulation. Lower serotonin levels during winter months may contribute directly to depressed mood.

Light therapy (phototherapy) is one of the most effective treatments for SAD. Patients sit daily in front of a sun-box containing powerful fluorescent lights that mimic natural daylight, which helps suppress melatonin, reset circadian rhythms, and improve mood.`,
    keyPoints:[
      'Depression with seasonal pattern — most common in winter',
      'Caused by reduced sunlight → altered melatonin and serotonin production',
      'Disruption of circadian rhythms contributes to symptoms',
      'Light therapy (phototherapy) is a highly effective treatment',
      'Strong genetic component — over 2/3 have a relative with mood disorder'
    ],
    types:['Winter-onset SAD (most common)','Summer-onset SAD (rarer)','Subsyndromal SAD (winter blues)'],
    symptoms:['Low energy and lethargy in winter','Increased sleep and appetite','Depressed mood','Social withdrawal','Difficulty concentrating','Weight gain (carbohydrate cravings)'],
    psychologists:['Norman Rosenthal — First described and named SAD in 1984','Alfred Lewy — Research on melatonin and SAD'],
    examples:['A person who becomes severely depressed every November and recovers by March','Students whose academic performance drops significantly during winter terms'],
    treatment:'Light therapy is first-line. SSRIs (particularly bupropion) and CBT are also effective. Increasing outdoor exposure and exercise during winter months helps reduce symptoms.',
    summary:'SAD is depression with a seasonal pattern, most commonly triggered by reduced winter sunlight. It involves disrupted melatonin and serotonin production affecting circadian rhythms. Light therapy is uniquely effective and should be combined with CBT and/or antidepressants for optimal outcomes.',
    mnemonic:'SAD = Seasonal Affective Disorder — "Sun Away, Depressed"'
  },
  {
    id:'bipolar',
    name:'Bipolar Disorder',
    category:'Mood Disorders',
    icon:'⚡',
    preview:'Extreme mood swings alternating between mania (highs) and severe depression (lows).',
    definition:'Bipolar Disorder is a mood disorder characterised by episodes of mania (or hypomania) — periods of elevated, expansive, or irritable mood with increased energy — alternating with episodes of major depression, causing significant impairment in functioning.',
    explanation:`Bipolar disorder is characterised by extreme mood swings between mania and severe depression. During a manic phase, individuals experience intense euphoria and excitement, increased social activity, excessive talkativeness, little or no sleep, and reckless behaviours such as overspending, aggression, or hypersexual behaviour. These behaviours often damage relationships, finances, and self-esteem.

Following the manic phase, individuals experience a crash into deep depression, characterised by hopelessness, despair, low energy, and difficulty functioning. This rapid shift is what makes bipolar disorder so distinctly different from major depression alone.

Bipolar disorder is three times less common than major depression and occurs equally in men and women (unlike major depression which is more common in women). It typically appears before age 30 and is more strongly heritable than major depression — first-degree relatives of people with bipolar disorder have a significantly elevated risk.

Being married reduces the risk of major depression, but offers no protective effect against bipolar disorder. Bipolar episodes are typically briefer and more frequent than major depressive episodes.`,
    keyPoints:[
      'Two poles: Mania (elevated mood, high energy) and Depression (low mood, low energy)',
      'Mania includes euphoria, reduced sleep, excessive talkativeness, and reckless behaviour',
      'Depression phase: hopelessness, despair, low energy, impaired functioning',
      'Onset usually before age 30; more strongly heritable than major depression',
      'Bipolar I includes full manic episodes; Bipolar II involves hypomania'
    ],
    types:['Bipolar I — full manic + depressive episodes','Bipolar II — hypomanic + depressive episodes','Cyclothymic Disorder — milder mood swings','Bipolar NOS — not otherwise specified'],
    symptoms:['Manic: euphoria, decreased need for sleep, grandiosity, talkativeness, recklessness','Depressive: hopelessness, despair, fatigue, suicidal ideation'],
    psychologists:['Kay Redfield Jamison — Personal account and research on bipolar disorder','Emil Kraepelin — First described "manic-depressive insanity"'],
    examples:['A person who spends all their savings during a manic episode, then cannot get out of bed for weeks','A student who stays up 4 nights writing a "brilliant novel" (mania) then crashes into severe depression'],
    treatment:'Mood stabilisers (lithium, valproate) are the foundation. Atypical antipsychotics and CBT are added for depression and relapse prevention. Psychoeducation is essential for managing triggers.',
    summary:'Bipolar disorder involves dramatic swings between mania and depression. Manic episodes produce elevated mood, reduced need for sleep, and reckless behaviour, followed by severe depressive crashes. Mood stabilisers, psychotherapy, and psychoeducation form the core of effective management.',
    mnemonic:'Bipolar: Two POLES — Mania (ELEVATED) → Depression (CRASHED)'
  },
  {
    id:'suicide',
    name:'Suicide: Causes, Warning Signs & Prevention',
    category:'Mood Disorders',
    icon:'🆘',
    preview:'Understanding suicide risk factors, psychological motives, warning signs, and evidence-based prevention strategies.',
    definition:'Suicide is the act of intentionally causing one\'s own death. Most individuals who attempt suicide are not seeking death but relief from intense psychological pain — a phenomenon described as "psychological tunnel vision."',
    explanation:`Suicide is more common than many people realise — in the United States, approximately 34,000 suicides occur per year, with one suicide every 5 minutes. There is 1 completed suicide for every 25 attempts, and suicide outranks HIV/AIDS deaths by 3:1.

Gender differences are significant: women attempt suicide twice as often as men, but men die by suicide four times more often. Men are more likely to use violent means (firearms), while women more commonly use pills or poison, allowing more opportunity for rescue. Men account for approximately 80% of all completed suicides.

Over 90% of suicide attempts involve a diagnosable mental disorder — most commonly major depression, bipolar disorder, substance abuse, PTSD, eating disorders, or schizophrenia. Low serotonin levels, linked to mood regulation and impulse control, have been found in suicide victims.

Psychological motives include escape from emotional pain, guilt or shame, turning anger inward, punishing others through guilt, or acting impulsively during a crisis. Tunnel vision — the belief that suicide is the only solution — characterises the cognitive state: temporary problems are seen as permanent, and no alternative is visible.

Warning signs include statements like "Life is pointless," social withdrawal, giving away possessions, sudden calmness after a period of depression, and preoccupation with death themes.`,
    keyPoints:[
      'More common than homicide; nearly twice as many suicides as murders',
      'Men die by suicide 4× more often; women attempt 2× more often',
      'Over 90% of attempts involve a diagnosed mental disorder',
      'Psychological tunnel vision: temporary problems seen as permanent',
      'Prevention: crisis hotlines, gun control, counselling, community support'
    ],
    types:['Suicidal ideation (thoughts of death/self-harm)','Suicidal attempts (non-fatal self-harm with intent to die)','Completed suicide','Parasuicide (self-harm without intent to die)'],
    symptoms:['Verbal cues: "I want to die," "Life is pointless"','Withdrawal from friends and family','Giving away valued possessions','Sudden calmness after a period of depression','Preoccupation with death or violence','Increased substance use'],
    psychologists:['Edwin Shneidman — "Psychache" theory of suicidal pain','Karl Menninger — Research on self-destructive behaviour','Emile Durkheim — Sociological theory of suicide (anomic, egoistic, altruistic)'],
    examples:['Rahul (19, case study) — academic failure, withdrawal, insomnia, suicidal ideation — CBT + antidepressants led to recovery','A person suddenly calm and organised after weeks of severe depression (paradoxical calmness = increased risk)'],
    treatment:'Crisis intervention, CBT, antidepressant medication, and strong social support networks are the most effective interventions. Community and environmental strategies (gun control, bridge barriers) are also evidence-based.',
    summary:'Suicide reflects unbearable psychological pain rather than a desire for death. Risk is highest in those with mental disorders, social isolation, and access to lethal means. Warning signs are identifiable and early intervention saves lives. Prevention requires individual, community, and environmental strategies working together.',
    mnemonic:'IS PATH WARM — Ideation · Substance abuse · Purposelessness · Anxiety · Trapped · Hopelessness · Withdrawal · Anger · Recklessness · Mood changes'
  },
  {
    id:'anorexia',
    name:'Anorexia Nervosa',
    category:'Eating Disorders',
    icon:'🍃',
    preview:'Severe restriction of food intake driven by intense fear of weight gain and a profoundly distorted body image.',
    definition:'Anorexia Nervosa is a serious eating disorder characterised by severe restriction of food intake, intense fear of gaining weight, and a profoundly distorted body image — perceiving oneself as overweight despite being dangerously underweight.',
    explanation:`Anorexia nervosa involves a complex interplay of psychological, biological, and social factors. The core features include dramatic weight loss (body weight ≤85% of normal), an extreme fear of gaining weight even when already dangerously underweight, and a distorted body image where patients see themselves as "fat" despite evidence to the contrary.

Physical methods of weight control include extreme calorie restriction, excessive exercise, and use of laxatives or diuretics. In women, a key clinical sign is amenorrhoea — the cessation of menstrual periods due to insufficient body fat.

Anorexia affects approximately 1% of the population, with the highest prevalence among adolescent girls and young women. It has the highest mortality rate of any mental disorder — up to 20% of those with severe anorexia die from complications, including cardiac arrest, organ failure, and suicide.

The disorder is maintained by a complex cycle: restriction → weight loss → temporary sense of control and pride → reinforcement of restriction. Cognitive distortions ("If I eat one biscuit, I will lose all control") and perfectionism play central roles. Cultural pressures — particularly media ideals of thinness — are important contributing factors.`,
    keyPoints:[
      'Body weight ≤85% of normal; intense fear of weight gain',
      'Distorted body image — sees self as overweight despite extreme thinness',
      'Amenorrhoea (loss of menstrual periods) in women',
      'Highest mortality rate of any mental disorder (up to 20%)',
      'Primarily affects adolescent girls and young women (~1% prevalence)'
    ],
    types:['Restricting type (dieting, fasting, excessive exercise)','Binge-eating/purging type (restricts but also binge-purges)'],
    symptoms:['Extreme weight loss','Distorted body image','Amenorrhoea','Excessive exercise','Use of laxatives/diuretics','Denial of hunger or illness','Obsessive food rituals'],
    psychologists:['Hilde Bruch — Foundational psychoanalytic theory of anorexia','Christopher Fairburn — Transdiagnostic CBT model for eating disorders'],
    examples:['A 16-year-old girl who weighs 38kg but insists she is "still too fat" and refuses all meals','A college student who exercises for 4 hours daily despite being hospitalised for cardiac arrhythmia'],
    treatment:'Medical stabilisation is first. Specialist eating disorder CBT, family-based treatment (Maudsley approach), and nutritional rehabilitation are evidence-based. Hospitalisation may be required when weight is dangerously low.',
    summary:'Anorexia nervosa is a severe, potentially fatal eating disorder involving extreme food restriction, weight loss, distorted body image, and intense fear of weight gain. It has the highest mortality of any mental disorder. Treatment requires medical stabilisation followed by specialist psychological and nutritional support.',
    mnemonic:'Anorexia AFRAID = Amenorrhoea · Fear of weight gain · Restriction · Altered body image · Intense perfectionism · Denial of illness'
  },
  {
    id:'bulimia',
    name:'Bulimia Nervosa',
    category:'Eating Disorders',
    icon:'🔁',
    preview:'Cycles of binge eating followed by purging behaviours, driven by intense guilt, shame, and fear of weight gain.',
    definition:'Bulimia Nervosa is an eating disorder characterised by recurrent episodes of binge eating — consuming large amounts of food in a short time with a sense of loss of control — followed by compensatory purging behaviours to prevent weight gain, accompanied by significant distress and self-criticism.',
    explanation:`Unlike anorexia, people with bulimia are usually at or near normal body weight, making the disorder less visually obvious. The core feature is the binge-purge cycle: the person eats an unusually large amount of food in a short time, feels unable to stop, and then uses compensatory behaviours to prevent weight gain.

Compensatory behaviours include self-induced vomiting, misuse of laxatives or diuretics, fasting, and excessive exercise. The person is typically aware that their behaviour is abnormal and experiences intense guilt, shame, and self-criticism after episodes, followed by a depressed mood.

During a binge, the person experiences a sense of loss of control — feeling unable to stop eating even when physically full. Episodes are typically secretive and may be triggered by stress, negative emotions, or strict dieting (which paradoxically increases bingeing).

Bulimia is more prevalent than anorexia, affecting approximately 3% of women and less than 1% of men. It is particularly common among college-age women. Medical complications of purging include dental erosion (from stomach acid), electrolyte imbalances, oesophageal damage, and irregular heartbeat (arrhythmia).`,
    keyPoints:[
      'Binge-purge cycle: large amounts of food → compensatory purging',
      'Usually at normal or near-normal body weight (unlike anorexia)',
      'Person is aware the behaviour is abnormal (unlike some other disorders)',
      'Intense guilt, shame, and self-criticism after binges',
      'Medical risks: dental erosion, electrolyte imbalances, cardiac arrhythmia'
    ],
    types:['Purging type (vomiting, laxatives, diuretics)','Non-purging type (fasting, excessive exercise)'],
    symptoms:['Recurrent binge episodes','Purging: vomiting, laxative use, excessive exercise','Sense of loss of control during binges','Intense guilt and shame after binges','Preoccupation with body weight and shape','Depression and low self-esteem'],
    psychologists:['Gerald Russell — First described bulimia nervosa as a syndrome (1979)','Christopher Fairburn — Developed CBT-Enhanced (CBT-E) for bulimia'],
    examples:['A college student who binges on large quantities of food while alone, then vomits to "undo" it','A person who fasts strictly Monday–Thursday, then binges uncontrollably on weekends'],
    treatment:'CBT-Enhanced (CBT-E) is the gold standard. SSRIs (particularly fluoxetine) reduce bingeing. Nutritional counselling and interpersonal therapy are also effective.',
    summary:'Bulimia involves recurrent binge-purge cycles driven by loss of control, intense guilt, and fear of weight gain. People with bulimia are usually of normal weight, making detection harder. CBT-E and SSRIs are the most effective treatments, with relapse prevention being an important goal.',
    mnemonic:'BULIMIA = Binge · Uncontrollable eating · Loss of control · Intense shame · Medical complications · Identity and body image distortion · After-binge purging'
  },
  {
    id:'binge-eating',
    name:'Binge Eating Disorder (BED)',
    category:'Eating Disorders',
    icon:'🍔',
    preview:'Recurrent episodes of consuming large amounts of food rapidly, without compensatory purging, causing significant distress.',
    definition:'Binge Eating Disorder (BED) is characterised by recurrent episodes of eating unusually large amounts of food in a short time with a sense of loss of control, without subsequent purging or compensatory behaviours, causing significant distress.',
    explanation:`BED is the most common eating disorder. Unlike bulimia, individuals with BED do not purge after binges — they feel extreme distress about the binging but do not attempt to compensate through vomiting, laxatives, or excessive exercise.

Binge episodes are associated with eating much more rapidly than normal, eating until uncomfortably full, eating large amounts when not physically hungry, eating alone due to embarrassment, and feeling disgusted, depressed, or guilty after the episode.

Episodes are often triggered by negative emotional states — stress, boredom, loneliness, or emotional distress. The food temporarily soothes the emotion, but guilt and shame follow immediately, reinforcing the emotional distress and setting up the next binge.

Approximately one-third of people in weight-control programmes report binge eating. BED is associated with significant health consequences including obesity, type 2 diabetes, cardiovascular disease, sleep disorders, and depression. It affects men and women more equally than other eating disorders.`,
    keyPoints:[
      'Most common eating disorder — no purging (unlike bulimia)',
      'Episodes: eating large amounts rapidly, feeling loss of control',
      'Triggered by emotional distress (stress, boredom, loneliness)',
      'Distress but no compensatory behaviours after episodes',
      'Associated with obesity, depression, and multiple medical complications'
    ],
    types:['Mild BED (1–3 episodes/week)','Moderate BED (4–7 episodes/week)','Severe BED (8–13 episodes/week)','Extreme BED (≥14 episodes/week)'],
    symptoms:['Eating unusually large amounts rapidly','Eating past fullness','Eating when not hungry','Eating alone due to shame','Feeling disgusted, depressed, or guilty after bingeing'],
    psychologists:['Michael de Zwaan — Research on BED prevalence and treatment','Carlos Grilo — CBT and pharmacological treatment research for BED'],
    examples:['A person who eats three family-size packets of crisps and several bars of chocolate in 30 minutes after a difficult day at work','A student who eats compulsively during exam stress and stops only when physically sick'],
    treatment:'CBT is the most effective psychological treatment. Lisdexamfetamine (Vyvanse) is the only FDA-approved medication for BED. Interpersonal therapy and mindfulness-based eating awareness training are also effective.',
    summary:'BED involves recurrent, distressing binge eating episodes without compensatory purging. It is the most common eating disorder and significantly increases risk of obesity and depression. CBT and mindfulness-based approaches effectively reduce binge frequency and improve emotional regulation.',
    mnemonic:'BED = Binge Episodes Daily (without purging) — emotional eating without compensation'
  },
  {
    id:'antisocial',
    name:'Antisocial Personality Disorder (ASPD)',
    category:'Personality Disorders',
    icon:'🎭',
    preview:'Persistent pattern of disregarding and violating the rights of others, lack of empathy and remorse.',
    definition:'Antisocial Personality Disorder (ASPD) is characterised by a pervasive pattern of disregard for, and violation of, the rights of others, beginning in childhood or early adolescence and continuing into adulthood, along with a lack of remorse for harmful behaviour.',
    explanation:`ASPD was formerly known as psychopathy or sociopathy, though these terms are now used more specifically. The core features include a callous disregard for others\' rights, exploitation and manipulation of others, impulsivity, irresponsibility, and deceitfulness — persistent lying and cheating without guilt.

Importantly, not all individuals with ASPD are criminals. Many are charming, intelligent, and socially skilled, using these qualities to manipulate others for personal gain. The outward charm and confidence often mask profound difficulties with genuine connection and empathy.

The disorder is frequently linked to childhood histories of abuse, neglect, or inconsistent parenting. Some researchers argue that Western cultural values — extreme individualism, competitiveness, and material success — may inadvertently reinforce certain antisocial traits.

ASPD is diagnosed only in adults (18+), though a history of Conduct Disorder before age 15 is required. It is significantly more common in men than women and in prison populations compared to the general public.`,
    keyPoints:[
      'Persistent disregard for and violation of others\' rights',
      'Lack of remorse or empathy for harmful behaviour',
      'Charm and intelligence often used to manipulate others',
      'Linked to childhood abuse, neglect, and inconsistent parenting',
      'Requires evidence of Conduct Disorder before age 15 for diagnosis'
    ],
    types:['Primary psychopathy (emotionally callous, low anxiety)','Secondary psychopathy (emotionally reactive, high anxiety)','Dissocial personality (ICD-11 equivalent)'],
    symptoms:['Repeated violations of social norms and laws','Deceitfulness and manipulation','Impulsivity and failure to plan ahead','Irritability and aggressiveness','Irresponsibility (work, finances, relationships)','Lack of remorse'],
    psychologists:['Robert Hare — Developed the Psychopathy Checklist (PCL-R)','Hervey Cleckley — "The Mask of Sanity" — classic description of psychopathy'],
    examples:['A charming individual who consistently lies and manipulates colleagues for personal advancement without guilt','A person with ASPD who commits repeated crimes, blames victims, and shows no remorse despite consequences'],
    treatment:'ASPD is notoriously difficult to treat. Cognitive-behavioural approaches targeting thinking errors and schema therapy show some promise. Treatment motivation is usually low. Focus on harm reduction and risk management.',
    summary:'ASPD involves persistent exploitation, deceit, and disregard for others\' rights, with a notable absence of empathy or remorse. Many individuals are charming but manipulative. It is linked to childhood adversity. Treatment is challenging; CBT and schema therapy are the most promising approaches.',
    mnemonic:'ASPD MICE = Manipulation · Irresponsibility · Callousness · Exploitation · (no) remorse'
  },
  {
    id:'borderline',
    name:'Borderline Personality Disorder (BPD)',
    category:'Personality Disorders',
    icon:'🌪️',
    preview:'Unstable self-image, intense relationships, emotional dysregulation, and fear of abandonment.',
    definition:'Borderline Personality Disorder (BPD) is characterised by pervasive instability in self-image, intense and unstable interpersonal relationships, emotional dysregulation, and marked impulsivity, often driven by an intense fear of real or imagined abandonment.',
    explanation:`The core of BPD is an unstable sense of self and intense emotional reactivity. Individuals may experience their relationships as intensely idealised ("My therapist is the only person who understands me") and then rapidly shift to devaluing them ("They don't care about me at all") — a pattern called "splitting" or black-and-white thinking.

Emotional instability means that people with BPD can experience rapid and intense mood shifts — feeling joyful one moment and devastated the next. These shifts are often triggered by interpersonal events, particularly anything perceived as rejection or abandonment.

Impulsive behaviours — including self-harm, suicidal threats or attempts, reckless driving, substance use, or binge eating — are often attempts to regulate overwhelming emotional pain. Self-harm is frequently used as a way to feel "something real" or to temporarily reduce emotional numbness.

BPD is associated with severe strain on relationships and high demands for attention and support. The intense fear of abandonment can paradoxically drive away the people the person depends on. BPD is diagnosed more commonly in women but affects men in similar proportions.`,
    keyPoints:[
      'Unstable self-image — chronic feelings of emptiness and identity confusion',
      'Intense, unstable relationships — rapid idealization and devaluation ("splitting")',
      'Emotional dysregulation — intense, rapidly shifting moods',
      'Fear of abandonment — frantic efforts to avoid real or imagined rejection',
      'DBT (Dialectical Behaviour Therapy) is the gold standard treatment'
    ],
    types:['BPD with emotional dysregulation predominance','BPD with identity disturbance predominance','BPD with impulsive behaviour predominance','BPD with interpersonal disturbance predominance'],
    symptoms:['Fear of abandonment','Unstable and intense relationships','Unstable self-image or sense of self','Impulsivity in ≥2 potentially self-damaging areas','Suicidal behaviour or self-harm','Severe mood swings','Chronic feelings of emptiness','Anger dysregulation','Paranoid ideation or dissociation'],
    psychologists:['Marsha Linehan — Developed Dialectical Behaviour Therapy (DBT)','John Gunderson — Foundational research on BPD diagnosis and treatment'],
    examples:['A person who texts their therapist 50 times in a day when feeling abandoned, then threatens self-harm if not answered','A student who views a new friend as "perfect" for two weeks, then considers them "pure evil" after one disagreement'],
    treatment:'DBT is the most evidence-based treatment. It teaches distress tolerance, emotion regulation, interpersonal effectiveness, and mindfulness. Mood stabilisers and antidepressants may help specific symptoms.',
    summary:'BPD involves a pervasive pattern of instability in self-image, relationships, and emotions, driven by an intense fear of abandonment. DBT, developed by Marsha Linehan — herself living with BPD — is the gold standard treatment, significantly reducing self-harm, hospitalisations, and suicidal behaviour.',
    mnemonic:'BPD FINDS = Fear of abandonment · Identity instability · Need for relationships · Dysregulation · Splitting · self-harm'
  },
  {
    id:'schizophrenia',
    name:'Schizophrenia',
    category:'Psychotic Disorders',
    icon:'🌀',
    preview:'Severe psychotic disorder with hallucinations, delusions, disorganised thinking, and social withdrawal.',
    definition:'Schizophrenia is a severe, chronic psychotic disorder characterised by significant disturbances in thought, perception, emotion, and behaviour, including hallucinations, delusions, disorganised speech, and impaired social functioning.',
    explanation:`Schizophrenia is a group of psychotic disorders characterised by severe disorganisation of thoughts, perceptions, and emotions. It is often popularly associated with the idea of "going crazy," though this is an oversimplification that contributes to stigma.

Positive symptoms (psychotic symptoms) include hallucinations — most commonly hearing voices (auditory hallucinations) commenting on behaviour or giving commands — and delusions, which are false, fixed beliefs held despite contrary evidence (e.g., believing one is being persecuted, or has special powers).

Negative symptoms involve diminishment of normal functions: flat affect (reduced emotional expression), alogia (poverty of speech), avolition (reduced motivation and initiative), anhedonia (inability to experience pleasure), and social withdrawal.

Disorganised symptoms include confused or incoherent speech, bizarre behaviour, and impaired self-care. These make daily functioning extremely challenging.

Schizophrenia typically begins in late adolescence or early adulthood, with men showing earlier onset (late teens–early 20s) than women (mid-to-late 20s). Biological factors including genetic vulnerability, dopamine dysregulation, and structural brain differences are strongly implicated. Psychosocial stressors trigger onset in genetically vulnerable individuals (diathesis-stress model).`,
    keyPoints:[
      'Positive symptoms: hallucinations (especially auditory) and delusions',
      'Negative symptoms: flat affect, alogia, avolition, anhedonia, social withdrawal',
      'Disorganised symptoms: incoherent speech, bizarre behaviour',
      'Onset in late adolescence/early adulthood; men earlier than women',
      'Dopamine dysregulation is the primary biological mechanism'
    ],
    types:['Paranoid schizophrenia (delusions of persecution)','Disorganised schizophrenia (incoherent speech/behaviour)','Catatonic schizophrenia (motor disturbances)','Residual schizophrenia (attenuated symptoms)'],
    symptoms:['Auditory hallucinations (hearing voices)','Persecutory or grandiose delusions','Disorganised and incoherent speech','Catatonia or bizarre behaviour','Flat affect and emotional blunting','Social withdrawal and impaired self-care'],
    psychologists:['Eugen Bleuler — Coined the term "schizophrenia" (1911)','E. Fuller Torrey — Research on neurobiology of schizophrenia','Aaron Beck — CBT adapted for schizophrenia'],
    examples:['A person who hears voices telling them the government is monitoring them and begins to systematically avoid all public places','A student who stops attending university, becomes mute, and no longer recognises family members during a first psychotic episode'],
    treatment:'Antipsychotic medications (first and second generation) are the primary treatment. CBT for psychosis (CBTp) improves insight and coping. Social skills training and supported employment improve functional outcomes. Family psychoeducation reduces relapse.',
    summary:'Schizophrenia is a severe psychotic disorder involving disruptions in thought, perception, and behaviour. Positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, withdrawal) both require treatment. Antipsychotics plus psychosocial rehabilitation offer the best outcomes.',
    mnemonic:'Schizophrenia: HAPPY and FLAT = Hallucinations · Abnormal thoughts/delusions · Paranoia · Poverty of speech · Yelps (disorganised) AND Flat affect · Lack of motivation · Alogia · Thought disorder'
  }
];

// ─── FLASHCARD DECKS ──────────────────────────────────────────────────────────
const FLASHCARD_DECKS = (typeof window !== 'undefined' && window.FLASHCARD_DECKS) ? window.FLASHCARD_DECKS : {
  all: null,
  'psych-disorders': [
    { term:'What is a psychological disorder?', def:'A clinically significant pattern of thoughts, feelings, or behaviours that causes distress, dysfunction, deviance, or danger. It is NOT simply "abnormal" behaviour.', ex:'Lisa: grief-induced depression that caused work absenteeism and inability to function.', keyPoints:['Must cause significant distress or impairment','Defined by the Four Ds','Diagnosed using DSM-5'] },
    { term:'The Four Ds of psychological disorder', def:'Distress (emotional suffering), Dysfunction (impaired daily life), Deviance (outside social norms), Danger (risk to self/others). Multiple criteria needed for diagnosis.', ex:'Distress: panic attacks. Dysfunction: unable to work. Deviance: bizarre beliefs. Danger: suicidal ideation.', keyPoints:['Distress — subjective suffering','Dysfunction — impaired role performance','Deviance — context-dependent','Danger — least common criterion'] },
    { term:'What is the DSM-5?', def:'The Diagnostic and Statistical Manual of Mental Disorders (5th edition), published by the American Psychiatric Association. It is the primary classification system for diagnosing 200+ psychological disorders.', ex:'A clinician uses DSM-5 criteria to diagnose OCD when intrusive thoughts + compulsions exceed 1 hour/day.', keyPoints:['Published by APA (2013)','Symptom-focused, not cause-focused','Person-first language to reduce stigma','Updated as science and society evolve'] },
  ],
  'gad': [
    { term:'Define Generalised Anxiety Disorder', def:'Persistent, excessive, uncontrollable worry about multiple life areas for ≥6 months, causing significant distress or impairment, with associated physical symptoms.', ex:'Constantly worrying that family members are in danger, even when everything is fine, accompanied by headaches and muscle tension.', keyPoints:['≥6 months duration','"Free-floating" — no specific trigger','Physical symptoms prominent','Highly comorbid with depression'] },
    { term:'Physical symptoms of GAD', def:'Headaches, muscular tension, indigestion, fatigue, restlessness, fidgeting, and strained facial expressions. These are caused by the physiological arousal of chronic anxiety.', ex:'A student with GAD develops daily migraines, persistent muscle stiffness, and digestive problems due to chronic worry.', keyPoints:['Autonomic nervous system overactivation','Chronic stress hormones (cortisol) cause physical damage','Symptoms distinguish GAD from normal worry'] },
  ],
  'ocd': [
    { term:'OCD: Obsessions vs Compulsions', def:'Obsessions are intrusive, unwanted, repetitive thoughts that cause anxiety. Compulsions are repetitive behaviours performed to temporarily reduce that anxiety. The relief reinforces the cycle.', ex:'Obsession: "I might be contaminated." Compulsion: Washing hands 30 times. Relief: Temporary. Cycle repeats.', keyPoints:['Obsessions = intrusive thoughts (cognitive)','Compulsions = repetitive behaviours (behavioural)','Relief is temporary — reinforcing the cycle','Insight is usually intact (knows it is irrational)'] },
    { term:'Types of OCD compulsions', def:'Hoarders (excessive collecting), Repeaters (actions a set number of times), Orderers (arranging objects perfectly), Checkers (repeatedly checking appliances/locks).', ex:'A Checker rechecks the gas stove 15 times before leaving the house every morning, making them chronically late.', keyPoints:['Rituals can consume hours daily','Cause significant shame and exhaustion','Reinforced by temporary anxiety reduction','ERP therapy directly targets compulsions'] },
  ],
  'major-depression': [
    { term:'DSM-5 criteria for Major Depression', def:'≥5 symptoms for ≥2 weeks, including depressed mood OR loss of interest, plus symptoms from SIGECAPS (Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide thoughts).', ex:'A person sleeping 16 hours/day, unable to experience pleasure, feeling worthless, and unable to concentrate for 3 weeks.', keyPoints:['Must include depressed mood OR loss of interest','≥2 weeks duration required','Must cause clinically significant impairment','Most common mood disorder worldwide'] },
    { term:'Gender differences in depression', def:'Women are 70% more likely than men to develop major depression, due to hormonal differences, larger depression-related brain regions, greater role burden (work + childcare), and tendency to ruminate.', ex:'A working mother juggling career, childcare, and household management develops depression partly due to chronic role overload and rumination.', keyPoints:['Women 70% more likely than men','Hormonal, biological, and social factors','Rumination amplifies depressive episodes','Men more likely to externalise (substance use)'] },
  ],
  'bipolar': [
    { term:'Bipolar Disorder: Mania vs Depression', def:'Mania: euphoria, reduced sleep, talkativeness, grandiosity, reckless behaviour. Depression: hopelessness, despair, low energy, suicidal ideation. Episodes alternate, causing significant impairment.', ex:'A person spends their life savings during a 4-day manic episode with no sleep, then crashes into 3 weeks of severe depression.', keyPoints:['Bipolar I: full mania + depression','Bipolar II: hypomania + depression','Lithium is the gold standard mood stabiliser','Onset typically before age 30'] },
  ],
  'anorexia': [
    { term:'Anorexia Nervosa: Diagnostic Features', def:'Body weight ≤85% of normal, intense fear of gaining weight, distorted body image (sees self as fat despite extreme thinness), amenorrhoea in women.', ex:'A 17-year-old girl weighing 37kg who insists she needs to lose more weight and refuses all food, believing she is "fat."', keyPoints:['Highest mortality of any mental disorder (up to 20%)','Patient denies severity of illness','Family-based treatment (Maudsley) effective in adolescents','Medical stabilisation before psychological treatment'] },
  ],
  'schizophrenia': [
    { term:'Positive and Negative Symptoms of Schizophrenia', def:'Positive symptoms (excesses): hallucinations, delusions, disorganised speech/behaviour. Negative symptoms (deficits): flat affect, alogia, avolition, anhedonia, social withdrawal.', ex:'Positive: hearing commanding voices. Negative: unable to initiate conversations, emotionally flat, unable to feel pleasure.', keyPoints:['Positive = added phenomena (not "good")','Negative = reduced normal functions (not "bad emotions")','Antipsychotics target positive symptoms most effectively','Negative symptoms respond less to medication'] },
    { term:'Hallucinations in Schizophrenia', def:'False sensory perceptions without external stimulus. Most common in schizophrenia: auditory (hearing voices) that may comment on behaviour, converse with each other, or give commands.', ex:'A person with schizophrenia hears a voice constantly criticising their every action and commanding them not to leave the house.', keyPoints:['Auditory hallucinations most common','Voices may seem more real than actual reality','Can cause extreme distress and fear','CBT for psychosis helps challenge and manage hallucinations'] },
  ],
};

// ─── QUIZ BANK ────────────────────────────────────────────────────────────────
const QUIZ_BANK = (typeof window !== 'undefined' && window.QUIZ_BANK) ? window.QUIZ_BANK : {
  fillBlanks:[
    { id:'fb-1',  category:'Anxiety Disorders',    topic:'phobias',          q:'Fear of social situations is called _____ phobia.',          a:'social',                       answers:['social','social phobia','social anxiety','social anxiety disorder'], hint:'Social anxiety' },
    { id:'fb-2',  category:'Mood Disorders',       topic:'bipolar',          q:'Extreme mood swings occur in _____ disorder.',               a:'bipolar',                      answers:['bipolar','bipolar disorder','bipolar affective disorder','manic depression','manic depressive'], hint:'Mania + depression' },
    { id:'fb-3',  category:'Foundations',          topic:'psych-disorders',  q:'CBT stands for Cognitive _____ Therapy.',                    a:'Behavioral',                   answers:['behavioral','behavioural','behavior','behaviour'], hint:'Modifying behaviour' },
    { id:'fb-4',  category:'Foundations',          topic:'psych-disorders',  q:'The psychoanalytic approach was developed by _____.',        a:'Sigmund Freud',                answers:['freud','sigmund freud','s freud'], hint:'Austrian neurologist' },
    { id:'fb-5',  category:'Mood Disorders',       topic:'dysthymia',        q:'Chronic mild depression lasting ≥2 years is called _____.',  a:'persistent depressive disorder',answers:['dysthymia','persistent depressive disorder','pdd','dysthymic disorder'], hint:'Persistent depressive disorder' },
    { id:'fb-6',  category:'Foundations',          topic:'dsm',              q:'The DSM is published by the American _____ Association.',    a:'Psychiatric',                  answers:['psychiatric','apa'], hint:'Mental health professional body' },
    { id:'fb-7',  category:'Psychotic Disorders',  topic:'schizophrenia',    q:'Hearing voices not present in reality is called _____.',     a:'hallucination',                answers:['hallucination','hallucinations','auditory hallucination','auditory hallucinations'], hint:'False sensory perception' },
    { id:'fb-8',  category:'Psychotic Disorders',  topic:'schizophrenia',    q:'False beliefs not based in reality are called _____.',       a:'delusions',                    answers:['delusion','delusions','paranoid delusions','delusional belief'], hint:'False fixed beliefs' },
    { id:'fb-9',  category:'Anxiety Disorders',    topic:'ocd',              q:'Repetitive behaviours to reduce anxiety are called _____.',  a:'compulsions',                  answers:['compulsion','compulsions','rituals','compulsive behaviours','compulsive behaviors'], hint:'OCD rituals' },
    { id:'fb-10', category:'Mood Disorders',       topic:'sad',              q:'Seasonal depression is clinically known as _____.',          a:'seasonal affective disorder',  answers:['sad','seasonal affective disorder','seasonal depression','seasonal affective'], hint:'Seasonal Affective Disorder' },
    { id:'fb-11', category:'Foundations',          topic:'psych-disorders',  q:'Projection of feelings onto the therapist is called _____.',a:'transference',                 answers:['transference','transference reaction'], hint:'Psychoanalytic concept' },
    { id:'fb-12', category:'Culture & Stigma',     topic:'stigma',           q:'Negative social attitudes toward mental illness are known as _____.',a:'stigma',               answers:['stigma','social stigma','mental health stigma'], hint:'Barrier to treatment' },
    { id:'fb-13', category:'Culture & Stigma',     topic:'culture-bound',    q:'Semen-loss syndrome in South Asia is called _____ syndrome.',a:'dhat',                         answers:['dhat','dhat syndrome'], hint:'Culture-bound syndrome' },
    { id:'fb-14', category:'Anxiety Disorders',    topic:'ptsd',             q:'PTSD can be triggered by _____ events or witnessing trauma.',a:'traumatic',                    answers:['traumatic','trauma','extreme stress','catastrophic'], hint:'War, assault, disasters' },
    { id:'fb-15', category:'Foundations',          topic:'four-ds',          q:'The Four Ds of abnormality are Distress, Dysfunction, Deviance, and _____.',a:'danger',       answers:['danger','dangerousness','risk of harm'], hint:'Risk to self/others' },
  ],
  mcq:[
    { id:'mcq-1', category:'Anxiety Disorders', topic:'ocd', q:'Which symptom cluster distinguishes OCD from generalised anxiety?',opts:['Persistent worry','Intrusive obsessions and compulsions','Panic attacks','Social avoidance'],correct:1,exp:'OCD is defined by intrusive obsessions (cognitive intrusions) and compulsions (neutralizing rituals). GAD involves diffuse worry without compulsive rituals.'},
    { id:'mcq-2', category:'Eating Disorders', topic:'anorexia', q:'Meta-analytic findings (Arcelus et al., 2011) demonstrate that anorexia nervosa exhibits:',opts:['The lowest suicide risk of all psychiatric disorders','Approximately 5.9× expected mortality rate with ~1 in 5 deaths by suicide','Spontaneous recovery in >90% of untreated adolescents','Equal male and female prevalence across all cohorts'],correct:1,exp:'Arcelus et al. (2011) established an aggregate standardized mortality ratio of approximately 5.9× expected mortality in anorexia nervosa, with roughly 1 in 5 deaths attributable to suicide.'},
    { id:'mcq-3', category:'Personality Disorders', topic:'borderline', q:'Dialectical Behaviour Therapy (DBT) was developed specifically for:',opts:['Schizophrenia','Obsessive-Compulsive Disorder','Borderline Personality Disorder','Specific Phobias'],correct:2,exp:'Marsha Linehan developed DBT specifically to treat BPD and chronic parasuicidality, integrating Zen mindfulness with behavioral change strategies.'},
    { id:'mcq-4', category:'Mood Disorders', topic:'sad', q:'In Seasonal Affective Disorder (SAD), reduced winter daylight hours cause altered regulation of:',opts:['Thyroid hormone and acetylcholine','Melatonin and circadian serotonin pathways','Oxytocin and vasopressin receptors','Insulin and pancreatic glucagon'],correct:1,exp:'Reduced sunlight alters pineal melatonin release and central serotonin synthesis, disrupting circadian rhythmicity and inducing lethargy, hypersomnia, and depressed mood.'},
    { id:'mcq-5', category:'Culture & Stigma', topic:'culture-bound', q:'The cultural syndrome Hikikomori is characterized by:',opts:['Acute trance-like states in Central America','Severe prolonged social withdrawal in Japan','Semen-loss anxiety in South Asia','Ghost possession beliefs in West Africa'],correct:1,exp:'Hikikomori is recognized primarily in Japan (and increasingly elsewhere) as acute social withdrawal lasting six months or longer, linked to severe academic and interpersonal distress.'},
    { id:'mcq-6', category:'Mood Disorders', topic:'suicide', q:'Epidemiological surveys of suicidal behavior show the "gender paradox":',opts:['Men and women show identical ideation and completion rates worldwide','Women attempt suicide more frequently in many regions, while men die by suicide more often due to high-lethality means','Men attempt more often but have lower mortality','Suicide is exclusively documented in high-income industrialized nations'],correct:1,exp:'Across many countries, women attempt suicide more frequently (the gender paradox), whereas men die by suicide 3–4× more often in high-income nations due to more lethal means (in India, the male-to-female ratio is narrower).'},
    { id:'mcq-7', category:'Psychotic Disorders', topic:'schizophrenia', q:'Positive symptoms of schizophrenia include:',opts:['Affective flattening and avolition','Alogia, anhedonia, and asociality','Hallucinations and delusional beliefs','Executive working memory impairment'],correct:2,exp:'Positive symptoms represent aberrant additions to baseline consciousness (hallucinations, delusions, disorganised thought), whereas negative symptoms (the 5 A\'s: affective flattening, alogia, anhedonia, asociality, avolition) reflect functional deficits.'},
    { id:'mcq-8', category:'Foundations', topic:'four-ds', q:'The Four Ds educational heuristic defines abnormality through Distress, Dysfunction, Deviance, and:',opts:['Depression','Disability','Danger','Diagnosis'],correct:2,exp:'Danger (risk of physical harm to self or others) is the fourth D. Notably, the Four Ds are a teaching heuristic, not formal DSM diagnostic criteria.'},
  ],
};

// ─── EXAM DATA ────────────────────────────────────────────────────────────────
const EXAM_DATA = (typeof window !== 'undefined' && window.EXAM_DATA) ? window.EXAM_DATA : {
  subject:'Psychology of Adjustment', time:'1 Hour', total:30,
  q1:{label:'Fill in the Blanks (1 mark each)',marks:15,items:[
    {q:'Fear of social situations is called _____ phobia.',a:'social'},
    {q:'Extreme mood swings occur in _____ disorder.',a:'bipolar'},
    {q:'Hearing voices not present in reality is called _____.',a:'hallucination'},
    {q:'False beliefs not based in reality are called _____.',a:'delusions'},
    {q:'CBT stands for Cognitive _____ Therapy.',a:'Behavioral'},
    {q:'The psychoanalytic approach was developed by _____.',a:'Sigmund Freud'},
    {q:'Chronic mild depression lasting at least 2 years is called _____.',a:'dysthymia'},
    {q:'Repetitive behaviours performed to reduce anxiety are called _____.',a:'compulsions'},
    {q:'The DSM is published by the American _____ Association.',a:'Psychiatric'},
    {q:'Projection of feelings onto the therapist is called _____.',a:'transference'},
    {q:'Seasonal depression is clinically known as _____.',a:'Seasonal Affective Disorder'},
    {q:'A severe eating disorder involving extreme weight loss is _____ nervosa.',a:'anorexia'},
    {q:'Sudden intense episodes of overwhelming fear are called _____ attacks.',a:'panic'},
    {q:'Negative social attitudes toward mental illness are known as _____.',a:'stigma'},
    {q:'The use of rewards to reinforce desired behaviour in therapy is called _____ economy.',a:'token'},
  ]},
  q2:{label:'Long Answer Questions (Attempt ANY ONE)',marks:15,
    A:'Explain the major anxiety disorders with special reference to Generalised Anxiety Disorder (GAD) and Obsessive-Compulsive Disorder (OCD). Discuss their symptoms, diagnostic criteria, causes, and treatment approaches.',
    B:'Discuss suicide as a psychological concern. Explain its causes (biological, psychological, and social), warning signs, and evidence-based prevention strategies with suitable examples.',
    hints:['Define each disorder clearly using DSM-5 criteria','Discuss biological, psychological, and sociocultural causes','Include key psychologists and theoretical models','Explain at least two evidence-based treatment approaches','Support your answer with real-world or clinical examples']
  },
  q3:{label:'Short Notes (Attempt ANY THREE — 5 marks each)',marks:15,topics:[
    {t:'Psychoanalysis and its Techniques',pts:['Founded by Sigmund Freud — emphasis on the unconscious','Free association: patient says whatever comes to mind','Dream analysis: interpreting unconscious desires from dreams','Transference: patient projects feelings onto therapist','Catharsis: release of repressed emotion → therapeutic insight']},
    {t:'Person-Centred Therapy (Carl Rogers)',pts:['Humanistic approach — client knows best','Unconditional positive regard: accepting without judgement','Empathy: understanding client\'s frame of reference','Congruence: therapist is genuine and transparent','Goal: self-actualisation and personal growth']},
    {t:'Eating Disorders',pts:['Anorexia: restriction, distorted body image, ≤85% body weight, high mortality','Bulimia: binge-purge cycle, normal weight, intense guilt','Binge Eating Disorder: bingeing without purging, most common eating disorder','Biopsychosocial causes: genetics, culture, media, low self-esteem','Treatment: CBT-E, family-based therapy, nutritional rehabilitation, SSRIs']},
    {t:'Personality Disorders',pts:['Antisocial PD: disregard for others, no remorse, manipulation, impulsivity','Borderline PD: emotional instability, fear of abandonment, self-harm, splitting','Rigid, maladaptive patterns beginning in adolescence/early adulthood','DBT (Marsha Linehan) is gold standard for BPD','ASPD difficult to treat; schema therapy shows some promise']},
    {t:'Cultural Issues in Mental Health Care',pts:['Stigma and shame are major barriers to help-seeking in India','Culture-bound syndromes: Dhat (South Asia), Koro (Southeast Asia), Grisi siknis (Central America)','Cultural beliefs shape symptom expression and interpretation','Gender differences: women more likely to seek help; men more likely to deny illness','Culturally competent care: integrate cultural beliefs into treatment']},
  ]},
};

// ─── DAILY FACTS ──────────────────────────────────────────────────────────────
const DAILY_FACTS = (typeof window !== 'undefined' && window.DAILY_FACTS && window.DAILY_FACTS.length > 0) ? window.DAILY_FACTS : [
  {title:'The Four Ds',text:'Psychologists use four criteria to define abnormal behaviour: Distress, Dysfunction, Deviance, and Danger. All four together help clinicians avoid labelling unusual but harmless behaviour as a disorder.'},
  {title:'OCD Cycle',text:'In OCD, compulsions provide immediate temporary relief from obsession-induced anxiety. This temporary relief paradoxically reinforces the obsession, perpetuating the cycle.'},
  {title:'Stigma Reduction',text:'Person-first language (e.g., "a person with schizophrenia" instead of "a schizophrenic") reduces stigma by affirming the person\'s identity beyond their clinical diagnosis.'},
  {title:'Melatonin & SAD',text:'Reduced winter sunlight increases melatonin production by the pineal gland, causing excessive drowsiness and lethargy characteristic of Seasonal Affective Disorder.'},
  {title:'DBT Success',text:'Dialectical Behaviour Therapy (DBT), created by Marsha Linehan, combines cognitive-behavioural techniques with mindfulness principles and remains the most effective treatment for Borderline Personality Disorder.'},
];

// ─── CENTRALIZED STATE & PERSISTENCE SERVICE ──────────────────────────────────
const S = {
  currentPage: 'dashboard',
  studyTopicIdx: 0,
  currentTopic: null,
  studyMode: 'deep',
  notesPanelOpen: true,
  fcCards: [],
  fcIdx: 0,
  fcFlipped: false,
  fcSession: { reviewed: 0, known: 0, reviewNeeded: 0 },
  quiz: null,
  quizAnswers: {},
  quizDone: false,
  quizCount: 0,
  showAnswers: false,
  
  // Persistence entities
  progress: {},       // topicId -> { completed: bool, lastViewed: timestamp, confidence: 1-5 }
  flashcardReviews: {},// cardTerm -> { interval: num, ease: num, lastReviewed: timestamp, difficulty: string }
  quizAttempts: [],   // list of { timestamp, score, total, pct, topic, weakTopics }
  lastViewedTopicId: null
};

function lsGet(key, def) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : def;
  } catch (e) {
    return def;
  }
}

function lsSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

function loadStoredState() {
  // Legacy progress migration
  const oldProg = lsGet('psa_progress', {});
  S.progress = lsGet('psychstudy_progress', {});
  
  // Merge old binary progress if present
  Object.keys(oldProg).forEach(id => {
    if (!S.progress[id]) {
      S.progress[id] = { completed: true, lastViewed: Date.now(), confidence: 3 };
    }
  });

  S.quizCount = lsGet('psa_quizcount', 0);
  S.flashcardReviews = lsGet('psychstudy_fc_reviews', {});
  S.quizAttempts = lsGet('psychstudy_quiz_attempts', []);
  S.lastViewedTopicId = lsGet('psychstudy_last_topic', KB[0].id);
  S.criteriaChecked = lsGet('psychstudy_criteria_checked', {});
}

function saveState() {
  lsSet('psychstudy_progress', S.progress);
  lsSet('psychstudy_fc_reviews', S.flashcardReviews);
  lsSet('psychstudy_quiz_attempts', S.quizAttempts);
  lsSet('psychstudy_last_topic', S.lastViewedTopicId);
  lsSet('psa_quizcount', S.quizCount);
  lsSet('psychstudy_criteria_checked', S.criteriaChecked || {});
}

// ─── ROUTING & NAVIGATION ─────────────────────────────────────────────────────
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('pg-' + page);
  if (el) el.classList.add('active');

  // Update navbar & mobile nav active states
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  document.querySelectorAll('.bottom-nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });

  S.currentPage = page;
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Page specific hooks
  if (page === 'dashboard') renderDashboard();
  if (page === 'study') {
    if (!S.currentTopic || !document.getElementById('studyContent')?.children?.length) {
      loadStudyTopic(S.studyTopicIdx || 0);
    }
  }
  if (page === 'notes') renderNotesPage();
  if (page === 'quiz') {
    if (!S.quiz) setupQuiz();
  }
  if (page === 'exam') renderExam();
  if (page === 'flashcards' && !S.fcCards.length) loadFlashcards('all');
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── THEME ENGINE ─────────────────────────────────────────────────────────────
function updateThemeIcon(theme) {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('title', 'Switch to light mode');
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('title', 'Switch to dark mode');
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

function toggleTheme() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = dark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  lsSet('psa_theme', newTheme);
  updateThemeIcon(newTheme);
}

function loadTheme() {
  const t = lsGet('psa_theme', 'light');
  document.documentElement.setAttribute('data-theme', t);
  updateThemeIcon(t);
}

// ─── TOAST & LOADING UI ───────────────────────────────────────────────────────
function toast(msg, type = 'info', duration = 3200) {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'toast ' + (type === 'success' ? 'success' : type === 'error' ? 'error' : '');
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(20px)';
    t.style.transition = 'all .3s ease';
    setTimeout(() => t.remove(), 300);
  }, duration);
}

function showLoading(msg = 'Processing…') {
  const l = document.getElementById('loading');
  const m = document.getElementById('loading-msg');
  if (m) m.textContent = msg;
  if (l) l.classList.remove('hidden');
}

function hideLoading() {
  const l = document.getElementById('loading');
  if (l) l.classList.add('hidden');
}

// ─── LEARNING INTELLIGENCE & MASTERY ENGINE ──────────────────────────────────
function calculateTopicMastery(topicId) {
  const prog = S.progress[topicId];
  let score = 0;
  
  // 1. Study completion (30 points)
  if (prog && prog.completed) score += 30;
  else if (prog && prog.lastViewed) score += 10;

  // 2. Flashcard performance (35 points)
  const topicCards = (typeof FLASHCARD_DECKS !== 'undefined' ? FLASHCARD_DECKS[topicId] : null) || [];
  if (topicCards.length > 0) {
    let knownCount = 0;
    topicCards.forEach(c => {
      const rev = S.flashcardReviews[c.term];
      if (rev && (rev.difficulty === 'good' || rev.difficulty === 'easy')) {
        knownCount++;
      }
    });
    score += Math.round((knownCount / topicCards.length) * 35);
  } else if (prog && prog.completed) {
    score += 20;
  }

  // 3. Quiz performance (35 points) - Strictly topic-isolated
  const topicAttempts = S.quizAttempts.filter(a => {
    if (a.byTopic && a.byTopic[topicId] && a.byTopic[topicId].total > 0) return true;
    if (a.topic === topicId) return true;
    return false;
  });

  if (topicAttempts.length > 0) {
    const latest = topicAttempts[topicAttempts.length - 1];
    if (latest.byTopic && latest.byTopic[topicId]) {
      const { correct, total } = latest.byTopic[topicId];
      const pct = total > 0 ? (correct / total) : 0;
      score += Math.round(pct * 35);
    } else {
      score += Math.round(((latest.pct || 0) / 100) * 35);
    }
  } else if (prog && prog.completed) {
    score += 15;
  }

  return Math.min(100, score);
}

function calculateOverallMastery() {
  if (KB.length === 0) return 0;
  const total = KB.reduce((sum, t) => sum + calculateTopicMastery(t.id), 0);
  return Math.round(total / KB.length);
}

function getWeakTopics() {
  return KB.map(t => ({ topic: t, mastery: calculateTopicMastery(t.id) }))
           .filter(item => item.mastery < 60)
           .sort((a, b) => a.mastery - b.mastery);
}

function getRecommendedTopic() {
  // Deterministic recommendation: weakest studied, or first unstudied
  const unstudied = KB.find(t => !S.progress[t.id] || !S.progress[t.id].completed);
  if (unstudied) return unstudied;

  const weak = getWeakTopics();
  if (weak.length > 0) return weak[0].topic;

  return KB[0];
}

// ─── FUNCTIONAL NEUROANATOMY ENGINE ──────────────────────────────────────────
const BRAIN_ANATOMY_DATA = (typeof window !== 'undefined' && window.BRAIN_ANATOMY_DATA) ? window.BRAIN_ANATOMY_DATA : {
  frontal: {
    tag: 'Anterior Cerebral Cortex · Brodmann 9, 10, 11, 46, 47 & BA 4, 6, 44, 45',
    name: 'Frontal Lobe & Prefrontal Network',
    color: '#D99A89',
    role: 'Governs high-order executive functions: goal-directed attention, cognitive flexibility, impulse inhibition, risk assessment, abstract reasoning, and expressive language (Broca\'s area).',
    clinical: 'Hypofrontality and reduced dorsolateral prefrontal cortex (dlPFC) metabolism contribute to negative and cognitive symptoms in Schizophrenia. Hyperactive orbitofrontal-striatal loops drive intrusive obsessions and ritualistic compulsions in OCD. Ventromedial PFC decoupling from limbic structures impairs affect regulation in Major Depressive Disorder and GAD. Reduced prefrontal grey matter volume correlates with psychopathy in Antisocial Personality Disorder (ASPD).',
    neurotransmitters: 'Dopamine (D1, D2), Norepinephrine (α2A), GABA, Glutamate',
    subregions: ['Dorsolateral Prefrontal Cortex (dlPFC)', 'Orbitofrontal Cortex (OFC)', 'Ventromedial Prefrontal Cortex (vmPFC)', 'Anterior Cingulate Cortex (ACC)', 'Primary Motor Cortex (M1)'],
    topicIds: ['gad', 'ocd', 'major-depression', 'antisocial', 'schizophrenia'],
    atlasOverview: `The frontal lobes constitute approximately one-third of the human cerebral cortex. The prefrontal cortex (PFC) coordinates complex goal-directed behaviors through reciprocal connections with limbic structures (amygdala, hippocampus) and basal ganglia loops.

In clinical psychology, prefrontal dysregulation represents a central transdiagnostic mechanism. dlPFC hypoactivity underpins deficits in working memory and cognitive reappraisal in major depression, while excessive metabolic activity in the orbitofrontal cortex and caudate nucleus sustains repetitive checking and contamination fears in OCD. Patients with antisocial personality disorder exhibit consistent structural and functional deficits in the orbitofrontal and ventromedial regions, impairing empathy, somatic marker processing, and moral judgement.`
  },
  parietal: {
    tag: 'Superior & Posterior Parietal Cortex · Brodmann 1, 2, 3, 5, 7, 39, 40',
    name: 'Parietal Lobe & Somatosensory Processing',
    color: '#8EADC0',
    role: 'Integrates multimodal somatosensory inputs, spatial cognition, body schema representation, interoceptive awareness, and coordinate transformation for spatial attention.',
    clinical: 'Parietal-insular and somatosensory network alterations produce severe body schema distortions in Anorexia Nervosa and Bulimia Nervosa, where individuals perceive their body as significantly larger regardless of objective underweight status. In PTSD, disrupted parietal gating of somatosensory trauma triggers causes tactile and spatial re-experiencing. Somatosensory hypervigilance in Panic Disorder leads to catastrophic misinterpretation of normal autonomic fluctuations.',
    neurotransmitters: 'Glutamate (AMPA, NMDA), Acetylcholine, Serotonin (5-HT2A)',
    subregions: ['Primary Somatosensory Cortex (S1)', 'Superior Parietal Lobule (SPL)', 'Inferior Parietal Lobule (IPL)', 'Precuneus', 'Temporoparietal Junction (TPJ)'],
    topicIds: ['anorexia', 'bulimia', 'ptsd', 'panic'],
    atlasOverview: `The parietal lobe translates raw sensory inputs into unified representations of the body in space. The postcentral gyrus (primary somatosensory cortex) maps tactile and visceral feedback somatotopically, while higher-order posterior parietal areas and the precuneus generate the internal 'body schema'.

In eating disorders (Anorexia and Bulimia Nervosa), functional neuroimaging reveals hypoactivation in the right inferior parietal lobule during body-image evaluation tasks, providing a neurobiological basis for refractory body dysmorphia. In trauma and panic disorders, parietal hyper-connectivity with the insula amplifies physiological sensations, triggering panic attacks and somatic trauma flashbacks.`
  },
  temporal: {
    tag: 'Lateral & Medial Temporal Cortex · Brodmann 20, 21, 22, 28, 38, 41, 42',
    name: 'Temporal Lobe & Limbic Complex',
    color: '#A5B9A0',
    role: 'Central to declarative and episodic memory encoding (hippocampus), emotional valence attribution and fear conditioning (amygdala), auditory speech perception (Wernicke\'s area), and complex visual recognition (fusiform face area).',
    clinical: 'Aberrant spontaneous activation in the superior temporal gyrus directly generates auditory verbal hallucinations in Schizophrenia. Hyperactivity of the basolateral amygdala accompanied by stress-induced hippocampal neurotoxicity and volume reduction characterizes treatment-resistant Major Depression and PTSD. Exaggerated amygdala reactivity to conditioned stimuli underlies Specific Phobias and acute panic onset.',
    neurotransmitters: 'Serotonin (5-HT1A, 5-HT2), GABA, Brain-Derived Neurotrophic Factor (BDNF), Glutamate',
    subregions: ['Hippocampus', 'Amygdaloid Complex', 'Superior Temporal Gyrus (Wernicke\'s Area)', 'Fusiform Gyrus', 'Entorhinal Cortex'],
    topicIds: ['schizophrenia', 'phobias', 'ptsd', 'major-depression', 'borderline'],
    atlasOverview: `The medial temporal lobe structures (hippocampus and amygdala) form the core of affective and mnemonic processing. The amygdala evaluates sensory stimuli for emotional threat and survival relevance, while the hippocampus encodes context-dependent autobiographical memories.

In Schizophrenia, functional MRI reliably demonstrates tonotopic activation of the primary auditory and superior temporal cortices in the complete absence of external acoustic stimuli, substantiating the reality of auditory hallucinations. In PTSD and chronic depression, sustained glucocorticoid exposure impairs neurogenesis in the dentate gyrus, resulting in hippocampal volume loss and deficits in contextual memory discrimination.`
  },
  occipital: {
    tag: 'Posterior Visual Cortex · Brodmann 17 (V1), 18 (V2), 19 (V3-V5)',
    name: 'Occipital Lobe & Visual Pathways',
    color: '#B4A2CA',
    role: 'Specialized for visual sensory reception, retinotopic feature mapping (edges, contrast, orientation), motion tracking, and upstream feed-forward projections along dorsal (\'where\') and ventral (\'what\') visual streams.',
    clinical: 'Spontaneous occipital hyper-activation without sensory inputs produces complex visual hallucinations in Psychotic Spectrum Disorders. Intrusive, vivid visual trauma flashbacks in PTSD correlate with intense visual cortex activation and uninhibited feedback loops. In Anorexia Nervosa, abnormal connectivity between the primary visual cortex (V1) and extrastriate body area (EBA) correlates with distorted visual processing of body shapes.',
    neurotransmitters: 'GABA (inhibitory tuning), Glutamate, Acetylcholine',
    subregions: ['Primary Visual Cortex (V1 / Striate Cortex)', 'Extrastriate Visual Areas (V2, V3, V4, V5/MT)', 'Lingual Gyrus', 'Cuneus'],
    topicIds: ['schizophrenia', 'ptsd', 'anorexia'],
    atlasOverview: `Occupying the posterior pole of each cerebral hemisphere, the occipital lobe processes all visual afferents received from the retina via the lateral geniculate nucleus (LGN). Striate cortex (V1) performs early feature extraction, projecting forward to ventral streams (occipitotemporal pathway) for object and face identification and dorsal streams (occipitoparietal pathway) for spatial localization.

Neuroimaging during PTSD flash episodes reveals abrupt reactivation of primary and extrastriate visual areas, confirming that intrusive traumatic recollections are experienced with raw perceptual immediacy rather than as abstract verbal thoughts. In psychotic episodes, aberrant thalamocortical gating leads to autonomous activation of visual processing networks.`
  },
  cerebellum: {
    tag: 'Infratentorial Cerebellar Complex & Brainstem Relay',
    name: 'Cerebellum, Brainstem & Subcortical Relays',
    color: '#C69A72',
    role: 'Regulates sensorimotor coordination, autonomic homeostatic stability (cardiorespiratory rhythm in medulla), monoaminergic neurotransmitter synthesis (locus coeruleus, raphe nuclei), and circadian pacemaking (suprachiasmatic nucleus).',
    clinical: 'Locus coeruleus hypersensitivity and massive sudden norepinephrine discharge trigger the terrifying somatic cascade of Panic Attacks (tachycardia, tachypnea, catastrophic dread). Suprachiasmatic nucleus (SCN) circadian phase shifts and blunted melatonin rhythmicity underpin Seasonal Affective Disorder (SAD). Cerebellar cognitive-affective syndrome (CCAS) contributes to emotional dysregulation and affective instability in Bipolar Disorder.',
    neurotransmitters: 'Norepinephrine, Serotonin, Melatonin, Acetylcholine, Dopamine',
    subregions: ['Cerebellar Hemispheres & Vermis', 'Pons', 'Medulla Oblongata', 'Locus Coeruleus', 'Dorsal Raphe Nuclei', 'Suprachiasmatic Nucleus (SCN)'],
    topicIds: ['panic', 'sad', 'bipolar', 'gad'],
    atlasOverview: `The cerebellum contains more than 50% of the brain\'s total neurons and coordinates not only motor actions but also cognitive processing through cerebro-cerebellar loops with the prefrontal cortex. Immediately adjacent, the brainstem (midbrain, pons, and medulla oblongata) houses vital autonomic centers and the ascending reticular activating system (ARAS).

The brainstem\'s locus coeruleus is the principal site for brain synthesis of norepinephrine. In Panic Disorder, Klein\'s suffocation false alarm theory highlights brainstem hypersensitivity to carbon dioxide and lactate, provoking abrupt hyperventilation and fight-or-flight panic surges. In Seasonal Affective Disorder (SAD), reduced photoperiod inputs to the suprachiasmatic nucleus delay melatonin cessation, leading to hypersomnia and profound anergia.`
  }
};

let currentBrainLobe = 'frontal';

function renderBrainInspector(lobeKey) {
  const data = BRAIN_ANATOMY_DATA[lobeKey] || BRAIN_ANATOMY_DATA.frontal;
  const inspector = document.getElementById('brainInspector');
  if (!inspector) return;

  const topicsHtml = data.topicIds.map(tid => {
    const t = KB.find(k => k.id === tid);
    if (!t) return '';
    return `<button class="inspector-topic-pill" onclick="openStudyTopic('${t.id}')" title="Study ${t.name}">
      <span>${t.name}</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>`;
  }).filter(Boolean).join('');

  inspector.innerHTML = `
    <div class="inspector-header">
      <div>
        <div class="inspector-tag" style="color:${data.color}">${data.tag}</div>
        <div class="inspector-title">${data.name}</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="openBrainModal('${lobeKey}')" style="font-size:11px;padding:3px 8px;">
        <span>Atlas Detail</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>
    <div class="inspector-role">
      <strong style="color:var(--text);font-weight:600">Core Physiological Function:</strong> ${data.role}
    </div>
    <div class="inspector-clinical" style="border-left-color:${data.color}">
      <strong style="color:var(--text);font-weight:600">Clinical Psychopathology &amp; DSM-5 Associations:</strong> ${data.clinical}
    </div>
    <div style="font-size:11px;color:var(--text-2);background:var(--surface);border:1px solid var(--border-subtle);border-radius:var(--radius-xs);padding:6px 10px">
      <strong style="color:var(--text)">Primary Neurochemicals:</strong> <span style="font-size:11px;color:var(--text)">${data.neurotransmitters}</span>
    </div>
    <div>
      <div class="inspector-links-label" style="margin-bottom:6px">Curriculum Topics (${data.topicIds.length} Linked Modules)</div>
      <div class="inspector-topics-wrap">
        ${topicsHtml}
      </div>
    </div>
  `;
}

function selectBrainRegion(lobeKey) {
  if (!BRAIN_ANATOMY_DATA[lobeKey]) lobeKey = 'frontal';
  currentBrainLobe = lobeKey;

  // 1. Update native SVG interactive regions & precision callout groups
  document.querySelectorAll('.brain-svg-region').forEach(el => {
    const elLobe = el.getAttribute('data-lobe');
    if (elLobe === lobeKey) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  document.querySelectorAll('.callout-group').forEach(cg => {
    const cgLobe = cg.getAttribute('data-lobe');
    if (cgLobe === lobeKey) {
      cg.classList.add('active');
    } else {
      cg.classList.remove('active');
    }
  });

  // 2. Update navigation row buttons
  document.querySelectorAll('.neuro-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-lobe') === lobeKey) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // 3. Update legacy lobe chips if present
  document.querySelectorAll('.lobe-chip').forEach(chip => {
    if (chip.getAttribute('data-lobe') === lobeKey) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  // 4. Update adjacent clinical inspector panel
  renderBrainInspector(lobeKey);
}

function openBrainModal(initialLobe) {
  const modal = document.getElementById('brainModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  selectBrainModalTab(initialLobe || currentBrainLobe || 'frontal');
}

function closeBrainModal(e) {
  if (e && e.target && e.target !== document.getElementById('brainModal') && !e.target.closest('.icon-btn')) {
    return;
  }
  const modal = document.getElementById('brainModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function selectBrainModalTab(lobeKey) {
  if (!BRAIN_ANATOMY_DATA[lobeKey]) lobeKey = 'frontal';

  // Update modal tabs
  document.querySelectorAll('.b-tab').forEach(tab => {
    if (tab.getAttribute('data-lobe') === lobeKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const data = BRAIN_ANATOMY_DATA[lobeKey];
  const content = document.getElementById('brainModalContent');
  if (!content) return;

  const topicsHtml = data.topicIds.map(tid => {
    const t = KB.find(k => k.id === tid);
    if (!t) return '';
    return `<button class="inspector-topic-pill" onclick="closeBrainModal();openStudyTopic('${t.id}')" title="Study ${t.name}">
      <span>${t.name}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>`;
  }).filter(Boolean).join('');

  content.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:var(--sp-4);">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--sp-2);border-bottom:1px solid var(--border);padding-bottom:var(--sp-3)">
        <div>
          <div style="font-size:11px;font-weight:600;color:${data.color};text-transform:uppercase;letter-spacing:var(--ls-wider)">${data.tag}</div>
          <h2 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:700;color:var(--text);margin-top:2px">${data.name}</h2>
        </div>
        <div style="font-size:11px;padding:4px 10px;border-radius:var(--radius-xs);background:var(--surface-inset);border:1px solid var(--border);color:var(--text-2)">
          Lateral Left Hemisphere
        </div>
      </div>

      <div class="callout callout-info" style="border-left:3px solid ${data.color}">
        <div class="callout-title" style="color:${data.color}">Primary Physiological Function</div>
        <p style="margin:0">${data.role}</p>
      </div>

      <div>
        <h4 style="font-family:var(--font-display);font-size:var(--text-base);font-weight:600;margin-bottom:var(--sp-2)">Key Anatomical Subregions & Brodmann Correlates</h4>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${data.subregions.map(sr => `<span style="padding:4px 10px;border-radius:var(--radius-xs);background:var(--surface-inset);border:1px solid var(--border);font-size:12px;color:var(--text)">${sr}</span>`).join('')}
        </div>
      </div>

      <div>
        <h4 style="font-family:var(--font-display);font-size:var(--text-base);font-weight:600;margin-bottom:var(--sp-2)">Deep Neuroanatomical & Clinical Atlas Notes</h4>
        <div style="color:var(--text-2);line-height:var(--lh-relaxed);white-space:pre-line">${data.atlasOverview}</div>
      </div>

      <div class="callout callout-alert">
        <div class="callout-title" style="color:var(--amber)">Diagnostic & Pathological Correlations</div>
        <p style="margin:0">${data.clinical}</p>
      </div>

      <div style="display:flex;align-items:center;gap:var(--sp-2);background:var(--surface-inset);border:1px solid var(--border);border-radius:var(--radius-xs);padding:var(--sp-3)">
        <span style="font-size:11px;font-weight:600;color:var(--text-3);text-transform:uppercase">Neurotransmitters & Receptors:</span>
        <span style="font-size:12px;font-weight:500;color:var(--text)">${data.neurotransmitters}</span>
      </div>

      <div>
        <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--text-3);letter-spacing:var(--ls-wider);margin-bottom:8px">Clinical Modules in PsychStudy Curriculum</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${topicsHtml}
        </div>
      </div>
    </div>
  `;
}

// ─── DASHBOARD COMMAND CENTER ────────────────────────────────────────────────

// ─── VOLUME COLOR PALETTE & TAXONOMY ──────────────────────────────────────────
const VOLUME_COLORS = {
  'I':    { name: 'Foundations',              color: '#0D9488', bg: 'rgba(13,148,136,0.12)' },
  'II':   { name: 'Anxiety & Trauma',         color: '#0284C7', bg: 'rgba(2,132,199,0.12)' },
  'III':  { name: 'Mood Disorders',          color: '#7C3AED', bg: 'rgba(124,58,237,0.12)' },
  'IV':   { name: 'Eating & Body Image',      color: '#E11D48', bg: 'rgba(225,29,72,0.12)' },
  'V':    { name: 'Personality Patterns',    color: '#9333EA', bg: 'rgba(147,51,234,0.12)' },
  'VI':   { name: 'Psychotic Spectrum',       color: '#2563EB', bg: 'rgba(37,99,235,0.12)' },
  'VII':  { name: 'Clinical Therapies',       color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  'VIII': { name: 'Culture & Context',        color: '#D97706', bg: 'rgba(217,119,6,0.12)' },
  'IX':   { name: 'Psychology of Adjustment', color: '#059669', bg: 'rgba(5,150,105,0.12)' }
};

const VOL_NUM_MAP = { 'I': '1', 'II': '2', 'III': '3', 'IV': '4', 'V': '5', 'VI': '6', 'VII': '7', 'VIII': '8', 'IX': '9' };

function getChapterVolume(c) {
  return (c && (c.volume || c.volumeId)) || 'I';
}

function getChapterPlate(c) {
  if (!c) return '1.1';
  if (c.plate) return c.plate;
  const vol = getChapterVolume(c);
  const vNum = VOL_NUM_MAP[vol] || '1';
  return `${vNum}.${c.order || 1}`;
}

function getVolumeInfo(volId) {
  return VOLUME_COLORS[volId] || VOLUME_COLORS['I'];
}

let currentCurriculumVol = 'all';
let currentCurriculumSort = 'default';

// ─── SAFE MARKDOWN RENDERER ──────────────────────────────────────────────────
function renderMarkdown(md) {
  if (!md) return '';
  if (typeof md !== 'string') {
    if (Array.isArray(md)) md = md.join(' ');
    else md = String(md);
  }
  // Escape HTML entities to prevent XSS
  let out = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Headings
  out = out.replace(/^### (.*$)/gim, '<h4 class="md-h4">$1</h4>');
  out = out.replace(/^## (.*$)/gim, '<h3 class="md-h3">$1</h3>');

  // Bold & Italic
  out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Unordered lists
  out = out.replace(/^\s*-\s+(.*$)/gim, '<li class="md-li">$1</li>');
  out = out.replace(/(<li class="md-li">.*<\/li>)/gms, '<ul class="md-ul">$1</ul>');

  // Paragraphs
  const paragraphs = out.split(/\n{2,}/);
  return paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<li')) return p;
    return '<p>' + p.replace(/\n/g, '<br/>') + '</p>';
  }).join('');
}

// ─── DASHBOARD RENDERING ──────────────────────────────────────────────────────
function renderDashboard() {
  if (typeof KB === 'undefined' || !KB.length) return;

  // 1. Time-contextual Greeting
  const hour = new Date().getHours();
  const timeGreet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const greetEl = document.getElementById('dashTimeGreet');
  if (greetEl) greetEl.textContent = timeGreet + ' · Session Active';

  const studiedCount = Object.values(S.progress || {}).filter(p => p && p.completed).length;
  const overallMastery = calculateOverallMastery();
  const msgEl = document.getElementById('dashMsg');
  if (msgEl) {
    msgEl.textContent = studiedCount === 0 
      ? 'University-grade clinical study companion, multi-axial diagnostic framework, and structured examination workspace.'
      : `You have reviewed ${studiedCount} of ${KB.length} chapters across 9 volumes. Curriculum mastery is at ${overallMastery}%.`;
  }

  // 2. Metric Cluster
  const notes = lsGet('psa_notes', []);
  const dTopics = document.getElementById('d-topics');
  const dStudied = document.getElementById('d-studied');
  const dQuizzes = document.getElementById('d-quizzes');
  const dNotes = document.getElementById('d-notes');
  const dMastery = document.getElementById('d-mastery-pct');

  if (dTopics) dTopics.textContent = KB.length;
  if (dStudied) dStudied.textContent = studiedCount;
  if (dQuizzes) dQuizzes.textContent = S.quizCount || 0;
  if (dNotes) dNotes.textContent = notes.length;
  if (dMastery) dMastery.textContent = overallMastery + '%';
  const podStudied = document.getElementById('podStudiedFill');
  if (podStudied && KB.length) {
    podStudied.style.width = Math.round((studiedCount / KB.length) * 100) + '%';
  }
  const podQuiz = document.getElementById('podQuizFill');
  if (podQuiz) podQuiz.style.width = Math.min(100, (S.quizCount || 0) * 10) + '%';

  const podNotes = document.getElementById('podNotesFill');
  if (podNotes) podNotes.style.width = Math.min(100, notes.length * 10) + '%';

  const podMastery = document.getElementById('podMasteryFill');
  if (podMastery) podMastery.style.width = overallMastery + '%';

  // 3. Continue Where You Left Off Strip
  const lastChapter = (KB && KB.find(t => t.id === S.lastViewedTopicId)) || (KB && KB[0]) || { id: 'what-is-disorder', name: 'What Are Psychological Disorders?', category: 'Foundations' };

  const contFill = document.getElementById('continueProgressFill');
  if (contFill && lastChapter) contFill.style.width = calculateTopicMastery(lastChapter.id) + '%';

  const contNameEl = document.getElementById('continueChapterName');
  const contMetaEl = document.getElementById('continueMeta');
  if (contNameEl && lastChapter) contNameEl.textContent = `${getChapterPlate(lastChapter)} ${lastChapter.name}`;
  if (contMetaEl && lastChapter) {
    const isComp = S.progress[lastChapter.id]?.completed;
    const vol = getChapterVolume(lastChapter);
    contMetaEl.textContent = `Volume ${vol} · ${lastChapter.category} · ${isComp ? 'Reviewed' : 'In Progress'}`;
  }

  // 4. Today's Strategic Focus Row
  renderTodayPriorities();

  // 5. Multi-Hue Mastery Heatmap
  renderMasteryHeatmap();

  // 6. Vitrine Plate I Inspector Initialisation
  selectVitrineLobe('frontal');

  // 7. Curriculum Browser (Specimen Cards)
  renderSpecimenGrid(currentCurriculumVol, currentCurriculumSort);

  // 8. Daily Clinical Insight
  renderDailyInsight();

  // Populate navigation selectors
  populateSelects();
}

function resumeLastTopic() {
  const lastId = S.lastViewedTopicId || KB[0].id;
  openStudyTopic(lastId);
}

// ─── TODAY'S STRATEGIC FOCUS ENGINE ───────────────────────────────────────────
function getDueFlashcardsCount() {
  const reviews = S.flashcardReviews || {};
  const now = Date.now();
  let count = 0;
  Object.values(reviews).forEach(r => {
    if (r && r.dueDate && r.dueDate <= now) count++;
  });
  return count > 0 ? count : 5;
}

function getRecommendedChapterWithReason() {
  // 1. Unstudied chapter first
  const unstudied = KB.find(t => !S.progress[t.id] || !S.progress[t.id].completed);
  if (unstudied) {
    const vol = getChapterVolume(unstudied);
    return {
      topic: unstudied,
      tag: 'Curriculum Priority',
      reason: `First unstudied chapter in Volume ${vol} (${unstudied.category})`
    };
  }
  // 2. Lowest mastery chapter
  const weak = getWeakTopics();
  if (weak.length > 0) {
    return {
      topic: weak[0].topic,
      tag: 'Reinforcement Needed',
      reason: `Lowest mastery (${weak[0].mastery}%) across your studied chapters`
    };
  }
  // 3. Fallback
  return {
    topic: KB[0],
    tag: 'Foundation Review',
    reason: 'Review foundational models of adjustment and biopsychosocial assessment'
  };
}

function renderTodayPriorities() {
  // A. Due Flashcards
  const dueCount = getDueFlashcardsCount();
  const dueCountEl = document.getElementById('todayDueCount');
  const dueBadgeEl = document.getElementById('todayDueBadge');
  if (dueCountEl) dueCountEl.textContent = dueCount;
  if (dueBadgeEl) dueBadgeEl.textContent = dueCount > 0 ? `${dueCount} Due` : 'Up to date';

  // B. Recommended Next
  const rec = getRecommendedChapterWithReason();
  const recTitleEl = document.getElementById('todayRecTitle');
  const recDescEl = document.getElementById('todayRecDesc');
  const recReasonEl = document.getElementById('todayRecReason');
  const recBtnEl = document.getElementById('todayRecBtn');
  if (recTitleEl) recTitleEl.textContent = rec.topic.name;
  if (recDescEl) recDescEl.textContent = `${rec.reason}. High-yield examination topic.`;
  if (recReasonEl) recReasonEl.textContent = rec.tag;
  if (recBtnEl) recBtnEl.onclick = () => openStudyTopic(rec.topic.id);

  // C. Study Pulse Heatmap (12 weeks = 84 days)
  renderStudyPulse();
}

function renderStudyPulse() {
  const pulseGrid = document.getElementById('studyPulseGrid');
  if (!pulseGrid) return;
  pulseGrid.innerHTML = '';

  const now = new Date();
  const days = 84;
  const dayMs = 24 * 60 * 60 * 1000;

  const activityMap = {};
  Object.values(S.progress || {}).forEach(p => {
    if (p && p.lastViewed) {
      const dKey = new Date(p.lastViewed).toISOString().slice(0, 10);
      activityMap[dKey] = (activityMap[dKey] || 0) + 1;
    }
  });
  Object.values(S.flashcardReviews || {}).forEach(r => {
    if (r && r.lastReviewed) {
      const dKey = new Date(r.lastReviewed).toISOString().slice(0, 10);
      activityMap[dKey] = (activityMap[dKey] || 0) + 1;
    }
  });

  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(now.getTime() - i * dayMs).toISOString().slice(0, 10);
    if (activityMap[d]) streak++;
    else if (i > 0) break;
  }
  const streakEl = document.getElementById('studyPulseStreak');
  if (streakEl) streakEl.textContent = streak > 0 ? `🔥 ${streak}-day streak` : '🌱 Active Session';

  // Render 7-day weekly activity strip (M T W T F S S)
  const weekRow = document.getElementById('studyWeekRow');
  if (weekRow) {
    weekRow.innerHTML = '';
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayLetters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const todayDayIdx = (now.getDay() + 6) % 7; // Monday = 0, Sunday = 6
    for (let dIdx = 0; dIdx < 7; dIdx++) {
      const dayDiff = dIdx - todayDayIdx;
      const targetDate = new Date(now.getTime() + dayDiff * dayMs);
      const targetKey = targetDate.toISOString().slice(0, 10);
      const hasStudied = !!activityMap[targetKey];
      const isToday = (dIdx === todayDayIdx);

      const cell = document.createElement('div');
      cell.className = 'week-day-pill' + (isToday ? ' is-today' : '') + (hasStudied ? ' has-activity' : '');
      cell.setAttribute('title', `${dayNames[dIdx]} (${targetKey}): ${hasStudied ? 'Activity logged' : 'No activity'}`);
      cell.innerHTML = `
        <span class="week-day-name">${dayLetters[dIdx]}</span>
        <span class="week-day-dot"></span>
      `;
      weekRow.appendChild(cell);
    }
  }

  for (let i = days - 1; i >= 0; i--) {
    const dObj = new Date(now.getTime() - i * dayMs);
    const dStr = dObj.toISOString().slice(0, 10);
    const count = activityMap[dStr] || (i === 0 ? 1 : 0);
    let lvl = 0;
    if (count >= 7) lvl = 4;
    else if (count >= 4) lvl = 3;
    else if (count >= 2) lvl = 2;
    else if (count >= 1) lvl = 1;

    const cell = document.createElement('div');
    cell.className = `pulse-dot lvl-${lvl}`;
    cell.setAttribute('title', `${dStr}: ${count} review activities`);
    pulseGrid.appendChild(cell);
  }
}

// ─── MULTI-HUE MASTERY HEATMAP ────────────────────────────────────────────────
function renderMasteryHeatmap() {
  const container = document.getElementById('masteryHeatmap');
  const legend = document.getElementById('volumeLegend');
  if (!container) return;
  container.innerHTML = '';

  const volumes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  if (legend) {
    legend.innerHTML = volumes.map(v => {
      const info = getVolumeInfo(v);
      return `<span class="vol-legend-chip"><span class="vol-dot" style="background:${info.color}"></span>Vol ${v}</span>`;
    }).join('');
  }

  volumes.forEach(volId => {
    const volInfo = getVolumeInfo(volId);
    const chapters = KB.filter(c => getChapterVolume(c) === volId);
    if (!chapters.length) return;

    const row = document.createElement('div');
    row.className = 'heatmap-volume-row';

    const label = document.createElement('div');
    label.className = 'heatmap-vol-label';
    label.innerHTML = `<span class="vol-dot" style="background:${volInfo.color}"></span><strong>Vol ${volId}</strong> <span class="vol-subname">${volInfo.name}</span>`;
    row.appendChild(label);

    const cellsWrap = document.createElement('div');
    cellsWrap.className = 'heatmap-cells-group';

    chapters.forEach(c => {
      const mastery = calculateTopicMastery(c.id);
      const cell = document.createElement('button');
      cell.className = 'mastery-cell';
      const plate = getChapterPlate(c);
      cell.setAttribute('aria-label', `${plate} ${c.name}: ${mastery}% mastery`);
      cell.setAttribute('title', `[${plate}] ${c.name} — ${mastery}% Mastery (Click to study)`);
      
      const alpha = 0.22 + (mastery / 100) * 0.78;
      cell.style.backgroundColor = volInfo.color;
      cell.style.opacity = alpha;

      cell.onclick = () => openStudyTopic(c.id);
      cellsWrap.appendChild(cell);
    });

    row.appendChild(cellsWrap);
    container.appendChild(row);
  });
}

// ─── VITRINE LOBE INSPECTOR ───────────────────────────────────────────────────
function selectVitrineLobe(lobeKey, btn) {
  document.querySelectorAll('.btn-lobe-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const activeBtn = document.querySelector(`.btn-lobe-chip[onclick*="'${lobeKey}'"]`);
    if (activeBtn) activeBtn.classList.add('active');
  }

  const data = (window.BRAIN_ANATOMY_DATA && window.BRAIN_ANATOMY_DATA[lobeKey]) || {};
  const descEl = document.getElementById('vitrineLobeDesc');
  if (descEl && data) {
    descEl.innerHTML = `<strong>${data.name || lobeKey} (${data.tag || ''}):</strong> ${data.role || ''} ${data.clinical || ''}`;
  }
}

// ─── CURRICULUM SPECIMENS BROWSER ─────────────────────────────────────────────
const filterTopics = function(vol, btn) { filterCurriculum(vol, btn); };

function filterCurriculum(vol, btn) {
  currentCurriculumVol = vol;
  document.querySelectorAll('#volumeTabsFilter .vol-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
  renderSpecimenGrid(vol, currentCurriculumSort);
}

function sortCurriculum(sortVal) {
  currentCurriculumSort = sortVal;
  renderSpecimenGrid(currentCurriculumVol, sortVal);
}

function renderSpecimenGrid(volFilter = 'all', sortBy = 'default') {
  const grid = document.getElementById('topicsGrid');
  if (!grid || !KB) return;
  grid.innerHTML = '';

  let list = volFilter === 'all' ? [...KB] : KB.filter(c => getChapterVolume(c) === volFilter);

  // Sorting
  if (sortBy === 'weak') {
    list.sort((a, b) => calculateTopicMastery(a.id) - calculateTopicMastery(b.id));
  } else if (sortBy === 'unstudied') {
    list.sort((a, b) => {
      const compA = S.progress[a.id]?.completed ? 1 : 0;
      const compB = S.progress[b.id]?.completed ? 1 : 0;
      return compA - compB;
    });
  } else if (sortBy === 'time') {
    list.sort((a, b) => parseInt(a.readTime || '10') - parseInt(b.readTime || '10'));
  } else if (sortBy === 'alpha') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  list.forEach((chapter, i) => {
    const vol = getChapterVolume(chapter);
    const volInfo = getVolumeInfo(vol);
    const mastery = calculateTopicMastery(chapter.id);
    const isCompleted = S.progress[chapter.id]?.completed;
    const plate = getChapterPlate(chapter);
    const dsmCode = chapter.dsmCode || (chapter.codes && chapter.codes.note) || 'DSM-5-TR';

    const card = document.createElement('article');
    card.className = 'topic-card specimen-card';
    card.style.borderLeft = `4px solid ${volInfo.color}`;
    card.style.animationDelay = (i * 0.02) + 's';

    card.innerHTML = `
      <div class="tc-top">
        <span class="tc-eyebrow" style="color:${volInfo.color}">VOL ${vol} · PLATE ${plate}</span>
        <div style="display:flex;align-items:center;gap:6px">
          ${mastery >= 80 ? '<span class="atlas-stamp atlas-stamp-reviewed">REVIEWED</span>' : ''}
          <span class="tc-mastery-tag ${mastery >= 70 ? 'high' : ''}">${mastery}% Mastery</span>
        </div>
      </div>
      <div class="tc-code-row">
        <span class="tc-code-chip mono">${dsmCode}</span>
        <span class="tc-read-time">${chapter.readTime || '12 min read'}</span>
      </div>
      <h3 class="tc-name">${chapter.name}</h3>
      <p class="tc-preview">${chapter.subtitle || chapter.preview || (chapter.definition ? chapter.definition.slice(0, 110) + '…' : '')}</p>
      <div class="tc-progress"><div class="tc-progress-fill" style="width:${mastery}%;background:${volInfo.color}"></div></div>
      <div class="tc-actions">
        <button class="btn btn-primary btn-sm" onclick="openStudyTopic('${chapter.id}')">
          <span>${isCompleted ? 'Review Chapter' : 'Study Chapter'}</span>
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-chevron-right"></use></svg>
        </button>
        <button class="btn btn-outline btn-sm" onclick="openFlashcardsTopic('${chapter.id}')">
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-cards"></use></svg>
          <span>Cards</span>
        </button>
      </div>`;
    grid.appendChild(card);
  });
}

function renderDailyInsight() {
  const facts = window.DAILY_FACTS || [];
  if (!facts.length) return;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const fact = facts[dayOfYear % facts.length] || facts[0];

  const titleEl = document.getElementById('factTitle');
  const textEl = document.getElementById('factText');
  const srcEl = document.getElementById('factSource');
  if (titleEl) titleEl.textContent = fact.title || 'Clinical Fact';
  if (textEl) textEl.textContent = fact.text || fact.fact || '';
  if (srcEl) srcEl.textContent = fact.source || 'DSM-5-TR';
}

function populateSelects() {
  if (typeof KB === 'undefined') return;

  // Study Selector
  const sel = document.getElementById('topicSelect');
  if (sel) {
    sel.innerHTML = KB.map((t, i) => `<option value="${i}">[${getChapterPlate(t)}] ${t.name}</option>`).join('');
    if (S.studyTopicIdx !== undefined) sel.value = S.studyTopicIdx;
  }

  // Flashcards Selector
  const fcSel = document.getElementById('fcTopicSelect');
  if (fcSel) {
    fcSel.innerHTML = '<option value="all">— All 43 Chapters Combined —</option>'
      + KB.map(t => `<option value="${t.id}">[${getChapterPlate(t)}] ${t.name}</option>`).join('');
  }

  // Quiz Selector
  const qSel = document.getElementById('quizTopicSel');
  if (qSel) {
    const cats = [...new Set(KB.map(t => t.category))];
    qSel.innerHTML = '<option value="mixed">All Curriculum Topics (Mixed)</option>'
      + cats.map(c => `<option value="${c}">${c}</option>`).join('');
  }
}

// ─── STUDY READER ENGINE ──────────────────────────────────────────────────────
function openStudyTopic(id) {
  if (id === null || id === undefined) id = 0;
  let idx = -1;
  if (typeof id === 'number') {
    idx = id;
  } else {
    const sId = String(id).trim().toLowerCase();
    // 1. Exact match on id
    idx = KB.findIndex(t => t.id && t.id.toLowerCase() === sId);
    // 2. Match on name or shortTitle
    if (idx < 0) {
      idx = KB.findIndex(t => (t.name && t.name.toLowerCase() === sId) || (t.shortTitle && t.shortTitle.toLowerCase() === sId));
    }
    // 3. Substring match
    if (idx < 0) {
      idx = KB.findIndex(t => (t.id && t.id.toLowerCase().includes(sId)) || (t.name && t.name.toLowerCase().includes(sId)));
    }
  }
  if (idx < 0 || idx >= KB.length) idx = 0;
  loadStudyTopic(idx);
  navigate('study');
}

function openChapter(id) {
  openStudyTopic(id);
}

function loadStudyTopic(idx) {
  idx = parseInt(idx, 10);
  if (isNaN(idx) || idx < 0 || idx >= KB.length) idx = 0;
  S.studyTopicIdx = idx;
  S.currentTopic = KB[idx];
  S.lastViewedTopicId = S.currentTopic.id;

  // Track viewing progress
  if (!S.progress[S.currentTopic.id]) {
    S.progress[S.currentTopic.id] = { completed: false, lastViewed: Date.now(), confidence: 2 };
  } else {
    S.progress[S.currentTopic.id].lastViewed = Date.now();
  }
  saveState();

  // Populate UI
  updateReaderHeader();
  renderStudyRail();
  renderStudyContent();
  loadMarginaliaNotes(S.currentTopic.id);
  renderMarginaliaKeyTerms();
  renderMarginaliaRefs();

  // Sync topic dropdown
  const sel = document.getElementById('topicSelect');
  if (sel) sel.value = idx;

  // Reset scroll to top
  const art = document.getElementById('studyArticle');
  if (art) art.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update hairline reading progress
  updateReaderHairline();
}

function updateReaderHeader() {
  const c = S.currentTopic;
  if (!c) return;

  const vol = getChapterVolume(c);
  const volInfo = getVolumeInfo(vol);
  const plate = getChapterPlate(c);
  const dsm = c.dsmCode || (c.codes && c.codes.note) || 'DSM-5-TR';
  const icd = c.icdCode || (c.codes && c.codes.icd11 && c.codes.icd11.length ? 'ICD-11: ' + c.codes.icd11.join(', ') : 'ICD-11');

  const bVol = document.getElementById('studyBreadVol');
  const bPlate = document.getElementById('studyBreadPlate');
  const rTime = document.getElementById('studyReadTime');
  const dsmEl = document.getElementById('studyDsmCode');
  const icdEl = document.getElementById('studyIcdCode');

  if (bVol) bVol.textContent = `Volume ${vol} · ${volInfo.name}`;
  if (bPlate) bPlate.textContent = `Plate ${plate}`;
  if (rTime) rTime.textContent = c.readTime || '12 min read';
  if (dsmEl) dsmEl.textContent = dsm;
  if (icdEl) icdEl.textContent = icd;
}

function changeStudyTopic(dir) {
  const newIdx = S.studyTopicIdx + dir;
  if (newIdx >= 0 && newIdx < KB.length) {
    loadStudyTopic(newIdx);
  }
}

function setStudyMode(mode) {
  S.studyMode = mode;
  document.getElementById('modeBtnDeep')?.classList.toggle('active', mode === 'deep');
  document.getElementById('modeBtnDeep')?.setAttribute('aria-checked', mode === 'deep');

  document.getElementById('modeBtnQuick')?.classList.toggle('active', mode === 'quick');
  document.getElementById('modeBtnQuick')?.setAttribute('aria-checked', mode === 'quick');

  document.getElementById('modeBtnExam')?.classList.toggle('active', mode === 'exam');
  document.getElementById('modeBtnExam')?.setAttribute('aria-checked', mode === 'exam');

  renderStudyContent();
}

function toggleFocusMode() {
  const layout = document.getElementById('study3ColLayout');
  const btn = document.getElementById('studyFocusBtn');
  if (!layout) return;
  const isFocus = layout.classList.toggle('focus-mode-active');
  if (btn) btn.classList.toggle('active', isFocus);
  toast(isFocus ? 'Focus Mode activated. Rails collapsed.' : 'Focus Mode deactivated.', 'info');
}

function toggleTopicStudied(id) {
  const c = id ? KB.find(k => k.id === id) : S.currentTopic;
  if (!c) return;
  if (!S.progress[c.id]) {
    S.progress[c.id] = { completed: true, lastViewed: Date.now(), confidence: 4 };
  } else {
    S.progress[c.id].completed = !S.progress[c.id].completed;
  }
  saveState();
  updateRailMarkBtn();
  toast(S.progress[c.id].completed ? `Chapter '${c.name}' marked as reviewed.` : 'Chapter marked as unreviewed.', 'success');
}

const toggleTopicCompletion = function(id) { toggleTopicStudied(id); };

function updateRailMarkBtn() {
  const c = S.currentTopic;
  if (!c) return;
  const btn = document.getElementById('railMarkStudiedBtn');
  const txt = document.getElementById('railMarkStudiedText');
  const isComp = S.progress[c.id]?.completed;
  if (btn) btn.classList.toggle('active', !!isComp);
  if (txt) txt.textContent = isComp ? '✓ Reviewed' : 'Mark Reviewed';
}

function startTopicCards() {
  const c = S.currentTopic;
  if (!c) return;
  openFlashcardsTopic(c.id);
}

// ─── STUDY RAIL TOC ───────────────────────────────────────────────────────────
function renderStudyRail() {
  const railNav = document.getElementById('railNav');
  if (!railNav) return;

  const sections = [
    { id: 'sec-1', label: '§1 Definition' },
    { id: 'sec-2', label: '§2 Classification' },
    { id: 'sec-3', label: '§3 Diagnostic Criteria' },
    { id: 'sec-4', label: '§4 Epidemiology & Course' },
    { id: 'sec-5', label: '§5 Etiology Tri-Panel' },
    { id: 'sec-6', label: '§6 Neurobiology' },
    { id: 'sec-7', label: '§7 Differential Diagnosis' },
    { id: 'sec-8', label: '§8 Treatments & Evidence' },
    { id: 'sec-9', label: '§9 Cultural Context' },
    { id: 'sec-10', label: '§10 Case File & Myths' },
    { id: 'sec-11', label: '§11 Examination Hub' },
    { id: 'sec-12', label: '§12 Academic References' }
  ];

  railNav.innerHTML = sections.map((s, i) => `
    <a href="#${s.id}" class="rail-item ${i === 0 ? 'active' : ''}" onclick="scrollToSection('${s.id}', event)">
      <span class="rail-tick"></span>
      <span class="rail-label">${s.label}</span>
    </a>
  `).join('');

  updateRailMarkBtn();
}

function scrollToSection(secId, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(secId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.rail-item').forEach(r => r.classList.remove('active'));
    const link = document.querySelector(`.rail-item[href="#${secId}"]`);
    if (link) link.classList.add('active');
  }
}

// ─── 12-SECTION ARTICLE CONTENT BUILDER ────────────────────────────────────────
function renderStudyContent() {
  const c = S.currentTopic;
  const container = document.getElementById('studyContent');
  if (!c || !container) return;

  const mode = S.studyMode || 'deep';
  const vol = getChapterVolume(c);
  const volInfo = getVolumeInfo(vol);
  const plate = getChapterPlate(c);
  const dsmCode = c.dsmCode || (c.codes && c.codes.note) || 'DSM-5-TR';
  const icdCode = c.icdCode || (c.codes && c.codes.icd11 && c.codes.icd11.length ? 'ICD-11: ' + c.codes.icd11.join(', ') : 'ICD-11 Standard');

  const mastery = typeof calculateTopicMastery === 'function' ? calculateTopicMastery(c.id) : 0;
  let html = '';

  // 1. Definition (§1)
  const defText = c.definition || (c.sections && c.sections.definition) || '';
  html += `
    <section id="sec-1" class="reader-section">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-2)">
        <div class="section-badge-eyebrow">§1 CORE CLINICAL DEFINITION</div>
        ${mastery >= 80 ? '<div class="atlas-stamp atlas-stamp-reviewed">REVIEWED • DSM-5-TR</div>' : ''}
      </div>
      <div class="def-callout">
        <h1 class="chapter-article-h1">${c.name}</h1>
        <div class="def-dropcap-prose">${renderMarkdown(defText)}</div>
      </div>
    </section>
  `;

  // 2. Classification (§2)
  html += `
    <section id="sec-2" class="reader-section">
      <div class="section-badge-eyebrow">§2 DIAGNOSTIC CLASSIFICATION</div>
      <div class="classification-panel">
        <div class="class-chip-pair">
          <div class="class-chip-item">
            <span class="class-auth-label">DSM-5-TR DIAGNOSTIC CODE</span>
            <span class="class-code-val mono">${dsmCode}</span>
          </div>
          <div class="class-chip-item">
            <span class="class-auth-label">WHO ICD-11 CLASSIFICATION</span>
            <span class="class-code-val mono">${icdCode}</span>
          </div>
        </div>
        <p class="class-narrative">${renderMarkdown(c.preview || 'Multi-axial diagnostic coding aligned with current American Psychiatric Association (APA) and World Health Organization (WHO) international disease classifications.')}</p>
      </div>
    </section>
  `;

  // 3. Clinical Criteria Checklist (§3)
  const criteriaList = Array.isArray(c.criteria) ? c.criteria : ((c.criteria && c.criteria.list) || c.symptoms || []);
  const criteriaNotes = (c.criteria && c.criteria.notes) || '';
  const checkedObj = (S.criteriaChecked && S.criteriaChecked[c.id]) || {};

  html += `
    <section id="sec-3" class="reader-section">
      <div class="section-badge-eyebrow">§3 DIAGNOSTIC CRITERIA CHECKLIST</div>
      <div class="criteria-checklist-card">
        <div class="card-eyebrow">OPERATIONALIZED CLINICAL CRITERIA</div>
        <p class="criteria-intro">Interactive diagnostic verification. Select observed clinical features:</p>
        <div class="criteria-items-list">
          ${criteriaList.map((crit, idx) => {
            const isChecked = !!checkedObj[idx];
            return `
              <label class="criteria-item ${isChecked ? 'checked' : ''}">
                <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleCriteriaCheck('${c.id}', ${idx}, this.checked)" />
                <span class="criteria-text">${crit}</span>
              </label>
            `;
          }).join('')}
        </div>
        ${criteriaNotes ? `<div class="criteria-notes"><svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-info"></use></svg><span>${criteriaNotes}</span></div>` : ''}
      </div>
    </section>
  `;

  // If mode is 'quick', only render §1, §2, §3 and §8 Treatments
  if (mode === 'quick') {
    html += renderSectionTreatments(c);
    container.innerHTML = html;
    autoLinkGlossary(container);
    return;
  }

  // 4. Epidemiology & Course (§4)
  const epiText = typeof c.epidemiology === 'string' ? c.epidemiology : (c.epidemiology && c.epidemiology.text) || c.explanation || '';
  html += `
    <section id="sec-4" class="reader-section">
      <div class="section-badge-eyebrow">§4 EPIDEMIOLOGY &amp; CLINICAL COURSE</div>
      <div class="epidemiology-grid">
        <div class="epi-card">
          <span class="epi-label">12-MONTH / LIFETIME PREVALENCE</span>
          <span class="epi-val">${(c.epidemiology && c.epidemiology.prevalence) || 'Variable across clinical demographics'}</span>
        </div>
        <div class="epi-card">
          <span class="epi-label">TYPICAL ONSET</span>
          <span class="epi-val">${(c.epidemiology && c.epidemiology.onset) || 'Adolescence / Early Adulthood'}</span>
        </div>
        <div class="epi-card">
          <span class="epi-label">LONGITUDINAL COURSE</span>
          <span class="epi-val">${(c.epidemiology && c.epidemiology.course) || 'Episodic / Chronic recurrent'}</span>
        </div>
      </div>
      <div class="epi-prose">${renderMarkdown(epiText)}</div>
    </section>
  `;

  // 5. Etiology Tri-Panel (§5)
  const etioBio = (c.etiology && (c.etiology.biological || c.etiology.bio)) || 'Genetic predispositions, neuroendocrine dysregulation, and neurochemical pathways.';
  const etioPsycho = (c.etiology && (c.etiology.psychological || c.etiology.psycho)) || 'Cognitive appraisal schemas, conditioned emotional responses, and psychodynamic mechanisms.';
  const etioSocio = (c.etiology && (c.etiology.sociocultural || c.etiology.socio)) || 'Interpersonal stressors, cultural idioms of distress, socio-economic factors, and family systems.';

  html += `
    <section id="sec-5" class="reader-section">
      <div class="section-badge-eyebrow">§5 BIOPSYCHOSOCIAL ETIOLOGY TRI-PANEL</div>
      <div class="etiology-tri-panel">
        <div class="etio-tabs-header" role="tablist">
          <button class="etio-tab active" onclick="selectEtiologyTab('bio', this)" role="tab" aria-selected="true">Biological Factors</button>
          <button class="etio-tab" onclick="selectEtiologyTab('psycho', this)" role="tab" aria-selected="false">Psychological Dynamics</button>
          <button class="etio-tab" onclick="selectEtiologyTab('socio', this)" role="tab" aria-selected="false">Sociocultural Context</button>
        </div>
        <div class="etio-tab-content active" id="etio-tab-bio">
          <div class="etio-body">${renderMarkdown(etioBio)}</div>
        </div>
        <div class="etio-tab-content" id="etio-tab-psycho">
          <div class="etio-body">${renderMarkdown(etioPsycho)}</div>
        </div>
        <div class="etio-tab-content" id="etio-tab-socio">
          <div class="etio-body">${renderMarkdown(etioSocio)}</div>
        </div>
      </div>
    </section>
  `;

  // 6. Functional Neurobiology (§6)
  const neuroNote = (c.neuro && (c.neuro.note || c.neuro.summary)) || (typeof c.neuro === 'string' ? c.neuro : 'Cortico-striatal and limbic circuit alterations associated with this presentation.');
  const brainRegions = (c.neuro && (c.neuro.regions || c.neuro.brainRegions)) || ['frontal', 'temporal'];

  html += `
    <section id="sec-6" class="reader-section">
      <div class="section-badge-eyebrow">§6 FUNCTIONAL NEUROBIOLOGY &amp; NETWORKS</div>
      <div class="neurobiology-card">
        <p class="neuro-summary">${renderMarkdown(neuroNote)}</p>
        <div class="neuro-regions-row">
          <span class="neuro-region-label">Implicated Neuroanatomical Structures:</span>
          <div class="neuro-chips-wrap">
            ${brainRegions.map(r => `<button class="neuro-region-pill" onclick="openBrainModal('${r.toLowerCase()}')">${r.toUpperCase()} →</button>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  // 7. Differential Diagnosis (§7)
  const diffList = c.differential || [];
  html += `
    <section id="sec-7" class="reader-section">
      <div class="section-badge-eyebrow">§7 DIFFERENTIAL DIAGNOSIS COMPARISON</div>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Potential Differential Presentation</th>
              <th>Distinguishing Clinical Hallmarks (Rule-In / Rule-Out)</th>
            </tr>
          </thead>
          <tbody>
            ${diffList.length ? diffList.map(d => `
              <tr>
                <td class="compare-disorder"><strong>${d.vs || d.disorder || d.name}</strong></td>
                <td>${renderMarkdown(d.distinguishingFeature || d.distinction || d.ruleOut || '')}</td>
              </tr>
            `).join('') : `
              <tr>
                <td class="compare-disorder"><strong>Adjustment Disorder</strong></td>
                <td>Identifiable psychosocial stressor with symptoms resolving within 6 months of stressor termination.</td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </section>
  `;

  // 8. Evidence-Based Treatments (§8)
  html += renderSectionTreatments(c);

  // 9. Cultural Context (§9)
  const cult = (c.sections && c.sections.culture) || c.culture || {};
  html += `
    <section id="sec-9" class="reader-section">
      <div class="section-badge-eyebrow">§9 CULTURAL &amp; CONTEXTUAL FORMULATION</div>
      <div class="culture-grid">
        <div class="culture-card india-lens">
          <div class="card-eyebrow">INDIA &amp; SOUTH ASIAN CLINICAL LENS</div>
          <div class="culture-body">${renderMarkdown(cult.indiaLens || 'Somatic idioms of distress (e.g. gas, heaviness, weakness) are common cultural presentations. Family involvement in treatment and navigating societal stigma are paramount.')}</div>
        </div>
        <div class="culture-card cross-cultural">
          <div class="card-eyebrow">CROSS-CULTURAL DSM-5-TR / ICD-11 CONCEPTS</div>
          <div class="culture-body">${renderMarkdown(cult.crossCultural || 'Cultural concepts of distress (cultural idioms, explanations, and syndromes) must be evaluated through the Cultural Formulation Interview (CFI).')}</div>
        </div>
      </div>
    </section>
  `;

  // 10. Case File & Myth vs Fact (§10)
  const caseF = c.caseFile || {};
  const myths = c.myths || [];
  const caseText = caseF.text || caseF.vignette || '';
  const caseAnalysis = caseF.analysis || (caseF.questions && caseF.questions.join('<br/><br/>')) || '';

  html += `
    <section id="sec-10" class="reader-section">
      <div class="section-badge-eyebrow">§10 CLINICAL CASE FILE &amp; MYTH VS FACT</div>
      ${caseText ? `
        <div class="case-file-card">
          <div class="case-file-header">
            <span class="card-eyebrow">CONFIDENTIAL CLINICAL CASE VIGNETTE</span>
            <span class="badge-term">${caseF.title || 'Case Presentation'}</span>
          </div>
          <div class="case-vignette-text">${renderMarkdown(caseText)}</div>
          ${caseAnalysis ? `
            <div class="case-analysis-block">
              <strong>Clinical Assessment &amp; Formulation Questions:</strong>
              <div>${renderMarkdown(caseAnalysis)}</div>
            </div>
          ` : ''}
        </div>
      ` : ''}
      ${myths.length ? `
        <div class="myths-container">
          <div class="card-eyebrow" style="margin-bottom:var(--sp-2)">CLINICAL DEBUNKING · MYTH ⇄ FACT</div>
          <div class="myths-grid">
            ${myths.map((m, idx) => `
              <div class="myth-fact-card" onclick="flipMythCard(this)" tabindex="0" role="button" aria-label="Flip myth and fact card">
                <div class="myth-face myth-side">
                  <div class="myth-tag red">MYTH</div>
                  <p>${m.myth}</p>
                  <span class="flip-hint">Click card to reveal fact ↷</span>
                </div>
                <div class="myth-face fact-side">
                  <div class="myth-tag green">CLINICAL FACT</div>
                  <p>${m.fact}</p>
                  <span class="flip-hint">Click card to flip ↷</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </section>
  `;

  // 11. University Examination Hub (§11)
  html += renderSectionExamHub(c);

  // 12. References & Citations (§12)
  html += renderSectionReferences(c);

  container.innerHTML = html;

  // Auto-link glossary terms in prose
  autoLinkGlossary(container);
}

function renderSectionTreatments(c) {
  const tList = (c && c.treatment && Array.isArray(c.treatment)) ? c.treatment : [];
  const tText = (c && typeof c.treatment === 'string') ? c.treatment : '';

  return `
    <section id="sec-8" class="reader-section">
      <div class="section-badge-eyebrow">§8 EVIDENCE-BASED INTERVENTIONS</div>
      <div class="treatment-table-wrap">
        <table class="treatment-table">
          <thead>
            <tr>
              <th>Treatment Modality</th>
              <th>Evidence Grade</th>
              <th>Mechanism of Action &amp; Efficacy</th>
            </tr>
          </thead>
          <tbody>
            ${tList.length ? tList.map(t => `
              <tr>
                <td class="treat-name"><strong>${t.modality || t.name}</strong></td>
                <td><span class="pill-evidence ${t.evidence || 'moderate'}">${(t.evidence || 'moderate').toUpperCase()}</span></td>
                <td>${renderMarkdown(t.description || t.mechanism || '')}</td>
              </tr>
            `).join('') : `
              <tr>
                <td class="treat-name"><strong>Cognitive Behavioral Therapy (CBT)</strong></td>
                <td><span class="pill-evidence strong">STRONG</span></td>
                <td>Cognitive restructuring, behavioral experiments, and exposure protocols. ${renderMarkdown(tText)}</td>
              </tr>
              <tr>
                <td class="treat-name"><strong>Pharmacotherapy (First-Line)</strong></td>
                <td><span class="pill-evidence strong">STRONG</span></td>
                <td>Selective Serotonin Reuptake Inhibitors (SSRIs) / dual reuptake inhibitors per psychiatric consultation.</td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSectionExamHub(c) {
  const exam = c.exam || {};
  const keywords = exam.keyTerms || exam.keywords || c.keyPoints || [];
  const checklist = exam.structure || exam.checklist || [];

  return `
    <section id="sec-11" class="reader-section">
      <div class="section-badge-eyebrow">§11 UNIVERSITY EXAMINATION HUB</div>
      <div class="exam-hub-card">
        <div class="exam-hub-header">
          <div>
            <div class="card-eyebrow">HIGH-YIELD EXAMINATION REVISION</div>
            <h3 class="exam-hub-title">Model University Answers &amp; Marking Rubric</h3>
          </div>
          <span class="badge-source">${exam.marks ? exam.marks + ' Marks' : '15-Mark & 5-Mark Benchmarks'}</span>
        </div>

        <div class="exam-accordion">
          <!-- Item 1: 15-Mark Model Answer -->
          <div class="exam-acc-item active" id="acc-15mark">
            <button class="exam-acc-header" onclick="toggleExamHubItem('acc-15mark')">
              <span>15-Mark Comprehensive Model Essay (600–800 Words Target)</span>
              <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
            </button>
            <div class="exam-acc-body">
              <div class="model-essay-prose">${renderMarkdown(exam.modelAnswer || 'Discuss the diagnostic criteria, etiology, and evidence-based interventions for this clinical presentation according to DSM-5-TR standards.')}</div>
            </div>
          </div>

          <!-- Item 2: 5-Mark Concise Note -->
          <div class="exam-acc-item" id="acc-5mark">
            <button class="exam-acc-header" onclick="toggleExamHubItem('acc-5mark')">
              <span>5-Mark Concise Short Revision Note (170–220 Words Target)</span>
              <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
            </button>
            <div class="exam-acc-body">
              <div class="model-essay-prose">${renderMarkdown(exam.shortNote || c.summary || '')}</div>
            </div>
          </div>

          <!-- Item 3: Keywords to Hit -->
          ${keywords.length ? `
            <div class="exam-acc-item" id="acc-keywords">
              <button class="exam-acc-header" onclick="toggleExamHubItem('acc-keywords')">
                <span>Examiner High-Yield Keywords Checklist</span>
                <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
              </button>
              <div class="exam-acc-body">
                <div class="keywords-cloud">
                  ${keywords.map(kw => `<span class="kw-chip">✓ ${kw}</span>`).join('')}
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Item 4: Rubric Structure -->
          ${checklist.length ? `
            <div class="exam-acc-item" id="acc-rubric">
              <button class="exam-acc-header" onclick="toggleExamHubItem('acc-rubric')">
                <span>Self-Assessment Marking Rubric</span>
                <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
              </button>
              <div class="exam-acc-body">
                <ul class="rubric-list">
                  ${checklist.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </section>
  `;
}

function renderSectionReferences(c) {
  const refs = c.refs || [];
  const refMap = window.REFERENCES || {};

  return `
    <div class="eeg-divider" aria-hidden="true">
      <svg viewBox="0 0 600 24" preserveAspectRatio="none">
        <path d="M0,12 L100,12 L110,4 L118,20 L125,8 L132,15 L140,12 L280,12 L290,2 L300,22 L308,6 L316,17 L324,12 L460,12 L470,5 L478,19 L486,9 L494,14 L502,12 L600,12" stroke="currentColor" fill="none" stroke-width="1.25"/>
      </svg>
    </div>
    <section id="sec-12" class="reader-section">
      <div class="section-badge-eyebrow">§12 ACADEMIC REFERENCES &amp; CITATIONS</div>
      <div class="references-list-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-3);flex-wrap:wrap;gap:8px">
          <div class="card-eyebrow">VERIFIED APA-7 REFERENCES FOR THIS CHAPTER</div>
          <button type="button" class="btn btn-outline btn-xs" onclick="openReferencesModal()" style="display:inline-flex;align-items:center;gap:6px">
            <span>📚 Browse Complete Compendium (63 Refs)</span>
          </button>
        </div>
        <ol class="apa-refs-list">
          ${refs.map(rKey => {
            const entry = refMap[rKey];
            if (!entry) return `<li id="ref-${rKey}" class="apa-ref-item"><span class="ref-badge">[${esc(rKey)}]</span></li>`;
            const citationText = typeof entry === 'string' ? entry : `${entry.authors} (${entry.year}). <em>${entry.title}</em>. ${entry.journal || entry.publisher || ''}.`;
            return `
              <li id="ref-${rKey}" class="apa-ref-item">
                <div class="apa-ref-main">
                  <span class="ref-badge">[${esc(rKey)}]</span>
                  <div class="ref-citation">${formatCitationHtml(citationText)}</div>
                </div>
                <button type="button" class="ref-copy-btn" onclick="copyCitation('${esc(rKey)}')" title="Copy APA-7 citation">
                  📋 Copy
                </button>
              </li>
            `;
          }).join('')}
        </ol>
      </div>
    </section>
  `;
}

// ─── MARGINALIA & INTERACTION CONTROLLERS ─────────────────────────────────────
function selectEtiologyTab(tabName, btn) {
  document.querySelectorAll('.etio-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.etio-tab-content').forEach(c => c.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  } else {
    const defaultBtn = document.querySelector(`.etio-tab[onclick*="'${tabName}'"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }
  const target = document.getElementById('etio-tab-' + tabName);
  if (target) target.classList.add('active');
}

function flipMythCard(card) {
  card.classList.toggle('flipped');
}

function toggleExamHubItem(itemId) {
  const el = document.getElementById(itemId);
  if (el) el.classList.toggle('active');
}

function toggleCriteriaCheck(chapterId, critIdx, isChecked) {
  if (!S.criteriaChecked) S.criteriaChecked = {};
  if (!S.criteriaChecked[chapterId]) S.criteriaChecked[chapterId] = {};
  S.criteriaChecked[chapterId][critIdx] = isChecked;
  saveState();
}

let autoSaveTimer = null;
function debounceAutoSaveNote() {
  const statusEl = document.getElementById('noteSaveStatus');
  if (statusEl) statusEl.textContent = 'Saving…';
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    saveCurrentTopicNote();
  }, 600);
}

function saveCurrentTopicNote() {
  const c = S.currentTopic;
  if (!c) return;
  const textarea = document.getElementById('topicNotesEditor');
  if (!textarea) return;
  const text = textarea.value.trim();
  const notes = lsGet('psa_notes', []);

  const existingIdx = notes.findIndex(n => n.topic === c.id);
  if (existingIdx >= 0) {
    if (text) {
      notes[existingIdx].body = text;
      notes[existingIdx].date = new Date().toLocaleDateString('en-IN');
    } else {
      notes.splice(existingIdx, 1);
    }
  } else if (text) {
    notes.unshift({
      id: Date.now().toString(),
      title: c.name + ' Notes',
      body: text,
      topic: c.id,
      topicName: c.name,
      date: new Date().toLocaleDateString('en-IN'),
      pinned: false
    });
  }

  lsSet('psa_notes', notes);
  const statusEl = document.getElementById('noteSaveStatus');
  if (statusEl) statusEl.textContent = 'Auto-saved';
}

function loadMarginaliaNotes(chapterId) {
  const notes = lsGet('psa_notes', []);
  const note = notes.find(n => n.topic === chapterId);
  const textarea = document.getElementById('topicNotesEditor');
  const statusEl = document.getElementById('noteSaveStatus');
  if (textarea) textarea.value = note ? note.body : '';
  if (statusEl) statusEl.textContent = note ? 'Saved' : 'Auto-saved';
}

function renderMarginaliaKeyTerms() {
  const c = S.currentTopic;
  const wrap = document.getElementById('marginaliaKeyTerms');
  if (!wrap || !c) return;
  const terms = (c.exam && c.exam.keyTerms) || c.keyTerms || c.keyPoints || [];
  wrap.innerHTML = terms.map(t => `<span class="term-pill" onclick="searchFromTerm('${t}')">${t}</span>`).join('');
}

function renderMarginaliaRefs() {
  const c = S.currentTopic;
  const wrap = document.getElementById('marginaliaRefs');
  if (!wrap || !c) return;
  const refs = c.refs || [];
  wrap.innerHTML = refs.map(r => `<a href="#ref-${r}" class="marginalia-ref-chip" title="Jump to citation">[${r}]</a>`).join('') +
    `<button type="button" class="marginalia-all-refs-btn" onclick="openReferencesModal()" title="Open clinical bibliography compendium">All 63 Refs →</button>`;
}

function searchFromTerm(term) {
  openCommandPalette(term);
}

function openNotesWorkspace() {
  navigate('notes');
}

// ─── READING PROGRESS HAIRLINE ────────────────────────────────────────────────
function updateReaderHairline() {
  const fill = document.getElementById('readerHairlineFill');
  if (!fill) return;

  const scrollHandler = () => {
    const el = document.documentElement;
    const total = el.scrollHeight - el.clientHeight;
    const pct = total > 0 ? (el.scrollTop / total) * 100 : 0;
    fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
  };

  window.removeEventListener('scroll', scrollHandler);
  window.addEventListener('scroll', scrollHandler, { passive: true });
}

// ─── GLOSSARY AUTO-LINKING ENGINE ─────────────────────────────────────────────
let glossaryPopoverEl = null;

function autoLinkGlossary(container) {
  const glossary = window.GLOSSARY || [];
  if (!container || !glossary.length) return;

  const terms = [...glossary].filter(g => g.term && g.term.length >= 4)
    .sort((a, b) => b.term.length - a.term.length);

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (['h1', 'h2', 'h3', 'h4', 'a', 'button', 'code', 'pre', 'kbd', 'textarea', 'input'].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.classList.contains('glossary-term')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodesToProcess = [];
  while (walker.nextNode()) {
    nodesToProcess.push(walker.currentNode);
  }

  let linkedCount = 0;
  const maxLinks = 12;

  terms.forEach(termObj => {
    if (linkedCount >= maxLinks) return;
    const term = termObj.term;
    const regex = new RegExp(`\\b(${term})\\b`, 'i');

    for (let i = 0; i < nodesToProcess.length; i++) {
      const node = nodesToProcess[i];
      if (!node.nodeValue) continue;
      const match = regex.exec(node.nodeValue);
      if (match) {
        const span = document.createElement('span');
        const before = node.nodeValue.slice(0, match.index);
        const matchedText = match[0];
        const after = node.nodeValue.slice(match.index + matchedText.length);

        const linkEl = document.createElement('span');
        linkEl.className = 'glossary-term';
        linkEl.setAttribute('data-term', term);
        linkEl.setAttribute('tabindex', '0');
        linkEl.textContent = matchedText;

        linkEl.addEventListener('mouseenter', (e) => showGlossaryPopover(e.target, termObj));
        linkEl.addEventListener('mouseleave', hideGlossaryPopover);
        linkEl.addEventListener('focus', (e) => showGlossaryPopover(e.target, termObj));
        linkEl.addEventListener('blur', hideGlossaryPopover);

        const parent = node.parentNode;
        if (!parent) continue;
        parent.insertBefore(document.createTextNode(before), node);
        parent.insertBefore(linkEl, node);
        parent.insertBefore(document.createTextNode(after), node);
        parent.removeChild(node);

        linkedCount++;
        break;
      }
    }
  });
}

function showGlossaryPopover(targetEl, termObj) {
  hideGlossaryPopover();

  glossaryPopoverEl = document.createElement('div');
  glossaryPopoverEl.className = 'glossary-popover';
  glossaryPopoverEl.innerHTML = `
    <div class="popover-term-row">
      <span class="popover-term">${termObj.term}</span>
      ${termObj.pronunciation ? `<span class="popover-ipa mono">${termObj.pronunciation}</span>` : ''}
    </div>
    <p class="popover-def">${termObj.definition}</p>
    ${termObj.etymology ? `<div class="popover-etymo"><em>${termObj.etymology}</em></div>` : ''}
    <div class="popover-footer">
      <span class="popover-vol-tag">${termObj.volume ? 'Vol ' + termObj.volume : 'Clinical Lexicon'}</span>
      <button class="popover-btn" onclick="openLexiconTerm('${termObj.term}')">Open Lexicon ↗</button>
    </div>
  `;

  document.body.appendChild(glossaryPopoverEl);

  const rect = targetEl.getBoundingClientRect();
  const popRect = glossaryPopoverEl.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 6;
  let left = rect.left + window.scrollX - 10;

  if (left + popRect.width > window.innerWidth - 16) {
    left = window.innerWidth - popRect.width - 16;
  }
  if (left < 16) left = 16;

  glossaryPopoverEl.style.top = top + 'px';
  glossaryPopoverEl.style.left = left + 'px';
}

function hideGlossaryPopover() {
  if (glossaryPopoverEl && glossaryPopoverEl.parentNode) {
    glossaryPopoverEl.parentNode.removeChild(glossaryPopoverEl);
    glossaryPopoverEl = null;
  }
}

function openLexiconTerm(term) {
  hideGlossaryPopover();
  openCommandPalette(term);
}


// ─── NOTES PANEL (STUDY PAGE & WORKSPACE) ────────────────────────────────────
function toggleNotesPanel() {
  S.notesPanelOpen = !S.notesPanelOpen;
  const layout = document.querySelector('.study-layout');
  const panel = document.getElementById('notesPanel');
  const colBtn = document.getElementById('notesCollapseBtn');
  if (S.notesPanelOpen) {
    layout?.classList.remove('notes-hidden');
    panel?.classList.remove('hidden');
    colBtn?.classList.add('hidden');
  } else {
    layout?.classList.add('notes-hidden');
    panel?.classList.add('hidden');
    colBtn?.classList.remove('hidden');
  }
}

function loadTopicNotes(topicId) {
  const notes = lsGet('psa_notes', []).filter(n => n.topic === topicId);
  const list = document.getElementById('savedNotesList');
  if (!list) return;
  list.innerHTML = '';
  if (!notes.length) {
    list.innerHTML = '<div style="color:var(--text-3);font-size:var(--text-xs);text-align:center;padding:12px">No notes for this topic yet</div>';
    return;
  }
  notes.forEach(n => {
    const chip = document.createElement('div');
    chip.className = 'saved-note-chip';
    chip.innerHTML = `<span class="note-chip-title">${n.title || 'Untitled'}</span><span class="note-chip-del" onclick="deleteNote('${n.id}',event)" title="Delete note"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></span>`;
    chip.onclick = (e) => {
      if (e.target.classList.contains('note-chip-del') || e.target.closest('.note-chip-del')) return;
      document.getElementById('noteTitle').value = n.title || '';
      document.getElementById('noteEditor').value = n.body || '';
    };
    list.appendChild(chip);
  });
}

function saveNote() {
  const title = (document.getElementById('noteTitle').value || '').trim() || 'Note ' + (new Date().toLocaleDateString());
  const body = (document.getElementById('noteEditor').value || '').trim();
  if (!body) { toast('Please write something before saving.', 'error'); return; }
  const notes = lsGet('psa_notes', []);
  const note = {
    id: Date.now().toString(),
    title, body,
    topic: S.currentTopic?.id || 'General',
    topicName: S.currentTopic?.name || 'General',
    date: new Date().toLocaleDateString('en-IN'),
    pinned: false
  };
  notes.unshift(note);
  lsSet('psa_notes', notes);
  loadTopicNotes(S.currentTopic?.id || 'General');
  toast('Note saved successfully.', 'success');
}

function clearNoteEditor() {
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteEditor').value = '';
}

function deleteNote(id, e) {
  e?.stopPropagation();
  const notes = lsGet('psa_notes', []).filter(n => n.id !== id);
  lsSet('psa_notes', notes);
  if (S.currentTopic) loadTopicNotes(S.currentTopic.id);
  renderNotesPage();
  toast('Note deleted', 'info');
}

function togglePinNote(id, e) {
  e?.stopPropagation();
  let notes = lsGet('psa_notes', []);
  notes = notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n);
  lsSet('psa_notes', notes);
  renderNotesPage();
}

function renderNotesPage() {
  const notes = lsGet('psa_notes', []);
  const grid = document.getElementById('notesGrid');
  if (!grid) return;

  // Populate Notes Category Filter
  const catSel = document.getElementById('notesCatFilter');
  if (catSel && typeof KB !== 'undefined') {
    const currentVal = catSel.value || 'all';
    catSel.innerHTML = '<option value="all">All Topics &amp; General</option>'
      + KB.map(t => `<option value="${t.id}">[${getChapterPlate(t)}] ${t.name}</option>`).join('');
    catSel.value = currentVal;
  }

  if (!notes.length) {
    grid.innerHTML = `
      <div class="empty-state large">
        <svg class="icon icon-lg" aria-hidden="true" style="margin-bottom:8px;color:var(--text-3)"><use href="#ps-icon-notes"></use></svg>
        <div>No clinical notes recorded yet. Write notes while studying or create your first one with the New Note button above.</div>
      </div>`;
    return;
  }

  // Sort pinned to top
  const sorted = [...notes].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  renderNotesGrid(sorted);
}

function renderNotesGrid(notesList) {
  const grid = document.getElementById('notesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  notesList.forEach(n => {
    const card = document.createElement('div');
    card.className = `note-card ${n.pinned ? 'pinned' : ''}`;
    const cleanId = esc(n.id);
    const tagsHtml = (n.tags && Array.isArray(n.tags)) 
      ? n.tags.map(tag => `<span class="tag-chip">#${esc(tag)}</span>`).join('') 
      : '';

    card.innerHTML = `
      <div class="note-card-header">
        <div class="note-card-title">${esc(n.title || 'Untitled Note')}</div>
        <span class="note-cat-badge">${esc(n.topicName || 'General')}</span>
      </div>
      ${tagsHtml ? `<div class="note-tags-row">${tagsHtml}</div>` : ''}
      <div class="note-card-body">${renderMarkdown(n.body || '')}</div>
      <div class="note-card-footer">
        <span class="note-card-date">
          <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-clock"></use></svg>
          <span>${esc(n.date || '')}</span>
        </span>
        <div class="note-card-actions">
          <button class="btn btn-ghost btn-xs" onclick="togglePinNote('${cleanId}',event)">${n.pinned ? 'Unpin' : 'Pin'}</button>
          <button class="btn btn-ghost btn-xs" onclick="editNote('${cleanId}')">Edit</button>
          <button class="btn btn-ghost btn-xs" onclick="deleteNote('${cleanId}',event)" title="Delete note">
            <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-trash"></use></svg>
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function filterNotes(search) {
  const cat = document.getElementById('notesCatFilter')?.value || 'all';
  let notes = lsGet('psa_notes', []);
  if (search) {
    const q = search.toLowerCase();
    notes = notes.filter(n => 
      (n.title || '').toLowerCase().includes(q) ||
      (n.body || '').toLowerCase().includes(q) ||
      (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
    );
  }
  if (cat !== 'all') {
    notes = notes.filter(n => n.topic === cat);
  }
  if (!notes.length) {
    document.getElementById('notesGrid').innerHTML = '<div class="empty-state">No notes match your filter criteria.</div>';
    return;
  }
  renderNotesGrid(notes);
}

function openNewNoteModal() {
  document.getElementById('modalTitle').textContent = 'Create Clinical Study Note';
  document.getElementById('modalNoteTitle').value = '';
  document.getElementById('modalNoteBody').value = '';
  document.getElementById('modalNoteTags').value = '';

  const catSel = document.getElementById('modalNoteCat');
  if (catSel && typeof KB !== 'undefined') {
    catSel.innerHTML = '<option value="General">General Clinical Reflection</option>'
      + KB.map(t => `<option value="${t.id}">[${getChapterPlate(t)}] ${t.name}</option>`).join('');
  }

  document.getElementById('noteModal').classList.remove('hidden');
  document.getElementById('noteModal')._editId = null;
}

function editNote(id) {
  const note = lsGet('psa_notes', []).find(n => n.id === id);
  if (!note) return;
  document.getElementById('modalTitle').textContent = 'Edit Clinical Study Note';
  document.getElementById('modalNoteTitle').value = note.title || '';
  document.getElementById('modalNoteCat').value = note.topic || 'General';
  document.getElementById('modalNoteBody').value = note.body || '';
  document.getElementById('modalNoteTags').value = (note.tags || []).join(', ');
  document.getElementById('noteModal').classList.remove('hidden');
  document.getElementById('noteModal')._editId = id;
}

function saveModalNote() {
  const title = (document.getElementById('modalNoteTitle').value || '').trim() || ('Clinical Note ' + new Date().toLocaleDateString('en-IN'));
  const body = (document.getElementById('modalNoteBody').value || '').trim();
  const topicId = document.getElementById('modalNoteCat').value;
  const tagsRaw = (document.getElementById('modalNoteTags').value || '').split(',');
  const tags = tagsRaw.map(t => t.trim()).filter(Boolean);

  if (!body) { toast('Please write note content before saving.', 'error'); return; }
  let notes = lsGet('psa_notes', []);
  const editId = document.getElementById('noteModal')._editId;
  const topicObj = KB.find(t => t.id === topicId);
  const topicName = topicObj ? topicObj.name : (topicId === 'General' ? 'General' : topicId);

  if (editId) {
    notes = notes.map(n => n.id === editId ? { ...n, title, body, topic: topicId, topicName, tags, date: new Date().toLocaleDateString('en-IN') } : n);
    toast('Clinical note updated successfully.', 'success');
  } else {
    notes.unshift({
      id: Date.now().toString(),
      title,
      body,
      topic: topicId,
      topicName,
      tags,
      date: new Date().toLocaleDateString('en-IN'),
      pinned: false
    });
    toast('New note saved successfully.', 'success');
  }

  lsSet('psa_notes', notes);
  closeNoteModal();
  renderNotesPage();
}

function closeNoteModal() {
  document.getElementById('noteModal').classList.add('hidden');
}

function togglePinNote(id, e) {
  if (e) e.stopPropagation();
  let notes = lsGet('psa_notes', []);
  notes = notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n);
  lsSet('psa_notes', notes);
  renderNotesPage();
}

function deleteNote(id, e) {
  if (e) e.stopPropagation();
  if (!confirm('Are you sure you want to delete this study note?')) return;
  let notes = lsGet('psa_notes', []);
  notes = notes.filter(n => n.id !== id);
  lsSet('psa_notes', notes);
  renderNotesPage();
  toast('Note removed.', 'info');
}

function exportNotesJSON() {
  const notes = lsGet('psa_notes', []);
  const json = JSON.stringify(notes, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `psychstudy_notes_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast(`Exported ${notes.length} notes as JSON backup.`, 'success');
}

function importNotesJSON(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error('Expected JSON array of notes');
      let currentNotes = lsGet('psa_notes', []);
      let count = 0;
      imported.forEach(n => {
        if (n && n.body) {
          const exists = currentNotes.some(cur => cur.id === n.id);
          if (!exists) {
            currentNotes.unshift({
              id: n.id || Date.now().toString() + Math.random().toString(36).slice(2, 6),
              title: esc(n.title || 'Imported Note'),
              body: esc(n.body),
              topic: n.topic || 'General',
              topicName: n.topicName || 'General',
              tags: Array.isArray(n.tags) ? n.tags.map(t => esc(t)) : [],
              date: n.date || new Date().toLocaleDateString('en-IN'),
              pinned: !!n.pinned
            });
            count++;
          }
        }
      });
      lsSet('psa_notes', currentNotes);
      renderNotesPage();
      toast(`Successfully imported ${count} notes from backup.`, 'success');
    } catch (err) {
      toast('Failed to parse notes backup JSON: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

// ─── FLASHCARDS (SM-2-LITE EXPLAINABLE ACTIVE RECALL ENGINE) ──────────────────
let fcHistory = [];

function openFlashcardsTopic(id) {
  const el = document.getElementById('fcTopicSelect');
  if (el) el.value = id;
  loadFlashcards(id);
  navigate('flashcards');
}

function loadFlashcards(deckType = 'all') {
  let cards = [];
  const reviews = S.flashcardReviews || {};
  const now = Date.now();

  // Populate Deck Select with 43 chapters
  const sel = document.getElementById('fcTopicSelect');
  if (sel && typeof KB !== 'undefined' && sel.options.length <= 4) {
    const current = sel.value;
    sel.innerHTML = `
      <option value="all">— All 43 Chapters Combined (121 Cards) —</option>
      <option value="due">⏰ Due Today for Retrieval</option>
      <option value="weak">⚡ Weak Cards (Again / Hard)</option>
    ` + KB.map(t => `<option value="${t.id}">[${getChapterPlate(t)}] ${t.name}</option>`).join('');
    sel.value = current;
  }

  if (deckType === 'all') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) cards.push(...deck);
    });
  } else if (deckType === 'due') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) {
        deck.forEach(c => {
          const r = reviews[c.term];
          if (!r || (r.dueDate && r.dueDate <= now)) cards.push(c);
        });
      }
    });
    if (!cards.length) {
      toast('All cards up to date! Loading full deck for practice.', 'info');
      return loadFlashcards('all');
    }
  } else if (deckType === 'weak') {
    Object.values(FLASHCARD_DECKS).forEach(deck => {
      if (Array.isArray(deck)) {
        deck.forEach(c => {
          const r = reviews[c.term];
          if (r && (r.difficulty === 'again' || r.difficulty === 'hard')) cards.push(c);
        });
      }
    });
    if (!cards.length) {
      toast('No weak cards marked yet! Loading full deck.', 'info');
      return loadFlashcards('all');
    }
  } else {
    cards = FLASHCARD_DECKS[deckType] || [];
    if (!cards.length) {
      const topic = KB.find(t => t.id === deckType);
      if (topic) cards = generateCardsFromTopic(topic);
    }
  }

  if (!cards.length) {
    toast('No flashcards found for this selection.', 'info');
    return;
  }

  S.fcCards = cards;
  S.fcIdx = 0;
  S.fcFlipped = false;
  S.fcSession = { reviewed: 0, known: 0, reviewNeeded: 0 };
  fcHistory = [];

  updateSessionStatsUI();
  renderCard();
}

function generateCardsFromTopic(t) {
  const vol = getChapterVolume(t);
  const plate = getChapterPlate(t);
  return [
    { term: `Define: ${t.name}`, def: t.definition || '', ex: (t.examples && t.examples[0]) || '', keyPoints: t.keyPoints ? t.keyPoints.slice(0, 3) : [], volume: vol, plate },
    { term: `Diagnostic Criteria: ${t.name}`, def: (t.symptoms || t.criteria || []).slice(0, 4).join(' · '), ex: '', keyPoints: t.keyPoints ? t.keyPoints.slice(0, 3) : [], volume: vol, plate },
    { term: `Evidence-Based Interventions: ${t.name}`, def: typeof t.treatment === 'string' ? t.treatment : 'Cognitive Behavioral Therapy (CBT)', ex: '', keyPoints: [], volume: vol, plate },
    { term: `Clinical Examination Synthesis: ${t.name}`, def: t.summary || '', ex: t.mnemonic || '', keyPoints: t.keyPoints || [], volume: vol, plate }
  ];
}

function renderCard() {
  const cards = S.fcCards;
  if (!cards || !cards.length) return;
  const c = cards[S.fcIdx];
  const total = cards.length;
  const pct = Math.round(((S.fcIdx + 1) / total) * 100);

  const vol = c.volume || 'I';
  const volInfo = (typeof getVolumeInfo === 'function') ? getVolumeInfo(vol) : { name: 'Volume ' + vol, color: '#4338CA', bg: 'rgba(67, 56, 202, 0.1)' };
  const plate = c.plate || '1.1';

  const fillEl = document.getElementById('fcProgressFill');
  const counterEl = document.getElementById('fcCounter');
  if (fillEl) fillEl.style.width = pct + '%';
  if (counterEl) counterEl.textContent = `Card ${S.fcIdx + 1} of ${total}`;

  const cardEl = document.getElementById('fcCard');
  if (cardEl) {
    cardEl.classList.remove('flipped');
    cardEl.style.setProperty('--fc-card-accent', volInfo.color);
  }
  S.fcFlipped = false;

  const plateTagEl = document.getElementById('fcPlateTag');
  const qNumEl = document.getElementById('fcQNum');
  const termEl = document.getElementById('fcTerm');
  const backTypeEl = document.getElementById('fcBackTypeLabel');
  const backPlateEl = document.getElementById('fcBackPlateTag');
  const defEl = document.getElementById('fcDef');
  const exEl = document.getElementById('fcEx');

  if (plateTagEl) {
    plateTagEl.textContent = `VOL ${vol} · PLATE ${plate}`;
    plateTagEl.style.color = volInfo.color;
    plateTagEl.style.background = volInfo.bg;
  }
  if (qNumEl) qNumEl.textContent = `${S.fcIdx + 1} / ${total}`;
  if (termEl) termEl.textContent = c.term || 'Flashcard Question';
  if (backTypeEl) backTypeEl.textContent = c.type ? c.type.toUpperCase() : 'CLINICAL EXPLANATION';
  if (backPlateEl) {
    backPlateEl.textContent = volInfo.name;
    backPlateEl.style.color = volInfo.color;
  }
  if (defEl) defEl.innerHTML = renderMarkdown(c.def || '');
  if (exEl) exEl.innerHTML = c.ex ? `<strong>Clinical Example:</strong> ${esc(c.ex)}` : '';

  // Render navigation dots (up to 14)
  const dots = document.getElementById('fcDots');
  if (dots) {
    dots.innerHTML = '';
    const maxDots = Math.min(total, 14);
    for (let i = 0; i < maxDots; i++) {
      const d = document.createElement('div');
      d.className = 'fc-dot' + (i === S.fcIdx ? ' active' : '');
      const idx = i;
      d.onclick = () => { S.fcIdx = idx; S.fcFlipped = false; renderCard(); };
      dots.appendChild(d);
    }
  }

  // Render Key Points
  const kp = document.getElementById('fcKeyPoints');
  if (kp) {
    if (c.keyPoints && c.keyPoints.length) {
      kp.innerHTML = `<div class="fc-kp-title">Examiner Key Points</div><div class="fc-kp-list">`
        + c.keyPoints.map(p => `<div class="fc-kp-item"><div class="fc-kp-dot"></div><span>${esc(p)}</span></div>`).join('')
        + `</div>`;
      kp.style.display = 'block';
    } else {
      kp.style.display = 'none';
    }
  }
}

function flipCard() {
  S.fcFlipped = !S.fcFlipped;
  const cardEl = document.getElementById('fcCard');
  if (cardEl) cardEl.classList.toggle('flipped', S.fcFlipped);
}

function prevCard() {
  if (S.fcIdx > 0) {
    S.fcIdx--;
    renderCard();
  }
}

function nextCard() {
  if (S.fcIdx < S.fcCards.length - 1) {
    S.fcIdx++;
    renderCard();
  }
}

function rateFlashcard(rating) {
  const currentCard = S.fcCards[S.fcIdx];
  if (!currentCard) return;

  // Record undo history
  fcHistory.push({
    card: currentCard,
    idx: S.fcIdx,
    session: { ...S.fcSession },
    prevReview: S.flashcardReviews[currentCard.term]
  });

  S.fcSession.reviewed++;
  const prevRec = S.flashcardReviews[currentCard.term] || { interval: 1, ease: 2.5 };
  let interval = 1;
  let ease = prevRec.ease || 2.5;

  if (rating === 'again') {
    S.fcSession.reviewNeeded++;
    interval = 1;
    ease = Math.max(1.3, ease - 0.20);
    // Re-queue card to end of session
    S.fcCards.push(currentCard);
  } else if (rating === 'hard') {
    S.fcSession.reviewNeeded++;
    interval = Math.max(1, Math.round(prevRec.interval * 1.2));
    ease = Math.max(1.3, ease - 0.15);
    S.fcCards.push(currentCard);
  } else if (rating === 'good') {
    S.fcSession.known++;
    interval = Math.max(1, Math.round(prevRec.interval * ease));
  } else if (rating === 'easy') {
    S.fcSession.known++;
    interval = Math.max(1, Math.round(prevRec.interval * ease * 1.3));
    ease += 0.15;
  }

  // Persist spaced repetition parameters
  const dayMs = 24 * 60 * 60 * 1000;
  S.flashcardReviews[currentCard.term] = {
    difficulty: rating,
    ease: Number(ease.toFixed(2)),
    interval,
    lastReviewed: Date.now(),
    dueDate: Date.now() + (interval * dayMs)
  };
  saveState();
  updateSessionStatsUI();

  // Advance card with tactile rating feedback
  const cardEl = document.getElementById('fcCard');
  if (cardEl) {
    cardEl.classList.add('rated-' + rating);
    setTimeout(() => {
      cardEl.classList.remove('rated-' + rating);
      if (S.fcIdx < S.fcCards.length - 1) {
        S.fcIdx++;
        renderCard();
      } else {
        const retention = Math.round((S.fcSession.known / S.fcSession.reviewed) * 100);
        toast(`Active recall session complete! Reviewed ${S.fcSession.reviewed} cards (${retention}% retention rate).`, 'success', 6000);
      }
    }, 180);
  } else {
    if (S.fcIdx < S.fcCards.length - 1) {
      S.fcIdx++;
      renderCard();
    } else {
      const retention = Math.round((S.fcSession.known / S.fcSession.reviewed) * 100);
      toast(`Active recall session complete! Reviewed ${S.fcSession.reviewed} cards (${retention}% retention rate).`, 'success', 6000);
    }
  }
}

function undoFlashcardRating() {
  if (!fcHistory.length) {
    toast('No rating action to undo.', 'info');
    return;
  }
  const last = fcHistory.pop();
  S.fcIdx = last.idx;
  S.fcSession = last.session;
  if (last.prevReview) {
    S.flashcardReviews[last.card.term] = last.prevReview;
  } else {
    delete S.flashcardReviews[last.card.term];
  }
  saveState();
  updateSessionStatsUI();
  renderCard();
  toast('Undid previous card rating.', 'info');
}

function updateSessionStatsUI() {
  const revEl = document.getElementById('fcStatsReviewed');
  const knownEl = document.getElementById('fcStatsKnown');
  const neededEl = document.getElementById('fcStatsReview');
  const retEl = document.getElementById('fcStatsRetention');

  if (revEl) revEl.textContent = S.fcSession.reviewed;
  if (knownEl) knownEl.textContent = S.fcSession.known;
  if (neededEl) neededEl.textContent = S.fcSession.reviewNeeded;
  if (retEl) {
    const rate = S.fcSession.reviewed > 0 
      ? Math.round((S.fcSession.known / S.fcSession.reviewed) * 100) 
      : 100;
    retEl.textContent = rate + '%';
  }
}

// Attach keyboard shortcuts listener for Flashcards
window.addEventListener('keydown', (e) => {
  if (S.currentPage !== 'flashcards') return;
  const tag = (e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '');
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

  if (e.code === 'Space') {
    e.preventDefault();
    flipCard();
  } else if (e.key === '1') {
    e.preventDefault();
    rateFlashcard('again');
  } else if (e.key === '2') {
    e.preventDefault();
    rateFlashcard('hard');
  } else if (e.key === '3') {
    e.preventDefault();
    rateFlashcard('good');
  } else if (e.key === '4') {
    e.preventDefault();
    rateFlashcard('easy');
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevCard();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextCard();
  } else if (e.key.toLowerCase() === 'u') {
    e.preventDefault();
    undoFlashcardRating();
  }
});

// ─── DIAGNOSTIC ASSESSMENT & QUIZ ENGINE ──────────────────────────────────────
let quizMode = 'practice';
let quizTimerInterval = null;
let quizSecondsRemaining = 900; // 15 min

function setQuizMode(mode) {
  quizMode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(b => {
    b.classList.toggle('active', b.id === `quizMode${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
    b.setAttribute('aria-selected', b.classList.contains('active'));
  });

  const timerWrap = document.getElementById('quizTimerWrap');
  if (timerWrap) timerWrap.classList.toggle('hidden', mode !== 'exam');

  setupQuiz();
}

function setQuizPreset(count, mode = 'practice') {
  quizMode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(b => {
    b.classList.toggle('active', b.id === `quizMode${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
    b.setAttribute('aria-selected', b.classList.contains('active'));
  });

  const timerWrap = document.getElementById('quizTimerWrap');
  if (timerWrap) timerWrap.classList.toggle('hidden', mode !== 'exam');

  const countRange = document.getElementById('quizCountRange');
  const countLabel = document.getElementById('quizCountLabel');
  if (countRange) countRange.value = count;
  if (countLabel) countLabel.textContent = count;

  document.querySelectorAll('.quiz-preset-card').forEach(c => c.classList.remove('active'));
  if (count === 10 && mode === 'practice') document.getElementById('qpRapid10')?.classList.add('active');
  else if (count === 20 && mode === 'practice') document.getElementById('qpStandard20')?.classList.add('active');
  else if (mode === 'exam') document.getElementById('qpExam30')?.classList.add('active');
  else if (mode === 'weak') document.getElementById('qpWeakSpots')?.classList.add('active');

  setupQuiz();
  setTimeout(() => {
    const hud = document.getElementById('quizHud');
    if (hud) hud.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function setupQuiz() {
  S.quiz = null;
  S.quizAnswers = {};
  S.quizDone = false;

  clearInterval(quizTimerInterval);
  quizSecondsRemaining = 900;

  const scoreCard = document.getElementById('quizScoreCard');
  if (scoreCard) scoreCard.classList.add('hidden');

  const submitBtn = document.getElementById('quizSubmitBtn');
  const retryBtn = document.getElementById('quizRetryBtn');
  if (submitBtn) {
    submitBtn.classList.remove('hidden');
    submitBtn.textContent = 'Submit Assessment';
  }
  if (retryBtn) retryBtn.classList.add('hidden');

  const filter = document.getElementById('quizTopicSel')?.value || 'mixed';
  const targetCount = parseInt(document.getElementById('quizCountRange')?.value || '10', 10);

  const bank = window.QUIZ_BANK || (typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : { fillBlanks: [], mcq: [] });
  let fills = [...(bank.fillBlanks || [])];
  let mcqs = [...(bank.mcq || [])];

  // Populate Quiz Domain Selector with Volumes & Categories
  const qTopicSel = document.getElementById('quizTopicSel');
  if (qTopicSel && typeof KB !== 'undefined' && qTopicSel.options.length <= 2) {
    const cats = [...new Set(KB.map(t => t.category))];
    qTopicSel.innerHTML = '<option value="mixed">Comprehensive Curriculum (Mixed)</option>'
      + cats.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  // Filter questions based on mode or category
  if (quizMode === 'weak') {
    const weakTopics = getWeakTopics().map(w => w.topic.id);
    if (weakTopics.length > 0) {
      fills = fills.filter(q => weakTopics.includes(q.topic));
      mcqs = mcqs.filter(q => weakTopics.includes(q.topic));
    }
  } else if (filter !== 'mixed') {
    fills = fills.filter(q => q.category === filter || q.topic === filter || (q.topic && KB.find(t => t.id === q.topic && t.category === filter)));
    mcqs = mcqs.filter(q => q.category === filter || q.topic === filter || (q.topic && KB.find(t => t.id === q.topic && t.category === filter)));
  }

  // Shuffle
  fills.sort(() => Math.random() - 0.5);
  mcqs.sort(() => Math.random() - 0.5);

  const fillCount = Math.min(fills.length, Math.ceil(targetCount * 0.5));
  const mcqCount = Math.min(mcqs.length, targetCount - fillCount);

  fills = fills.slice(0, fillCount);
  mcqs = mcqs.slice(0, mcqCount);

  const subEl = document.getElementById('quiz-sub');
  if (subEl) {
    subEl.textContent = `${fills.length + mcqs.length} questions • Mode: ${quizMode.toUpperCase()} • Instant diagnostic verification`;
  }

  S.quiz = { fills, mcqs, category: filter };
  renderQuiz();

  // Start timer if in Exam Simulation mode
  if (quizMode === 'exam') {
    startQuizTimer();
  }
}

function startQuizTimer() {
  const timerVal = document.getElementById('quizTimerVal');
  clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    quizSecondsRemaining--;
    if (quizSecondsRemaining <= 0) {
      clearInterval(quizTimerInterval);
      toast('Time expired! Submitting examination.', 'info');
      submitQuiz();
      return;
    }
    const mins = Math.floor(quizSecondsRemaining / 60);
    const secs = quizSecondsRemaining % 60;
    if (timerVal) timerVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function renderQuiz() {
  const { fills, mcqs } = S.quiz;
  const total = fills.length + mcqs.length;
  
  // 1. Assessment Progress Tracker HUD
  let html = `
    <div class="quiz-hud" id="quizHud">
      <div class="quiz-hud-top">
        <span class="quiz-hud-status"><span id="quizHudAnsCount">0</span> of ${total} Questions Answered</span>
        <span id="quizHudPct" class="mono" style="font-weight:700;color:var(--primary)">0% Completed</span>
      </div>
      <div class="quiz-hud-progress">
        <div class="quiz-hud-fill" id="quizHudFill" style="width:0%"></div>
      </div>
      <div class="quiz-qnav" id="quizQNav">
        ${Array.from({ length: total }, (_, idx) => `
          <button type="button" class="qnav-dot" id="qnav-${idx}" onclick="jumpToQuizQuestion(${idx})" title="Jump to question ${idx + 1}" aria-label="Question ${idx + 1}">${idx + 1}</button>
        `).join('')}
      </div>
    </div>
  `;

  // 2. Section A: Operationalized Cloze Recall
  if (fills.length > 0) {
    html += `
      <div class="quiz-section-banner">
        <span class="quiz-section-tag">Section A · Cloze Criteria Blueprint</span>
        <h3 class="quiz-section-title">Operationalized Diagnostic Criteria Recall</h3>
        <p class="quiz-section-desc">Fill in the precise diagnostic terms aligned with DSM-5-TR and ICD-11 operational definitions.</p>
      </div>
    `;
    fills.forEach((q, i) => {
      html += `
        <div class="quiz-card" id="qf-${i}">
          <div class="quiz-card-hdr">
            <span class="quiz-q-num">Question ${i + 1} of ${total}</span>
            <span class="quiz-cat-pill">${esc(q.category || 'Diagnostic Recall')}</span>
            <span class="quiz-type-pill">Cloze Recall</span>
          </div>
          <div class="quiz-q-prompt"><b>Q${i + 1}.</b> ${esc(q.q)}</div>
          <div class="quiz-input-wrapper">
            <div class="quiz-input-inner">
              <svg class="quiz-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <input class="q-input" id="fi-${i}" type="text" placeholder="Type canonical clinical term or criterion..." oninput="handleFillInput(${i}, this.value)" autocomplete="off" spellcheck="false" />
            </div>
            ${q.hint ? `<button type="button" class="quiz-hint-toggle" onclick="toggleQuizHint(${i})" aria-label="Toggle hint">💡 Clue</button>` : ''}
          </div>
          ${q.hint ? `<div class="quiz-hint-box hidden" id="hint-f${i}"><strong>Clinical Clue:</strong> ${esc(q.hint)}</div>` : ''}
          <div class="q-fb hidden" id="fb-f${i}"></div>
        </div>
      `;
    });
  }

  // 3. Section B: Differential MCQs & Case Vignettes
  if (mcqs.length > 0) {
    html += `
      <div class="quiz-section-banner">
        <span class="quiz-section-tag" style="color:var(--primary);background:var(--primary-light)">Section B · Differential Case Vignettes</span>
        <h3 class="quiz-section-title">Diagnostic Evaluation &amp; Multiple Choice</h3>
        <p class="quiz-section-desc">Evaluate case presentations, rule out confounders, and verify evidence-based treatment indications.</p>
      </div>
    `;
    mcqs.forEach((q, i) => {
      const qIdx = fills.length + i;
      html += `
        <div class="quiz-card" id="qm-${i}">
          <div class="quiz-card-hdr">
            <span class="quiz-q-num">Question ${qIdx + 1} of ${total}</span>
            <span class="quiz-cat-pill">${esc(q.category || 'Diagnostic Evaluation')}</span>
            <span class="quiz-type-pill">Clinical Differential</span>
          </div>
          <div class="quiz-q-prompt"><b>Q${qIdx + 1}.</b> ${esc(q.q)}</div>
          <div class="mcq-opts-grid ${q.opts.length <= 4 && q.opts.every(o => o.length < 55) ? 'two-col' : ''}">
            ${q.opts.map((o, j) => `
              <button class="mcq-opt" id="mo-${i}-${j}" onclick="selectMCQ(${i},${j})">
                <span class="mcq-opt-letter">${['A','B','C','D'][j]}</span>
                <span class="mcq-opt-text">${esc(o)}</span>
              </button>
            `).join('')}
          </div>
          <div class="mcq-exp hidden" id="mex-${i}">
            <div class="mcq-exp-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>DIAGNOSTIC RATIONALE &amp; CLINICAL KEY</span>
            </div>
            <div class="mcq-exp-body">${esc(q.exp || '')}</div>
          </div>
        </div>
      `;
    });
  }

  document.getElementById('quizBody').innerHTML = html;
  updateQuizProgressHUD();
}

function toggleQuizHint(i) {
  const box = document.getElementById('hint-f' + i);
  if (box) box.classList.toggle('hidden');
}

function jumpToQuizQuestion(idx) {
  const { fills } = S.quiz || { fills: [] };
  const targetId = idx < fills.length ? `qf-${idx}` : `qm-${idx - fills.length}`;
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('flash-jump');
    setTimeout(() => el.classList.remove('flash-jump'), 1500);
  }
}

function updateQuizProgressHUD() {
  if (!S.quiz) return;
  const { fills, mcqs } = S.quiz;
  const total = fills.length + mcqs.length;
  let answered = 0;

  fills.forEach((_, i) => {
    const val = (S.quizAnswers['f' + i] || '').trim();
    const dot = document.getElementById('qnav-' + i);
    if (val.length > 0) {
      answered++;
      if (dot) dot.classList.add('answered');
    } else {
      if (dot) dot.classList.remove('answered');
    }
  });

  mcqs.forEach((_, i) => {
    const hasAns = S.quizAnswers['m' + i] !== undefined;
    const dot = document.getElementById('qnav-' + (fills.length + i));
    if (hasAns) {
      answered++;
      if (dot) dot.classList.add('answered');
    } else {
      if (dot) dot.classList.remove('answered');
    }
  });

  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
  const countEl = document.getElementById('quizHudAnsCount');
  const pctEl = document.getElementById('quizHudPct');
  const fillEl = document.getElementById('quizHudFill');
  if (countEl) countEl.textContent = answered;
  if (pctEl) pctEl.textContent = pct + '% Completed';
  if (fillEl) fillEl.style.width = pct + '%';

  const submitBtn = document.getElementById('quizSubmitBtn');
  if (submitBtn && !S.quizDone) {
    if (answered === total && total > 0) {
      submitBtn.textContent = `✓ Submit Assessment (All ${total} Answered)`;
    } else {
      submitBtn.textContent = `Submit Assessment (${answered} of ${total} Answered)`;
    }
  }
}

function handleFillInput(idx, val) {
  S.quizAnswers['f' + idx] = val;
  updateQuizProgressHUD();
  if (quizMode === 'practice' && val.trim().length >= 3) {
    const q = S.quiz.fills[idx];
    const isCorrect = checkFillBlank(val, q);
    const fb = document.getElementById('fb-f' + idx);
    const dot = document.getElementById('qnav-' + idx);
    if (isCorrect && fb) {
      fb.classList.remove('hidden');
      fb.className = 'q-fb ok';
      fb.textContent = '✓ Canonical Criterion Verified';
      if (dot) { dot.classList.add('correct'); dot.classList.remove('wrong'); }
    }
  }
}

function selectMCQ(qi, optIdx) {
  if (S.quizDone) return;
  S.quizAnswers['m' + qi] = optIdx;
  document.querySelectorAll(`#qm-${qi} .mcq-opt`).forEach((b, j) => {
    b.classList.toggle('selected', j === optIdx);
  });
  updateQuizProgressHUD();

  // Practice mode: instant feedback
  if (quizMode === 'practice') {
    const q = S.quiz.mcqs[qi];
    const { fills } = S.quiz;
    const dot = document.getElementById('qnav-' + (fills.length + qi));
    const isCorrect = optIdx === q.correct;
    if (dot) {
      dot.classList.add(isCorrect ? 'correct' : 'wrong');
    }
    document.querySelectorAll(`#qm-${qi} .mcq-opt`).forEach((b, j) => {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      else if (j === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const exp = document.getElementById('mex-' + qi);
    if (exp) exp.classList.remove('hidden');
  }
}

function submitQuiz() {
  if (S.quizDone) return;
  S.quizDone = true;
  clearInterval(quizTimerInterval);

  const { fills, mcqs, category } = S.quiz;
  let correct = 0, total = 0;
  const byTopic = {};
  const missedQuestions = [];

  fills.forEach((q, i) => {
    total++;
    const ans = S.quizAnswers['f' + i] || '';
    const ok = checkFillBlank(ans, q);
    if (ok) correct++;
    else missedQuestions.push(q);

    const dot = document.getElementById('qnav-' + i);
    if (dot) dot.className = 'qnav-dot ' + (ok ? 'correct' : 'wrong');

    const topicId = q.topic || (KB.find(t => t.category === q.category)?.id) || 'foundations';
    byTopic[topicId] = byTopic[topicId] || { correct: 0, total: 0 };
    byTopic[topicId].total++;
    if (ok) byTopic[topicId].correct++;

    const inp = document.getElementById('fi-' + i);
    if (inp) inp.disabled = true;
    const box = document.getElementById('qf-' + i);
    if (box) box.classList.add(ok ? 'correct' : 'wrong');
    const fb = document.getElementById('fb-f' + i);
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'q-fb ' + (ok ? 'ok' : 'no');
      fb.textContent = ok ? '✓ Correct Canonical Answer' : '✗ Canonical Key: ' + (q.answers ? q.answers[0] : q.a);
    }
  });

  mcqs.forEach((q, i) => {
    total++;
    const sel = S.quizAnswers['m' + i];
    const ok = sel === q.correct;
    if (ok) correct++;
    else missedQuestions.push(q);

    const dot = document.getElementById('qnav-' + (fills.length + i));
    if (dot) dot.className = 'qnav-dot ' + (ok ? 'correct' : 'wrong');

    const topicId = q.topic || (KB.find(t => t.category === q.category)?.id) || 'foundations';
    byTopic[topicId] = byTopic[topicId] || { correct: 0, total: 0 };
    byTopic[topicId].total++;
    if (ok) byTopic[topicId].correct++;

    document.querySelectorAll(`#qm-${i} .mcq-opt`).forEach((b, j) => {
      b.disabled = true;
      if (j === q.correct) b.classList.add('correct');
      else if (j === sel && !ok) b.classList.add('wrong');
    });
    const ex = document.getElementById('mex-' + i);
    if (ex) ex.classList.remove('hidden');
  });

  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const statusBadge = pct >= 80 ? 'EXEMPLARY CLINICAL MASTERY' : pct >= 60 ? 'COMPETENT ASSESSMENT' : 'REVISION RECOMMENDED';
  const msg = pct >= 80 
    ? 'Outstanding diagnostic accuracy. Ready for university clinical examination.' 
    : pct >= 60 ? 'Solid clinical performance. Review the highlighted diagnostic rationales and criteria.' : 'Review core criteria in Deep Study mode before retrying.';

  // Save attempt with granular per-topic breakdown
  S.quizAttempts.push({
    timestamp: Date.now(),
    score: correct,
    total,
    pct,
    topic: category || 'mixed',
    byTopic
  });
  S.quizCount++;
  saveState();
  updateNavMastery();

  // Render Score Card with Per-Topic Breakdown
  const sc = document.getElementById('quizScoreCard');
  let topicBreakdownHtml = '';
  Object.keys(byTopic).forEach(tid => {
    const tObj = KB.find(k => k.id === tid);
    const tName = tObj ? tObj.name : tid;
    const stat = byTopic[tid];
    const tPct = Math.round((stat.correct / stat.total) * 100);
    topicBreakdownHtml += `
      <div class="quiz-topic-row">
        <span>${tName}</span>
        <span class="mono" style="font-weight:600">${stat.correct}/${stat.total} (${tPct}%)</span>
      </div>`;
  });

  sc.innerHTML = `
    <div class="score-badge-ribbon">${statusBadge}</div>
    <div class="score-number">${correct} / ${total}</div>
    <div class="score-pct">${pct}% Diagnostic Accuracy</div>
    <div class="score-msg">${msg}</div>
    <div class="score-details">
      <div class="score-detail"><div class="score-detail-value">${pct >= 70 ? 'PASS' : 'REVISE'}</div><div class="score-detail-label">Examination Status</div></div>
      <div class="score-detail"><div class="score-detail-value">${S.quizCount}</div><div class="score-detail-label">Assessments Taken</div></div>
    </div>
    ${topicBreakdownHtml ? `
      <div class="quiz-topic-breakdown">
        <div class="card-eyebrow" style="margin-bottom:8px">DOMAIN ACCURACY BREAKDOWN</div>
        ${topicBreakdownHtml}
      </div>` : ''}
    ${missedQuestions.length > 0 ? `
      <button class="btn btn-outline btn-sm" style="margin-top:var(--sp-4)" onclick="addMissedToFlashcards()">
        <svg class="icon icon-xs" aria-hidden="true"><use href="#ps-icon-cards"></use></svg>
        <span>Add ${missedQuestions.length} Missed Items to Flashcard Queue</span>
      </button>` : ''}
  `;

  sc.classList.remove('hidden');
  document.getElementById('quizSubmitBtn').classList.add('hidden');
  document.getElementById('quizRetryBtn').classList.remove('hidden');
  sc.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addMissedToFlashcards() {
  toast('Missed questions queued for active spaced retrieval.', 'success');
}

function resetQuiz() {
  setupQuiz();
}

// ─── UNIVERSITY EXAMINATION SUITE (PAPERS A & B, QUESTION BANK & COACH) ───────
let currentExamTab = 'paperA';
let coachTimerInterval = null;
let coachSeconds = 0;

function selectExamSuiteTab(tabName, btn) {
  currentExamTab = tabName;
  document.querySelectorAll('.exam-suite-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  } else {
    const defaultBtn = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  const paperEl = document.getElementById('examPaper');
  const qbEl = document.getElementById('examQuestionBank');
  const coachEl = document.getElementById('examCoach');

  if (tabName === 'paperA' || tabName === 'paperB') {
    if (paperEl) paperEl.classList.remove('hidden');
    if (qbEl) qbEl.classList.add('hidden');
    if (coachEl) coachEl.classList.add('hidden');
    renderExam();
  } else if (tabName === 'qb') {
    if (paperEl) paperEl.classList.add('hidden');
    if (qbEl) qbEl.classList.remove('hidden');
    if (coachEl) coachEl.classList.add('hidden');
    renderQuestionBank();
  } else if (tabName === 'coach') {
    if (paperEl) paperEl.classList.add('hidden');
    if (qbEl) qbEl.classList.add('hidden');
    if (coachEl) coachEl.classList.remove('hidden');
    renderCoachWorkspace();
  }
}

function renderExam() {
  const e = EXAM_DATA;
  const paperKey = currentExamTab === 'paperB' ? 'paperB' : 'paperA';
  const paper = (e && e[paperKey]) || e;
  const sa = S.showAnswers;

  const q1 = paper.q1 || e.q1 || { marks: 10, label: 'Section A', items: [] };
  const q2 = paper.q2 || e.q2 || { marks: 10, label: 'Section B', A: '', B: '' };
  const q3 = paper.q3 || e.q3 || { marks: 10, label: 'Section C', topics: [] };

  let html = `
  <div class="exam-cover">
    <div class="exam-board-emblem">
      <img src="PsychStudy Brain Learning Logo.png" alt="PsychStudy Examination Board" class="exam-logo-img" />
    </div>
    <div class="exam-cover-tag">${(paper.subject || e.subject || 'PSYCHOLOGY OF ADJUSTMENT').toUpperCase()}</div>
    <h1>${paper.paperTitle || (paperKey === 'paperB' ? 'Examination Paper B: Clinical Assessment & Adjustment Blueprint' : 'Examination Paper A: University Undergraduate Standard')}</h1>
    <div class="exam-meta">
      <span>⏱ Time Allowed: ${paper.time || '1 Hour'}</span>
      <span>📊 Total Marks: ${paper.total || 30} Marks</span>
      <span>Comprehensive Standardized Syllabus Assessment</span>
    </div>
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.1</span>
      <span class="marks-badge" style="background:var(--blue);color:#FFF">${q1.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">${esc(q1.label || 'Section A — Fill in the Blanks')}</div>
    ${(q1.items || []).map((it, i) => `
      <div class="blank-item">
        <span class="blank-num">(${i + 1})</span>
        <span style="flex:1">${esc(it.q)}</span>
        ${sa ? `<span class="blank-ans" style="color:var(--primary);font-weight:600">→ ${esc(it.a)}</span>` : ''}
      </div>
    `).join('')}
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.2</span>
      <span class="marks-badge" style="background:var(--primary);color:#FFF">${q2.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">${esc(q2.label || 'Section B — Long Answer (Answer Either A or B)')}</div>
    <div class="long-opt"><b style="color:var(--primary)">A.</b> ${esc(q2.A || '')}</div>
    <div class="exam-or">— OR —</div>
    <div class="long-opt"><b style="color:var(--blue)">B.</b> ${esc(q2.B || '')}</div>
    ${sa && q2.hints?.length ? `
      <div class="hints-box" style="margin-top:var(--sp-3);background:var(--surface-inset);padding:var(--sp-3);border-radius:var(--radius-xs)">
        <div class="hl" style="font-weight:600;margin-bottom:4px">✏️ Model Structure &amp; Examiner Criteria:</div>
        <ul>${q2.hints.map(h => `<li>${esc(h)}</li>`).join('')}</ul>
      </div>` : ''}
  </div>

  <div class="exam-q-block">
    <div class="exam-q-head">
      <span class="exam-q-num">Q.3</span>
      <span class="marks-badge" style="background:var(--mint);color:#065F46">${q3.marks || 10} Marks</span>
    </div>
    <div class="exam-q-sub">${esc(q3.label || 'Section C — Write Short Notes (Any Two)')}</div>
    ${(q3.topics || []).map((sn, i) => `
      <div class="sn-item">
        <b>(${i + 1})</b> ${esc(sn.t || sn.title || '')}
        ${sa && sn.pts?.length ? `
          <ul class="sn-pts" style="margin-top:4px">${sn.pts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        ` : ''}
      </div>
    `).join('')}
  </div>`;

  document.getElementById('examPaper').innerHTML = html;
}

function toggleAnswers() {
  S.showAnswers = !S.showAnswers;
  const txt = document.getElementById('toggleAnsText');
  if (txt) txt.textContent = S.showAnswers ? 'Hide Model Answers' : 'Reveal Model Answers';
  renderExam();
}

// ─── 16-QUESTION BANK ACCORDION ───────────────────────────────────────────────
function renderQuestionBank(filter = '') {
  const qbList = document.getElementById('qbList');
  if (!qbList) return;

  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  let items = [...qb];

  if (filter) {
    const q = filter.toLowerCase();
    items = items.filter(it => 
      (it.title || it.question || '').toLowerCase().includes(q) ||
      (it.topic || (it.chapters && it.chapters.join(' ')) || '').toLowerCase().includes(q) ||
      (it.keyTerms || it.keywords || []).some(k => k.toLowerCase().includes(q)) ||
      (it.modelAnswer || '').toLowerCase().includes(q) ||
      (it.structure || []).some(s => (typeof s === 'string' ? s : `${s.heading || ''} ${(s.points||[]).join(' ')}`).toLowerCase().includes(q))
    );
  }

  qbList.innerHTML = items.map((q, i) => `
    <div class="qb-accordion-item" id="qb-item-${i}">
      <button class="qb-header" onclick="toggleQbItem(${i})">
        <div class="qb-title-wrap">
          <span class="badge-source">${q.id || 'QB-LA-' + (i+1)}</span>
          <span class="marks-badge" style="background:var(--blue);color:#FFF">${q.marks || 15} Marks</span>
          <strong style="font-size:var(--text-sm)">${esc(q.title || q.question || '')}</strong>
        </div>
        <svg class="icon icon-xs chevron" aria-hidden="true"><use href="#ps-icon-chevron-down"></use></svg>
      </button>
      <div class="qb-body">
        <div class="qb-meta-row" style="margin-bottom:var(--sp-3);display:flex;gap:var(--sp-3);flex-wrap:wrap">
          <span class="tag-chip">Domain: ${esc(q.topic || (q.chapters && q.chapters.join(', ')) || 'Curriculum')}</span>
          <button class="btn btn-primary btn-xs" onclick="startCoachWithQuestion('${q.id || i}')">Practice in Live Coach ↗</button>
        </div>
        
        ${q.structure ? `
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow">ESSAY STRUCTURE CHECKLIST</div>
            <ul>${q.structure.map(s => {
              const label = typeof s === 'string' ? esc(s) : `<strong>${esc(s.heading)}</strong>: ${esc((s.points || []).join('; '))}`;
              return `<li>${label}</li>`;
            }).join('')}</ul>
          </div>` : ''}

        ${q.modelAnswer ? `
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow" style="color:var(--primary)">15-MARK COMPREHENSIVE MODEL ANSWER (600–800 WORDS)</div>
            <div class="model-essay-prose">${renderMarkdown(q.modelAnswer)}</div>
          </div>` : ''}

        ${q.shortNote ? `
          <div class="qb-section" style="margin-bottom:var(--sp-3)">
            <div class="card-eyebrow" style="color:var(--mint)">5-MARK CONCISE REVISION NOTE (170–220 WORDS)</div>
            <div class="model-essay-prose">${renderMarkdown(q.shortNote)}</div>
          </div>` : ''}

        ${(q.keyTerms || q.keywords) && (q.keyTerms || q.keywords).length ? `
          <div class="qb-section">
            <div class="card-eyebrow">EXAMINER HIGH-YIELD KEYWORDS TO HIT</div>
            <div class="keywords-cloud">${(q.keyTerms || q.keywords).map(k => `<span class="kw-chip">✓ ${esc(k)}</span>`).join('')}</div>
          </div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleQbItem(idx) {
  const el = document.getElementById('qb-item-' + idx);
  if (el) el.classList.toggle('active');
}

function filterQuestionBank(val) {
  renderQuestionBank(val);
}

// ─── LIVE ANSWER-WRITING COACH ────────────────────────────────────────────────
let currentCoachQuestion = null;

function renderCoachWorkspace() {
  const sel = document.getElementById('coachPromptSelect');
  if (!sel) return;
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];

  sel.innerHTML = '<option value="">— Select a University Long-Answer Prompt to Practice —</option>'
    + qb.map((q, idx) => {
      const txt = q.title || q.question || ('Prompt ' + (idx + 1));
      return `<option value="${idx}">[${q.id || 'QB-' + (idx+1)}] ${esc(txt.slice(0, 85))}…</option>`;
    }).join('');

  if (currentCoachQuestion) {
    loadCoachQuestion(currentCoachQuestion);
  }
}

function selectCoachPrompt(idx) {
  if (idx === '') return;
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  const q = qb[idx];
  if (q) loadCoachQuestion(q);
}

function startCoachWithQuestion(qId) {
  selectExamSuiteTab('coach');
  const qb = (window.EXAM_DATA && window.EXAM_DATA.questionBank) || [];
  const q = qb.find(it => it.id === qId) || qb[qId];
  if (q) loadCoachQuestion(q);
}

function loadCoachQuestion(q) {
  currentCoachQuestion = q;
  const titleEl = document.getElementById('coachTitle');
  const targetEl = document.getElementById('coachWordTarget');
  const checklistEl = document.getElementById('coachChecklist');
  const modelPanel = document.getElementById('coachModelAnswerPanel');
  const modelText = document.getElementById('coachModelAnswerText');

  if (titleEl) titleEl.textContent = q.title || q.question || 'University Essay Prompt';
  if (targetEl) targetEl.textContent = q.marks === 5 ? '200' : '650';
  if (modelPanel) modelPanel.classList.add('hidden');
  if (modelText) modelText.innerHTML = renderMarkdown(q.modelAnswer || q.shortNote || 'No model answer available.');

  if (checklistEl) {
    const rawItems = q.structure || ['Introduction & Operationalized Definition', 'Clinical Diagnostic Criteria Checklist', 'Biopsychosocial Etiological Framework', 'Evidence-Based Interventions', 'Conclusion & Clinical Prognosis'];
    checklistEl.innerHTML = rawItems.map((it, i) => {
      const label = typeof it === 'string' ? it : (it.heading || it.title || JSON.stringify(it));
      return `
      <label class="criteria-item" style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px">
        <input type="checkbox" id="coach-chk-${i}" />
        <span style="font-size:var(--text-xs)">${esc(label)}</span>
      </label>
    `;
    }).join('');
  }

  // Start coach writing timer
  clearInterval(coachTimerInterval);
  coachSeconds = 0;
  coachTimerInterval = setInterval(() => {
    coachSeconds++;
    const m = Math.floor(coachSeconds / 60);
    const s = coachSeconds % 60;
    const tEl = document.getElementById('coachTimerVal');
    if (tEl) tEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }, 1000);
}

function updateCoachWordCount() {
  const textarea = document.getElementById('coachAnswerEditor');
  const countEl = document.getElementById('coachWordCount');
  const badgeEl = document.getElementById('coachPacingBadge');
  if (!textarea || !countEl) return;

  const text = textarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  countEl.textContent = words;

  const target = parseInt(document.getElementById('coachWordTarget')?.textContent || '650', 10);
  if (badgeEl) {
    if (words >= target) {
      badgeEl.textContent = 'Target Achieved!';
      badgeEl.style.color = 'var(--mint)';
    } else if (words >= target * 0.7) {
      badgeEl.textContent = 'Approaching target';
      badgeEl.style.color = 'var(--primary)';
    } else {
      badgeEl.textContent = 'Writing Active';
      badgeEl.style.color = 'var(--text-3)';
    }
  }
}

function resetCoachAnswer() {
  const textarea = document.getElementById('coachAnswerEditor');
  if (textarea) textarea.value = '';
  updateCoachWordCount();
}

function revealCoachModelAnswer() {
  const panel = document.getElementById('coachModelAnswerPanel');
  if (panel) {
    panel.classList.toggle('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}


// ─── ENHANCED PDF IMPORT PIPELINE ─────────────────────────────────────────────
async function importPDF(event) {
  const file = event.target.files[0];
  if (!file || !file.name.endsWith('.pdf')) { toast('Please select a PDF file.', 'error'); return; }
  showLoading('📄 1/4 Reading PDF File…');

  try {
    if (!window.pdfjsLib) {
      toast('PDF.js loading… Please retry in a moment.', 'error');
      hideLoading();
      return;
    }
    const ab = await file.arrayBuffer();
    showLoading('🔍 2/4 Extracting Text…');
    const pdf = await pdfjsLib.getDocument({ data: ab }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const pg = await pdf.getPage(i);
      const ct = await pg.getTextContent();
      text += ct.items.map(x => x.str).join(' ') + '\n';
    }

    showLoading('🧠 3/4 Detecting Psychology Concepts…');
    await new Promise(r => setTimeout(r, 400)); // smooth pipeline visual feedback

    showLoading('⚡ 4/4 Generating Flashcards & Workspace Note…');
    await new Promise(r => setTimeout(r, 400));

    hideLoading();
    const wordCount = text.trim().split(/\s+/).length;

    // Create a note automatically from the PDF
    const notes = lsGet('psa_notes', []);
    const pdfNote = {
      id: Date.now().toString(),
      title: `📄 Imported: ${file.name}`,
      body: `PDF Content Summary (~${wordCount} words):\n\n${text.slice(0, 1200)}...`,
      topic: 'General',
      topicName: 'PDF Import',
      date: new Date().toLocaleDateString('en-IN'),
      pinned: true
    };
    notes.unshift(pdfNote);
    lsSet('psa_notes', notes);

    toast(`✅ PDF imported successfully! Created note & extracted ~${wordCount.toLocaleString()} words.`, 'success', 5000);
    event.target.value = '';
    renderDashboard();
  } catch (err) {
    hideLoading();
    toast('Error reading PDF: ' + err.message, 'error');
    event.target.value = '';
  }
}

// ─── COMMAND PALETTE & GLOBAL SEARCH ─────────────────────────────────────────
function openCmdPalette() {
  const pal = document.getElementById('cmdPalette');
  const inp = document.getElementById('cmdInput');
  if (pal && inp) {
    pal.classList.remove('hidden');
    inp.value = '';
    inp.focus();
    filterCmdPalette('');
  }
}

function closeCmdPalette(e) {
  const pal = document.getElementById('cmdPalette');
  if (pal) pal.classList.add('hidden');
}

function filterCmdPalette(query) {
  const resultsEl = document.getElementById('cmdResults');
  if (!resultsEl) return;
  query = query.toLowerCase().trim();

  let html = '';

  // Quick actions
  const actions = [
    { name: 'Dashboard', icon: '📊', action: () => navigate('dashboard') },
    { name: 'Start Studying', icon: '📚', action: () => navigate('study') },
    { name: 'Active Recall Flashcards', icon: '🃏', action: () => navigate('flashcards') },
    { name: 'Practice Quiz', icon: '✏️', action: () => navigate('quiz') },
    { name: 'Personal Notes Workspace', icon: '📝', action: () => navigate('notes') },
    { name: 'Exam Paper', icon: '📋', action: () => navigate('exam') },
    { name: 'Clinical Bibliography (APA-7 References)', icon: '📚', action: () => openReferencesModal() },
    { name: 'Brain Atlas (Plate I)', icon: '🧠', action: () => openExploreItem('brain') },
    { name: 'Clinical Lexicon (A–Z)', icon: '📖', action: () => openExploreItem('lexicon') },
    { name: 'Concept Map ("Constellation")', icon: '✨', action: () => openExploreItem('constellation') },
    { name: 'Historical Care Timeline', icon: '⏳', action: () => openExploreItem('timeline') },
    { name: 'Differential Diagnosis Trainer', icon: '🔬', action: () => openExploreItem('differential') },
    { name: 'Focus Timer & Breathing Orb', icon: '⏱', action: () => openFocusTimerModal() },
    { name: 'Support & Crisis Helplines', icon: '☎️', action: () => openExploreItem('support') },
    { name: 'Settings & Data Backup', icon: '⚙️', action: () => openSettingsModal() },
    { name: 'Toggle Dark / Light Theme', icon: '🌙', action: () => toggleTheme() },
  ];

  const matchedActions = actions.filter(a => a.name.toLowerCase().includes(query));
  if (matchedActions.length) {
    html += `<div class="cmd-group-label">Actions</div>`;
    matchedActions.forEach(a => {
      html += `<div class="cmd-item" onclick="executeCmdAction('${esc(a.name)}')">
        <span class="cmd-item-icon">${a.icon}</span>
        <span class="cmd-item-text">${esc(a.name)}</span>
      </div>`;
    });
  }

  // Topics
  const matchedTopics = KB.filter(t => (t.name + ' ' + t.category + ' ' + t.preview).toLowerCase().includes(query));
  if (matchedTopics.length) {
    html += `<div class="cmd-group-label">Topics</div>`;
    matchedTopics.slice(0, 6).forEach(t => {
      html += `<div class="cmd-item" onclick="openStudyTopic('${esc(t.id)}');closeCmdPalette();">
        <span class="cmd-item-icon">📖</span>
        <span class="cmd-item-text">${esc(t.name)}</span>
        <span class="cmd-item-hint">${esc(t.category)}</span>
      </div>`;
    });
  }

  // Notes
  const notes = lsGet('psa_notes', []);
  const matchedNotes = notes.filter(n => (n.title + ' ' + n.body).toLowerCase().includes(query));
  if (matchedNotes.length) {
    html += `<div class="cmd-group-label">Notes</div>`;
    matchedNotes.slice(0, 4).forEach(n => {
      html += `<div class="cmd-item" onclick="navigate('notes');closeCmdPalette();">
        <span class="cmd-item-icon">📝</span>
        <span class="cmd-item-text">${esc(n.title)}</span>
        <span class="cmd-item-hint">${esc(n.topicName || 'General')}</span>
      </div>`;
    });
  }

  if (!html) {
    html = `<div class="cmd-empty">No results found for "${esc(query)}"</div>`;
  }

  resultsEl.innerHTML = html;
  window._cmdActions = actions;
}

function executeCmdAction(name) {
  const act = window._cmdActions?.find(a => a.name === name);
  if (act) {
    act.action();
    closeCmdPalette();
  }
}

// ─── SHELL, NAVIGATION & EXPLORE CONTROLS ─────────────────────────────────────
function updateNavMastery() {
  const m = calculateOverallMastery();
  const ring = document.getElementById('navMasteryRing');
  const txt = document.getElementById('navMasteryText');
  if (ring) ring.setAttribute('stroke-dasharray', `${m}, 100`);
  if (txt) txt.textContent = `${m}%`;
}

function toggleExploreDropdown(e) {
  e?.stopPropagation();
  const wrap = document.getElementById('exploreDropdownWrap');
  if (!wrap) return;
  const isOpen = wrap.classList.toggle('open');
  const btn = document.getElementById('exploreBtn');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}

function closeExploreDropdown() {
  const wrap = document.getElementById('exploreDropdownWrap');
  if (wrap) wrap.classList.remove('open');
  const btn = document.getElementById('exploreBtn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function openExploreItem(type) {
  closeExploreDropdown();
  if (type === 'brain') {
    openBrainModal();
  } else if (type === 'constellation') {
    openConstellationModal();
  } else if (type === 'timeline') {
    openTimelineModal();
  } else if (type === 'lexicon') {
    openLexiconModal();
  } else if (type === 'differential') {
    openTrainerModal();
  } else if (type === 'references' || type === 'refs' || type === 'bibliography') {
    openReferencesModal();
  } else if (type === 'support') {
    openSupportModal();
  }
}

function toggleMobileNav() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('open');
}

function openMobileMoreSheet() {
  const sheet = document.getElementById('mobileMoreSheet');
  if (sheet) sheet.classList.remove('hidden');
}

function closeMobileMoreSheet(e) {
  if (e && e.target && e.target !== document.getElementById('mobileMoreSheet') && !e.target.closest('.icon-btn')) {
    return;
  }
  const sheet = document.getElementById('mobileMoreSheet');
  if (sheet) sheet.classList.add('hidden');
}

// ─── SETTINGS & PREFERENCES ENGINE ────────────────────────────────────────────
function openSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('hidden');

  // Update pills state
  const currentTheme = lsGet('psa_theme_mode', 'light');
  document.getElementById('pillThemeLight')?.classList.toggle('active', currentTheme === 'light');
  document.getElementById('pillThemeDark')?.classList.toggle('active', currentTheme === 'dark');
  document.getElementById('pillThemeSystem')?.classList.toggle('active', currentTheme === 'system');

  const currentSize = lsGet('psa_reader_size', 'md');
  document.getElementById('pillFontS')?.classList.toggle('active', currentSize === 'sm');
  document.getElementById('pillFontM')?.classList.toggle('active', currentSize === 'md');
  document.getElementById('pillFontL')?.classList.toggle('active', currentSize === 'lg');

  const reduceMotion = lsGet('psa_reduce_motion', false);
  const motionToggle = document.getElementById('reduceMotionToggle');
  if (motionToggle) motionToggle.checked = reduceMotion;
}

function closeSettingsModal(e) {
  if (e && e.target && e.target !== document.getElementById('settingsModal') && !e.target.closest('.icon-btn')) {
    return;
  }
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('hidden');
}

function setAppTheme(mode) {
  lsSet('psa_theme_mode', mode);
  document.getElementById('pillThemeLight')?.classList.toggle('active', mode === 'light');
  document.getElementById('pillThemeDark')?.classList.toggle('active', mode === 'dark');
  document.getElementById('pillThemeSystem')?.classList.toggle('active', mode === 'system');

  if (mode === 'system') {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', mode);
    lsSet('psa_theme', mode);
    updateThemeIcon(mode);
  }
  toast(`Theme set to ${mode.toUpperCase()}`, 'info', 2000);
}

function setReaderFontSize(size) {
  lsSet('psa_reader_size', size);
  document.getElementById('pillFontS')?.classList.toggle('active', size === 'sm');
  document.getElementById('pillFontM')?.classList.toggle('active', size === 'md');
  document.getElementById('pillFontL')?.classList.toggle('active', size === 'lg');

  document.body.classList.remove('reader-size-sm', 'reader-size-md', 'reader-size-lg');
  document.body.classList.add('reader-size-' + size);
  toast(`Reading size updated to ${size.toUpperCase()}`, 'info', 2000);
}

function toggleReducedMotion(reduced) {
  lsSet('psa_reduce_motion', reduced);
  if (reduced) {
    document.documentElement.classList.add('reduce-motion');
  } else {
    document.documentElement.classList.remove('reduce-motion');
  }
  toast(`Reduced motion ${reduced ? 'enabled' : 'disabled'}`, 'info', 2000);
}

function exportUserData() {
  const data = {
    exportDate: new Date().toISOString(),
    version: '2.0',
    progress: lsGet('psychstudy_progress', {}),
    reviews: lsGet('psychstudy_fc_reviews', {}),
    attempts: lsGet('psychstudy_quiz_attempts', []),
    notes: lsGet('psa_notes', []),
    quizCount: lsGet('psa_quizcount', 0),
    theme: lsGet('psa_theme', 'light'),
    lastTopic: lsGet('psychstudy_last_topic', null)
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `psychstudy-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Learning data backup exported successfully.', 'success');
}

function importUserData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.progress) lsSet('psychstudy_progress', data.progress);
      if (data.reviews) lsSet('psychstudy_fc_reviews', data.reviews);
      if (data.attempts) lsSet('psychstudy_quiz_attempts', data.attempts);
      if (data.notes) lsSet('psa_notes', data.notes);
      if (data.quizCount !== undefined) lsSet('psa_quizcount', data.quizCount);
      if (data.theme) lsSet('psa_theme', data.theme);
      if (data.lastTopic) lsSet('psychstudy_last_topic', data.lastTopic);

      loadStoredState();
      renderDashboard();
      renderNotesPage();
      updateNavMastery();
      closeSettingsModal();
      toast('Backup restored successfully!', 'success');
    } catch (err) {
      toast('Failed to restore data: invalid JSON file.', 'error');
    }
  };
  reader.readAsText(file);
}

function confirmResetProgress() {
  const conf = window.confirm('Are you sure you want to reset all learning progress, quiz scores, and flashcard review schedules? Your saved notes will be kept.');
  if (conf) {
    lsSet('psychstudy_progress', {});
    lsSet('psychstudy_fc_reviews', {});
    lsSet('psychstudy_quiz_attempts', []);
    lsSet('psa_quizcount', 0);
    loadStoredState();
    renderDashboard();
    updateNavMastery();
    closeSettingsModal();
    toast('Learning progress reset.', 'info');
  }
}

// Global Keyboard Shortcuts (Cmd+K, Escape, Arrow keys for flashcards)
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openCmdPalette();
  }
  if (e.key === 'Escape') {
    closeCmdPalette();
    closeNoteModal();
    closeSettingsModal();
    closeMobileMoreSheet();
    closeExploreDropdown();
    closeBrainModal();
  }
  // Flashcard keyboard shortcuts
  if (S.currentPage === 'flashcards' && !document.activeElement.matches('input, textarea, select')) {
    if (e.code === 'Space') {
      e.preventDefault();
      flipCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    } else if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === '1') {
      rateFlashcard('again');
    } else if (e.key === '2') {
      rateFlashcard('hard');
    } else if (e.key === '3') {
      rateFlashcard('good');
    } else if (e.key === '4') {
      rateFlashcard('easy');
    }
  }
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('#exploreDropdownWrap')) {
    closeExploreDropdown();
  }
});

// ─── INITIALIZATION ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Check OS for Cmd+K vs Ctrl+K shortcut label
  const isMac = navigator.platform?.toUpperCase().indexOf('MAC') >= 0 || navigator.userAgent?.includes('Mac');
  const kbdHint = document.getElementById('cmdKbdHint');
  if (kbdHint) kbdHint.textContent = isMac ? '⌘K' : 'Ctrl K';

  // Dynamically load PDF.js CDN worker
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  s.onload = () => {
    if (window.pdfjsLib)
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  };
  document.head.appendChild(s);

  loadTheme();
  loadStoredState();
  initFact();
  renderDashboard();
  loadFlashcards('all');
  renderExam();
  loadStudyTopic(0);
  updateNavMastery();

  // Close modals on backdrop click
  document.getElementById('noteModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeNoteModal();
  });
});

function initFact() {
  const idx = new Date().getDate() % DAILY_FACTS.length;
  const f = DAILY_FACTS[idx];
  const t = document.getElementById('factTitle');
  const txt = document.getElementById('factText');
  if (t) t.textContent = f.title;
  if (txt) txt.textContent = f.text;
}

// Expose globals for HTML inline handlers
window.navigate = navigate; window.navigateTo = navigate; window.toggleNav = toggleMobileNav; window.toggleTheme = toggleTheme;
window.filterTopics = filterTopics; window.openStudyTopic = openStudyTopic; window.openChapter = openChapter; window.openFlashcardsTopic = openFlashcardsTopic;
window.loadStudyTopic = loadStudyTopic; window.changeStudyTopic = changeStudyTopic; window.setStudyMode = setStudyMode;
window.toggleNotesPanel = toggleNotesPanel; window.saveNote = saveNote; window.clearNoteEditor = clearNoteEditor;
window.deleteNote = deleteNote; window.togglePinNote = togglePinNote; window.openNewNoteModal = openNewNoteModal;
window.editNote = editNote; window.saveModalNote = saveModalNote; window.closeNoteModal = closeNoteModal; window.filterNotes = filterNotes;
window.loadFlashcards = loadFlashcards; window.flipCard = flipCard; window.prevCard = prevCard; window.nextCard = nextCard;
window.rateFlashcard = rateFlashcard; window.setupQuiz = setupQuiz; window.selectMCQ = selectMCQ; window.submitQuiz = submitQuiz; window.resetQuiz = resetQuiz;
window.renderExam = renderExam; window.toggleAnswers = toggleAnswers; window.importPDF = importPDF;
window.openCmdPalette = openCmdPalette; window.openCommandPalette = openCmdPalette; window.closeCmdPalette = closeCmdPalette; window.filterCmdPalette = filterCmdPalette;
window.executeCmdAction = executeCmdAction; window.resumeLastTopic = resumeLastTopic; window.toggleTopicCompletion = toggleTopicCompletion;
window.selectBrainRegion = selectBrainRegion; window.selectVitrineLobe = selectVitrineLobe; window.openBrainModal = openBrainModal; window.closeBrainModal = closeBrainModal; window.selectBrainModalTab = selectBrainModalTab;
window.toggleExploreDropdown = toggleExploreDropdown; window.closeExploreDropdown = closeExploreDropdown; window.openExploreItem = openExploreItem;
window.toggleMobileNav = toggleMobileNav; window.openMobileMoreSheet = openMobileMoreSheet; window.closeMobileMoreSheet = closeMobileMoreSheet;
window.openSettingsModal = openSettingsModal; window.closeSettingsModal = closeSettingsModal;
window.setAppTheme = setAppTheme; window.setReaderFontSize = setReaderFontSize; window.toggleReducedMotion = toggleReducedMotion;
window.exportUserData = exportUserData; window.importUserData = importUserData; window.confirmResetProgress = confirmResetProgress;
window.esc = esc; window.normalizeQuizAnswer = normalizeQuizAnswer; window.updateNavMastery = updateNavMastery;
window.filterCurriculum = filterCurriculum; window.sortCurriculum = sortCurriculum; window.toggleFocusMode = toggleFocusMode;
window.toggleTopicStudied = toggleTopicStudied; window.startTopicCards = startTopicCards; window.scrollToSection = scrollToSection;
window.selectEtiologyTab = selectEtiologyTab; window.flipMythCard = flipMythCard; window.toggleExamHubItem = toggleExamHubItem;
window.toggleCriteriaCheck = toggleCriteriaCheck; window.saveCurrentTopicNote = saveCurrentTopicNote; window.debounceAutoSaveNote = debounceAutoSaveNote;
window.openNotesWorkspace = openNotesWorkspace; window.searchFromTerm = searchFromTerm; window.autoLinkGlossary = autoLinkGlossary;
window.showGlossaryPopover = showGlossaryPopover; window.hideGlossaryPopover = hideGlossaryPopover; window.openLexiconTerm = openLexiconTerm;
window.exportNotesJSON = exportNotesJSON; window.importNotesJSON = importNotesJSON; window.undoFlashcardRating = undoFlashcardRating;
window.setQuizMode = setQuizMode; window.setQuizPreset = setQuizPreset; window.handleFillInput = handleFillInput; window.addMissedToFlashcards = addMissedToFlashcards;
window.selectExamSuiteTab = selectExamSuiteTab; window.toggleQbItem = toggleQbItem; window.filterQuestionBank = filterQuestionBank;
window.selectCoachPrompt = selectCoachPrompt; window.startCoachWithQuestion = startCoachWithQuestion;
window.updateCoachWordCount = updateCoachWordCount; window.resetCoachAnswer = resetCoachAnswer; window.revealCoachModelAnswer = revealCoachModelAnswer;
window.S = S;



// ══════════════════════════════════════════════════════════════
// PHASE 6: SIGNATURE ATLAS FEATURES IMPLEMENTATION
// ══════════════════════════════════════════════════════════════

// ── 1. CLINICAL LEXICON BROWSER ─────────────────────────────
let currentLexiconLetter = 'ALL';
let currentLexiconVolume = 'ALL';

function openLexiconModal() {
  const modal = document.getElementById('lexiconModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderLexiconAlphabetRibbon();
  renderLexiconVolumeFilter();
  filterLexicon();
  const input = document.getElementById('lexiconSearchInput');
  if (input) { input.value = ''; input.focus(); }
}

function closeLexiconModal(e) {
  if (e && e.target && e.target !== document.getElementById('lexiconModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('lexiconModal');
  if (modal) modal.classList.add('hidden');
}

function renderLexiconAlphabetRibbon() {
  const ribbon = document.getElementById('lexiconAlphaRibbon');
  if (!ribbon) return;
  const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  ribbon.innerHTML = letters.map(l => `
    <button class="alpha-pill ${l === currentLexiconLetter ? 'active' : ''}" onclick="selectLexiconLetter('${l}', this)">${l}</button>
  `).join('');
}

function selectLexiconLetter(l, btn) {
  currentLexiconLetter = l;
  document.querySelectorAll('.alpha-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterLexicon();
}

function renderLexiconVolumeFilter() {
  const container = document.getElementById('lexiconVolFilter');
  if (!container) return;
  const vols = [
    { id: 'ALL', label: 'All Volumes' },
    { id: 'vol-1', label: 'Vol I: Foundations' },
    { id: 'vol-2', label: 'Vol II: Anxiety' },
    { id: 'vol-3', label: 'Vol III: Mood' },
    { id: 'vol-4', label: 'Vol IV: Eating' },
    { id: 'vol-5', label: 'Vol V: Personality' },
    { id: 'vol-6', label: 'Vol VI: Psychotic' },
    { id: 'vol-7', label: 'Vol VII: Therapies' },
    { id: 'vol-8', label: 'Vol VIII: Culture' },
    { id: 'vol-9', label: 'Vol IX: Adjustment' }
  ];
  container.innerHTML = vols.map(v => `
    <button class="pill-btn ${v.id === currentLexiconVolume ? 'active' : ''}" onclick="selectLexiconVolume('${v.id}', this)">${esc(v.label)}</button>
  `).join('');
}

function selectLexiconVolume(volId, btn) {
  currentLexiconVolume = volId;
  const container = document.getElementById('lexiconVolFilter');
  if (container) container.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterLexicon();
}

function filterLexicon() {
  const searchInput = document.getElementById('lexiconSearchInput');
  const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const terms = ((window.GLOSSARY || window.GLOSSARY_TERMS || []) || []);

  let filtered = terms.filter(t => {
    if (currentLexiconLetter !== 'ALL') {
      if (!t.term.toUpperCase().startsWith(currentLexiconLetter)) return false;
    }
    if (currentLexiconVolume !== 'ALL') {
      if (t.volume !== currentLexiconVolume) return false;
    }
    if (query) {
      const matchTerm = t.term.toLowerCase().includes(query);
      const matchDef = (t.def || '').toLowerCase().includes(query);
      const matchEty = (t.etymology || '').toLowerCase().includes(query);
      if (!matchTerm && !matchDef && !matchEty) return false;
    }
    return true;
  });

  const countLabel = document.getElementById('lexiconCountLabel');
  if (countLabel) countLabel.textContent = `Showing ${filtered.length} of ${terms.length} clinical terms`;

  renderLexiconGrid(filtered);
}

function renderLexiconGrid(terms) {
  const grid = document.getElementById('lexiconGrid');
  if (!grid) return;
  if (!terms.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:var(--sp-8);color:var(--text-tertiary)">No standardized clinical terms match your query.</div>';
    return;
  }
  grid.innerHTML = terms.map(t => {
    const chapterLinks = (t.chapters || []).map(chId => {
      const ch = (window.KB || []).find(k => k.id === chId);
      const title = ch ? (ch.shortTitle || ch.name || ch.title || chId) : chId;
      return `<button class="tag-chip tag-link" onclick="openChapterFromLexicon('${chId}')" style="cursor:pointer;border:none;background:var(--primary-soft);color:var(--primary-deep)">📖 ${esc(title)}</button>`;
    }).join(' ');

    return `
      <article class="lexicon-card" id="lex-${t.id}">
        <div class="lexicon-head">
          <h4 class="lexicon-term">${esc(t.term)}</h4>
          ${t.phonetic ? `<span class="lexicon-phonetic">${esc(t.phonetic)}</span>` : ''}
        </div>
        ${t.etymology ? `<span class="lexicon-etymology">Etymology: ${esc(t.etymology)}</span>` : ''}
        <p class="lexicon-def">${esc(t.def)}</p>
        <div class="lexicon-footer">
          <span class="card-eyebrow" style="font-size:10px">${esc(t.volume || 'General Nosology')}</span>
          <div style="display:flex;gap:4px;flex-wrap:wrap">${chapterLinks}</div>
        </div>
      </article>
    `;
  }).join('');
}

function openChapterFromLexicon(chId) {
  closeLexiconModal();
  openChapter(chId);
}

// ── 2. CONCEPT MAP: CONSTELLATION ───────────────────────────
let constellationViewMode = 'graph';
let currentConstellationSelectedId = null;
let currentConstellationZoom = 1;
let currentConstellationFilter = 'all';
let currentConstellationSearchQuery = '';

const CONSTELLATION_CONNECTIONS = [
  // Anxiety & Mood Comorbidities & Differentials
  { from: 'major-depression', to: 'gad', label: 'High Clinical Comorbidity (60%+ overlap)' },
  { from: 'major-depression', to: 'dysthymia', label: 'Double Depression Spectrum' },
  { from: 'major-depression', to: 'bipolar', label: 'Unipolar vs Bipolar Polarity Differential' },
  { from: 'bipolar', to: 'cyclothymia', label: 'Affective Cyclicity Severity Boundary' },
  { from: 'major-depression', to: 'sad', label: 'Circadian Seasonal Subtype' },
  { from: 'major-depression', to: 'suicide', label: 'Primary Lethality Risk Assessment' },
  { from: 'panic', to: 'phobias', label: 'Autonomic Surge & Avoidance Cascade' },
  { from: 'gad', to: 'phobias', label: 'Diffuse Worry vs Circumscribed Fear' },
  { from: 'ocd', to: 'gad', label: 'Egodystonic Rituals vs Chronic Real-Life Worry' },
  { from: 'ptsd', to: 'panic', label: 'Hyperarousal & Trauma Flashback Cueing' },

  // Psychotic Spectrum Differentials
  { from: 'schizophrenia', to: 'schizoaffective', label: 'Mood Episode Concurrency Differential' },
  { from: 'schizophrenia', to: 'delusional', label: 'Bizarre vs Non-Bizarre Delusion Boundary' },
  { from: 'schizophrenia', to: 'bipolar', label: 'Psychosis in Severe Affective Episode' },

  // Eating Disorders Differentials
  { from: 'anorexia', to: 'bulimia', label: 'Underweight BMI Hierarchy Differential' },
  { from: 'bulimia', to: 'binge-eating', label: 'Compensatory Purging Differential' },

  // Personality Disorders Differentials
  { from: 'personality-overview', to: 'borderline', label: 'Cluster B Emotion Dysregulation' },
  { from: 'personality-overview', to: 'antisocial', label: 'Cluster B Egocentric Deviance' },
  { from: 'borderline', to: 'bipolar', label: 'Interpersonal Lability vs Episodic Mania' },
  { from: 'antisocial', to: 'borderline', label: 'Impulsivity & Cluster B Overlap' },

  // Evidence-Based Psychological Treatments
  { from: 'cbt', to: 'major-depression', label: 'First-Line Cognitive Restructuring' },
  { from: 'cbt', to: 'gad', label: 'Decatastrophizing & Worry Exposure' },
  { from: 'behavior-therapy', to: 'phobias', label: 'Systematic Desensitization & In Vivo' },
  { from: 'behavior-therapy', to: 'ocd', label: 'Exposure & Response Prevention (ERP)' },
  { from: 'token-economy', to: 'behavior-therapy', label: 'Operant Conditioning & Secondary Reinforcement' },
  { from: 'token-economy', to: 'schizophrenia', label: 'Inpatient Psychosocial Rehabilitation' },
  { from: 'psychoanalysis', to: 'defense-mechanisms', label: 'Unconscious Conflict Resolution' },
  { from: 'person-centered', to: 'therapy-overview', label: 'Humanistic Necessary Conditions' },
  { from: 'group-therapy', to: 'stigma', label: 'Yalom Universality & Peer Normalization' },
  { from: 'relationship-counselling', to: 'coping-and-appraisal', label: 'Dyadic Stress & Gottman Framework' },
  { from: 'biomedical-therapies', to: 'bipolar', label: 'Mood Stabilizers (Lithium) Protocol' },
  { from: 'biomedical-therapies', to: 'schizophrenia', label: 'Antipsychotic Dopaminergic Blockade' },
  { from: 'alternative-therapies', to: 'sad', label: '10,000-Lux Phototherapy Light Treatment' },

  // Culture, Stigma & Stress Adjustment
  { from: 'culture-mental-illness', to: 'culture-bound', label: 'Ethnocentric Bias & Cultural Syndromes' },
  { from: 'cultural-issues-mh', to: 'help-seeking-barriers', label: 'Systemic Health Disparities & Stigma' },
  { from: 'help-seeking-gender', to: 'help-seeking-barriers', label: 'Masculine Socialization & Reluctance' },
  { from: 'stress-and-gas', to: 'coping-and-appraisal', label: 'Selye Physiology to Lazarus Cognition' },
  { from: 'stress-and-gas', to: 'defense-mechanisms', label: 'Adaptive vs Maladaptive Coping' },
  { from: 'psych-disorders', to: 'four-ds', label: 'Diagnostic Definition vs Teaching Heuristic' },
  { from: 'models-of-abnormality', to: 'cbt', label: 'Theoretical Model to Applied Modality' }
];

let constellationNodeMap = {};

function openConstellationModal() {
  const modal = document.getElementById('constellationModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderConstellation();
}

function closeConstellationModal(e) {
  if (e && e.target && e.target !== document.getElementById('constellationModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('constellationModal');
  if (modal) modal.classList.add('hidden');
}

function setConstellationView(mode) {
  constellationViewMode = mode;
  const graphBtn = document.getElementById('btnConstellationGraph');
  const listBtn = document.getElementById('btnConstellationList');
  const canvas = document.getElementById('constellationCanvasContainer');
  const list = document.getElementById('constellationListView');

  if (mode === 'graph') {
    if (graphBtn) graphBtn.className = 'btn btn-primary btn-xs active';
    if (listBtn) listBtn.className = 'btn btn-outline btn-xs';
    if (canvas) canvas.classList.remove('hidden');
    if (list) list.classList.add('hidden');
  } else {
    if (graphBtn) graphBtn.className = 'btn btn-outline btn-xs';
    if (listBtn) listBtn.className = 'btn btn-primary btn-xs active';
    if (canvas) canvas.classList.add('hidden');
    if (list) list.classList.remove('hidden');
  }
}

function renderConstellation(volFilter = 'all') {
  currentConstellationFilter = volFilter;
  const chapters = (window.KB || []);
  const nebulasGroup = document.getElementById('constellationNebulasGroup');
  const edgesGroup = document.getElementById('constellationEdgesGroup');
  const nodesGroup = document.getElementById('constellationNodesGroup');
  const listView = document.getElementById('constellationListView');

  const volCenters = {
    'vol-1': { cx: 200, cy: 150, color: '#0D9488', name: 'Vol I: Foundations' },
    'vol-2': { cx: 500, cy: 110, color: '#0284C7', name: 'Vol II: Anxiety & Trauma' },
    'vol-3': { cx: 800, cy: 150, color: '#7C3AED', name: 'Vol III: Mood Disorders' },
    'vol-4': { cx: 850, cy: 330, color: '#E11D48', name: 'Vol IV: Eating Disorders' },
    'vol-5': { cx: 750, cy: 490, color: '#9333EA', name: 'Vol V: Personality' },
    'vol-6': { cx: 480, cy: 510, color: '#2563EB', name: 'Vol VI: Psychotic Spectrum' },
    'vol-7': { cx: 220, cy: 470, color: '#10B981', name: 'Vol VII: Clinical Therapies' },
    'vol-8': { cx: 140, cy: 300, color: '#D97706', name: 'Vol VIII: Culture & Context' },
    'vol-9': { cx: 500, cy: 310, color: '#059669', name: 'Vol IX: Adjustment & Stress' }
  };

  const nodeMap = {};
  const volGroups = {};
  chapters.forEach(c => {
    const v = c.volume || 'vol-1';
    if (!volGroups[v]) volGroups[v] = [];
    volGroups[v].push(c);
  });

  Object.keys(volGroups).forEach(v => {
    const center = volCenters[v] || { cx: 500, cy: 300, color: '#6366F1', name: v };
    const items = volGroups[v];
    const n = items.length;
    const r = Math.min(65 + n * 3, 90);
    items.forEach((c, idx) => {
      const angle = (idx / n) * 2 * Math.PI - Math.PI / 2;
      const x = Math.round(center.cx + r * Math.cos(angle));
      const y = Math.round(center.cy + r * Math.sin(angle));
      nodeMap[c.id] = { ...c, x, y, color: center.color, volume: v, volName: center.name };
    });
  });

  constellationNodeMap = nodeMap;

  // Render 9 Domain Ambient Nebulas
  if (nebulasGroup) {
    nebulasGroup.innerHTML = Object.entries(volCenters).map(([vKey, center]) => {
      const isMuted = (volFilter !== 'all' && vKey !== volFilter);
      return `
        <g opacity="${isMuted ? '0.1' : '0.45'}">
          <circle cx="${center.cx}" cy="${center.cy}" r="115" fill="${center.color}" fill-opacity="0.12"></circle>
          <text x="${center.cx}" y="${center.cy - 74}" fill="${center.color}" font-family="var(--font-mono)" font-size="10" font-weight="700" letter-spacing="0.12em" text-anchor="middle">${esc(center.name.toUpperCase())}</text>
        </g>
      `;
    }).join('');
  }

  // Render Connections
  if (edgesGroup) {
    edgesGroup.innerHTML = CONSTELLATION_CONNECTIONS.map(conn => {
      const f = nodeMap[conn.from];
      const t = nodeMap[conn.to];
      if (!f || !t) return '';
      const isMuted = (volFilter !== 'all' && f.volume !== volFilter && t.volume !== volFilter);
      return `<line class="constellation-edge ${isMuted ? 'muted' : ''}" id="edge-${conn.from}-${conn.to}" x1="${f.x}" y1="${f.y}" x2="${t.x}" y2="${t.y}" data-from="${conn.from}" data-to="${conn.to}" data-label="${esc(conn.label)}"></line>`;
    }).join('');
  }

  // Render Nodes
  if (nodesGroup) {
    const hubIds = ['major-depression', 'gad', 'schizophrenia', 'cbt', 'bipolar', 'anorexia', 'borderline', 'stress-and-gas', 'psych-disorders'];
    nodesGroup.innerHTML = Object.values(nodeMap).map(n => {
      const isMuted = (volFilter !== 'all' && n.volume !== volFilter);
      const isHub = hubIds.includes(n.id) || (volFilter !== 'all' && n.volume === volFilter);
      const label = n.shortTitle || n.name || n.title || n.id;
      return `
        <g class="constellation-node ${isMuted ? 'muted' : ''} ${isHub ? 'hub' : ''}" id="cnode-${n.id}" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(label)}" onclick="selectConstellationNode('${n.id}')" onmouseenter="hoverConstellationNode('${n.id}')" onmouseleave="leaveConstellationNode()">
          <circle cx="${n.x}" cy="${n.y}" r="${isHub ? 11 : 7.5}" fill="${n.color}" stroke="#FFFFFF" stroke-width="${isHub ? 2.5 : 1.5}"></circle>
          <text x="${n.x}" y="${n.y + 19}">${esc(label.slice(0, 18))}</text>
        </g>
      `;
    }).join('');
  }

  // Render Accessible List View
  if (listView) {
    listView.innerHTML = chapters.map(c => {
      const label = c.name || c.shortTitle || c.title || c.id;
      const relatedLinks = CONSTELLATION_CONNECTIONS
        .filter(conn => conn.from === c.id || conn.to === c.id)
        .map(conn => {
          const otherId = conn.from === c.id ? conn.to : conn.from;
          const other = nodeMap[otherId];
          const otherLabel = other ? (other.shortTitle || other.name || other.title || otherId) : otherId;
          return `<span class="tag-chip" style="cursor:pointer" onclick="selectConstellationNode('${otherId}')">${esc(conn.label)} → <strong>${esc(otherLabel)}</strong></span>`;
        }).join(' ');

      return `
        <div class="note-card" style="padding:var(--sp-4);background:var(--surface)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div>
              <span class="card-eyebrow" style="color:var(--primary);margin-right:8px">${esc(c.volume || 'VOL I')}</span>
              <strong>${esc(label)}</strong>
            </div>
            <div style="display:flex;gap:6px">
              <button class="btn btn-outline btn-xs" onclick="selectConstellationNode('${c.id}')">Inspect Graph ☍</button>
              <button class="btn btn-primary btn-xs" onclick="openChapterFromConstellation('${c.id}')">Read Chapter ↗</button>
            </div>
          </div>
          <div style="font-size:var(--text-xs);color:var(--text-2);margin-bottom:6px">${esc(c.preview || '')}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">${relatedLinks || '<span class="tag-chip">Core Diagnostic Anchor</span>'}</div>
        </div>
      `;
    }).join('');
  }
}

function filterConstellationByVolume(volId) {
  currentConstellationFilter = volId;
  const sel = document.getElementById('constellationVolSel');
  if (sel) sel.value = volId;

  document.querySelectorAll('.cv-pill').forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-vol') === volId);
  });

  renderConstellation(volId);
  if (currentConstellationSelectedId) {
    selectConstellationNode(currentConstellationSelectedId);
  }
}

function selectConstellationNode(id) {
  const node = (window.KB || []).find(k => k.id === id);
  if (!node) return;

  currentConstellationSelectedId = id;

  // Switch to graph view if on list
  if (constellationViewMode !== 'graph') {
    setConstellationView('graph');
  }

  // Highlight node in SVG
  document.querySelectorAll('.constellation-node').forEach(el => {
    const nId = el.getAttribute('data-id');
    const isConnected = CONSTELLATION_CONNECTIONS.some(c => (c.from === id && c.to === nId) || (c.to === id && c.from === nId));
    if (nId === id) {
      el.classList.add('selected');
      el.classList.add('show-label');
      el.classList.remove('muted');
    } else if (isConnected) {
      el.classList.remove('selected');
      el.classList.add('show-label');
      el.classList.remove('muted');
    } else {
      el.classList.remove('selected');
      el.classList.remove('show-label');
      el.classList.add('muted');
    }
  });

  // Highlight edges
  document.querySelectorAll('.constellation-edge').forEach(e => {
    if (e.getAttribute('data-from') === id || e.getAttribute('data-to') === id) {
      e.classList.add('highlighted');
      e.classList.remove('dimmed');
    } else {
      e.classList.remove('highlighted');
      e.classList.add('dimmed');
    }
  });

  // Populate & open Inspector Drawer
  const inspector = document.getElementById('constellationInspector');
  const hintPill = document.getElementById('ciHintPill');
  if (inspector) {
    const nodeData = constellationNodeMap[id] || node;
    const vol = node.volume || 'VOL I';
    const volInfo = (typeof getVolumeInfo === 'function') ? getVolumeInfo(vol) : { name: 'Curriculum Volume', color: '#4338CA' };

    const volBadge = document.getElementById('ciVolBadge');
    const titleEl = document.getElementById('ciTitle');
    const descEl = document.getElementById('ciDesc');
    const masteryVal = document.getElementById('ciMasteryVal');
    const masteryFill = document.getElementById('ciMasteryFill');
    const connCount = document.getElementById('ciConnCount');
    const connList = document.getElementById('ciConnectionsList');

    if (volBadge) {
      volBadge.textContent = (nodeData.volName || vol).toUpperCase();
      volBadge.style.background = volInfo.bg || 'rgba(67, 56, 202, 0.12)';
      volBadge.style.color = volInfo.color || '#818CF8';
    }
    if (titleEl) titleEl.textContent = node.name || node.shortTitle || node.title;
    if (descEl) descEl.textContent = node.preview || 'Comprehensive DSM-5-TR clinical diagnostic criteria, differential nosology, and treatment indications.';

    const mastery = (typeof calculateTopicMastery === 'function') ? calculateTopicMastery(id) : 0;
    if (masteryVal) masteryVal.textContent = mastery + '%';
    if (masteryFill) masteryFill.style.width = mastery + '%';

    // Find all connected relationships
    const conns = CONSTELLATION_CONNECTIONS.filter(c => c.from === id || c.to === id);
    if (connCount) connCount.textContent = conns.length;
    if (connList) {
      if (conns.length > 0) {
        connList.innerHTML = conns.map(c => {
          const otherId = c.from === id ? c.to : c.from;
          const otherNode = constellationNodeMap[otherId] || (window.KB || []).find(k => k.id === otherId);
          const otherName = otherNode ? (otherNode.name || otherNode.shortTitle || otherId) : otherId;
          return `
            <div class="ci-conn-card" onclick="selectConstellationNode('${otherId}')" title="Click to inspect ${esc(otherName)}">
              <div class="ci-conn-rel">${esc(c.label)}</div>
              <div class="ci-conn-target">→ ${esc(otherName)}</div>
            </div>
          `;
        }).join('');
      } else {
        connList.innerHTML = `<div style="font-size:11px;color:#94A3B8;padding:8px 0">Diagnostic anchor chapter across foundational principles.</div>`;
      }
    }

    inspector.classList.remove('hidden');
    if (hintPill) hintPill.classList.add('hidden');
  }
}

function closeConstellationInspector() {
  const inspector = document.getElementById('constellationInspector');
  const hintPill = document.getElementById('ciHintPill');
  if (inspector) inspector.classList.add('hidden');
  if (hintPill) hintPill.classList.remove('hidden');

  currentConstellationSelectedId = null;
  document.querySelectorAll('.constellation-node').forEach(e => {
    e.classList.remove('selected', 'show-label');
    if (currentConstellationFilter !== 'all') {
      const node = (window.KB || []).find(k => k.id === e.getAttribute('data-id'));
      e.classList.toggle('muted', node?.volume !== currentConstellationFilter);
    } else {
      e.classList.remove('muted');
    }
  });
  document.querySelectorAll('.constellation-edge').forEach(e => e.classList.remove('highlighted', 'dimmed'));
}

function searchConstellation(query) {
  currentConstellationSearchQuery = (query || '').trim().toLowerCase();
  if (!currentConstellationSearchQuery) {
    if (currentConstellationSelectedId) selectConstellationNode(currentConstellationSelectedId);
    else {
      document.querySelectorAll('.constellation-node').forEach(e => e.classList.remove('muted'));
      document.querySelectorAll('.constellation-edge').forEach(e => e.classList.remove('highlighted'));
    }
    return;
  }

  document.querySelectorAll('.constellation-node').forEach(el => {
    const id = el.getAttribute('data-id');
    const node = (window.KB || []).find(k => k.id === id);
    const text = ((node?.name || '') + ' ' + (node?.shortTitle || '') + ' ' + (node?.category || '')).toLowerCase();
    if (text.includes(currentConstellationSearchQuery)) {
      el.classList.remove('muted');
    } else {
      el.classList.add('muted');
    }
  });
}

function constellationZoom(factor) {
  const svg = document.getElementById('constellationSvg');
  if (!svg) return;
  currentConstellationZoom = Math.max(0.5, Math.min(2.5, currentConstellationZoom * factor));
  const baseW = 1000, baseH = 600;
  const newW = baseW / currentConstellationZoom;
  const newH = baseH / currentConstellationZoom;
  const newX = (baseW - newW) / 2;
  const newY = (baseH - newH) / 2;
  svg.setAttribute('viewBox', `${newX} ${newY} ${newW} ${newH}`);
}

function constellationResetZoom() {
  currentConstellationZoom = 1;
  const svg = document.getElementById('constellationSvg');
  if (svg) svg.setAttribute('viewBox', '0 0 1000 600');
}

function hoverConstellationNode(id) {
  if (currentConstellationSelectedId) return; // Don't override active selection
  const node = (window.KB || []).find(k => k.id === id);
  const tooltip = document.getElementById('constellationTooltip');
  if (tooltip && node) {
    const mastery = typeof calculateTopicMastery === 'function' ? calculateTopicMastery(id) : 0;
    const label = node.name || node.shortTitle || node.title || node.id;
    tooltip.innerHTML = `
      <div style="font-weight:700;margin-bottom:2px">${esc(label)}</div>
      <div style="color:var(--text-secondary);margin-bottom:4px">${esc(node.category || node.volume)}</div>
      <div>Mastery: <strong>${mastery}%</strong> · Click to inspect relationships</div>
    `;
    tooltip.classList.remove('hidden');
  }

  const el = document.getElementById('cnode-' + id);
  if (el) el.classList.add('show-label');

  const connectedIds = CONSTELLATION_CONNECTIONS
    .filter(c => c.from === id || c.to === id)
    .map(c => c.from === id ? c.to : c.from);
  connectedIds.forEach(cId => {
    document.getElementById('cnode-' + cId)?.classList.add('show-label');
  });

  document.querySelectorAll('.constellation-edge').forEach(e => {
    if (e.getAttribute('data-from') === id || e.getAttribute('data-to') === id) {
      e.classList.add('highlighted');
      e.classList.remove('dimmed');
    } else {
      e.classList.remove('highlighted');
      e.classList.add('dimmed');
    }
  });
}

function leaveConstellationNode() {
  if (currentConstellationSelectedId) return;
  const tooltip = document.getElementById('constellationTooltip');
  if (tooltip) tooltip.classList.add('hidden');
  document.querySelectorAll('.constellation-node:not(.hub)').forEach(el => el.classList.remove('show-label'));
  document.querySelectorAll('.constellation-edge').forEach(e => e.classList.remove('highlighted', 'dimmed'));
}

function openChapterFromConstellation(chId) {
  const targetId = chId || currentConstellationSelectedId;
  if (!targetId) return;
  closeConstellationModal();
  openChapter(targetId);
}

// ── 3. HISTORICAL CARE TIMELINE ─────────────────────────────
let currentTimelineCategory = 'all';

function openTimelineModal() {
  const modal = document.getElementById('timelineModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  filterTimeline(currentTimelineCategory);
}

function closeTimelineModal(e) {
  if (e && e.target && e.target !== document.getElementById('timelineModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('timelineModal');
  if (modal) modal.classList.add('hidden');
}

function filterTimeline(cat, btn) {
  currentTimelineCategory = cat;
  const tabs = document.querySelectorAll('.timeline-tabs .pill-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const events = (window.TIMELINE_EVENTS || []);
  const cLow = (cat || 'all').toLowerCase();
  const filtered = cLow === 'all' ? events : events.filter(e => {
    const ec = (e.category || '').toLowerCase();
    if (cLow.includes('treatment') && ec.includes('treatment')) return true;
    if (cLow.includes('concept') && ec.includes('concept')) return true;
    if ((cLow.includes('law') || cLow.includes('policy')) && (ec.includes('law') || ec.includes('policy'))) return true;
    return ec === cLow;
  });
  const list = document.getElementById('timelineList');
  if (!list) return;

  list.innerHTML = filtered.map((e, idx) => `
    <article class="timeline-node-card" id="tl-${idx}">
      <div class="timeline-node-dot" aria-hidden="true"></div>
      <div class="timeline-header-meta">
        <span class="timeline-year-badge">${esc(e.year)}</span>
        <span class="tag-chip">${esc(e.category.toUpperCase())}</span>
      </div>
      <h4 class="timeline-title">${esc(e.title)}</h4>
      <p class="timeline-significance">${esc(e.significance)}</p>
      ${e.refId ? `
        <div style="font-size:var(--text-xs);color:var(--text-tertiary)">
          Authoritative Reference: <span class="badge-source" style="font-family:var(--font-mono)">${esc(e.refId)}</span>
        </div>` : ''}
    </article>
  `).join('');
}

// ── 4. DIFFERENTIAL DIAGNOSIS TRAINER ───────────────────────
const TRAINER_VIGNETTES = [
  {
    id: 'diff-1',
    domain: 'Anxiety Spectrum Disorders',
    title: 'Case Presentation: 26-year-old Corporate Associate',
    prose: 'Patient reports persistent, excessive worry across multiple life domains (work deadlines, financial security, parents\' health, relationship stability) present almost daily for over 8 months. She describes muscle tension, restless fatigue, sleep onset disturbance, and inability to control the apprehension. Episodes do not occur out of the blue as sudden discrete surges, and she does not fear impending heart attack or social humiliation.',
    mse: 'MSE: Mild psychomotor agitation, hypervigilant affect, speech coherent and focused on chronic daily worries. No delusions, obsessions, or discrete panic attacks.',
    candidates: [
      { id: 'gad', label: 'Generalized Anxiety Disorder (GAD)', isCorrect: true },
      { id: 'panic', label: 'Panic Disorder', isCorrect: false, ruleOut: 'Ruled out because apprehension is chronic and widespread rather than presenting as sudden, unprovoked discrete surges of intense fear reaching a peak within minutes with autonomic crisis.' },
      { id: 'social-anxiety', label: 'Social Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because fears are generalized to everyday life circumstances rather than circumscribed to scrutiny or humiliation in social/performance situations.' },
      { id: 'illness-anxiety', label: 'Illness Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because worry spans multiple diverse life domains rather than an exclusive preoccupation with having or acquiring a serious undiagnosed medical illness.' }
    ],
    distinguishingFeature: 'Per DSM-5-TR, GAD requires excessive anxiety and worry occurring more days than not for at least 6 months about a number of events or activities, with marked difficulty controlling the worry and at least 3 autonomic/somatic tension symptoms.'
  },
  {
    id: 'diff-2',
    domain: 'Depressive & Mood Disorders',
    title: 'Case Presentation: 42-year-old High School Teacher',
    prose: 'Patient reports feeling depressed, drained of energy, and joyless "as long as I can remember" for at least the past 3.5 years. She has managed to maintain her teaching job, but suffers chronic low self-esteem, fatigue, indecisiveness, and hopelessness. She denies any 2-month interval free of low mood, has never had a manic or hypomanic episode, and does not meet full symptomatic severity for acute major depressive episodes during this period.',
    mse: 'MSE: Constricted depressive affect, psychomotor slowing mild, speech low volume, thought process goal-directed without acute suicidal intent or psychotic features.',
    candidates: [
      { id: 'pdd', label: 'Persistent Depressive Disorder (Dysthymia)', isCorrect: true },
      { id: 'mdd', label: 'Major Depressive Disorder (MDD)', isCorrect: false, ruleOut: 'Ruled out as primary diagnosis because the clinical picture is characterized by continuous chronic depressive symptoms spanning >2 years without acute severe neurovegetative syndromal breakdown.' },
      { id: 'bipolar-2', label: 'Bipolar II Disorder', isCorrect: false, ruleOut: 'Ruled out because there is no history of any hypomanic episode lasting ≥4 days.' },
      { id: 'cyclothymia', label: 'Cyclothymic Disorder', isCorrect: false, ruleOut: 'Ruled out because the patient exhibits chronic persistent depressive mood without alternating hypomanic symptom periods.' }
    ],
    distinguishingFeature: 'DSM-5-TR Persistent Depressive Disorder (PDD) unifies DSM-IV chronic MDD and dysthymia, requiring depressed mood for at least 2 years without remissions exceeding 2 months.'
  },
  {
    id: 'diff-3',
    domain: 'Psychotic Spectrum Disorders',
    title: 'Case Presentation: 21-year-old University Student',
    prose: 'Patient was brought by his family after 7 months of progressive functional decline. For the past 3 months, he has exhibited prominent auditory hallucinations (commenting voices), persecutory delusions that neighbors are monitoring him via wifi, gross alogia, marked emotional flattening, and social withdrawal. There have been no concurrent major depressive or manic episodes.',
    mse: 'MSE: Affect flat, hygiene neglected, latency in response, auditory hallucinations actively attended to, lack of insight into psychotic nature of beliefs.',
    candidates: [
      { id: 'schizophrenia', label: 'Schizophrenia', isCorrect: true },
      { id: 'schizoaffective', label: 'Schizoaffective Disorder', isCorrect: false, ruleOut: 'Ruled out because there are no concurrent major depressive or manic episodes meeting Criterion A mood requirements alongside psychotic symptoms.' },
      { id: 'schizophreniform', label: 'Schizophreniform Disorder', isCorrect: false, ruleOut: 'Ruled out because the total illness duration (including prodromal functional deterioration) has lasted 7 months, exceeding the 6-month upper boundary.' },
      { id: 'delusional', label: 'Delusional Disorder', isCorrect: false, ruleOut: 'Ruled out because prominent auditory hallucinations, alogia, and marked affective flattening are present, which violates Delusional Disorder Criterion A.' }
    ],
    distinguishingFeature: 'DSM-5-TR Schizophrenia Criterion C mandates continuous signs of disturbance for at least 6 months, including at least 1 month of active Criterion A symptoms (delusions, hallucinations, or disorganized speech).'
  },
  {
    id: 'diff-4',
    domain: 'Eating Disorders',
    title: 'Case Presentation: 19-year-old Ballet Dancer',
    prose: 'Patient is admitted with severe bradycardia and hypokalemia. Height 168 cm, weight 41 kg (BMI 14.5 kg/m²). She endorses an intense, terrifying fear of gaining weight and a distorted perception of her thighs as "repulsively fat". She severely restricts caloric intake, but over the past 4 months has had recurring episodes of eating subjective large amounts of food followed immediately by self-induced vomiting and laxative misuse.',
    mse: 'MSE: Emaciated appearance, lanugo hair on arms, intense anxiety regarding intravenous nutritional support, hyper-focused on caloric numbers.',
    candidates: [
      { id: 'anorexia-bp', label: 'Anorexia Nervosa (Binge-Eating/Purging Type)', isCorrect: true },
      { id: 'bulimia', label: 'Bulimia Nervosa', isCorrect: false, ruleOut: 'Crucially ruled out because patient is significantly underweight (BMI 14.5 kg/m²). By DSM-5-TR diagnostic hierarchy, if criteria for Anorexia Nervosa are met, Anorexia takes strict diagnostic precedence over Bulimia.' },
      { id: 'bed', label: 'Binge Eating Disorder (BED)', isCorrect: false, ruleOut: 'Ruled out due to compensatory purging and sub-normal body weight.' },
      { id: 'arfid', label: 'Avoidant/Restrictive Food Intake Disorder (ARFID)', isCorrect: false, ruleOut: 'Ruled out because weight restriction is driven by intense fear of fatness and perceptual body image disturbance.' }
    ],
    distinguishingFeature: 'Underweight status (Criterion A: BMI < 18.5 kg/m²) is the absolute diagnostic boundary separating Anorexia Nervosa (Binge/Purge type) from Bulimia Nervosa.'
  },
  {
    id: 'diff-5',
    domain: 'Personality Disorders',
    title: 'Case Presentation: 27-year-old Graphic Artist',
    prose: 'Patient presents with a lifelong pattern of intense emotional storms, marked fear of abandonment leading to frantic efforts to avoid perceived rejection, a shifting sense of self, recurrent suicidal threats during interpersonal conflicts, chronic feelings of emptiness, and rapid mood shifts lasting only a few hours at a time.',
    mse: 'MSE: Labile affect shifting rapidly between tearful despair and guarded hostility; scars from superficial cutting visible on forearms; cognitive testing intact without formal thought disorder.',
    candidates: [
      { id: 'borderline', label: 'Borderline Personality Disorder (BPD)', isCorrect: true },
      { id: 'bipolar-2', label: 'Bipolar II Disorder', isCorrect: false, ruleOut: 'Ruled out because affective instability shifts over hours in response to interpersonal stressors rather than sustaining discrete hypomanic and depressive episodes lasting days to weeks.' },
      { id: 'histrionic', label: 'Histrionic Personality Disorder', isCorrect: false, ruleOut: 'Ruled out because BPD is distinguished by chronic emptiness, intense fears of abandonment, identity disturbance, and self-harming/suicidal behaviors.' },
      { id: 'ptsd', label: 'Post-Traumatic Stress Disorder', isCorrect: false, ruleOut: 'Ruled out as sole diagnosis because symptoms reflect pervasive characterological identity, relational, and self-injurious instability across adulthood.' }
    ],
    distinguishingFeature: 'DSM-5-TR BPD requires pervasive instability in interpersonal relationships, self-image, and affects, along with marked impulsivity and recurrent self-harming behavior.'
  },
  {
    id: 'diff-6',
    domain: 'Obsessive-Compulsive Spectrum',
    title: 'Case Presentation: 31-year-old Software Quality Engineer',
    prose: 'Patient is referred by his spouse due to extreme marital friction over household rules. He insists that everything in their home must adhere to rigid alphabetical and color-coordinated order, works 80 hours a week because "no one else meets my exact standards", and cannot delegate tasks. He views his standards as completely rational, superior, and egosyntonic, and has no discrete recurrent egodystonic intrusive thoughts or repetitive cleaning rituals.',
    mse: 'MSE: Formal, moralistic, perfectionistic demeanor. Denies egodystonic obsessions or distress about his habits; reports frustration that others fail to adhere to proper rules.',
    candidates: [
      { id: 'ocpd', label: 'Obsessive-Compulsive Personality Disorder (OCPD)', isCorrect: true },
      { id: 'ocd', label: 'Obsessive-Compulsive Disorder (OCD)', isCorrect: false, ruleOut: 'Ruled out because patient lacks true egodystonic obsessions (intrusive unwanted thoughts causing distress) and compulsions; his perfectionism is pervasive and egosyntonic.' },
      { id: 'autism', label: 'Autism Spectrum Disorder', isCorrect: false, ruleOut: 'Ruled out due to absence of childhood social-communication deficits or repetitive motor stereotypies.' },
      { id: 'narcissistic', label: 'Narcissistic Personality Disorder', isCorrect: false, ruleOut: 'Ruled out because preoccupation is driven by devotion to rules, order, and productivity rather than a desire for admiration, grandiosity, or status.' }
    ],
    distinguishingFeature: 'OCD features egodystonic obsessions and compulsions recognized as distressing and irrational; OCPD features a pervasive, egosyntonic preoccupation with orderliness, perfectionism, and control.'
  },
  {
    id: 'diff-7',
    domain: 'Culture & Somatic Concepts of Distress',
    title: 'Case Presentation: 23-year-old Male from Rajasthan',
    prose: 'Patient presents to a clinic in New Delhi complaining of extreme physical exhaustion, memory weakness, burning sensations during micturition, and loss of facial lustre. He attributes these symptoms entirely to nocturnal seminal emissions, stating that semen is the precious concentrated essence of 40 drops of blood, and that its depletion has permanently weakened his brain and vitality. Extensive urological and blood investigations are completely normal.',
    mse: 'MSE: Marked somatic anxiety and guilt regarding nocturnal emissions; cultural somatic idiom coherent with traditional Ayurvedic sukra health concepts.',
    candidates: [
      { id: 'dhat', label: 'Dhat Syndrome (Cultural Concept of Distress)', isCorrect: true },
      { id: 'illness-anxiety', label: 'Illness Anxiety Disorder', isCorrect: false, ruleOut: 'Ruled out because distress is culturally bound to semen loss and bodily vitality depletion rather than fear of having an unspecified major medical illness like cancer.' },
      { id: 'somatic-symptom', label: 'Somatic Symptom Disorder', isCorrect: false, ruleOut: 'Ruled out as standalone category because symptoms constitute the classic DSM-5-TR cultural concept of distress (Dhat syndrome) prevalent across South Asia.' },
      { id: 'mdd', label: 'Major Depressive Disorder with Somatic Features', isCorrect: false, ruleOut: 'Ruled out because the core syndrome is localized somatic anxiety regarding semen loss without pervasive vegetative depressive signs.' }
    ],
    distinguishingFeature: 'DSM-5-TR explicitly includes Dhat syndrome in its Cultural Concepts of Distress appendix, recognizing semen loss and vitality depletion as a culturally sanctioned idiom of distress.'
  },
  {
    id: 'diff-8',
    domain: 'Stress & Trauma Nosology',
    title: 'Case Presentation: 34-year-old Bank Teller',
    prose: 'Two weeks ago, patient was held at gunpoint during an armed bank robbery. Since then, he experiences recurrent intrusive nightmares of the event, dissociative flashbacks where he feels back in the vault, emotional detachment from his family, hypervigilance, and avoids walking near banks. The symptoms have been present continuously for 14 days.',
    mse: 'MSE: Startle response to loud sounds, tearful when describing event, hypervigilant, oriented to person/place/time.',
    candidates: [
      { id: 'acute-stress', label: 'Acute Stress Disorder (ASD)', isCorrect: true },
      { id: 'ptsd', label: 'Post-Traumatic Stress Disorder (PTSD)', isCorrect: false, ruleOut: 'Strictly ruled out because symptoms have been present for only 14 days. By DSM-5-TR Criterion F, PTSD diagnosis requires symptoms to persist for more than 1 full month (>30 days).' },
      { id: 'adjustment', label: 'Adjustment Disorder', isCorrect: false, ruleOut: 'Ruled out because exposure to life-threatening trauma with full dissociative/intrusion symptoms meets Criterion A for Acute Stress Disorder.' },
      { id: 'panic', label: 'Panic Disorder', isCorrect: false, ruleOut: 'Ruled out because panic sensations are triggered by trauma cues rather than unexpected recurrent surges.' }
    ],
    distinguishingFeature: 'The defining temporal boundary between Acute Stress Disorder and PTSD is 1 month: ASD is diagnosed from 3 days to 1 month post-trauma; PTSD requires symptom persistence beyond 1 month.'
  }
];

let currentTrainerIndex = 0;
let selectedTrainerCandidate = null;
let trainerScore = { total: 0, correct: 0 };

function openTrainerModal() {
  const modal = document.getElementById('trainerModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  loadTrainerCase(currentTrainerIndex);
}

function closeTrainerModal(e) {
  if (e && e.target && e.target !== document.getElementById('trainerModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('trainerModal');
  if (modal) modal.classList.add('hidden');
}

function loadTrainerCase(idx) {
  currentTrainerIndex = idx % TRAINER_VIGNETTES.length;
  const item = TRAINER_VIGNETTES[currentTrainerIndex];
  selectedTrainerCandidate = null;

  document.getElementById('trainerCaseIndex').textContent = `CASE VIGNETTE ${currentTrainerIndex + 1} OF ${TRAINER_VIGNETTES.length}`;
  document.getElementById('trainerCaseDomain').textContent = item.domain;
  document.getElementById('trainerCaseTitle').textContent = item.title;
  document.getElementById('trainerCaseProse').textContent = item.prose;
  document.getElementById('trainerCaseMSE').innerHTML = `<strong>Clinical Mental Status Examination (MSE):</strong> ${esc(item.mse)}`;

  const grid = document.getElementById('trainerOptionsGrid');
  grid.innerHTML = item.candidates.map((c, i) => `
    <button class="trainer-option-btn" id="topt-${i}" onclick="selectTrainerOption(${i})">
      ${esc(c.label)}
    </button>
  `).join('');

  document.getElementById('trainerFeedbackCard').classList.add('hidden');
  document.getElementById('trainerEvalBtn').classList.remove('hidden');
  document.getElementById('trainerNextBtn').classList.add('hidden');
}

function selectTrainerOption(candidateIndex) {
  selectedTrainerCandidate = candidateIndex;
  document.querySelectorAll('.trainer-option-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === candidateIndex);
  });
}

function evaluateTrainerDiagnosis() {
  if (selectedTrainerCandidate === null) {
    toast('Please select a candidate diagnosis to evaluate.', 'warning');
    return;
  }
  const item = TRAINER_VIGNETTES[currentTrainerIndex];
  const chosen = item.candidates[selectedTrainerCandidate];
  const isCorrect = chosen.isCorrect;

  trainerScore.total++;
  if (isCorrect) trainerScore.correct++;

  const pct = Math.round((trainerScore.correct / trainerScore.total) * 100);
  const badge = document.getElementById('trainerScoreBadge');
  if (badge) badge.textContent = `Accuracy: ${trainerScore.correct} / ${trainerScore.total} (${pct}%)`;

  item.candidates.forEach((c, i) => {
    const btn = document.getElementById(`topt-${i}`);
    if (btn) {
      if (c.isCorrect) btn.classList.add('correct');
      else if (i === selectedTrainerCandidate) btn.classList.add('incorrect');
    }
  });

  const feedbackCard = document.getElementById('trainerFeedbackCard');
  const feedbackTitle = document.getElementById('trainerFeedbackTitle');
  const distText = document.getElementById('trainerDistinguishingText');
  const ruleOutList = document.getElementById('trainerRuleOutsList');

  if (feedbackCard && feedbackTitle && distText && ruleOutList) {
    feedbackCard.classList.remove('hidden');
    if (isCorrect) {
      feedbackCard.style.borderColor = 'var(--mint)';
      feedbackCard.style.background = 'var(--mint-soft)';
      feedbackTitle.innerHTML = `<span style="color:var(--mint-deep)">✔ Diagnostic Evaluation Correct: ${esc(chosen.label)}</span>`;
    } else {
      feedbackCard.style.borderColor = 'var(--crimson)';
      feedbackCard.style.background = 'var(--crimson-soft)';
      feedbackTitle.innerHTML = `<span style="color:var(--crimson-deep)">✘ Clinical Rule-Out: Primary Diagnosis is ${esc(item.candidates.find(c => c.isCorrect).label)}</span>`;
    }

    distText.innerHTML = `<strong>The Distinguishing Clinical Feature:</strong> ${esc(item.distinguishingFeature)}`;
    ruleOutList.innerHTML = item.candidates.map(c => `
      <li><strong>${esc(c.label)}:</strong> ${c.isCorrect ? '<span style="color:var(--mint-deep)">Primary Diagnosis confirmed by symptom cluster.</span>' : esc(c.ruleOut)}</li>
    `).join('');
  }

  document.getElementById('trainerEvalBtn').classList.add('hidden');
  document.getElementById('trainerNextBtn').classList.remove('hidden');
}

function nextTrainerCase() {
  loadTrainerCase(currentTrainerIndex + 1);
}

// ── 5. FOCUS TIMER & BREATHING ORB ──────────────────────────
let focusDurationSec = 25 * 60;
let focusRemainingSec = 25 * 60;
let isFocusRunning = false;
let focusIntervalTimer = null;

function openFocusTimerModal() {
  const modal = document.getElementById('focusModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  updateFocusDisplay();
}

function closeFocusModal(e) {
  if (e && e.target && e.target !== document.getElementById('focusModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('focusModal');
  if (modal) modal.classList.add('hidden');
}

function setFocusTimerDuration(mins) {
  focusDurationSec = mins * 60;
  focusRemainingSec = focusDurationSec;
  isFocusRunning = false;
  clearInterval(focusIntervalTimer);
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (toggleBtn) toggleBtn.textContent = 'Start Focus Session';

  ['focusMode25', 'focusMode5', 'focusMode15'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const activeBtn = document.getElementById(`focusMode${mins}`);
  if (activeBtn) activeBtn.classList.add('active');

  updateFocusDisplay();
}

function toggleFocusTimer() {
  isFocusRunning = !isFocusRunning;
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (isFocusRunning) {
    if (toggleBtn) toggleBtn.textContent = 'Pause Session';
    focusIntervalTimer = setInterval(() => {
      if (focusRemainingSec > 0) {
        focusRemainingSec--;
        updateFocusDisplay();
      } else {
        clearInterval(focusIntervalTimer);
        isFocusRunning = false;
        if (toggleBtn) toggleBtn.textContent = 'Session Complete!';
        toast('Focus Session Complete! Take a gentle breath and relax.', 'info', 6000);
      }
    }, 1000);
  } else {
    clearInterval(focusIntervalTimer);
    if (toggleBtn) toggleBtn.textContent = 'Resume Session';
  }
}

function resetFocusTimer() {
  clearInterval(focusIntervalTimer);
  isFocusRunning = false;
  focusRemainingSec = focusDurationSec;
  const toggleBtn = document.getElementById('focusTimerToggleBtn');
  if (toggleBtn) toggleBtn.textContent = 'Start Focus Session';
  updateFocusDisplay();
}

function updateFocusDisplay() {
  const m = Math.floor(focusRemainingSec / 60);
  const s = focusRemainingSec % 60;
  const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  const modalDisplay = document.getElementById('focusModalDisplay');
  const readerDisplay = document.getElementById('readerFocusTimerDisplay');
  if (modalDisplay) modalDisplay.textContent = str;
  if (readerDisplay) readerDisplay.textContent = str;
}

// ── 6. CRISIS SUPPORT MODAL ─────────────────────────────────
function openSupportModal() {
  closeExploreDropdown();
  const modal = document.getElementById('supportModal');
  if (modal) modal.classList.remove('hidden');
}

function closeSupportModal(e) {
  if (e && e.target && e.target !== document.getElementById('supportModal') && !e.target.closest('.icon-btn')) return;
  const modal = document.getElementById('supportModal');
  if (modal) modal.classList.add('hidden');
}

// Global window registration for Phase 6
window.openLexiconModal = openLexiconModal;
window.closeLexiconModal = closeLexiconModal;
window.selectLexiconLetter = selectLexiconLetter;
window.selectLexiconVolume = selectLexiconVolume;
window.filterLexicon = filterLexicon;
window.openChapterFromLexicon = openChapterFromLexicon;

window.openConstellationModal = openConstellationModal;
window.closeConstellationModal = closeConstellationModal;
window.setConstellationView = setConstellationView;
window.filterConstellationByVolume = filterConstellationByVolume;
window.hoverConstellationNode = hoverConstellationNode;
window.leaveConstellationNode = leaveConstellationNode;
window.selectConstellationNode = selectConstellationNode;
window.closeConstellationInspector = closeConstellationInspector;
window.searchConstellation = searchConstellation;
window.constellationZoom = constellationZoom;
window.constellationResetZoom = constellationResetZoom;
window.openChapterFromConstellation = openChapterFromConstellation;
window.toggleQuizHint = toggleQuizHint;
window.jumpToQuizQuestion = jumpToQuizQuestion;

window.openTimelineModal = openTimelineModal;
window.closeTimelineModal = closeTimelineModal;
window.filterTimeline = filterTimeline;

window.openTrainerModal = openTrainerModal;
window.closeTrainerModal = closeTrainerModal;
window.selectTrainerOption = selectTrainerOption;
window.evaluateTrainerDiagnosis = evaluateTrainerDiagnosis;
window.nextTrainerCase = nextTrainerCase;

window.openFocusTimerModal = openFocusTimerModal;
window.closeFocusModal = closeFocusModal;
window.setFocusTimerDuration = setFocusTimerDuration;
window.toggleFocusTimer = toggleFocusTimer;
window.resetFocusTimer = resetFocusTimer;

window.openSupportModal = openSupportModal;
window.closeSupportModal = closeSupportModal;
window.openExploreItem = openExploreItem;


// ══════════════════════════════════════════════════════════════
// CLINICAL REFERENCES & APA-7 COMPENDIUM
// ══════════════════════════════════════════════════════════════

let currentRefCategory = 'all';

function formatCitationHtml(raw) {
  if (!raw) return '';
  return esc(raw).replace(/(https?:\/\/[^\s]+)/g, url => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ref-link">${url} ↗</a>`;
  });
}

function getRefCategory(key, citation) {
  key = (key || '').toLowerCase();
  const text = (citation || '').toLowerCase();
  if (['apa2022', 'who2022', 'gururaj2016', 'goi2017'].includes(key)) return 'standards';
  if (['watson1920', 'clark1986', 'klein1993', 'foa1986', 'salkovskis1985', 'borkovec1998', 'ehlers2000', 'seligman1971'].includes(key) || text.includes('panic') || text.includes('phobia') || text.includes('anxiety') || text.includes('ptsd') || text.includes('obsess') || text.includes('worry')) return 'anxiety';
  if (['beck1976', 'beck1979', 'cade1949', 'rosenthal1984', 'joiner2005', 'durkheim1897', 'seligman1975'].includes(key) || text.includes('depress') || text.includes('bipolar') || text.includes('suicide') || text.includes('affective') || text.includes('seasonal affective')) return 'mood';
  if (['arcelus2011', 'hudson2007', 'russell1979', 'fairburn2008', 'lock2013'].includes(key) || text.includes('eating') || text.includes('anorexia') || text.includes('bulimia') || text.includes('binge')) return 'eating';
  if (['cleckley1941', 'hare2003', 'linehan1993'].includes(key) || text.includes('personality') || text.includes('psychopath') || text.includes('borderline')) return 'personality';
  if (['bleuler1911', 'howes2009', 'cerletti1938'].includes(key) || text.includes('schizophren') || text.includes('psychot') || text.includes('dementia praecox')) return 'psychotic';
  if (['wolpe1958', 'ayllon1968', 'rogers1951', 'rogers1957', 'maslow1954', 'frank1961', 'yalom2020', 'gottman1999', 'johnson2004', 'segal2002', 'kabatzinn1990', 'skinner1953', 'bandura1977', 'ellis1962', 'tuckman1965'].includes(key) || text.includes('therapy') || text.includes('therap') || text.includes('psychotherap') || text.includes('counsel')) return 'therapies';
  if (['corrigan2004', 'addis2003', 'levant1992', 'kleinman1978', 'kleinman1988', 'patel2007', 'rosenhan1973', 'goffman1963', 'szasz1960'].includes(key) || text.includes('culture') || text.includes('stigma') || text.includes('masculin') || text.includes('anthropolog')) return 'culture';
  if (['selye1936', 'lazarus1984', 'annafreud1936'].includes(key) || text.includes('stress') || text.includes('coping') || text.includes('appraisal') || text.includes('defence')) return 'stress';
  return 'other';
}

function getRefCategoryLabel(cat) {
  const map = {
    standards: 'DSM & ICD Standards',
    anxiety: 'Anxiety & Trauma',
    mood: 'Mood & Affective',
    eating: 'Eating Disorders',
    personality: 'Personality Disorders',
    psychotic: 'Psychosis & Schizophrenia',
    therapies: 'Clinical Therapies',
    culture: 'Culture, Gender & Stigma',
    stress: 'Stress & Coping',
    other: 'General Clinical'
  };
  return map[cat] || 'Clinical Reference';
}

function getChaptersCitingRef(refKey) {
  if (typeof KB === 'undefined' || !Array.isArray(KB)) return [];
  return KB.filter(ch => (ch.refs || []).includes(refKey)).map(ch => ({
    id: ch.id,
    name: ch.name,
    volume: ch.volume
  }));
}

function openReferencesModal() {
  const m = document.getElementById('referencesModal');
  if (!m) return;
  m.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  const inp = document.getElementById('refSearchInput');
  if (inp) {
    inp.value = '';
    inp.focus();
  }
  currentRefCategory = 'all';
  updateRefCategoryPills();
  renderReferencesList();
}

function closeReferencesModal(e) {
  if (e && e.target && e.target.closest && e.target.closest('.modal-references')) return;
  const m = document.getElementById('referencesModal');
  if (m) m.classList.add('hidden');
  document.body.style.overflow = '';
}

function updateRefCategoryPills() {
  document.querySelectorAll('.ref-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === currentRefCategory);
  });
}

function setRefCategoryFilter(cat) {
  currentRefCategory = cat;
  updateRefCategoryPills();
  renderReferencesList();
}

function filterReferencesList() {
  const inp = document.getElementById('refSearchInput');
  const clearBtn = document.getElementById('refSearchClear');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !inp || !inp.value.trim());
  }
  renderReferencesList();
}

function clearRefSearch() {
  const inp = document.getElementById('refSearchInput');
  if (inp) {
    inp.value = '';
    inp.focus();
  }
  const clearBtn = document.getElementById('refSearchClear');
  if (clearBtn) clearBtn.classList.add('hidden');
  renderReferencesList();
}

function renderReferencesList() {
  const container = document.getElementById('refListContainer');
  const countEl = document.getElementById('refMatchesCount');
  if (!container) return;

  const refMap = window.REFERENCES || {};
  const query = (document.getElementById('refSearchInput')?.value || '').toLowerCase().trim();

  let keys = Object.keys(refMap);
  const totalAll = keys.length;
  const countAllEl = document.getElementById('refCountAll');
  if (countAllEl) countAllEl.textContent = totalAll;

  // Filter by category
  if (currentRefCategory !== 'all') {
    keys = keys.filter(k => {
      const cat = getRefCategory(k, refMap[k]);
      return cat === currentRefCategory;
    });
  }

  // Filter by search query
  if (query) {
    keys = keys.filter(k => {
      const cit = (refMap[k] || '').toLowerCase();
      const catLabel = getRefCategoryLabel(getRefCategory(k, refMap[k])).toLowerCase();
      return k.toLowerCase().includes(query) || cit.includes(query) || catLabel.includes(query);
    });
  }

  if (countEl) {
    countEl.textContent = `Showing ${keys.length} of ${totalAll} verified references`;
  }

  if (!keys.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:var(--sp-8);color:var(--text-3)">
        <p style="font-size:var(--text-lg);font-weight:600;margin-bottom:var(--sp-2)">No references matched your query</p>
        <p style="font-size:var(--text-sm)">Try searching for another author (e.g., Beck, Rogers, Freud, Kleinman) or clear the filter.</p>
        <button class="btn btn-outline btn-sm" onclick="clearRefSearch(); setRefCategoryFilter('all');" style="margin-top:var(--sp-3)">
          Clear Search &amp; Show All
        </button>
      </div>
    `;
    return;
  }

  let html = '';
  keys.forEach(k => {
    const raw = refMap[k] || '';
    const cat = getRefCategory(k, raw);
    const catLabel = getRefCategoryLabel(cat);
    const citedIn = getChaptersCitingRef(k);

    const linkMatch = raw.match(/(https?:\/\/[^\s]+)/);
    const externalLink = linkMatch ? linkMatch[0] : null;

    html += `
      <article class="ref-card" id="ref-card-${k}">
        <div class="ref-card-header">
          <span class="ref-key-badge">[${esc(k)}]</span>
          <span class="ref-domain-tag">${esc(catLabel)}</span>
        </div>
        <div class="ref-citation-prose">${formatCitationHtml(raw)}</div>
        <div class="ref-card-footer">
          <div class="ref-cited-chapters">
            <span>Cited in:</span>
            ${citedIn.length ? citedIn.map(ch => `
              <a href="javascript:void(0)" onclick="closeReferencesModal(); openStudyTopic('${esc(ch.id)}');" class="ref-chapter-chip" title="Read chapter: ${esc(ch.name)}">
                ${esc(ch.id)}
              </a>
            `).join('') : '<span style="font-style:italic;opacity:0.75">Foundational Source / Appendix B</span>'}
          </div>
          <div class="ref-card-actions">
            ${externalLink ? `
              <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="ref-doi-btn" title="Open source DOI or publication URL">
                <span>↗ Open Source</span>
              </a>
            ` : ''}
            <button type="button" class="ref-copy-btn" onclick="copyCitation('${k}')" title="Copy full APA-7 citation">
              <span>📋 Copy</span>
            </button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

function copyCitation(refKey) {
  const refMap = window.REFERENCES || {};
  const raw = refMap[refKey];
  if (!raw) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(raw).then(() => {
      toast(`Copied citation [${refKey}] to clipboard!`, 'success');
    }).catch(() => {
      fallbackCopyText(raw);
    });
  } else {
    fallbackCopyText(raw);
  }
}

function copyAllCitations() {
  const refMap = window.REFERENCES || {};
  const list = Object.keys(refMap).sort().map(k => refMap[k]).join('\n\n');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(list).then(() => {
      toast(`Copied all ${Object.keys(refMap).length} references to clipboard!`, 'success');
    }).catch(() => {
      fallbackCopyText(list);
    });
  } else {
    fallbackCopyText(list);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    toast('Citation copied to clipboard!', 'success');
  } catch (e) {
    toast('Unable to copy citation automatically', 'error');
  }
  document.body.removeChild(ta);
}

// Global modal hooks
window.openReferencesModal = openReferencesModal;
window.closeReferencesModal = closeReferencesModal;
window.setRefCategoryFilter = setRefCategoryFilter;
window.filterReferencesList = filterReferencesList;
window.clearRefSearch = clearRefSearch;
window.copyCitation = copyCitation;
window.copyAllCitations = copyAllCitations;
window.formatCitationHtml = formatCitationHtml;
