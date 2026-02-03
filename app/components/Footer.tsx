'use client';

import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Get the current date in ISO format (YYYY-MM-DD)
    const now = new Date();
    const isoDate = now.toISOString().split('T')[0];
    setLastUpdated(isoDate);
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:p.turnbull@auckland.ac.nz"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              p.turnbull@auckland.ac.nz
            </a>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>
    </footer>
  );
}
