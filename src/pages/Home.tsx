import { TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to BunnyTrades</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Portfolio Value"
          value="$125,430.50"
          change="+12.5%"
          positive={true}
        />
        <StatCard
          title="Today's Profit"
          value="$3,420.80"
          change="+5.2%"
          positive={true}
        />
        <StatCard
          title="Total Assets"
          value="24"
          change="+2"
          positive={true}
        />
        <StatCard
          title="Watchlist Items"
          value="15"
          change="-1"
          positive={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <div className="space-y-4">
            {[
              { name: 'Bitcoin', symbol: 'BTC', price: 42150.23, change: 3.45, color: 'bg-orange-500' },
              { name: 'Ethereum', symbol: 'ETH', price: 2234.56, change: -1.23, color: 'bg-blue-500' },
              { name: 'Cardano', symbol: 'ADA', price: 0.65, change: 5.67, color: 'bg-cyan-500' },
              { name: 'Solana', symbol: 'SOL', price: 98.45, change: 2.34, color: 'bg-purple-500' },
            ].map((coin, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${coin.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {coin.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-white">{coin.name}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{coin.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-neutral-900 dark:text-white">${coin.price.toLocaleString()}</div>
                  <div className={`text-sm flex items-center gap-1 ${coin.change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
                    {coin.change > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    <span>{Math.abs(coin.change)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Bought', coin: 'Bitcoin', amount: '0.5 BTC', time: '2 hours ago', color: 'text-lime-500' },
              { action: 'Sold', coin: 'Ethereum', amount: '2.3 ETH', time: '5 hours ago', color: 'text-red-500' },
              { action: 'Bought', coin: 'Solana', amount: '15 SOL', time: '1 day ago', color: 'text-lime-500' },
              { action: 'Bought', coin: 'Cardano', amount: '1000 ADA', time: '2 days ago', color: 'text-lime-500' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 last:border-0">
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">
                    <span className={activity.color}>{activity.action}</span> {activity.coin}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{activity.amount}</div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-lime-500 to-emerald-500 rounded-xl p-8 text-black">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Start Trading Today</h2>
            <p className="text-black/80 mb-4">Join millions of users trading cryptocurrency on Cryptic</p>
            <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors">
              Get Started
            </button>
          </div>
          <TrendingUp className="w-32 h-32 text-black/20" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, positive }: { title: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{title}</div>
      <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{value}</div>
      <div className={`text-sm flex items-center gap-1 ${positive ? 'text-lime-500' : 'text-red-500'}`}>
        {positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
        <span>{change}</span>
      </div>
    </div>
  );
}
