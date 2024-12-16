import React from 'react'
import DestinationPlace from './DestinationPlace';
import dest1 from '../img/destination-1.jpg'
import dest2 from '../img/destination-2.jpg'
import dest3 from '../img/destination-3.jpg'
import dest4 from '../img/destination-4.jpg'
import { useInView } from 'react-intersection-observer';

function DestinationCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });

  return (
    <>
    <div>
    <div ref={ref1} className={`py-12 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
          <p className='text-[#86b817] uppercase font-bold text-xl md:text-2xl'>Destination</p>
          <p className='font-bold text-black text-3xl md:text-4xl'>Popular Destination </p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-4  gap-3 px-4 md:px-28 py-16'>
        <DestinationPlace className='md:col-span-2' img={dest1} off="30% off" place="thailand"/>
        <DestinationPlace className='md:col-span-2 md:row-span-2' img={dest4} off="20% off" place="indonesia"/>
        <DestinationPlace img={dest2} off="25% off" place="malaysia"/>
        <DestinationPlace img={dest3} off="35% off" place="australia"/>
        </ul>
    </div>
    </>
  )
}

export default DestinationCmp