import { Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProfileDropdown from './ProfileDropdown';
import NotificationsPanel from './NotificationsPanel';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      setAlertMessage(`No results for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <div className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <ProfileDropdown />
        </div>

        <div className="flex items-center gap-4 relative">
          <button className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg text-sm flex items-center gap-2 transition-all shadow hover:shadow-lg">
            <span>Deposit</span> <span>📦</span>
          </button>

          <NotificationsPanel />

          {/* Search box */}
          <div
            ref={searchRef}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all border relative ${
              searchFocused
                ? 'border-lime-500 bg-neutral-100 dark:bg-neutral-900'
                : 'border-transparent bg-neutral-100 dark:bg-neutral-900'
            }`}
          >
            <Search className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent border-none outline-none text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 w-40 focus:w-56 transition-all duration-300"
            />

            {/* ✅ Custom colorful alert below search bar */}
            <AnimatePresence>
              {alertMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-24 bg-gradient-to-r from-lime-400 to-green-500 text-black font-medium px-5 py-2 rounded-xl shadow-lg border border-lime-600 dark:from-lime-500 dark:to-green-600 dark:text-black"
                >
                  {alertMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
