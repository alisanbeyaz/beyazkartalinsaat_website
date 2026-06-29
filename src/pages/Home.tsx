import { ArrowRight, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { getFeaturedProjects } from '../lib/sanityQueries';
import type { SanityProject } from '../lib/sanityQueries';
import { urlFor } from '../sanity/client';

const Home = () => {
  const heroRef = useRef(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [featuredProjects, setFeaturedProjects] = useState<SanityProject[]>([]);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  }); 
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    getFeaturedProjects().then(setFeaturedProjects);
  }, []);

  // Oklara tıklandığında galeriyi tam 1 kart aşağı/yukarı kaydıran fonksiyon
  const scrollThumbnails = (direction: 'up' | 'down') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 136; // 120px kart boyu + 16px boşluk (gap)
      thumbnailsRef.current.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // TEST İÇİN: 8 adet premium görsel içeren ve doğru slug linklerine sahip projeler dizisi
  const dummyProjects = [
    {
      _id: 'dummy1',
      title: "Manzaraya karşı, \nyeni bir başlangıç.",
      location: "Büyükçekmece, İstanbul",
      description: "Müteahhitliğini üstlendiğimiz; sağlamlığı, doğanın ve modern mimarinin kusursuz uyumuyla birleştiren sade, şık ve prestijli yaşam alanları.",
      image: "/projects/Büyükcekmece.png",
      link: "/projeler/buyukcekmece-villa"
    },
    {
      _id: 'dummy2',
      title: "Modern Çizgiler \nKonforlu Yaşam.",
      location: "Tarabya, İstanbul",
      description: "Kaba inşaat süreçlerini başarıyla yürüttüğümüz Kırk Konaklar projesi; karmaşadan uzak, yenilikçi ve konfor odaklı prestijli bir yaşam alanı sunuyor.",
      image: "/projects/kirk-konak-tarabya-3.jpg",
      link: "/projeler/kirk-konaklar-tarabya"
    },
    {
      _id: 'dummy3',
      title: "Güvenle Yükselen \nYeni Nesil Yapılar.",
      location: "Florya, İstanbul",
      description: "Kaba inşaat süreçlerini yürüttüğümüz Ihlamur Konakları, maksimum deprem güvenliğini akıllı ev teknolojileriyle buluşturuyor.",
      image: "/projects/florya-ihlamur-konaklari-2.jpg",
      link: "/projeler/ihlamur-konaklari-florya"
    },
    {
      _id: 'dummy4',
      title: "Zarafetin ve \nLüksün Adresi.",
      location: "Gayrettepe, İstanbul",
      description: "Kaba inşaatını üstlendiğimiz Gayrettepe 53 projesi; geniş peyzaj alanları, müstakil yaşam konsepti ve yüksek tavanlı mimarisiyle ezber bozuyor.",
      image: "/projects/53.jpg",
      link: "/projeler/53"
    },
    {
      _id: 'dummy5',
      title: "Şehrin Kalbinde \nPrestijli Ofisler.",
      location: "Gümüşsuyu, İstanbul",
      description: "Kaba inşaatını üstlendiğimiz bu modern ofis projesi, iş dünyası için konforlu ve şık çalışma alanları sunuyor.",
      image: "/projects/beyazpark-gümüssuyu-2.jpg",
      link: "/projeler/beyazpark-gumussuyu"
    },
    {
      _id: 'dummy6',
      title: "Doğa ile \nİç İçe Yaşam.",
      location: "Zeytinburnu, İstanbul",
      description: "Kaba inşaatını başarıyla tamamladığımız; ormanın yanı başında, tamamen ahşap ve taş dokuların harmanlandığı doğa dostu modern villalar.",
      image: "/projects/merkez-efendi-konaklari.jpg",
      link: "/projeler/merkezefendi-konaklari"
    },
    {
      _id: 'dummy7',
      title: "Estetik ve \nİşlevselliğin Buluşması.",
      location: "Beykent, İstanbul",
      description: "Kaba inşaatını üstlendiğimiz Beyaz Plaza Beykent; çağdaş mimarisi, modern lüksü ve işlevsel detaylarıyla iş hayatına yepyeni bir prestij katıyor.",
      image: "/projects/beyazplaza-beykent.jpg",
      link: "/projeler/beyazplaza-beykent"
    },
    {
      _id: 'dummy8',
      title: "Florya'da \nModern Mimari.",
      location: "Florya, İstanbul",
      description: "Kaba inşaatını başarıyla tamamladığımız Mara Florya; çağdaş mimariye uygun olarak tasarlanan, bölgenin dikkat çeken ve prestijli yapılarından biridir.",
      image: "/projects/mara-florya.jpg",
      link: "/projeler/mara-florya"
    }
  ];

  // Sanity'den gelen projelerin ilk 8 tanesini alıyoruz, yoksa test verisini kullanıyoruz
  const displayProjects = featuredProjects.length > 0 
    ? featuredProjects.slice(0, 8).map(p => ({
        _id: p._id,
        title: p.title,
        location: "Öne Çıkan Proje",
        description: p.description,
        image: p.mainImage ? urlFor(p.mainImage).url() : "/projects/Büyükcekmece.png",
        link: `/projeler/${p.slug.current}`
      }))
    : dummyProjects;

  const activeProject = displayProjects[activeHeroIndex] || displayProjects[0];

  return (
    <PageTransition>
      {/* 1. İNTERAKTİF HERO SECTION */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-900">
        
        {/* ANA ARKA PLAN GÖRSELİ */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeProject.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src={activeProject.image} 
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        </motion.div>

        {/* SOL ALT KISIM: SEÇİLEN PROJENİN BİLGİLERİ */}
        <div className="absolute bottom-16 md:bottom-28 left-6 md:left-16 lg:left-24 z-20 text-white w-full max-w-xl pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeProject._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-auto"
            >
              <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/70 uppercase mb-5 font-semibold">
                {activeProject.location}
              </p>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug mb-6 tracking-wide whitespace-pre-line">
                {activeProject.title}
              </h1>
              
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-10 max-w-md line-clamp-3">
                {activeProject.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={activeProject.link} className="group flex items-center justify-center gap-3 bg-white text-black px-7 py-3.5 text-xs md:text-sm font-medium uppercase tracking-wider transition-all hover:bg-gray-100">
                  Projeyi İncele 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/iletisim" className="group flex items-center justify-center gap-3 border border-white/30 bg-black/20 backdrop-blur-sm text-white px-7 py-3.5 text-xs md:text-sm font-medium uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white">
                  Bize Ulaşın
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SAĞ KISIM: OKLU VE SCROLL EDİLEBİLİR DİKEY GALERİ MENÜSÜ */}
        <div className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
          
          {/* Üst Ok Butonu */}
          <button 
            onClick={() => scrollThumbnails('up')}
            className="text-white/40 hover:text-white transition-colors p-1.5 bg-black/20 backdrop-blur-sm rounded-full border border-white/10"
            title="Yukarı Kaydır"
          >
            <ChevronUp size={20} className="animate-pulse" />
          </button>

          {/* Kaydırılabilir Küçük Resim Alanı (Tam 3 kart görünecek yükseklik) */}
          <div 
            ref={thumbnailsRef}
            className="flex flex-col gap-4 h-[272px] md:h-[392px] overflow-y-auto py-1 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-y snap-mandatory"
          >
            {displayProjects.map((proj, idx) => (
              <button 
                key={proj._id || idx}
                onClick={() => setActiveHeroIndex(idx)}
                className={`group relative w-16 h-[80px] md:w-24 md:h-[120px] shrink-0 snap-center overflow-hidden rounded-md border transition-all duration-300 bg-zinc-800 ${
                  activeHeroIndex === idx 
                    ? 'border-white scale-[1.02] shadow-xl shadow-black/80 opacity-100' 
                    : 'border-white/20 opacity-40 hover:opacity-80'
                }`}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-colors duration-300 ${activeHeroIndex === idx ? 'bg-transparent' : 'bg-black/40 group-hover:bg-transparent'}`} />
                <span className="absolute bottom-1 left-2 text-[10px] text-white font-medium tracking-widest drop-shadow">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Alt Ok Butonu */}
          <button 
            onClick={() => scrollThumbnails('down')}
            className="text-white/40 hover:text-white transition-colors p-1.5 bg-black/20 backdrop-blur-sm rounded-full border border-white/10"
            title="Aşağı Kaydır"
          >
            <ChevronDown size={20} className="animate-pulse" />
          </button>

        </div>
      </section>

      {/* 2. 25 YILLIK TECRÜBE */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <Reveal className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-[120px] md:text-[160px] font-light text-zinc-900 leading-none tracking-tighter">
                40
              </h2>
              <p className="text-sm md:text-base uppercase tracking-[0.4em] text-gray-500 font-medium mt-2 ml-2">
                Yıllık Tecrübe
              </p>
            </Reveal>

            <Reveal delay={0.2} className="lg:w-2/3">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-900 mb-6 leading-relaxed tracking-wide">
                  Yarım asra yaklaşan tecrübemizle sadece binalar değil, <br className="hidden md:block"/> 
                  <span className="font-medium">nesiller boyu sürecek güven inşa ediyoruz.</span>
                </h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base mb-8 max-w-2xl">
                Estetik ve mühendisliği kusursuz bir dengeyle bir araya getiriyoruz. Her projemizde, modern yaşamın gereksinimlerini karşılarken, doğaya saygılı ve şehrin silüetine değer katan kalıcı eserler bırakmayı hedefliyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-6 border-t border-gray-100">
                <div>
                  <span className="block text-zinc-900 font-medium mb-1 uppercase tracking-wider text-xs">Premium Lokasyon</span>
                  <span className="text-sm text-gray-500 font-light">Özenle seçilmiş, değerlenen araziler</span>
                </div>
                <div>
                  <span className="block text-zinc-900 font-medium mb-1 uppercase tracking-wider text-xs">Tavizsiz Sağlamlık</span>
                  <span className="text-sm text-gray-500 font-light">Estetiğin ardındaki sarsılmaz güç</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. EDİTORYAL PROJELER */}
      <section className="pt-20 pb-10 bg-zinc-50 border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-200 pb-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-wide">İmza Projeler</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/projeler" className="group flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-900 font-medium">
                Tüm Koleksiyonu Gör
                <span className="w-12 h-[1px] bg-zinc-900 group-hover:w-20 transition-all duration-500"></span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {featuredProjects.map((project, i) => (
              <Reveal key={project._id} delay={i * 0.1}>
                <div className="group relative w-full cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden relative mb-4">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent z-10 transition-colors duration-700" />
                    {project.mainImage && (
                        <div className={`w-full h-full bg-slate-200 transition-transform duration-1000 group-hover:scale-105 bg-cover bg-center`} 
                             style={{backgroundImage: `url('${urlFor(project.mainImage).url()}')`}} 
                        />
                    )}
                    <div className="absolute top-3 left-3 z-20">
                       <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">
                         {project.status === 'devam-eden' ? 'Devam Eden' : 'Tamamlanan'}
                       </span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-gray-500 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 mb-4 line-clamp-2 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                    <Link to={`/projeler/${project.slug.current}`} className="inline-flex items-center text-zinc-900 font-medium hover:text-gray-500 transition-colors text-xs uppercase tracking-widest">
                      Projeyi İncele <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
        </div>
      </section>

      {/* 4. MİMARİ VİZYON */}
      <section className="relative py-32 bg-zinc-50 border-t border-gray-200 text-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 flex flex-col items-center justify-center">
          
          <Reveal className="w-full flex justify-center">
            <h2 className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide mb-10 text-zinc-800 text-center max-w-3xl">
              "İyi mimari sadece estetik binalar dikmek değil; içinde yaşayanların hayat kalitesini artıran, güvenli, huzurlu ve nesiller boyu ayakta kalacak yaşam alanları inşa etmektir."
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="w-full flex justify-center">
            <Link to="/kurumsal/hakkimizda" className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-900 font-medium border-b border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-500 transition-colors mx-auto">
              Hakkımızda
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

        </div>
      </section>
    </PageTransition>
  );
};

export default Home;