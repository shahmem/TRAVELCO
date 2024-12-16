import React from 'react'
import PackagesList from './PackagesList'
import package1 from '../img/package-1.jpg'
import package2 from '../img/package-2.jpg'
import package3 from '../img/package-3.jpg'
import { useInView } from 'react-intersection-observer'

function PackagesCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });
  return (
    <>
    <div ref={ref1} className={`py-12 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
          <p className='text-[#86b817] uppercase font-bold text-xl md:text-2xl'>Packages</p>
          <p className='font-bold text-black text-3xl md:text-4xl'>Awesome Packages </p>
        </div>
    <ul className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 py-12 px-5 md:px-28'>
      <PackagesList delay="delay-[50ms]" img={package1} place='Thailand' price='$149.00' />
      <PackagesList delay="delay-[100ms]" img={package2} place='Indonesia' price='$139.00' />
      <PackagesList delay="delay-[150ms]" img={package3} place='Malaysia' price='$189.00' />
    </ul>
      
    </>
  )
}

export default PackagesCmp