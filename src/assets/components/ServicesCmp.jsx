import { faGear, faGlobe, faHotel, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import ServicesLi from './ServicesLi';

function ServicesCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });
  return (
    <>
      <div>
        <div ref={ref1} className={`py-12 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
          <p className='text-[#86b817] uppercase font-bold text-xl md:text-2xl'>Services</p>
          <p className='font-bold text-black text-3xl md:text-4xl'>Our Services </p>
        </div>
        <ul className='text-slate-600 grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-12 px-8 md:px-20 [&>li]:flex [&>li]:flex-col [&>li]:gap-4 py-12 '>
        <ServicesLi delay="delay-[100ms]" id={faGlobe} className="WorldWide Tours"/>
        <ServicesLi delay="delay-[200ms]" id={faHotel} className="Hotel Reservation"/>
        <ServicesLi delay="delay-[300ms]" id={faUser} className="Travel Guides"/>
        <ServicesLi delay="delay-[400ms]" id={faGear} className="Event Management"/>
        <ServicesLi delay="delay-[50ms]" id={faGlobe} className="WorldWide Tours"/>
        <ServicesLi delay="delay-[150ms]" id={faHotel} className="Hotel Reservation"/>
        <ServicesLi delay="delay-[250ms]" id={faUser} className="Travel Guides"/>
        <ServicesLi delay="delay-[350ms]" id={faGear} className="Event Management"/>
        </ul>
      </div>
    </>
  )
}

export default ServicesCmp