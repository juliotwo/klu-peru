import { fontInter, fontRocGrotesk } from '../fonts';
import '../styles/globals.css';

export const metadata = {
  title: 'Klu Perú',
  description: "It's the best web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${fontInter.variable} ${fontRocGrotesk.variable} text-primary font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
