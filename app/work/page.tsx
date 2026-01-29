'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, ExternalLink, BookOpen, GraduationCap, Users } from 'lucide-react';

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState<'research' | 'teaching' | 'advisory'>('research');

  const tabs = [
    { id: 'research', label: 'Research' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'advisory', label: 'Advisory' },
  ] as const;

  // SVG Texture Pattern
  const TextureBackground = () => (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none opacity-5 dark:opacity-10"
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
    <div className="relative min-h-screen">
      <TextureBackground />

      {/* Hero Section with Virtual Patient Banner */}
      <section 
        className="bg-blue-600 dark:bg-blue-700 text-white py-3 relative bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), url('/images/banner1.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://virtualpatient.co.nz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="text-lg">Looking for the Virtual Patient?</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-10 bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/profile-photo.jpg" 
                alt="Associate Professor Philip Turnbull"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
                priority
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Associate Professor Philip Turnbull
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <a 
                  href="https://www.auckland.ac.nz/en/science/about-the-faculty/school-of-optometry-and-vision-science.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  School of Optometry and Vision Science
                </a>
                <br/>
                <a 
                  href="https://www.auckland.ac.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  University of Auckland
                </a><br /> Auckland, New Zealand
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A/Prof Turnbull is a Board-registered optometrist specialising in 
                leveraging technology to improve healthcare education and clinical practice.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                His research focuses on virtual reality, eye tracking, artificial intelligence, 
                and digital health innovation. He co-founded the Auckland Myopia Control Clinic 
                and has developed national standards for optometry practice in New Zealand.
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:p.turnbull@auckland.ac.nz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://www.auckland.ac.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors"
                >
                  University Profile
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-gray-200 dark:border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold text-lg transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="fade-in">
          {/* Research Tab */}
          {activeTab === 'research' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Research Areas
                </h2>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Virtual Reality in Healthcare
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Developing and evaluating virtual reality applications for optometry education and clinical training. These immersive environments enhance learning outcomes and prepare students for real-world practice.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Eye Tracking & Gaze Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Exploring eye tracking technology to understand visual behavior, support clinical diagnosis, and develop assistive technologies for patients with vision impairment.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Artificial Intelligence in Optometry
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Applying AI and machine learning to retinal imaging, disease prediction, and clinical decision support systems to improve diagnostic accuracy and patient outcomes.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Myopia Control Research
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Researching effective myopia management strategies and co-founding the Auckland Myopia Control Clinic to address the growing global myopia epidemic.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Recent Publications
                </h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    For a complete list of my publications, please visit the Publications page.
                  </p>
                  <Link
                    href="/publications"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  >
                    View Full Publication List
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Teaching Tab */}
          {activeTab === 'teaching' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Teaching & Education
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  I am passionate about educating the next generation of optometrists and healthcare professionals. My teaching emphasizes both theoretical knowledge and practical clinical skills, with a focus on technology-enhanced learning.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Teaching Areas
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Undergraduate Optometry
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Teaching core optometry courses covering clinical examination techniques, pathology, and patient management to undergraduate students.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Postgraduate Programs
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Supervising advanced clinical training and research programs for students pursuing specializations in optometry.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Clinical Decision-Making
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developing courses and simulations to enhance students' clinical decision-making and diagnostic reasoning skills.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Virtual Patient Platform
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developing and teaching with the Virtual Patient platform to provide immersive, interactive learning experiences for optometry students.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Student Supervision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I actively supervise Honours and Masters students on research projects. If you're interested in working with me on topics related to technology in optometry, healthcare education, or myopia management, please get in touch!
                </p>
              </div>
            </div>
          )}

          {/* Advisory Tab */}
          {activeTab === 'advisory' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Advisory & Professional Service
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Beyond my academic role, I provide advisory services to professional organizations, regulatory bodies, and healthcare providers to advance optometry practice and education standards.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Advisory Roles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      ODOB Advisor & Researcher
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advising the Optometrists and Dispensing Opticians Board on standards, education requirements, and professional development.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      CAA Vision Standards
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Contributing to Civil Aviation Authority standards for vision requirements and assessments in aviation safety.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Expert Witness Services
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Providing expert opinion on optometry-related matters in legal cases and professional disputes.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Policy Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Helping develop policy and best practice guidelines for optometry education and clinical practice in New Zealand and internationally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interested in Collaborating?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm always interested in discussing how my expertise can help your organization or research initiatives. Let's connect!
                </p>
                <a
                  href="mailto:p.turnbull@auckland.ac.nz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <Mail size={20} />
                  Contact Philip
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;

