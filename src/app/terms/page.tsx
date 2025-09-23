'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Users, FileText, CreditCard, Globe, AlertTriangle } from 'lucide-react';

const TermsAndConditions = () => {
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms and Conditions</h1>
              <p className="text-slate-600 text-lg">Digital Project Marketplace Platform Agreement</p>
            </div>
          </div>
          
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50">
            <p className="text-blue-800 text-sm leading-relaxed">
              <strong>Last Updated:</strong> December 12, 2024 • 
              <strong>Effective Date:</strong> December 12, 2024
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
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
              <p className="text-slate-700 leading-relaxed">
                Welcome to our Digital Project Marketplace Platform. By accessing and using our platform, you agree to be bound by these Terms and Conditions. Our platform serves as an intermediary between buyers and sellers of digital projects, providing secure transaction processing and project delivery services.
              </p>
            </div>
          </section>

          {/* Platform Role */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Platform's Role as Mediator</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/50">
                <h3 className="font-bold text-blue-900 mb-3">Our Responsibilities:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide secure payment processing and escrow protection services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Facilitate communication between buyers and sellers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide dispute resolution services when necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain platform security and user data protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">User Responsibilities</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Seller Responsibilities */}
              <div className="bg-green-50/80 rounded-2xl p-6 border border-green-200/50">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  Seller Responsibilities
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide accurate project descriptions and specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Deliver projects as described and within agreed timeframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain professional communication standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure all delivered content is original and legally owned</span>
                  </li>
                </ul>
              </div>
              
              {/* Buyer Responsibilities */}
              <div className="bg-orange-50/80 rounded-2xl p-6 border border-orange-200/50">
                <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  Buyer Responsibilities
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide clear project requirements and specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Make payments through secure platform channels only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Review delivered projects within specified timeframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Respect intellectual property rights of delivered projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Intellectual Property Rights</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50/80 rounded-2xl p-6 border border-indigo-200/50">
                <h3 className="font-bold text-indigo-900 mb-3">Project Ownership:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-xs font-bold">1</span>
                    </div>
                    <span>Upon successful completion and payment, full ownership rights transfer to the buyer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-xs font-bold">2</span>
                    </div>
                    <span>Sellers must guarantee original work and proper licensing for all third-party components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-xs font-bold">3</span>
                    </div>
                    <span>Platform retains the right to showcase completed projects for marketing purposes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment and Escrow */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Secure Payment Methods & Escrow Protection</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/50">
                <h3 className="font-bold text-emerald-900 mb-4">Escrow System:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-emerald-800">Payment Security:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Funds held securely until delivery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>SSL encryption for all transactions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>PCI DSS compliant processing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-emerald-800">Release Process:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>7-day review period for buyers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Automatic release after approval</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Dispute resolution available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Compliance */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Legal Compliance</h2>
            </div>
            <div className="bg-red-50/80 rounded-2xl p-6 border border-red-200/50">
              <h3 className="font-bold text-red-900 mb-4">Compliance Requirements:</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">International Laws:</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• GDPR (European Union)</li>
                      <li>• CCPA (California, USA)</li>
                      <li>• Digital Services Act (EU)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Local Regulations:</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Anti-money laundering (AML)</li>
                      <li>• Know Your Customer (KYC)</li>
                      <li>• Tax compliance requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Prohibited Activities</h2>
            </div>
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/50">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-amber-900 mb-3">Strictly Prohibited:</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <span>Selling copyrighted material without permission</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <span>Fraudulent or deceptive practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <span>Money laundering or illegal activities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-3">Consequences:</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <span>Immediate account suspension</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <span>Legal action if necessary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <span>Permanent platform ban</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="mb-6 opacity-90">
                If you have any questions about these Terms and Conditions, please contact our legal team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Contact Legal Team
                </Link>
                <Link 
                  href="/privacy" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;