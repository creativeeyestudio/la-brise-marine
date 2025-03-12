// pages/_app.tsx
import { AppProps } from 'next/app';
import { poppins, raleway, roboto } from '@/app/lib/fonts';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@/assets/scss/main.scss";
import Scrollbar from 'smooth-scrollbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const container: HTMLElement | null = document.getElementById('content');
  
    if (container) {
      AOS.init({
        duration: 1500,
        delay: 500,
        mirror: true,
        once: false
      });
  
      return () => {
        AOS.refreshHard(); // Rafraîchissement plus complet d'AOS
      };
    }
  }, []);  

  return (
    <div id='content' className={`overflow-x-hidden font-body ${poppins.variable} ${raleway.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
