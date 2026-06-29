import { PageTransition } from '../components/Layout';

const Board = () => {
  
  const members = [
    { name: "Necdet Beyaz", title: "Yönetim Kurulu Başkanı" },
    { name: "Muhammed Kartal", title: "Yönetim Kurulu Başkanı" },
    { name: "Alişan Beyaz", title: "Yönetim Kurulu Üyesi" },
    { name: "Emirhan Beyaz", title: "Yönetim Kurulu Üyesi" },
  ];

  return (
    <PageTransition>
       <div className="mt-10 pt-32 pb-20 bg-zinc-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 tracking-wide">
              Yönetim Kurulu
            </h1>
            {/* Orijinalindeki kalın renkli çizgi yerine zarif ince bir çizgi */}
            <div className="w-16 h-[2px] bg-zinc-800 mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
              Beyaz Kartal Group'un stratejik vizyonunu belirleyen yönetim kurulumuz, 
              sektörel tecrübesi ve yenilikçi bakış açısıyla şirketimizin geleceğine 
              yön vermektedir. Şeffaflık ve dürüstlük ilkelerimizle, değer üretmeye 
              devam ediyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {members.map((member, index) => (
               <div 
                 key={index} 
                 className="group bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-zinc-100 flex flex-col items-center justify-center text-center"
               >
                 {/* Modernize edilmiş baş harf kutucuğu: Yuvarlak yerine modern köşeli rozet */}
                 <div className="w-16 h-16 bg-zinc-50 border border-zinc-200 group-hover:bg-white group-hover:border-zinc-300 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-500">
                    <span className="text-2xl font-light text-zinc-800">{member.name.charAt(0)}</span>
                 </div>
                 
                 <h3 className="text-xl md:text-2xl font-medium text-zinc-900 mb-2 tracking-wide">
                   {member.name}
                 </h3>
                 {/* Unvanlar daha küçük, harf arası açık ve kurumsal */}
                 <p className="text-xs md:text-sm text-zinc-500 font-medium tracking-widest uppercase">
                   {member.title}
                 </p>
               </div>
             ))}
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
