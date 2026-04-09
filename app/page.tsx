'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, ChevronDown } from "lucide-react";
import { useDesign } from '@/app/providers/DesignProvider';
import { useTheme } from '@/app/providers/ThemeProvider';
import {
  getBannerClasses,
  getBioSectionClasses,
  getPanelClasses,
  getAnimationDelay,
} from '@/app/design/variants';

function AccordionItem({
  id,
  title,
  openItem,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  openItem: string | null;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  const isOpen = openItem === id;
  return (
    <div
      className={`border-b border-gray-200 dark:border-gray-700 last:border-0 transition-colors duration-200 ${
        isOpen ? 'bg-blue-50/70 dark:bg-blue-900/20' : ''
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between py-4 px-5 text-left gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-semibold transition-colors duration-200 ${
            isOpen ? 'text-blue-800 dark:text-blue-200' : 'text-gray-900 dark:text-white'
          }`}
        >
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform transition-colors duration-200 ${
            isOpen
              ? 'rotate-180 text-blue-700 dark:text-blue-300'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-blue-100/70 dark:border-blue-800/40">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { variant } = useDesign();
  const { isDark } = useTheme();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(prev => (prev === id ? null : id));
  };

  const bannerClasses = getBannerClasses(variant, isDark);
  const bioClasses = getBioSectionClasses(variant, isDark);
  const panelPrimary = getPanelClasses(variant, isDark, 'primary');
  const panelSecondary = getPanelClasses(variant, isDark, 'secondary');

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

      {/* Hero Section with Virtual Patient Banner */}
      <section 
        className={`relative text-white py-3 bg-cover bg-center z-10 overflow-hidden ${bannerClasses.className}`}
        style={bannerClasses.style}
      >
        <div 
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${bannerClasses.animationClass}`}
        >
          <Link 
            href="https://virtualpatient.co.nz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 hover:opacity-50 transition-all duration-300 group"
          >
            <span className="text-base group-hover:scale-105 transition-transform">Looking for the Virtual Patient?</span>
            <ExternalLink className={`w-5 h-5 group-hover:translate-x-1 transition-transform`} />
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section 
        id="hero"
        className="relative z-10"
        style={bioClasses.style}
      >
        <div 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-300 ${bioClasses.animationClass}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[230px_minmax(0,1fr)] gap-8 md:gap-10 items-start">
              {/* Profile Image */}
              <div className={`flex-shrink-0 animate-slideInLeft`} style={{ animationDelay: '0ms' }}>
                <div className="relative inline-block">
                  <Image 
                    src="/images/profile-photo.jpg" 
                    alt="Associate Professor Philip Turnbull"
                    width={230}
                    height={230}
                    className={`rounded-xl shadow-lg transition-all duration-500 ${variant !== 'flat' ? 'hover:shadow-xl' : ''}`}
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/5 dark:ring-white/5" />
                </div>
              </div>

              {/* Bio Content */}
              <div className={`animate-slideInRight`} style={{ animationDelay: '100ms' }}>
                <div>
                  <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight">
                    Philip Turnbull
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                    <p>PhD, B Optom (Hons)<br />Associate Professor in Optometry</p>
                  </div>
                  <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                    <div className="mb-1">
                                          <a 
                        href="https://www.auckland.ac.nz/en/fmhs/about-the-faculty/sovs.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                      >
                        School of Optometry and Vision Science<br />
                      </a>
                      <a 
                        href="https://www.auckland.ac.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                      >
                        Waipapa Taumata Rau | University of Auckland<br></br>
                      </a>
                      <span className="text-gray-500 dark:text-gray-400">Aotearoa New Zealand</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a 
                        href="https://orcid.org/0000-0002-9892-2964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                      >
                        <svg
                          viewBox="0 0 256 256"
                          className="w-4 h-4 flex-shrink-0"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx="128" cy="128" r="128" fill="#A6CE39" />
                          <path
                            d="M86 78h18v100H86zM94.8 54.5c6.9 0 12.5 5.6 12.5 12.5S101.7 79.5 94.8 79.5 82.3 73.9 82.3 67s5.6-12.5 12.5-12.5zM121 78h30.4c29.2 0 49.6 19.8 49.6 50s-20.4 50-49.6 50H121V78zm30.4 83.5c18.6 0 31.4-12.5 31.4-33.5s-12.8-33.5-31.4-33.5H139v67h12.4z"
                            fill="#FFFFFF"
                          />
                        </svg>
                        <span>ORCiD: 0000-0002-9892-2964</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
<p>
  I am an Associate Professor in the School of Optometry and Vision Science at the University of Auckland. 
  My work as a clinician-scientist is driven by a commitment to improving eye care through two parallel paths: 
  the development and maintenance of professional standards, 
  and the application of emerging technologies and novel approaches to clinical challenges.
</p>

<p>
  My research portfolio reflects a broad interest in the mechanisms of vision and ocular health. 
  This includes work in myopia control, including the co-founding of the Auckland Myopia Control Clinic, 
  as well as investigations into dry eye disease, and how eye tracking and virtual reality can impact eye care. 
  I am particularly interested in how digital environments, ranging from screen time to virtual reality, impact 
  ocular physiology. By combining psychophysics with eye-tracking and physics-based simulations, 
  I develop tools designed to enhance both student education and patient diagnostics.
</p>

<p>
  Beyond the laboratory, I actively contribute to the profession of optometry in Aotearoa New Zealand. 
  I serve in advisory roles for government and non-government agencies, contributing expertise to guide 
  healthcare policy and optometric standards, and I can act as a supervisor for those under remediation programmes.
  Additionally, I have experience providing expert witness testimony in District Court proceedings, mediation, 
  adjudication, and arbitration sessions, where I offer evidence-based forensic analysis on vision-related evidence and clinical standards.
</p>

<p>
  I welcome inquiries for Masters and PhD supervision across diverse fields. 
  I am also available for consultancy or advisory engagements where my experience in digital health, 
  standards development, or forensic optometry can add value.
</p>
              </div>
            </div>

            <div className="pt-10 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md w-full"
              >
                <Mail size={18} />
                Contact Me
              </Link>
              <a
                href="https://profiles.auckland.ac.nz/p-turnbull/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300 w-full"
              >
                University Profile
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 cv-layout">
        <section id="research" className="cv-section bg-white dark:bg-gray-900 py-16">
          <h2 className="cv-section-title">Research</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            I lead the <span className="font-semibold">Virtual Eyes Lab</span>, a research group focused on innovative technology applications in optometry and vision science.
          </p>
<div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900/50">
  
  <AccordionItem id="research-simulation" title="Clinical Simulation & VR" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      I design and build <strong>physics-based simulators in Unity</strong> to bridge the gap between theory and 
      clinical practice. My work focuses on creating high-fidelity virtual environments and digital simulations for 
      optometry education, allowing students to master complex diagnostic techniques in a safe, 
      repeatable setting before engaging with patients. I also have a bespoke physics-based driving 
      simulator, which allows for controlled experiments on both desktop and virtual reality environments.
    </p>
  </AccordionItem>

  <AccordionItem id="research-eye-tracking" title="Ocular Motility & Gaze Analysis" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      I integrate eye tracking to quantify <strong>visual behavior and pupillary dynamics</strong>. 
      By investigating phenomena like pupillary hippus and optokinetic nystagmus (OKN), I develop 
      objective diagnostic markers for visual function that can be integrated into digital health 
      platforms and screening tools.
    </p>
  </AccordionItem>

  <AccordionItem id="research-myopia" title="Myopia Control & Emmetropisation" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      As a continuation of my PhD work, I work with colleagues to investigate the mechanisms that regulate eye growth. 
      My work explores how retinal defocus and environmental factors influence 
      eye growth, aiming to provide evidence-based management strategies to 
      mitigate the global rise of progressive myopia. As a co-founder of the translational <strong>Auckland Myopia Control Clinic</strong>, 
      I have a strong interest in the efficacy of optical and pharmaceutical interventions. 
    </p>
  </AccordionItem>

  <AccordionItem id="research-ocular-surface" title="Ocular Surface & Microbiome" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      Alongside colleagues, I research dry eye, including the <strong>ocular tear film</strong>, 
      the management of Meibomian Gland Dysfunction (MGD), and the impact of technology on the eyes and blinking behaviour. 
      This research evaluates novel clinical treatments, such as Intense Pulsed Light (IPL) therapy 
      and natural interventions, to improve long-term outcomes for dry eye sufferers.
    </p>
  </AccordionItem>

  <AccordionItem id="research-standards" title="Professional Standards & Policy" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      A significant portion of my daily work involves advising on <strong>clinical standards and healthcare policy </strong> 
       within Aotearoa New Zealand and Australia. To help ensure transparency and hold the profession to the
       highest standards of accountability, I also publish reports and research papers in this domain, 
       with a focus on ensuring public safety, equity of access, updating stakeholders on what how optometrists
       contribute to wider healthcare, and how the profession can adapt to meet the challenges of the future.
    </p>
  </AccordionItem>

  <AccordionItem id="research-ai" title="Digital Health & AI Applications" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4">
      I explore the application of <strong>machine learning and automated imaging</strong> to support clinical 
      decision-making. By integrating AI with traditional diagnostic data, my goal is to develop predictive 
      models that enhance the early detection of ocular diseases and conditions such as <strong>mild traumatic brain injury</strong>and streamline referral pathways in primary care.
    </p>
  </AccordionItem>

</div>

          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass} mt-5`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Publications</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">
              I share my research publications, including journal articles, conference papers, and collaborative works.
            </p>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white hover:text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              View Publications
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section id="teaching" className="cv-section bg-blue-50/30 dark:bg-blue-900/10 py-16 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
 <h2 className="cv-section-title">Teaching</h2>
<div className="space-y-4 text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-10">
  <p>
    As an educator, I am dedicated to developing the next generation of eye care professionals through a curriculum that balances fundamental clinical skills with emerging digital health trends. My teaching spans the entire optometric journey, from introducing foundational concepts to second-year students to conducting final-year clinical examinations.
  </p>
  <p>
    I am a strong advocate for evidence-based practice and research literacy. To that end, I supervise a diverse cohort of <strong>Honours, Masters, and PhD students</strong> across projects in vision science, clinical simulation, and public health. I welcome inquiries from prospective postgraduate students interested in exploring the intersection of technology and optometry.
  </p>
</div>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
  Teaching Roles
</h3>
<div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900/50">
  
  <AccordionItem id="teaching-part2" title="Leadership in Teaching" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4 text-gray-600 dark:text-gray-400">
      I serve as the <strong>Part II Coordinator</strong> for the Bachelor of Optometry programme and am the Course Director for <strong>OPTOM216: Introduction to Optometry</strong>. In these roles, I oversee the transition of students into professional clinical training, ensuring a robust foundation in ocular anatomy, physiology, and basic clinical assessment.
    </p>
  </AccordionItem>

  <AccordionItem id="teaching-lecturing" title="Undergraduate & International Lecturing" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4 text-gray-600 dark:text-gray-400">
      I deliver lectures across the full spectrum of optometry education, ranging from foundational visual science to advanced clinical management. My teaching is informed by research and infused with the latest technological advances, ensuring students receive the most current evidence-based insights in a fun and engaging manner. Beyond my core roles at the University of Auckland, I am invited to provide <strong>guest lectures at international universities</strong>, contributing to postgraduate modules and specialised clinical seminars on a global scale.
    </p>
  </AccordionItem>

  <AccordionItem id="teaching-examiner" title="Clinical & Oral Examination" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4 text-gray-600 dark:text-gray-400">
      I act as a <strong>Clinical and Oral Examiner for Part V</strong> students during their final year of study. These high-stakes assessments evaluate a student’s clinical reasoning, diagnostic accuracy, and readiness for independent practice, ensuring they meet the professional standards required for registration in Aotearoa New Zealand.
    </p>
  </AccordionItem>

  <AccordionItem id="teaching-research-methods" title="Statistics & Research Methodology" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4 text-gray-600 dark:text-gray-400">
      I lead the statistics and research skills component of <strong>OPTOM783: Research Project in Vision Science</strong>. I focus on equipping postgraduate students with practical data analysis skills, emphasizing the use of <strong>R and reproducible research methods</strong> to critically evaluate clinical data and scientific literature.
    </p>
  </AccordionItem>

  <AccordionItem id="teaching-virtual-patient" title="Innovative Learning Platforms" openItem={openItem} onToggle={toggleItem}>
    <p className="pt-4 text-gray-600 dark:text-gray-400">
      I am the developer and lead educator for the <strong>Virtual Patient platform</strong>. This tool provides students with immersive, interactive simulations of clinical encounters, allowing them to practice diagnostic decision-making and patient management in a risk-free digital environment that mirrors real-world complexity. The Virtual Patient can be accessed at <a href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium">virtualpatient.co.nz</a> I also have developed a range of tools to make it easy to generate custom MCQ based quizzes in Canvas and Inspera teaching platforms.
    </p>
  </AccordionItem>

</div>

          <div
            className={`${panelSecondary.className} ${panelSecondary.animationClass} mt-5`}
            style={{
              ...panelSecondary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Postgraduate Supervision
            </h3>

            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mt-4">
              <AccordionItem id="supervision-current" title="Current PhD Students" openItem={openItem} onToggle={toggleItem}>
                <ul className="space-y-2">
                  <li><strong>Jasmine Zoest</strong> - Measurement of eye movements in three-dimensional space</li>
                  <li><strong>Balaje Vivekanandan</strong> - Oculomotor Function, Attentional Function, Trans-Saccadic Processing and Visual Perception in Mild Cognitive Impairment and Alzheimer's Disease</li>
                  <li><strong>Maggie Xu</strong> - The Effect of Blue Light on Myopia Progression in Young Smartphone Users</li>
                  <li><strong>Tony Han</strong> - Home-Based Monitoring of Visual Function in Age-Related Macular Degeneration</li>
                  <li><strong>Jordan Cooper</strong> - Exploring the influence of eyelid and blink characteristics on dry eye development</li>
                </ul>
              </AccordionItem>
              <AccordionItem id="supervision-alumni" title="Alumni" openItem={openItem} onToggle={toggleItem}>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">PhD Graduates:</p>
                    <ul className="space-y-2 text-base">
                      <li><strong>Dr Samuel Chiang</strong> - The effect of optical defocus on choroidal thickness</li>
                      <li><strong>Dr Safal Khanal</strong> - The effect of changes in choroidal perfusion on visual function</li>
                      <li><strong>Dr Soheil Doustkouhi</strong> - Development of objective techniques of the optometric examination</li>
                      <li><strong>Dr Alice Cade</strong> - Eye movements and postural stability following traumatic brain injury</li>
                      <li><strong>Dr Aryaman Taore</strong> - Developing eye tracking technology using a mobile device for the use of optokinetic assessment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Masters Graduates:</p>
                    <ul className="space-y-2 text-base">
                      <li><strong>Bhavna Patel</strong> - Dry eye in younger populations</li>
                      <li><strong>Richard Johnson</strong> - Maritime visual standards</li>
                      <li><strong>Sabrina Ju</strong> - Emerging treatments for AMD</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </section>

        <section id="advisory" className="cv-section">
          <h2 className="cv-section-title">Advisory and Consulting</h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-10">
            I provide advisory services to professional organisations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
          </p>

          <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900/50">
            <AccordionItem id="advisory-odob" title="ODOB Advisor and Researcher" openItem={openItem} onToggle={toggleItem}>
              <p>I advise the Optometrists and Dispensing Opticians Board on standards, education requirements, and professional development.</p>
            </AccordionItem>
            <AccordionItem id="advisory-caa" title="CAA Vision Standards" openItem={openItem} onToggle={toggleItem}>
              <p>I contribute to Civil Aviation Authority standards for vision requirements and assessments in aviation safety.</p>
            </AccordionItem>
            <AccordionItem id="advisory-expert" title="Expert Witness Services" openItem={openItem} onToggle={toggleItem}>
              <p>I provide expert opinion on optometry-related matters in legal cases and professional disputes.</p>
            </AccordionItem>
            <AccordionItem id="advisory-policy" title="Policy Development" openItem={openItem} onToggle={toggleItem}>
              <p>I help develop policy and best practice guidelines for optometry education and clinical practice in New Zealand and internationally.</p>
            </AccordionItem>
          </div>
        </section>

        <section id="contact" className="cv-section pb-24">
          <h2 className="cv-section-title">Contact and Engagement</h2>
          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass}`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              I am always interested in discussing how I could support your case, organisation, or research initiatives, including advisory and expert witness engagements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white hover:text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Contact Philip
              </Link>
              <a
                href="https://profiles.auckland.ac.nz/p-turnbull/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all"
              >
                University Profile
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

