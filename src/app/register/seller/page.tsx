'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Lock, 
  Upload, 
  DollarSign,
  TrendingUp,
  FileText,
  Code,
  ArrowLeft,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Plus,
  X,
  Video,
  Play,
  Youtube,
  CreditCard,
  Megaphone,
  Shield,
  FileCheck,
  ExternalLink,
  Calendar,
  UserCheck,
  Building,
  Key
} from 'lucide-react';
import { storage } from '@/utils/helpers';
import { STORAGE_KEYS, COUNTRIES, PROGRAMMING_SKILLS, PROJECT_TYPES } from '@/constants';

const SellerRegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    country: '',
    description: '',
    password: '',
    confirmPassword: '',
    profileImage: null as File | null,
    
    // Skills
    programmingSkills: [] as string[],
    
    // Project Info
    projectTitle: '',
    projectShortDescription: '',
    projectDetailedDescription: '',
    projectType: '',
    projectPrice: '',
    projectUrl: '',
    projectImages: [] as File[],
    
    // Video Info
    projectVideo: null as File | null,
    youtubeUrl: '',
    
    // Revenue Info
    hasRevenue: null as boolean | null, // null = not answered, true = has revenue, false = no revenue
    revenueType: '', // 'subscriptions' or 'ads'
    
    // Subscription Revenue Documents
    financialDocuments: [] as File[], // Last 6 months documents
    paymentGatewayContracts: [] as File[], // Payment gateway contracts
    identityDocument: null as File | null, // ID document
    domainOwnershipProof: null as File | null, // Domain ownership proof
    
    // Ads Revenue Integration
    admobApiKey: '',
    appodealApiKey: '',
    selectedAdNetwork: '', // 'admob' or 'appodeal'
    
    // Documents (for revenue projects)
    documents: [] as File[],
    
    // Terms
    acceptTerms: false
  });

  // New state for UI control
  const [revenueStep, setRevenueStep] = useState(0); // 0 = question, 1 = revenue type, 2 = verification

  const countries = COUNTRIES;

  const programmingSkillsOptions = PROGRAMMING_SKILLS;

  const projectTypes = PROJECT_TYPES;

  const revenueTypes = [
    'اشتراكات',
    'إعلانات'
  ];

  const handleInputChange = (field: string, value: string | boolean | number | File | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      programmingSkills: prev.programmingSkills.includes(skill)
        ? prev.programmingSkills.filter(s => s !== skill)
        : [...prev.programmingSkills, skill]
    }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files) {
      if (field === 'profileImage') {
        handleInputChange(field, files[0]);
      } else {
        handleInputChange(field, Array.from(files));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store form data temporarily
    storage.set(STORAGE_KEYS.SELLER_REGISTRATION, formData);
    
    // Redirect to subscription page
    router.push('/subscribe');
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-soft-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-success-100 text-success-800 px-4 py-2 rounded-full inline-flex items-center mb-4">
            <User className="w-5 h-5 ml-2" />
            إنشاء حساب البائع
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            انضم كبائع محترف
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            أكمل البيانات التالية لإنشاء حسابك كبائع وابدأ في بيع مشاريعك الرقمية
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-primary-600" />
              المعلومات الشخصية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    className="input-field pr-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الجوال *
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    className="input-field pr-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  البلد *
                </label>
                <div className="relative">
                  <Globe className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    required
                    className="input-field pr-10 appearance-none"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                  >
                    <option value="">اختر البلد</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                وصف مختصر عنك *
              </label>
              <textarea
                required
                rows={4}
                className="input-field"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="اكتب نبذة مختصرة عن خبرتك ومهاراتك..."
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                صورة الملف الشخصي
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors duration-200">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">اضغط لرفع صورة أو اسحبها هنا</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="profileImage"
                  onChange={(e) => handleFileUpload('profileImage', e.target.files)}
                />
                <label htmlFor="profileImage" className="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 text-slate-700 font-bold rounded-2xl hover:bg-white hover:border-slate-300 hover:text-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer inline-flex items-center justify-center">
                  اختر صورة
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  كلمة المرور *
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    className="input-field pr-10"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="كلمة مرور قوية"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تأكيد كلمة المرور *
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    className="input-field pr-10"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="أعد كتابة كلمة المرور"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Programming Skills */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary-600" />
              مهارات البرمجة
            </h2>
            
            <p className="text-gray-600 mb-4">اختر المهارات والتقنيات التي تجيدها:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {programmingSkillsOptions.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className={`p-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    formData.programmingSkills.includes(skill)
                      ? 'bg-primary-100 border-primary-300 text-primary-800'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-primary-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Project Information */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary-600" />
              تفاصيل المشروع
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان المشروع *
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  value={formData.projectTitle}
                  onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                  placeholder="أدخل عنوان المشروع"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وصف مختصر *
                </label>
                <textarea
                  required
                  rows={3}
                  className="input-field"
                  value={formData.projectShortDescription}
                  onChange={(e) => handleInputChange('projectShortDescription', e.target.value)}
                  placeholder="وصف مختصر للمشروع في سطرين"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وصف تفصيلي *
                </label>
                <textarea
                  required
                  rows={6}
                  className="input-field"
                  value={formData.projectDetailedDescription}
                  onChange={(e) => handleInputChange('projectDetailedDescription', e.target.value)}
                  placeholder="اكتب وصفاً تفصيلياً عن المشروع وميزاته..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع المشروع *
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="input-field appearance-none"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                    >
                      <option value="">اختر نوع المشروع</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السعر بالدولار *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      required
                      min="100"
                      className="input-field pr-10"
                      value={formData.projectPrice}
                      onChange={(e) => handleInputChange('projectPrice', e.target.value)}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رابط المشروع (اختياري)
                </label>
                <input
                  type="url"
                  className="input-field"
                  value={formData.projectUrl}
                  onChange={(e) => handleInputChange('projectUrl', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          {/* Project Video Section */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Video className="w-6 h-6 text-red-600" />
              فيديو تعريفي للمشروع
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  رفع فيديو تعريفي (اختياري)
                </label>
                <div className="border-2 border-dashed border-red-200 rounded-2xl p-8 text-center hover:border-red-400 transition-all duration-300 bg-gradient-to-br from-red-50 to-pink-50">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-red-900 mb-2">ارفع فيديو من جهازك</h3>
                  <p className="text-red-700 mb-4 text-sm">
                    حجم الملف الأقصى: 100 ميجا<br/>
                    الصيغ المدعومة: MP4, MOV, AVI
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    id="projectVideo"
                    onChange={(e) => handleFileUpload('projectVideo', e.target.files)}
                  />
                  <label htmlFor="projectVideo" className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer inline-flex items-center">
                    <Upload className="w-5 h-5 ml-2" />
                    اختر فيديو
                  </label>
                  {formData.projectVideo && (
                    <div className="mt-3 p-3 bg-red-100 rounded-lg">
                      <p className="text-red-800 text-sm font-medium">
                        تم رفع: {formData.projectVideo.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* YouTube Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  رابط فيديو YouTube (اختياري)
                </label>
                <div className="border-2 border-dashed border-red-200 rounded-2xl p-8 text-center bg-gradient-to-br from-red-50 to-pink-50">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-900 mb-2">ربط فيديو YouTube</h3>
                  <p className="text-red-700 mb-4 text-sm">
                    ضع رابط فيديو YouTube الخاص بمشروعك
                  </p>
                  <div className="relative">
                    <Youtube className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                    <input
                      type="url"
                      className="w-full pr-10 pl-4 py-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                      value={formData.youtubeUrl}
                      onChange={(e) => handleInputChange('youtubeUrl', e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>
                  {formData.youtubeUrl && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4 text-red-600" />
                      <a 
                        href={formData.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        معاينة الفيديو
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">نصائح للفيديو التعريفي:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• مدة الفيديو يُفضل أن تكون من 1-3 دقائق</li>
                    <li>• اعرض الميزات الرئيسية للمشروع</li>
                    <li>• استخدم صوت واضح وجودة فيديو جيدة</li>
                    <li>• اعرض واجهة المشروع والتفاعل معها</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Revenue Verification */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-success-600" />
              التحقق من العوائد الشهرية
            </h2>
            
            {/* Step 1: Revenue Question */}
            {revenueStep === 0 && (
              <div className="text-center">
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">هل مشروعك يحقق عوائد شهرية؟</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    المشاريع التي تحقق أرباحاً شهرية لها أولوية أعلى في المنصة ويتم عرضها كـ "مشاريع مربحة"
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                  <button
                    type="button"
                    onClick={() => {
                      console.log('يحقق أرباح clicked - INSIDE FORM');
                      setFormData(prev => ({ ...prev, hasRevenue: true }));
                      setRevenueStep(1);
                    }}
                    className="flex-1 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">يحقق أرباح</h4>
                    <p className="text-gray-600 text-xs">مشروعي يحقق عوائد شهرية مستمرة</p>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      console.log('لا يحقق أرباح clicked - INSIDE FORM');
                      setFormData(prev => ({ ...prev, hasRevenue: false }));
                      setRevenueStep(0);
                    }}
                    className="flex-1 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <X className="w-5 h-5 text-gray-600" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">لا يحقق أرباح</h4>
                    <p className="text-gray-600 text-xs">مشروعي لا يحقق عوائد شهرية حالياً</p>
                  </button>
                </div>
                
                {formData.hasRevenue === false && (
                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl max-w-2xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      <h4 className="font-bold text-blue-900">ممتاز!</h4>
                    </div>
                    <p className="text-blue-800 text-sm">
                      يمكنك المتابعة لإكمال باقي بيانات التسجيل. المشاريع غير المربحة مرحب بها أيضاً في منصتنا.
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 2: Revenue Type Selection */}
            {revenueStep === 1 && formData.hasRevenue === true && (
              <div>
                <div className="text-center mb-8">
                  <button
                    type="button"
                    onClick={() => setRevenueStep(0)}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    العودة للسؤال السابق
                  </button>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ما هو نوع الأرباح في مشروعك؟</h3>
                  <p className="text-gray-600">اختر نوع الأرباح لتحديد طريقة التحقق المناسبة</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('revenueType', 'subscriptions');
                      setRevenueStep(2);
                    }}
                    className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 group text-right"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <CreditCard className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">اشتراكات</h4>
                    <p className="text-blue-700 text-sm mb-4">
                      الأرباح تأتي من اشتراكات المستخدمين الشهرية أو السنوية
                    </p>
                    <div className="text-right">
                      <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                        يتطلب مستندات مالية
                      </span>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('revenueType', 'ads');
                      setRevenueStep(2);
                    }}
                    className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-300 group text-right"
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <Megaphone className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-green-900 mb-3">إعلانات</h4>
                    <p className="text-green-700 text-sm mb-4">
                      الأرباح تأتي من شبكات الإعلانات مثل AdMob أو Appodeal
                    </p>
                    <div className="text-right">
                      <span className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full">
                        ربط تلقائي عبر API
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Verification Process */}
            {revenueStep === 2 && formData.revenueType && (
              <div>
                <div className="text-center mb-8">
                  <button
                    type="button"
                    onClick={() => setRevenueStep(1)}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    العودة لاختيار نوع الأرباح
                  </button>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {formData.revenueType === 'subscriptions' ? 'التحقق من أرباح الاشتراكات' : 'التحقق من أرباح الإعلانات'}
                  </h3>
                </div>
                
                {formData.revenueType === 'subscriptions' && (
                  <div className="space-y-8">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h4 className="flex items-center gap-3 font-bold text-blue-900 mb-4">
                        <Shield className="w-6 h-6" />
                        المستندات المطلوبة للتحقق من الاشتراكات
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">مستندات آخر 6 أشهر</p>
                            <p className="text-sm text-blue-700">تقارير الإيرادات الشهرية</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <FileCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">عقود بوابة الدفع</p>
                            <p className="text-sm text-blue-700">Stripe, PayPal, إلخ</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <UserCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">صورة الهوية الشخصية</p>
                            <p className="text-sm text-blue-700">هوية أو جواز سفر</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Building className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">إثبات ملكية الدومين</p>
                            <p className="text-sm text-blue-700">شهادة تسجيل النطاق</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* File Upload Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Financial Documents */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <Calendar className="w-4 h-4 inline ml-1" />
                          مستندات آخر 6 أشهر *
                        </label>
                        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                          <Upload className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-blue-600 mb-2 text-sm">رفع تقارير الإيرادات</p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            id="financialDocuments"
                            onChange={(e) => handleFileUpload('financialDocuments', e.target.files)}
                          />
                          <label htmlFor="financialDocuments" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                            اختر ملفات
                          </label>
                        </div>
                      </div>
                      
                      {/* Payment Gateway Contracts */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <FileCheck className="w-4 h-4 inline ml-1" />
                          عقود بوابة الدفع *
                        </label>
                        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                          <Upload className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-blue-600 mb-2 text-sm">عقود Stripe, PayPal</p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            id="paymentContracts"
                            onChange={(e) => handleFileUpload('paymentGatewayContracts', e.target.files)}
                          />
                          <label htmlFor="paymentContracts" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                            اختر ملفات
                          </label>
                        </div>
                      </div>
                      
                      {/* Identity Document */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <UserCheck className="w-4 h-4 inline ml-1" />
                          صورة الهوية الشخصية *
                        </label>
                        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                          <Upload className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-blue-600 mb-2 text-sm">هوية أو جواز سفر</p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            id="identityDoc"
                            onChange={(e) => handleFileUpload('identityDocument', e.target.files)}
                          />
                          <label htmlFor="identityDoc" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                            اختر ملف
                          </label>
                        </div>
                      </div>
                      
                      {/* Domain Ownership */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <Building className="w-4 h-4 inline ml-1" />
                          إثبات ملكية الدومين *
                        </label>
                        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                          <Upload className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-blue-600 mb-2 text-sm">شهادة تسجيل النطاق</p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            id="domainProof"
                            onChange={(e) => handleFileUpload('domainOwnershipProof', e.target.files)}
                          />
                          <label htmlFor="domainProof" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm cursor-pointer hover:bg-blue-600 transition-colors duration-200">
                            اختر ملف
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-green-900">التحقق التلقائي</h4>
                      </div>
                      <p className="text-green-800 text-sm">
                        بعد رفع جميع المستندات، سيتم التحقق من الإيرادات خلال 24-48 ساعة وسيتم إشعارك بالنتيجة.
                      </p>
                    </div>
                  </div>
                )}
                
                {formData.revenueType === 'ads' && (
                  <div className="space-y-8">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h4 className="flex items-center gap-3 font-bold text-green-900 mb-4">
                        <Megaphone className="w-6 h-6" />
                        ربط شبكة الإعلانات للتحقق التلقائي
                      </h4>
                      <p className="text-green-800 text-sm mb-4">
                        اختر شبكة الإعلانات المستخدمة في مشروعك وادخل مفتاح API للتحقق التلقائي من الأرباح
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <button
                        type="button"
                        onClick={() => handleInputChange('selectedAdNetwork', 'admob')}
                        className={`p-6 border-2 rounded-xl transition-all duration-200 text-right ${
                          formData.selectedAdNetwork === 'admob'
                            ? 'border-green-400 bg-green-50'
                            : 'border-gray-200 hover:border-green-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Megaphone className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Google AdMob</h4>
                            <p className="text-green-600 text-sm">ربط عبر AdMob API</p>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleInputChange('selectedAdNetwork', 'appodeal')}
                        className={`p-6 border-2 rounded-xl transition-all duration-200 text-right ${
                          formData.selectedAdNetwork === 'appodeal'
                            ? 'border-green-400 bg-green-50'
                            : 'border-gray-200 hover:border-green-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Megaphone className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Appodeal</h4>
                            <p className="text-green-600 text-sm">ربط عبر Appodeal API</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {formData.selectedAdNetwork && (
                      <div className="bg-white border border-green-200 rounded-xl p-6">
                        <h5 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                          <Key className="w-5 h-5 text-green-600" />
                          مفتاح API لـ {formData.selectedAdNetwork === 'admob' ? 'AdMob' : 'Appodeal'}
                        </h5>
                        <div className="relative">
                          <Key className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                          <input
                            type="text"
                            className="w-full pr-10 pl-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                            value={formData.selectedAdNetwork === 'admob' ? formData.admobApiKey : formData.appodealApiKey}
                            onChange={(e) => handleInputChange(
                              formData.selectedAdNetwork === 'admob' ? 'admobApiKey' : 'appodealApiKey', 
                              e.target.value
                            )}
                            placeholder={`أدخل مفتاح ${formData.selectedAdNetwork === 'admob' ? 'AdMob' : 'Appodeal'} API`}
                          />
                        </div>
                        <p className="text-green-600 text-sm mt-3">
                          سيتم استخدام هذا المفتاح للتحقق التلقائي من أرباح الإعلانات وتحديثها بشكل دوري.
                        </p>
                      </div>
                    )}
                    
                    <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-green-900">التحقق الفوري</h4>
                      </div>
                      <p className="text-green-800 text-sm">
                        بمجرد إدخال مفتاح API الصحيح، سيتم التحقق من الأرباح فوراً وتحديث بيانات المشروع تلقائياً.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="card">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1 cursor-pointer"
                checked={formData.acceptTerms}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
                }}
              />
              <div className="text-gray-700">
                أوافق على{' '}
                <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium">
                  الشروط والأحكام
                </Link>
                {' '}و{' '}
                <Link href="/privacy" className="text-green-600 hover:text-green-700 font-medium">
                  سياسة الخصوصية
                </Link>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button
              type="submit"
              disabled={!formData.acceptTerms}
              className="w-full sm:w-64 h-14 bg-green-600 text-white font-bold rounded-xl text-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <CheckCircle className="w-6 h-6" />
              <span>إنشاء الحساب</span>
            </button>
            
            <Link href="/register" className="w-full sm:w-48 h-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-600 font-medium rounded-full hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 ml-2" />
              العودة
            </Link>
          </div>
        </form>


        {/* Already have account */}
        <div className="text-center mt-8 pt-8 border-t border-soft-border">
          <p className="text-gray-600 mb-4">هل لديك حساب بالفعل؟</p>
          <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerRegisterPage;