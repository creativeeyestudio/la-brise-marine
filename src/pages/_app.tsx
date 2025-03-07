// pages/_app.tsx
import { AppProps } from 'next/app';
import { poppins, raleway, roboto } from '@/app/lib/fonts';
import "@/assets/scss/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`font-body ${poppins.variable} ${raleway.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
