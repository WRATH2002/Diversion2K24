import React from "react";
import { Link } from "react-router-dom";

const Segment4 = () => {
  return (
    <div className="w-full md:w-[47%] lg:w-[47%] bg-[] backdrop-blur-sm  h-[100svh] md:h-full lg:h-full rounded-3xl flex flex-col justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end px-[0] md:p-[40px] lg:p-[40px]  ">
      <div className="w-full h-full flex justify-center items-center  text-[white] font-[lato]  ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="w-[100%] h-full flex flex-col items-center justify-center ">
            <span className="text-[49px] md:text-[29px] lg:text-[49px] font-[lato] font-bold w-full">
              Buy Product
            </span>
            <span className="text-[29px] md:text-[19px] lg:text-[29px] font-medium mt-[10px] w-full flex justify-start">
              Your device is not connected
            </span>
            <span className="text-[18px] md:text-[15px] lg:text-[15px] mt-[15px] h-[33px] text-[#c1c1c1] w-full overflow-hidden text-ellipsis text-justify">
              Buy now this <span className="text-[#00ff41]">made in India</span>{" "}
              product and track your daily routine.
            </span>
            <div className="w-full   flex justify-end items-center mt-[20px]">
              <Link to="/product">
                <div className="w-[60px] h-[37px] rounded-full font-[lato] font-medium text-[15px] flex justify-center items-center hover:bg-[#4383c4] bg-[#0071e3] cursor-pointer">
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
