'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Clock, CheckCircle, AlertTriangle, DollarSign, Lock } from 'lucide-react';
import { EscrowTransaction, PaymentMethod, EscrowPaymentData } from '@/types';
import { Project } from '@/data/projects';
import { formatCurrency } from '@/utils/helpers';
import PaymentMethodSelector from './PaymentMethodSelector';
import EscrowPaymentForm from './EscrowPaymentForm';

interface EscrowCheckoutPageProps {
  projectId: number;
  offerId: number;
  transactionId?: string;
}

const EscrowCheckoutPage = ({ projectId, offerId, transactionId }: EscrowCheckoutPageProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<'overview' | 'payment_method' | 'payment_form' | 'confirmation'>('overview');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
  const [transaction, setTransaction] = useState<EscrowTransaction | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock payment methods (would come from backend in real implementation)
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'visa_mastercard',
      type: 'credit_card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Visa, Mastercard, American Express',
      isEnabled: true,
      processingFee: 2.9,
      processingTime: 'Instant',
      supportedCurrencies: ['USD', 'EUR', 'GBP']
    },
    {
      id: 'paypal',
      type: 'paypal',
      name: 'PayPal',
      icon: '🅿️',
      description: 'Pay with your PayPal account',
      isEnabled: true,
      processingFee: 3.4,
      processingTime: 'Instant',
      supportedCurrencies: ['USD', 'EUR']
    },
    {
      id: 'bank_transfer',
      type: 'bank_transfer',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank wire transfer',
      isEnabled: true,
      processingFee: 0,
      processingTime: '1-3 business days',
      supportedCurrencies: ['USD']
    },
    {
      id: 'crypto',
      type: 'crypto',
      name: 'Cryptocurrency',
      icon: '₿',
      description: 'Bitcoin, Ethereum, USDT',
      isEnabled: false, // Coming soon
      processingFee: 1.0,
      processingTime: '10-30 minutes',
      supportedCurrencies: ['BTC', 'ETH', 'USDT']
    }
  ];

  useEffect(() => {
    // Mock data loading (would fetch from backend)
    const mockTransaction: EscrowTransaction = {
      id: transactionId || 'tx_12345',
      projectId,
      projectTitle: 'E-commerce Mobile App',
      sellerId: 'seller_123',
      sellerName: 'Ahmed Ali',
      buyerId: 'buyer_456',
      buyerName: 'Mohamed Elsayed',
      buyerEmail: 'mohamed@example.com',
      totalAmount: 1200,
      escrowedAmount: 1200,
      platformFee: 60,
      status: 'pending_payment',
      paymentMethod: 'credit_card',
      paymentReference: '',
      createdAt: new Date().toISOString(),
      reviewPeriodDays: 5,
      isInstallment: false
    };

    setTransaction(mockTransaction);
    setIsLoading(false);
  }, [projectId, offerId, transactionId]);

  const handlePaymentSuccess = (paymentData: EscrowPaymentData) => {
    if (!transaction) return;
    
    // Update transaction status (would send to backend)
    const updatedTransaction = {
      ...transaction,
      status: 'payment_completed' as const,
      paidAt: new Date().toISOString(),
      paymentReference: `ref_${Date.now()}`
    };
    
    setTransaction(updatedTransaction);
    setCurrentStep('confirmation');
    
    // Redirect to transaction dashboard after 3 seconds
    setTimeout(() => {
      router.push(`/transactions/${updatedTransaction.id}`);
    }, 3000);
  };

  const calculateTotal = () => {
    if (!transaction || !selectedPaymentMethod) return transaction?.totalAmount || 0;
    
    const processingFee = (transaction.totalAmount * selectedPaymentMethod.processingFee) / 100;
    return transaction.totalAmount + processingFee;
  };

  if (isLoading || !transaction) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading secure checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-green-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Secure Escrow Payment</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your payment is protected by our secure escrow system. Funds are held safely until project delivery is confirmed.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { key: 'overview', label: 'Overview', icon: DollarSign },
              { key: 'payment_method', label: 'Payment Method', icon: Lock },
              { key: 'payment_form', label: 'Payment Details', icon: CheckCircle },
              { key: 'confirmation', label: 'Confirmation', icon: Shield }
            ].map(({ key, label, icon: Icon }, index) => (
              <div key={key} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep === key ? 'border-blue-600 bg-[#7EE7FC] text-white' :
                  ['overview', 'payment_method', 'payment_form', 'confirmation'].indexOf(currentStep) > index ? 
                  'border-green-600 bg-green-600 text-white' : 'border-gray-300 bg-white text-gray-500'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
                {index < 3 && <div className="w-8 h-px bg-gray-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 'overview' && (
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Transaction Overview</h2>
                
                {/* Escrow Protection Info */}
                <div className="bg-green-50 border border-green-200 rounded-3xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-800">100% Buyer Protection</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Your payment is held securely until project delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      5-day review period to verify all deliverables
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Full refund if project doesn't meet specifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      24/7 dispute resolution support
                    </li>
                  </ul>
                </div>

                {/* Transaction Process */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: 'Payment Secured', desc: 'Your payment is held in our secure escrow account' },
                      { step: 2, title: 'Seller Delivers', desc: 'Seller uploads project files, source code, and documentation' },
                      { step: 3, title: 'Review Period', desc: 'You have 5 days to review and test everything' },
                      { step: 4, title: 'Funds Released', desc: 'Once confirmed, funds are automatically released to seller' }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#7EE7FC] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep('payment_method')}
                  className="w-full bg-[#7EE7FC] text-white py-3 px-6 rounded-3xl font-semibold hover:bg-[#3bdeff] transition-colors"
                >
                  Proceed to Payment Method
                </button>
              </div>
            )}

            {currentStep === 'payment_method' && (
              <PaymentMethodSelector
                paymentMethods={paymentMethods}
                selectedMethod={selectedPaymentMethod}
                onSelect={(method) => {
                  setSelectedPaymentMethod(method);
                  setCurrentStep('payment_form');
                }}
                onBack={() => setCurrentStep('overview')}
              />
            )}

            {currentStep === 'payment_form' && selectedPaymentMethod && (
              <EscrowPaymentForm
                transaction={transaction}
                paymentMethod={selectedPaymentMethod}
                onSuccess={handlePaymentSuccess}
                onBack={() => setCurrentStep('payment_method')}
              />
            )}

            {currentStep === 'confirmation' && (
              <div className="bg-white rounded-3xl shadow-md p-6 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-4">Payment Secured Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Your payment of {formatCurrency(transaction.totalAmount)} has been securely placed in escrow. 
                  The seller has been notified to begin project delivery.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-3xl p-4 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Seller will deliver the project within agreed timeframe</li>
                    <li>• You'll receive notifications when files are uploaded</li>
                    <li>• Review period starts once delivery is marked complete</li>
                    <li>• Funds are released automatically after confirmation</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-500">
                  Redirecting to transaction dashboard in 3 seconds...
                </p>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium text-gray-900">{transaction.projectTitle}</h4>
                <p className="text-sm text-gray-600">By {transaction.sellerName}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Project Price</span>
                  <span className="font-medium">{formatCurrency(transaction.totalAmount)}</span>
                </div>
                
                {selectedPaymentMethod && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Fee ({selectedPaymentMethod.processingFee}%)</span>
                    <span className="font-medium">{formatCurrency((transaction.totalAmount * selectedPaymentMethod.processingFee) / 100)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Protection</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    {formatCurrency(calculateTotal())}
                  </span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Shield className="h-4 w-4 mr-2 text-green-600" />
                  SSL Encrypted & Secure
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  {transaction.reviewPeriodDays}-Day Money Back Guarantee
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                  24/7 Dispute Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscrowCheckoutPage;