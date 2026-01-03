import { PageTransition } from '../components/Layout';

const Board = () => {
  const members = [
    { name: "Necdet Beyaz", title: "Yönetim Kurulu Başkanı" },
    { name: "Muhammed Kartal", title: "Yönetim Kurulu Başkan Yardımcısı" },
    { name: "Alişan Beyaz", title: "Yönetim Kurulu Üyesi" },
    { name: "Emirhan Beyaz", title: "Yönetim Kurulu Üyesi" },
  ];

  return (
    <PageTransition>
       <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Yönetim Kurulu</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Beyaz Kartal Group'un stratejik vizyonunu belirleyen yönetim kurulumuz, 
              sektörel tecrübesi ve yenilikçi bakış açısıyla şirketimizin geleceğine 
              yön vermektedir. Şeffaflık ve dürüstlük ilkelerimizle, değer üretmeye 
              devam ediyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {members.map((member, index) => (
               <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center justify-center text-center">
                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <span className="text-xl font-bold">{member.name.charAt(0)}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                 <p className="text-primary font-semibold">{member.title}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
