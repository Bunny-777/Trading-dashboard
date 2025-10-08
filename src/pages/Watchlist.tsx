import { Star, Plus, TrendingUp, TrendingDown } from 'lucide-react';

export default function Watchlist() {
  const watchlist = [
    { name: 'Bitcoin', symbol: 'BTC', price: 42150.23, change: 3.45, high: 43200, low: 40800, color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', price: 2234.56, change: -1.23, high: 2350, low: 2180, color: 'bg-blue-500' },
    { name: 'Cardano', symbol: 'ADA', price: 0.65, change: 5.67, high: 0.68, low: 0.62, color: 'bg-cyan-500' },
    { name: 'Solana', symbol: 'SOL', price: 98.45, change: 2.34, high: 102, low: 95, color: 'bg-purple-500' },
    { name: 'Polkadot', symbol: 'DOT', price: 6.40, change: -0.89, high: 6.75, low: 6.25, color: 'bg-pink-500' },
    { name: 'Avalanche', symbol: 'AVAX', price: 35.67, change: 4.12, high: 37.2, low: 34.1, color: 'bg-red-500' },
    { name: 'Chainlink', symbol: 'LINK', price: 14.23, change: 1.89, high: 14.8, low: 13.9, color: 'bg-blue-600' },
    { name: 'Polygon', symbol: 'MATIC', price: 0.89, change: -2.34, high: 0.93, low: 0.87, color: 'bg-purple-600' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Watchlist</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
          <Plus className="w-5 h-5" />
          Add to Watchlist
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {watchlist.slice(0, 4).map((coin, index) => (
          <div key={index} className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${coin.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {coin.symbol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">{coin.symbol}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{coin.name}</div>
                </div>
              </div>
              <Star className="w-5 h-5 fill-lime-500 text-lime-500" />
            </div>
            <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">${coin.price.toLocaleString()}</div>
            <div className={`text-sm flex items-center gap-1 ${coin.change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
              {coin.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{coin.change > 0 ? '+' : ''}{coin.change}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">All Watched Assets</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Asset</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Price</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">24h Change</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">24h High</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">24h Low</th>
                <th className="text-right text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((coin, index) => (
                <tr key={index} className="border-b border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 fill-lime-500 text-lime-500" />
                      <div className={`w-8 h-8 ${coin.color} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                        {coin.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-white">{coin.name}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-neutral-900 dark:text-white">${coin.price.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right">
                    <div className={`flex items-center justify-end gap-1 ${coin.change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
                      {coin.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span>{coin.change > 0 ? '+' : ''}{coin.change}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">${coin.high.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">${coin.low.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right">
                    <button className="px-3 py-1.5 bg-lime-500 hover:bg-lime-600 text-black rounded text-sm font-medium transition-colors">
                      Trade
                    </button>
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
