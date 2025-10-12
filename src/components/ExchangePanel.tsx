import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ExchangePanel() {
  const total = 3450;
  const segments = [
    { value: 950, color: 'rgb(239, 68, 68)', label: 'Segment 1' },
    { value: 1200, color: 'rgb(132, 204, 22)', label: 'Segment 2' },
    { value: 400, color: 'rgb(168, 85, 247)', label: 'Segment 3' },
    { value: 500, color: 'rgb(229, 231, 235)', label: 'Segment 4' },
    { value: 400, color: 'rgb(23, 23, 23)', label: 'Segment 5' },
  ];

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
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 h-full shadow-md transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Exchange</h3>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 200 200" className="transform -rotate-90">
            {segments.reduce((acc, segment, index) => {
              const previousTotal = segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
              const startAngle = (previousTotal / total) * 360;
              const endAngle = ((previousTotal + segment.value) / total) * 360;

              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;

              const innerRadius = 50;
              const outerRadius = 90;

              const x1 = 100 + innerRadius * Math.cos(startRad);
              const y1 = 100 + innerRadius * Math.sin(startRad);
              const x2 = 100 + outerRadius * Math.cos(startRad);
              const y2 = 100 + outerRadius * Math.sin(startRad);
              const x3 = 100 + outerRadius * Math.cos(endRad);
              const y3 = 100 + outerRadius * Math.sin(endRad);
              const x4 = 100 + innerRadius * Math.cos(endRad);
              const y4 = 100 + innerRadius * Math.sin(endRad);

              const largeArc = endAngle - startAngle > 180 ? 1 : 0;

              const path = `
                M ${x1} ${y1}
                L ${x2} ${y2}
                A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}
                L ${x4} ${y4}
                A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
              `;

              acc.push(
                <motion.path
                  key={index}
                  d={path}
                  fill={segment.color}
                  stroke={darkMode ? '#171717' : '#e5e7eb'}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 + index * 0.3 }}
                />
              );

              return acc;
            }, [] as JSX.Element[])}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">{total.toLocaleString()}</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 text-xs text-neutral-500 dark:text-neutral-400 text-center">
        Animated Donut Exchange Overview
      </div>
    </div>
  );
}
