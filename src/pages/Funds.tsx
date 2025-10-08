import { DollarSign, ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';

export default function Funds() {
  const transactions = [
    { type: 'deposit', amount: 5000, method: 'Bank Transfer', date: '2024-12-10', status: 'completed' },
    { type: 'withdraw', amount: 1200, method: 'Bank Transfer', date: '2024-12-08', status: 'completed' },
    { type: 'deposit', amount: 2500, method: 'Credit Card', date: '2024-12-05', status: 'completed' },
    { type: 'withdraw', amount: 800, method: 'Bank Transfer', date: '2024-12-03', status: 'completed' },
    { type: 'deposit', amount: 10000, method: 'Bank Transfer', date: '2024-12-01', status: 'completed' },
    { type: 'withdraw', amount: 3000, method: 'Bank Transfer', date: '2024-11-28', status: 'completed' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Funds Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-lime-500" />
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Available Balance</div>
          </div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-white">$24,350.00</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-lime-500" />
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Total Deposits</div>
          </div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-white">$67,500.00</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <ArrowDownLeft className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Total Withdrawals</div>
          </div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-white">$43,150.00</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Deposit Funds</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Payment Method</label>
              <select className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white">
                <option>Bank Transfer</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Crypto Transfer</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
              Deposit Now
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Withdraw Funds</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Withdrawal Method</label>
              <select className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-neutral-900 dark:text-white">
                <option>Bank Transfer</option>
                <option>Crypto Transfer</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white rounded-lg font-semibold transition-colors">
              Withdraw Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Type</th>
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Amount</th>
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Method</th>
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Date</th>
                <th className="text-left text-sm font-medium text-neutral-500 dark:text-neutral-400 pb-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-b border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      {tx.type === 'deposit' ? (
                        <ArrowUpRight className="w-5 h-5 text-lime-500" />
                      ) : (
                        <ArrowDownLeft className="w-5 h-5 text-red-500" />
                      )}
                      <span className="font-medium capitalize text-neutral-900 dark:text-white">{tx.type}</span>
                    </div>
                  </td>
                  <td className={`py-4 px-2 font-medium ${tx.type === 'deposit' ? 'text-lime-500' : 'text-red-500'}`}>
                    {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-2 text-neutral-700 dark:text-neutral-300">
                    <div className="flex items-center gap-2">
                      {tx.method === 'Credit Card' && <CreditCard className="w-4 h-4" />}
                      {tx.method}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-neutral-700 dark:text-neutral-300">{tx.date}</td>
                  <td className="py-4 px-2">
                    <span className="px-3 py-1 bg-lime-500/20 text-lime-500 rounded-full text-xs font-medium capitalize">
                      {tx.status}
                    </span>
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
