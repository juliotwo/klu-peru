// components/PricingTable.js
'use client'; // Necesario para que los hooks de Framer Motion funcionen en Next.js App Router

import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi'; // Un ícono para darle un toque extra

// Datos de la tabla
const pricingData = {
  segment: 'Proveedor de Servicios de Pago (PSP) ó Socio Agregador',
  nationalRate: 'Hasta 2.3%',
  foreignRate: 'Hasta 3.25%',
};

const PricingTable = () => {
  // Variantes para la animación del contenedor principal
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Variantes para la animación de la tarjeta al hacer hover
  const cardHover = {
    scale: 1.03,
    boxShadow: '0px 10px 30px rgb(232, 195, 124)', // Sombra amarilla sutil
    transition: { type: 'spring', stiffness: 300 },
  };

  const colorYellow = '#E8C37C';

  return (
    <motion.div
      className='bg-black text-white w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl font-sans mb-20'
      variants={containerVariants}
      initial='hidden'
      id='comisiones'
      animate='visible'
    >
      <h2 className='text-3xl sm:text-4xl font-bold text-center mb-2'>
        Comisiones de Adquirencia
      </h2>
      <p className='text-center text-gray-400 mb-8 sm:mb-12'>
        Tarifas transparentes para potenciar a nuestros socios estratégicos.
      </p>

      {/* Tarjeta de precios - Usamos divs en lugar de una tabla para mayor flexibilidad de diseño */}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 bg-[#111111] p-6 sm:p-8 rounded-xl border border-gray-800 cursor-pointer'
        whileHover={cardHover}
      >
        {/* --- Columna 1: Segmento --- */}
        <div className='md:border-r md:border-gray-800 md:pr-6 flex flex-col justify-center'>
          <p className='text-sm text-gray-400 mb-2 uppercase tracking-wider'>
            Segmento
          </p>
          <h3 className='text-xl font-semibold text-white'>
            {pricingData.segment}
          </h3>
        </div>

        {/* --- Columna 2: Tarjeta Nacional --- */}
        <div className='md:border-r md:border-gray-800 md:pr-6 flex flex-col justify-center'>
          <p className='text-sm text-gray-400 mb-2 uppercase tracking-wider'>
            💳 Tarjeta Nacional
          </p>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-bold text-[#E8C37C]'>
              {pricingData.nationalRate.split(' ')[1]}
            </span>
            <span className='text-gray-400'>
              {pricingData.nationalRate.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* --- Columna 3: Tarjeta Extranjera --- */}
        <div className='flex flex-col justify-center'>
          <p className='text-sm text-gray-400 mb-2 uppercase tracking-wider'>
            🌍 Tarjeta Extranjera
          </p>
          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-bold text-[#E8C37C]'>
              {pricingData.foreignRate.split(' ')[1]}
            </span>
            <span className='text-gray-400'>
              {pricingData.foreignRate.split(' ')[0]}
            </span>
          </div>
        </div>
      </motion.div>

      <div className='text-center mt-8'>
        <a
          href='#'
          className='text-[#E8C37C] hover:text-[#D6B83A] transition-colors duration-300 inline-flex items-center gap-2'
        >
          Contactar a Ventas
          <FiArrowRightCircle />
        </a>
      </div>
    </motion.div>
  );
};

export default PricingTable;
