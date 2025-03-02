// lib/fonts.ts
import { Poppins, Raleway, Roboto } from 'next/font/google';

// Déclaration des polices avec les variantes souhaitées
export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
export const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-raleway' });
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });