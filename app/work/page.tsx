'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';

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

      {/* About Me Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Philip Turnbull"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Associate Professor Philip Turnbull
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                  University of Auckland
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I am an Associate Professor in the Department of Computer Science at the University of Auckland. My research interests include software engineering, program analysis, and empirical software engineering. I am particularly interested in how developers use tools and how tools can better support developers.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I teach courses in software engineering, programming, and computer science fundamentals. I am passionate about creating engaging learning experiences and mentoring the next generation of computer scientists.
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
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                      Software Engineering
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      My research in software engineering focuses on understanding how developers work and how tools can better support their practices. I investigate program analysis techniques, software testing strategies, and developer productivity.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Empirical Software Engineering
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I conduct empirical studies with real developers to understand software development practices. These studies inform the design of better tools and processes that practitioners actually need.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Program Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I develop and evaluate program analysis techniques that help developers understand code behavior, detect bugs, and optimize performance. My work bridges the gap between analysis theory and practical developer needs.
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
                    For a complete list of my publications, please visit my profile on the University website or contact me directly.
                  </p>
                  <a
                    href="https://www.auckland.ac.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                  >
                    View Full Publication List
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Teaching Tab */}
          {activeTab === 'teaching' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Teaching
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  I am passionate about teaching and mentoring students in computer science. My courses emphasize both theoretical foundations and practical skills.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Current Courses
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Software Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced course covering software design, testing, and project management practices used in professional software development.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Programming Fundamentals
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Introduction to computer programming for first-year students, focusing on problem-solving and coding practices.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Data Structures and Algorithms
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Core course on fundamental data structures and algorithmic thinking essential for computer science.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Student Supervision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I actively supervise Honours and Masters students on research projects related to software engineering and program analysis. If you're interested in working with me, please get in touch!
                </p>
              </div>
            </div>
          )}

          {/* Advisory Tab */}
          {activeTab === 'advisory' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Consulting & Advisory
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Beyond my academic work, I provide consulting and advisory services to help organizations improve their software development practices and processes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Process Improvement
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Help teams optimize their software development processes, from requirements through deployment and maintenance.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tool Evaluation & Selection
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Evaluate and recommend software tools that fit your team's specific needs and workflow.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Team Training & Workshops
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Conduct training sessions and workshops on software engineering best practices for your development team.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Research Collaboration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Collaborate on research projects that combine academic rigor with practical industry insights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm always interested in discussing how my expertise can help your organization or research initiatives. Let's connect!
                </p>
                <a
                  href="mailto:p.turnbull@auckland.ac.nz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <Mail size={20} />
                  Contact Phil
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
