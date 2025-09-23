'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Database, Users, Eye, Lock, Globe, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
              <p className="text-slate-600 text-lg">Your Data Protection and Privacy Rights</p>
            </div>
          </div>
          
          <div className="bg-green-50/80 backdrop-blur-sm rounded-xl p-6 border border-green-200/50">
            <p className="text-green-800 text-sm leading-relaxed">
              <strong>Last Updated:</strong> December 12, 2024 • 
              <strong>GDPR Compliant</strong> • 
              <strong>CCPA Compliant</strong>
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
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/50">
              <p className="text-slate-700 leading-relaxed mb-4">
                We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Digital Project Marketplace Platform.
              </p>
              <div className="bg-blue-100/60 rounded-xl p-4">
                <p className="text-blue-800 text-sm font-medium">
                  This policy applies to all information collected through our platform, services, and any related communications.
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-purple-50/80 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Personal Information
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Account Data:</span> Name, email address, username, profile picture
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Contact Information:</span> Phone number, business address, country/region
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Identity Verification:</span> Government-issued ID, business registration documents
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Transaction Data */}
              <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/50">
                <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Transaction & Project Data
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Project Details:</span> Descriptions, specifications, files, pricing
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Payment Information:</span> Transaction history, payment methods (encrypted)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Communication:</span> Messages, reviews, support tickets
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Technical Data */}
            <div className="mt-6 bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
              <h3 className="font-bold text-slate-900 mb-4">Technical & Usage Data</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Device Information:</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• IP address and location data</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Device identifiers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Usage Analytics:</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Pages visited and time spent</li>
                    <li>• Search queries and preferences</li>
                    <li>• Feature usage patterns</li>
                    <li>• Error logs and performance data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-indigo-50/80 rounded-2xl p-6 border border-indigo-200/50">
                <h3 className="font-bold text-indigo-900 mb-4">Primary Uses:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-indigo-800 flex items-center gap-2">
                      <div className="w-5 h-5 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      Platform Services
                    </h4>
                    <ul className="space-y-2 text-slate-700 text-sm ml-7">
                      <li>• Process and manage transactions</li>
                      <li>• Facilitate buyer-seller communications</li>
                      <li>• Provide customer support</li>
                      <li>• Verify user identity and prevent fraud</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-indigo-800 flex items-center gap-2">
                      <div className="w-5 h-5 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      Improvements
                    </h4>
                    <ul className="space-y-2 text-slate-700 text-sm ml-7">
                      <li>• Analyze platform usage and performance</li>
                      <li>• Develop new features and services</li>
                      <li>• Personalize user experience</li>
                      <li>• Conduct research and analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50/80 rounded-2xl p-6 border border-green-200/50">
                <h3 className="font-bold text-green-900 mb-4">Legal Basis for Processing (GDPR):</h3>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">C</span>
                    </div>
                    <span><strong>Contract:</strong> Processing necessary for providing our services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">L</span>
                    </div>
                    <span><strong>Legal Obligation:</strong> Compliance with KYC, AML, and tax requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">I</span>
                    </div>
                    <span><strong>Legitimate Interest:</strong> Platform improvement and fraud prevention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">C</span>
                    </div>
                    <span><strong>Consent:</strong> Marketing communications (with your explicit consent)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Storage and Protection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Data Storage & Protection</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/50">
                <h3 className="font-bold text-emerald-900 mb-4">Security Measures:</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-3">Technical Safeguards:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>AES-256 encryption at rest</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>TLS 1.3 encryption in transit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Multi-factor authentication</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Regular security audits</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-3">Operational Security:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Access controls and monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Employee background checks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>Data breach response plan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>ISO 27001 compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/50">
                <h3 className="font-bold text-blue-900 mb-4">Data Retention:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">3Y</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">Account Data:</span>
                      <span className="text-slate-700"> Retained for 3 years after account closure for legal compliance</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">7Y</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">Transaction Records:</span>
                      <span className="text-slate-700"> Kept for 7 years for tax and audit purposes</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">2Y</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">Usage Analytics:</span>
                      <span className="text-slate-700"> Anonymized after 2 years for statistical purposes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Sharing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Third-Party Data Sharing</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/50">
                <h3 className="font-bold text-amber-900 mb-4">We Share Data With:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Service Providers:</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-slate-700 text-sm">
                      <div>
                        <ul className="space-y-1">
                          <li>• Payment processors (Stripe, PayPal)</li>
                          <li>• Cloud storage providers (AWS, Google Cloud)</li>
                          <li>• Analytics services (anonymized data only)</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1">
                          <li>• Email service providers</li>
                          <li>• Identity verification services</li>
                          <li>• Customer support tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-100/60 rounded-xl p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Legal Disclosure:
                    </h4>
                    <p className="text-red-700 text-sm">
                      We may disclose information when required by law, court order, or to protect our legal rights and the safety of our users.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50/80 rounded-2xl p-6 border border-green-200/50">
                <h3 className="font-bold text-green-900 mb-3">We Never:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span>Sell your personal information to third parties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span>Share sensitive data without legal basis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span>Use your data for unauthorized purposes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Privacy Rights</h2>
            </div>
            
            <div className="bg-purple-50/80 rounded-2xl p-6 border border-purple-200/50">
              <h3 className="font-bold text-purple-900 mb-6">Under GDPR & CCPA, you have the right to:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Access</h4>
                      <p className="text-slate-700 text-sm">Request a copy of your personal data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Rectification</h4>
                      <p className="text-slate-700 text-sm">Correct inaccurate or incomplete data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Erasure</h4>
                      <p className="text-slate-700 text-sm">Request deletion of your data ("right to be forgotten")</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Portability</h4>
                      <p className="text-slate-700 text-sm">Receive your data in a portable format</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Restrict Processing</h4>
                      <p className="text-slate-700 text-sm">Limit how we use your information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Object</h4>
                      <p className="text-slate-700 text-sm">Opt-out of certain data processing activities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-100/60 rounded-xl p-4">
                <p className="text-purple-800 text-sm">
                  <strong>To exercise your rights:</strong> Contact our Data Protection Officer at privacy@marketplace.com or use our Privacy Request Form.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h2>
              <p className="mb-6 opacity-90">
                Our Data Protection Officer is here to help with any privacy-related questions or requests.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Contact Privacy Team
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

export default PrivacyPolicy;