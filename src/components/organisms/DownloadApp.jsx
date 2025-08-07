import Link from 'next/link';
import Image from 'next/image';
import { map } from 'lodash'
import { downloadAppData } from '@/data';
import Container from '../atoms/Container';

const DownloadApp = () => {
    return (
        <Container className='grid lg:grid-cols-2 pt-24 gap-20 lg:gap-0' id='download-app'>
            <div className='flex flex-col'>
                <h2 className='text-3xl sm:text-4xl font-rocGrotesk'>{downloadAppData.title}</h2>
                <p className='mt-3 font-light text-sm sm:text-base'>{downloadAppData.description}</p>

                <div className='flex flex-wrap gap-4 mt-8'>
                    {map(downloadAppData.buttons, (item, i) => (
                        <Link href={item.href} key={item.href}>
                            <button className='px-5 py-1.5 rounded-md bg-black text-white flex items-center gap-4'>
                                <Image src={item.icon} alt={`${item.name} icon`} width={20} height={20} key={i} />
                                <div className='flex flex-col items-start text-xs'>
                                    <p className='font-light'>{item.titleTop}</p>
                                    <p className='font-bold'>{item.titleBottom}</p>
                                </div>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex justify-end'>
                <Image src='/images/phones.svg' width={450} height={300} alt='Two phones with the app' />
            </div>
        </Container>
    );
}

export default DownloadApp;