import { TrendingUp, ArrowUp } from 'lucide-react';

export default function StatsPanel() {
  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
      <div className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">CMC 100</div>
      <div className="flex items-end gap-3 mb-6">
        <div className="text-5xl font-bold text-neutral-900 dark:text-white">$262.84</div>
        <div className="flex items-center gap-1 text-lime-500 mb-2">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm">+40%</span>
        </div>
      </div>

      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">24-Hour Profit Snapshot</div>

      <div className="mb-6">
        <div className="text-sm font-semibold mb-3 text-neutral-900 dark:text-white">Yearly Performance</div>
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-lg p-3">
            <div className="text-xs text-lime-950 mb-1">High - 5 Dec 2024</div>
            <div className="text-lg font-bold text-lime-950">$229.68</div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3">
            <div className="text-xs text-red-950 mb-1">Low - 23 Jan 2024</div>
            <div className="text-lg font-bold text-red-950">$103.41</div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4">
        <div className="text-sm font-semibold mb-3 text-neutral-900 dark:text-white">Historical Values</div>
        <div className="space-y-3">
          <ValueRow label="Yesterday" value="$225.02" change="+40.03%" positive />
          <ValueRow label="Last week" value="$187.96" change="+10.78%" positive />
          <ValueRow label="Last month" value="$202.87" change="+13.87%" positive />
        </div>
      </div>
    </div>
  );
}

function ValueRow({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="flex items-center gap-3">
        <div className="text-neutral-900 dark:text-white font-medium">{value}</div>
        <div className={`flex items-center gap-1 ${positive ? 'text-lime-500' : 'text-red-500'}`}>
          <ArrowUp className={`w-3 h-3 ${!positive && 'rotate-180'}`} />
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}
