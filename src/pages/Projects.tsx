import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Globe, ArrowRight } from 'lucide-react';
import ProjectMap from '../components/ProjectMap';

const myProjects = [
  { _id: "1", title: "Kırk Konaklar Tarabya", location: "Tarabya, İstanbul", status: "tamamlanan", description: "Modern mimarisi ve doğayla iç içe yapısıyla Kırk Konaklar.", image: "/projects/kirk-konak-tarabya.jpg", slug: "kirk-konaklar-tarabya" },
  { _id: "2", title: "Ihlamur Konakları Florya", location: "Florya, İstanbul", status: "tamamlanan", description: "Florya'nın kalbinde, deniz havasıyla ferahlayan özel tasarım yaşam alanları.", image: "/projects/florya-ihlamur-konaklari.jpg", slug: "ihlamur-konaklari-florya" },
  { _id: "3", title: "Gayrettepe 53", location: "Gayrettepe, İstanbul", status: "tamamlanan", description: "Şehrin merkezinde iş ve yaşam dinamiklerini birleştiren prestijli projemiz.", image: "/projects/53.jpg", slug: "53" },
  { _id: "4", title: "Beyaz Park Gümüşsuyu", location: "Gümüşsuyu, İstanbul", status: "tamamlanan", description: "Tarihi dokuya saygılı, boğaz manzaralı butik ve eşsiz bir yaşam projesi.", image: "/projects/beyazpark-gümüssuyu.jpg", slug: "beyazpark-gumussuyu" },
  { _id: "5", title: "Merkezefendi Konakları", location: "Zeytinburnu, İstanbul", status: "tamamlanan", description: "Geleneksel aile yaşamına uygun, geniş yeşil alanlara sahip huzurlu konaklar.", image: "/projects/merkez-efendi-konaklari.jpg", slug: "merkezefendi-konaklari" },
  { _id: "6", title: "Beyaz Plaza Beykent", location: "Beykent, İstanbul", status: "tamamlanan", description: "Bölgenin yeni ticari kalbi olan modern ve donanımlı iş merkezi projemiz.", image: "/projects/beyazplaza-beykent.jpg", slug: "beyazplaza-beykent" },
  { _id: "7", title: "Mara Florya", location: "Florya, İstanbul", status: "tamamlanan", description: "Florya'nın prestijine yakışır, ultra lüks detaylarla donatılmış özel yaşam alanı.", image: "/projects/mara-florya.jpg", slug: "mara-florya" },
  { _id: "8", title: "AURELIA Büyükçekmece", location: "Büyükçekmece, İstanbul", status: "devam-eden", description: "Modern mimariyle tasarlanmış, doğa ile iç içe lüks villa projesi.", image: "/projects/Büyükcekmece.png", slug: "buyukcekmece-villa" }
];

const Projects = () => {
  const [projects] = useState(myProjects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* BAŞLIK BÖLÜMÜ */}
          <div className="mb-16 border-b border-slate-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">PROJELERİMİZ</h1>
            <div className="w-16 h-1 bg-slate-900 mb-6"></div>
          </div>

          {/* PROJE GRID VE HARİTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {projects.map((project) => (
              <Link
                to={`/projeler/${project.slug}`}
                key={project._id}
                className="group relative h-[500px] bg-slate-900 border border-slate-200 hover:border-slate-900 overflow-hidden block shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }} 
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                </div>
                
                <div className="absolute top-0 left-0 z-20">
                  <span className={"inline-block px-4 py-2 text-[10px] font-bold uppercase tracking-widest " + 
                    (project.status === 'devam-eden' ? "bg-amber-500/50 text-white" : "bg-white/40 text-slate-900")}>
                    {project.status === 'devam-eden' ? 'Devam Ediyor' : 'Tamamlandı'}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="bg-white/90 text-slate-900 px-6 py-3 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl">
                    Projeyi İncele <ArrowRight size={14} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/40 p-6 z-20 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2">{project.location}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight line-clamp-1">{project.title}</h3>
                  <p className="text-slate-900 font-medium text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}

            {/* HARİTA BÖLÜMÜ (TAM GENİŞLİK) */}
            <div className="lg:col-span-3 md:col-span-2 relative h-[500px] w-full border border-slate-200 shadow-md mt-8">
              <div className="absolute top-0 right-0 z-[400]">
                <div className="bg-slate-900 px-4 py-2 flex items-center gap-2">
                  <Globe size={14} className="text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Tüm Projeler Haritası</span>
                </div>
              </div>
              
              <div className="absolute inset-0 w-full h-full z-0">
                <ProjectMap category="all" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;  