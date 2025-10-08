import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, CreditCard, Shield } from 'lucide-react';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-[1000]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 overflow-hidden" />
        <div className="text-left">
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">Bunny</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
        </div>
        <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-xs rounded text-neutral-700 dark:text-neutral-300">
          PRO
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden z-[9999]">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-lime-500/10 to-emerald-500/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white">Rene Wells</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">@leftist_crypto_ow</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Balance</div>
                <div className="font-bold text-sm text-neutral-900 dark:text-white">$24,350</div>
              </div>
              <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Profit</div>
                <div className="font-bold text-sm text-lime-500">+12.5%</div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <MenuItem icon={User} label="My Profile" />
            <MenuItem icon={Settings} label="Account Settings" />
            <MenuItem icon={CreditCard} label="Payment Methods" />
            <MenuItem icon={Shield} label="Security" />
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 py-2">
            <MenuItem icon={LogOut} label="Sign Out" danger />
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  danger = false,
}: {
  icon: any;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
        danger
          ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30'
          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
