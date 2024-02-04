import React from "react";
import { Link } from "react-router-dom";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";

const Segment4 = () => {
  return (
    <div className="w-full bg-[] backdrop-blur-sm     h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]  rounded-3xl flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end  ">
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg " src={one2}></img>
      </div>
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[poppins] p-[0] md:p-[20px] lg:p-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="w-[100%] h-full flex flex-col items-center justify-center ">
            <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] font-[poppins] w-full">
              Buy Product
            </span>
            <span className="font-bold leading-[1] text-[43px] md:text-[50px] font-[poppins] lg:text-[50px] text-[#f5f5f7] mt-[10px] w-full flex justify-start">
              Your device is not connected
            </span>
            <span className="leading-normal font-normal font-[poppins] text-[17px] md:text-[15px] lg:text-[15px] mt-[40px] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
              Buy now this <span className="text-[#00ff41]">made in India</span>{" "}
              product and track your daily routine.
            </span>
            <div className="w-full   flex justify-end items-center mt-[20px]">
              <Link to="/product">
                <div className="w-[60px] h-[37px] rounded-full font-[poppins] font-medium text-[14px] flex justify-center items-center hover:bg-[#4383c4] bg-[#0071e3] cursor-pointer">
                  Buy
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="w-[40%] h-full ">
            <img className="w-full object-cover" src={watchsvg}></img>
          </div> */}
          {/* <div className="w-full h-[20%]  flex justify-end items-center">
            <Link to="/product">
              <div className="w-[60px] h-[37px] rounded-full font-[lato] font-medium text-[15px] flex justify-center items-center hover:bg-[#4383c4] bg-[#0071e3] cursor-pointer">
                Buy
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Segment4;
