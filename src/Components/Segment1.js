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
    <div className="w-full h-[calc(100svh-70px)] flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end  ">
      <div className="w-full  md:w-[50%] lg:w-[50%]  h-full flex justify-center items-center  text-[white] font-[google] pr-[0] md:pr-[20px] lg:pr-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[27px] md:text-[26px] lg:text-[26px] text-[#dcdcdc]  font-[google] w-full">
            experience precision, embrace wellness
          </span>
          <span className="font-bold leading-[1] text-[55px] md:text-[55px] lg:text-[55px] text-[#ffffff] font-[google] mt-[15px] w-full flex justify-start">
            Vital Tracker
          </span>
          <span className="leading-normal font-normal text-[18px] md:text-[15px] lg:text-[15px] mt-[40px] font-[google] text-[#c7c7c7] w-full overflow-hidden text-ellipsis text-justify">
            Introducing our life-saving smart wrist gadget – a guardian for the
            elderly and the sick. With a mission to reduce the alarming
            statistics of falls, our innovative device employs cutting-edge
            technology{" "}
            <span className="text-[#56bf64]  font-['google']">
              and advanced algorithms{" "}
            </span>
            to swiftly detect falls,
            <span className="text-[#56bf64] font-['google']">
              {" "}
              triggering immediate alerts
            </span>{" "}
            for timely assistance. Prioritize safety and well-being invest in
            peace of mind today.
          </span>
        </div>
      </div>
      <div className="h-full w-[50%]   p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg" src={one1}></img>
      </div>
    </div>
  );
};
export default Segment1;
