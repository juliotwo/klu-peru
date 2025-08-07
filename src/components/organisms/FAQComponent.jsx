import Image from 'next/image';
import { map } from 'lodash'
import { faqData } from '@/data';
import Container from '../atoms/Container';

const FAQComponent = () => {
    return (
        <Container className='grid lg:grid-cols-2 pt-24 gap-20 lg:gap-0' id='download-app'>
            <div className='flex flex-col'>
                <h2 className='text-3xl sm:text-4xl font-rocGrotesk'>{faqData.title}</h2>

                <div className='flex flex-wrap gap-4 mt-8'>
                    {map(faqData.data, (item, i) => (
                        <div key={i}>
                            <h3 className='font-bold'>{item.question}</h3>
                            <p className='text-sm mt-1'>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-end'>
                <Image src='/images/phones.svg' width={450} height={300} alt='Two phones with the app' />
            </div>
        </Container>
    );
}

export default FAQComponent;