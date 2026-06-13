import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Building, Home, MapPin, ArrowLeft } from 'lucide-react';
import ProjectMap from '../components/ProjectMap';

const Gayrettepe53: React.FC = () => {
  const navigate = useNavigate();

  const project = {
    title: "Gayrettepe 53",
    location: "Gayrettepe, İstanbul",
    status: "Tamamlandı",
    mainImage: "/projects/53.jpg",
    description: "Gayrettepe 53, şehrin merkezinde prestijli bir yaşam ve iş alanı konseptiyle tasarlanmış, çok yönlü bir mimari projedir. 1 dükkan, 1 ofis ve 41 özel daireden oluşan bu proje, Gayrettepe’nin dinamik dokusuna uyum sağlayan modern bir yaşam merkezi sunuyor. Kaba inşaat sürecinde, projenin çok katmanlı yapısının gerektirdiği ileri mühendislik standartlarını uyguladık. Depreme dayanıklı taşıyıcı sistem tasarımı ve yüksek mukavemetli yapı teknikleri ile projenin yapısal bütünlüğünü sağladık. Modern yaşamın gereksinimlerini karşılayan bu yapının temellerinde, uzman mühendislik imzamızın getirdiği kalite ve güvenliği yansıttık.",
    stats: [
        { label: "Blok Sayısı", value: "1 Blok", icon: Building },
        { label: "Daire Sayısı", value: "41 Daire", icon: Home },
        { label: "Dükkan Sayısı", value: "2 Birim", icon: Home }
        
    ],
    coordinates: [41.06512682753311, 29.003978705265816] as [number, number]
  };

  return (
    <PageTransition>
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* HERO BÖLÜMÜ */}
        <div className="relative h-[60vh] lg:h-[70vh] w-full bg-slate-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('${project.mainImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 max-w-7xl flex flex-col items-center text-center mt-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase">{project.title}</h1>
            <div className="flex items-center text-slate-200 text-sm font-bold uppercase tracking-widest mb-8">
              <MapPin size={18} className="mr-2 text-white" />
              {project.location}
            </div>
            <span className="inline-block px-6 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              {project.status.toUpperCase()}
            </span>
          </div>

          <button onClick={() => navigate(-1)} className="absolute top-32 left-4 md:left-12 z-20 inline-flex items-center text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Geri Dön
          </button>
        </div>

        {/* ANA İÇERİK */}
        <div className="container mx-auto px-4 max-w-7xl pt-16">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-2/3 space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight uppercase">Proje Hakkında</h2>
                <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Kompakt Stats */}
              <div className="bg-white border border-slate-200 shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-center justify-center text-center md:border-r border-slate-100 last:border-r-0 py-2">
                      <Icon size={22} className="text-slate-900 mb-2" />
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight uppercase">Konum</h3>
              <div className="flex-grow border border-slate-200 relative overflow-hidden bg-slate-200 shadow-sm min-h-[370px]">
                <ProjectMap position={project.coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gayrettepe53;