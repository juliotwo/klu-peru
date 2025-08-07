'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { map } from 'lodash';
import Container from '../atoms/Container';
import Button from '../atoms/button';
import Image from 'next/image';

import { navData } from '@/data';

const Navbar = ({ dark }) => {
  const pathname = usePathname();
  const navRef = useRef();

  useEffect(() => {
    if (navRef?.current && navRef?.current?.classList) {
      const bgColor = dark ? 'bg-white' : 'bg-primary';
      window.onscroll = function () {
        if (window.scrollY >= 10) {
          navRef?.current?.classList?.remove('bg-transparent');
          navRef?.current?.classList?.add(bgColor);
        } else {
          navRef?.current?.classList?.add('bg-transparent');
          navRef?.current?.classList?.remove(bgColor);
        }
      };
    }
  }, [navRef]);

  return (
    <nav
      className='fixed top-0 z-20 left-0 transition-colors w-full px-4 md:px-0'
      ref={navRef}
    >
      <Container className='flex justify-between py-6 items-center'>
        <div>
          <Link
            href='/'
            className='text-secondary font-black text-sm sm:text-base flex items-center'
          >
            <Image
              src={
                dark ? '/images/logo-short.svg' : '/images/logo-short-dark.svg'
              }
              width={170}
              height={100}
              alt='Klu Peru Logo'
              className='w-20 sm:w-28 lg:w-[170px] fill-teal-50 '
            />
          </Link>
        </div>

        <div className='flex-1 flex justify-end items-center gap-4 sm:gap-7 tracking-wide'>
          {/* {map(navData.links, (item, i) => (
            <Link
              href={item.href}
              className={`hover:underline text-xs lg:text-sm ${
                pathname === '/about-us' ? 'font-bold' : 'font-normal'
              } ${dark ? 'text-black' : 'text-white'}`}
              key={i}
            >
              {item.title}
            </Link>
          ))} */}

          <Link href={navData.button.href}>
            <Button
              flatWhite={!dark}
              flatBlack={dark}
              className='sm:w-60 text-xs lg:text-base'
            >
              {navData.button.title}
            </Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
