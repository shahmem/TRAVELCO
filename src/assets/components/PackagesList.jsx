import { faCalendarDays, faLocationDot, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useInView } from 'react-intersection-observer';

function PackagesList(Props) {
  const[ref,inView1]=useInView({threshold: 0.3, triggerOnce:true, });

  return (
    <>
        <li ref={ref} className={` group overflow-hidden shadow-xl opacity-0 transform ${Props.delay} duration-700 ease-out transition-all ${inView1 ? "opacity-100 translate-y-0":"translate-y-32"} `}>
        <div className="overflow-hidden">
          <img src={Props.img} alt="" className="object-cover transition-transform ease-in-out duration-300 group-hover:scale-110" />
        </div>
        <div className="w-full flex items-center gap-2 flex-col  pb-3">
          <ul className='w-full flex justify-around text-sm size-sm border-b-[1px] border-slate-500 font-semibold text-slate-600 bg-white '>
            <li className=' p-1 px-5 border-r-[1px] border-slate-500'><FontAwesomeIcon icon={faLocationDot} className='text-[#86b817] px-1' /> {Props.place}</li>
            <li className='p-1'><FontAwesomeIcon className='text-[#86b817] px-1' icon={faCalendarDays} />3 days</li>
            <li className='p-1 px-5 border-l-[1px] border-slate-500'><FontAwesomeIcon className='text-[#86b817] px-1' icon={faUser} />2 person</li>
          </ul>
          <div className='text-3xl  font-bold text-black bg-white capitalize p-1'>
            {Props.price}
          </div>
          <div>
          <FontAwesomeIcon className="text-[#86b817] m-[1px]" icon={faStar} /><FontAwesomeIcon className="text-[#86b817] m-[1px]" icon={faStar} /><FontAwesomeIcon className="text-[#86b817] m-[1px]" icon={faStar} /><FontAwesomeIcon className="text-[#86b817] m-[1px]" icon={faStar} /><FontAwesomeIcon className="text-[#86b817] m-[1px]" icon={faStar} />
          </div>
          <div className='text-center text-slate-600 px-4'>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos
          </div>
          <div className='flex gap-[1px] p-1'>
            <a className='text-white text-sm bg-[#86b817] p-1 px-3 rounded-l-2xl' href="">Read More</a>
            <a className='text-white text-sm bg-[#86b817] p-1 px-3 rounded-r-2xl' href="">Book Now</a>
          </div>
        </div>
      </li>
    </>
  )
}

export default PackagesList