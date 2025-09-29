'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  User, 
  Mail, 
  Phone, 
  Edit,
  Settings,
  Heart,
  ShoppingBag,
  Star,
  DollarSign,
  Save,
  Camera
} from 'lucide-react';

const BuyerProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    country: 'المملكة العربية السعودية',
    city: 'الرياض',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinDate: '2024-01-15',
    totalPurchases: 12,
    totalSpent: 45000,
    favoriteProjects: 8,
    membershipLevel: 'ذهبي',
    rating: 4.9
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile saved:', profileData);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: User },
    { id: 'purchases', label: 'مشترياتي', icon: ShoppingBag },
    { id: 'favorites', label: 'المفضلة', icon: Heart },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-8" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-2xl shadow-lg ring-4 ring-white"
                />
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center mt-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  profileData.membershipLevel === 'ذهبي' 
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white' 
                    : 'bg-gray-100 text-gray-700'
                } shadow-md`}>
                  عضو {profileData.membershipLevel}
                </span>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 text-slate-700 font-bold rounded-xl hover:bg-white hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  {isEditing ? 'إلغاء' : 'تعديل'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <ShoppingBag className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">{profileData.totalPurchases}</div>
                  <div className="text-sm text-blue-700">المشتريات</div>
                </div>
                
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-900">${profileData.totalSpent.toLocaleString()}</div>
                  <div className="text-sm text-emerald-700">إجمالي الإنفاق</div>
                </div>
                
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-900">{profileData.favoriteProjects}</div>
                  <div className="text-sm text-red-700">المفضلة</div>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-900">{profileData.rating}</div>
                  <div className="text-sm text-amber-700">التقييم</div>
                </div>
              </div>

              {/* Contact Info */}
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                    placeholder="الاسم الكامل"
                  />
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                    placeholder="البريد الإلكتروني"
                  />
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                    placeholder="رقم الهاتف"
                  />
                  <input
                    type="text"
                    value={profileData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md placeholder-slate-400"
                    placeholder="المدينة"
                  />
                  <div className="md:col-span-2">
                    <button
                      onClick={handleSaveProfile}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-500 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <Save className="w-5 h-5" />
                      حفظ التغييرات
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail className="w-5 h-5" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="w-5 h-5" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <User className="w-5 h-5" />
                    <span>{profileData.city}, {profileData.country}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8">
          <div className="bg-slate-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-inner mb-8">
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-5">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 sm:px-4 py-3 rounded-3xl font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                      activeTab === tab.id
                        ? 'bg-[#7EE7FC] text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'overview' && (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">نظرة عامة على الملف الشخصي</h3>
                <p className="text-slate-500">مرحباً بك في لوحة تحكم ملفك الشخصي كمشتري.</p>
              </div>
            )}
            
            {activeTab === 'purchases' && (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">تاريخ المشتريات</h3>
                <p className="text-slate-500">ستظهر هنا سجل مشترياتك.</p>
              </div>
            )}
            
            {activeTab === 'favorites' && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">المشاريع المفضلة</h3>
                <p className="text-slate-500">ستظهر هنا مشاريعك المفضلة.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">إعدادات الحساب</h3>
                <p className="text-slate-500">إدارة إعدادات حسابك وتفضيلاتك.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfilePage;