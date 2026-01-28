import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:p.turnbull@auckland.ac.nz"
              className="hover:text-blue-400 transition-colors"
            >
              p.turnbull@auckland.ac.nz
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            Last updated: January 28, 2025
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Associate Professor Philip Turnbull
        </div>
      </div>
    </footer>
  );
}
