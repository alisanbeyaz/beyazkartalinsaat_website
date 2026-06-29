import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa yolu her değiştiğinde ekranı anında en üste kaydırır
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [pathname]);

  return null; // Ekranda görsel bir şey render etmesine gerek yok
};

export default ScrollToTop;