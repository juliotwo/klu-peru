import Link from 'next/link';
import Image from 'next/image';
import { map } from 'lodash'

import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/button';
import SpecialText from '@/components/molecules/SpecialText';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import DownloadApp from '@/components/organisms/DownloadApp';

import { aboutUsPageData } from '@/data';

export default function AboutUs() {
    return (
        <main>
            <div className='flex flex-col bg-gradientLanding relative'>
                <div className='absolute left-0 top-0 w-full'>
                    <Navbar dark />
                </div>

                {/* Hero */}
                <Container className='flex flex-col mt-40 lg:mt-0 lg:py-0 lg:grid lg:grid-cols-2 items-center justify-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl sm:text-4xl font-rocGrotesk'>{aboutUsPageData.hero.title}</h2>
                        <p className='font-light mt-4 text-sm sm:text-base text-justify text-[#4F4F4F]'>
                            {aboutUsPageData.hero.description}
                        </p>

                        <Link href={aboutUsPageData.hero.link.href} className='underline text-[#4F4F4F] mt-1'>{aboutUsPageData.hero.link.title}</Link>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Image src='/images/hand-phone.svg' width={568} height={700} className='w-[350px] sm:w-[450px] lg:w-[568px]' alt='One hand holding a phone' />
                    </div>

                </Container>


                <Container className='flex flex-col-reverse lg:grid lg:grid-cols-2 py-24 items-center justify-center gap-40 lg:gap-0'>
                    <div className='flex justify-center items-center'>
                        <Image src='/images/cards.svg' width={450} height={300} alt='Two credit cards' />
                    </div>

                    <div className='flex flex-col max-w-[600px]'>
                        <h2 className='text-2xl sm:text-4xl font-rocGrotesk'>{aboutUsPageData.cardsSection.title}</h2>
                        <p className='font-light mt-4 text-sm text-justify sm:text-base text-[#4F4F4F]'>
                            {aboutUsPageData.cardsSection.description}
                        </p>
                    </div>
                </Container>

                <DownloadApp />
            </div>

            <Footer />
        </main>
    );
}
