import { Provider, ServiceDetail, Testimonial, FAQItem, PatientResource } from "./types";

export const PROVIDERS: Provider[] = [
  {
    id: "srinivasan",
    name: "Dr. S.V. Srinivasan, MD",
    credentials: "MD, Board-Certified Psychiatrist",
    specialty: "Psychiatric Evaluations & Medication Management (Adult & Adolescent)",
    bio: "Dr. Srinivasan is a highly respected, board-certified psychiatrist with over 20 years of experience providing compassionate, evidence-based care. Specializing in advanced diagnostics, personalized psychopharmacology, and comprehensive treatment plans, Dr. Srinivasan supports individuals in overcoming complex mood, anxiety, and behavioral challenges.",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "furst",
    name: "Patricia Furst, LCSW",
    credentials: "LCSW, Clinical Social Worker & Therapist",
    specialty: "Individual, Family & Cognitive Behavioral Therapy",
    bio: "Patricia is an empathetic clinical social worker dedicated to helping children, adolescents, and adults navigate life transitions, relational challenges, and trauma. Utilizing Cognitive Behavioral Therapy (CBT), mindfulness practices, and client-centered psychotherapy, she partners with patients to build resilience and positive coping mechanisms.",
    photoUrl: "/src/assets/images/patricia_furst_portrait_1783363025373.jpg"
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "psychiatric-evaluation",
    title: "Psychiatric Evaluation",
    summary: "Comprehensive diagnostic evaluations to understand your unique mental health history, symptoms, and needs.",
    overview: "A comprehensive psychiatric evaluation is the essential first step in designing your path to wellness. During this thorough, 60-to-90-minute session, we explore your unique medical, emotional, and social history, listen to your current concerns, and clarify symptoms to establish an accurate, objective diagnostic profile.",
    symptoms: [
      "Persistent feelings of sadness, numbness, or despair",
      "Overwhelming worry, fear, or persistent state of high-alert",
      "Sudden, unprompted changes in mood or energy levels",
      "Difficulty focusing, making decisions, or completing tasks",
      "Changes in sleeping or eating behaviors",
      "Disturbing thoughts, memories, or unexplained emotional responses"
    ],
    treatmentOptions: [
      "Diagnostic clarification and diagnostic report",
      "Personalized, clinical treatment plan recommendations",
      "Integrated screening for co-occurring medical or substance use issues",
      "Referrals to specialized therapeutic modalities or family programs"
    ],
    benefits: [
      "Gaining absolute clarity on your symptoms and mental health profile",
      "Knowing you have a safe, confidential, and judgment-free clinical evaluation",
      "An individualized clinical map designed around your personal health goals",
      "Confidence in receiving a correct, medically validated starting point"
    ],
    faq: [
      { q: "What should I bring to my first evaluation?", a: "Please bring a list of your current medications (with dosages), previous mental health treatment records, and your completed new patient intake forms." },
      { q: "How long does a psychiatric evaluation take?", a: "Typically, an initial psychiatric evaluation takes between 60 to 90 minutes of dedicated one-on-one clinical time." }
    ],
    iconName: "FileCheck"
  },
  {
    id: "medication-management",
    title: "Medication Management",
    summary: "Professional monitoring and fine-tuning of psychiatric medications to maximize therapeutic benefit.",
    overview: "Medications can be highly effective tools in balancing brain chemistry and relieving severe symptoms. Our medication management services provide ongoing, highly precise monitoring of your prescriptions to ensure maximum efficacy, minimal side effects, and safe co-administration with other treatments.",
    symptoms: [
      "Inconsistent symptom relief from current mental health medications",
      "Concerning side effects that impact your daily quality of life",
      "Questions about drug interactions or long-term medication use",
      "A desire to optimize or safely adjust current medication regimens"
    ],
    treatmentOptions: [
      "Precision pharmacological selection based on symptoms and history",
      "Ongoing check-ins to monitor efficacy, tolerability, and dosage safety",
      "Collaborative planning to incorporate behavioral therapy with medication",
      "Safe, structured medication tapering programs when appropriate"
    ],
    benefits: [
      "Safe and expert oversight of your psychiatric prescription care",
      "Ongoing adjustments based on your active lifestyle and physical health",
      "Direct communication with your primary care provider for holistic care",
      "Minimizing risk of adverse interactions and adverse side effects"
    ],
    faq: [
      { q: "How often will we meet for medication management?", a: "Initially, we may meet every 2 to 4 weeks. Once stabilized, appointments are typically scheduled every 1 to 3 months depending on clinical needs." },
      { q: "Can I stop taking my medication once I feel better?", a: "You should never stop or adjust your medication without consulting Dr. Srinivasan. Abruptly halting psychiatric medication can cause uncomfortable or dangerous withdrawal symptoms." }
    ],
    iconName: "Pills"
  },
  {
    id: "individual-therapy",
    title: "Individual Therapy",
    summary: "One-on-one personal therapy to build coping strategies, heal from trauma, and foster resilience.",
    overview: "Individual psychotherapy offers a dedicated, compassionate space to focus entirely on your mental wellness. Working one-on-one with Patricia Furst, LCSW, you will explore thinking patterns, emotional responses, and life events to uncover the root causes of difficulties and cultivate lasting growth.",
    symptoms: [
      "Feeling chronically overwhelmed by everyday stress",
      "Difficulty managing anger, sadness, or grief",
      "Navigating major life transitions or relationship conflicts",
      "Negative self-talk, low self-esteem, or identity struggles"
    ],
    treatmentOptions: [
      "Cognitive Behavioral Therapy (CBT) to restructure harmful thoughts",
      "Mindfulness-Based Stress Reduction and somatic self-soothing",
      "Trauma-focused therapy to safely process painful memories",
      "Solution-Focused Therapy for proactive life-goal achievement"
    ],
    benefits: [
      "Developing practical, lifelong strategies to manage emotional triggers",
      "A deep, supportive therapeutic alliance built on trust",
      "Improved self-awareness, emotional expression, and boundary-setting",
      "Substantial reductions in baseline anxiety and depressive symptoms"
    ],
    faq: [
      { q: "How many therapy sessions will I need?", a: "This varies significantly. Some patients experience substantial growth in 8 to 12 sessions, while others find ongoing therapy helpful for long-term support." },
      { q: "Is what I share in therapy confidential?", a: "Yes, absolute confidentiality is protected by HIPAA. Exceptions are extremely rare and apply only when there is an immediate danger to yourself or others." }
    ],
    iconName: "User"
  },
  {
    id: "family-therapy",
    title: "Family Therapy",
    summary: "Strengthening relational bonds, improving communication, and resolving household conflicts.",
    overview: "Families are complex systems, and when one member struggles, the entire household is affected. Family therapy helps identify communication breakdowns, balance household dynamics, heal relational ruptures, and build a unified foundation of mutual respect and compassion.",
    symptoms: [
      "Chronic, exhausting household arguments or verbal conflicts",
      "Difficulty parenting during adolescent behavioral transitions",
      "Relational strain caused by grief, separation, or serious illness",
      "Feeling disconnected or walking on eggshells inside your home"
    ],
    treatmentOptions: [
      "Systemic family mapping and healthy boundary education",
      "Active-listening exercises and constructive conflict-resolution training",
      "Collaborative parenting planning and supportive coaching",
      "Cooperative sibling dynamic development"
    ],
    benefits: [
      "Re-establishing clear, kind communication channels at home",
      "Resolving deeply held resentments and renewing emotional intimacy",
      "Equipping parents with consistent, loving, and effective guidelines",
      "Fostering a supportive home environment where every voice is heard"
    ],
    faq: [
      { q: "Does every family member need to attend?", a: "While having everyone participate is ideal, family therapy can still be highly effective even if only a few key members attend initially." },
      { q: "How can family therapy help with a struggling child?", a: "It ensures the child is supported by the family system and gives parents tools to maintain a therapeutic structure at home." }
    ],
    iconName: "Users"
  },
  {
    id: "child-adolescent-psychiatry",
    title: "Child & Adolescent Psychiatry",
    summary: "Specialized, gentle developmental and mental health care designed specifically for youth.",
    overview: "Children and teens express distress differently than adults. Our specialized child and adolescent programs provide a warm, gentle, and creative approach to clinical diagnoses, medication care, and psychotherapy, helping young people navigate developmental, academic, and peer struggles.",
    symptoms: [
      "Sudden, unprompted drops in school performance or attendance",
      "Social isolation, withdrawal from friends, or stopping beloved activities",
      "Extreme irritability, tantrums, or highly oppositional behavior",
      "Pervasive school anxiety, separation fear, or sleep disturbances"
    ],
    treatmentOptions: [
      "Developmentally sensitive diagnostic screening and parent consultations",
      "Conservative, low-dose pediatric medication management when indicated",
      "Play-integrated counseling and expressive arts therapy",
      "School-coordination support and behavioral modifications"
    ],
    benefits: [
      "Intervening early to prevent behavioral patterns from disrupting growth",
      "Giving parents clear guidance and validation",
      "Fostering a positive, trusting outlook on mental healthcare for youth",
      "Re-establishing a happy, healthy childhood and academic trajectory"
    ],
    faq: [
      { q: "At what age can children start treatment?", a: "We see pediatric patients starting from school age (5+) through adolescence (18) and young adulthood." },
      { q: "How involved will I be as a parent?", a: "Extremely involved. While adolescents have a right to clinical privacy, parents are active partners in planning and receiving progress updates." }
    ],
    iconName: "Baby"
  },
  {
    id: "anxiety-treatment",
    title: "Anxiety Treatment",
    summary: "Relief from chronic worry, panic attacks, social anxiety, and generalized tension.",
    overview: "Anxiety can lock you in a persistent state of physical and mental alert, preventing you from enjoying your life. We offer a comprehensive approach combining neurobiological interventions, evidence-based therapy, and lifestyle guidance to quiet your nervous system and restore emotional peace.",
    symptoms: [
      "Constant, exhaustive looping worries that won't turn off",
      "Somatic panic symptoms like chest tightness, racing heart, and sweating",
      "Avoiding social settings, driving, or public places out of fear",
      "Muscle tension, insomnia, and an inability to sit still or relax"
    ],
    treatmentOptions: [
      "CBT to identify, challenge, and re-frame irrational fear thoughts",
      "Exposure and Response Prevention (ERP) for phobias and OCD patterns",
      "Safe, non-habit-forming anti-anxiety medication management",
      "Autonomic nervous system training, deep breathing, and biofeedback"
    ],
    benefits: [
      "Reclaiming freedom of movement and participating in life without panic",
      "Learning to quiet your biological stress response in seconds",
      "Enjoying deeper, restful sleep and elevated physical energy levels",
      "Confidence in managing unexpected life changes comfortably"
    ],
    faq: [
      { q: "Is medication always required for anxiety?", a: "No. Many patients find complete relief through cognitive behavioral therapy and mindfulness. Medication is an option we discuss together if symptoms severely disrupt function." },
      { q: "How quickly can I expect relief from anxiety?", a: "Coping skills learned in therapy can provide immediate relief during panic, while broader recovery takes several weeks of consistent practice." }
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "depression-treatment",
    title: "Depression Treatment",
    summary: "Empathetic care and advanced medical approaches to overcome clinical depression.",
    overview: "Clinical depression is not a personal failure or simple sadness; it is a profound biological and psychological condition. Our team provides an active, highly supportive blend of modern psychopharmacology and goal-oriented psychotherapy to lift the fog of depression and help you reconnect with meaning.",
    symptoms: [
      "Persistent flat, empty, or heavy mood lasting more than two weeks",
      "Loss of interest in hobbies, friends, and family",
      "Physical exhaustion, lack of motivation, and daily heaviness",
      "Feeling worthless, chronically guilty, or having thoughts of self-harm"
    ],
    treatmentOptions: [
      "Modern, targeted antidepressant prescriptions with minimal side effects",
      "Interpersonal therapy to improve active relationships and support",
      "Behavioral activation to gently reintroduce positive daily routines",
      "Compassionate crisis screening and direct intervention plans"
    ],
    benefits: [
      "Gradually regaining physical energy, motivation, and a positive outlook",
      "Experiencing a renewed capacity to feel joy, humor, and connection",
      "Breaking free from paralyzing guilt and self-critical thought loops",
      "Establishing a resilient framework to prevent future depressive episodes"
    ],
    faq: [
      { q: "What is the difference between sadness and depression?", a: "Sadness is a temporary reaction to life events. Clinical depression is persistent (lasting weeks or months) and interferes with your basic ability to sleep, eat, work, and love." },
      { q: "Are modern antidepressants safe?", a: "Yes, when managed by an expert. Dr. Srinivasan carefully monitors you to ensure the selected medication works efficiently and safely." }
    ],
    iconName: "Sparkles"
  },
  {
    id: "adhd-management",
    title: "ADHD Management",
    summary: "Focused assessments, organizational coaching, and safe pharmaceutical treatments.",
    overview: "Attention-Deficit/Hyperactivity Disorder (ADHD) impacts executive functioning, making organization, time management, and focus incredibly exhausting. We provide accurate assessments, behavioral habit strategies, and highly monitored pharmacological therapies to help you thrive.",
    symptoms: [
      "Inability to start or complete routine tasks, chores, or work",
      "Chronic disorganization, frequent memory lapses, and losing keys/files",
      "Restlessness, constant fidgeting, or an internal sense of urgency",
      "Impulsive spending, relationship instability, or quick emotional flares"
    ],
    treatmentOptions: [
      "Detailed diagnostic assessments of child and adult ADHD profiles",
      "Carefully calibrated stimulant or non-stimulant medications",
      "Executive-functioning coaching, calendar design, and focus exercises",
      "School accommodations (504/IEP planning) and work support guidelines"
    ],
    benefits: [
      "Achieving sustained focus and a sense of calm task completion",
      "Drastically reducing daily frustration and chronic disorganization",
      "Restoring relational trust damaged by lapses in attention",
      "Unlocking your true intellectual potential at school or work"
    ],
    faq: [
      { q: "Do you treat adult ADHD?", a: "Yes. ADHD is a neurodevelopmental condition that frequently persists into adulthood, and we specialize in helping adults manage it successfully." },
      { q: "Do I have to take stimulants if I have ADHD?", a: "No. There are excellent non-stimulant medications and behavioral therapies that provide superb focus support." }
    ],
    iconName: "Zap"
  },
  {
    id: "bipolar-disorder",
    title: "Bipolar Disorder Care",
    summary: "Stabilizing mood swings, maintaining routines, and achieving lasting emotional balance.",
    overview: "Bipolar disorder is characterized by extreme fluctuations in mood, energy, and activity levels. Our practice specializes in providing highly dependable mood-stabilizing medication programs and supportive cognitive therapy to minimize mood swings and help you build a peaceful, predictable lifestyle.",
    symptoms: [
      "Manic periods with high energy, racing thoughts, and no sleep",
      "Severe depressive drops with deep hopelessness and social withdrawal",
      "Impulsive, risky behaviors during periods of elevated mood",
      "Rapid shifts in emotional stability that strain family and career"
    ],
    treatmentOptions: [
      "Expert psychopharmacology utilizing mood stabilizers and atypical antipsychotics",
      "Psychoeducation to identify early triggers of mania or depression",
      "Social Rhythm Therapy to stabilize daily sleeping, eating, and activity patterns",
      "Family support programs to maintain a safe, understanding home structure"
    ],
    benefits: [
      "Gaining complete control over disruptive, extreme emotional shifts",
      "Preventing severe manic and depressive episodes before they start",
      "Maintaining professional stability, academic consistency, and relationships",
      "Protecting your physical health by stabilizing sleep-wake cycles"
    ],
    faq: [
      { q: "Can Bipolar Disorder be managed without medication?", a: "No. Bipolar disorder is a biological condition that requires psychiatric medication as a foundational element. Therapy acts as an invaluable support to prevent relapse." },
      { q: "How can I support a family member with Bipolar Disorder?", a: "Education is key. Learning to recognize early changes in sleep patterns or speech pacing can help you support your loved one in seeking care quickly." }
    ],
    iconName: "Activity"
  },
  {
    id: "ptsd",
    title: "PTSD & Trauma Care",
    summary: "Empathetic, structured trauma therapies to help you process past events and heal.",
    overview: "Trauma leaves a deep, physical imprint on the nervous system, keeping you trapped in a loop of fear and hyper-vigilance. Our clinical trauma care combines physical self-soothing techniques with gentle, structured cognitive therapies to help you safely file away past memories and regain safety in the present.",
    symptoms: [
      "Intrusive, disturbing flashbacks or vivid nightmares of past events",
      "Intense physical reactions (racing heart, panic) to subtle triggers",
      "Persistent emotional numbness, disconnection, or inability to trust",
      "Chronic state of high alert, being easily startled, and insomnia"
    ],
    treatmentOptions: [
      "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
      "Somatic tracking and polyvagal exercises to calm physical panic",
      "Monitored medications to reduce nightmares and quiet hyper-arousal",
      "Empathetic, pace-controlled talk therapy that honors your boundaries"
    ],
    benefits: [
      "Substantially reducing the emotional intensity of trauma triggers",
      "Ending chronic nightmares and enjoying restorative sleep",
      "Reclaiming your ability to build warm, trusting, and safe connections",
      "Knowing you are no longer defined or controlled by past events"
    ],
    faq: [
      { q: "Will I have to describe my trauma in painful detail?", a: "No. Modern trauma therapies are pace-controlled and designed to prevent re-traumatization. We work only at a pace where you feel safe and in control." },
      { q: "Can long-held trauma really be healed?", a: "Yes. Neuroplasticity proves that with targeted, evidence-based therapy, the brain can reorganize and heal from deep, historic wounds." }
    ],
    iconName: "HeartHandshake"
  },
  {
    id: "stress-management",
    title: "Stress Management",
    summary: "Practical biofeedback, mindfulness training, and healthy lifestyle boundaries.",
    overview: "Chronic stress is a major contributor to physical illness, anxiety, and emotional burnout. Our stress management counseling teaches you practical, immediate somatic self-regulation skills, helps identify cognitive cognitive distortions, and guides you in establishing healthy, protective boundaries.",
    symptoms: [
      "Feeling chronically exhausted, cynical, and emotionally flat (burnout)",
      "Frequent stress headaches, muscle tension, and stomach distress",
      "Using alcohol, food, or screen scrolling to cope with daily pressure",
      "Feeling constantly rushed, irritable, and disconnected from loved ones"
    ],
    treatmentOptions: [
      "Mindfulness-Based Stress Reduction (MBSR) core techniques",
      "Cognitive restructuring to dismantle perfectionism and over-commitment",
      "Vagal nerve stimulation exercises and progressive muscle relaxation",
      "Assertive communication coaching to establish healthy boundaries"
    ],
    benefits: [
      "Replacing feelings of panic with calm, organized, and focused responses",
      "Reducing physical wear-and-tear, easing chronic tension and headaches",
      "Cultivating a healthy work-life balance that protects your health",
      "Re-discovering room to breathe, appreciate, and enjoy daily moments"
    ],
    faq: [
      { q: "How does stress impact physical health?", a: "Chronic stress floods the body with cortisol, which elevates blood pressure, suppresses the immune system, and disrupts sleep and digestion." },
      { q: "Can I learn stress management in a short period?", a: "Yes. We focus on teaching immediate, practical exercises that you can seamlessly implement into your workday starting on day one." }
    ],
    iconName: "Heart"
  },
  {
    id: "telehealth-services",
    title: "Telehealth Services",
    summary: "Secure, HIPAA-compliant video consultations from the comfort of your home.",
    overview: "Geographic distance, transportation hurdles, or busy work schedules shouldn't prevent you from receiving premium behavioral healthcare. Our fully secure, HIPAA-compliant telepsychiatry and teletherapy services bring Dr. Srinivasan and Patricia Furst directly to your screen with ease.",
    symptoms: [
      "Living far from our East Brunswick, NJ location",
      "Having a demanding career or school schedule that limits travel time",
      "Lacking reliable transportation or childcare during business hours",
      "Feeling more comfortable speaking with a provider from your private room"
    ],
    treatmentOptions: [
      "Comprehensive psychiatric consultations via high-definition secure video",
      "Weekly, individual psychotherapy sessions on our user-friendly platform",
      "Secure digital portal for prescription refills and scheduling updates",
      "Online intake form completion and digital billing options"
    ],
    benefits: [
      "Complete convenience—no traffic, parking hassles, or long commutes",
      "Incredible privacy—speak with us from your secure home environment",
      "Excellent scheduling flexibility for busy families and young adults",
      "Identical clinical quality and personal connection as an in-office visit"
    ],
    faq: [
      { q: "What technology do I need for telehealth?", a: "You only need a smartphone, tablet, or computer equipped with a camera, microphone, and a stable internet connection." },
      { q: "Is telehealth covered by insurance?", a: "Yes. Most commercial insurance plans in New Jersey cover telehealth services identically to standard in-office visits." }
    ],
    iconName: "Video"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Elena R.",
    role: "East Brunswick Resident",
    text: "Dr. Srinivasan completely changed my perspective on psychiatric care. He listend to me with genuine respect and adjusted my medication with so much care. For the first time in years, my anxiety is quiet, and I feel fully in control of my daily life.",
    rating: 5
  },
  {
    id: "t2",
    author: "Marc D.",
    role: "Therapy Client",
    text: "Patricia's therapeutic approach is incredibly warm and practical. She gave me real-world strategies to manage my stress and perfectionism. Her room is a true sanctuary where I have healed from severe burnout.",
    rating: 5
  },
  {
    id: "t3",
    author: "Sarah & Thomas K.",
    role: "Parents of Adolescent Patient",
    text: "Finding support for our teenager was terrifying, but the Center for Behavioral Health was a true godsend. The child behavioral evaluations were highly thorough, and the telehealth visits made integrating care into school schedules incredibly simple.",
    rating: 5
  },
  {
    id: "t4",
    author: "Julian V.",
    role: "Adult ADHD Patient",
    text: "The combination of focus coaching and precise medication management has transformed my career. Dr. Srinivasan is patient, thorough, and highly knowledgeable. I cannot recommend this office enough.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How do I schedule an initial appointment?",
    answer: "You can request an appointment by filling out our secure online 'Request Appointment' form, emailing us at svsrinivasan@yahoo.com, or calling our East Brunswick office directly at (732) 257-1004. Our clinical intake coordinator will call you to complete your setup.",
    category: "appointment"
  },
  {
    id: "faq2",
    question: "Do you accept insurance?",
    answer: "Yes, we accept various commercial insurance plans. Because mental health coverage varies substantially, we highly recommend calling our front desk or your insurance provider to verify benefit levels, deductibles, and co-pays prior to your visit.",
    category: "insurance"
  },
  {
    id: "faq3",
    question: "What is your office cancellation policy?",
    answer: "We require at least 24 hours' notice for all cancellations or rescheduling. This allows us to offer the open appointment time to other patients in need. Late cancellations or missed visits without notice may be subject to a fee.",
    category: "appointment"
  },
  {
    id: "faq4",
    question: "How do prescription refills work?",
    answer: "For active, ongoing medications, please request refills during your scheduled follow-up appointments. If you require a refill between visits, contact your pharmacy, and they will submit an electronic request to Dr. Srinivasan. Please allow 48 business hours to process refills.",
    category: "medication"
  },
  {
    id: "faq5",
    question: "Is telehealth secure and confidential?",
    answer: "Absolutely. All online telehealth consultations are conducted via our encrypted, fully HIPAA-compliant video platform. None of your data is recorded or shared, ensuring complete confidentiality and privacy.",
    category: "telehealth"
  },
  {
    id: "faq6",
    question: "What should I do in a mental health emergency?",
    answer: "If you or a loved one are experiencing an active psychiatric emergency, severe self-harm urges, or immediate physical danger, please do not wait. Call 911 immediately, dial 988 for the National Suicide & Crisis Lifeline, or walk into the nearest hospital emergency department.",
    category: "general"
  },
  {
    id: "faq7",
    question: "Where is your office located?",
    answer: "Our beautiful physical practice is located at 9 Auer Court, Suite A&B, East Brunswick, NJ 08816. We offer plenty of free on-site parking and are fully wheelchair accessible.",
    category: "general"
  },
  {
    id: "faq8",
    question: "What are your office hours?",
    answer: "Our office is open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends and major holidays.",
    category: "general"
  },
  {
    id: "faq9",
    question: "Do I need a referral from my primary care doctor?",
    answer: "This depends entirely on your insurance plan. PPO plans typically do not require referrals to see a specialist, whereas HMO plans may require a referral from your PCP. Please check with your insurance company to be sure.",
    category: "insurance"
  },
  {
    id: "faq10",
    question: "Are what I say and my treatment records kept private?",
    answer: "Yes. Patient privacy is our highest priority. All clinical records, conversations, and contact details are fully protected under federal HIPAA standards. We never share your records without your explicit, written release.",
    category: "general"
  },
  {
    id: "faq11",
    question: "What is the difference between a psychiatrist and a therapist?",
    answer: "A psychiatrist (like Dr. Srinivasan) is a medical doctor who can perform medical diagnostics, prescribe psychiatric medications, and monitor physical health. A therapist (like Patricia Furst, LCSW) specializes in talk therapy, behavioral strategies, and emotional healing without prescribing medications.",
    category: "general"
  },
  {
    id: "faq12",
    question: "Do you see children and adolescents?",
    answer: "Yes, we have specialized programs tailored specifically for school-aged children and adolescents. We help youth manage school anxiety, behavioral issues, ADHD, depression, and family transitions.",
    category: "general"
  },
  {
    id: "faq13",
    question: "How do I prepare my computer for a telehealth visit?",
    answer: "Ensure your device is connected to reliable internet, has a functioning camera and microphone, and that you are sitting in a quiet, private room. Simply click the unique secure link sent to your email or text at your scheduled time.",
    category: "telehealth"
  },
  {
    id: "faq14",
    question: "What plans are accepted in your network?",
    answer: "We are in-network with several major commercial providers (e.g., Aetna, Horizon Blue Cross Blue Shield, Cigna, UnitedHealthcare). Since network lists change, please contact us at (732) 257-1004 for the most up-to-date insurance information.",
    category: "insurance"
  },
  {
    id: "faq15",
    question: "Can I receive medication management and therapy at the same time?",
    answer: "Yes, this is highly recommended! Research proves that combining professional medication management with individual psychotherapy yields the highest and most durable recovery outcomes for most mood and anxiety disorders.",
    category: "medication"
  }
];

export const RESOURCES: PatientResource[] = [
  {
    id: "res1",
    title: "New Patient Intake Packet",
    description: "Complete health history, HIPAA disclosure, and billing agreement forms required before your first clinical visit.",
    fileName: "New_Patient_Intake_Packet.pdf",
    category: "form"
  },
  {
    id: "res2",
    title: "Consent for Telehealth Services",
    description: "Informed consent detailing security protocols, platform instructions, and guidelines for online clinical visits.",
    fileName: "Telehealth_Consent_Form.pdf",
    category: "form"
  },
  {
    id: "res3",
    title: "Release of Clinical Information (ROI)",
    description: "Authorize our practice to coordinate your care or share progress securely with your primary care physician or family.",
    fileName: "Authorization_Release_Information.pdf",
    category: "form"
  },
  {
    id: "res4",
    title: "Notice of HIPAA Privacy Practices",
    description: "Official statement explaining your rights as a patient and how we protect your personal health information.",
    fileName: "HIPAA_Privacy_Practices_Notice.pdf",
    category: "policy"
  },
  {
    id: "res5",
    title: "Patient Rights & Practice Policies",
    description: "Practice guidelines regarding late cancellations, missed appointments, co-payments, and billing processes.",
    fileName: "Patient_Rights_Practice_Policies.pdf",
    category: "policy"
  }
];

export const INSURANCES = [
  "Aetna",
  "Horizon Blue Cross Blue Shield of New Jersey",
  "Cigna",
  "UnitedHealthcare / Oxford",
  "QualCare",
  "AmeriHealth",
  "Medicare",
  "ValueOptions",
  "Magellan Health"
];
