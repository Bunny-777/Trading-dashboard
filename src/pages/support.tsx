import { useState, useRef } from "react";
import { Mail, MessageCircle, Phone, Camera, Edit3 } from "lucide-react";

export default function Support() {
  const [avatar, setAvatar] = useState("/support.svg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => fileInputRef.current?.click();
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setAvatar(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const tickets = [
    { id: 1, subject: "Deposit not credited", status: "Open", updated: "2 hours ago" },
    { id: 2, subject: "Unable to enable 2FA", status: "Closed", updated: "1 day ago" },
    { id: 3, subject: "Bug in chart panel", status: "Open", updated: "3 days ago" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      {/* Support Info */}
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-md hover:shadow-lg">
        <div className="flex flex-col items-center md:items-start relative">
          <div className="relative w-28 h-28 group">
            <img
              src={avatar}
              alt="Support Avatar"
              className="w-28 h-28 rounded-full border border-neutral-300 dark:border-neutral-700 object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={handleAvatarClick}
            />
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

        <div className="flex-1 md:pl-6 text-center md:text-left space-y-2">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Support Team</h2>
          <p className="text-neutral-500 dark:text-neutral-400">support@bunnytrades.com</p>
          <p className="text-neutral-500 dark:text-neutral-400">+91 9876543210</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-lime-500 hover:bg-lime-600 text-black rounded-lg font-semibold shadow hover:shadow-lg transition-colors">
          <MessageCircle className="w-4 h-4" /> Create Ticket
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg shadow hover:shadow-lg transition-colors">
          <Mail className="w-4 h-4" /> Contact via Email
        </button>
      </div>

      {/* Tickets */}
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Support Tickets</h2>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex justify-between items-center p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/20 transition-colors"
            >
              <div className="font-medium text-neutral-900 dark:text-white">{ticket.subject}</div>
              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <span>{ticket.status}</span>
                <span>{ticket.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>How do I reset my password?</li>
          <li>How can I update my account info?</li>
          <li>How do I create a support ticket?</li>
          <li>How do I enable Two-Factor Authentication?</li>
        </ul>
      </div>
    </div>
  );
}
