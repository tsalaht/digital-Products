'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, User, Menu, X, Bell, Home, Grid, TrendingUp, Building2, FolderOpen, Receipt } from 'lucide-react';
import NotificationCenter from './notifications/NotificationCenter';
import { useNotifications } from '@/contexts/NotificationContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { getUnreadCount } = useNotifications();

  const navLinks = [
    { href: '/', label: 'الرئيسية', icon: Home },
    { href: '/projects', label: 'تصفح المشاريع', icon: Grid },
    { href: '/profitable-projects', label: 'مشاريع تحقق عوائد شهرية', icon: TrendingUp },
    { href: '/enterprise-solutions', label: 'انظمه وبرامج حلول للشركات', icon: Building2 },
    { href: '/transactions', label: 'المعاملات', icon: Receipt },
  
  ];

  return (
    <nav className="bg-white/98 backdrop-blur-xl shadow-lg border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-full  px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              م
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="group flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm relative overflow-hidden"
              >
                <link.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className={`relative w-full transition-all duration-300 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <input
                type="text"
                placeholder="ابحث عن المشاريع..."
                className={`w-full pr-12 pl-4 py-3.5 border rounded-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm placeholder-slate-400 text-slate-700 ${
                  isSearchFocused 
                    ? 'border-blue-400 ring-2 ring-blue-500/20 shadow-lg bg-white' 
                    : 'border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md hover:bg-white'
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className={`absolute right-4 top-4 h-5 w-5 transition-all duration-200 ${
                isSearchFocused ? 'text-blue-500' : 'text-slate-400'
              }`} />
              {isSearchFocused && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-2xl animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 space-x-reverse">
            {/* Notification Button */}
            <button 
              onClick={() => setIsNotificationOpen(true)}
              className="relative p-3 text-slate-600 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50/80 backdrop-blur-sm group shadow-sm hover:shadow-md"
            >
              <Bell className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
              {getUnreadCount() > 0 && (
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-lg">
                  {getUnreadCount() > 99 ? '99+' : getUnreadCount()}
                </div>
              )}
            </button>
            
            {/* تسجيل الدخول - Premium Design */}
            <Link 
              href="/login" 
              className="group relative px-10 py-2 bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:from-slate-100 hover:to-slate-50 hover:border-slate-300 hover:text-slate-800 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-sm overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100/0 via-slate-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2.5 font-semibold">
                <User className="w-9 h-w-9 transition-transform duration-300 group-hover:scale-110" />
                تسجيل الدخول
              </span>
            </Link>
            
            {/* إنشاء حساب - Premium Design */}
            <Link 
              href="/register" 
              className="group relative px-10 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2.5 font-semibold">
                <User className="w-9 h-w-9 transition-transform duration-300 group-hover:scale-110" />
                إنشاء حساب
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-slate-600 hover:text-slate-900 transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm group shadow-sm hover:shadow-md"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 transition-all duration-300 group-hover:scale-110" /> : 
                <Menu className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن المشاريع..."
              className="w-full pr-12 pl-4 py-3.5 border border-slate-300 rounded-2xl bg-white/95 backdrop-blur-sm placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <Search className="absolute right-4 top-4 h-5 w-5 text-slate-400" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-slate-200/60">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-4 px-4 py-3.5 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-xl hover:bg-slate-50/80 backdrop-blur-sm relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
                
                <hr className="my-4 border-slate-200" />
                
                {/* تسجيل الدخول - Mobile Premium */}
                <Link 
                  href="/login" 
                  className="group relative px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:from-slate-100 hover:to-slate-50 hover:border-slate-300 hover:text-slate-800 transition-all duration-300 text-center mx-2 mt-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-100/0 via-slate-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2.5 font-semibold">
                    <User className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    تسجيل الدخول
                  </span>
                </Link>
                
                {/* إنشاء حساب - Mobile Premium */}
                <Link 
                  href="/register" 
                  className="group relative px-6 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-3xl text-center mx-2 overflow-hidden hover:scale-105 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2.5 font-semibold">
                    <User className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    إنشاء حساب
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Notification Center Modal */}
      <NotificationCenter 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;