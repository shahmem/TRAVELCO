import React from 'react'
import { useInView } from 'react-intersection-observer';
import GuideList from './GuideList';
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg' 
import team3 from '../img/team-3.jpg' 
import team4 from '../img/team-4.jpg' 

function TravelGuideCmp() {
  const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });

  return (
    <>
      <div ref={ref1} className={`py-12 text-center flex flex-col items-center opacity-0 transform duration-1000 ease-out transition-all ${inView1? "opacity-100 translate-y-0" : "translate-y-24" }  `}>
            <p className='text-[#86b817] uppercase font-bold text-lg md:text-xl'>Travel Guide</p>
            <p className='font-bold text-black text-3xl md:text-4xl'>Meet Our Guide</p>
          </div>
          <ul className='flex flex-col md:flex-row gap-5 p-12 md:p-28'>
          <GuideList delay="delay-[50ms]" img={team1}/>
          <GuideList delay="delay-[150ms]" img={team2}/>
          <GuideList delay="delay-[250ms]" img={team3}/>
          <GuideList delay="delay-[350ms]" img={team4}/>
          </ul>
    </>
  )
}

export default TravelGuideCmp