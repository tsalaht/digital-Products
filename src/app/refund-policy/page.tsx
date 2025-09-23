'use client';

import Link from 'next/link';
import { ArrowLeft, RefreshCw, Clock, Shield, AlertTriangle, CreditCard, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-white/95 backdrop-blur-lg shadow-soft border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <RefreshCw className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Refund Policy</h1>
              <p className="text-slate-600 text-lg">Fair and Transparent Refund Guidelines</p>
            </div>
          </div>
          
          <div className="bg-orange-50/80 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong>Last Updated:</strong> December 12, 2024 • 
              <strong>Processing Time:</strong> 3-7 Business Days
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Refund Protection</h2>
            </div>
            <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/50">
              <p className="text-slate-700 leading-relaxed mb-4">
                We are committed to ensuring fair transactions for both buyers and sellers. Our refund policy is designed to protect your investment while maintaining trust in our marketplace ecosystem.
              </p>
              <div className="bg-blue-100/60 rounded-xl p-4">
                <p className="text-blue-800 text-sm font-medium">
                  All transactions are protected by our secure escrow system, ensuring your funds are safe until project delivery is confirmed.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Eligibility */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">When Refunds Are Available</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Valid Refund Reasons */}
              <div className="bg-green-50/80 rounded-2xl p-6 border border-green-200/50">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Valid Refund Reasons
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Non-Delivery:</span> Seller fails to deliver the project within agreed timeframe
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Specifications Mismatch:</span> Delivered project doesn't match the description
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Quality Issues:</span> Project contains significant defects or doesn't function as promised
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Fraudulent Activity:</span> Evidence of fraud or misrepresentation by seller
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Invalid Refund Reasons */}
              <div className="bg-red-50/80 rounded-2xl p-6 border border-red-200/50">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Refunds Not Available
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Change of Mind:</span> Buyer no longer wants the project after delivery
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Project Delivered:</span> Project meets specifications and works as described
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Late Requests:</span> Refund requested after 30-day review period
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Buyer Breach:</span> Buyer violates terms or provides false information
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Refund Process</h2>
            </div>
            
            <div className="space-y-6">
              {/* Steps */}
              <div className="bg-purple-50/80 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="font-bold text-purple-900 mb-6">How to Request a Refund:</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Submit Refund Request</h4>
                      <p className="text-slate-700 text-sm mb-3">
                        Go to your transaction history and click "Request Refund" on the relevant purchase. Provide detailed reasons for your request.
                      </p>
                      <div className="bg-purple-100/60 rounded-lg p-3">
                        <p className="text-purple-700 text-xs font-medium">Required: Transaction ID, detailed explanation, supporting evidence</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Investigation Period</h4>
                      <p className="text-slate-700 text-sm mb-3">
                        Our team reviews your case within 2-3 business days. We may contact both parties for additional information.
                      </p>
                      <div className="bg-purple-100/60 rounded-lg p-3">
                        <p className="text-purple-700 text-xs font-medium">Status updates: Check your email and platform notifications</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Decision & Processing</h4>
                      <p className="text-slate-700 text-sm mb-3">
                        If approved, refund is processed immediately. Funds return to your original payment method within 3-7 business days.
                      </p>
                      <div className="bg-purple-100/60 rounded-lg p-3">
                        <p className="text-purple-700 text-xs font-medium">Timeline: Credit cards 3-5 days, PayPal 1-2 days, Bank transfers 5-7 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Timeframes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Refund Processing Times</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-indigo-50/80 rounded-2xl p-6 border border-indigo-200/50">
                <h3 className="font-bold text-indigo-900 mb-4">Expected Processing Times by Payment Method:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/60 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-slate-800">Credit Cards</span>
                    </div>
                    <p className="text-slate-600 text-sm">3-5 business days</p>
                    <p className="text-xs text-slate-500 mt-1">Visa, MasterCard, Amex</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">PP</span>
                      </div>
                      <span className="font-semibold text-slate-800">PayPal</span>
                    </div>
                    <p className="text-slate-600 text-sm">1-2 business days</p>
                    <p className="text-xs text-slate-500 mt-1">Instant to PayPal balance</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">BT</span>
                      </div>
                      <span className="font-semibold text-slate-800">Bank Transfer</span>
                    </div>
                    <p className="text-slate-600 text-sm">5-7 business days</p>
                    <p className="text-xs text-slate-500 mt-1">ACH/Wire transfers</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50/80 rounded-2xl p-6 border border-yellow-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-bold text-yellow-900">Important Notes:</h3>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span>Processing times may vary during holidays and weekends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span>International transactions may take additional 1-2 business days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span>Platform fees are non-refundable except in cases of fraud</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Escrow Protection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Escrow Protection Explained</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/50">
                <h3 className="font-bold text-emerald-900 mb-4">How Our Escrow System Works:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Payment Secured</h4>
                      <p className="text-slate-700 text-sm">When you purchase a project, your payment is held securely in our escrow account - not released to the seller immediately.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Review Period</h4>
                      <p className="text-slate-700 text-sm">You have 7 days to review the delivered project. During this time, you can request modifications or report issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800">Funds Released</h4>
                      <p className="text-slate-700 text-sm">After approval or automatic timeout, funds are released to the seller. If issues arise, funds remain protected for dispute resolution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fraud Prevention */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Fraud Prevention & Warnings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50/80 rounded-2xl p-6 border border-red-200/50">
                <h3 className="font-bold text-red-900 mb-4">Protection Against Fraud:</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">Our Safeguards:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Identity verification for all sellers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>AI-powered fraud detection systems</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>24/7 transaction monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Secure escrow holding system</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">Red Flags to Watch:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">!</span>
                        </div>
                        <span>Requests for payment outside platform</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">!</span>
                        </div>
                        <span>Unusually low prices for complex projects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">!</span>
                        </div>
                        <span>Poor communication or rushed delivery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">!</span>
                        </div>
                        <span>Sellers with no reviews or portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50/80 rounded-2xl p-6 border border-orange-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-orange-900">If You Suspect Fraud:</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Report suspicious activity immediately through our platform's reporting system or contact our fraud prevention team directly.
                </p>
                <div className="bg-orange-100/60 rounded-xl p-4">
                  <p className="text-orange-800 text-sm font-medium">
                    Emergency Fraud Hotline: Available 24/7 for urgent cases • Response time: Within 1 hour
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Need Help with a Refund?</h2>
              <p className="mb-6 opacity-90">
                Our dedicated refund support team is here to assist you with any questions or concerns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Contact Refund Team
                </Link>
                <Link 
                  href="/terms" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;