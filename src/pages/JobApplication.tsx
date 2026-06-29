import { PageTransition } from '../components/Layout';
import { Upload, Send } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

const JobApplication = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-zinc-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Ortalamanın kesin çalışması için w-full, flex ve items-center eklendi */}
          <div className="w-full flex flex-col items-center justify-center text-center mb-16">
            <Reveal>
              <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-6 tracking-wide text-center">
                  İş Başvuru Formu
                </h1>
                <div className="w-12 h-[1px] bg-zinc-900 mx-auto mb-8"></div>
                <p className="text-sm md:text-base text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed text-center">
                  Beyaz Kartal İnşaat ailesine katılmak için aşağıdaki formu eksiksiz doldurunuz. 
                  Başvurunuz İnsan Kaynakları departmanımız tarafından titizlikle değerlendirilecektir.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form className="bg-white rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200 overflow-hidden">
              
              {/* 1. Kişisel Bilgiler */}
              <div className="p-8 border-b border-zinc-200">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">1</span>
                  Kişisel Bilgiler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Adınız</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Soyadınız</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">T.C. Kimlik No</label>
                    <input type="text" maxLength={11} className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Doğum Tarihi</label>
                    <input type="date" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Cinsiyet</label>
                    <select className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm">
                      <option value="">Seçiniz</option>
                      <option value="kadin">Kadın</option>
                      <option value="erkek">Erkek</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Askerlik Durumu</label>
                    <select className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm">
                      <option value="">Seçiniz</option>
                      <option value="yapildi">Yapıldı</option>
                      <option value="tecilli">Tecilli</option>
                      <option value="muaf">Muaf</option>
                      <option value="ilgisiz">İlişiği Yok</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. İletişim Bilgileri */}
              <div className="p-8 border-b border-zinc-200 bg-zinc-50/50">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">2</span>
                  İletişim Bilgileri
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Cep Telefonu</label>
                    <input type="tel" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" placeholder="05XX XXX XX XX" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">E-posta Adresi</label>
                    <input type="email" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div className="md:col-span-2">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">İl</label>
                          <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">İlçe</label>
                          <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                        </div>
                     </div>
                     <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Açık Adres</label>
                     <textarea rows={3} className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm resize-none"></textarea>
                  </div>
                </div>
              </div>

              {/* 3. Başvuru Bilgileri */}
              <div className="p-8 border-b border-zinc-200">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">3</span>
                  Başvuru Detayları
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Başvurulan Bölüm</label>
                    <select className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm">
                      <option value="">Seçiniz</option>
                      <option value="muhendislik">Mühendislik / Mimarlık</option>
                      <option value="saha">Saha Operasyonları</option>
                      <option value="idari">İdari İşler / Ofis</option>
                      <option value="finans">Muhasebe / Finans</option>
                      <option value="satis">Satış ve Pazarlama</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Çalışma Şekli</label>
                    <select className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm">
                      <option value="tam">Tam Zamanlı</option>
                      <option value="yari">Yarı Zamanlı</option>
                      <option value="staj">Stajyer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Talep Edilen Net Ücret (TL)</label>
                    <input type="number" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Vardiyalı çalışabilir misiniz?</label>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="vardiya" className="w-4 h-4 text-zinc-900 border-zinc-300 focus:ring-zinc-900 focus:ring-1" />
                        <span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">Evet</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="vardiya" className="w-4 h-4 text-zinc-900 border-zinc-300 focus:ring-zinc-900 focus:ring-1" />
                        <span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">Hayır</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Eğitim ve Yabancı Dil */}
              <div className="p-8 border-b border-zinc-200 bg-zinc-50/50">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">4</span>
                  Eğitim ve Nitelikler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Son Mezun Olunan Okul</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Bölüm</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Mezuniyet Yılı</label>
                    <input type="number" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                </div>
                
                <h3 className="text-xs font-medium text-zinc-900 mb-6 tracking-widest uppercase border-t border-zinc-200 pt-6">Yabancı Dil Bilgisi</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Yabancı Dil</label>
                      <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" placeholder="Örn: İngilizce" />
                   </div>
                   <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Seviye</label>
                      <select className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm">
                        <option value="">Seçiniz</option>
                        <option value="baslangic">Başlangıç</option>
                        <option value="orta">Orta</option>
                        <option value="ileri">İleri</option>
                      </select>
                   </div>
                </div>
              </div>

              {/* 5. İş Tecrübesi */}
              <div className="p-8 border-b border-zinc-200">
                 <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">5</span>
                  İş Tecrübesi (Son İşyeri)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Firma Adı</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Pozisyon / Unvan</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Çalışma Süresi</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" placeholder="Örn: 2 Yıl" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Ayrılma Nedeni</label>
                    <input type="text" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                  </div>
                </div>
              </div>

              {/* 6. Ek Bilgiler */}
              <div className="p-8 border-b border-zinc-200 bg-zinc-50/50">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 mb-8 flex items-center gap-3 tracking-wide">
                  <span className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-center justify-center text-sm font-light shrink-0">6</span>
                  Ek Bilgiler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                   <div>
                      <h3 className="text-xs font-medium text-zinc-900 mb-4 tracking-widest uppercase border-b border-zinc-200 pb-2">Referans</h3>
                      <div className="space-y-4 mt-4">
                         <input type="text" placeholder="Ad Soyad" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                         <input type="tel" placeholder="Telefon" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                      </div>
                   </div>
                   <div>
                      <h3 className="text-xs font-medium text-zinc-900 mb-4 tracking-widest uppercase border-b border-zinc-200 pb-2">Acil Durum Kişisi</h3>
                      <div className="space-y-4 mt-4">
                         <input type="text" placeholder="Ad Soyad / Yakınlık" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                         <input type="tel" placeholder="Telefon" className="w-full rounded-sm border border-zinc-200 px-4 py-3 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors bg-white font-light text-zinc-900 text-sm" />
                      </div>
                   </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-900 font-medium mb-3">CV Yükle (PDF, DOCX)</label>
                  <div className="border border-dashed border-zinc-300 rounded-sm p-10 text-center bg-zinc-50 hover:bg-white hover:border-zinc-900 transition-all cursor-pointer group">
                    <Upload className="mx-auto h-8 w-8 text-zinc-400 group-hover:text-zinc-900 transition-colors" strokeWidth={1.5} />
                    <p className="mt-4 text-sm text-zinc-500 font-light">Dosyayı buraya sürükleyin veya <span className="text-zinc-900 font-medium">seçmek için tıklayın</span></p>
                    <p className="text-xs text-zinc-400 mt-2 font-light">Maksimum 5MB</p>
                  </div>
                </div>
              </div>

              {/* Onay ve Gönder */}
              <div className="p-8 md:p-10 bg-white">
                <label className="flex items-start gap-4 mb-8 cursor-pointer group">
                   <input type="checkbox" required className="mt-1 w-4 h-4 text-zinc-900 rounded-sm border-zinc-300 focus:ring-zinc-900 focus:ring-1" />
                   <span className="text-xs md:text-sm text-zinc-500 font-light group-hover:text-zinc-900 transition-colors leading-relaxed">
                     Kişisel verilerimin KVKK kapsamında işlenmesini ve saklanmasını, verdiğim bilgilerin doğruluğunu kabul ediyorum.
                   </span>
                </label>

                <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs tracking-widest uppercase py-5 rounded-sm shadow-md transition-all flex items-center justify-center gap-3 transform active:scale-[0.99]">
                  <Send size={16} strokeWidth={2} />
                  Başvuruyu Gönder
                </button>
              </div>

            </form>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default JobApplication;