import React from 'react'
import bgimg from '../img/booking.jpg'
import { useInView } from 'react-intersection-observer';
import BookingProcess from './BookingProcess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faGlobe, faPlane } from '@fortawesome/free-solid-svg-icons';

function BookingCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });

  const bgStyle ={
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
      };
  return (
    <>
        <div className='p-4 md:px-28 py-16'>
          <div style={bgStyle} className=' flex flex-col md:flex-row md:p-16 p-4 gap-y-12'>
            <div className='md:w-[50%] font-semibold space-y-8 text-white'>
              <p className='text-2xl font-bold'>Booking</p>
              <p className='text-4xl md:text-5xl font-bold'>Online Booking</p>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <p className='mb-8'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div>
              <a href="#" className='px-4 md:px-6  py-3 md:py-4 border-[1px] font-semibold border-white text-white hover:bg-white hover:text-gray-700'>Read More</a>
              </div>
            </div>
            <div className='md:w-[50%] text-white'>
              <h2 className='text-4xl md:text-5xl mb-4 font-bold'>Book A Tour</h2>
              <ul className='grid grid-cols-1  text-sm gap-4 md:grid-cols-2 '>
                <li className=''><input type="text" className='w-full  py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Your Name' name="" id="" /></li>
                <li><input type="text" className='w-full py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Your Email' name="" id="" /></li>
                <li><input type="text" className='w-full py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Date&Time ' name="" id="" /></li>
                <li><input type="text" className='w-full py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Destination' name="" id="" /></li>
                <li className='md:col-span-2 w-full'><input className='w-full h-[6rem] pb-10 px-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Special Request' type="text" name="" id="" /></li>
                <li className='md:col-span-2 my-1 w-full'><a className='text-center bg-transparent border-2 p-4 w-full block font-semibold border-white text-white hover:bg-white hover:text-gray-700 ' href="#">Book Now</a></li>
              </ul>
            </div>
          </div>
          <div ref={ref1} className={`py-20 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
            <p className='text-[#86b817] uppercase font-bold text-lg md:text-xl'>Process</p>
            <p className='font-bold text-black text-3xl md:text-4xl'>3 Easy Steps</p>
          </div>
          <ul className='flex flex-col md:flex-row gap-6 gap-y-20 my-5'>
          <BookingProcess delay="delay-[50ms]" img={<FontAwesomeIcon icon={faGlobe} />} head="Choose A Destination"  />
          <BookingProcess delay="delay-[150ms]" img={<FontAwesomeIcon icon={faDollarSign} />} head="Pay Online"  />
          <BookingProcess delay="delay-[250ms]" img={<FontAwesomeIcon icon={faPlane} />} head="Fly Today"  />
          </ul>
        </div>
    </>
  )
}

export default BookingCmp