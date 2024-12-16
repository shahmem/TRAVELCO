import React from 'react'
import bgimg from '../img/bg-hero.jpg'
import { useInView } from 'react-intersection-observer';
function Head({id ,name, showBox}) {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce:true, });
    const bgStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
  return (
    
    <div style={bgStyle} className='py-32 md:py-48 overflow-x-hidden'>
      <div  ref={ref1} className={`text-center flex items-center  gap-7 flex-col opacity-0 transform duration-1000 ease-out transition-all 
           ${inView1 ? "opacity-100 translate-y-0" : "-translate-y-24"}`}>
        <h1 className='text-4xl md:text-6xl text-white font-bold'>{id}</h1>
        <p className='text-white text-2xl font-semibold'>{name}</p>
        {showBox && (
        <input
          type="text"
          placeholder="Eg: Thailand"
          className='p-2 pl-3 mt-10 w-[20rem] md:w-[36rem] rounded-3xl outline-none '/>
      )}
      </div>
        
    </div>
  )
}

export default Head