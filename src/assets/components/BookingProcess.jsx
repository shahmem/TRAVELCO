import React from 'react'
import { useInView } from 'react-intersection-observer';

function BookingProcess(Props) {
  const[ref,inView1]=useInView({threshold: 0.3, triggerOnce:true, });

  return (
    <>
        <li ref={ref} className={`flex flex-col items-center gap-4 text-center border-[1px] border-[#86b817] px-6 py-8 opacity-0 transform ${Props.delay} duration-700 ease-out transition-all ${inView1 ? "opacity-100 translate-y-0":"translate-y-32"} `}>
            <span className='w-20 h-20 mt-[-4.5rem] flex justify-center items-center text-4xl  text-white rounded-full bg-[#86b817] '>{Props.img}</span>
            <p className='text-xl font-bold text-slate-700'>{Props.head}</p>
            <p className='text-slate-600'>Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
        </li>
    </>
  )
}

export default BookingProcess