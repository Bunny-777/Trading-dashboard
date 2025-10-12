// src/pages/Home.tsx
import { ArrowDown, ArrowUp, TrendingUp, RefreshCw, ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

// === Animated Number Component (Lottery Spin) ===
function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = Math.abs(value - start) / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setDisplayValue(Number(start.toFixed(2)));
    }, 16);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      key={value}
      initial={{ rotateX: 90 }}
      animate={{ rotateX: 0 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      ${displayValue.toLocaleString()}
    </motion.span>
  );
}

// === Mini Live Chart ===
function LiveChart({ color }: { color: string }) {
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, i) => ({ value: 100 + Math.sin(i) * 5 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(1),
        { value: 100 + Math.random() * 10 - 5 },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width={80} height={30}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function Home() {
  const [market, setMarket] = useState([
    { name: "Bitcoin", symbol: "BTC", price: 42150.23, change: 3.45, color: "#f7931a" },
    { name: "Ethereum", symbol: "ETH", price: 2234.56, change: -1.23, color: "#627eea" },
    { name: "Cardano", symbol: "ADA", price: 0.65, change: 5.67, color: "#00bfff" },
    { name: "Solana", symbol: "SOL", price: 98.45, change: 2.34, color: "#9945ff" },
  ]);

  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setMarket((prev) =>
        prev.map((m) => ({
          ...m,
          price: Number((m.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2)),
          change: Number((Math.random() * 6 - 3).toFixed(2)),
        }))
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to BunnyTrades 🐇</h1>

      {/* === Stats Section with Lottery Spin === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Portfolio Value" value={125430.5} change="+12.5%" positive />
        <StatCard title="Today's Profit" value={3420.8} change="+5.2%" positive />
        <StatCard title="Total Assets" value={24} change="+2" positive />
        <StatCard title="Watchlist Items" value={15} change="-1" positive={false} />
      </div>

      {/* === Market Overview & Recent Activity === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Market Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Market Overview</h2>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-lime-500 transition"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
          </div>

          <div className="space-y-4">
            {market.map((coin, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: coin.color }}
                  >
                    {coin.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-white">
                      {coin.name}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      {coin.symbol}
                    </div>
                  </div>
                </div>

                {/* Animated Change + Mini Chart */}
                <div className="flex items-center gap-4">
                  <LiveChart color={coin.change > 0 ? "#22c55e" : "#ef4444"} />
                  <div className="text-right">
                    <AnimatedNumber value={coin.price} />
                    <motion.div
                      animate={{
                        y: [0, coin.change > 0 ? -4 : 4, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className={`text-sm flex items-center gap-1 justify-end ${
                        coin.change > 0 ? "text-lime-500" : "text-red-500"
                      }`}
                    >
                      {coin.change > 0 ? (
                        <ArrowUp className="w-3 h-3" />
                      ) : (
                        <ArrowDown className="w-3 h-3" />
                      )}
                      <span>{Math.abs(coin.change)}%</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Bought", coin: "Bitcoin", amount: "0.5 BTC", time: "2 hours ago", color: "text-lime-500" },
              { action: "Sold", coin: "Ethereum", amount: "2.3 ETH", time: "5 hours ago", color: "text-red-500" },
              { action: "Bought", coin: "Solana", amount: "15 SOL", time: "1 day ago", color: "text-lime-500" },
              { action: "Bought", coin: "Cardano", amount: "1000 ADA", time: "2 days ago", color: "text-lime-500" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 last:border-0"
              >
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">
                    <span className={activity.color}>{activity.action}</span> {activity.coin}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {activity.amount}
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* === CTA Section === */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-r from-lime-500 to-emerald-500 rounded-xl p-8 text-black shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Start Trading Today</h2>
            <p className="text-black/80 mb-4">Join millions of users trading crypto on BunnyTrades</p>
            <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors flex items-center gap-2">
              Get Started <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <TrendingUp className="w-32 h-32 text-black/20" />
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: number;
  change: string;
  positive: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 5px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
    >
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{title}</div>
      <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
        <AnimatedNumber value={value} />
      </div>
      <motion.div
        animate={{
          y: [0, positive ? -4 : 4, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className={`text-sm flex items-center gap-1 ${positive ? "text-lime-500" : "text-red-500"}`}
      >
        {positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
        <span>{change}</span>
      </motion.div>
    </motion.div>
  );
}
