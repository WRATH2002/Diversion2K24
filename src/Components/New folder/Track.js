import React from "react";

import product from "../Assets/img/product.jpeg";
import ambulance from "../Assets/img/ambulance.jpeg";
import productcart from "../Assets/img/productcart.jpeg";
import tracking from "../Assets/img/tracking.jpeg";
import trackmap from "../Assets/img/trackmap.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Track = () => {
  return (
    <>
      <div className="w-[100%] bg-[]   h-[calc(100svh-60px)] md:h-[48%] lg:h-[48%]  mt-[20px] rounded-3xl flex flex-col justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end p-[40px] mb-[20px]">
        {/* <div className="w-[100%] h-[100%] ">
          <img
            className="w-full h-full object-cover rounded-3xl   "
            src={watch}
          ></img>
        </div> */}
        <div className="w-full h-[100%] flex flex-col   text-[white] font-[lato]  ">
          <div className="w-[100%] h-[80%] flex flex-col items-end text-justify">
            <span className="text-[29px] font-[lato] font-bold w-full">
              Buy Product
            </span>
            <span className="text-[19px] font-medium mt-[10px] w-full flex justify-start">
              Your device is not connected
            </span>
            <span className="text-[15px] mt-[15px] text-[#c1c1c1] w-full overflow-hidden text-ellipsis">
              Buy now this <span className="text-[#00ff41]">made in India</span>{" "}
              product and track your daily routine.
            </span>
          </div>
          {/* <div className="w-[40%] h-full ">
            <img className="w-full object-cover" src={watchsvg}></img>
          </div> */}
          <div className="w-full h-[20%]  flex justify-end items-center">
            <Link to="/product">
              <div className="w-[60px] h-[37px] rounded-full font-[lato] font-medium text-[15px] flex justify-center items-center hover:bg-[#4383c4] bg-[#0071e3] cursor-pointer">
                Buy
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="w-full h-[20%] flex  justify-center items-center">
          <div className="w-[55px] h-[35px] bg-[white] cursor-pointer mb-[10px] drop-shadow-lg mr-[10px] rounded-3xl flex justify-center items-center ">
            <FaArrowRightLong className="text-[#122333]" />
          </div>
        </div> */}
        {/* <div className="w-[55px] h-[35px] bg-[#122333] cursor-pointer mb-[10px] drop-shadow-lg mr-[10px] rounded-3xl flex justify-center items-center ">
  
          <FaArrowRightLong className="text-[white]" />
        
        </div> */}
      </div>
    </>
  );
};

export default Track;
