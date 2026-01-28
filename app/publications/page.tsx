'use client';

import { useState } from 'react';
import { publications, Publication } from '../data/publications';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

export default function PublicationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredPublications = selectedType === 'all'
    ? publications
    : publications.filter(pub => pub.type === selectedType);

  const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPublications = filteredPublications.slice(startIndex, endIndex);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-green-100 text-green-800';
      case 'book-chapter':
        return 'bg-purple-100 text-purple-800';
      case 'preprint':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-lg text-gray-600">
            Research publications, articles, and conference papers on biomedical informatics, 
            virtual patients, and healthcare technology.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => handleTypeChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({publications.length})
          </button>
          <button
            onClick={() => handleTypeChange('journal')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedType === 'journal'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Journal Articles ({publications.filter(p => p.type === 'journal').length})
          </button>
          <button
            onClick={() => handleTypeChange('report')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedType === 'report'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Reports ({publications.filter(p => p.type === 'report').length})
          </button>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-8">
          {currentPublications.map((pub) => (
            <article
              key={pub.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(pub.type)}`}>
                      {pub.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.year}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {pub.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Users className="w-4 h-4 mr-2" />
                <span>{pub.authors.join(', ')}</span>
              </div>

              {pub.journal && (
                <div className="flex items-center text-sm text-gray-700 mb-3">
                  <FileText className="w-4 h-4 mr-2" />
                  <span className="italic">
                    {pub.journal}
                    {pub.volume && `, ${pub.volume}`}
                    {pub.pages && `, pp. ${pub.pages}`}
                  </span>
                </div>
              )}

              {pub.conference && (
                <div className="flex items-center text-sm text-gray-700 mb-3">
                  <FileText className="w-4 h-4 mr-2" />
                  <span className="italic">
                    {pub.conference}
                    {pub.pages && `, pp. ${pub.pages}`}
                  </span>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Summary</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pub.summary}
                </p>
              </div>

              {(pub.doi || pub.url) && (
                <div className="flex gap-3">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
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
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
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
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
