import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Calendar, Ruler, Building, MapPin, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectMap from '../components/ProjectMap';

const AureliaBuyukcekmece: React.FC = () => {
  const navigate = useNavigate();
  
  // Lightbox için state'ler
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const project = {
    title: "AURELIA Büyükçekmece",
    location: "Büyükçekmece, İstanbul",
    status: "Devam Ediyor",
    mainImage: "/projects/Büyükcekmece.png",
    description: "Büyükçekmece’nin seçkin lokasyonunda, 394 m² arsa üzerinde yükselen AURELIA Büyükçekmece; toplam 600 m² inşaat alanına sahip 2 özel villadan oluşan butik ve prestijli bir yaşam projesidir. Bu özel yapının müteahhitliğini üstlenen firmamız; modern mimarinin estetik beklentilerini, yüksek mühendislik standartları ve ileri inşaat teknolojileriyle hayata geçirmiştir. Projenin temelinden teslimine kadar olan tüm yapım sürecinde; depreme dayanıklı taşıyıcı sistemler, yapısal güvenlik ve birinci sınıf işçilik kalitesi ön planda tutulmuştur. Temmuz ayında başlayıp Aralık ayında hızla ve eksiksiz tamamlanacak şekilde yönettiğimiz disiplinli çalışma takvimimizle, AURELIA Büyükçekmece'ye sağlam, güvenli ve uzun ömürlü bir yapı kimliği kazandırdık.",
    stats: [
      { label: "İnşaat Alanı", value: "600 m²", icon: Ruler },
      { label: "Arsa Alanı", value: "394 m²", icon: MapPin},
      { label: "Villa Sayısı", value: "2", icon: Building },
      { label: "Başlangıç", value: "Temmuz", icon: Calendar },
      { label: "Teslim", value: "Aralık", icon: Calendar }
    ],
    gallery: [
      "/projects/Büyükcekmece.png",
      "/projects/Büyükcekmece2.jpeg",
      "/projects/Büyükcekmece3.jpeg",
      "/projects/Büyükcekmece5.jpeg",
      "/projects/Büyükcekmece6.jpeg",
      "/projects/Büyükcekmece4.jpeg"
    ],
    coordinates: [41.0260, 28.6000] as [number, number],
    logo: "/src/assets/beyazkartallogo_reverse.png" 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lightbox Navigasyon Fonksiyonları
  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev! - 1));
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev! + 1));
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  // Klavye ve Scroll olayları için useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    const handleWheel = (e: WheelEvent) => {
      if (selectedImageIndex === null) return;
      if (e.deltaY > 0) handleNextImage();
      else if (e.deltaY < 0) handlePrevImage();
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden'; 
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [selectedImageIndex]);

  return (
    <PageTransition>
      <div className="bg-slate-50 min-h-screen pb-24">
        
        {/* HERO BÖLÜMÜ */}
        <div className="relative h-[60vh] lg:h-[70vh] w-full bg-slate-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay" style={{ backgroundImage: `url('${project.mainImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 max-w-7xl flex flex-col items-center text-center mt-12">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase">{project.title}</h1>
            <div className="flex items-center text-slate-300 text-sm font-bold uppercase tracking-widest mb-8">
              <MapPin size={18} className="mr-2 text-white" />
              {project.location}
            </div>
            <span className="inline-block px-6 py-2 border border-amber-500/50 bg-amber-500/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              {project.status.toUpperCase()}
            </span>
          </div>

          <button onClick={() => navigate(-1)} className="absolute top-32 left-4 md:left-12 z-20 inline-flex items-center text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Geri Dön
          </button>
        </div>

        {/* ANA İÇERİK */}
        <div className="container mx-auto px-4 max-w-7xl pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* SOL TARAF */}
            <div className="lg:col-span-6 flex flex-col gap-10 h-full">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight uppercase">Proje Hakkında</h2>
                <div className="w-16 h-1 bg-slate-900 mb-6"></div>
                <p className="text-lg text-slate-600 leading-relaxed pr-4">{project.description}</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Konum</h3>
                {/* DİKKAT: z-0 eklendi. Harita artık bu kutunun dışına taşamaz ve kararacaktır. */}
                <div className="border border-slate-200 relative overflow-hidden bg-slate-200 shadow-sm w-full h-[265px] z-0">
                  <ProjectMap position={project.coordinates} />
                </div>
              </div>
            </div>

            {/* ORTA */}
            <div className="lg:col-span-1 flex flex-col items-end h-full mt-1">
              <div className="bg-white border border-slate-200 shadow-sm p-4 w-full max-w-[120px] flex flex-col gap-6">
                {project.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <Icon size={20} className="text-slate-900 mb-2" />
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 leading-tight">{stat.label}</p>
                      <p className="text-[13px] font-bold text-slate-900">{stat.value}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-auto w-full max-w-[120px] flex justify-center items-end pb-2">
                <img 
                  src={project.logo} 
                  alt="Beyaz Kartal İnşaat" 
                  className="w-24 h-auto object-contain"
                />
              </div>
            </div>

            {/* SAĞ TARAF: Galeri */}
            <div className="lg:col-span-5 h-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                {project.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="aspect-square bg-slate-200 overflow-hidden relative border border-slate-200 cursor-pointer group z-0"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105" 
                      style={{ backgroundImage: `url('${img}')` }} 
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* LIGHTBOX (TAM EKRAN GÖRÜNTÜLEYİCİ) */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Kapat Butonu */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>

            {/* Sol Ok */}
            <button 
              className="absolute left-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={handlePrevImage}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Ana Görsel */}
            <div className="max-w-5xl max-h-[85vh] w-full px-16 flex justify-center items-center select-none" onClick={(e) => e.stopPropagation()}>
              <img 
                src={project.gallery[selectedImageIndex]} 
                alt={`${project.title} - ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            </div>

            {/* Sağ Ok */}
            <button 
              className="absolute right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={handleNextImage}
            >
              <ChevronRight size={48} />
            </button>
            
            {/* Alt Sayaç Bilgisi */}
            <div className="absolute bottom-6 text-white/70 tracking-widest text-sm font-semibold uppercase">
              {selectedImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};

export default AureliaBuyukcekmece;