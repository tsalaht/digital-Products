'use client';

import { useState, useEffect } from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface ReviewPeriodCountdownProps {
  expiresAt: string;
  userType: 'buyer' | 'seller';
}

const ReviewPeriodCountdown = ({ expiresAt, userType }: ReviewPeriodCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const expiry = new Date(expiresAt).getTime();
      const difference = expiry - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, isExpired: false };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresAt]);

  const getUrgencyLevel = () => {
    const totalHours = timeLeft.days * 24 + timeLeft.hours;
    if (timeLeft.isExpired) return 'expired';
    if (totalHours <= 24) return 'critical';
    if (totalHours <= 48) return 'warning';
    return 'normal';
  };

  const urgencyLevel = getUrgencyLevel();

  const getColorClasses = () => {
    switch (urgencyLevel) {
      case 'expired':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'critical':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-green-50 border-green-200 text-green-800';
    }
  };

  const getIcon = () => {
    switch (urgencyLevel) {
      case 'expired':
        return AlertTriangle;
      case 'critical':
        return AlertTriangle;
      case 'warning':
        return Clock;
      default:
        return CheckCircle;
    }
  };

  const getTitle = () => {
    if (timeLeft.isExpired) {
      return userType === 'buyer' 
        ? 'Review Period Expired - Funds Released'
        : 'Review Period Expired - Funds Released';
    }
    
    return userType === 'buyer' 
      ? 'Review Period Remaining'
      : 'Buyer Review Period';
  };

  const getMessage = () => {
    if (timeLeft.isExpired) {
      return userType === 'buyer'
        ? 'The review period has expired. Funds have been automatically released to the seller.'
        : 'The review period has expired. Funds have been automatically released to you.';
    }

    if (userType === 'buyer') {
      if (urgencyLevel === 'critical') {
        return 'Review period ending soon! Please confirm delivery or open a dispute before time expires.';
      }
      return 'Please review the delivered project and confirm completion or open a dispute if needed.';
    } else {
      return 'The buyer is reviewing your delivered project. Funds will be released automatically if no dispute is opened.';
    }
  };

  const formatTime = () => {
    if (timeLeft.isExpired) return 'Expired';

    const parts = [];
    if (timeLeft.days > 0) parts.push(`${timeLeft.days}d`);
    if (timeLeft.hours > 0) parts.push(`${timeLeft.hours}h`);
    if (timeLeft.minutes > 0) parts.push(`${timeLeft.minutes}m`);
    if (timeLeft.days === 0 && timeLeft.hours === 0) parts.push(`${timeLeft.seconds}s`);

    return parts.join(' ');
  };

  const Icon = getIcon();

  return (
    <div className={`p-4 border rounded-lg ${getColorClasses()}`}>
      <div className="flex items-start">
        <Icon className="h-5 w-5 mr-3 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium mb-1">{getTitle()}</h4>
          <p className="text-sm mb-2">{getMessage()}</p>
          
          {!timeLeft.isExpired && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-mono text-lg font-bold">
                {formatTime()}
              </span>
              {urgencyLevel === 'critical' && (
                <span className="ml-2 animate-pulse text-red-600 font-semibold">
                  ⚠️ Urgent
                </span>
              )}
            </div>
          )}

          {/* Progress bar for visual representation */}
          {!timeLeft.isExpired && (
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Review Started</span>
                <span>Auto-release</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    urgencyLevel === 'critical' ? 'bg-red-500' :
                    urgencyLevel === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{
                    width: `${Math.max(10, 100 - ((timeLeft.days * 24 + timeLeft.hours + timeLeft.minutes / 60) / (5 * 24)) * 100)}%`
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons for buyers */}
      {userType === 'buyer' && !timeLeft.isExpired && (
        <div className="mt-4 pt-4 border-t border-current border-opacity-20">
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-2 bg-white bg-opacity-80 rounded-md text-sm font-medium hover:bg-opacity-100 transition-colors">
              Confirm Delivery
            </button>
            <button className="px-3 py-2 bg-white bg-opacity-80 rounded-md text-sm font-medium hover:bg-opacity-100 transition-colors">
              Open Dispute
            </button>
            <button className="px-3 py-2 bg-white bg-opacity-80 rounded-md text-sm font-medium hover:bg-opacity-100 transition-colors">
              Request Extension
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPeriodCountdown;