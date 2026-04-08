'use client';

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { useDesign } from '@/app/providers/DesignProvider';
import { useTheme } from '@/app/providers/ThemeProvider';
import {
  getBannerClasses,
  getBioSectionClasses,
  getCardClasses,
  getPanelClasses,
  getAnimationDelay,
} from '@/app/design/variants';

export default function Home() {
  const { variant } = useDesign();
  const { isDark } = useTheme();

  const bannerClasses = getBannerClasses(variant, isDark);
  const bioClasses = getBioSectionClasses(variant, isDark);
  const cardBase = getCardClasses(variant, isDark);
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
            className="flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 group"
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
            <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-8 md:gap-10 items-start">
              {/* Profile Image */}
              <div className={`flex-shrink-0 animate-slideInLeft`} style={{ animationDelay: '0ms' }}>
                <div className="relative inline-block">
                  <Image 
                    src="/images/profile-photo.jpg" 
                    alt="Associate Professor Philip Turnbull"
                    width={240}
                    height={240}
                    className={`rounded-xl shadow-lg transition-all duration-500 ${variant !== 'flat' ? 'hover:shadow-xl' : ''}`}
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/5 dark:ring-white/5" />
                </div>
              </div>

              {/* Bio Content */}
              <div className={`animate-slideInRight`} style={{ animationDelay: '100ms' }}>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight">
                    Philip Turnbull
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                    <p>B Optom (Hons), PhD</p>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-2">
                    Associate Professor in Optometry
                  </p>
                  <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 space-y-2">
                    <div className="mb-1">
                      <a 
                        href="https://www.auckland.ac.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium"
                      >
                        School of Optometry and Vision Science, University of Auckland
                      </a>
                      <span className="text-gray-400 dark:text-gray-500 mx-2">•</span>
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
        <section id="research" className="cv-section">
          <h2 className="cv-section-title">Research</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            I lead the <span className="font-semibold text-blue-600 dark:text-blue-400">Virtual Eyes Lab</span>, a research group focused on innovative technology applications in optometry and vision science.
          </p>
          <div className="cv-card-grid animate-stagger">
            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(0, variant),
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Virtual Reality in Healthcare
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I develop and evaluate virtual reality applications for optometry education and clinical training. These immersive environments enhance learning outcomes and prepare students for real-world practice.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(1, variant),
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Eye Tracking & Gaze Analysis
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I explore eye tracking technology to understand visual behaviour, support clinical diagnosis, and develop assistive technologies for patients with vision impairment.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(2, variant),
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Artificial Intelligence in Optometry
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I apply AI and machine learning to retinal imaging, disease prediction, and clinical decision support systems to improve diagnostic accuracy and patient outcomes.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(3, variant),
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Myopia Control Research
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I research effective myopia management strategies and co-founded the Auckland Myopia Control Clinic to address the growing global myopia epidemic.
              </p>
            </article>
          </div>

          <div
            className={`${panelPrimary.className} ${panelPrimary.animationClass} mt-10`}
            style={{
              ...panelPrimary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Publications</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
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

        <section id="teaching" className="cv-section">
          <h2 className="cv-section-title">Teaching</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-10">
            <p>
              As an educator, I teach and examine both undergraduate and postgraduate optometry students. I am the Part II coordinator for the Bachelor of Optometry programme, and course director of OPTOM216 - Introduction to Optometry. I also act as both a clinical and oral examiner for Part V students, and teach statistics and research skills as part of the OPTOM783 - Research Project in Vision Science.
            </p>
            <p>
              Each year I supervise many Honours, Masters, and PhD students in a broad range of research areas, and I remain available to take on new Masters and PhD projects.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Teaching Roles
          </h3>
          <div className="cv-card-grid">
            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(0, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Part II Coordinator
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I coordinate the Bachelor of Optometry Part II programme and direct OPTOM216 - Introduction to Optometry.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(1, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Clinical Examiner
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I act as a clinical and oral examiner for Part V optometry students in their final year assessments.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(2, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Research Methods
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I teach statistics and research skills in OPTOM783 - Research Project in Vision Science for postgraduate students.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(3, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Virtual Patient Platform
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I develop and teach with the Virtual Patient platform to provide immersive, interactive learning experiences.
              </p>
            </article>
          </div>

          <div
            className={`${panelSecondary.className} ${panelSecondary.animationClass} mt-10`}
            style={{
              ...panelSecondary.style,
              animationDelay: getAnimationDelay(4, variant),
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Postgraduate Supervision
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Current PhD Students</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>- <strong>Jasmine Zoest</strong> - Measurement of eye movements in three-dimensional space</li>
                  <li>- <strong>Balaje Vivekanandan</strong> - Oculomotor Function, Attentional Function, Trans-Saccadic Processing and Visual Perception in Mild Cognitive Impairment and Alzheimer's Disease</li>
                  <li>- <strong>Maggie Xu</strong> - The Effect of Blue Light on Myopia Progression in Young Smartphone Users</li>
                  <li>- <strong>Tony Han</strong> - Home-Based Monitoring of Visual Function in Age-Related Macular Degeneration</li>
                  <li>- <strong>Jordan Cooper</strong> - Exploring the influence of eyelid and blink characteristics on dry eye development</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Alumni</h4>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold mb-2">PhD Graduates:</p>
                    <ul className="space-y-2 text-base">
                      <li>- <strong>Dr Samuel Chiang</strong> - The effect of optical defocus on choroidal thickness</li>
                      <li>- <strong>Dr Safal Khanal</strong> - The effect of changes in choroidal perfusion on visual function</li>
                      <li>- <strong>Dr Soheil Doustkouhi</strong> - Development of objective techniques of the optometric examination</li>
                      <li>- <strong>Dr Alice Cade</strong> - Eye movements and postural stability following traumatic brain injury</li>
                      <li>- <strong>Dr Aryaman Taore</strong> - Developing Eye Tracking Technology using a mobile device for the use of optokinetic assessment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Masters Graduates:</p>
                    <ul className="space-y-2 text-base">
                      <li>- <strong>Bhavna Patel</strong> - Dry eye in younger populations</li>
                      <li>- <strong>Richard Johnson</strong> - Maritime visual standards</li>
                      <li>- <strong>Sabrina Ju</strong> - Treatments for AMD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="advisory" className="cv-section">
          <h2 className="cv-section-title">Advisory and Consulting</h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-10">
            I provide advisory services to professional organisations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
          </p>

          <div className="cv-card-grid">
            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(0, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ODOB Advisor and Researcher
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I advise the Optometrists and Dispensing Opticians Board on standards, education requirements, and professional development.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(1, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                CAA Vision Standards
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I contribute to Civil Aviation Authority standards for vision requirements and assessments in aviation safety.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(2, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Witness Services
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I provide expert opinion on optometry-related matters in legal cases and professional disputes.
              </p>
            </article>

            <article
              className={`${cardBase.className} ${cardBase.animationClass}`}
              style={{
                ...cardBase.style,
                animationDelay: getAnimationDelay(3, variant),
              }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Policy Development
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I help develop policy and best practice guidelines for optometry education and clinical practice in New Zealand and internationally.
              </p>
            </article>
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
              I am always interested in discussing how my expertise can support your organisation or research initiatives, including advisory and expert witness engagements.
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

