'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  Star, 
  Shield, 
  ArrowLeft, 
  Search,
  DollarSign,
  CheckCircle,
  Award,
  Zap,
  Globe,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects, categories } from '@/data/projects';
import OrbitingSkills from '@/components/ui/OrbitingSkills';
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('جميع المشاريع');
  const [sortBy, setSortBy] = useState('الأحدث');

  const filterProjects = () => {
    let filtered = selectedCategory === 'جميع المشاريع' 
      ? featuredProjects 
      : featuredProjects.filter(project => project.category === selectedCategory);

    switch (sortBy) {
      case 'الأعلى سعراً':
        return filtered.sort((a, b) => b.price - a.price);
      case 'الأقل سعراً':
        return filtered.sort((a, b) => a.price - b.price);
      case 'الأعلى تقييماً':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'الأكثر ربحية':
        return filtered.sort((a, b) => (b.monthlyRevenue || 0) - (a.monthlyRevenue || 0));
      default:
        return filtered;
    }
  };

  const stats = [
    { icon: Users, label: 'مشروع نشط', value: '2,847', color: 'from-blue-500 to-purple-500' },
    { icon: DollarSign, label: 'إجمالي المبيعات', value: '$12.5M', color: 'from-emerald-500 to-green-500' },
    { icon: Award, label: 'بائع موثق', value: '450+', color: 'from-amber-500 to-orange-500' },
    { icon: CheckCircle, label: 'مشروع مكتمل', value: '1,923', color: 'from-purple-500 to-pink-500' }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'شراء برامج سوفت وير بأسعار رخيصة',
      description: 'نقدم حلول برمجية احترافية للشركات والأفراد بأسعار تنافسية دون التضحية بالجودة',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'برامج سطح المكتب سهلة الاستخدام',
      description: 'جميع برامجنا مصممة بواجهة UI/UX سلسة لتسهيل التثبيت والعمل اليومي للشركات الصغيرة والمتوسطة',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'دعم فني مجاني لمدة 10 أيام',
      description: 'مع كل برنامج، نوفر دعمًا فنيًا مباشرًا لضمان تشغيل البرنامج بدون أي مشاكل',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Zap,
      title: 'فيديوهات تعليمية كاملة',
      description: 'بعد الشراء، ستتلقى فيديوهات توضح خطوة بخطوة طريقة تثبيت وتشغيل البرنامج والعمل عليه بالكامل',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" py-20 relative overflow-hidden bg-white">
        {/* Background Decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-lg animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full font-bold text-sm shadow-lg mb-8 animate-bounce-gentle">
              <Sparkles className="w-5 h-5" />
              منصتك المثالية لشراء برامج السوفت وير وحلول الشركات
            </div>
            
            <h1 
                            className="md:text-6xl text-5xl my-1 font-black text-black leading-18 py-10 flex items-center gap-2 justify-center"
              
                        >
                            اكتشف أفضل
                            <span className="text-gradient block mt-2 mb-3 md:leading-[70px] leading-normal py-5 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">المشاريع الرقمية</span>
                        </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              في زمن تتسارع فيه تقنيات الذكاء الاصطناعي، نوفر لك في منصتنا تجربة شراء مختلفة كليًا. هدفنا أن نُسهل على الشركات الصغيرة والمتوسطة الحصول على برامج سطح المكتب للشركات وحلول السوفت وير للشركات الصغيرة والمتوسطة التي تساعدها على إدارة أعمالها بكفاءة واحترافية، وبأسعار تنافسية ومناسبة للجميع.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Link href="/projects" className="px-8 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold rounded-full text-xl shadow-2xl hover:from-sky-500 hover:to-blue-600 hover:shadow-3xl hover:scale-110 active:scale-95 transition-all duration-300 inline-flex items-center justify-center glow-soft relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <Search className="w-5 h-5 ml-4 relative z-10" />
                <span className="relative z-10 text-base">تصفح المشاريع</span>
              </Link>
              <Link href="/register/seller" className="px-8 py-2 bg-white/90 backdrop-blur-sm border-3 border-sky-200 text-sky-600 font-bold rounded-full text-xl hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700 transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 inline-flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="w-5 h-5 ml-4 relative z-10" />
                <span className="relative z-10 text-base">ابدأ البيع الآن</span>
              </Link>
            </div>

            {/* Floating Cards */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-black text-slate-900 mb-2">+2K</div>
                <div className="text-slate-600">مشروع متاح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-600 mb-2">98%</div>
                <div className="text-slate-600">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">24h</div>
                <div className="text-slate-600">زمن التسليم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">$12M+</div>
                <div className="text-slate-600">قيمة المبيعات</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OrbitingSkills />
      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className={`stats-icon bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm shadow-lg mb-6">
              <Star className="w-5 h-5" />
              مشاريع مختارة بعناية
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              المشاريع المميزة
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              اكتشف أفضل المشاريع المتاحة للبيع مع ضمان الجودة والأمان
            </p>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center">
            <div className="tab-container">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="tab-button tab-active border-none bg-transparent outline-none cursor-pointer select-tab"
              >
                {categories.slice(0, 4).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="tab-container">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="tab-button tab-inactive border-none bg-transparent outline-none cursor-pointer select-tab"
              >
                <option value="الأحدث">الأحدث</option>
                <option value="الأعلى سعراً">الأعلى سعراً</option>
                <option value="الأقل سعراً">الأقل سعراً</option>
                <option value="الأعلى تقييماً">الأعلى تقييماً</option>
                <option value="الأكثر ربحية">الأكثر ربحية</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filterProjects().slice(0, 6).map((project, index) => (
              <div 
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects" className="btn-light-blue">
              <span className="relative z-10">عرض جميع المشاريع</span>
              <ArrowLeft className="w-5 h-5 mr-3 relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* Profitable Projects Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl mb-6 animate-pulse">
              <TrendingUp className="w-5 h-5" />
              مشاريع مربحة ومضمونة
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              مشاريع تحقق عوائد شهرية
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              استثمر في مشاريع تحقق لك دخل شهري ثابت ومضمون مع إثباتات أرباح موثقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.filter(p => p.profitable).slice(0, 3).map((project, index) => (
              <div 
                key={project.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/profitable-projects" className="btn-light-blue">
              <span className="relative z-10">عرض جميع المشاريع المربحة</span>
              <ArrowLeft className="w-5 h-5 mr-3 relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm shadow-lg mb-6">
              <Sparkles className="w-5 h-5" />
              💡 لماذا منصتنا هي الخيار الأفضل؟
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              لماذا منصتنا هي الخيار الأفضل؟
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              نوفر لك أفضل تجربة في شراء برامج السوفت وير وحلول الشركات مع ضمانات شاملة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon bg-gradient-to-br ${feature.color} shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl mb-6 animate-pulse">
              <Target className="w-5 h-5" />
              🛠 برامجنا وحلولنا
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              برامجنا وحلولنا
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              نوفر مجموعة متنوعة من برامج إدارة المشاريع للشركات الصغيرة والمتوسطة، برامج إدارة المخازن والمستودعات، الحلول المحاسبية للشركات، وبرامج سطح مكتب قابلة للتخصيص حسب احتياجات كل شركة.
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mt-4">
              كل هذه الحلول تم تصميمها لتسهيل عمل فريقك وتحسين إنتاجية شركتك، مع الحفاظ على سعر مناسب لجميع الشركات الصغيرة والمتوسطة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">حلول ذكاء اصطناعي للشركات</h3>
              <p className="text-slate-600 leading-relaxed">تساعد برامجنا على تحسين إدارة المشاريع، متابعة الأعمال، والمحاسبة بشكل ذكي وفعال.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">برامج إدارة المشاريع</h3>
              <p className="text-slate-600 leading-relaxed">حلول متخصصة للشركات الصغيرة والمتوسطة لإدارة مشاريعها بكفاءة واحترافية.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">الحلول المحاسبية</h3>
              <p className="text-slate-600 leading-relaxed">برامج محاسبية متقدمة لإدارة الماليات والمحاسبة بسهولة ودقة عالية.</p>
            </div>
          </div>

          <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl mb-6">
              <Star className="w-5 h-5" />
              🌟 رسالتنا
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">رسالتنا</h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              نؤمن أن كل شركة، مهما كان حجمها، تستحق امتلاك برامج سوفت وير ذكية وحلول برمجية للشركات تساعدها على النمو والتوسع، دون تعقيد أو تكلفة باهظة.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7EE7FC 0%, #5DD3F0 50%, #3BC4E8 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl mb-8">
            <Target className="w-5 h-5" />
            🔗 ابدأ الآن
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            اكتشف برامجنا وحلولنا المصممة خصيصًا لتطوير أعمالك
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            انضم إلى آلاف الشركات التي تستخدم برامجنا وحلولنا لتحسين إنتاجيتها ونموها
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/projects" className="bg-white text-slate-900 hover:bg-slate-100 font-black py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 inline-flex items-center text-lg">
              <Search className="w-6 h-6 ml-3" />
              اكتشف البرامج والحلول
            </Link>
            
            <Link href="/enterprise-solutions" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 inline-flex items-center text-lg border-2 border-white/30">
              <Rocket className="w-6 h-6 ml-3" />
              حلول الشركات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;