'use client';

import { DollarSign, Shield, Clock, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/utils/helpers';

interface TransactionStatsProps {
  stats: {
    total: number;
    active: number;
    completed: number;
    disputed: number;
    totalValue: number;
    escrowedValue: number;
  };
  userType: 'buyer' | 'seller';
}

const TransactionStats = ({ stats, userType }: TransactionStatsProps) => {
  const statCards = [
    {
      title: 'Total Transactions',
      value: stats.total.toString(),
      icon: DollarSign,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Transactions',
      value: stats.active.toString(),
      icon: Clock,
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Completed',
      value: stats.completed.toString(),
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      title: 'Disputed',
      value: stats.disputed.toString(),
      icon: AlertTriangle,
      color: 'bg-red-50 text-red-600 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      title: `Total ${userType === 'buyer' ? 'Spent' : 'Earned'}`,
      value: formatCurrency(stats.totalValue),
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      title: 'In Escrow',
      value: formatCurrency(stats.escrowedValue),
      icon: Shield,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      iconColor: 'text-indigo-600',
      highlight: stats.escrowedValue > 0
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {statCards.map((card, index) => {
        const Icon = card.icon;
        
        return (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
              card.highlight ? `${card.color} ring-2 ring-indigo-300 ring-opacity-50` : card.color
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-75 mb-1">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </div>
              <div className={`p-2 rounded-lg bg-white bg-opacity-80`}>
                <Icon className={`h-6 w-6 ${card.iconColor}`} />
              </div>
            </div>
            
            {/* Progress bar for completion rate */}
            {card.title === 'Completed' && stats.total > 0 && (
              <div className="mt-3">
                <div className="flex justify-between text-xs opacity-75 mb-1">
                  <span>Completion Rate</span>
                  <span>{Math.round((stats.completed / stats.total) * 100)}%</span>
                </div>
                <div className="w-full bg-white bg-opacity-60 rounded-full h-2">
                  <div
                    className="bg-current h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(stats.completed / stats.total) * 100}%` }}
                  />
                </div>
              </div>
            )}
            
            {/* Warning for disputes */}
            {card.title === 'Disputed' && stats.disputed > 0 && (
              <div className="mt-2 text-xs opacity-75">
                <span className="inline-flex items-center">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Needs attention
                </span>
              </div>
            )}
            
            {/* Escrow protection indicator */}
            {card.title === 'In Escrow' && stats.escrowedValue > 0 && (
              <div className="mt-2 text-xs opacity-75">
                <span className="inline-flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Protected funds
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TransactionStats;