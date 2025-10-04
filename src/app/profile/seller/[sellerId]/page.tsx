'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft,
  Star,
  TrendingUp,
  CheckCircle,
  DollarSign,
  Eye,
  Shield,
  Award,
  Calendar,
  Users,
  MessageCircle,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  ThumbsUp,
  Heart,
  Share2,
  Filter,
  Search,
  Grid,
  List,
  ChevronDown,
  ExternalLink,
  Badge,
  Target,
  Zap,
  Crown,
  Trophy,
  Medal,
  Flag,
  BookOpen,
  Code,
  Palette,
  Database,
  Smartphone,
  Monitor,
  Server,
  User,
  Cloud
} from 'lucide-react';

interface Seller {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  title: string;
  description: string;
  location: string;
  joinDate: string;
  rating: number;
  totalSales: number;
  totalProjects: number;
  totalReviews: number;
  responseTime: string;
  completionRate: number;
  onTimeDelivery: number;
  repeatBuyers: number;
  languages: string[];
  skills: string[];
  certifications: string[];
  achievements: {
    title: string;
    description: string;
    icon: string;
    date: string;
  }[];
  socialLinks: {
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  stats: {
    monthlyRevenue: number;
    yearlyRevenue: number;
    averageProjectValue: number;
    topCategory: string;
    successRate: number;
  };
  rank: {
    level: string;
    points: number;
    nextLevel: string;
    progress: number;
  };
  recentProjects: {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string;
    status: string;
    rating: number;
    sales: number;
  }[];
  reviews: {
    id: string;
    buyer: {
      name: string;
      avatar: string;
    };
    rating: number;
    comment: string;
    date: string;
    project: string;
  }[];
}

const SellerProfilePage = ({ params }: { params: { sellerId: string } }) => {
  const [seller, setSeller] = useState<Seller | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock data - in real app, fetch from API
  useEffect(() => {
    const fetchSeller = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSeller({
        id: params.sellerId,
        name: 'أحمد محمد السيد',
        avatar: '/logo.png',
        coverImage: '/soft.jpg',
        title: 'مطور تطبيقات ويب متخصص',
        description: 'مطور تطبيقات ويب محترف مع أكثر من 5 سنوات من الخبرة في تطوير التطبيقات الحديثة. أتخصص في React, Node.js, و Python. لدي خبرة واسعة في تطوير تطبيقات التجارة الإلكترونية والأنظمة الإدارية.',
        location: 'الرياض، المملكة العربية السعودية',
        joinDate: '2020-03-15',
        rating: 4.9,
        totalSales: 127,
        totalProjects: 45,
        totalReviews: 89,
        responseTime: 'ساعتين',
        completionRate: 98,
        onTimeDelivery: 96,
        repeatBuyers: 78,
        languages: ['العربية', 'الإنجليزية'],
        skills: ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
        certifications: [
          'شهادة AWS Solutions Architect',
          'شهادة React Developer',
          'شهادة Node.js Professional'
        ],
        achievements: [
          {
            title: 'أفضل مطور للعام',
            description: 'حصلت على جائزة أفضل مطور للعام 2023',
            icon: 'trophy',
            date: '2023-12-01'
          },
          {
            title: 'مبيعات مليونية',
            description: 'تجاوزت حاجز المليون ريال في المبيعات',
            icon: 'target',
            date: '2023-10-15'
          },
          {
            title: 'عميل سعيد',
            description: 'حصلت على تقييم 5 نجوم من 50 عميل',
            icon: 'star',
            date: '2023-09-20'
          }
        ],
        socialLinks: {
          website: 'https://ahmed-dev.com',
          linkedin: 'https://linkedin.com/in/ahmed-dev',
          github: 'https://github.com/ahmed-dev',
          twitter: 'https://twitter.com/ahmed_dev'
        },
        stats: {
          monthlyRevenue: 45000,
          yearlyRevenue: 520000,
          averageProjectValue: 12000,
          topCategory: 'تطبيقات ويب',
          successRate: 98
        },
        rank: {
          level: 'خبير',
          points: 2450,
          nextLevel: 'أستاذ',
          progress: 75
        },
        recentProjects: [
          {
            id: '1',
            title: 'نظام إدارة متجر إلكتروني',
            image: '/apps.jpg',
            price: 15000,
            category: 'تطبيقات ويب',
            status: 'مكتمل',
            rating: 5,
            sales: 12
          },
          {
            id: '2',
            title: 'تطبيق جوال للمطاعم',
            image: '/soft.jpg',
            price: 25000,
            category: 'تطبيقات جوال',
            status: 'مكتمل',
            rating: 4.9,
            sales: 8
          },
          {
            id: '3',
            title: 'منصة تعليمية متقدمة',
            image: '/complet.png',
            price: 35000,
            category: 'تطبيقات ويب',
            status: 'قيد التطوير',
            rating: 0,
            sales: 0
          }
        ],
        reviews: [
          {
            id: '1',
            buyer: {
              name: 'محمد علي',
              avatar: '/logo.png'
            },
            rating: 5,
            comment: 'عمل ممتاز ومهني جداً. تم التسليم في الوقت المحدد وبجودة عالية.',
            date: '2023-12-01',
            project: 'نظام إدارة متجر إلكتروني'
          },
          {
            id: '2',
            buyer: {
              name: 'فاطمة أحمد',
              avatar: '/logo.png'
            },
            rating: 5,
            comment: 'مطور محترف ومتفهم للاحتياجات. أنصح بالتعامل معه.',
            date: '2023-11-28',
            project: 'تطبيق جوال للمطاعم'
          }
        ]
      });
      setIsLoading(false);
    };

    fetchSeller();
  }, [params.sellerId]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-SA').format(num);
  };

  const getSkillIcon = (skill: string) => {
    const skillIcons: { [key: string]: any } = {
      'React': Code,
      'Node.js': Server,
      'Python': Code,
      'JavaScript': Code,
      'TypeScript': Code,
      'MongoDB': Database,
      'PostgreSQL': Database,
      'AWS': Cloud,
      'Docker': Server,
      'UI/UX': Palette,
      'Mobile': Smartphone,
      'Web': Monitor
    };
    return skillIcons[skill] || Code;
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'projects', label: 'المشاريع', icon: Grid },
    { id: 'reviews', label: 'التقييمات', icon: Star },
    { id: 'about', label: 'حول', icon: User }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center">
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  if (!seller) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">البائع غير موجود</h1>
          <Link href="/projects" className="btn-primary">
            العودة للمشاريع
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Header */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 md:h-80 relative overflow-hidden">
          <Image
            src={seller.coverImage}
            alt={seller.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Back Button */}
          <Link 
            href="/projects"
            className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {/* Share Button */}
          <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-300">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative -mt-16 px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                <Image
                  src={seller.avatar}
                  alt={seller.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online Status */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{seller.name}</h1>
                <div className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">{seller.rank.level}</span>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-2">{seller.title}</p>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{seller.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>عضو منذ {new Date(seller.joinDate).getFullYear()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل
              </button>
              <button className="px-6 py-3 bg-[#7EE7FC] text-black font-bold rounded-xl hover:bg-[#3bdeff] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Heart className="w-5 h-5 ml-2" />
                متابعة
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">إجمالي المبيعات</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(seller.totalSales)}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">التقييم</p>
                <p className="text-2xl font-bold text-gray-900">{seller.rating}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">معدل الإنجاز</p>
                <p className="text-2xl font-bold text-gray-900">{seller.completionRate}%</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">وقت الاستجابة</p>
                <p className="text-2xl font-bold text-gray-900">{seller.responseTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 inline-flex items-center ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300'
              }`}
            >
              <tab.icon className="w-5 h-5 ml-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">نبذة عني</h3>
                  <p className="text-gray-600 leading-relaxed">{seller.description}</p>
                </div>

                {/* Skills */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">المهارات</h3>
                  <div className="flex flex-wrap gap-3">
                    {seller.skills.map((skill, index) => {
                      const IconComponent = getSkillIcon(skill);
                      return (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                        >
                          <IconComponent className="w-4 h-4" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Achievements */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">الإنجازات</h3>
                  <div className="space-y-4">
                    {seller.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                          <Trophy className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm">{achievement.description}</p>
                          <p className="text-gray-400 text-xs mt-1">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Rank Progress */}
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">المستوى</h3>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{seller.rank.level}</h4>
                    <p className="text-gray-600">{formatNumber(seller.rank.points)} نقطة</p>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>المستوى التالي</span>
                        <span>{seller.rank.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${seller.rank.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">المستوى التالي: {seller.rank.nextLevel}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات التواصل</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{seller.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">الاستجابة خلال {seller.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{seller.languages.join(', ')}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">روابط التواصل</h4>
                    <div className="flex gap-3">
                      {seller.socialLinks.website && (
                        <a href={seller.socialLinks.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <Globe className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {seller.socialLinks.linkedin && (
                        <a href={seller.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <ExternalLink className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {seller.socialLinks.github && (
                        <a href={seller.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <ExternalLink className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">الشهادات</h3>
                  <div className="space-y-3">
                    {seller.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Badge className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">المشاريع ({seller.recentProjects.length})</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {seller.recentProjects.map(project => (
                  <div key={project.id} className={`card ${viewMode === 'list' ? 'flex items-center gap-4' : ''}`}>
                    {viewMode === 'grid' ? (
                      <>
                        <div className="relative overflow-hidden rounded-xl mb-4">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={225}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-gray-900">{project.title}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">{formatPrice(project.price)}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{project.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{formatNumber(project.sales)} مبيعات</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              project.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">{project.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">{formatPrice(project.price)}</span>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600">{project.rating}</span>
                              </div>
                              <span className="text-sm text-gray-600">{formatNumber(project.sales)} مبيعات</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                project.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">التقييمات ({seller.reviews.length})</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold text-gray-900">{seller.rating}</span>
                    </div>
                    <span className="text-gray-600">({formatNumber(seller.totalReviews)} تقييم)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {seller.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <Image
                          src={review.buyer.avatar}
                          alt={review.buyer.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{review.buyer.name}</h4>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.comment}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>المشروع: {review.project}</span>
                            <span>•</span>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">نبذة شخصية</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{seller.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">المعلومات الشخصية</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{seller.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">عضو منذ {new Date(seller.joinDate).getFullYear()}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">اللغات: {seller.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">الإحصائيات</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">إجمالي المبيعات:</span>
                        <span className="font-bold text-gray-900">{formatNumber(seller.totalSales)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">عدد المشاريع:</span>
                        <span className="font-bold text-gray-900">{seller.totalProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">معدل الإنجاز:</span>
                        <span className="font-bold text-gray-900">{seller.completionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">التسليم في الوقت:</span>
                        <span className="font-bold text-gray-900">{seller.onTimeDelivery}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerProfilePage;
