import { TrendingUp, TrendingDown, Plus } from 'lucide-react';

export default function Portfolio() {
  const holdings = [
    { name: 'Bitcoin', symbol: 'BTC', amount: 2.5, value: 105375.58, change: 3.45, color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', amount: 15.3, value: 34188.97, change: -1.23, color: 'bg-blue-500' },
    { name: 'Cardano', symbol: 'ADA', amount: 5000, value: 3250.00, change: 5.67, color: 'bg-cyan-500' },
    { name: 'Solana', symbol: 'SOL', amount: 50, value: 4922.50, change: 2.34, color: 'bg-purple-500' },
    { name: 'Polkadot', symbol: 'DOT', amount: 200, value: 1280.00, change: -0.89, color: 'bg-pink-500' },
  ];

  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
          <Plus className="w-5 h-5" />
          Add Asset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Total Portfolio Value</div>
          <div className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">${totalValue.toLocaleString()}</div>
          <div className="text-sm text-lime-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+8.34% ($11,230.45)</span>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">24h Change</div>
          <div className="text-3xl font-bold mb-2 text-lime-500">+$4,523.12</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">+3.12%</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Best Performer</div>
          <div className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Cardano (ADA)</div>
          <div className="text-sm text-lime-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+5.67%</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Holdings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Asset</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Amount</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Value</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">24h Change</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Allocation</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => (
                <tr key={index} className="border-b border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${holding.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {holding.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-white">{holding.name}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{holding.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">{holding.amount.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right font-medium text-neutral-900 dark:text-white">${holding.value.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right">
                    <div className={`flex items-center justify-end gap-1 ${holding.change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
                      {holding.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span>{holding.change > 0 ? '+' : ''}{holding.change}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">
                    {((holding.value / totalValue) * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
