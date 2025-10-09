import { useState, useRef } from "react";
import { Edit3, Mail, Phone, MapPin, Settings, LogOut, Camera } from "lucide-react";

export default function Profile() {
  const [avatar, setAvatar] = useState("/avatar.svg"); // default avatar
  const fileInputRef = useRef<HTMLInputElement>(null);

  const user = {
    name: "Bunny",
    username: "bunny777",
    email: "bunny202410@gmail.com",
    phone: "9389728258",
    location: "Noida, India",
    joined: "March 2024",
    portfolioValue: "$125,430.50",
    profit: "+12.5%",
  };

  const activities = [
    { action: "Updated profile picture", time: "2 hours ago" },
    { action: "Changed password", time: "1 day ago" },
    { action: "Enabled 2FA authentication", time: "3 days ago" },
    { action: "Joined BunnyTrades", time: "March 2024" },
  ];

  // Handle avatar upload
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* User Info Section */}
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative">
        {/* Avatar Section */}
        <div className="flex flex-col items-center md:items-start relative">
          <div className="relative w-28 h-28 group">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border border-neutral-300 dark:border-neutral-700 object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={handleAvatarClick}
            />
            {/* Edit Icon Overlay */}
            <div
              onClick={handleAvatarClick}
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        {/* User Details */}
        <div className="flex-1 md:pl-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{user.name}</h2>
          <p className="text-neutral-500 dark:text-neutral-400">@{user.username}</p>

          <div className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> {user.email}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" /> {user.phone}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> {user.location}
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold transition-colors">
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Portfolio Value" value={user.portfolioValue} change={user.profit} positive />
        <StatCard title="Total Trades" value="128" change="+12 this week" positive />
        <StatCard title="Account Age" value="1 Year" change="Since March 2024" positive />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Account Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 last:border-0"
            >
              <div className="font-medium text-neutral-900 dark:text-white">{activity.action}</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <li className="flex items-center justify-between">
              <span>Change Password</span>
              <button className="text-lime-500 hover:underline">Edit</button>
            </li>
            <li className="flex items-center justify-between">
              <span>Enable Two-Factor Authentication</span>
              <button className="text-lime-500 hover:underline">Enable</button>
            </li>
            <li className="flex items-center justify-between">
              <span>Privacy Settings</span>
              <button className="text-lime-500 hover:underline">Manage</button>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors">
              <Settings className="w-4 h-4" /> Account Settings
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
              <LogOut className="w-4 h-4" /> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable StatCard component
function StatCard({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{title}</div>
      <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{value}</div>
      <div className={`text-sm ${positive ? "text-lime-500" : "text-red-500"}`}>{change}</div>
    </div>
  );
}
