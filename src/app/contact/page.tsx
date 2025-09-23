'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Mail, Phone, Clock, MessageSquare, Send, MapPin, Shield, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      content: 'support@marketplace.com',
      description: 'General inquiries and support',
      responseTime: '24 hours'
    },
    {
      icon: Shield,
      title: 'Legal & Privacy',
      content: 'legal@marketplace.com',
      description: 'Privacy, legal, and compliance matters',
      responseTime: '48 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      content: '+1 (555) 123-4567',
      description: 'Priority support for enterprise clients',
      responseTime: 'Business hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      content: 'Available in dashboard',
      description: 'Real-time support for active users',
      responseTime: 'Instant'
    }
  ];

  const supportCategories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'refund', label: 'Refund Request' },
    { value: 'dispute', label: 'Transaction Dispute' },
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'legal', label: 'Legal & Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-white/95 backdrop-blur-lg shadow-soft border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Contact Us</h1>
              <p className="text-slate-600 text-lg">Get in touch with our expert support team</p>
            </div>
          </div>
          
          <div className="bg-purple-50/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50">
            <p className="text-purple-800 text-sm leading-relaxed">
              <strong>Response Times:</strong> General inquiries within 24 hours • 
              <strong>Priority Support:</strong> Enterprise clients within 4 hours
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50/80 rounded-2xl p-8 text-center border border-green-200/50">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
                <p className="text-green-600 text-sm">
                  Reference ID: #MSG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject Category *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400 resize-none"
                    placeholder="Please describe your inquiry in detail. Include any relevant transaction IDs, error messages, or specific questions."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50">
                  <p className="text-blue-800 text-sm">
                    <strong>Priority Support:</strong> For urgent issues affecting active transactions, 
                    please include your transaction ID for faster resolution.
                  </p>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/50 hover:bg-white/60 transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-slate-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 mb-1">{contact.title}</h3>
                          <p className="text-slate-800 font-medium mb-1">{contact.content}</p>
                          <p className="text-slate-600 text-sm mb-2">{contact.description}</p>
                          <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                            <Clock className="w-3 h-3" />
                            <span>{contact.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Technical Support Hours */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Support Hours</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50/80 rounded-2xl p-4 border border-green-200/50">
                  <h3 className="font-bold text-green-900 mb-2">Email Support</h3>
                  <p className="text-green-700 text-sm mb-2">24/7 availability</p>
                  <p className="text-slate-600 text-sm">Responses within 24 hours</p>
                </div>
                
                <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-200/50">
                  <h3 className="font-bold text-blue-900 mb-2">Phone Support</h3>
                  <div className="text-blue-700 text-sm space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="bg-purple-50/80 rounded-2xl p-4 border border-purple-200/50">
                  <h3 className="font-bold text-purple-900 mb-2">Live Chat</h3>
                  <p className="text-purple-700 text-sm mb-2">Available for logged-in users</p>
                  <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 10:00 PM EST</p>
                </div>
              </div>
            </div>
            
            {/* Office Location */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Office Location</h2>
              </div>
              
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-3">Digital Projects Marketplace Inc.</h3>
                <div className="space-y-2 text-slate-700">
                  <p>123 Innovation Drive</p>
                  <p>Tech Hub District</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-sm">
                    <strong>Note:</strong> This address is for official business correspondence only. 
                    For support, please use the contact methods above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Support Resources */}
        <div className="mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Support Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">FAQ Center</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Find answers to commonly asked questions about our platform and services.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Visit FAQ
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-green-900 mb-2">Security Center</h3>
                <p className="text-green-700 text-sm mb-4">
                  Report security issues or learn about our safety measures and best practices.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Security Help
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-purple-900 mb-2">Priority Support</h3>
                <p className="text-purple-700 text-sm mb-4">
                  Upgrade to premium support for faster response times and dedicated assistance.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;