'use client';

import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Users, ExternalLink, Mail, Monitor, Eye, BrainCircuit, ScanEye, ScrollText, MapPin, Briefcase } from "lucide-react";
import { useDesign } from '@/app/providers/DesignProvider';
import { useTheme } from '@/app/providers/ThemeProvider';
import PublicationsList from './components/PublicationsList';
import ContactSection from './components/ContactSection';
import SupervisionRoster from './components/SupervisionRoster';
import {
  getBannerClasses,
  getBioSectionClasses,
  getCardClasses,
  getPanelClasses,
  getAnimationDelay,
} from '@/app/design/variants';
import { buildAssetUrl } from '@/app/lib/site';

// Removed TABS array since we are using continuous scrolling

export default function Home() {
  const { variant } = useDesign();
  const { isDark } = useTheme();
  const profilePhotoUrl = buildAssetUrl('/images/profile-photo.jpg');

  // SVG Texture Pattern
  const TextureBackground = () => (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none opacity-5 dark:opacity-10 z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="texture" patternUnits="userSpaceOnUse" width="100" height="100">
          <rect width="100" height="100" fill="currentColor" />
          <path
            d="M0,0 l100,100 M100,0 l-100,100"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <circle cx="50" cy="50" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="25" cy="25" r="0.5" fill="currentColor" opacity="0.3" />
          <circle cx="75" cy="75" r="0.5" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#texture)" />
    </svg>
  );

  const bannerClasses = getBannerClasses(variant, isDark);
  const bioClasses = getBioSectionClasses(variant, isDark);
  const cardBase = getCardClasses(variant, isDark);
  const panelPrimary = getPanelClasses(variant, isDark, 'primary');
  const panelSecondary = getPanelClasses(variant, isDark, 'secondary');

  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-[#020617]">
      <div className="fixed inset-0 z-0 pointer-events-none" style={bioClasses.style}></div>
      <TextureBackground />

      {/* Hero Section with Virtual Patient Banner */}
      <section
        className={`relative text-white py-2.5 sm:py-3 bg-cover bg-center z-10 overflow-hidden ${bannerClasses.className}`}
        style={bannerClasses.style}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${bannerClasses.animationClass}`}
        >
          <Link
            href="https://virtualpatient.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 group text-center"
          >
            <span className="text-sm sm:text-base group-hover:scale-105 transition-transform">Looking for the Virtual Patient?</span>
            <ExternalLink className={`w-5 h-5 group-hover:translate-x-1 transition-transform`} />
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative z-10 pt-2 pb-4">
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 transition-all duration-300 ${bioClasses.animationClass}`}
        >
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
            {/* Profile Image */}
            <div className={`flex-shrink-0 md:flex-shrink animate-slideInLeft`} style={{ animationDelay: '0ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-[1.25rem] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative inline-block rounded-[1.15rem] overflow-hidden border border-white/10">
                <Image
                  src={profilePhotoUrl}
                  alt="Associate Professor Philip Turnbull"
                  width={240}
                  height={240}
                  className="w-40 sm:w-52 md:w-60 h-auto transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className={`flex-1 min-w-0 space-y-6 sm:space-y-8 animate-slideInRight`} style={{ animationDelay: '100ms' }}>
              <div className="space-y-5">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    Philip Turnbull
                    <span className="text-lg sm:text-xl font-medium text-cyan-700 dark:text-cyan-400">
                      B Optom (Hons), PhD
                    </span>
                  </h1>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                    <GraduationCap className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-base sm:text-lg">Associate Professor in Optometry</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <div className="flex flex-wrap items-center gap-x-2 text-base">
                      <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline font-medium transition-all">
                        University of Auckland
                      </a>
                      <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">•</span>
                      <span className="text-gray-600 dark:text-gray-400 w-full sm:w-auto mt-0.5 sm:mt-0">Aotearoa New Zealand</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <svg viewBox="0 0 256 256" className="w-5 h-5 flex-shrink-0" aria-hidden="true" focusable="false">
                      <circle cx="128" cy="128" r="128" fill="#A6CE39" />
                      <path d="M86 78h18v100H86zM94.8 54.5c6.9 0 12.5 5.6 12.5 12.5S101.7 79.5 94.8 79.5 82.3 73.9 82.3 67s5.6-12.5 12.5-12.5zM121 78h30.4c29.2 0 49.6 19.8 49.6 50s-20.4 50-49.6 50H121V78zm30.4 83.5c18.6 0 31.4-12.5 31.4-33.5s-12.8-33.5-31.4-33.5H139v67h12.4z" fill="#FFFFFF" />
                    </svg>
                    <a href="https://orcid.org/0000-0002-9892-2964" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline font-medium text-base transition-colors">
                      ORCiD: 0000-0002-9892-2964
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-[15px] sm:text-base leading-relaxed">
                <p>
                  I'm an optometrist passionate about using technology and other available resources
                  to make eye care better for patients and students. I co-founded the translational
                  Auckland Myopia Control Clinic, and now work on developing and advising on standards
                  for optometry practice in Aotearoa New Zealand. My research explores virtual reality,
                  eye tracking, and AI applications in healthcare, alongside broader interests in
                  mental wellbeing, equity, and improving access to eye health.
                </p>
                <p>
                  I am available to supervise Masters and PhD students across these topics, and I welcome
                  advisory or expert witness engagements where my experience in optometry, standards development,
                  or digital health may add value.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-start">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
                >
                  <Mail size={18} />
                  Contact Me
                </Link>
                <a
                  href="https://profiles.auckland.ac.nz/p-turnbull/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-xl font-semibold transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  University Profile
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 pb-20">

        {/* Research Section */}
        <section id="research" className="scroll-mt-24 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 animate-fadeInUp">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Research Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
              Leading the <span className="font-semibold text-blue-600 dark:text-blue-400">Virtual Eyes Lab</span>, our research spans three core pillars: developing innovative <span className="font-medium text-gray-900 dark:text-gray-200">healthcare technologies</span>, advancing <span className="font-medium text-gray-900 dark:text-gray-200">clinical diagnostics and management</span>, and shaping <span className="font-medium text-gray-900 dark:text-gray-200">health policy</span> to improve equitable access to eye care.
            </p>
            <div className="space-y-10 animate-stagger">
              {/* Healthcare Technologies Group */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-700 dark:text-cyan-400 border-b border-gray-200/50 dark:border-gray-800/50 pb-2 mb-4" style={{ animationDelay: getAnimationDelay(0, variant) }}>
                  Healthcare Technologies
                </h3>
                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(0, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/vr_healthcare.png')}
                      alt="Virtual Reality in Healthcare"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Virtual Reality in Healthcare
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Developing and evaluating virtual reality applications for optometry education and clinical training. These immersive environments enhance learning outcomes and prepare students for real-world practice.
                    </p>
                  </div>
                </div>

                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(1, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/eye_tracking.png')}
                      alt="Eye Tracking and Gaze Analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Eye Tracking & Gaze Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Exploring eye tracking technology to understand visual behaviour, support clinical diagnosis, and develop assistive technologies for patients with vision impairment.
                    </p>
                  </div>
                </div>

                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(2, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/ai_optometry.png')}
                      alt="Artificial Intelligence in Optometry"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Artificial Intelligence in Optometry
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Applying AI and machine learning to retinal imaging, disease prediction, and clinical decision support systems to improve diagnostic accuracy and patient outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinical Diagnostics Group */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700 dark:text-emerald-400 border-b border-gray-200/50 dark:border-gray-800/50 pb-2 mb-4 pt-4" style={{ animationDelay: getAnimationDelay(3, variant) }}>
                  Clinical Diagnostics & Management
                </h3>
                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(3, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/tbi_research.png')}
                      alt="Traumatic Brain Injury and Concussion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      Traumatic Brain Injury & Concussion
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Investigating the use of eye tracking and oculomotor function to objectively classify and manage mild traumatic brain injuries, as well as the effects of interventions like cervical spine vibration on visual processing.
                    </p>
                  </div>
                </div>

                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(4, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/myopia_research.png')}
                      alt="Myopia Control Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      Myopia Control Research
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Researching effective myopia management strategies and evaluating clinical interventions to address the growing global myopia epidemic, including foundational work at the Auckland Myopia Control Clinic.
                    </p>
                  </div>
                </div>

                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(5, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/dry_eye_research.png')}
                      alt="Ocular Surface and Dry Eye"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Ocular Surface & Dry Eye
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Researching the physiological impacts of modern lifestyles, including the effects of soft contact lenses and extended digital screen time on tear film stability and ocular surface health in younger populations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Health Policy Group */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-indigo-700 dark:text-indigo-400 border-b border-gray-200/50 dark:border-gray-800/50 pb-2 mb-4 pt-4" style={{ animationDelay: getAnimationDelay(6, variant) }}>
                  Health Policy & Equity
                </h3>
                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(6, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/health_policy.png')}
                      alt="Scope of Practice and Health Policy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Scope of Practice & Health Policy
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Investigating the evolving scope of optometry practice, workforce dynamics, and advising on health policy and standards to improve eye care delivery in Aotearoa New Zealand.
                    </p>
                  </div>
                </div>

                <div
                  className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                  style={{ animationDelay: getAnimationDelay(7, variant) }}
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500 relative">
                    <Image
                      src={buildAssetUrl('/images/equity_research.png')}
                      alt="Public Health and Eye Care Equity"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Public Health & Eye Care Equity
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Conducting population-based eye health surveys to identify underserved groups and develop strategies to address inequity in access to eye care across Aotearoa New Zealand and the wider Western Pacific.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass}`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Publications</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              I share my research publications, including journal articles, conference papers, and collaborative works.
            </p>
            <Link
              href="#publications"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
            >
              View Publications
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="scroll-mt-24 w-full py-16 sm:py-24 bg-gray-100/50 dark:bg-white/[0.03] border-y border-gray-200/50 dark:border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Teaching & Education
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed">
              <p>
                As an educator, I teach and examine both undergraduate and postgraduate optometry students. I am the Part II coordinator for the Bachelor of Optometry programme, and course director of OPTOM216 – Introduction to Optometry. I also act as both a clinical and oral examiner for Part V students, and teach statistics and research skills as part of the OPTOM783 – Research Project in Vision Science.
              </p>
              <p>
                Each year I supervise many Honours, Masters, and PhD students in a broad range of research areas, and I remain available to take on new Masters and PhD projects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Teaching Roles
            </h3>
            <div className="space-y-10 animate-stagger">
              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(0, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/ug_coordination.png')}
                    alt="Undergraduate Coordination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Undergraduate Coordination
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Coordinating the Bachelor of Optometry Part II programme and directing OPTOM216 – Introduction to Optometry, ensuring a strong foundational curriculum for early-stage students.
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(1, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/clinical_assessment.png')}
                    alt="Clinical Assessment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Clinical Assessment
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Acting as a clinical and oral examiner for Part V optometry students during their final year capstone assessments, maintaining rigorous standards for clinical competency.
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(2, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/pg_teaching.png')}
                    alt="Postgraduate Teaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Postgraduate Teaching
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Teaching advanced statistics and research methodologies within OPTOM783 – Research Project in Vision Science, equipping the next generation of researchers with critical analytical skills.
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(3, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/interactive_learning.png')}
                    alt="Interactive Learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Interactive Learning
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Developing and integrating the Virtual Patient platform to provide immersive, interactive, and scalable clinical learning experiences that bridge theory and practice.
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(4, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/external_review.png')}
                    alt="External Review & Audit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    External Review & Audit
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Providing external review and auditing services for international optometry programmes to ensure academic rigour, clinical teaching standards, and programmatic excellence.
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
                style={{ animationDelay: getAnimationDelay(5, variant) }}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all duration-500 relative">
                  <Image
                    src={buildAssetUrl('/images/pg_examination.png')}
                    alt="Postgraduate Examination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                    Postgraduate Examination
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Serving as an external examiner for international PhD and Masters theses across the fields of optometry and vision science.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${panelSecondary.className} ${panelSecondary.animationClass}`}
            style={{
              ...panelSecondary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Postgraduate Supervision
            </h3>

            <div className="space-y-8 mt-2">
              <SupervisionRoster />
            </div>
          </div>
          </div>
        </section>

        {/* Advisory Section */}
        <section id="advisory" className="scroll-mt-24 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advisory & Professional Service
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl leading-relaxed">
              I provide advisory services to professional organisations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
            </p>
          </div>

          <div className="space-y-10 animate-stagger mt-8">
            <div
              className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
              style={{ animationDelay: getAnimationDelay(0, variant) }}
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-500 relative">
                <Image 
                  src={buildAssetUrl('/images/odob_advisor.png')} 
                  alt="ODOB Advisor & Researcher"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ODOB Advisor & Researcher
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Advising the Optometrists and Dispensing Opticians Board on regulatory standards, continuing education requirements, and professional development frameworks.
                </p>
              </div>
            </div>

            <div
              className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
              style={{ animationDelay: getAnimationDelay(1, variant) }}
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-500 relative">
                <Image 
                  src={buildAssetUrl('/images/caa_standards.png')} 
                  alt="CAA Vision Standards"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  CAA Vision Standards
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Contributing to Civil Aviation Authority standards for vision requirements, ensuring rigorous and evidence-based visual assessments in aviation safety.
                </p>
              </div>
            </div>

            <div
              className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
              style={{ animationDelay: getAnimationDelay(2, variant) }}
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500 relative">
                <Image 
                  src={buildAssetUrl('/images/expert_witness.png')} 
                  alt="Expert Witness Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Expert Witness Services
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Providing objective expert opinions and scientific testimony on optometry-related matters in complex legal cases and professional disciplinary disputes.
                </p>
              </div>
            </div>

            <div
              className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
              style={{ animationDelay: getAnimationDelay(3, variant) }}
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 relative">
                <Image 
                  src={buildAssetUrl('/images/health_policy.png')} 
                  alt="Policy Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Policy Development
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Developing robust policies and evidence-based best practice guidelines for optometry education and clinical practice, both in New Zealand and internationally.
                </p>
              </div>
            </div>

            <div
              className={`group flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/30 ${cardBase.animationClass}`}
              style={{ animationDelay: getAnimationDelay(4, variant) }}
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all duration-500 relative">
                <Image 
                  src={buildAssetUrl('/images/pg_examination.png')} 
                  alt="Associate Editor"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  Associate Editor
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Serving as Associate Editor for {' '}
                  <a href="https://www.tandfonline.com/journals/tceo20" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 font-medium hover:underline">
                    Clinical and Experimental Optometry
                  </a>
                  , managing peer review and contributing to the dissemination of impactful vision science research.
                </p>
              </div>
            </div>
          </div>

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
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg">
              I'm always interested in discussing how my expertise can help your organisation or research initiatives, and I'm available for advisory or expert witness engagements when those conversations extend into regulatory or clinical practice questions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl transition-all font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
            >
              <Mail size={20} />
              Contact Philip
            </Link>
          </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="scroll-mt-24 w-full py-16 sm:py-24 bg-gray-100/50 dark:bg-white/[0.03] border-y border-gray-200/50 dark:border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Publications
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl leading-relaxed">
              Explore my research publications across vision science, optometry, and related fields.
            </p>
          </div>
          <PublicationsList showTitle={false} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <ContactSection />
          </div>
        </section>
      </div>
    </main>
  );
}

