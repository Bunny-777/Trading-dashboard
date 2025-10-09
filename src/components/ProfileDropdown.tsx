// import { useState, useRef, useEffect } from 'react';
// import { User, Settings, LogOut, CreditCard, Shield } from 'lucide-react';
// import MyProfile from './MyProfile';
// import AccountSettings from './AccountSettings';
// import PaymentMethods from './PaymentMethods';
// import Security from './Security';

// export default function ProfileDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePage, setActivePage] = useState<'profile' | 'settings' | 'payment' | 'security'>('profile');
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="relative z-[1000]" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-3 hover:opacity-80 transition-opacity"
//       >
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 overflow-hidden" />
//         <div className="text-left">
//           <div className="text-sm font-semibold text-neutral-900 dark:text-white">Bunny</div>
//           <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
//         </div>
//         <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-xs rounded text-neutral-700 dark:text-neutral-300">
//           PRO
//         </span>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden z-[9999]">
//           {/* Header */}
//           <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-lime-500/10 to-emerald-500/10">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500" />
//               <div>
//                 <div className="font-semibold text-neutral-900 dark:text-white">Bunny</div>
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">Balance</div>
//                 <div className="font-bold text-sm text-neutral-900 dark:text-white">$24,350</div>
//               </div>
//               <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">Profit</div>
//                 <div className="font-bold text-sm text-lime-500">+12.5%</div>
//               </div>
//             </div>
//           </div>

//           {/* Menu Items */}
//           <div className="py-2 border-b border-neutral-200 dark:border-neutral-800">
//             <MenuItem icon={User} label="My Profile" onClick={() => setActivePage('profile')} />
//             <MenuItem icon={Settings} label="Account Settings" onClick={() => setActivePage('settings')} />
//             <MenuItem icon={CreditCard} label="Payment Methods" onClick={() => setActivePage('payment')} />
//             <MenuItem icon={Shield} label="Security" onClick={() => setActivePage('security')} />
//           </div>

//           {/* Active Page */}
//           <div className="p-4 max-h-64 overflow-auto">
//             {activePage === 'profile' && <MyProfile />}
//             {activePage === 'settings' && <AccountSettings />}
//             {activePage === 'payment' && <PaymentMethods />}
//             {activePage === 'security' && <Security />}
//           </div>

//           {/* Sign Out */}
//           <div className="border-t border-neutral-200 dark:border-neutral-800 py-2">
//             <MenuItem icon={LogOut} label="Sign Out" danger />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function MenuItem({ icon: Icon, label, onClick, danger = false }: { icon: any; label: string; onClick?: () => void; danger?: boolean }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
//         danger
//           ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30'
//           : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
//       }`}
//     >
//       <Icon className="w-4 h-4" />
//       <span className="text-sm font-medium">{label}</span>
//     </button>
//   );
// }

// import { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { User, Settings, LogOut, CreditCard, Shield } from 'lucide-react';

// export default function ProfileDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Navigate to profile page
//   const goToProfile = () => {
//     setIsOpen(false);
//     navigate('/profile'); // ✅ works with React Router
//   };

//   return (
//     <div className="relative z-[1000]" ref={dropdownRef}>
//       {/* Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-3 hover:opacity-80 transition-opacity"
//       >
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 overflow-hidden" />
//         <div className="text-left">
//           <div className="text-sm font-semibold text-neutral-900 dark:text-white">Bunny</div>
//           <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
//         </div>
//         <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-xs rounded text-neutral-700 dark:text-neutral-300">
//           PRO
//         </span>
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden z-[9999]">
//           {/* Header */}
//           <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-lime-500/10 to-emerald-500/10">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500" />
//               <div>
//                 <div className="font-semibold text-neutral-900 dark:text-white">Bunny</div>
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">Balance</div>
//                 <div className="font-bold text-sm text-neutral-900 dark:text-white">$24,350</div>
//               </div>
//               <div className="flex-1 bg-white dark:bg-neutral-900 rounded-lg p-2">
//                 <div className="text-xs text-neutral-500 dark:text-neutral-400">Profit</div>
//                 <div className="font-bold text-sm text-lime-500">+12.5%</div>
//               </div>
//             </div>
//           </div>

//           {/* Menu */}
//           <div className="py-2 border-b border-neutral-200 dark:border-neutral-800">
//             <MenuItem icon={User} label="My Profile" onClick={goToProfile} />
//             <MenuItem icon={Settings} label="Account Settings" />
//             <MenuItem icon={CreditCard} label="Payment Methods" />
//             <MenuItem icon={Shield} label="Security" />
//           </div>

//           {/* Sign Out */}
//           <div className="border-t border-neutral-200 dark:border-neutral-800 py-2">
//             <MenuItem icon={LogOut} label="Sign Out" danger />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function MenuItem({
//   icon: Icon,
//   label,
//   onClick,
//   danger = false,
// }: {
//   icon: any;
//   label: string;
//   onClick?: () => void;
//   danger?: boolean;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
//         danger
//           ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30'
//           : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
//       }`}
//     >
//       <Icon className="w-4 h-4" />
//       <span className="text-sm font-medium">{label}</span>
//     </button>
//   );
// }


import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, CreditCard, Shield } from 'lucide-react';
import MyProfile from './MyProfile';
import AccountSettings from './AccountSettings';
import PaymentMethods from './PaymentMethods';
import Security from './Security';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState<'profile' | 'settings' | 'payment' | 'security'>('profile');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Open full profile page
  const goToProfilePage = () => {
    setIsOpen(false);
    navigate('/profile');
  };

  return (
    <div className="relative z-[1000]" ref={dropdownRef}>
      {/* Top Button */}
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

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-lime-500/10 to-emerald-500/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white">Bunny</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">@bunny777</div>
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

          {/* Menu Section */}
          <div className="py-2 border-b border-neutral-200 dark:border-neutral-800">
            <MenuItem
              icon={User}
              label="My Profile"
              onClick={goToProfilePage}
              onHover={() => setActivePage('profile')}
            />
            <MenuItem
              icon={Settings}
              label="Account Settings"
              onClick={() => setActivePage('settings')}
              onHover={() => setActivePage('settings')}
            />
            <MenuItem
              icon={CreditCard}
              label="Payment Methods"
              onClick={() => setActivePage('payment')}
              onHover={() => setActivePage('payment')}
            />
            <MenuItem
              icon={Shield}
              label="Security"
              onClick={() => setActivePage('security')}
              onHover={() => setActivePage('security')}
            />
          </div>

          {/* Dynamic Details Section */}
          <div className="p-4 max-h-64 overflow-auto transition-all duration-200">
            {activePage === 'profile' && <MyProfile />}
            {activePage === 'settings' && <AccountSettings />}
            {activePage === 'payment' && <PaymentMethods />}
            {activePage === 'security' && <Security />}
          </div>

          {/* Sign Out */}
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
  onClick,
  onHover,
  danger = false,
}: {
  icon: any;
  label: string;
  onClick?: () => void;
  onHover?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
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
