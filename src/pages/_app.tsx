// pages/_app.tsx
import { AppProps } from 'next/app';
import { poppins, raleway, roboto } from '@/app/lib/fonts';
import "@/assets/scss/main.scss";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scrollbar from 'smooth-scrollbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const container: HTMLElement | null = document.getElementById('content');
  
    if (container) {
      const scrollbar = Scrollbar.init(container);
      const aosAttr = document.querySelectorAll('[data-aos]');
  
      aosAttr.forEach((el) => {
        scrollbar.addListener(() => {
          (el as HTMLElement).classList.toggle('aos-animate', scrollbar.isVisible(el as HTMLElement));
        });
      });

      if (window.innerWidth >= 1280) {
        const elements = [
          { selector: '.header', offset: 0 },
          { selector: '.menu--primary', offset: 96 },
          { selector: '.menu--secondary', offset: 96 }
        ];
      
        const domElements = elements
          .map(({ selector, offset }) => ({
            el: document.querySelector(selector) as HTMLElement | null,
            offset
          }))
          .filter(({ el }) => el !== null); // Filtrer les éléments qui existent
      
        if (domElements.length > 0) {
          scrollbar.addListener(({ offset }) => {
            domElements.forEach(({ el, offset: elOffset }) => {
              if (el) el.style.top = `${offset.y + elOffset}px`;
            });
          });
        }
      }
      
  
      AOS.init({
        duration: 1500,
        delay: 500,
        mirror: true,
        once: false
      });
  
      return () => {
        scrollbar.destroy(); // Nettoyage du Scrollbar à la suppression du composant
        AOS.refreshHard(); // Rafraîchissement plus complet d'AOS
      };
    }
  }, []);  

  return (
    <div id='content' className={`overflow-x-hidden lg:h-lvh font-body ${poppins.variable} ${raleway.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
