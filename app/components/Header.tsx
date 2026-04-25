'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useDesign } from '@/app/providers/DesignProvider';
import { getHeaderClasses } from '@/app/design/variants';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, isDark } = useTheme();
  const { variant } = useDesign();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the very top, set active to home
      if (window.scrollY < 100) {
        setActiveSection('/');
        return;
      }
      
      const sections = ['research', 'teaching', 'advisory', 'publications', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            current = `/#${section}`;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (pathname !== '/') {
      return pathname === href;
    }
    if (href === '/') return activeSection === '/';
    return activeSection === href;
  };

  const homeLink = { href: '/', label: 'Home' };
  const sectionLinks = [
    { href: '/#research', label: 'Research' },
    { href: '/#teaching', label: 'Teaching' },
    { href: '/#advisory', label: 'Advisory' },
  ];
  const pageNavItems = [
    { href: '/#publications', label: 'Publications' },
    { href: '/#contact', label: 'Contact' },
  ];

  const getNextTheme = () => {
    if (theme === 'light') return 'dark';
    if (theme === 'dark') return 'system';
    return 'light';
  };

  const headerClasses = getHeaderClasses(variant, isDark);

  return (
    <header 
      className={headerClasses.className}
      style={headerClasses.style}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2 sm:gap-4">
          <Link href="/" className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 dark:text-white truncate max-w-[58vw] sm:max-w-[52vw] lg:max-w-none">
            Associate Professor Philip Turnbull
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center shrink-0">
            {/* Home link */}
            <Link
              href={homeLink.href}
              className={`${
                isActive(homeLink.href)
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              } px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md`}
            >
              {homeLink.label}
            </Link>

            {/* Section links */}
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                } px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />

            {/* Publications and Contact links */}
            {pageNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                } px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(getNextTheme())}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ml-2"
              aria-label="Toggle theme"
              title={`Switch to ${getNextTheme()} mode`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu and theme button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(getNextTheme())}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              title={`Switch to ${getNextTheme()} mode`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {/* Home Link */}
              <Link
                href={homeLink.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive(homeLink.href)
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                } px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                {homeLink.label}
              </Link>

              {/* Section Links */}
              {sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(link.href)
                      ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 pl-6`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider and Page Navigation */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                {pageNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      isActive(item.href)
                        ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    } block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
