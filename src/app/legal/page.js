'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { map } from 'lodash'
import Container from "../../components/atoms/Container";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import { legalData } from '@/data';

export default function Terms() {
  const [tabSelected, setTabSelected] = useState(0)
  const [data, setData] = useState()

  useEffect(() => {
    if (tabSelected === 0) {
      setData(legalData.terms)
    }
    if (tabSelected === 1) {
      setData(legalData.privacy)
    }
    if (tabSelected === 2) {
      setData(legalData.cookies)
    }
    if (tabSelected === 3) {
      setData(legalData.termsEs)
    }
    if (tabSelected === 4) {
      setData(legalData.privacyEs)
    }
  }, [tabSelected])

  return (
    <main>
      <Navbar dark />

      <Container className="my-20 lg:my-24 flex flex-col gap-3">
        <h1 className='text-2xl sm:text-4xl font-rocGrotesk'>{data?.title}</h1>


        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px font-rocGrotesk text-black">
            {map(legalData.tabs, (text, i) => (
              <li className="mr-2" key={i}>
                <Link href="#" className={`inline-block p-2 border-b ${tabSelected === i ? 'border-[#573DFF]' : 'border-transparent'} rounded-t-lg`} onClick={() => setTabSelected(i)}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className='mt-2 gap-4 flex flex-col'>
          {data?.descriptions?.map((item, i) => {
            if (item.type === 'subtitle') return <h4 className='text-[#4F4F4F] leading-6 font-bold'>{item.text}</h4>

            if (item.type === 'link') return <a href={item.href} target='_blank' rel='noopener noreferrer' className='text-[#4F4F4F] leading-6 font-light underline' key={i}>{item.text}</a>

            if (item.type === 'table') return item?.getTable()

            return <p className='text-[#4F4F4F] leading-6 font-light' key={i}>{item.text}</p>
          })}
        </div>

      </Container>

      <Footer />
    </main>
  );
}

