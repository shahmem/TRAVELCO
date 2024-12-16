import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useInView } from "react-intersection-observer";

function GuideList(Props) {
  const [ref, inView1] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <>
      <li ref={ref} className={` group overflow-hidden shadow-xl opacity-0 transform ${Props.delay} duration-700 ease-out transition-all ${inView1 ? "opacity-100 translate-y-0" : "translate-y-32"} `}>
        <div className="overflow-hidden">
          <img src={Props.img} alt="" className="object-cover transition-transform ease-in-out duration-300 group-hover:scale-110" />
        </div>
        <div className="w-full flex items-center gap-2 flex-col  pb-7">
          <ul className="w-full z-20 flex justify-center gap-3 mt-[-1rem]  ">
            <li className=" ">
              <FontAwesomeIcon 
                icon={faFacebookF}
                className="text-[#86b817] px-3 py-2 bg-white rounded-full border-b-2 border-[#86b817]"/>
            </li>
            <li className="">
              <FontAwesomeIcon
                className="text-[#86b817] p-2 bg-white rounded-full border-b-2 border-[#86b817]"
                icon={faTwitter}
              />
            </li>
            <li className=" ">
              <FontAwesomeIcon className="text-[#86b817] p-2 bg-white rounded-full border-b-2 border-[#86b817]" icon={faInstagram} />
            </li>
          </ul>
          <div className="text-xl  font-bold text-black bg-white capitalize p-1">
            Full Name
          </div>
          <div className="text-center text-sm text-slate-600 ">
            Designation
          </div>
        </div>
      </li>
    </>
  );
}

export default GuideList;
