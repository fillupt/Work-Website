'use client';

import { useState, useMemo } from 'react';
import { publications } from '../data/publications';
import { ExternalLink, FileText, Calendar, Users, X } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

const TOPIC_RULES: Array<{ topic: string; patterns: RegExp[] }> = [
  {
    topic: 'Myopia & Refractive Error',
    patterns: [/myopia/i, /refractive/i, /defocus/i, /astigmat/i, /emmetrop/i]
  },
  {
    topic: 'Ocular Surface & Dry Eye',
    patterns: [/dry eye/i, /tear film/i, /meibomian/i, /ocular surface/i, /lipid layer/i]
  },
  {
    topic: 'Eye Movements & Oculomotor',
    patterns: [/eye movement/i, /oculomotor/i, /saccade/i, /optokinetic/i, /nystagmus/i, /vergence/i]
  },
  {
    topic: 'Retina & Electrophysiology',
    patterns: [/retina/i, /retinal/i, /mfERG/i, /electrophysiolog/i, /ERG/i]
  },
  {
    topic: 'Imaging & MRI',
    patterns: [/MRI/i, /magnetic/i, /arterial spin/i, /perfusion/i]
  },
  {
    topic: 'Brain Injury & Neurology',
    patterns: [/brain injury/i, /mTBI/i, /traumatic/i, /neurolog/i, /diplopia/i]
  },
  {
    topic: 'Vision Technology & VR',
    patterns: [/virtual reality/i, /VR/i, /eye tracker/i, /computer vision/i, /technology/i]
  },
  {
    topic: 'Public Health & Equity',
    patterns: [/equity/i, /public health/i, /global health/i, /survey/i, /access/i, /health disparities/i]
  },
  {
    topic: 'Optometry Practice & Workforce',
    patterns: [/optometry/i, /workforce/i, /dispensing/i, /guidelines/i, /clinical/i, /prescribing/i]
  },
  {
    topic: 'Contact Lenses & Myopia Control',
    patterns: [/contact lens/i, /contact lenses/i, /myopia control/i, /orthokerat/i]
  }
];

const mapKeywordToTopic = (keyword: string) => {
  const matched = TOPIC_RULES.find(rule => rule.patterns.some(pattern => pattern.test(keyword)));
  return matched?.topic ?? null;
};

export default function PublicationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());

  const topicsById = useMemo(() => {
    const record: Record<string, string[]> = {};
    publications.forEach(pub => {
      const topicSet = new Set<string>();
      pub.keywords?.forEach(keyword => {
        const topic = mapKeywordToTopic(keyword);
        if (topic) topicSet.add(topic);
      });
      if (topicSet.size === 0 && pub.keywords?.length) {
        topicSet.add('Other');
      }
      record[pub.id] = Array.from(topicSet).sort();
    });
    return record;
  }, []);

  const allTopics = useMemo(() => {
    const topicSet = new Set<string>();
    Object.values(topicsById).forEach(topics => {
      topics.forEach(topic => topicSet.add(topic));
    });
    return Array.from(topicSet).sort();
  }, [topicsById]);

  const filteredPublications = useMemo(() => {
    if (selectedTopics.size === 0) return publications;

    return publications.filter(pub => {
      const topics = topicsById[pub.id] ?? [];
      return topics.some(topic => selectedTopics.has(topic));
    });
  }, [selectedTopics, topicsById]);

  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPublications = filteredPublications.slice(startIndex, endIndex);

  const handleTopicToggle = (topic: string) => {
    const newSelected = new Set(selectedTopics);
    if (newSelected.has(topic)) {
      newSelected.delete(topic);
    } else {
      newSelected.add(topic);
    }
    setSelectedTopics(newSelected);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedTopics(new Set());
    setCurrentPage(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'report':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Publications</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore my research publications across vision science, optometry, and related fields.
          </p>
        </div>

        {/* Topic Filters */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by Topics</h2>
            {selectedTopics.size > 0 && (
              <button
                onClick={handleClearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Active Filters Display */}
          {selectedTopics.size > 0 && (
            <div className="mb-6 flex flex-wrap gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              {Array.from(selectedTopics).sort().map(topic => (
                <button
                  key={topic}
                  onClick={() => handleTopicToggle(topic)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors"
                >
                  {topic}
                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}

          {/* Topic Tag Cloud */}
          <div className="flex flex-wrap gap-2">
            {allTopics.map(topic => (
              <button
                key={topic}
                onClick={() => handleTopicToggle(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTopics.has(topic)
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{currentPublications.length}</span> of <span className="font-semibold text-gray-900 dark:text-white">{filteredPublications.length}</span> publications
          {selectedTopics.size > 0 && ` (${filteredPublications.length} match${filteredPublications.length !== 1 ? 'es' : ''} selected filter${selectedTopics.size !== 1 ? 's' : ''})`}
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No publications match the selected keywords.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {currentPublications.map((pub) => (
                <article
                  key={pub.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(pub.type)}`}>
                          {pub.type.replace('-', ' ').toUpperCase()}
                        </span>
                        <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {pub.year}
                        </span>
                      </div>
                      {(pub.doi || pub.url) ? (
                        <a
                          href={pub.doi ? `https://doi.org/${pub.doi}` : pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-2 block transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {pub.title}
                        </h2>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{pub.authors.join(', ')}</span>
                  </div>

                  {pub.journal && (
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="italic">
                        {pub.journal}
                        {pub.volume && `, ${pub.volume}`}
                        {pub.pages && `, pp. ${pub.pages}`}
                      </span>
                    </div>
                  )}

                  {pub.conference && (
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="italic">
                        {pub.conference}
                        {pub.pages && `, pp. ${pub.pages}`}
                      </span>
                    </div>
                  )}

                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Summary</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {pub.summary}
                    </p>
                  </div>

                  {/* Topics Display */}
                  {topicsById[pub.id]?.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {topicsById[pub.id].map(topic => (
                          <button
                            key={topic}
                            onClick={() => handleTopicToggle(topic)}
                            className={`text-xs px-2 py-1 rounded-full transition-all ${
                              selectedTopics.has(topic)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                          >
                            #{topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {(pub.doi || pub.url) && (
                    <div className="flex gap-3">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          DOI
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          Full Text
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 dark:bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
