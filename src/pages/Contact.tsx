import React, { useEffect } from 'react';
import { PageTransition } from '../components/Layout';
import { Mail, Phone, MapPin, Send, Building2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const googleMapsLink = "https://www.google.com/maps/place/Metropol+C1+Business+Center/@40.9941115,29.1171459,657m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cac9003507d12b:0xfd457a6c64960e4e!8m2!3d40.9941115!4d29.1197208!16s%2Fg%2F11vq2chjsb?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <PageTransition>
      <div className="bg-slate-50 min-h-screen pb-24 pt-24 lg:pt-32">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* ÜST BAŞLIK BÖLÜMÜ */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight uppercase">İletişim</h1>
            <div className="w-20 h-1 bg-slate-900 mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Projelerimiz, müteahhitlik hizmetlerimiz veya genel sorularınız için bizimle iletişime geçin. Bize ulaşın, inşa edelim.
            </p>
          </div>

          {/* BENTO GRID TASARIMI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* SOL TARAF: İletişim Kartları ve Küçük Harita (4 Sütun) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Merkez Ofis Kartı (Karanlık Tema) */}
              <div className="bg-slate-900 text-white p-8 border border-slate-800 flex flex-col group hover:bg-slate-800 transition-colors shadow-sm">
                <div>
                  <Building2 size={32} className="text-amber-500 mb-6" />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Merkez Ofis</h3>
                  <div className="w-8 h-px bg-slate-700 mb-4"></div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Atatürk Mah. Ertuğrul Gazi Sk.<br />
                    Metropol İstanbul C1 Blok<br />
                    No: 2B İç Kapı No: 101<br />
                    Ataşehir / İstanbul
                  </p>
                </div>
              </div>

              {/* Telefon ve Mail Kartları (Yan Yana veya Alt Alta) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-slate-900 group transition-colors">
                  <div className="bg-slate-100 p-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Phone size={20} className="text-slate-900 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Telefon</p>
                    <p className="text-sm font-bold text-slate-900 mb-1">+90 (535) 570 84 29</p>
                    <p className="text-sm font-bold text-slate-900">+90 (531) 214 60 29</p>
                  </div>
                </div>

                <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-slate-900 group transition-colors">
                  <div className="bg-slate-100 p-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Mail size={20} className="text-slate-900 group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">E-Posta</p>
                    <p className="text-sm font-bold text-slate-900">destek@beyazkartalinsaat.com</p>
                  </div>
                </div>

              </div>

              {/* KÜÇÜLTÜLMÜŞ, TIKLANABİLİR HARİTA KUTUSU */}
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[220px] bg-slate-200 border border-slate-200 shadow-sm overflow-hidden group cursor-pointer"
              >
                {/* Harita Arka Plan Resmi (Temsili) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')" }}
                />
                
                {/* Pin ve Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors duration-500">
                  
                  <div className="bg-slate-900 text-white p-3 rounded-full shadow-2xl transform group-hover:-translate-y-3 transition-transform duration-500 relative z-10">
                    <MapPin size={28} />
                    {/* Pin Altı Gölge Efekti */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/40 blur-sm rounded-full"></div>
                  </div>
                  
                </div>

                {/* Alt Bilgi Çubuğu */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex items-center justify-between transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Google Haritalarda Aç</span>
                  <ExternalLink size={16} className="text-amber-500" />
                </div>
              </a>

            </div>

            {/* SAĞ TARAF: Form (8 Sütun) */}
            <div className="lg:col-span-8 bg-white p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col justify-center h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight uppercase">Mesaj Gönderin</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Adınız</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Soyadınız</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Mesajınız</label>
                  <textarea 
                    rows={6} 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors w-full md:w-auto mt-4 group"
                >
                  Mesajı Gönder
                  <Send size={16} className="ml-3 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
