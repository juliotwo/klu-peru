import Link from 'next/link';
import Image from 'next/image';
import { map } from 'lodash';

import Container from '../components/atoms/Container';
import SpecialText from '../components/molecules/SpecialText';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import DownloadApp from '../components/organisms/DownloadApp';
import PricingTable from '../components/organisms/Pricing';

import { mainLandingData } from '@/data';
import Button from '@/components/atoms/button';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className='h-screen w-full bg-hero bg-cover bg-center'>
        <div className='flex flex-col h-full w-full bg-[#533ef533]'>
          <Navbar />

          <Container className='flex-1 justify-center pb-20 flex flex-col tracking-wide'>
            <h1 className='text-4xl sm:text-5xl font-bold font-rocGrotesk text-white'>
              {mainLandingData.hero.title}
            </h1>
            <p className='text-white mt-4 mb-5 text-sm sm:text-base'>
              {mainLandingData.hero.description}
            </p>
            {/* <Link href={mainLandingData.hero.button.href}>
              <Button flatWhite className='text-xs lg:text-base'>
                {mainLandingData.hero.button.title}
              </Button>
            </Link> */}
          </Container>
        </div>
      </div>

      <div className='flex flex-col bg-gradientLanding'>
        {/* <Container className='flex flex-col-reverse lg:grid lg:grid-cols-2 py-24 items-center justify-center gap-40 lg:gap-0'>
          <div className='flex justify-center items-center'>
            <Image
              src='/images/cards.svg'
              width={450}
              height={300}
              alt='Two credit cards'
            />
          </div>

          <div className='flex flex-col max-w-[600px]'>
            <h2 className='text-2xl sm:text-4xl font-rocGrotesk'>
              {mainLandingData.cardsSection.title}
            </h2>
            <p className='font-light mt-4 text-sm sm:text-base text-justify'>
              {mainLandingData.cardsSection.description}
            </p>

            <div className='mt-10'>
              <Button flatBlack>
                {mainLandingData.cardsSection.button.title}
              </Button>
            </div>
          </div>
        </Container>

        <Container className='flex flex-col justify-center items-center py-24'>
          <h1 className='text-4xl sm:text-5xl font-rocGrotesk'>
            {mainLandingData.join.title}
          </h1>
          <p className='text-secondary mt-5 font-light text-sm sm:text-base'>
            {mainLandingData.join.description}
          </p>
        </Container> */}

        <Container className='flex flex-col justify-center items-center py-24'>
          <h2 className='text-3xl sm:text-4xl  font-bold font-rocGrotesk'>
            {mainLandingData.benefits.title}
          </h2>
          <div className='text-sm font-medium flex flex-col mt-10 gap-4'>
            {map(mainLandingData.benefits.features, (item, i) => (
              <div
                className='flex items-center gap-2 text-center justify-center'
                key={i}
              >
                <p className='text-[10px] sm:text-sm font-bold'>{item}</p>
                <Image
                  src='/images/check.svg'
                  alt='check icon'
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </Container>

        <PricingTable />
        {/* <DownloadApp /> */}
      </div>

      <Footer />
    </main>
  );
}
