import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Board from './pages/Board';
import Kvkk from './pages/Kvkk';
import ScrollToTop from './components/ScrollToTop';

import JobApplication from './pages/JobApplication';

import ProjectDetail from './pages/ProjectDetail';
import Studio from './pages/Studio';

import Kirkkonak from './pages/Kirkkonak';
import IhlamurKonak from './pages/IhlamurKonak';
import Gayrettepe53 from './pages/Gayrettepe53';
import BeyazParkGumussuyu from './pages/ByzParkGumussuyu';
import Merkezefendi from './pages/Merkezefendi';
import BeyazPlazaBeykent from './pages/BeyazPlazaBeykent';
import MaraFlorya from './pages/MaraFlorya';
import KabaInsaat from './pages/KabaInsaat';
import OurProjects from './pages/OurProjects';
import SeaVerdeBuyukcekmece from './pages/SeaVerdeBuyukcekmece';


function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // admin kontrol 
  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<Studio />} />
      </Routes>
    );
  }

  return (
    <Layout>
      {/* Sayfa geçişlerinde en üste kaydırma */}
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          
          {/* Kurumsal Routes */}
          <Route path="/kurumsal" element={<About />} />
          <Route path="/kurumsal/hakkimizda" element={<About />} />
          <Route path="/kurumsal/yonetim-kurulu" element={<Board />} />
          <Route path="/kurumsal/kvkk" element={<Kvkk />} />
          <Route path="/kurumsal/is-basvurusu" element={<JobApplication />} />

          {/* Projeler Routes */}
          <Route path="/projeler/kaba-insaat" element={<KabaInsaat />} />
          <Route path="/projeler/projelerimiz" element={<OurProjects />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/projeler/tamamlanan" element={<Projects />} />
          <Route path="/projeler/devam-eden" element={<Projects />} />
          <Route path="/projeler/:id" element={<ProjectDetail />} />
          
          {/* Spesifik Proje Routes */}
          <Route path="/projeler/kirk-konaklar-tarabya" element={<Kirkkonak />} />
          <Route path="/projeler/ihlamur-konaklari-florya" element={<IhlamurKonak />} />
          <Route path="/projeler/53" element={<Gayrettepe53 />} />
          <Route path="/projeler/beyazpark-gumussuyu" element={<BeyazParkGumussuyu />} />
          <Route path="/projeler/merkezefendi-konaklari" element={<Merkezefendi />} />
          <Route path="/projeler/beyazplaza-beykent" element={<BeyazPlazaBeykent />} />
          <Route path="/projeler/mara-florya" element={<MaraFlorya />} />
          <Route path="/projeler/buyukcekmece-villa" element={<SeaVerdeBuyukcekmece />} />
          
          {/* İletişim */}
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
