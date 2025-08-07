/** @type {import('tailwindcss').Config} */
const primary = '#000' // Verde


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        hero: 'calc(100vh - 70px)',
      },
      colors: {
        primary,
      },
      textColor: {
        primary: '#000000', // Negro (para una alta legibilidad) 
        secondary: '#4F4F4F', // gris
        third: primary,
      },
      backgroundColor: {
        primary: '#000', // Blanco (símbolo de pureza y claridad)
        secondary: '#4F4F4F', // gris
        third: primary,
      },
      backgroundImage: {
        hero: 'url("/images/hero.png")',
        gradientLanding: 'linear-gradient(to top, rgba(250,237,232,1) 0%, rgba(255,255,255,1) 50%, rgba(250,237,232,1) 100%)'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        rocGrotesk: ['var(--font-rocGrotesk)'],
      },
    },
  },
};
