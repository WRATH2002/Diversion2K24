import React from "react";
import g from "../Assets/img/g.png";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";

const Segment1 = () => {
  return (
    <div className="w-full backdrop-blur-sm  h-[calc(100svh-70px)] flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-b-[#414141]  ">
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[poppins] p-[0] md:p-[20px] lg:p-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] font-[poppins] w-full">
          experience precision, embrace wellness
          </span>
          <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[poppins] mt-[10px] w-full flex justify-start">
            Vital Tracker
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[40px] font-[poppins] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            
            Introducing our life-saving smart wrist gadget – a guardian for the elderly and the sick. With a mission to reduce the alarming statistics of falls, our innovative device employs cutting-edge technology <span className="text-[#85caf6]  font-['poppins']" >and advanced algorithms </span>to swiftly detect falls,<span className="text-[#85caf6] font-['poppins']"> triggering immediate alerts</span>  for timely assistance. Prioritize safety and well-being  invest in peace of mind today.
          </span>
        </div>
      </div>
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg" src={one1}></img>
      </div>
    </div>
  );
};
export default Segment1;
