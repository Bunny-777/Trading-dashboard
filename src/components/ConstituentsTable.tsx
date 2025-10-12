import { useState, useEffect } from 'react';
import { Upload, RotateCw, MoreHorizontal, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const constituents = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 394559.21, trend: -0.96, marketCap: 71812.05, weight: 26.01, color: 'bg-orange-500' },
  { rank: 2, name: 'Auto Token', symbol: 'AUTO', price: 437981.19, trend: -1.47, marketCap: 125543.9, weight: 30.36, color: 'bg-yellow-500' },
  { rank: 3, name: 'Infracoin', symbol: 'INB', price: 71812.05, trend: -0.95, marketCap: 60193.14, weight: 9.64, color: 'bg-neutral-400' },
];

export default function ConstituentsTable() {
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

  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-colors shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          CoinMarketCap 100 Index Constituents
        </h3>
        <div className="flex items-center gap-2">
          {[Upload, RotateCw, MoreHorizontal].map((Icon, i) => (
            <button key={i} className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
              <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800">
              <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">#</th>
              <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Coin</th>
              <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Price</th>
              <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Trend</th>
              <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Market Cap</th>
              <th className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Weight</th>
            </tr>
          </thead>
          <tbody>
            {constituents.map((coin, index) => (
              <motion.tr
                key={index}
                className="border-b border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-900/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 px-2 text-sm text-neutral-600 dark:text-neutral-400">{coin.rank}</td>
                <td className="py-4 px-2 flex items-center gap-3">
                  <div className={`w-8 h-8 ${coin.color} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                    {coin.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-white">{coin.name}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{coin.symbol}</div>
                  </div>
                </td>
                <td className="py-4 px-2 text-right text-sm text-neutral-900 dark:text-neutral-300">${coin.price.toLocaleString()}</td>
                <td className="py-4 px-2 text-right flex items-center justify-end gap-1 text-red-500 text-sm">
                  <TrendingDown className="w-3 h-3" />
                  <span>{coin.trend}%</span>
                </td>
                <td className="py-4 px-2 text-right text-sm text-neutral-900 dark:text-neutral-300">${coin.marketCap.toLocaleString()}</td>
                <td className="py-4 px-2">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex-1 max-w-24 bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-lime-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(coin.weight, 100)}%` }}
                        transition={{ duration: 1 + index * 0.2 }}
                      ></motion.div>
                    </div>
                    <span className="text-sm text-neutral-800 dark:text-neutral-300 min-w-12 text-right">{coin.weight}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
