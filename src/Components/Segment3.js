import React from "react";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";

const Segment3 = () => {
  return (
    <div className="w-full bg-[]   h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]   flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end ">
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[google] pl-[0] md:pl-[20px] lg:pl-[20px]  ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[27px] md:text-[26px] lg:text-[26px] text-[#dcdcdc]  font-[google] w-full">
            no need to worry
          </span>
          <span className="font-bold leading-[1] text-[55px] md:text-[55px] lg:text-[55px] text-[#ffffff] font-[google] mt-[15px] w-full flex justify-start">
            Swift Detection & Timely Response
          </span>
          <span className="leading-normal font-normal text-[18px] md:text-[15px] lg:text-[15px] mt-[40px] font-[google] text-[#c7c7c7] w-full overflow-hidden text-ellipsis text-justify">
            Safeguard your loved ones with our revolutionary smart wrist gadget,
            designed to combat the staggering statistics surrounding falls in
            older adults. With an estimated
            <span className="text-[#56bf64] font-['google']">
              {" "}
              36 million falls
            </span>
            , reported annually, leading to over
            <span className="text-[#56bf64] font-['google']">
              {" "}
              32,000 deaths
            </span>
            , our device is a crucial lifesaver. Detecting falls promptly, it
            ensures swift emergency responses, potentially preventing part of
            the 3 million fall-related emergency department visits each year.
            Prioritize their safety and well-being, empower them with our
            cutting-edge solution.
          </span>
        </div>
      </div>
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg" src={three1}></img>
      </div>
    </div>
  );
};
export default Segment3;
