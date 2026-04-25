'use client';

import PublicationsList from '../components/PublicationsList';

export default function PublicationsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PublicationsList showTitle={true} />
      </div>
    </main>
  );
}
