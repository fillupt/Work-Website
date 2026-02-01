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
    "summary": "This study investigates how the human choroid, a vascular layer in the eye, responds to brief temperature fluctuations around the eyelids. The research aims to improve our understanding of the choroidal response to external thermal stimuli, potentially informing future treatments for ocular conditions.",
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
    "summary": "This 2025 publication in Clinical and Experimental Optometry examines the evolving role of optometrists in Aotearoa New Zealand. It likely explores how the scope of practice for optometrists is expanding, potentially including new technologies, treatment modalities, and responsibilities within the healthcare system.",
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
    "summary": "This study establishes a baseline audit of patient demographics in optometry training clinics across Aotearoa New Zealand. The research aims to identify potential disparities in access to eye care services and inform strategies for promoting equity within the population.",
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
    "summary": "This study analyzes global eye health survey participation, revealing a trend of lower participation rates in high-income countries compared to low- and middle-income countries. However, the research also highlights that the gender balance among participants is more equitable in high-income settings, suggesting differences in barriers to access across socioeconomic contexts.",
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
    "summary": "This research, published in Investigative Ophthalmology & Visual Science, investigates how wearing soft contact lenses affects the tear film lipid layer. The study, authored by Craig et al., analyzes changes in tear film characteristics induced by contact lens wear.",
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
    "summary": "This 2025 publication provides guidelines for the ethical and effective integration of artificial intelligence (AI) into optometry and optical dispensing practices within New Zealand. It likely covers aspects such as AI-driven diagnostic tools, personalized lens prescriptions, and automation of dispensing processes, aiming to standardize and improve patient care through AI implementation.",
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
    "summary": "This research explores a novel method for diagnosing color vision deficiencies (CVD) by analyzing eye movements. The study proposes a technique that does not rely on specialized eye-tracking equipment, potentially making CVD diagnosis more accessible and cost-effective.",
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
    "summary": "This 2025 Clinical and Experimental Optometry publication reviews the latest advancements in treating non-neovascular age-related macular degeneration (AMD). The authors, Ju, Ramke, and Turnbull, explore emerging therapeutic approaches for this common cause of vision loss, focusing on methods that don't involve targeting blood vessel growth.",
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
    "summary": "This paper examines the state of the optometry and dispensing optician workforce in Aotearoa New Zealand as of 2025. It likely analyzes workforce size, distribution, and potential future trends within the profession, contributing to understanding of eye care accessibility and delivery in the region.",
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
    "summary": "This 2024 Scientific Reports publication by Cade and Turnbull explores the use of computerized eye tracking as a method for classifying mild traumatic brain injury (mTBI). The study aims to differentiate between short-term and long-term effects of mTBI based on eye movement patterns.",
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
    "summary": "This 2024 publication examines the state of the optometry and dispensing optician workforce in Aotearoa New Zealand as of 2023. The study likely provides insights into the size, distribution, and characteristics of this critical healthcare profession within the country.",
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
    "summary": "This study used a modified Delphi process to identify strategies for addressing uncorrected refractive error, a significant cause of vision impairment, in the Western Pacific region. The research aims to provide evidence-based recommendations for public health interventions and policies to improve equitable access to vision correction services.",
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
    "summary": "This study highlights the need to improve the inclusion of underserved groups in population-based eye health surveys. By addressing methodological limitations in current survey practices, researchers can obtain more representative data and better understand the eye health needs of vulnerable populations, ultimately leading to more equitable healthcare outcomes.",
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
    "summary": "This study investigates the impact of cervical spine vibration on eye movements in young adults who have experienced traumatic brain injury (TBI). The research suggests that stimulating the neck muscles through vibration can alter oculomotor function in this population, potentially offering insights into rehabilitation strategies.",
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
    "summary": "This study investigates the impact of chiropractic intervention on visual attention and eye movement control in young adults who have experienced long-term mild traumatic brain injury (mTBI). The randomized controlled trial design aims to determine if chiropractic care can improve oculomotor function and attentional visual processing in this population.",
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
    "summary": "This publication provides guidelines for the removal of concretions, which are hardened masses or lumps that can form in various settings. The authors, Turnbull, Hand, Tayler, and Calderwood, aim to offer practical advice for safely and effectively removing these problematic formations.",
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
    "summary": "This report presents an analysis of the Optometrist and Dispensing Opticians workforce in Aotearoa New Zealand in 2024. It likely examines the size, distribution, and characteristics of this vital healthcare sector within the country.",
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
    "summary": "This study introduces a novel method for objectively measuring fusional reserves, the eyes' ability to maintain single vision, using infrared eye tracking. This digital fusion-range test provides a more precise and reliable assessment compared to traditional methods, potentially improving the diagnosis and management of binocular vision disorders.",
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
    "summary": "This study investigates the effect of dual-focus contact lenses, used for myopia (nearsightedness) control, on the electrical activity of the retina. The research demonstrates that these lenses induce changes in the central retinal electrophysiology, suggesting a biological mechanism through which they may slow myopia progression.",
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
    "summary": "This 2023 publication analyzes the state of the optometry and dispensing optician workforce in Aotearoa New Zealand during 2022. The study, authored by PRK Turnbull, provides insights into the composition and characteristics of this healthcare sector within the country.",
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
    "summary": "This study investigates the impact of exercise workload on the precision of rapid eye movements (saccades). The findings suggest that as exercise intensity increases, the accuracy of these eye movements decreases, potentially indicating a link between physical exertion and cognitive control.",
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
    "summary": "This study investigates the relationship between extended screen time and dry eye symptoms in young people. The research explores the potential impact of increased digital device use on ocular surface health in youth populations, highlighting the need for further investigation into preventative measures.",
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
    "summary": "This study investigates the use of computerized eye-tracking tests as a clinical tool for diagnosing mild traumatic brain injury (mTBI). The research, published in Clinical and Experimental Optometry, explores the potential of these tests to provide objective and sensitive measures for identifying mTBI in patients.",
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
    "summary": "This study explores using eye-tracking technology to diagnose color vision deficiencies. By analyzing eye movement patterns in response to specific stimuli, the researchers propose a novel, objective method for identifying and characterizing these deficits, potentially offering a more accessible and accurate diagnostic tool.",
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
    "summary": "This research investigates the prescribing of oral medications by optometrists in New Zealand. The study likely examines the types of medications prescribed, the frequency of prescribing, and potentially the impact on patient care within the scope of optometric practice.",
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
    "summary": "This study investigates how the positioning of a cellphone in a vehicle affects driving performance and visual attention. By analyzing gaze behavior and driving metrics, the research sheds light on the potential distractions caused by different cellphone placements and their impact on road safety.",
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
    "summary": "This study investigates the mental wellbeing of optometry and pharmacy students in New Zealand during the COVID-19 pandemic. The research provides insights into the challenges faced by these students and contributes to understanding the impact of the pandemic on their mental health.",
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
    "summary": "This publication by Philip Turnbull (2021) discusses the controversial topic of granting optometrists the authority to prescribe oral medications. The article likely explores arguments for and against expanding the prescribing rights of optometrists, considering patient access, safety, and the role of different healthcare professionals.",
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
    "summary": "This study investigates how different types of refractive error (spherical and astigmatic defocus) in specific areas of the retina affect global multifocal electroretinogram (mfERG) responses. The findings shed light on how the visual system processes spatially varying defocus and could inform the development of improved vision correction strategies.",
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
    "summary": "This study investigates how simulated visual field loss impacts optokinetic nystagmus (OKN), an involuntary eye movement that stabilizes vision when viewing moving objects. The research sheds light on the relationship between visual field defects and the neural mechanisms underlying eye movement control, with potential implications for understanding and managing visual impairments.",
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
    "summary": "This study investigates the combined effect of atropine eye drops and short-term retinal defocus on choroidal thickness in children with myopia. The research demonstrates how these two interventions together influence the choroid, a layer of tissue behind the retina, potentially impacting myopia progression.",
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
    "summary": "This study investigates how refractive errors (like nearsightedness, farsightedness, and astigmatism) affect optokinetic nystagmus (OKN), an involuntary eye movement that stabilizes vision during movement. The research likely explores the relationship between visual clarity and this crucial oculomotor response, potentially shedding light on visual processing mechanisms.",
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
    "summary": "This study investigates the consistency of arterial spin labeling (ASL) MRI for measuring blood perfusion in the human eye. The authors assessed the repeatability of ASL MRI, which is a non-invasive technique, to determine its reliability for studying ocular blood flow in research and clinical settings.",
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
    "summary": "This study investigates how atropine, a medication that dilates the pupil and paralyzes accommodation, affects the multifocal electroretinogram (mfERG) response to retinal defocus in humans. The research explores the impact of atropine on retinal function under varying degrees of blur, offering insights into the interplay between accommodation, pupil size, and retinal activity.",
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
    "summary": "This randomized clinical trial investigates the effectiveness of an eyelid massage device in treating Meibomian Gland Dysfunction (MGD). The study evaluates whether the device provides clinical benefits for patients suffering from this common eye condition.",
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
    "summary": "This study investigates how blood flow in the choroid (a layer of blood vessels behind the retina) changes in response to myopic retinal defocus, a condition where images are focused in front of the retina, simulating nearsightedness. The authors used blood perfusion MRI to measure these changes in human subjects, potentially providing insights into the mechanisms underlying myopia development.",
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
    "summary": "This study explores the use of readily available consumer technology (eye trackers and 3D displays) for automated assessment of ocular deviations, such as strabismus. The research potentially offers a cost-effective and accessible method for screening and monitoring eye alignment issues.",
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
    "summary": "This study explores a novel method for assessing visual field loss in glaucoma patients by analyzing involuntary eye movements. The researchers propose that subtle shifts in gaze behavior may provide an objective and sensitive measure of visual function, potentially offering an alternative or complement to traditional visual field testing.",
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
    "summary": "This study investigates how refractive errors, like nearsightedness or farsightedness, impact optokinetic nystagmus (OKN). OKN is an involuntary eye movement that stabilizes vision when viewing a moving scene; understanding how refractive error affects it could provide insights into visual-motor control and adaptation.",
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
    "summary": "This study investigated the impact of virtual reality (VR) headset use on tear film stability. Researchers found that wearing VR headsets can negatively affect the tear film, potentially leading to dry eye symptoms. This highlights a potential concern for individuals who frequently use VR technology.",
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
    "summary": "This 2019 study investigates how blood perfusion in the human choroid, a vascular layer behind the retina, responds to myopic retinal image defocus using blood perfusion MRI. The findings likely contribute to understanding the physiological mechanisms underlying myopia development and progression.",
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
    "summary": "This study investigates how the effectiveness of treatments for meibomian gland dysfunction (MGD) differs depending on the severity of meibomian gland dropout. The research aims to understand whether treatment outcomes vary based on the extent of gland loss, which has implications for personalized treatment strategies for MGD.",
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
    "summary": "This study investigates the effectiveness of MGO™ Manuka honey and tea tree oil in combating Demodex mites, common parasites found in the human eyelashes and implicated in ocular surface diseases. The research compares the in vitro effects of these natural products on the viability of ocular Demodex, providing insights into potential alternative treatment options.",
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
    "summary": "This study investigates the reliability of Arterial Spin Labeling (ASL) MRI in quantifying blood perfusion within the human eye. Understanding the repeatability of this non-invasive technique is crucial for its application in monitoring ocular blood flow changes in various ophthalmic diseases.",
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
    "summary": "This study investigates how atropine, a medication that dilates the pupil and paralyzes accommodation, affects the multifocal electroretinogram (mfERG) response to defocus. The research aims to understand how atropine influences the electrical activity of the retina when the eye is not properly focused, potentially impacting visual function and development.",
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
    "summary": "This study investigates the ocular surface microbiome in patients with meibomian gland dysfunction (MGD), a common cause of dry eye disease. The research aims to characterize the microbial communities present and identify potential differences compared to healthy individuals, which could contribute to understanding the pathogenesis of MGD.",
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
    "summary": "This 2017 Investigative Ophthalmology & Visual Science publication explores the physiological mechanisms behind pupillary hippus, the rhythmic oscillations of the pupil. The study focuses on the role of the autonomic nervous system in generating these oscillations, potentially providing insights into neurological function and disease.",
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
    "summary": "This study published in Scientific Reports in 2017, investigates the impact of virtual reality (VR) headset use on the eyes of young adults. The research likely examines short-term ocular changes associated with VR, such as eye strain, dry eye, or changes in binocular vision, which is highly relevant given the increased use of VR technology.",
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
    "summary": "This 2017 publication investigates the use of soft contact lenses for myopia control. It likely examines the effectiveness of these lenses in slowing down the progression of nearsightedness based on research conducted by Anstice, Turnbull, Collins, and Phillips.",
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
    "summary": "This 2017 publication by Philip Turnbull, titled \"Vision in Virtual Reality,\" likely explores the intersection of human visual perception and virtual reality technology. The work probably delves into how VR systems impact or leverage the human visual system, but without further context, the specific focus remains unclear.",
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
    "summary": "This 2017 study by Khanal et al. investigates the reliability of blood perfusion measurements in the human choroid, a vascular layer of the eye, using MRI. The research assesses both the consistency of these measurements within a single imaging session and across multiple sessions, which is crucial for longitudinal studies and clinical applications.",
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
    "summary": "This 2017 publication by Turnbull and Phillips examines the relationship between virtual reality technology and its impact on the eyes. While the specific findings are not detailed in the metadata provided, the title suggests an exploration of potential effects, challenges, or considerations related to vision and VR use.",
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
    "summary": "This 2017 study by Goodman, Turnbull, and Phillips investigates the connection between peripheral refraction and retinal electrophysiology. The research explores how refractive errors in the periphery of the eye correlate with electrical activity patterns in the retina.",
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
    "summary": "This 2017 study by Aitken, Phillips, and Turnbull investigates depth perception mechanisms in the New Zealand jumping spider's eye, specifically focusing on depth from defocus. The title suggests an exploration of plasticity, implying the eye's ability to adjust its focus for varying distances, which is crucial for jumping spider hunting behavior.",
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
    "summary": "This study investigates how we perceive contrast, using both conscious (psychophysics) and unconscious (optokinetic nystagmus) methods. The authors found similar contrast sensitivity functions using both techniques, suggesting a common neural basis for contrast perception whether we're actively aware of it or not.",
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
    "summary": "This study compares two methods for measuring visual function: traditional psychophysical testing and automated analysis of optokinetic nystagmus (OKN), an involuntary eye movement. The researchers found that both techniques yielded similar estimates of contrast sensitivity and visual acuity, suggesting that automated OKN analysis could be a reliable alternative to psychophysical methods.",
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
    "summary": "This review article examines the efficacy of various contact lens-based methods for controlling myopia progression in clinical settings. It discusses different lens designs and their mechanisms of action, offering insights for practitioners managing myopia in patients.",
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
    "summary": "This 2016 publication by Philip Turnbull discusses the increasing competition in the face fashion market, specifically noting the introduction of a new optical chain originating from Australia. The arrival of this new player is likely to intensify the market dynamics.",
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
    "summary": "This 2015 study published in Investigative Ophthalmology & Visual Science investigates the effectiveness of Intense Pulsed Light (IPL) therapy in treating Meibomian Gland Dysfunction (MGD). The prospective trial provides evidence for the use of IPL as a potential treatment option for this common eye condition.",
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
    "summary": "This study investigates the effectiveness of Intense Pulsed Light (IPL) therapy for Meibomian Gland Dysfunction (MGD), a common cause of dry eye. Through a rigorous double-masked, placebo-controlled trial, the authors demonstrate the cumulative benefits of IPL in treating MGD.",
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
    "summary": "This study investigates the relationship between visual experience and eye development in squid. The researchers found that visual input plays a crucial role in regulating eye growth, suggesting a direct link between environment and physical development in these cephalopods.",
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
    "summary": "This 2015 publication is a retrospective case-series analysis from a myopia control clinic. Authors Turnbull and Phillips likely reviewed patient data to evaluate the effectiveness of various myopia control interventions in a real-world clinical setting.",
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
    "summary": "This study prospectively evaluates the effectiveness of intense pulsed light (IPL) therapy in treating meibomian gland dysfunction (MGD). The research, published in Acta Ophthalmologica, aims to provide evidence-based insights into IPL's role in managing this common eye condition.",
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
    "summary": "This study presents the findings of a placebo-controlled trial investigating the efficacy of intense pulsed light (IPL) therapy in treating meibomian gland dysfunction (MGD). The research, likely involving a randomized controlled trial design, seeks to determine if IPL offers a statistically significant improvement over a placebo treatment for individuals suffering from MGD.",
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
    "summary": "This study investigates emmetropisation, the process by which the eye adjusts its focus to achieve sharp vision, in squid. Focusing on the camera-type eye structure of these cephalopods, the research likely explores the mechanisms and factors influencing refractive error correction in this unique visual system.",
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
    "summary": "This publication analyzes cases of vertical diplopia (double vision) occurring after blunt trauma. The study examines both short-term and long-term presentations of this condition, likely exploring the underlying mechanisms and potential management strategies.",
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
    "year": 0,
    "url": "https://scholar.google.com/scholar?q=Supplemental+Information%3A+Visually+guided+eye+growth+in+the+squid",
    "summary": "This study, detailed in the supplemental information, investigates the relationship between visual input and eye growth in squid. The authors, Turnbull, Backhouse, and Phillips, explore how visual experience guides the development of the squid's visual system, specifically focusing on eye size and its correlation to vision.",
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
