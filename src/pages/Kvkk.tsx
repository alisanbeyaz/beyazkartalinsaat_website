import { PageTransition } from '../components/Layout';
import { FileText } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal'; // Animasyon uyumu için eklendi

const Kvkk = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Başlık Alanı */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16 pb-8 border-b border-zinc-200">
               {/* İkon için yeni modern ve zarif kutu tasarımı */}
               <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 rounded-sm flex items-center justify-center shrink-0">
                 <FileText className="w-6 h-6 text-zinc-800" strokeWidth={1.5} />
               </div>
               
               <div>
                 <h1 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-wide mb-2">
                   Kişisel Verilerin Korunması
                 </h1>
                 <p className="text-xs tracking-widest text-zinc-400 uppercase font-medium">
                   Son Güncelleme: 28 Aralık 2025
                 </p>
               </div>
            </div>
          </Reveal>

          {/* İçerik Alanı - Standart 'prose' yerine kendi zarif tasarım dilimiz */}
          <Reveal delay={0.1}>
            <div className="space-y-12">
              
              <div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4 tracking-wide">1. Amaç ve Kapsam</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                  Bu aydınlatma metni, Beyaz Kartal İnşaat ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
                  uyarınca, kişisel verilerinizin toplanması, işlenmesi, aktarılması ve saklanması konusundaki prensiplerimizi açıklamaktadır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4 tracking-wide">2. İşlenen Kişisel Veriler</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base mb-4">
                  Şirketimiz tarafından sunulan hizmetlerden faydalanmanız sırasında, aşağıda belirtilen kişisel verileriniz işlenebilmektedir:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Kimlik Bilgileri (Ad, Soyad, T.C. Kimlik No)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">İletişim Bilgileri (Telefon, E-posta, Adres)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Müşteri İşlem Bilgileri (Talep, Şikayet, Sözleşme Detayları)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4 tracking-wide">3. Kişisel Verilerin İşlenme Amaçları</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base mb-4">
                  Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Ürün ve hizmetlerimizin sunulması ve satış süreçlerinin yürütülmesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Müşteri ilişkileri yönetimi ve memnuniyetinin sağlanması</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Yasal yükümlülüklerin yerine getirilmesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                    <span className="text-zinc-500 font-light text-sm md:text-base">Pazarlama analiz çalışmalarının yürütülmesi (Açık rızanız olması halinde)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4 tracking-wide">4. Haklarınız</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                  KVKK'nın 11. maddesi uyarınca, şirketimize başvurarak kişisel verilerinizin;
                  işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, 
                  yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default Kvkk;
