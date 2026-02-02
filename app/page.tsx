'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Users, ExternalLink, Mail, ChevronDown } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'research' | 'teaching' | 'advisory'>('research');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950">
      <TextureBackground />

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 animate-bounce transition-opacity duration-500">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      )}

      {/* Hero Section with Virtual Patient Banner */}
      <section 
        className="relative bg-blue-600 dark:bg-blue-700 text-white py-3 bg-cover bg-center z-10"
        style={{ backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), url('/images/banner1.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:opacity-95 transition-opacity">
            <span className="text-base">Looking for the Virtual Patient?</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative z-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Image 
                  src="/images/profile-photo.jpg" 
                  alt="Associate Professor Philip Turnbull"
                  width={240}
                  height={240}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/10" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
                  <b>Philip Turnbull</b> B Optom (Hons), PhD
                </h1>
                <div className="text-lg text-gray-600 dark:text-gray-400 space-y-1">
                  <p><b>Associate Professor in Optometry</b></p>
                  <br/>
                  <a 
                    href="https://www.auckland.ac.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                  >
                    University of Auckland
                  </a>
                  <span className="text-gray-500 dark:text-gray-500"> • Auckland, New Zealand</span>
                  <br/>
                  <a 
                    href="https://orcid.org/0000-0002-9892-2964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                  >
                    <span className="inline-flex items-center justify-center w-4 h-4">
                      <svg
                        viewBox="0 0 256 256"
                        className="w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle cx="128" cy="128" r="128" fill="#A6CE39" />
                        <path
                          d="M86 78h18v100H86zM94.8 54.5c6.9 0 12.5 5.6 12.5 12.5S101.7 79.5 94.8 79.5 82.3 73.9 82.3 67s5.6-12.5 12.5-12.5zM121 78h30.4c29.2 0 49.6 19.8 49.6 50s-20.4 50-49.6 50H121V78zm30.4 83.5c18.6 0 31.4-12.5 31.4-33.5s-12.8-33.5-31.4-33.5H139v67h12.4z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </span>
                    ORCiD: 0000-0002-9892-2964
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an optometrist passionate about using technology and other available resources 
                  to make eye care better for patients and students. I co-founded the translational 
                  Auckland Myopia Control Clinic, and now work on developing and advising on standards 
                  for optometry practice in New Zealand. My research explores virtual reality, 
                  eye tracking, and AI applications in healthcare, alongside broader interests in 
                  mental wellbeing, equity, and access to eye health care. 
                </p>
              </div>

              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} />
                  Contact Me
                </Link>
                <a
                  href="https://profiles.auckland.ac.nz/p-turnbull/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all"
                >
                  University Profile
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tab Tiles */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Research Tile */}
          <button
            onClick={() => setActiveTab('research')}
            className={`group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 transition-all text-left overflow-hidden ${
              activeTab === 'research'
                ? 'border-blue-500 dark:border-blue-400 scale-105 shadow-2xl'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 transition-opacity ${
              activeTab === 'research' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
            }`} />
            <div className="relative z-10">
              <BookOpen className={`w-14 h-14 mb-4 transition-colors ${
                activeTab === 'research' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500'
              }`} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Research</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li>• Virtual Reality Applications</li>
                <li>• Eye Tracking Systems</li>
                <li>• Artificial Intelligence</li>
                <li>• Myopia Control Research</li>
              </ul>
            </div>
          </button>

          {/* Teaching Tile */}
          <button
            onClick={() => setActiveTab('teaching')}
            className={`group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 transition-all text-left overflow-hidden ${
              activeTab === 'teaching'
                ? 'border-blue-500 dark:border-blue-400 scale-105 shadow-2xl'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 transition-opacity ${
              activeTab === 'teaching' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
            }`} />
            <div className="relative z-10">
              <GraduationCap className={`w-14 h-14 mb-4 transition-colors ${
                activeTab === 'teaching' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500'
              }`} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Teaching</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li>• Undergraduate Optometry</li>
                <li>• Postgraduate Programs</li>
                <li>• Clinical Decision-Making</li>
                <li>• Virtual Patient Platform</li>
              </ul>
            </div>
          </button>

          {/* Advisory Tile */}
          <button
            onClick={() => setActiveTab('advisory')}
            className={`group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 transition-all text-left overflow-hidden ${
              activeTab === 'advisory'
                ? 'border-blue-500 dark:border-blue-400 scale-105 shadow-2xl'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 transition-opacity ${
              activeTab === 'advisory' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
            }`} />
            <div className="relative z-10">
              <Users className={`w-14 h-14 mb-4 transition-colors ${
                activeTab === 'advisory' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500'
              }`} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Advisory</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <li>• ODOB Advisor & Researcher</li>
                <li>• CAA Vision Standards</li>
                <li>• Expert Witness Services</li>
                <li>• Policy Development</li>
              </ul>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {/* Research Tab */}
          {activeTab === 'research' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Research Areas
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  Leading the <span className="font-semibold text-blue-600 dark:text-blue-400">Virtual Eyes Lab</span>, a research group focused on innovative technology applications in optometry and vision science.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Virtual Reality in Healthcare
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Developing and evaluating virtual reality applications for optometry education and clinical training. These immersive environments enhance learning outcomes and prepare students for real-world practice.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Eye Tracking & Gaze Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Exploring eye tracking technology to understand visual behavior, support clinical diagnosis, and develop assistive technologies for patients with vision impairment.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Artificial Intelligence in Optometry
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Applying AI and machine learning to retinal imaging, disease prediction, and clinical decision support systems to improve diagnostic accuracy and patient outcomes.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Myopia Control Research
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Researching effective myopia management strategies and co-founding the Auckland Myopia Control Clinic to address the growing global myopia epidemic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-800 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Publications</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  Explore my research publications, including journal articles, conference papers, and collaborative works.
                </p>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  View Publications
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* Teaching Tab */}
          {activeTab === 'teaching' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Teaching & Education
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    As an educator, I teach and examine both undergraduate and postgraduate optometry students. I am the Part II coordinator for the Bachelor of Optometry programme, and course director of OPTOM216 – Introduction to Optometry. I also act as both a clinical and oral examiner for Part V students, and teach statistics and research skills as part of the OPTOM783 – Research Project in Vision Science.
                  </p>
                  <p>
                    Each year I supervise many Honours, Masters, and PhD students, in a broad range of research areas.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Teaching Roles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Part II Coordinator
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Coordinating the Bachelor of Optometry Part II programme and directing OPTOM216 – Introduction to Optometry.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Clinical Examiner
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Acting as clinical and oral examiner for Part V optometry students in their final year assessments.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Research Methods
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Teaching statistics and research skills in OPTOM783 – Research Project in Vision Science for postgraduate students.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Virtual Patient Platform
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Developing and teaching with the Virtual Patient platform to provide immersive, interactive learning experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-10 border border-indigo-200 dark:border-indigo-800 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Postgraduate Supervision
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Current PhD Students</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• <strong>Jasmine Zoest</strong> - Measurement of eye movements in three-dimensional space</li>
                      <li>• <strong>Balaje Vivekanandan</strong> - Oculomotor Function, Attentional Function, Trans-Saccadic Processing and Visual Perception in Mild Cognitive Impairment and Alzheimer's Disease</li>
                      <li>• <strong>Maggie Xu</strong> - The Effect of Blue Light on Myopia Progression in Young Smartphone Users</li>
                      <li>• <strong>Tony Han</strong> - Home-Based Monitoring of Visual Function in Age-Related Macular Degeneration</li>
                      <li>• <strong>Jordan Cooper</strong> - Exploring the influence of eyelid and blink characteristics on dry eye development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Alumni</h4>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <div>
                        <p className="font-semibold mb-2">PhD Graduates:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Dr Samuel Chiang</strong> - The effect of optical defocus on choroidal thickness</li>
                          <li>• <strong>Dr Safal Khanal</strong> - The effect of changes in choroidal perfusion on visual function</li>
                          <li>• <strong>Dr Soheil Doustkouhi</strong> - Development of objective techniques of the optometric examination</li>
                          <li>• <strong>Dr Alice Cade</strong> - Eye movements and postural stability following traumatic brain injury</li>
                          <li>• <strong>Dr Aryaman Taore</strong> - Developing Eye Tracking Technology using a mobile device for the use of optokinetic assessment</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Masters Graduates:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Bhavna Patel</strong> - Dry eye in younger populations</li>
                          <li>• <strong>Richard Johnson</strong> - Maritime visual standards</li>
                          <li>• <strong>Sabrina Ju</strong> - Treatments for AMD</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-indigo-200 dark:border-indigo-700">
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                      Interested in undertaking research in the Virtual Eyes Lab?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    >
                      <Mail size={20} />
                      Contact Phil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advisory Tab */}
          {activeTab === 'advisory' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Advisory & Professional Service
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
                  Providing advisory services to professional organizations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    ODOB Advisor & Researcher
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Advising the Optometrists and Dispensing Opticians Board on standards, education requirements, and professional development.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    CAA Vision Standards
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Contributing to Civil Aviation Authority standards for vision requirements and assessments in aviation safety.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Expert Witness Services
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Providing expert opinion on optometry-related matters in legal cases and professional disputes.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Policy Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Helping develop policy and best practice guidelines for optometry education and clinical practice in New Zealand and internationally.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-800 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interested in Collaborating?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  I'm always interested in discussing how my expertise can help your organization or research initiatives. Let's connect!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} />
                  Contact Philip
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

