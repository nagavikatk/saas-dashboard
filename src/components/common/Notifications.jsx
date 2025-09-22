import React from 'react';
import { Bell, Search, Wifi } from 'lucide-react';

const notificationsData = [
  { icon: Bell, text: "You have a bug that needs...", time: "Just now", iconColor: "text-blue-500" },
  { icon: Search, text: "New user registered", time: "59 minutes ago", iconColor: "text-gray-500" },
  { icon: Bell, text: "You have a bug that needs...", time: "12 hours ago", iconColor: "text-blue-500" },
  { icon: Wifi, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM", iconColor: "text-gray-500" },
];

const Notifications = ({ className = '' }) => {
  return (
    <div data-testid="notifications-container" className={`space-y-4 ${className}`}>
      {notificationsData.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <item.icon size={20} className={item.iconColor} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">{item.text}</p>
            <p className="text-xs text-light-text-primary dark:text-dark-text-primary">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;