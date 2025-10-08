import { Zap, BookOpen, Activity, Info, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function IndexHeader() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const btnClasses =
    'px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ' +
    'bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800';

  const btnTextColor = 'text-neutral-900 dark:text-white';

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold flex items-center gap-4">
          CoinMarketCap 100 Index
        </h1>

        
      </div>

      <div className="flex items-center gap-2 mb-2">
        <button className={btnClasses}>
          <Zap className="w-4 h-4" />
          <span className={btnTextColor}>Factsheet</span>
        </button>
        <button className={btnClasses}>
          <BookOpen className="w-4 h-4" />
          <span className={btnTextColor}>Methodology</span>
        </button>
        <button className={btnClasses}>
          <Activity className="w-4 h-4" />
          <span className={btnTextColor}>API details</span>
        </button>
        <button className={btnClasses}>
          <Info className="w-4 h-4" />
          <span className={btnTextColor}>More details</span>
        </button>
      </div>

      <div className="text-sm text-neutral-500 dark:text-neutral-400">
        Last update <span className="text-neutral-300 dark:text-neutral-500">Dec 13 2024 - 07:05 PM</span>
      </div>
    </div>
  );
}
