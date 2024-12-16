import React from 'react'
import { useInView } from 'react-intersection-observer';

function DestinationPlace(Props) {
    const [ref1, inView1] = useInView({threshold: 0.5, triggerOnce: true , });


    return (
        <>
            <li ref={ref1} className={`relative group overflow-hidden ${Props.className} opacity-0 transform ease-out duration-500 ${Props.delay} transition-all  ${inView1 ? "opacity-100 scale-100":"scale-50"} `}>
                <div className="h-full overflow-hidden">
                    <img src={Props.img} alt="" className="h-full  object-cover transition-transform ease-in-out duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between">
                    <div className=' w-max text-sm font-bold self-start text-red-400 bg-white uppercase m-2 p-1'>{Props.off}</div>
                    <div className=' w-max  font-semibold self-end text-green-400 bg-white capitalize px-2 m-2 p-1'>{Props.place}</div>
                </div>
            </li>
        </>
    )
}

export default DestinationPlace