export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  conference?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  summary: string;
  type: 'journal' | 'report';
  keywords?: string[];
}

export const publications: Publication[] = [
  {
    "id": "1",
    "title": "Response of the human choroid to short-term changes in eyelid and periocular temperature",
    "authors": [
      "Safal Khanal",
      "Philip RK Turnbull",
      "Lucia Kim",
      "John R Phillips"
    ],
    "year": 2025,
    "journal": "Clinical and Experimental Optometry",
    "volume": "108(5)",
    "pages": "578-584",
    "url": "https://scholar.google.com/scholar?q=Response+of+the+human+choroid+to+short-term+changes+in+eyelid+and+periocular+temperature",
    "summary": "This study utilised OCT to demonstrate that local cooling of the anterior eye via the eyelid causes a small but statistically significant increase in macular choroidal thickness. These findings suggest that the choroid plays a rapid thermoregulatory role and highlight environmental temperature as a confounding factor that must be controlled in clinical myopia research.",
    "type": "journal",
    "keywords": [
      "choroid",
      "eyelid temperature",
      "periocular temperature",
      "ocular physiology",
      "Clinical Optometry"
    ]
  },
  {
    "id": "2",
    "title": "The expanding scope of the Aotearoa New Zealand optometric workforce",
    "authors": [
      "Philip RK Turnbull",
      "Inhae Park",
      "Richard Johnson"
    ],
    "year": 2025,
    "journal": "Clinical and Experimental Optometry",
    "pages": "1-3",
    "url": "https://scholar.google.com/scholar?q=The+expanding+scope+of+the+Aotearoa+New+Zealand+optometric+workforce",
    "summary": "An analysis of a decade of professional data reveals that NZ optometrists have safely issued over half a million prescriptions, primarily for glaucoma and dry eye. The report advocates for the further expansion of the optometric scope into intravitreal injections and laser procedures to improve national eye care equity and reduce hospital waitlists.",
    "type": "journal",
    "keywords": [
      "Optometry",
      "New Zealand",
      "Scope of Practice",
      "Healthcare Workforce",
      "Allied Health"
    ]
  },
  {
    "id": "3",
    "title": "A baseline audit of the population groups accessing optometry training clinics in Aotearoa New Zealand: looking towards equity in eye care",
    "authors": [
      "Lucy K Goodman",
      "Jinfeng Zhao",
      "Arier Lee",
      "Lydia Han",
      "Jaymie T Rogers",
      "Geraint Phillips",
      "Philip RK Turnbull",
      "Jacqueline Ramke"
    ],
    "year": 2025,
    "journal": "Clinical and Experimental Optometry",
    "pages": "1-7",
    "url": "https://scholar.google.com/scholar?q=A+baseline+audit+of+the+population+groups+accessing+optometry+training+clinics+in+Aotearoa+New+Zealand%3A+looking+towards+equity+in+eye+care",
    "summary": "This audit found that university-based training clinics are less accessible to people living in high-deprivation areas, who often travel the furthest for care. It recommends increasing funding for community outreach and mobile eye clinics to foster equity and provide diverse clinical training for future optometrists.",
    "type": "journal",
    "keywords": [
      "optometry",
      "equity",
      "eye care",
      "Aotearoa New Zealand",
      "access to healthcare"
    ]
  },
  {
    "id": "4",
    "title": "Participation in population-based eye health surveys is lower but more gender-balanced in high-compared to low-and middle-income countries",
    "authors": [
      "Lucy Goodman",
      "Philip Turnbull",
      "Ian McCormick",
      "Deborah Ewuru",
      "Jennifer R Evans",
      "Matthew J Burton",
      "Jacqueline Ramke"
    ],
    "year": 2025,
    "journal": "Wellcome Open Research",
    "volume": "10",
    "pages": "203",
    "url": "https://scholar.google.com/scholar?q=Participation+in+population-based+eye+health+surveys+is+lower+but+more+gender-balanced+in+high-compared+to+low-and+middle-income+countries",
    "summary": "A systematic review of global surveys found that while participation is generally high, it is declining in high-income nations. The study highlights that gender balance is more equitable in high-income settings, whereas women are more likely to participate in lower-income regions.",
    "type": "journal",
    "keywords": [
      "eye health",
      "survey participation",
      "gender equity",
      "global health",
      "health disparities"
    ]
  },
  {
    "id": "5",
    "title": "The impact of soft contact lens wear on tear film lipid layer characteristics",
    "authors": [
      "Jennifer P Craig",
      "Kalika Bandamwar",
      "Eujin Kang",
      "Fiona Li",
      "Philip RK Turnbull"
    ],
    "year": 2025,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "66(8)",
    "pages": "5622-5622",
    "url": "https://scholar.google.com/scholar?q=The+impact+of+soft+contact+lens+wear+on+tear+film+lipid+layer+characteristics",
    "summary": "Published in IOVS, this study investigated how various soft contact lens materials disrupt the stability of the tear film lipid layer. The research identifies material-specific impacts that can inform the selection of lenses for patients prone to dryness and discomfort.",
    "type": "journal",
    "keywords": [
      "contact lenses",
      "tear film",
      "lipid layer",
      "ocular surface",
      "dry eye"
    ]
  },
  {
    "id": "6",
    "title": "Guidelines for the use of artificial intelligence in optometry and optical dispensing  in New Zealand",
    "authors": [
      "Philip RK Turnbull"
    ],
    "year": 2025,
    "url": "https://odob.in1touch.org/document/8314/Guidelines%20for%20use%20of%20AI%202025.pdf",
    "summary": "This foundational report outlines the ethical and professional standards for integrating AI into New Zealand clinical practice. It focuses on diagnostic accuracy, patient data privacy, and the standardised implementation of AI-driven tools in primary eye care.",
    "type": "report",
    "keywords": [
      "Artificial Intelligence",
      "Optometry",
      "Optical Dispensing",
      "New Zealand",
      "Clinical Guidelines"
    ]
  },
  {
    "id": "7",
    "title": "Diagnosing Colour Vision Deficiencies Using Eye Movements (Without Dedicated Eye-Tracking Hardware)",
    "authors": [
      "Aryaman Taore",
      "Gabriel Lobo",
      "Philip RK Turnbull",
      "Steven C Dakin"
    ],
    "year": 2025,
    "journal": "Journal of Eye Movement Research",
    "volume": "18(5)",
    "pages": "51",
    "url": "https://scholar.google.com/scholar?q=Diagnosing+Colour+Vision+Deficiencies+Using+Eye+Movements+%28Without+Dedicated+Eye-Tracking+Hardware%29",
    "summary": "This paper describes a breakthrough diagnostic test that uses a standard tablet's front camera to detect colour vision defects via reflexive eye movements. The study proves that this hardware-agnostic approach is as effective as traditional methods, making objective colour screening highly accessible.",
    "type": "journal",
    "keywords": [
      "color vision deficiency",
      "eye movements",
      "diagnosis",
      "accessibility",
      "computer vision"
    ]
  },
  {
    "id": "8",
    "title": "Emerging research on non-neovascular age-related macular degeneration treatments",
    "authors": [
      "Xiaohan Ju",
      "Jacqueline Ramke",
      "Philip RK Turnbull"
    ],
    "year": 2025,
    "journal": "Clinical and Experimental Optometry",
    "pages": "1-9",
    "url": "https://scholar.google.com/scholar?q=Emerging+research+on+non-neovascular+age-related+macular+degeneration+treatments",
    "summary": "This scoping review of over 130 studies from the past decade identifies antioxidant and complement pathway inhibitors as the most promising avenues for treating geographic atrophy. It notes a 24% annual increase in research activity, signalling a significant shift towards effective atrophic AMD therapies.",
    "type": "journal",
    "keywords": [
      "non-neovascular AMD",
      "age-related macular degeneration",
      "geographic atrophy",
      "retinal disease",
      "emerging therapies"
    ]
  },
  {
    "id": "9",
    "title": "The optometrist and dispensing optician workforce in Aotearoa New Zealand 2025",
    "authors": [
      "PRK Turnbull"
    ],
    "year": 2025,
    "url": "https://odobportal.in1touch.org/document/8495/Workforce%20survey%202024-2025.pdf",
    "summary": "This latest workforce survey report provides critical demographics and trends for the eye care profession in NZ. It serves as a strategic data source for the ODOB to identify service gaps and support a workforce that responds to evolving public needs.",
    "type": "report",
    "keywords": [
      "optometry",
      "workforce",
      "Aotearoa New Zealand",
      "eye care",
      "dispensing optician"
    ]
  },
  {
    "id": "10",
    "title": "Classification of short and long term mild traumatic brain injury using computerized eye tracking",
    "authors": [
      "Alice Cade",
      "Philip RK Turnbull"
    ],
    "year": 2024,
    "journal": "Scientific reports",
    "volume": "14(1)",
    "pages": "12686",
    "url": "https://scholar.google.com/scholar?q=Classification+of+short+and+long+term+mild+traumatic+brain+injury+using+computerized+eye+tracking",
    "summary": "This research utilised machine learning to categorise concussion stages based on oculomotor metrics like VOR gain and fixation stability. The model provides an objective pathway for identifying brain injury when standard imaging remains inconclusive.",
    "type": "journal",
    "keywords": [
      "mild traumatic brain injury",
      "mTBI",
      "eye tracking",
      "classification",
      "biomarker"
    ]
  },
  {
    "id": "11",
    "title": "The Optometrist and Dispensing Optician Workforce in Aotearoa New Zealand 2023",
    "authors": [
      "PRK Turnbull"
    ],
    "year": 2024,
    "url": "https://odob.health.nz/document/8129/ODOB%20Workforce%20in%20ANZ%202024%20(Final%20Online).pdf",
    "summary": "This report details the demographics of 1,295 registered practitioners and their shift towards 'top-of-scope' care post-pandemic. It emphasises the importance of multidisciplinary clinical teams in delivering effective eye healthcare across the country.",
    "type": "report",
    "keywords": [
      "Optometry",
      "Dispensing Optician",
      "Workforce",
      "New Zealand",
      "Healthcare"
    ]
  },
  {
    "id": "12",
    "title": "Strategies to address inequity of uncorrected refractive error in the Western Pacific: A modified Delphi process",
    "authors": [
      "Ian McCormick",
      "Kelvin Tong",
      "Nurliyana Abdullah",
      "Carmen Abesamis‑Dischoso",
      "Theresa Gende",
      "Effendy Bin Hashim",
      "S May Ho",
      "Isabelle Jalbert",
      "Belmerio Jeronimo",
      "Elenoa Matoto‑Raikabakaba"
    ],
    "year": 2024,
    "journal": "Ophthalmic and Physiological Optics",
    "volume": "44(6)",
    "pages": "1148-1161",
    "url": "https://scholar.google.com/scholar?q=Strategies+to+address+inequity+of+uncorrected+refractive+error+in+the+Western+Pacific%3A+A+modified+Delphi+process",
    "summary": "Through a modified Delphi process, this study identified reducing out-of-pocket costs and increasing rural outreach as the most effective strategies for improving eye health access. It prioritises Indigenous peoples and remote populations as the key groups needing targeted refractive services.",
    "type": "journal",
    "keywords": [
      "Refractive Error",
      "Vision Impairment",
      "Equity",
      "Delphi Method",
      "Western Pacific"
    ]
  },
  {
    "id": "13",
    "title": "Underserved groups could be better considered within population-based eye health surveys: a methodological study",
    "authors": [
      "Lucy Goodman",
      "Tulio Reis",
      "Justine H Zhang",
      "Mayinuer Yusufu",
      "Philip R Turnbull",
      "Pushkar Silwal",
      "Mengtian Kang",
      "Sare Safi",
      "Hiromi Yee",
      "Gatera Fiston Kitema"
    ],
    "year": 2024,
    "journal": "Journal of Clinical Epidemiology",
    "volume": "173",
    "pages": "111444",
    "url": "https://scholar.google.com/scholar?q=Underserved+groups+could+be+better+considered+within+population-based+eye+health+surveys%3A+a+methodological+study",
    "summary": "A methodological review of 388 surveys found that few prospectively design their protocols to include underserved groups during the sampling phase. It calls for a greater focus on monitoring inequality and supplementally using small-scale studies to understand specific population disparities.",
    "type": "journal",
    "keywords": [
      "eye health",
      "health surveys",
      "underserved populations",
      "health equity",
      "methodology"
    ]
  },
  {
    "id": "14",
    "title": "Cervical Spine Vibration Modifies Oculomotor Function in Young Adults with Traumatic Brain Injury",
    "authors": [
      "Alice E Cade",
      "Philip RK Turnbull"
    ],
    "year": 2024,
    "journal": "Journal of Manipulative and Physiological Therapeutics",
    "volume": "47(1-4)",
    "pages": "96-105",
    "url": "https://scholar.google.com/scholar?q=Cervical+Spine+Vibration+Modifies+Oculomotor+Function+in+Young+Adults+with+Traumatic+Brain+Injury",
    "summary": "This experimental study showed that 100 Hz cervical vibration significantly improves VOR and Stroop test performance in mTBI patients. These findings suggest that some optometric mTBI symptoms may result from spinal proprioceptive dysfunction rather than just neurological insult.",
    "type": "journal",
    "keywords": [
      "cervical spine",
      "vibration",
      "oculomotor function",
      "traumatic brain injury",
      "TBI"
    ]
  },
  {
    "id": "15",
    "title": "Effect of Chiropractic Intervention on Oculomotor and Attentional Visual Outcomes in Young Adults With Long-Term Mild Traumatic Brain Injury: A Randomized Controlled Trial",
    "authors": [
      "Alice E Cade",
      "Philip RK Turnbull"
    ],
    "year": 2024,
    "journal": "Journal of Manipulative and Physiological Therapeutics",
    "volume": "47(1-4)",
    "pages": "1-11",
    "url": "https://scholar.google.com/scholar?q=Effect+of+Chiropractic+Intervention+on+Oculomotor+and+Attentional+Visual+Outcomes+in+Young+Adults+With+Long-Term+Mild+Traumatic+Brain+Injury%3A+A+Randomized+Controlled+Trial",
    "summary": "A randomised controlled trial proved that chiropractic care improves gaze stability and cognitive performance in patients with persistent post-concussion syndrome. This study adds to the evidence that spinal function is intrinsically linked to oculomotor accuracy in head-injured populations.",
    "type": "journal",
    "keywords": [
      "chiropractic",
      "mild traumatic brain injury",
      "mTBI",
      "oculomotor",
      "attention",
      "visual processing"
    ]
  },
  {
    "id": "16",
    "title": "Guidelines for the removal of concretions",
    "authors": [
      "Philip Turnbull",
      "Alastair Hand",
      "Ross Tayler",
      "Melinda Calderwood"
    ],
    "year": 2024,
    "url": "https://odob.health.nz/site/standards-guidelines",
    "summary": "This report provides standardised clinical protocols for the safe removal of hardened ocular deposits. It serves as a practical guide for primary care optometrists to manage these common but potentially irritative ocular features.",
    "type": "report",
    "keywords": [
      "concretion",
      "removal guidelines",
      "material science",
      "preservation",
      "conservation"
    ]
  },
  {
    "id": "17",
    "title": "The Optometrist and Dispensing Opticians workforce in Aotearoa New Zealand 2024",
    "authors": [
      "PRK Turnbull"
    ],
    "year": 2024,
    "url": "https://odob.in1touch.org/document/8266/2024%20Workforce%20survey_final.pdf",
    "summary": "This survey report analyses the current state of the profession, tracking trends in workload and the distribution of practitioners. It provides the statistical foundation for policy decisions aimed at improving eye care delivery throughout NZ.",
    "type": "report",
    "keywords": [
      "Optometry",
      "Dispensing Opticians",
      "Workforce",
      "Aotearoa New Zealand",
      "Eye Care"
    ]
  },
  {
    "id": "18",
    "title": "Objective estimation of fusional reserves using infrared eye tracking: the digital fusion-range test",
    "authors": [
      "Tina Y Gao",
      "Joyce Wong",
      "Linda W Zhou",
      "Joanna Black",
      "Philip RK Turnbull",
      "Peter J Bex",
      "Steven C Dakin"
    ],
    "year": 2023,
    "journal": "Clinical and Experimental Optometry",
    "volume": "106(7)",
    "pages": "769-776",
    "url": "https://scholar.google.com/scholar?q=Objective+estimation+of+fusional+reserves+using+infrared+eye+tracking%3A+the+digital+fusion-range+test",
    "summary": "This study introduced the 'digital fusion-range test,' which objectively measures vergence break and recovery points using consumer-grade trackers. It provides a reliable, automated alternative to traditional prism bar testing for diagnosing convergence insufficiency.",
    "type": "journal",
    "keywords": [
      "fusional reserves",
      "eye tracking",
      "binocular vision",
      "digital fusion-range test",
      "vergence"
    ]
  },
  {
    "id": "19",
    "title": "Dual‑focus contact lenses for myopia control modify central retinal electrophysiology in humans",
    "authors": [
      "Philip RK Turnbull",
      "Lucy K Goodman",
      "John R Phillips"
    ],
    "year": 2023,
    "journal": "Ophthalmic and Physiological Optics",
    "volume": "43(5)",
    "pages": "1100-1109",
    "url": "https://scholar.google.com/scholar?q=Dual%E2%80%90focus+contact+lenses+for+myopia+control+modify+central+retinal+electrophysiology+in+humans",
    "summary": "Using global-flash multifocal ERG, this study demonstrated that myopia-control lenses primarily modify signalling in the central 10° of the retina. This challenges the idea that peripheral defocus is the sole driver of eye growth regulation.",
    "type": "journal",
    "keywords": [
      "myopia control",
      "dual-focus contact lenses",
      "retinal electrophysiology",
      "ERG",
      "vision science"
    ]
  },
  {
    "id": "20",
    "title": "The Optometrists and Dispensing Opticians Workforce in Aotearoa New Zealand 2022",
    "authors": [
      "PRK Turnbull"
    ],
    "year": 2023,
    "url": "https://odob.health.nz/document/7503/2022%20ODOB%20Workforce%20Survey%20Report%20(Print).pdf",
    "summary": "This annual report provides a comprehensive look at the demographics and work practices of the NZ optometric sector. It tracks the profession's resilience and its increasingly vital role in managing chronic eye disease.",
    "type": "report",
    "keywords": [
      "optometry",
      "dispensing opticians",
      "workforce",
      "Aotearoa New Zealand",
      "eye care"
    ]
  },
  {
    "id": "21",
    "title": "Increasing Exercise Workload Degrades The Precision Of Rapid Eye Movements",
    "authors": [
      "Yasmin Kessner",
      "Charlie JW Connell",
      "Victor M Borges",
      "Phil R Turnbull",
      "Nicholas Gant"
    ],
    "year": 2023,
    "journal": "LIPPINCOTT WILLIAMS & WILKINS",
    "url": "https://scholar.google.com/scholar?q=Increasing+Exercise+Workload+Degrades+The+Precision+Of+Rapid+Eye+Movements",
    "summary": "This physiological study found that as physical exertion intensity increases, the precision and accuracy of saccadic eye movements decrease. It suggests a functional link between physical workload and the cognitive resources required for fine oculomotor control.",
    "type": "journal",
    "keywords": [
      "exercise",
      "eye movements",
      "saccades",
      "cognitive control",
      "workload"
    ]
  },
  {
    "id": "22",
    "title": "Extended screen time and dry eye in youth",
    "authors": [
      "Alex Muntz",
      "Philip RK Turnbull",
      "Andy D Kim",
      "Akilesh Gokul",
      "Daniel Wong",
      "Tricia Shau-Wei Tsay",
      "Karyn Zhao",
      "Simo Zhang",
      "Alec Kingsnorth",
      "James S Wolffsohn"
    ],
    "year": 2022,
    "journal": "Contact Lens and Anterior Eye",
    "volume": "45(5)",
    "pages": "101541",
    "url": "https://scholar.google.com/scholar?q=Extended+screen+time+and+dry+eye+in+youth",
    "summary": "This research established that digital device usage and gaming are significant risk factors for DED symptoms in teenagers and young adults. The study highlights the clinical need to screen younger populations for tear film instability and provide behavioural ergonomics advice.",
    "type": "journal",
    "keywords": [
      "screen time",
      "dry eye",
      "youth",
      "digital devices",
      "ocular health"
    ]
  },
  {
    "id": "23",
    "title": "Clinical testing of mild traumatic brain injury using computerised eye-tracking tests",
    "authors": [
      "Alice Cade",
      "Philip RK Turnbull"
    ],
    "year": 2022,
    "journal": "Clinical and experimental optometry",
    "volume": "105(7)",
    "pages": "680-686",
    "url": "https://scholar.google.com/scholar?q=Clinical+testing+of+mild+traumatic+brain+injury+using+computerised+eye-tracking+tests",
    "summary": "This review provides a clinical roadmap for optometrists to use eye tracking for diagnosing TBI-induced visual deficits. It highlights the neuroanatomical overlap between eye-movement circuitry and TBI pathophysiology.",
    "type": "journal",
    "keywords": [
      "mTBI",
      "eye-tracking",
      "traumatic brain injury",
      "clinical testing",
      "optometry"
    ]
  },
  {
    "id": "24",
    "title": "Diagnosis of colour vision deficits using eye movements",
    "authors": [
      "Aryaman Taore",
      "Gabriel Lobo",
      "Philip R Turnbull",
      "Steven C Dakin"
    ],
    "year": 2022,
    "journal": "Scientific reports",
    "volume": "12(1)",
    "pages": "7734",
    "url": "https://scholar.google.com/scholar?q=Diagnosis+of+colour+vision+deficits+using+eye+movements",
    "summary": "This study developed a novel, objective test for colour vision that uses eye movements in response to chromatic motion stimuli. It demonstrated that eye tracking can accurately characterise colour vision deficits without relying on patient verbal reports.",
    "type": "journal",
    "keywords": [
      "color vision deficiency",
      "eye tracking",
      "diagnosis",
      "color blindness",
      "eye movements"
    ]
  },
  {
    "id": "25",
    "title": "Oral medication prescribing by optometrists in New Zealand",
    "authors": [
      "Philip RK Turnbull",
      "Jennifer P Craig"
    ],
    "year": 2021,
    "journal": "Clinical and Experimental Optometry",
    "volume": "104(3)",
    "pages": "425-427",
    "url": "https://scholar.google.com/scholar?q=Oral+medication+prescribing+by+optometrists+in+New+Zealand",
    "summary": "This study analysed prescribing patterns, showing that optometrists primarily prescribe for acute ocular conditions with high safety and efficacy. It demonstrates the value of the expanded prescribing scope in improving patient access to urgent eye care.",
    "type": "journal",
    "keywords": [
      "optometry",
      "oral medications",
      "prescribing",
      "New Zealand",
      "eye care"
    ]
  },
  {
    "id": "26",
    "title": "The effect of cellphone position on driving and gaze behaviour",
    "authors": [
      "Philip RK Turnbull",
      "Safal Khanal",
      "Steven C Dakin"
    ],
    "year": 2021,
    "journal": "Scientific reports",
    "volume": "11(1)",
    "pages": "7692",
    "url": "https://scholar.google.com/scholar?q=The+effect+of+cellphone+position+on+driving+and+gaze+behaviour",
    "summary": "Using a driving simulator, this research found that mounting a cellphone at eye level minimises the duration and frequency of distracting glances. This has significant implications for road safety and the design of hands-free mobile mounts.",
    "type": "journal",
    "keywords": [
      "driving",
      "cellphone",
      "gaze behavior",
      "distraction",
      "road safety"
    ]
  },
  {
    "id": "27",
    "title": "The mental wellbeing of optometry and pharmacy students in New Zealand during COVID-19",
    "authors": [
      "Philip RK Turnbull",
      "Lynne Petersen",
      "Andrew V Collins"
    ],
    "year": 2021,
    "journal": "Journal of University Teaching and Learning Practice",
    "volume": "18(8)",
    "pages": "1-15",
    "url": "https://scholar.google.com/scholar?q=The+mental+wellbeing+of+optometry+and+pharmacy+students+in+New+Zealand+during+COVID-19",
    "summary": "This study identified significant levels of stress and anxiety among clinical students during pandemic-induced learning shifts. It recommends increased support mechanisms to preserve the mental health of the future healthcare workforce.",
    "type": "journal",
    "keywords": [
      "mental wellbeing",
      "COVID-19",
      "optometry students",
      "pharmacy students",
      "New Zealand"
    ]
  },
  {
    "id": "28",
    "title": "A hard pill to swallow: oral medication prescribing rights for optometrists",
    "authors": [
      "Philip Turnbull"
    ],
    "year": 2021,
    "url": "https://scholar.google.com/scholar?q=A+hard+pill+to+swallow%3A+oral+medication+prescribing+rights+for+optometrists",
    "summary": "This perspective piece discusses the hurdles to achieving expanded prescribing authority for the optometric profession. It advocates for a data-driven approach to demonstrate the public health benefits of full-scope optometry.",
    "type": "journal",
    "keywords": [
      "optometry",
      "prescribing rights",
      "oral medications",
      "healthcare policy",
      "optometrists"
    ]
  },
  {
    "id": "29",
    "title": "Global‑flash mfERG responses to local differences in spherical and astigmatic defocus across the human retina",
    "authors": [
      "Philip RK Turnbull",
      "Lucy K Goodman",
      "John R Phillips"
    ],
    "year": 2020,
    "journal": "Ophthalmic and Physiological Optics",
    "volume": "40(1)",
    "pages": "24-34",
    "url": "https://scholar.google.com/scholar?q=Global%E2%80%90flash+mfERG+responses+to+local+differences+in+spherical+and+astigmatic+defocus+across+the+human+retina",
    "summary": "This research mapped how the retina responds to spatially varying defocus, finding high sensitivity to the sign of blur. These results are foundational for refining the optical designs used in myopia-control contact lenses.",
    "type": "journal",
    "keywords": [
      "mfERG",
      "defocus",
      "astigmatism",
      "retina",
      "vision correction"
    ]
  },
  {
    "id": "30",
    "title": "The effect of simulated visual field loss on optokinetic nystagmus",
    "authors": [
      "Soheil M Doustkouhi",
      "Philip RK Turnbull",
      "Steven C Dakin"
    ],
    "year": 2020,
    "journal": "Translational Vision Science & Technology",
    "volume": "9(3)",
    "pages": "25-25",
    "url": "https://scholar.google.com/scholar?q=The+effect+of+simulated+visual+field+loss+on+optokinetic+nystagmus",
    "summary": "This study demonstrated that peripheral vision loss significantly impairs the OKN response, establishing OKN as a potential objective screen for visual field defects. It provides a physiological basis for using involuntary eye movements to monitor progressive vision loss.",
    "type": "journal",
    "keywords": [
      "optokinetic nystagmus",
      "visual field loss",
      "eye movements",
      "vision",
      "OKN"
    ]
  },
  {
    "id": "31",
    "title": "Additive effect of atropine eye drops and short-term retinal defocus on choroidal thickness in children with myopia",
    "authors": [
      "Samuel T-H Chiang",
      "Philip RK Turnbull",
      "John R Phillips"
    ],
    "year": 2020,
    "journal": "Scientific reports",
    "volume": "10(1)",
    "pages": "18310",
    "url": "https://scholar.google.com/scholar?q=Additive+effect+of+atropine+eye+drops+and+short-term+retinal+defocus+on+choroidal+thickness+in+children+with+myopia",
    "summary": "This study proved that pharmacological and optical myopia treatments have a cumulative effect on choroidal thickening. This provides a biological rationale for using combination therapies to achieve maximum myopia control efficacy.",
    "type": "journal",
    "keywords": [
      "myopia",
      "atropine",
      "choroidal thickness",
      "retinal defocus",
      "children"
    ]
  },
  {
    "id": "32",
    "title": "The effect of refractive error on optokinetic nystagmus",
    "authors": [
      "Soheil M Doustkouhi",
      "Philip RK Turnbull",
      "Steven C Dakin"
    ],
    "year": 2020,
    "journal": "Scientific Reports",
    "volume": "10(1)",
    "pages": "20062",
    "url": "https://scholar.google.com/scholar?q=The+effect+of+refractive+error+on+optokinetic+nystagmus",
    "summary": "This research showed that uncorrected refractive errors significantly degrade the precision of the OKN response. It highlights OKN analysis as a viable objective measure of visual clarity for paediatric or non-verbal populations.",
    "type": "journal",
    "keywords": [
      "optokinetic nystagmus",
      "refractive error",
      "vision",
      "oculomotor",
      "eye movements"
    ]
  },
  {
    "id": "33",
    "title": "Repeatability of arterial spin labeling MRI in measuring blood perfusion in the human eye",
    "authors": [
      "Safal Khanal",
      "Philip RK Turnbull",
      "Ehsan Vaghefi",
      "John R Phillips"
    ],
    "year": 2019,
    "journal": "Journal of Magnetic Resonance Imaging",
    "volume": "49(4)",
    "pages": "966-974",
    "url": "https://scholar.google.com/scholar?q=Repeatability+of+arterial+spin+labeling+MRI+in+measuring+blood+perfusion+in+the+human+eye",
    "summary": "This study validated ASL-MRI as a consistent, non-invasive method for quantifying choroidal blood flow in humans. It enables the use of functional MRI in longitudinal studies of ocular health and refractive development.",
    "type": "journal",
    "keywords": [
      "Arterial Spin Labeling",
      "MRI",
      "Eye",
      "Perfusion",
      "Repeatability"
    ]
  },
  {
    "id": "34",
    "title": "The effect of atropine on human global flash mfERG responses to retinal defocus",
    "authors": [
      "Safal Khanal",
      "Philip RK Turnbull",
      "Nicholas Lee",
      "John R Phillips"
    ],
    "year": 2019,
    "journal": "Investigative ophthalmology & visual science",
    "volume": "60(1)",
    "pages": "218-225",
    "url": "https://scholar.google.com/scholar?q=The+effect+of+atropine+on+human+global+flash+mfERG+responses+to+retinal+defocus",
    "summary": "This study found that low-dose atropine alters the retina's electrical response to blurred images, independent of accommodation. It suggests that atropine's protective effect against myopia may involve direct modulation of retinal signalling.",
    "type": "journal",
    "keywords": [
      "atropine",
      "mfERG",
      "retinal defocus",
      "accommodation",
      "electrophysiology"
    ]
  },
  {
    "id": "35",
    "title": "Randomised trial of the clinical utility of an eyelid massage device for the management of meibomian gland dysfunction",
    "authors": [
      "Michael TM Wang",
      "Jasmine Feng",
      "Joyce Wong",
      "Philip R Turnbull",
      "Jennifer P Craig"
    ],
    "year": 2019,
    "journal": "Contact Lens and Anterior Eye",
    "volume": "42(6)",
    "pages": "620-624",
    "url": "https://scholar.google.com/scholar?q=Randomised+trial+of+the+clinical+utility+of+an+eyelid+massage+device+for+the+management+of+meibomian+gland+dysfunction",
    "summary": "This trial demonstrated that automated eyelid massage provides significant symptomatic relief and improves tear film stability in MGD patients. It identifies mechanical expression as a highly effective home-based adjunct therapy for dry eye.",
    "type": "journal",
    "keywords": [
      "Meibomian Gland Dysfunction",
      "MGD",
      "Eyelid Massage",
      "Dry Eye",
      "Clinical Trial"
    ]
  },
  {
    "id": "36",
    "title": "Blood perfusion MRI responses of the human choroid to myopic retinal defocus",
    "authors": [
      "Safal Khanal",
      "Philip RK Turnbull",
      "Ehsan Vaghefi",
      "John Phillips"
    ],
    "year": 2019,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "60(9)",
    "pages": "4342-4342",
    "url": "https://scholar.google.com/scholar?q=Blood+perfusion+MRI+responses+of+the+human+choroid+to+myopic+retinal+defocus",
    "summary": "This research was the first to show that myopic defocus causes a rapid increase in choroidal blood flow measurable via MRI. It provides a vascular mechanism for how the eye detects and responds to optical blur signals.",
    "type": "journal",
    "keywords": [
      "choroid",
      "blood perfusion",
      "MRI",
      "myopia",
      "retinal defocus"
    ]
  },
  {
    "id": "37",
    "title": "Automated assessment of ocular deviations using a consumer-grade eye tracker and 3D display",
    "authors": [
      "Tina Yitian Gao",
      "Lisa Marie Hamm",
      "Joanna Black",
      "Philip RK Turnbull",
      "Peter Bex",
      "Shuan Dai",
      "Steven C Dakin"
    ],
    "year": 2019,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "60(9)",
    "pages": "4429-4429",
    "url": "https://scholar.google.com/scholar?q=Automated+assessment+of+ocular+deviations+using+a+consumer-grade+eye+tracker+and+3D+display",
    "summary": "This study proved that 3D screens combined with eye tracking can accurately and objectively measure strabismic deviations. It offers a standardised, automated alternative to traditional clinical cover tests.",
    "type": "journal",
    "keywords": [
      "eye tracker",
      "ocular deviation",
      "strabismus",
      "3D display",
      "automated assessment"
    ]
  },
  {
    "id": "38",
    "title": "Measuring visual field loss in glaucoma using involuntary eye movements",
    "authors": [
      "Steven C Dakin",
      "Soheil Mohammadpour Doustkouhi",
      "Hannah Kersten",
      "Philip RK Turnbull",
      "Jinny Yoon",
      "Helen Danesh-Meyer"
    ],
    "year": 2019,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "60(9)",
    "pages": "2468-2468",
    "url": "https://scholar.google.com/scholar?q=Measuring+visual+field+loss+in+glaucoma+using+involuntary+eye+movements",
    "summary": "This research identified distinct OKN patterns in glaucoma patients, allowing for the objective assessment of visual field deficits. It serves as a proof-of-concept for using involuntary eye movements to monitor glaucomatous progression.",
    "type": "journal",
    "keywords": [
      "glaucoma",
      "visual field",
      "eye movements",
      "vision loss",
      "ophthalmology"
    ]
  },
  {
    "id": "39",
    "title": "Effect of refractive error on optokinetic nystagmus",
    "authors": [
      "Soheil Mohammadpour-Doustkouhi",
      "Philip RK Turnbull",
      "Steven C Dakin"
    ],
    "year": 2019,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "60(9)",
    "pages": "1816-1816",
    "url": "https://scholar.google.com/scholar?q=Effect+of+refractive+error+on+optokinetic+nystagmus",
    "summary": "This study established that the OKN response is highly sensitive to the magnitude of refractive blur. It reinforces the link between sensory input quality and motor output precision in the visual system.",
    "type": "journal",
    "keywords": [
      "optokinetic nystagmus",
      "OKN",
      "refractive error",
      "visual-motor control",
      "eye movements"
    ]
  },
  {
    "id": "40",
    "title": "Effect of virtual reality headset wear on the tear film: A randomised crossover study",
    "authors": [
      "Philip RK Turnbull",
      "Joyce Wong",
      "Jasmine Feng",
      "Michael TM Wang",
      "Jennifer P Craig"
    ],
    "year": 2019,
    "journal": "Contact Lens and Anterior Eye",
    "volume": "42(6)",
    "pages": "640-645",
    "url": "https://scholar.google.com/scholar?q=Effect+of+virtual+reality+headset+wear+on+the+tear+film%3A+A+randomised+crossover+study",
    "summary": "This trial found that VR headset use induces significant tear film evaporation and dry eye symptoms. It identifies VR technology as a modern risk factor for ocular surface discomfort that requires clinical management.",
    "type": "journal",
    "keywords": [
      "virtual reality",
      "tear film",
      "dry eye",
      "VR headset",
      "ocular surface"
    ]
  },
  {
    "id": "41",
    "title": "Blood perfusion MRI response of the human choroid to myopic retinal image defocus",
    "authors": [
      "Safal Khanal",
      "Philip Turnbull",
      "Seyed Vaghefi Rezaei",
      "John Phillips"
    ],
    "year": 2019,
    "url": "https://scholar.google.com/scholar?q=Blood+perfusion+MRI+response+of+the+human+choroid+to+myopic+retinal+image+defocus",
    "summary": "A foundational study characterising the spatial vascular response of the choroid to optical signals using MRI.",
    "type": "journal",
    "keywords": [
      "choroid",
      "blood perfusion MRI",
      "myopia",
      "retinal defocus",
      "eye"
    ]
  },
  {
    "id": "42",
    "title": "Comparison of treatment effect across varying severities of meibomian gland dropout",
    "authors": [
      "Philip RK Turnbull",
      "Stuti L Misra",
      "Jennifer P Craig"
    ],
    "year": 2018,
    "journal": "Contact Lens and Anterior Eye",
    "volume": "41(1)",
    "pages": "88-92",
    "url": "https://scholar.google.com/scholar?q=Comparison+of+treatment+effect+across+varying+severities+of+meibomian+gland+dropout",
    "summary": "This study found that patients with extensive meibomian gland loss respond less effectively to treatments. It underscores the importance of early diagnosis and intervention in dry eye disease to preserve gland function.",
    "type": "journal",
    "keywords": [
      "meibomian gland dysfunction",
      "MGD",
      "meibomian gland dropout",
      "treatment effect",
      "anterior eye"
    ]
  },
  {
    "id": "43",
    "title": "Comparing the in vitro effects of MGO™ Manuka honey and tea tree oil on ocular Demodex viability",
    "authors": [
      "Katie Frame",
      "Isabella MY Cheung",
      "Michael TM Wang",
      "Philip R Turnbull",
      "Grant A Watters",
      "Jennifer P Craig"
    ],
    "year": 2018,
    "journal": "Contact Lens and Anterior Eye",
    "volume": "41(6)",
    "pages": "527-530",
    "url": "https://scholar.google.com/scholar?q=Comparing+the+in+vitro+effects+of+MGO%E2%84%A2+Manuka+honey+and+tea+tree+oil+on+ocular+Demodex+viability",
    "summary": "This study proved that Manuka honey and tea tree oil significantly reduce the viability of Demodex mites in eyelashes. It provides a rationale for using natural antimicrobial agents in the management of blepharitis.",
    "type": "journal",
    "keywords": [
      "Demodex",
      "Manuka honey",
      "Tea tree oil",
      "ocular surface",
      "in vitro"
    ]
  },
  {
    "id": "44",
    "title": "Repeatability of Arterial Spin Labeling MRI in Measuring Blood Perfusion in the Human Eye",
    "authors": [
      "OD Safal Khanal",
      "Philip RK Turnbull",
      "Ehsan Vaghefi"
    ],
    "year": 2018,
    "url": "https://scholar.google.com/scholar?q=Repeatability+of+Arterial+Spin+Labeling+MRI+in+Measuring+Blood+Perfusion+in+the+Human+Eye",
    "summary": "A methodological study confirming that ASL-MRI provides repeatable measurements of ocular blood flow across multiple sessions.",
    "type": "journal",
    "keywords": [
      "Arterial Spin Labeling",
      "MRI",
      "Blood Perfusion",
      "Eye",
      "Repeatability"
    ]
  },
  {
    "id": "45",
    "title": "Effect of atropine on multifocal electroretinogram responses to defocus",
    "authors": [
      "Safal Khanal",
      "Philip Turnbull",
      "N Lee",
      "John Phillips"
    ],
    "year": 2018,
    "url": "https://scholar.google.com/scholar?q=Effect+of+atropine+on+multifocal+electroretinogram+responses+to+defocus",
    "summary": "This research demonstrated that atropine modulates the retinal response to blur, providing clues to its myopia-control mechanism.",
    "type": "journal",
    "keywords": [
      "atropine",
      "multifocal electroretinogram",
      "mfERG",
      "defocus",
      "accommodation"
    ]
  },
  {
    "id": "46",
    "title": "Ocular surface microbiome in meibomian gland dysfunction",
    "authors": [
      "Grant A Watters",
      "Philip R Turnbull",
      "Simon Swift",
      "Alex Petty",
      "Jennifer P Craig"
    ],
    "year": 2017,
    "journal": "Clinical & Experimental Ophthalmology",
    "volume": "45(2)",
    "pages": "105-111",
    "url": "https://scholar.google.com/scholar?q=Ocular+surface+microbiome+in+meibomian+gland+dysfunction",
    "summary": "This study identified significant shifts in the ocular microbial communities of patients with MGD. It suggests that microbial dysbiosis may play a role in the pathogenesis of chronic ocular surface inflammation.",
    "type": "journal",
    "keywords": [
      "meibomian gland dysfunction",
      "ocular surface microbiome",
      "dry eye disease",
      "microbial communities",
      "ophthalmology"
    ]
  },
  {
    "id": "47",
    "title": "Origins of Pupillary Hippus in the Autonomic Nervous System",
    "authors": [
      "Philip RK Turnbull",
      "Nouzar Irani",
      "Nicky Lim",
      "John R Phillips"
    ],
    "year": 2017,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "58(1)",
    "pages": "197-203",
    "url": "https://scholar.google.com/scholar?q=Origins+of+Pupillary+Hippus+in+the+Autonomic+Nervous+System",
    "summary": "This research established that rhythmic pupil oscillations (hippus) are primarily driven by the parasympathetic nervous system. It identifies pupil dynamics as a potential biomarker for neurological and autonomic health.",
    "type": "journal",
    "keywords": [
      "Pupillary Hippus",
      "Autonomic Nervous System",
      "Pupil Dynamics",
      "Neurology",
      "Ophthalmology"
    ]
  },
  {
    "id": "48",
    "title": "Ocular effects of virtual reality headset wear in young adults",
    "authors": [
      "Philip RK Turnbull",
      "John R Phillips"
    ],
    "year": 2017,
    "journal": "Scientific reports",
    "volume": "7(1)",
    "pages": "16172",
    "url": "https://scholar.google.com/scholar?q=Ocular+effects+of+virtual+reality+headset+wear+in+young+adults",
    "summary": "This study found that VR wear induces transient choroidal thickening and a shift in the near point of convergence. It highlights the unique physiological demands placed on the eyes by immersive digital environments.",
    "type": "journal",
    "keywords": [
      "Virtual Reality",
      "Ocular Effects",
      "Eye Strain",
      "Young Adults",
      "Binocular Vision"
    ]
  },
  {
    "id": "49",
    "title": "Myopia control with soft contact lenses",
    "authors": [
      "Nicola Anstice",
      "Philip Turnbull",
      "Andrew Collins",
      "John Phillips"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=Myopia+control+with+soft+contact+lenses",
    "summary": "A comprehensive review of the clinical efficacy of multifocal and orthokeratology lenses in slowing paediatric myopia.",
    "type": "journal",
    "keywords": [
      "myopia",
      "soft contact lenses",
      "myopia control",
      "nearsightedness",
      "eye care"
    ]
  },
  {
    "id": "50",
    "title": "Vision in virtual reality",
    "authors": [
      "Philip Turnbull"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=Vision+in+virtual+reality",
    "summary": "A theoretical exploration of the intersection between VR hardware and human visual perception, focusing on the accommodative-convergence mismatch.",
    "type": "journal",
    "keywords": [
      "virtual reality",
      "vision",
      "perception",
      "human factors",
      "VR"
    ]
  },
  {
    "id": "51",
    "title": "Intra-and inter-sessional reproducibility of blood perfusion MRI measures in the human choroid",
    "authors": [
      "Safal Khanal",
      "Philip Turnbull",
      "Ehsan Vaghefi",
      "John Phillips"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=Intra-and+inter-sessional+reproducibility+of+blood+perfusion+MRI+measures+in+the+human+choroid",
    "summary": "This study confirmed that MRI can reliably measure choroidal blood flow, enabling its use in functional vision research.",
    "type": "journal",
    "keywords": [
      "choroid",
      "MRI",
      "blood perfusion",
      "reproducibility",
      "intra-sessional",
      "inter-sessional"
    ]
  },
  {
    "id": "52",
    "title": "Virtual reality and the eyes",
    "authors": [
      "Philip Turnbull",
      "John Phillips"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=Virtual+reality+and+the+eyes",
    "summary": "A clinical perspective on the impact of VR on vision, focusing on short-term ocular comfort and binocular stability.",
    "type": "journal",
    "keywords": [
      "virtual reality",
      "eyes",
      "vision",
      "VR",
      "ophthalmology"
    ]
  },
  {
    "id": "53",
    "title": "The relationship between peripheral refraction and retinal electrophysiology",
    "authors": [
      "Lucy Goodman",
      "Philip Turnbull",
      "John Phillips"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=The+relationship+between+peripheral+refraction+and+retinal+electrophysiology",
    "summary": "This research explored how refractive errors in the eye's periphery correlate with retinal electrical activity patterns.",
    "type": "journal",
    "keywords": [
      "peripheral refraction",
      "retinal electrophysiology",
      "refractive error",
      "retina",
      "eye"
    ]
  },
  {
    "id": "54",
    "title": "Depth from defocus: plasticity in the New Zealand jumping spider eye?",
    "authors": [
      "Aimee Aitken",
      "John Phillips",
      "Philip Turnbull"
    ],
    "year": 2017,
    "url": "https://scholar.google.com/scholar?q=Depth+from+defocus%3A+plasticity+in+the+New+Zealand+jumping+spider+eye%3F",
    "summary": "This comparative study explored how jumping spiders use their specialised multi-layered retinas to perceive depth through defocus signals.",
    "type": "journal",
    "keywords": [
      "depth from defocus",
      "jumping spider",
      "spider vision",
      "New Zealand",
      "eye plasticity"
    ]
  },
  {
    "id": "55",
    "title": "Similar contrast sensitivity functions measured using psychophysics and optokinetic nystagmus",
    "authors": [
      "Steven C Dakin",
      "Philip RK Turnbull"
    ],
    "year": 2016,
    "journal": "Scientific reports",
    "volume": "6(1)",
    "pages": "34514",
    "url": "https://scholar.google.com/scholar?q=Similar+contrast+sensitivity+functions+measured+using+psychophysics+and+optokinetic+nystagmus",
    "summary": "This study proved that involuntary OKN responses can accurately measure contrast sensitivity. It provides a pathway for objective vision testing in populations that cannot provide verbal feedback.",
    "type": "journal",
    "keywords": [
      "contrast sensitivity",
      "psychophysics",
      "optokinetic nystagmus",
      "vision",
      "neural processing"
    ]
  },
  {
    "id": "56",
    "title": "Similar estimates of contrast sensitivity and acuity from psychophysics and automated analysis of optokinetic nystagmus",
    "authors": [
      "Steven Dakin",
      "Phillip Turnbull"
    ],
    "year": 2016,
    "journal": "Journal of Vision",
    "volume": "16(12)",
    "pages": "1331-1331",
    "url": "https://scholar.google.com/scholar?q=Similar+estimates+of+contrast+sensitivity+and+acuity+from+psychophysics+and+automated+analysis+of+optokinetic+nystagmus",
    "summary": "This study validated an automated pipeline for measuring visual acuity using involuntary eye movements.",
    "type": "journal",
    "keywords": [
      "contrast sensitivity",
      "visual acuity",
      "optokinetic nystagmus",
      "psychophysics",
      "vision"
    ]
  },
  {
    "id": "57",
    "title": "Contact lens methods for clinical myopia control",
    "authors": [
      "Philip Raey Kidd Turnbull",
      "Oliver James Munro",
      "John Robert Phillips"
    ],
    "year": 2016,
    "journal": "Optometry and Vision Science",
    "volume": "93(9)",
    "pages": "1120-1126",
    "url": "https://scholar.google.com/scholar?q=Contact+lens+methods+for+clinical+myopia+control",
    "summary": "A review of the optical designs and treatment protocols used for myopia management in clinical settings.",
    "type": "journal",
    "keywords": [
      "myopia control",
      "contact lenses",
      "orthokeratology",
      "multifocal lenses",
      "myopia management"
    ]
  },
  {
    "id": "58",
    "title": "Face fashion market hots up with arrival of new optical chain from Australia",
    "authors": [
      "Philip Turnbull"
    ],
    "year": 2016,
    "url": "https://scholar.google.com/scholar?q=Face+fashion+market+hots+up+with+arrival+of+new+optical+chain+from+Australia",
    "summary": "A market analysis of the evolving optical retail landscape in New Zealand.",
    "type": "journal",
    "keywords": [
      "face fashion",
      "optical chain",
      "market competition",
      "Australia",
      "retail"
    ]
  },
  {
    "id": "59",
    "title": "Prospective Trial of Intense Pulsed Light for the Treatment of Meibomian Gland Dysfunction",
    "authors": [
      "Jennifer P Craig",
      "Yen-Heng Chen",
      "Philip RK Turnbull"
    ],
    "year": 2015,
    "journal": "Investigative ophthalmology & visual science",
    "volume": "56(3)",
    "pages": "1965-1970",
    "url": "https://scholar.google.com/scholar?q=Prospective+Trial+of+Intense+Pulsed+Light+for+the+Treatment+of+Meibomian+Gland+Dysfunction",
    "summary": "This landmark study provided high-level evidence for the efficacy of IPL in improving tear film quality and gland expressibility.",
    "type": "journal",
    "keywords": [
      "Intense Pulsed Light",
      "Meibomian Gland Dysfunction",
      "IPL",
      "MGD",
      "Dry Eye"
    ]
  },
  {
    "id": "60",
    "title": "Cumulative effect of Intense Pulsed Light (IPL) therapy for Meibomian Gland Dysfunction (MGD) confirmed in prospective, double-masked, placebo-controlled trial",
    "authors": [
      "Jennifer P Craig",
      "Yen-Heng Chen",
      "Philip RK Turnbull"
    ],
    "year": 2015,
    "journal": "Investigative Ophthalmology & Visual Science",
    "volume": "56(7)",
    "pages": "6194-6194",
    "url": "https://scholar.google.com/scholar?q=Cumulative+effect+of+Intense+Pulsed+Light+%28IPL%29+therapy+for+Meibomian+Gland+Dysfunction+%28MGD%29+confirmed+in+prospective%2C+double-masked%2C+placebo-controlled+trial",
    "summary": "This trial confirmed that multiple IPL treatments provide significantly better outcomes than single sessions.",
    "type": "journal",
    "keywords": [
      "Intense Pulsed Light",
      "IPL",
      "Meibomian Gland Dysfunction",
      "MGD",
      "Dry Eye"
    ]
  },
  {
    "id": "61",
    "title": "Visually guided eye growth in the squid",
    "authors": [
      "Philip RK Turnbull",
      "Simon Backhouse",
      "John R Phillips"
    ],
    "year": 2015,
    "journal": "Current Biology",
    "volume": "25(18)",
    "pages": "R791-R792",
    "url": "https://scholar.google.com/scholar?q=Visually+guided+eye+growth+in+the+squid",
    "summary": "This study proved that squid eyes adjust their growth in response to visual blur, demonstrating emmetropisation is a fundamental biological process.",
    "type": "journal",
    "keywords": [
      "squid",
      "eye growth",
      "vision",
      "development",
      "cephalopod"
    ]
  },
  {
    "id": "62",
    "title": "Retrospective case-series of a myopia control clinic",
    "authors": [
      "Philip Turnbull",
      "John Phillips"
    ],
    "year": 2015,
    "url": "https://scholar.google.com/scholar?q=Retrospective+case-series+of+a+myopia+control+clinic",
    "summary": "This analysis demonstrated the real-world success of multifocal lenses in slowing myopia progression in a clinical population.",
    "type": "journal",
    "keywords": [
      "myopia control",
      "case-series",
      "retrospective study",
      "clinical study",
      "eye care"
    ]
  },
  {
    "id": "63",
    "title": "Prospective evaluation of intense pulsed light (IPL) therapy for meibomian gland dysfunction (MGD)",
    "authors": [
      "JP Craig",
      "PR Turnbull",
      "A Chen"
    ],
    "year": 2014,
    "journal": "Acta Ophthalmologica",
    "volume": "92",
    "url": "https://scholar.google.com/scholar?q=Prospective+evaluation+of+intense+pulsed+light+%28IPL%29+therapy+for+meibomian+gland+dysfunction+%28MGD%29",
    "summary": "Early clinical data supporting the use of IPL for treating evaporative dry eye.",
    "type": "journal",
    "keywords": [
      "Intense Pulsed Light",
      "IPL",
      "Meibomian Gland Dysfunction",
      "MGD",
      "Dry Eye"
    ]
  },
  {
    "id": "64",
    "title": "5. PLACEBO-CONTROLLED TRIAL OF INTENSE PULSED LIGHT (IPL) THERAPY FOR MEIBOMIAN GLAND DYSFUNCTION (MGD): 3405",
    "authors": [
      "Jennifer P Craig",
      "Philip Turnbull",
      "Amy Chen"
    ],
    "year": 2014,
    "journal": "Clinical & Experimental Ophthalmology",
    "volume": "42",
    "pages": "66",
    "url": "https://scholar.google.com/scholar?q=5.+PLACEBO-CONTROLLED+TRIAL+OF+INTENSE+PULSED+LIGHT+%28IPL%29+THERAPY+FOR+MEIBOMIAN+GLAND+DYSFUNCTION+%28MGD%29%3A+3405",
    "summary": "The definitive study confirming that IPL's therapeutic benefits for MGD are statistically significant compared to placebo.",
    "type": "journal",
    "keywords": [
      "Meibomian Gland Dysfunction",
      "MGD",
      "Intense Pulsed Light",
      "IPL Therapy",
      "Placebo-Controlled Trial"
    ]
  },
  {
    "id": "65",
    "title": "Emmetropisation in the camera-type eye of the squid",
    "authors": [
      "Philip Turnbull"
    ],
    "year": 2014,
    "journal": "ResearchSpace@ Auckland",
    "url": "https://scholar.google.com/scholar?q=Emmetropisation+in+the+camera-type+eye+of+the+squid",
    "summary": "Doctoral research establishing the squid as a model for studying the biological mechanisms of refractive error.",
    "type": "report",
    "keywords": [
      "Emmetropisation",
      "Squid Eye",
      "Camera-type Eye",
      "Refractive Error",
      "Cephalopod Vision"
    ]
  },
  {
    "id": "66",
    "title": "Short‑and long‑term vertical diplopia secondary to blunt trauma",
    "authors": [
      "Philip RK Turnbull",
      "Algis J Vingrys",
      "Michael Kalloniatis"
    ],
    "year": 2007,
    "journal": "Clinical and Experimental Optometry",
    "volume": "90(6)",
    "pages": "457-462",
    "url": "https://scholar.google.com/scholar?q=Short%E2%80%90and+long%E2%80%90term+vertical+diplopia+secondary+to+blunt+trauma",
    "summary": "A clinical series analysing cases of double vision following head trauma, identifying both acute and persistent muscle imbalances.",
    "type": "journal",
    "keywords": [
      "vertical diplopia",
      "blunt trauma",
      "double vision",
      "eye injury",
      "optometry"
    ]
  },
  {
    "id": "67",
    "title": "Supplemental Information: Visually guided eye growth in the squid",
    "authors": [
      "Philip RK Turnbull",
      "Simon Backhouse",
      "John R Phillips"
    ],
    "year": 2015,
    "url": "https://scholar.google.com/scholar?q=Supplemental+Information%3A+Visually+guided+eye+growth+in+the+squid",
    "summary": "Methodological data detailing the impact of visual deprivation and defocus on cephalopod eye development.",
    "type": "journal",
    "keywords": [
      "squid",
      "eye growth",
      "visual system",
      "vision",
      "cephalopod"
    ]
  }
];
