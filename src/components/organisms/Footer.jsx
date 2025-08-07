import { map } from 'lodash';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../atoms/Container';
import { footerData } from '@/data';

const Footer = () => {
  return (
    <div className='bg-white py-8'>
      <Container >
        <div className='lg:px-20 flex flex-col text-[#111111]'>
          <div className='flex items-center justify-between font-rocGrotesk'>
            <div className='flex items-center gap-2 sm:gap-3'>
              <Image src='/images/logo-short.svg' width={81} height={38} alt='Logo Klu' className='w-12 sm:w-16 lg:w-20' />

              <h5 className='text-[8px] sm:text-[10px] lg:text-xs mt-4'>{footerData.rightsReserved}</h5>
            </div>

            <div className='flex items-center gap-6 text-sm'>
              {map(footerData.links, (item) => <Link href={item.href} key={item.href} className='text-[8px] sm:text-sm lg:text-base hover:underline'>{item.title}</Link>)}
            </div>
          </div>

          <hr className='w-full my-10' />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 sm:gap-4 lg:gap-6'>
              {map(footerData.icons, (item) => (
                <Link href={item.href} key={item.href}>
                  <Image src={item.icon} width={24} height={24} alt={`Logo ${item.name}`} className='w-5 sm:w-6' />
                </Link>
              ))}
            </div>

            <div className='flex flex-col items-end text-[#7a7a7a] font-rocGrotesk text-[10px] sm:text-sm lg:text-base text-right'>
              <h6>{footerData.address}</h6>
              <h6>{footerData.email}</h6>
            </div>
          </div>

          <div className='mt-10 text-[#7a7a7a]'>
            <div className='font-light text-[6px] sm:text-[8px] lg:text-xs text-justify'>
              <p>{footerData.disclaimerTitle}</p>
              <p>{footerData.disclaimers}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Footer;
