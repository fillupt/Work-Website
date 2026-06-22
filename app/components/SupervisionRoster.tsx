'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Award, Search, Users, Mail } from 'lucide-react';

const students = [
  { name: 'Jasmine Zoest', topic: 'Measurement of eye movements in three-dimensional space', category: 'Current PhD' },
  { name: 'Balaje Vivekanandan', topic: "Oculomotor Function, Attentional Function, Trans-Saccadic Processing and Visual Perception in Mild Cognitive Impairment and Alzheimer's Disease", category: 'Current PhD' },
  { name: 'Tony Han', topic: 'Home-Based Monitoring of Visual Function in Age-Related Macular Degeneration', category: 'Current PhD' },
  { name: 'Jordan Cooper', topic: 'Exploring the influence of eyelid and blink characteristics on dry eye development', category: 'Current PhD' },
  { name: 'Dr Samuel Chiang', topic: 'The effect of optical defocus on choroidal thickness', category: 'PhD Alumni' },
  { name: 'Dr Soheil Doustkouhi', topic: 'Development of objective techniques of the optometric examination', category: 'PhD Alumni' },
  { name: 'Dr Alice Cade', topic: 'Eye movements and postural stability following traumatic brain injury', category: 'PhD Alumni' },
  { name: 'Dr Aryaman Taore', topic: 'Developing Eye Tracking Technology using a mobile device for the use of optokinetic assessment', category: 'PhD Alumni' },
  { name: 'Dr Maggie Xu', topic: 'The Effect of Blue Light on Myopia Progression in Young Smartphone Users', category: 'PhD Alumni' },
  { name: 'Bhavna Patel', topic: 'Dry eye in younger populations', category: 'Masters Alumni' },
  { name: 'Richard Johnson', topic: 'Maritime visual standards', category: 'Masters Alumni' },
  { name: 'Sabrina Ju', topic: 'Treatments for AMD', category: 'Masters Alumni' },
];

const categories = ['Current PhD', 'Current Masters', 'PhD Alumni', 'Masters Alumni'];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Current PhD':
      return {
        bg: 'bg-blue-50/50 dark:bg-blue-900/10',
        border: 'border-blue-100/50 dark:border-blue-800/30',
        borderHover: 'hover:border-blue-300 dark:hover:border-blue-700',
        shadowHover: 'hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10',
        iconBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
        iconHoverBg: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60',
        textHover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
        tabActive: 'bg-blue-600 text-white shadow-blue-500/30 dark:shadow-blue-900/30',
        glow: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:to-cyan-400/10'
      };
    case 'Current Masters':
      return {
        bg: 'bg-emerald-50/50 dark:bg-emerald-900/10',
        border: 'border-emerald-100/50 dark:border-emerald-800/30',
        borderHover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
        shadowHover: 'hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10',
        iconBg: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400',
        iconHoverBg: 'group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/60',
        textHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
        tabActive: 'bg-emerald-600 text-white shadow-emerald-500/30 dark:shadow-emerald-900/30',
        glow: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-400/10 dark:to-teal-400/10'
      };
    case 'PhD Alumni':
      return {
        bg: 'bg-purple-50/50 dark:bg-purple-900/10',
        border: 'border-purple-100/50 dark:border-purple-800/30',
        borderHover: 'hover:border-purple-300 dark:hover:border-purple-700',
        shadowHover: 'hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10',
        iconBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
        iconHoverBg: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60',
        textHover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
        tabActive: 'bg-purple-600 text-white shadow-purple-500/30 dark:shadow-purple-900/30',
        glow: 'from-purple-500/10 to-fuchsia-500/10 dark:from-purple-400/10 dark:to-fuchsia-400/10'
      };
    case 'Masters Alumni':
      return {
        bg: 'bg-amber-50/50 dark:bg-amber-900/10',
        border: 'border-amber-100/50 dark:border-amber-800/30',
        borderHover: 'hover:border-amber-300 dark:hover:border-amber-700',
        shadowHover: 'hover:shadow-amber-500/10 dark:hover:shadow-amber-400/10',
        iconBg: 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400',
        iconHoverBg: 'group-hover:bg-amber-200 dark:group-hover:bg-amber-900/60',
        textHover: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
        tabActive: 'bg-amber-600 text-white shadow-amber-500/30 dark:shadow-amber-900/30',
        glow: 'from-amber-500/10 to-orange-500/10 dark:from-amber-400/10 dark:to-orange-400/10'
      };
    default:
      return {
        bg: 'bg-gray-50/50 dark:bg-gray-800/10',
        border: 'border-gray-200/50 dark:border-gray-700/30',
        borderHover: 'hover:border-gray-300 dark:hover:border-gray-600',
        shadowHover: 'hover:shadow-gray-500/10 dark:hover:shadow-gray-400/10',
        iconBg: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
        iconHoverBg: 'group-hover:bg-gray-200 dark:group-hover:bg-gray-700',
        textHover: 'group-hover:text-gray-900 dark:group-hover:text-white',
        tabActive: 'bg-gray-800 dark:bg-gray-700 text-white shadow-gray-500/30 dark:shadow-gray-900/30',
        glow: 'from-gray-500/10 to-slate-500/10 dark:from-gray-400/10 dark:to-slate-400/10'
      };
  }
};

export default function SupervisionRoster() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(s => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Controls: Tabs & Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
          <button
            onClick={() => setActiveCategory('All')}
            className={`
              px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
              ${activeCategory === 'All'
                ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 shadow-md transform -translate-y-0.5'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'}
            `}
          >
            All
          </button>
          {categories.map((category) => {
            const styles = getCategoryStyles(category);
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                  ${isActive
                    ? `${styles.tabActive} shadow-md transform -translate-y-0.5`
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'}
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-auto group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search students or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-72 pl-10 pr-4 py-2.5 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
          />
        </div>
      </div>

      {/* Grid of Students */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStudents.map((student, idx) => {
            const styles = getCategoryStyles(student.category);
            return (
              <div
                key={`${student.name}-${idx}`}
                className={`
                  group relative overflow-hidden p-5 rounded-2xl transition-all duration-500 
                  ${styles.bg} border ${styles.border} ${styles.borderHover} 
                  hover:-translate-y-1 hover:shadow-xl ${styles.shadowHover}
                `}
              >
                {/* Background Decoration */}
                <div className={`absolute -right-4 -top-4 w-28 h-28 bg-gradient-to-br ${styles.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`mt-0.5 flex-shrink-0 p-2.5 rounded-xl ${styles.iconBg} ${styles.iconHoverBg} group-hover:scale-110 transition-all duration-300`}>
                    {student.category.includes('Alumni') ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <GraduationCap className="w-5 h-5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className={`text-lg font-bold text-gray-900 dark:text-white ${styles.textHover} transition-colors truncate`}>
                        {student.name}
                      </h4>
                      {activeCategory === 'All' && (
                        <span className={`flex-shrink-0 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${styles.iconBg}`}>
                          {student.category}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {student.topic}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/50 dark:bg-gray-800/30 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 shadow-inner">
          <div className="w-16 h-16 bg-white dark:bg-gray-800 shadow-sm rounded-2xl flex items-center justify-center mb-5 text-gray-400 border border-gray-100 dark:border-gray-700">
            <Users className="w-8 h-8" />
          </div>
          {searchQuery ? (
            <>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No students found</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
                No students matching "{searchQuery}" in this category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Clear Search
              </button>
            </>
          ) : (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">No current students</h3>
          )}
        </div>
      )}

      {/* Global Recruitment CTA */}
      <div className="pt-2">
        <Link
          href="#contact"
          className="group flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <div className="flex items-center gap-4 text-center sm:text-left mb-4 sm:mb-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mx-auto sm:mx-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-0.5">
                Interested in joining the team?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact me to discuss potential research opportunities.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm group-hover:shadow-md">
            Get in touch
          </span>
        </Link>
      </div>
    </div>
  );
}
