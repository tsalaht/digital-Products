'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, FileText, RefreshCw, MessageSquare, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { href: '/terms', label: 'الشروط والأحكام', icon: FileText },
      { href: '/privacy', label: 'سياسة الخصوصية', icon: Shield },
      { href: '/refund-policy', label: 'سياسة الاسترداد', icon: RefreshCw },
      { href: '/contact', label: 'اتصل بنا', icon: MessageSquare },
    ],
    platform: [
      { href: '/projects', label: 'تصفح المشاريع' },
      { href: '/profitable-projects', label: 'المشاريع المربحة' },
      { href: '/enterprise-solutions', label: 'حلول الشركات' },
      { href: '/transactions', label: 'المعاملات' },
    ],
    support: [
      { href: '/contact', label: 'مركز الدعم' },
      { href: '/faq', label: 'الأسئلة الشائعة' },
      { href: '/security', label: 'مركز الأمان' },
      { href: '/api-docs', label: 'وثائق API' },
    ]
  };

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { href: '#', icon: Twitter, label: 'Twitter', color: 'hover:text-sky-500' },
    { href: '#', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { href: '#', icon: Instagram, label: 'Instagram', color: 'hover:text-pink-600' },
    { href: '#', icon: Youtube, label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const contactInfo = {
    email: 'support@marketplace.com',
    phone: '+966 50 123 4567',
    address: 'الرياض، المملكة العربية السعودية، حي النرجس، شارع الملك فهد'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Brand & Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={54} 
                    height={54} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold text-gradient">
                  سوق المشاريع الرقمية
                </span>
              </Link>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                المنصة الرائدة لشراء وبيع المشاريع الرقمية. تواصل مع المطورين ورجال الأعمال الموهوبين في بيئة آمنة وموثوقة.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            
            {/* Legal & Policies */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                القانونية والسياسات
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 group"
                      >
                        <Icon className="w-4 h-4 transition-colors duration-200 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                        <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* Platform */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                المنصة
              </h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                الدعم
              </h3>
              <ul className="space-y-3 mb-6 md:mb-8">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4 text-slate-200">
                  تابعنا
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                <span className="text-xs md:text-sm font-medium text-slate-200">محمي بـ SSL</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                <span className="text-xs md:text-sm font-medium text-slate-200">متوافق مع GDPR</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                <span className="text-xs md:text-sm font-medium text-slate-200">محمي بالضمان</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7EE7FC' }} />
                <span className="text-xs md:text-sm font-medium text-slate-200">دعم 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 text-xs md:text-sm text-center md:text-right">
                <p>
                  © {currentYear} سوق المشاريع الرقمية. جميع الحقوق محفوظة.
                </p>
                <p className="mt-1">
                  تمكين رواد الأعمال الرقميين حول العالم منذ 2024.
                </p>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6 text-slate-400 text-xs md:text-sm">
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  الشروط
                </Link>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  الخصوصية
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  اتصل بنا
                </Link>
                <div className="w-px h-4 bg-slate-600"></div>
                <span className="text-xs">
                  صُنع بـ ❤️ لرواد الأعمال
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;