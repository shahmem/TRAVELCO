import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import map from '../img/map.png'

function ContactCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });

  return (
    <>
      <div ref={ref1} className={`py-12 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
            <p className='text-[#86b817] uppercase font-bold text-lg md:text-xl'>Contact Us</p>
            <p className='font-bold text-black text-3xl md:text-4xl'>Contact For Any Query</p>
          </div>
          <div className='flex md:flex-row flex-col px-6 gap-y-8  md:px-24'>
            <div className='flex-1 '>
              <h3 className='text-xl text-slate-600 font-bold my-3'>Get In Touch</h3>
              <p className='my-2'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
              <ul className=''>
                <li className='flex gap-1 my-3 items-center'>
                  <FontAwesomeIcon icon={faLocationDot} className='text-white bg-[#86b817] py-4 px-[18px]' />
                  <p className='text-[#86b817] font-bold text-lg'>Office <br /><span className='text-base font-normal text-slate-600'>123 Street, New York, USA</span></p>
                </li>
                <li className='flex gap-1 my-3 items-center'>
                  <FontAwesomeIcon icon={faPhone} className='text-white bg-[#86b817] p-4' />
                  <p className='text-[#86b817] font-bold text-lg'>Mobile <br /><span className='text-base font-normal text-slate-600'>1+012 345 67890</span></p>
                </li>
                <li className='flex gap-1 my-3 items-center'>
                  <FontAwesomeIcon className='text-white bg-[#86b817] p-4'  icon={faEnvelopeOpen} />
                  <p className='text-[#86b817] font-bold text-lg'>Email <br /><span className='text-base font-normal text-slate-600'> info@example.com</span></p>
                </li>
              </ul>
            </div>
            <div  className='flex-1'>
              <img src={map} alt="" />
            </div>
            <ul className='flex-1 grid grid-cols-1 mb-20 text-sm gap-4 md:grid-cols-2 '>
                <li className=''><input type="text" className='w-full  py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Your Name' name="" id="" /></li>
                <li><input type="text" className='w-full py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Your Email' name="" id="" /></li>
                <li className='md:col-span-2'><input type="text" className=' w-full py-3 p-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Subjet' name="" id="" /></li>
                <li className='md:col-span-2 w-full'><input className='w-full h-[6rem] pb-10 px-2 bg-transparent border-2 focus:border-blue-400 focus:outline-none placeholder-slate-300' placeholder='Message' type="text" name="" id="" /></li>
                <li className=' md:col-span-2 my-1 w-full'><a className='text-center p-4 w-full block font-semibold  text-white bg-[#86b817] hover:border-2 hover:border-[#86b817] hover:bg-white hover:text-[#86b817] ' href="#">Book Now</a></li>
              </ul>
          </div>
    </>
  )
}

export default ContactCmp