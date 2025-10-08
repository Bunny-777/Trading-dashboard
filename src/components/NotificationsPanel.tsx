import { useState, useRef, useEffect } from 'react';
import { Bell, TrendingUp, DollarSign, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface Notification {
  id: number;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      title: 'Price Alert Triggered',
      message: 'Bitcoin has reached your target price of $42,000',
      time: '5 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'info',
      title: 'New Market Analysis',
      message: 'Weekly market analysis report is now available',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Portfolio Alert',
      message: 'Your portfolio diversity score is below recommended level',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      title: 'Deposit Confirmed',
      message: 'Your deposit of $5,000 has been processed',
      time: '5 hours ago',
      read: true,
    },
  ]);

  const panelRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
      >
        <Bell className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-lime-500 rounded-full text-xs flex items-center justify-center text-black font-bold">
            {unreadCount}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden z-50">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">Notifications</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                You have {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-lime-500 hover:text-lime-600 font-medium"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">No notifications</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors ${
                    !notification.read ? 'bg-lime-500/5' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      notification.type === 'success' ? 'bg-lime-500/20' :
                      notification.type === 'warning' ? 'bg-orange-500/20' : 'bg-blue-500/20'
                    }`}>
                      {notification.type === 'success' && <CheckCircle className="w-5 h-5 text-lime-500" />}
                      {notification.type === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                      {notification.type === 'info' && <TrendingUp className="w-5 h-5 text-blue-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-medium text-sm text-neutral-900 dark:text-white">
                          {notification.title}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeNotification(notification.id);
                          }}
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500 dark:text-neutral-500">
                          {notification.time}
                        </span>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-lime-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-neutral-200 dark:border-neutral-800">
              <button className="w-full text-center text-sm text-lime-500 hover:text-lime-600 font-medium py-2">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
