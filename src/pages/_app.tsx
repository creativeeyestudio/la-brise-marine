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
        const header: HTMLElement | null = document.querySelector('.header');
        if (header) {
          scrollbar.addListener(({ offset }) => {
            header.style.top = `${offset.y}px`;
          })  
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
