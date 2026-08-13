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

export default function Home() {
  const { variant } = useDesign();
  const { isDark } = useTheme();
  const profilePhotoUrl = buildAssetUrl('/images/profile-photo.jpg');

  const bannerClasses = getBannerClasses(variant, isDark);
  const bioClasses = getBioSectionClasses(variant, isDark);
  const cardBase = getCardClasses(variant, isDark);
  const panelPrimary = getPanelClasses(variant, isDark, 'primary');
  const panelSecondary = getPanelClasses(variant, isDark, 'secondary');

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-gray-50 dark:bg-[#020617]">
      <div className="fixed inset-0 z-0 pointer-events-none" style={bioClasses.style}></div>

      {/* Bio Section */}
      <section className="relative z-10 pt-3 pb-12 sm:pb-16">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${bioClasses.animationClass}`}>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-start md:items-center">
              {/* Profile Image */}
              <div className="relative flex-shrink-0 md:flex-shrink animate-slideInLeft" style={{ animationDelay: '0ms' }}>
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl animate-subtleFloat" />
                <div className="absolute inset-0 opacity-70 pointer-events-none">
                  <svg viewBox="0 0 320 320" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="160" cy="160" r="126" stroke="rgba(125, 211, 252, 0.14)" strokeWidth="1.1" strokeDasharray="8 12" className="research-atmosphere__ring" />
                    <circle cx="160" cy="160" r="98" stroke="rgba(59, 130, 246, 0.16)" strokeWidth="0.9" strokeDasharray="4 10" className="research-atmosphere__ring research-atmosphere__ring--small" />
                    <circle cx="76" cy="210" r="3.5" className="research-atmosphere__node" style={{ animationDelay: '400ms' }} />
                    <circle cx="246" cy="102" r="3" className="research-atmosphere__node" style={{ animationDelay: '1200ms' }} />
                  </svg>
                </div>
                <div className="relative inline-block rounded-[1.15rem] overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
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
              <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 animate-slideInRight" style={{ animationDelay: '100ms' }}>
                <div className="space-y-5">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      Philip Turnbull
                      <span className="text-lg sm:text-xl font-medium text-cyan-700 dark:text-cyan-400">
                        PhD, B Optom (Hons)
                      </span>
                    </h1>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                      <GraduationCap className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <a
                        href="https://profiles.auckland.ac.nz/p-turnbull/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-base sm:text-lg text-inherit hover:text-cyan-700 dark:hover:text-cyan-400 hover:underline transition-colors"
                      >
                        Associate Professor in Optometry
                      </a>
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
                    A/Prof Phil Turnbull is an optometrist passionate about improving eye care for patients and creating better learning experiences for students. His research explores virtual reality, eye tracking, and AI applications in healthcare, alongside broader interests in mental wellbeing, refractive development, evidence-based optometry, equity, and improving access to eye care. He also advises on clinical standards and healthcare policy in Aotearoa New Zealand.
                  </p>
                  <p>
                    Phil is available to supervise Masters and PhD students across these areas, and he welcomes advisory or expert witness engagements where his experience in clinical and forensic optometry, teaching, standards development, or digital health may add value.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-start">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
                  >
                    <Mail size={18} />
                    Contact Phil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 pb-20">

        {/* Research Section */}
        <section id="research" className="scroll-mt-16 w-full pt-10 sm:pt-14 pb-12 sm:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 animate-fadeInUp">
            <div className="rounded-[2rem] border border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-950/20 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Research Areas
              </h2>
              <div className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 sm:mb-10 space-y-4">
                <p>
                  A/Prof Turnbull leads the <span className="font-semibold text-gray-900 dark:text-white">Virtual Eyes Lab</span>, whose research spans three core pillars:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-medium text-gray-700 dark:text-gray-300">
                  <li>
                    Developing innovative <span className="font-bold text-cyan-700 dark:text-cyan-400">healthcare technologies</span>
                  </li>
                  <li>
                    Advancing <span className="font-bold text-emerald-700 dark:text-emerald-400">clinical diagnostics and management</span>
                  </li>
                  <li>
                    Shaping <span className="font-bold text-indigo-700 dark:text-indigo-300">health policy</span> to improve equitable access to eye care
                  </li>
                </ul>
              </div>

              {/* Flattened 4-Column Grid Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">

                {/* Item 1: VR (Healthcare Tech) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 dark:hover:border-cyan-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(0, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/vr_healthcare.png')}
                      alt="Virtual Reality in Healthcare"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-cyan-600 dark:text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-sm">
                      Tech
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        Virtual Reality in Healthcare
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Developing and evaluating virtual reality applications for optometry education and clinical training to enhance real-world learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2: Eye Tracking (Healthcare Tech) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 dark:hover:border-blue-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(1, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/eye_tracking.png')}
                      alt="Eye Tracking and Gaze Analysis"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-cyan-600 dark:text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-sm">
                      Tech
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Eye Tracking & Gaze Analysis
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Exploring eye tracking technology to understand visual behaviour, support clinical diagnosis, and build assistive tech.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3: AI (Healthcare Tech) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30 dark:hover:border-purple-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(2, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/ai_optometry.png')}
                      alt="Artificial Intelligence in Optometry"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-cyan-600 dark:text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-sm">
                      Tech
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        AI in Optometry
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Applying machine learning to retinal imaging, disease prediction, and clinical decision support to improve outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4: TBI (Clinical Diagnostics) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:border-pink-500/30 dark:hover:border-pink-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(3, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/tbi_research.png')}
                      alt="Traumatic Brain Injury and Concussion"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-sm">
                      Diagnostics
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        TBI & Concussion
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Investigating eye tracking and oculomotor function to objectively classify and manage mild traumatic brain injuries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5: Myopia (Clinical Diagnostics) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/30 dark:hover:border-teal-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(4, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/myopia_research.png')}
                      alt="Myopia Control Research"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-sm">
                      Diagnostics
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        Myopia Control Research
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Researching management strategies and evaluating clinical interventions to address the growing global myopia epidemic.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 6: Dry Eye (Clinical Diagnostics) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 dark:hover:border-emerald-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(5, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/dry_eye_research.png')}
                      alt="Ocular Surface and Dry Eye"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-sm">
                      Diagnostics
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        Ocular Surface & Dry Eye
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Researching modern lifestyle impacts, like contact lens wear and screen time, on tear film stability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 7: Scope of Practice (Health Policy) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 dark:hover:border-indigo-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(6, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/health_policy.png')}
                      alt="Scope of Practice and Health Policy"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-2.5 py-1 rounded-full border border-indigo-500/30 backdrop-blur-md shadow-sm">
                      Policy
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        Scope of Practice
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Investigating optometry practice evolution, workforce dynamics, and advising on standards within Aotearoa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 8: Public Health (Health Policy) */}
                <div
                  className="group flex flex-col rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/30 dark:hover:border-amber-400/40 hover:-translate-y-1"
                  style={{ animationDelay: getAnimationDelay(7, variant) }}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
                    <Image
                      src={buildAssetUrl('/images/equity_research.png')}
                      alt="Public Health and Eye Care Equity"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-gray-950/80 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-2.5 py-1 rounded-full border border-indigo-500/30 backdrop-blur-md shadow-sm">
                      Policy
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        Public Health & Equity
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Conducting eye health surveys to identify underserved populations and target systemic care delivery inequities.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200/70 dark:border-gray-700/70">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Publications</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg">
                  See details of research outputs, including journal articles, conference papers, policy papers, and collaborative works.
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
          </div>
        </section>
      </div>

      {/* Teaching Section */}
      <section id="teaching" className="relative scroll-mt-16 w-full pt-14 sm:pt-20 pb-20 sm:pb-24 bg-gray-200/50 dark:bg-slate-900/50 [clip-path:polygon(0_3vw,100%_0,100%_calc(100%-3vw),0_100%)] z-10 my-6">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
              <div className="space-y-4">
                <ul className="divide-y divide-gray-200/70 dark:divide-gray-700/70 border-y border-gray-200/70 dark:border-gray-700/70">
                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Curriculum Design</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Coordinating the Bachelor of Optometry Part II programme and directing OPTOM216 – Introduction to Optometry, ensuring a strong foundational curriculum for early-stage students.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-600 dark:bg-sky-400 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Clinical Assessment</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Acting as a clinical and oral examiner for Part V optometry students during their final-year assessments, maintaining rigorous standards for clinical competency.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-700 dark:bg-violet-300 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Postgraduate Teaching</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Teaching advanced statistics and research methodologies within OPTOM783 – Research Project in Vision Science, equipping the next generation of researchers with critical analytical skills.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Interactive Learning</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Developing and integrating the{' '}
                        <a href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-700 dark:text-cyan-400 hover:underline no-hover-effect">
                          Virtual Patient
                        </a>{' '}
                        platform to provide immersive, interactive, and scalable clinical learning experiences that bridge theory and practice. This approach combines digital simulation, case-based teaching, and evidence-based clinical reasoning to create more engaging and accessible learning for optometry students.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">External Review &amp; Audit</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Providing external review and auditing services for international optometry programmes to ensure academic rigour, clinical teaching standards, and programmatic excellence.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-600 dark:bg-rose-400 shrink-0"></span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Postgraduate Examination</h4>
                      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Serving as an external examiner for international PhD and Masters theses across optometry and vision science, supporting high-quality research training and graduate outcomes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 lg:sticky lg:top-24 self-start" style={{ animationDelay: getAnimationDelay(3, variant) }}>
                <div className="rounded-3xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-slate-900/40 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={buildAssetUrl('/images/interactive_learning.png')}
                      alt="Interactive Learning"
                      fill
                      className="object-cover"
                    />
                  </div>
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
      <section id="advisory" className="scroll-mt-16 w-full pt-12 sm:pt-16 pb-16 sm:pb-20 relative z-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Sticky Intro Column */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                Advisory & Professional Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                I provide advisory services to professional organisations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
              </p>
            </div>

            {/* Vertical Timeline Column */}
            <div className="lg:col-span-2 relative pl-8 md:pl-12 border-l border-gray-200/50 dark:border-gray-800/50 space-y-10 py-2">
              {/* Item 1 ODOB */}
              <div className="relative group" style={{ animationDelay: getAnimationDelay(0, variant) }}>
                <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-400/40">
                  <div className="flex-shrink-0 w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 relative">
                    <Image
                      src={buildAssetUrl('/images/odob_advisor.png')}
                      alt="ODOB Advisor & Researcher"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      ODOB Advisor & Researcher
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Advising the{' '}
                      <a href="https://odob.health.nz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                        Optometrists and Dispensing Opticians Board
                      </a>{' '}
                      on regulatory standards, continuing education requirements, and professional development frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 Vision Standards */}
              <div className="relative group" style={{ animationDelay: getAnimationDelay(1, variant) }}>
                <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-500/30 dark:hover:border-sky-400/40">
                  <div className="flex-shrink-0 w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 relative">
                    <Image
                      src={buildAssetUrl('/images/vision_standards.png')}
                      alt="Vision Standards"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      Vision Standards
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Contributing to the development of vision standards for government and non-government agencies, ensuring rigorous and evidence-based visual standards and assessments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 Expert Witness */}
              <div className="relative group" style={{ animationDelay: getAnimationDelay(2, variant) }}>
                <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-violet-500/30 dark:hover:border-violet-400/40">
                  <div className="flex-shrink-0 w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 relative">
                    <Image
                      src={buildAssetUrl('/images/expert_witness.png')}
                      alt="Expert Witness Services"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Expert Witness and Forensic Optometry
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Providing objective expert opinions and scientific testimony on optometry-related matters in complex legal cases and professional disciplinary disputes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 Policy Development */}
              <div className="relative group" style={{ animationDelay: getAnimationDelay(3, variant) }}>
                <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-400/40">
                  <div className="flex-shrink-0 w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 relative">
                    <Image
                      src={buildAssetUrl('/images/health_policy2.png')}
                      alt="Policy Development"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Policy Development
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Developing robust policies and evidence-based best practice guidelines for optometry education and clinical practice, both in New Zealand and internationally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 Associate Editor */}
              <div className="relative group" style={{ animationDelay: getAnimationDelay(4, variant) }}>
                <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-gray-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-500/30 dark:hover:border-rose-400/40">
                  <div className="flex-shrink-0 w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 relative">
                    <Image
                      src={buildAssetUrl('/images/associate_editor.png')}
                      alt="Associate Editor"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      Associate Editor
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Serving as Associate Editor for {' '}
                      <a href="https://www.tandfonline.com/journals/tceo20" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 font-medium hover:underline">
                        Clinical and Experimental Optometry
                      </a>
                      , managing peer review and contributing to the dissemination of impactful vision science research.
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
      <section id="publications" className="relative scroll-mt-16 w-full pt-14 sm:pt-20 pb-20 sm:pb-24 bg-gray-200/50 dark:bg-slate-900/50 [clip-path:polygon(0_0,100%_3vw,100%_100%,0_calc(100%-3vw))] z-10 my-6">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
      <section id="contact" className="scroll-mt-16 w-full pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}