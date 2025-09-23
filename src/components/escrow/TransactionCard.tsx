'use client';

import { useState } from 'react';
import { Calendar, Clock, DollarSign, Eye, FileText, AlertTriangle, CheckCircle, XCircle, MessageCircle, Download, Upload } from 'lucide-react';
import { EscrowTransaction } from '@/types';
import { formatCurrency } from '@/utils/helpers';
import TransactionStatusBadge from './TransactionStatusBadge';
import ReviewPeriodCountdown from './ReviewPeriodCountdown';
import TransactionTimeline from './TransactionTimeline';

interface TransactionCardProps {
  transaction: EscrowTransaction;
  userType: 'buyer' | 'seller';
}

const TransactionCard = ({ transaction, userType }: TransactionCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const getActionButtons = () => {
    const buttons = [];

    switch (transaction.status) {
      case 'pending_payment':
        if (userType === 'buyer') {
          buttons.push(
            <button
              key="pay"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Complete Payment
            </button>
          );
        }
        break;

      case 'in_escrow':
        if (userType === 'seller') {
          buttons.push(
            <button
              key="deliver"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Upload className="h-4 w-4 mr-2 inline" />
              Deliver Project
            </button>
          );
        }
        break;

      case 'in_delivery':
        if (userType === 'seller') {
          buttons.push(
            <button
              key="update"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update Delivery
            </button>
          );
        } else {
          buttons.push(
            <button
              key="contact"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2 inline" />
              Contact Seller
            </button>
          );
        }
        break;

      case 'under_review':
        if (userType === 'buyer') {
          buttons.push(
            <button
              key="download"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2 inline" />
              Download Files
            </button>,
            <button
              key="confirm"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CheckCircle className="h-4 w-4 mr-2 inline" />
              Confirm Delivery
            </button>,
            <button
              key="dispute"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <AlertTriangle className="h-4 w-4 mr-2 inline" />
              Open Dispute
            </button>
          );
        } else {
          buttons.push(
            <button
              key="contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2 inline" />
              Contact Buyer
            </button>
          );
        }
        break;

      case 'dispute':
        buttons.push(
          <button
            key="view-dispute"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Eye className="h-4 w-4 mr-2 inline" />
            View Dispute
          </button>
        );
        break;

      case 'completed':
        buttons.push(
          <button
            key="receipt"
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FileText className="h-4 w-4 mr-2 inline" />
            View Receipt
          </button>
        );
        if (userType === 'buyer') {
          buttons.push(
            <button
              key="download"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2 inline" />
              Download Files
            </button>
          );
        }
        break;
    }

    return buttons;
  };

  const getOtherPartyName = () => {
    return userType === 'buyer' ? transaction.sellerName : transaction.buyerName;
  };

  const getOtherPartyRole = () => {
    return userType === 'buyer' ? 'Seller' : 'Buyer';
  };

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        {/* Left side - Transaction info */}
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mr-4">
              {transaction.projectTitle}
            </h3>
            <TransactionStatusBadge status={transaction.status} />
            {transaction.isInstallment && (
              <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                Installments
              </span>
            )}
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="mr-6">
              {getOtherPartyRole()}: <span className="font-medium">{getOtherPartyName()}</span>
            </span>
            <span className="mr-6 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(transaction.createdAt)}
            </span>
            <span className="mr-6 flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {formatCurrency(transaction.totalAmount)}
            </span>
          </div>

          {/* Review period countdown for under_review status */}
          {transaction.status === 'under_review' && transaction.reviewExpiresAt && (
            <ReviewPeriodCountdown 
              expiresAt={transaction.reviewExpiresAt}
              userType={userType}
            />
          )}

          {/* Installment info */}
          {transaction.isInstallment && transaction.installments && (
            <div className="mt-3 p-3 bg-purple-50 rounded-lg">
              <h4 className="text-sm font-medium text-purple-800 mb-2">Installment Plan</h4>
              <div className="space-y-1">
                {transaction.installments.map((installment) => (
                  <div key={installment.id} className="flex items-center justify-between text-sm">
                    <span className="text-purple-700">
                      Installment {installment.installmentNumber}: {formatCurrency(installment.amount)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      installment.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : installment.status === 'overdue'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {installment.status === 'paid' ? '✅ Paid' : 
                       installment.status === 'overdue' ? '⚠️ Overdue' : 
                       '⏳ Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dispute info */}
          {transaction.status === 'dispute' && transaction.disputeReason && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Dispute Opened</h4>
                  <p className="text-sm text-red-700 mt-1">{transaction.disputeReason}</p>
                  {transaction.disputeDate && (
                    <p className="text-xs text-red-600 mt-1">
                      Opened on {formatDate(transaction.disputeDate)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Delivery notes */}
          {transaction.deliveryNotes && transaction.status !== 'pending_payment' && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800 mb-1">Delivery Notes</h4>
              <p className="text-sm text-blue-700">{transaction.deliveryNotes}</p>
            </div>
          )}
        </div>

        {/* Right side - Actions */}
        <div className="ml-6 flex flex-col items-end space-y-2">
          <div className="flex flex-wrap gap-2 justify-end">
            {getActionButtons()}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              {showTimeline ? 'Hide Timeline' : 'View Timeline'}
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              {showDetails ? 'Less Details' : 'More Details'}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Transaction ID:</span>
              <p className="text-gray-600">{transaction.id}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Payment Method:</span>
              <p className="text-gray-600 capitalize">{transaction.paymentMethod.replace('_', ' ')}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Platform Fee:</span>
              <p className="text-gray-600">{formatCurrency(transaction.platformFee)}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Review Period:</span>
              <p className="text-gray-600">{transaction.reviewPeriodDays} days</p>
            </div>
            {transaction.paidAt && (
              <div>
                <span className="font-medium text-gray-700">Paid At:</span>
                <p className="text-gray-600">{formatDate(transaction.paidAt)}</p>
              </div>
            )}
            {transaction.deliveredAt && (
              <div>
                <span className="font-medium text-gray-700">Delivered At:</span>
                <p className="text-gray-600">{formatDate(transaction.deliveredAt)}</p>
              </div>
            )}
            {transaction.completedAt && (
              <div>
                <span className="font-medium text-gray-700">Completed At:</span>
                <p className="text-gray-600">{formatDate(transaction.completedAt)}</p>
              </div>
            )}
            <div>
              <span className="font-medium text-gray-700">Payment Reference:</span>
              <p className="text-gray-600 font-mono text-xs">{transaction.paymentReference}</p>
            </div>
          </div>
        </div>
      )}

      {/* Timeline */}
      {showTimeline && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <TransactionTimeline 
            transaction={transaction} 
            userType={userType}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionCard;