import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout';
import { Globe, ArrowRight } from 'lucide-react';
import ProjectMap from '../components/ProjectMap';

const OurProjects = () => {
  // SADECE devam eden projeler
  const ongoingProjects = [
    { 
      _id: "8", 
      title: "AURELIA Büyükçekmece", 
      location: "Büyükçekmece, İstanbul", 
      status: "devam-eden", 
      description: "Modern mimariyle tasarlanmış, doğa ile iç içe lüks villa projesi.", 
      image: "/projects/Büyükcekmece.png", 
      slug: "buyukcekmece-villa" 
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="mb-16 border-b border-slate-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">DEVAM EDEN PROJELERİMİZ</h1>
            <div className="w-16 h-1 bg-slate-900 mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl">
              İnşaat süreçleri titizlikle devam eden, geleceğin yaşam standartlarını belirleyen projelerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => (
              <Link
                to={`/projeler/${project.slug}`}
                key={project._id}
                className="group relative h-[500px] bg-slate-900 border border-slate-200 hover:border-slate-900 overflow-hidden block shadow-md hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }} 
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700 z-10" />
                </div>
                
                <div className="absolute top-0 left-0 z-20">
                  <span className="inline-block px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-amber-500/50 text-white">Devam Ediyor</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="bg-white/90 text-slate-900 px-6 py-3 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                    Detayları İncele <ArrowRight size={14} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/40 p-6 z-20 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2">{project.location}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-900 font-medium text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}

            {/* HARİTA BÖLÜMÜ: Sadece devam edenler için */}
            <div className="lg:col-span-2 md:col-span-1 relative h-[500px] w-full border border-slate-200 shadow-md">
              <div className="absolute inset-0 w-full h-full z-0">
                <ProjectMap category="projelerimiz" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default OurProjects;