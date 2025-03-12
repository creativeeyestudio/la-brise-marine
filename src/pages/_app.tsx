// pages/_app.tsx
import { AppProps } from 'next/app';
import { poppins, raleway, roboto } from '@/app/lib/fonts';
import { useEffect } from 'react';
import { SmoothScroll } from "react-smooth-scrolll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@/assets/scss/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const container: HTMLElement | null = document.getElementById('content');
  
    if (container) {
      AOS.init({
        duration: 1500,
        delay: 500,
        mirror: true,
        once: true
      });
  
      return () => {
        AOS.refreshHard(); // Rafraîchissement plus complet d'AOS
      };
    }
  }, []);  

  return (
    <SmoothScroll scrollSpeed={1.5} smoothness={0.07} infinite={false}>
      <div id='content' className={`font-body ${poppins.variable} ${raleway.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </div>
    </SmoothScroll>
  );
}
