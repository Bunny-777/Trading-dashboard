import { Clock } from 'lucide-react';
import { useState } from 'react';

export default function ChartPanel() {
  const [activeTab, setActiveTab] = useState('CMC 100');

  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">CoinMarketCap 100 Index Chart</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('CMC 100')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === 'CMC 100'
                ? 'bg-lime-500 text-black font-medium'
                : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            CMC 100
          </button>
          <button
            onClick={() => setActiveTab('Constituent weights')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === 'Constituent weights'
                ? 'bg-lime-500 text-black font-medium'
                : 'bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Constituent weights
          </button>
          <button className="p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors">
            <Clock className="w-4 h-4 text-neutral-400" />
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-neutral-200/50 dark:bg-neutral-900/50 rounded-lg overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 600 250" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          <path
            d="M0,180 Q100,160 150,140 T300,120 Q400,100 450,90 T600,70"
            fill="none"
            stroke="url(#line1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />

          <path
            d="M0,150 Q100,130 150,160 T300,140 Q400,130 450,150 T600,120"
            fill="none"
            stroke="url(#line2)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />

          <path
            d="M0,120 Q100,140 150,100 T300,110 Q400,90 450,120 T600,100"
            fill="none"
            stroke="url(#line3)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />

          {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map((x, i) => {
            const heights = [130, 90, 140, 70, 160, 120, 100, 150, 80, 110, 60];
            const colors = ['#ef4444', '#84cc16', '#ef4444', '#84cc16', '#ef4444', '#84cc16', '#84cc16', '#ef4444', '#84cc16', '#84cc16', '#84cc16'];
            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={heights[i]}
                  x2={x}
                  y2={200}
                  stroke={colors[i]}
                  strokeWidth="8"
                  opacity="0.6"
                />
                <line
                  x1={x}
                  y1={heights[i] - 30}
                  x2={x}
                  y2={heights[i]}
                  stroke={colors[i] === '#ef4444' ? '#84cc16' : '#ef4444'}
                  strokeWidth="8"
                  opacity="0.6"
                />
                <circle
                  cx={x}
                  cy={heights[i] - 15}
                  r="2"
                  fill="white"
                  opacity="0.8"
                />
              </g>
            );
          })}
        </svg>

        <div className="absolute left-2 top-2 text-xs text-neutral-500">2,350</div>
        <div className="absolute left-2 top-1/3 text-xs text-neutral-500">2,300</div>
        <div className="absolute left-2 top-2/3 text-xs text-neutral-500">2,250</div>
        <div className="absolute left-2 bottom-2 text-xs text-neutral-500">2,200</div>
      </div>
    </div>
  );
}
