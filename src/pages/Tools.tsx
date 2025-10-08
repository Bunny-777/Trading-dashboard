import { Calculator, PieChart, TrendingUp, Bell, Shield, Wallet } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: Calculator,
      title: 'Profit Calculator',
      description: 'Calculate potential profits and losses for your trades',
      color: 'bg-lime-500',
    },
    {
      icon: PieChart,
      title: 'Portfolio Analyzer',
      description: 'Analyze your portfolio allocation and performance',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Technical Analysis',
      description: 'Advanced charting and technical indicators',
      color: 'bg-purple-500',
    },
    {
      icon: Bell,
      title: 'Price Alerts',
      description: 'Set custom price alerts for your favorite coins',
      color: 'bg-orange-500',
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Evaluate and manage your investment risks',
      color: 'bg-red-500',
    },
    {
      icon: Wallet,
      title: 'Wallet Tracker',
      description: 'Track multiple wallets across different blockchains',
      color: 'bg-teal-500',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Trading Tools</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8">
        Powerful tools to enhance your trading experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-lime-500 dark:hover:border-lime-500 transition-colors cursor-pointer group"
          >
            <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <tool.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{tool.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{tool.description}</p>
            <button className="text-lime-500 hover:text-lime-600 font-medium text-sm flex items-center gap-2 transition-colors">
              Launch Tool
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Profit Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Entry Price</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Exit Price</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Investment Amount</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <button className="w-full px-6 py-3 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
              Calculate Profit
            </button>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Potential Profit:</span>
                <span className="text-lg font-bold text-lime-500">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">ROI:</span>
                <span className="text-lg font-bold text-lime-500">0.00%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Price Alerts</h2>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Cryptocurrency</label>
              <select className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>Cardano (ADA)</option>
                <option>Solana (SOL)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Alert Type</label>
              <select className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white">
                <option>Price Above</option>
                <option>Price Below</option>
                <option>Percentage Change</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Target Value</label>
              <input
                type="number"
                placeholder="Enter target value"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <button className="w-full px-6 py-3 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
              Create Alert
            </button>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <h3 className="font-semibold mb-3 text-neutral-900 dark:text-white">Active Alerts</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                <div>
                  <div className="font-medium text-sm text-neutral-900 dark:text-white">BTC above $45,000</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Current: $42,150</div>
                </div>
                <button className="text-xs text-red-500 hover:text-red-600">Remove</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                <div>
                  <div className="font-medium text-sm text-neutral-900 dark:text-white">ETH below $2,000</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Current: $2,234</div>
                </div>
                <button className="text-xs text-red-500 hover:text-red-600">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
