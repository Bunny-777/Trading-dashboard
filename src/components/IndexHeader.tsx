import { Zap, BookOpen, Activity, Info } from 'lucide-react';

export default function IndexHeader() {
  return (
    <div>
      <h1 className="text-3xl font-bold flex items-center gap-4 mb-2">
        CoinMarketCap 100 Index
        <div className="flex items-center gap-2 text-sm font-normal">
          <button className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center gap-2 transition-colors">
            <Zap className="w-4 h-4" />
            <span>Factsheet</span>
          </button>
          <button className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center gap-2 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>Methodology</span>
          </button>
          <button className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center gap-2 transition-colors">
            <Activity className="w-4 h-4" />
            <span>API details</span>
          </button>
          <button className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center gap-2 transition-colors">
            <Info className="w-4 h-4" />
            <span>More details</span>
          </button>
        </div>
      </h1>
      <div className="text-sm text-neutral-500">
        Last update <span className="text-neutral-300">Dec 13 2024 - 07:05 PM</span>
      </div>
    </div>
  );
}
