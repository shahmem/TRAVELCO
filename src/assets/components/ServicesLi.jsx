import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

function ServicesLi(Props) {
  const [ref, inView] = useInView({threshold: 0.5, triggerOnce: true , });

    return (
        <>
            <li ref={ref} className={`bg-white group transition-all duration-500 hover:text-white hover:bg-[#86b817] shadow-lg p-8 opacity-0 transform ${Props.delay}  ease-in-out transition-all ${inView ? "opacity-100 translate-y-0":"translate-y-32"} `}>
                <FontAwesomeIcon className='size-12 transition-all duration-500 text-[#86b817] group-hover:text-white' icon={Props.id} />
                <p className='font-bold text-lg'>{Props.className}</p>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </li>
        </>
    )
}

export default ServicesLi