"use client";

import { TrendingUp, TrendingDown, Plus } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const holdings = [
    { name: "Bitcoin", symbol: "BTC", amount: 2.5, value: 105375.58, change: 3.45, color: "bg-orange-500" },
    { name: "Ethereum", symbol: "ETH", amount: 15.3, value: 34188.97, change: -1.23, color: "bg-blue-500" },
    { name: "Cardano", symbol: "ADA", amount: 5000, value: 3250.0, change: 5.67, color: "bg-cyan-500" },
    { name: "Solana", symbol: "SOL", amount: 50, value: 4922.5, change: 2.34, color: "bg-purple-500" },
    { name: "Polkadot", symbol: "DOT", amount: 200, value: 1280.0, change: -0.89, color: "bg-pink-500" },
  ];

  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);

  const growthData = [
    { date: "Oct 1", value: 96000 },
    { date: "Oct 3", value: 98500 },
    { date: "Oct 5", value: 100000 },
    { date: "Oct 7", value: 102500 },
    { date: "Oct 9", value: 104200 },
    { date: "Oct 11", value: 105375 },
  ];

  // --- Animated Counter Hook ---
  function AnimatedNumber({ value, prefix = "", decimals = 2 }: { value: number; prefix?: string; decimals?: number }) {
    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(`${prefix}${latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        },
      });
      return controls.stop;
    }, [value]);

    return <span>{displayValue}</span>;
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-all duration-200 hover:scale-105">
          <Plus className="w-5 h-5" />
          Add Asset
        </button>
      </div>

      {/* Animated Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg hover:shadow-lime-500/10 transition-all"
        >
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Total Portfolio Value</div>
          <div className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">
            $<AnimatedNumber value={totalValue} decimals={2} />
          </div>
          <div className="text-sm text-lime-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+8.34% ($11,230.45)</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg hover:shadow-lime-500/10 transition-all"
        >
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">24h Change</div>
          <div className="text-3xl font-bold mb-2 text-lime-500">
            +$<AnimatedNumber value={4523.12} decimals={2} />
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            +<AnimatedNumber value={3.12} decimals={2} />%
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg hover:shadow-lime-500/10 transition-all"
        >
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Best Performer</div>
          <div className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Cardano (ADA)</div>
          <div className="text-sm text-lime-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <AnimatedNumber value={5.67} />%
          </div>
        </motion.div>
      </div>

      {/* Portfolio Growth Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Portfolio Growth (Last 10 Days)</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#84cc16" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#84cc16" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  borderRadius: "8px",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#84cc16"
                strokeWidth={2.5}
                fill="url(#colorGrowth)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Holdings Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6"
      >
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
                <tr
                  key={index}
                  className="border-b border-neutral-200 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors"
                >
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${holding.color} rounded-full flex items-center justify-center text-white font-bold`}
                      >
                        {holding.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-white">{holding.name}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{holding.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">
                    <AnimatedNumber value={holding.amount} decimals={2} />
                  </td>
                  <td className="py-4 px-2 text-right font-medium text-neutral-900 dark:text-white">
                    $<AnimatedNumber value={holding.value} />
                  </td>
                  <td className="py-4 px-2 text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${
                        holding.change > 0 ? "text-lime-500" : "text-red-500"
                      }`}
                    >
                      {holding.change > 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <AnimatedNumber value={holding.change} />%
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-neutral-900 dark:text-white">
                    <AnimatedNumber value={(holding.value / totalValue) * 100} decimals={2} />%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
