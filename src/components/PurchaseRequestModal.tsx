'use client';

import { useState } from 'react';
import { X, DollarSign, MessageCircle, User, AlertCircle, CheckCircle } from 'lucide-react';
import { Project } from '@/data/projects';
import { formatCurrency, generateId, storage } from '@/utils/helpers';
import { STORAGE_KEYS, NOTIFICATION_TYPES } from '@/constants';

interface PurchaseRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const PurchaseRequestModal = ({ isOpen, onClose, project }: PurchaseRequestModalProps) => {
  const [offerData, setOfferData] = useState({
    amount: '',
    message: '',
    buyerName: '',
    buyerEmail: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create purchase request object
      const purchaseRequest = {
        id: generateId(),
        projectId: project.id,
        projectTitle: project.title,
        sellerId: project.seller.name,
        sellerName: project.seller.name,
        buyerName: offerData.buyerName,
        buyerEmail: offerData.buyerEmail,
        offeredAmount: parseFloat(offerData.amount),
        message: offerData.message,
        status: 'pending',
        requestDate: new Date().toISOString(),
        projectPrice: project.price
      };
      
      // Store purchase request
      const existingRequests: any[] = storage.get(STORAGE_KEYS.PURCHASE_REQUESTS) || [];
      existingRequests.push(purchaseRequest);
      storage.set(STORAGE_KEYS.PURCHASE_REQUESTS, existingRequests);
      
      // Create notification for seller
      const sellerNotification = {
        id: generateId(),
        type: NOTIFICATION_TYPES.PURCHASE_REQUEST,
        title: 'طلب شراء جديد! 🎉',
        message: `تهانينا! تم إرسال طلب شراء من ${offerData.buyerName} لمشروعك بمبلغ $${offerData.amount}. هل تريد إتمام هذه الصفقة بسرعة؟`,
        sellerId: project.seller.name,
        buyerName: offerData.buyerName,
        amount: parseFloat(offerData.amount),
        projectTitle: project.title,
        isRead: false,
        createdAt: new Date().toISOString(),
        requestId: purchaseRequest.id
      };
      
      // Store notification
      const existingNotifications: any[] = storage.get(STORAGE_KEYS.NOTIFICATIONS) || [];
      existingNotifications.push(sellerNotification);
      storage.set(STORAGE_KEYS.NOTIFICATIONS, existingNotifications);
      
      setIsSuccess(true);
      
      // Close modal after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setOfferData({ amount: '', message: '', buyerName: '', buyerEmail: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting purchase request:', error);
      alert('حدث خطأ أثناء إرسال طلب الشراء. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price: number) => formatCurrency(price);

  if (!isOpen) return null;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">تم إرسال طلبك بنجاح! ✅</h3>
          <p className="text-gray-600 mb-4">
            تم إرسال طلب الشراء إلى البائع. سيتم إشعارك عند الرد على طلبك.
          </p>
          <div className="animate-pulse text-blue-600 text-sm">
            جاري إغلاق النافذة...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <DollarSign className="w-7 h-7 text-green-600" />
            طلب شراء المشروع
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Info */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">البائع: {project.seller.name}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(project.price)}
                </span>
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                  السعر الأصلي
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex">
              <AlertCircle className="w-5 h-5 text-yellow-400 ml-2 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-yellow-800">نظام المزاد المتقدم</h4>
                <p className="text-yellow-700 text-sm mt-1">
                  يمكنك عرض سعرك المناسب للمشروع. البائع سيراجع عرضك وقد يقبله أو يرفضه أو ينتظر عروض أفضل.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                اسمك الكامل *
              </label>
              <div className="relative">
                <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={offerData.buyerName}
                  onChange={(e) => setOfferData({...offerData, buyerName: e.target.value})}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={offerData.buyerEmail}
                onChange={(e) => setOfferData({...offerData, buyerEmail: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Offer Amount */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              السعر المقترح (بالدولار الأمريكي) *
            </label>
            <div className="relative">
              <DollarSign className="absolute right-3 top-3 h-5 w-5 text-green-600" />
              <input
                type="number"
                required
                min="1"
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-bold"
                value={offerData.amount}
                onChange={(e) => setOfferData({...offerData, amount: e.target.value})}
                placeholder="أدخل السعر المقترح"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              السعر الأصلي: {formatPrice(project.price)}
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              رسالة للبائع (اختياري)
            </label>
            <div className="relative">
              <MessageCircle className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                rows={4}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                value={offerData.message}
                onChange={(e) => setOfferData({...offerData, message: e.target.value})}
                placeholder="اكتب رسالة للبائع توضح فيها اهتمامك بالمشروع..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                جاري إرسال الطلب...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" />
                إرسال طلب الشراء
              </div>
            )}
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center">
            بإرسال هذا الطلب، أنت توافق على شروط الخدمة وسياسة الخصوصية للمنصة
          </p>
        </form>
      </div>
    </div>
  );
};

export default PurchaseRequestModal;