import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import watchsvg from "../Assets/img/watchsvg.png";

const DeviceStatus = () => {
  return (
    <>
      <div className="w-[100%] bg-[] backdrop-blur-sm  h-[calc(100svh-60px)] md:h-[48%] lg:h-[48%]  mt-[20px] rounded-3xl flex flex-col justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end p-[40px] mb-[20px]">
        {/* <div className="w-[100%] h-[100%] ">
          <img
            className="w-full h-full object-cover rounded-3xl   "
            src={watch}
          ></img>
        </div> */}
        <div className="w-full h-full flex justify-center items-center  text-[white] font-[lato]  ">
          <div className="w-[100%] h-full flex flex-col items-end text-justify">
            <span className="text-[29px] font-[lato] font-bold w-full">
              Connect Your Device
            </span>
            <span className="text-[19px] font-medium mt-[10px] w-full flex justify-start">
              Your device is not connected
            </span>
            <span className="text-[15px] mt-[15px] text-[#c1c1c1] w-full">
              You can easily track your device easily by GPS. To track your
              device click on this. You can easily track your device easily by
              GPS. To track your device click on this. You can easily track your
              device easily by GPS. To track your device click on this.
            </span>
          </div>
          {/* <div className="w-[40%] h-full ">
            <img className="w-full object-cover" src={watchsvg}></img>
          </div> */}
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

export default DeviceStatus;
