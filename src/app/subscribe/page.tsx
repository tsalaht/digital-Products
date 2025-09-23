'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle, 
  Calendar, 
  Eye, 
  MessageCircle, 
  Bell, 
  DollarSign,
  CreditCard,
  ArrowLeft,
  Sparkles,
  Shield,
  Star,
  Clock
} from 'lucide-react';
import { storage } from '@/utils/helpers';
import { STORAGE_KEYS, SUBSCRIPTION_PLANS } from '@/constants';

const SubscribePage = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState({
    plan: SUBSCRIPTION_PLANS.BASIC.id,
    duration: SUBSCRIPTION_PLANS.BASIC.duration,
    price: SUBSCRIPTION_PLANS.BASIC.price
  });

  const handleSubscribe = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store subscription data
      const subscriptionInfo = {
        subscribed: true,
        subscriptionDate: new Date().toISOString(),
        expiryDate: new Date(Date.now() + subscriptionData.duration * 24 * 60 * 60 * 1000).toISOString(),
        plan: subscriptionData.plan,
        amount: subscriptionData.price,
        projectApproved: true
      };
      
      storage.set(STORAGE_KEYS.SELLER_SUBSCRIPTION, subscriptionInfo);
      
      // Redirect to seller profile or success page
      router.push('/profile/seller?subscribed=true');
      
    } catch (error) {
      console.error('Subscription error:', error);
      alert('حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/register/seller" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للتسجيل
          </Link>
        </div>

        {/* Main Subscription Card */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gradient-to-r from-blue-200 to-purple-200 overflow-hidden">
          {/* Header with Celebration */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center py-8 px-6">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse mr-2" />
              <h1 className="text-2xl md:text-3xl font-bold">
                🎉 اشترك الآن لعرض مشروعك 🎉
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse ml-2" />
            </div>
            <p className="text-blue-100 text-lg">
              خطوة واحدة فقط تفصلك عن النجاح!
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Main Message */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-l-4 border-orange-400 mb-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  لموافقة منصتنا على مشروعك، يجب عليك الاشتراك في خطة عرض المشاريع 
                  <span className="font-bold text-orange-600"> لمدة شهر كامل</span>
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: <Calendar className="w-5 h-5 text-green-600" />, text: "مدة العرض: 30 يوماً كاملة" },
                { icon: <Eye className="w-5 h-5 text-blue-600" />, text: "مشروعك مرئي لجميع الزوار" },
                { icon: <MessageCircle className="w-5 h-5 text-purple-600" />, text: "استقبال طلبات الشراء" },
                { icon: <Bell className="w-5 h-5 text-orange-600" />, text: "إشعارات فورية عند وصول العروض" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-lg">✅ {feature.text}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <span className="text-3xl font-bold text-green-700">$14</span>
                  <span className="text-gray-600 text-lg">للخطة الأساسية</span>
                </div>
                <p className="text-green-600 font-medium">خطة شهرية واحدة فقط</p>
              </div>
            </div>

            {/* Subscription Button */}
            <div className="text-center mb-6">
              <button
                onClick={handleSubscribe}
                disabled={isProcessing}
                className="btn-primary bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    جاري المعالجة...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6" />
                    اشترك الآن
                  </div>
                )}
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-center space-y-3">
              <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                *العرض صالح لمشروع واحد فقط
              </p>
              <p className="text-gray-500 text-xs">
                بالضغط على "اشترك الآن" أنت توافق على شروط الخدمة وسياسة الخصوصية
              </p>
            </div>

            {/* Benefits Summary */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                🚀 لماذا تختار منصتنا؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "جودة عالية" },
                  { icon: <Shield className="w-5 h-5 text-green-500" />, text: "أمان مضمون" },
                  { icon: <Clock className="w-5 h-5 text-blue-500" />, text: "دعم 24/7" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    {benefit.icon}
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">يثق بنا آلاف البائعين حول العالم</p>
          <div className="flex justify-center items-center gap-4 opacity-60">
            <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
              SSL
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
              256-bit
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
              Secure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;