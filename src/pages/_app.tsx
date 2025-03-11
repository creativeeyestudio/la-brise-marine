// pages/_app.tsx
import { AppProps } from 'next/app';
import { poppins, raleway, roboto } from '@/app/lib/fonts';
import "@/assets/scss/main.scss";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 500,
      mirror: true,
      once: false
    })
  })

  return (
    <div className={`overflow-x-hidden font-body ${poppins.variable} ${raleway.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
