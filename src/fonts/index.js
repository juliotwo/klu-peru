import localFont from "next/font/local";
import { Inter } from 'next/font/google'

export const fontInter = Inter({
  variable: '--font-inter',
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

export const fontRocGrotesk = localFont({
  variable: '--font-rocGrotesk',
  src: [
    { path: './assets/RocGrotesk/Fontspring-DEMO-rocgroteskwide-medium.otf', weight: 'normal' },
  ]
});