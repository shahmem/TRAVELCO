import React from "react";
import about from "../img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

function AboutCmp() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <>
      <div className="mt-[4rem] py-12 md:mt-[7rem] px-5 md:px-24 flex flex-col md:flex-row gap-4 md:gap-16 overflow-x-hidden">
        <img
          ref={ref1}
          src={about}
          className={`md:w-[40%] opacity-0 transform duration-1000 ease-out transition-all ${
            inView1 ? "opacity-100 translate-x-0" : "-translate-x-24"
          } `}
          alt=""
        />
        <div
          ref={ref2}
          className={`space-y-1 text-slate-600 opacity-0 transform duration-1000 ease-out transition-all ${
            inView2 ? "opacity-100 translate-x-0" : "translate-x-24"
          }`}
        >
          <p className="text-[#86b817] uppercase font-bold text-xl md:text-2xl">
            About
          </p>
          <p className="font-bold text-black text-3xl md:text-4xl">
            Welcome to <span className="text-[#86b817]">Tourist</span>{" "}
          </p>
          <p className="pt-8">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p className="pt-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <ul className=" pt-6 grid md:grid-cols-2 gap-2 pb-20">
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp; First Class Flights
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp;5 Star Accommodations
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp;150 Premium City Tours
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp;Handpicked Hotels
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp;Latest Model Vehicles
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#86b817" }}
              />
              &nbsp;24/7 Service
            </li>
          </ul>
          <a href="#" className="text-white p-4 px-7  bg-[#86b817]">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutCmp;
