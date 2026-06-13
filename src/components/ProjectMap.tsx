import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const blueIcon = new L.Icon({
  iconUrl: '/beyazkartalmaplogo-reverse.png', 
  iconSize: [38, 38], 
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

const whiteIcon = new L.Icon({
  iconUrl: '/beyazkartalmaplogo.png', 
  iconSize: [38, 38], 
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

const projects = [
  { id: 1, name: "Kırk Konaklar Tarabya", slug: "kirk-konaklar-tarabya", lat: 41.144103083363916, lng: 29.04078809321308, desc: "Tamamlanan Proje", category: "kaba-insaat" },
  { id: 2, name: "Ihlamur Konakları Florya", slug: "ihlamur-konaklari-florya", lat: 40.97886586543963, lng: 28.801308898311177, desc: "Tamamlanan Proje", category: "kaba-insaat" },
  { id: 3, name: "Gayrettepe 53", slug: "53", lat: 41.06512682753311, lng: 29.003978705265816, desc:"Tamamlanan Proje", category: "kaba-insaat"},
  { id: 4, name: "Beyaz Park Gümüşsuyu", slug: "beyazpark-gumussuyu", lat: 41.02239416344284, lng: 28.910227718631337, desc:"Tamamlanan Proje", category: "kaba-insaat"},
  { id: 5, name: "Merkezefendi Konakları", slug: "merkezefendi-konaklari", lat: 41.013998162735575, lng: 28.91899509257373, desc:"Tamamlanan Proje", category: "kaba-insaat"},
  { id: 6, name: "Beyaz Plaza Beykent", slug: "beyazplaza-beykent", lat: 41.01570773804536, lng: 28.625774209954724, desc:"Tamamlanmış Proje", category: "kaba-insaat"},
  { id: 7, name: "Mara Florya", slug: "mara-florya", lat: 40.987594170020564, lng:  28.79530760402052, desc:"Tamamlanmış Proje", category: "kaba-insaat"},
  { id: 8, name: "Büyükçekmce Villa", slug: "buyukcekmece-villa", lat: 41.023680888364666, lng: 28.602310180667452, desc:"Devam Eden Proje", category: "projelerimiz"}
];

// DİKKAT: Hataları çözen sihirli kısım burası (Interface)
interface ProjectMapProps {
  position?: [number, number];
  category?: string;
  activeProjectSlug?: string;
}

export default function ProjectMap({ position, activeProjectSlug }: ProjectMapProps) {
  
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : "";

  const searchSlug = activeProjectSlug ? activeProjectSlug.toLowerCase() : currentPath;
  const activeProject = projects.find(p => searchSlug.includes(p.slug.toLowerCase()));
  
  const defaultCenter: [number, number] = [41.06581332121361, 28.836187225248235];
  
  const mapCenter: [number, number] = position || (activeProject ? [activeProject.lat, activeProject.lng] : defaultCenter);
  const defaultZoom = position ? 14 : 10;

  return (
    <div className="h-full w-full min-h-[400px]">
      <MapContainer 
        center={mapCenter} 
        zoom={defaultZoom} 
        style={{ height: '100%', width: '100%', minHeight: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {projects.map((project) => {
          const isCurrentProject = searchSlug.includes(project.slug.toLowerCase());
          const currentIcon = isCurrentProject ? whiteIcon : blueIcon;

          return (
            <Marker 
              key={project.id} 
              position={[project.lat, project.lng] as [number, number]} 
              icon={currentIcon}
            >
              <Popup>
                <div className="text-center">
                  <strong className="text-lg block mb-1">{project.name}</strong>
                  <span className="text-gray-600 block mb-3">{project.desc}</span>
                  
                  {!isCurrentProject && (
                    <Link 
                      to={`/projeler/${project.slug}`}
                      className="inline-block bg-slate-900 text-white px-4 py-2 rounded text-sm font-bold hover:bg-slate-700 transition-colors"
                    >
                      Projeyi İncele
                    </Link>
                  )}
                  {isCurrentProject && (
                    <span className="inline-block bg-slate-100 text-slate-400 px-4 py-2 rounded text-sm font-bold">
                      Şu an inceliyorsunuz
                    </span>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}