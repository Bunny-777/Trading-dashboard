import { Home, PieChart, Eye, TrendingUp, DollarSign, BookOpen, Settings as SettingsIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [showModal, setShowModal] = useState(true);
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 flex flex-col transition-all">
      <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
          <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center shadow-lg">
            <TrendingUp className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-bold text-neutral-900 dark:text-white">BunnyTrades</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <NavItem icon={Home} label="Home" to="/" active={location.pathname === '/'} />
        <NavItem icon={PieChart} label="Portfolio" to="/portfolio" active={location.pathname === '/portfolio'} />
        <NavItem icon={Eye} label="Watchlist" to="/watchlist" active={location.pathname === '/watchlist'} />

        <div className="pt-4">
          <NavItem icon={TrendingUp} label="Market" to="/market" active={location.pathname === '/market'} />
          {location.pathname === '/market' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-8 mt-2 space-y-1">
              <SubNavItem label="CMC 100 Index" active />
              <SubNavItem label="Fear and Greed Index" />
              <SubNavItem label="Altcoin Season Index" />
              <SubNavItem label="Bitcoin Dominance" />
            </motion.div>
          )}
        </div>

        <NavItem icon={DollarSign} label="Funds" to="/funds" active={location.pathname === '/funds'} />
        <NavItem icon={BookOpen} label="Research" to="/research" active={location.pathname === '/research'} />
        <NavItem icon={SettingsIcon} label="Tools" to="/tools" active={location.pathname === '/tools'} />
      </nav>

      {showModal && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 relative transition-all"
        >
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-sm font-semibold mb-2 text-neutral-900 dark:text-white">Crypto Masterclass</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-3">
            Check out our new expert guided program to manage your assets
          </div>

          <div className="w-full h-32 bg-gradient-to-br from-lime-500/20 to-emerald-500/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden animate-pulse">
            <div className="text-6xl">🧑‍💼</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowModal(false)}
              className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Dismiss
            </button>
            <button className="text-xs text-lime-600 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-400 font-medium transition-colors">
              Explore
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function NavItem({ icon: Icon, label, to, active = false }: { icon: any; label: string; to: string; active?: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
        active
          ? 'text-lime-500 bg-lime-100 dark:bg-lime-900/30 shadow-md'
          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function SubNavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`text-sm px-3 py-1.5 rounded cursor-pointer transition-all ${
        active ? 'text-neutral-900 dark:text-white font-medium' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
      }`}
    >
      {label}
    </div>
  );
}
