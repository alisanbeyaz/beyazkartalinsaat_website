import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/Layout';
import { Reveal } from '../components/ui/Reveal';

const About = () => {
  return (
    <PageTransition>
      
      {/* 1. SİNEMATİK HERO SECTION */}
      <section className="relative h-[60vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/projects/hakkimizda.jpg" 
            alt="Modern Mimari" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20 w-full">
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide text-center">
              Hakkımızda
            </h1>
          </Reveal>
        </div>
      </section>

      {/* 2. HİKAYEMİZ & GÖRSEL (DÜZELTİLEN KISIM) */}
      <section className="py-24 bg-white">
        {/* Kapsayıcıyı max-w-5xl yaparak ekranın ortasında daha dar ve toplu durmalarını sağladık */}
        <div className="container mx-auto px-4 max-w-5xl">
          {/* gap'i düşürerek aralarındaki mesafeyi kısalttık, items-center ile dikeyde tam ortaladık */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center">
            
            {/* Sol Taraf: Görsel */}
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="w-full h-[400px] lg:h-[450px] overflow-hidden bg-zinc-200 rounded-sm group shadow-sm">
                  <img 
                    src="/projects/hakkimizda-2.jpg" 
                    alt="Beyaz Kartal İnşaat" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[10%]" 
                  />
                </div>
              </Reveal>
            </div>

            {/* Sağ Taraf: Metin */}
            <div className="lg:w-1/2 w-full"> 
              <Reveal>
                <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8 tracking-wide mt-0">
                  Kırk Yıllık <span className="font-medium">Güven.</span>
                </h3>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-6 text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                  <p>
                    Beyaz Kartal İnşaat olarak, kurulduğumuz günden bu yana inşaat ve müteahhitlik sektöründe kalitenin, sağlamlığın ve sarsılmaz güvenin simgesi olmayı başardık. Kırk yıllık köklü tecrübemizle, sadece bugünün değil, yarının da ihtiyaçlarını öngörerek değer üretiyoruz.
                  </p>
                  <p>
                    Temel uzmanlık alanımız ve en güçlü kasımız olan kaba inşaat süreçlerindeki mühendislik disiplinimizi, bugün müteahhitlik faaliyetlerimizle birleştirerek anahtar teslim lüks yaşam alanlarına dönüştürüyoruz. Projelerimizin ilk harcından son detayına kadar her aşamada yüksek deprem güvenliğinden ve kaliteden asla taviz vermiyoruz.
                  </p>
                  <p>
                    Bizim için her proje, geleceğe bırakılacak sarsılmaz bir imza ve içinde mutlu hikayelerin yazılacağı bir yuvadır. Sektördeki kırk yıllık birikimimizi modern mimari trendlerle harmanlayarak, zamana meydan okuyan yapılar inşa etmeye devam ediyoruz.
                  </p>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. VİZYON / MANİFESTO */}
      <section className="relative py-28 bg-zinc-100 overflow-hidden border-y border-zinc-200">
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-[1.4] tracking-tight">
              Biz sadece bina değil; şehrin silüetine değer katan, <span className="font-medium">nesiller boyu yaşayacak eserler</span> inşa ediyoruz.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* 4. TEMEL İLKELERİMİZ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex justify-center w-full mb-16">
            <Reveal>
              <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-semibold text-center">
                Temel İlkelerimiz
              </h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <Reveal delay={0.1}>
              <div className="border-l-2 border-zinc-200 pl-6 hover:border-zinc-900 transition-colors duration-300">
                <span className="text-zinc-400 font-light text-sm mb-2 block">01</span>
                <span className="text-zinc-900 font-medium text-lg mb-3 block tracking-wide">Tavizsiz Sağlamlık</span>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Her şeyden önce güvenlik. Projelerimizde en güncel mühendislik standartlarını uyguluyor, zemin etüdünden kaba inşaata kadar maksimum dayanıklılık vadediyoruz.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-l-2 border-zinc-200 pl-6 hover:border-zinc-900 transition-colors duration-300">
                <span className="text-zinc-400 font-light text-sm mb-2 block">02</span>
                <span className="text-zinc-900 font-medium text-lg mb-3 block tracking-wide">Modern Estetik</span>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Çağdaş mimarinin sade ve şık çizgilerini benimsiyoruz. İşlevselliği, lüks detaylar ve ferah alan tasarımlarıyla birleştirerek zamansız yapılar ortaya çıkarıyoruz.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="border-l-2 border-zinc-200 pl-6 hover:border-zinc-900 transition-colors duration-300">
                <span className="text-zinc-400 font-light text-sm mb-2 block">03</span>
                <span className="text-zinc-900 font-medium text-lg mb-3 block tracking-wide">Şeffaf Süreç</span>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Verdiğimiz sözlerin arkasındayız. Yatırımcılarımıza ve ev sahiplerine projenin her aşamasında şeffaf bilgi akışı sağlıyor, tam zamanında teslimat yapıyoruz.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 flex flex-col items-center justify-center text-center">
         <div className="container mx-auto px-4 flex flex-col items-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-light text-zinc-900 mb-8 tracking-wide text-center">
                Geleceği birlikte inşa edelim.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link 
                to="/projeler" 
                className="group inline-flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-4 text-xs font-medium uppercase tracking-widest transition-all hover:bg-zinc-800 shadow-md"
              >
                Projelerimizi İnceleyin
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
         </div>
      </section>

    </PageTransition>
  );
};

export default About;