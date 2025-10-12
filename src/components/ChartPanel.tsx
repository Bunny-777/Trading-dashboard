import { Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChartPanel() {
  const [activeTab, setActiveTab] = useState('CMC 100');

  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">CoinMarketCap 100 Index Chart</h3>
        <div className="flex items-center gap-2">
          {['CMC 100', 'Constituent weights'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                activeTab === tab
                  ? 'bg-lime-500 text-black font-medium shadow-md'
                  : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors">
            <Clock className="w-4 h-4 text-neutral-400" />
          </button>
        </div>
      </div>

      <motion.div
        className="relative h-64 bg-neutral-200/50 dark:bg-neutral-900/50 rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 600 250" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,180 Q100,160 150,140 T300,120 Q400,100 450,90 T600,70"
            fill="none"
            stroke="url(#line1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
