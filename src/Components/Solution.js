import React from "react";
import Navbar from "./Navbar";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";
const Solution = () => {
  return (
    <>
      <Navbar data={2} />
      <div className="w-full bg-black h-[calc(100svh-80px)] flex flex-col justify-center items-center px-[15%] ">
        <div className="w-full h-[50%]  flex justify-center items-center">
          <img className="w-[40%] -rotate-90 object-cover" src={one2}></img>
          <div className="w-[60]% pl-[30px] h-full flex flex-col items-center justify-center ">
            <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[google] mt-[10px] w-full flex justify-start">
              Vital Tracker
            </span>
            <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[40px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
              ensuring the safety of your loved ones just got easier
            </span>
          </div>
        </div>
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full">
            Micro-controller:
            <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-[#6b6b6b] font-[google] w-full ml-[10px]">
              {" "}
              Arduino Uno
            </span>
          </span>
          <br />
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full mb-[10px]">
            Modules Used:
          </span>
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full">
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • MPU6050
            </pre>
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • RTC DS3212
            </pre>
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • Pulse Sensor
            </pre>
          </span>
        </div>
      </div>
    </>
  );
};

export default Solution;
