import React from "react";
import { useInView } from "react-intersection-observer";

function ThresholdExample() {
  const [ref1, inView1] = useInView({threshold: 0.5, });
  const [ref2, inView2] = useInView({threshold: 0.5, });
  const [ref3, inView3] = useInView({threshold: 0.5, });

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-between ">
      <div
        ref={ref1}
        className={`w-64 h-64 bg-blue-500 text-white flex items-center justify-center transition-transform duration-1000 ${
          inView1 ? "translate-x-16" : "translate-x-[-4rem]"
        }`}>
        {inView1 ? "I'm Visible!" : "Scroll Down"}
      </div>
      <div
        ref={ref3}
        className={`w-64 h-64 bg-blue-500 text-white flex items-center justify-center transition-transform transition-opacity duration-1000 opacity-0 ${
          inView3 ? "translate-y-[4rem] opacity-100 " : "translate-y-[-10rem] "
        }`}>
        {inView3 ? "I'm Visible!" : "Scroll Down"}
      </div>
      <div
        ref={ref2}
        className={`w-64 h-64 bg-blue-500 text-white flex items-center justify-center transition-transform duration-1000 ${
          inView2 ? "translate-x-[-4rem]" : "translate-x-[4rem]"
        }`}>
        {inView2 ? "I'm Visible!" : "Scroll Down"}
      </div>
      
    </div>
  );
};

export default ThresholdExample;
