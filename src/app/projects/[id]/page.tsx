'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  TrendingUp, 
  CheckCircle, 
  DollarSign, 
  Eye, 
  ExternalLink, 
  MessageCircle,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Play,
  BarChart3,
  Globe,
  Users,
  Calendar,
  Shield,
  Award,
  Code,
  Zap,
  ShoppingCart
} from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import PurchaseRequestModal from '@/components/PurchaseRequestModal';

interface ProjectDetailPageProps {
  params: { id: string };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const projectId = parseInt(params.id);
  const project = featuredProjects.find(p => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">المشروع غير موجود</h1>
          <Link href="/" className="btn-primary">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-SA').format(num);
  };

  // Gallery images (using the same image for demo)
  const galleryImages = [
    project.image,
    project.image,
    project.image,
    project.image
  ];

  const faqs = [
    {
      question: "هل المشروع جاهز للتشغيل المباشر؟",
      answer: "نعم، المشروع جاهز تماماً ويمكن تشغيله مباشرة بعد الشراء مع توفير الدعم الفني اللازم."
    },
    {
      question: "ما هي طريقة التسليم؟",
      answer: "يتم تسليم المشروع خلال 24-48 ساعة عبر البريد الإلكتروني مع جميع الملفات والوثائق المطلوبة."
    },
    {
      question: "هل يشمل السعر الكود المصدري؟",
      answer: "نعم، السعر يشمل الكود المصدري كاملاً مع التوثيق والتعليمات التفصيلية."
    },
    {
      question: "هل توفرون دعم فني بعد الشراء؟",
      answer: "نعم، نوفر دعم فني مجاني لمدة شهر واحد بعد الشراء لضمان التشغيل السليم."
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "أحمد محمد",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      rating: 5,
      comment: "مشروع ممتاز وخدمة عملاء رائعة. أنصح بشدة!",
      date: "منذ أسبوعين"
    },
    {
      id: 2,
      user: "فاطمة أحمد",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      rating: 4,
      comment: "جودة عالية وكود نظيف. سأشتري مرة أخرى.",
      date: "منذ شهر"
    },
    {
      id: 3,
      user: "خالد السعيد",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      rating: 5,
      comment: "يحقق العائد المطلوب تماماً كما هو موعود.",
      date: "منذ شهرين"
    }
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Project Header */}
      <div className="bg-white border-b border-soft-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/projects" className="hover:text-primary-600">المشاريع</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-gray-900">{project.title}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {project.verified && (
                    <div className="badge-success flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      موثق
                    </div>
                  )}
                  {project.profitable && (
                    <div className="badge-warning flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      مربح
                    </div>
                  )}
                  <span className="badge-primary">{project.category}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-warning-400 text-warning-400" />
                  <span className="font-medium">{project.rating}</span>
                  <span className="text-gray-500">({formatNumber(project.reviews)} تقييم)</span>
                </div>
                {project.statistics && (
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span>{formatNumber(project.statistics.visitors)} زائر</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>محدث مؤخراً</span>
                </div>
              </div>
            </div>

            <div className="lg:w-80">
              <div className="card">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {formatPrice(project.price)}
                </div>
                {project.monthlyRevenue && (
                  <div className="bg-success-50 border border-success-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-success-800">العائد الشهري</span>
                      <span className="text-success-700 font-bold">
                        {formatPrice(project.monthlyRevenue)}/شهر
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-3">
                  <Link href={`/projects/${project.id}/purchase`} className="btn-primary w-full">
                    <DollarSign className="w-5 h-5 ml-2" />
                    شراء المشروع
                  </Link>
                  <button className="btn-secondary w-full">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    تواصل مع البائع
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 p-3 border border-soft-border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <Heart className="w-5 h-5 mx-auto text-gray-600" />
                    </button>
                    <button className="flex-1 p-3 border border-soft-border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <Share2 className="w-5 h-5 mx-auto text-gray-600" />
                    </button>
                    {project.demoUrl && (
                      <Link 
                        href={project.demoUrl}
                        target="_blank"
                        className="flex-1 p-3 border border-soft-border rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 mx-auto text-gray-600" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Seller Info */}
              <div className="card mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={project.seller.avatar}
                    alt={project.seller.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{project.seller.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 fill-warning-400 text-warning-400" />
                      <span>{project.seller.rating}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{project.seller.totalSales} مبيعات</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/checkout/escrow?projectId=${project.id}&offerId=1`}
                  className="btn-primary w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300"
                >
                  <Shield className="w-5 h-5" />
                  شراء آمن بضمان الوسيط
                </Link>
                
                {/* Escrow Protection Notice */}
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div className="text-sm text-green-700">
                      <h4 className="font-medium mb-1">حماية 100% للمشتري</h4>
                      <ul className="space-y-1">
                        <li>• أموالك محفوظة حتى تأكيد الاستلام</li>
                        <li>• فترة مراجعة 5 أيام للتحقق من المشروع</li>
                        <li>• استرداد كامل إذا لم يطابق المواصفات</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsPurchaseModalOpen(true)}
                  className="btn-secondary w-full mt-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  إرسال عرض مخصص
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex gap-8">
          <div className="lg:flex-1">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={galleryImages[currentImageIndex]}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-64 md:h-96 object-cover"
                />
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-soft transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-soft transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden ${
                        currentImageIndex === index ? 'ring-2 ring-primary-500' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt=""
                        width={80}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Tabs */}
            <div className="mb-8">
              <div className="tab-container">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: Globe },
                  { id: 'features', label: 'الميزات', icon: Zap },
                  { id: 'tech', label: 'التقنيات', icon: Code },
                  { id: 'analytics', label: 'الإحصائيات', icon: BarChart3 },
                  { id: 'reviews', label: 'التقييمات', icon: Star },
                  { id: 'faq', label: 'الأسئلة الشائعة', icon: MessageCircle }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'tab-active scale-105 animate-pulse'
                        : 'tab-inactive hover:scale-105'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 transition-all duration-300" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">وصف المشروع</h3>
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">{project.description}</p>
                    <p>
                      هذا المشروع تم تطويره باستخدام أحدث التقنيات والمعايير العالمية لضمان الأداء الأمثل والأمان.
                      يتميز بواجهة مستخدم احترافية وتجربة استخدام سلسة تلبي احتياجات العملاء المختلفة.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">الميزات الرئيسية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">التقنيات المستخدمة</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && project.statistics && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">إحصائيات الأداء</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="card text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {formatNumber(project.statistics.visitors)}
                      </div>
                      <div className="text-gray-600">زائر شهرياً</div>
                    </div>
                    <div className="card text-center">
                      <div className="text-3xl font-bold text-success-600 mb-2">
                        {project.statistics.conversionRate}%
                      </div>
                      <div className="text-gray-600">معدل التحويل</div>
                    </div>
                    <div className="card text-center">
                      <div className="text-3xl font-bold text-warning-600 mb-2">
                        {formatPrice(project.statistics.revenue[project.statistics.revenue.length - 1])}
                      </div>
                      <div className="text-gray-600">العائد الحالي</div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">تطور العائدات الشهرية</h4>
                    <div className="space-y-3">
                      {project.statistics.revenue.map((revenue, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600">الشهر {index + 1}</span>
                          <span className="font-bold text-gray-900">{formatPrice(revenue)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">تقييمات العملاء</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(project.rating) 
                                ? 'fill-warning-400 text-warning-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{project.rating}</span>
                      <span className="text-gray-500">({formatNumber(project.reviews)} تقييم)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="card">
                        <div className="flex items-start gap-4">
                          <Image
                            src={review.avatar}
                            alt={review.user}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-gray-900">{review.user}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating 
                                      ? 'fill-warning-400 text-warning-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="card">
                        <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Projects */}
          <div className="lg:w-80 mt-8 lg:mt-0">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">مشاريع مشابهة</h3>
              <div className="space-y-4">
                {featuredProjects
                  .filter(p => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/projects/${relatedProject.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          width={60}
                          height={45}
                          className="w-15 h-11 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-primary-600">
                            {relatedProject.title}
                          </h4>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-primary-600 font-bold text-sm">
                              {formatPrice(relatedProject.price)}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-warning-400 text-warning-400" />
                              <span className="text-xs text-gray-600">{relatedProject.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Purchase Request Modal */}
      <PurchaseRequestModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        project={project}
      />
    </div>
  );
};

export default ProjectDetailPage;