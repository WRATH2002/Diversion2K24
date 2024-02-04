import React, { useState } from "react";
import Data from "./Data";
import { PiHeartbeat } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Navbar from "./Navbar";

const TrackingPage = () => {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100svh-80px)] bg-[#1c1c28] flex flex-col md:flex-root lg:flex-row justify-center md:justify-between lg:justify-between items-between md:items-center lg:items-center px-[0] md:px-[80px] lg:px-[80px] py-[0px] md:py-[80px] lg:py-[80px] ">
        <div className="w-full md:w-[48%] lg:w-[48%] h-[50%] md:h-full lg:h-full rounded-3xl p-[40px] flex flex-col justify-between md:justify-center lg:justify-center items-center">
          <div className="w-full">
            <div className="text-white text-[39px] md:text-[29px] lg:text-[49px] font-[lato] font-bold">
              Current Status
            </div>
            <div className="text-white text-[20px] md:text-[25px] lg:text-[25px] font-medium flex justify-start items-center mt-[20px]">
              BPM{" "}
              <PiHeartbeat className="text-[#ff7f2f] text-[32px] ml-[20px] mt-[6px] mr-[10px]" />{" "}
              :<span className="ml-[20px] font-normal text-[20px]">78</span>
            </div>
            <div className="text-white text-[20px] md:text-[25px] lg:text-[25px] font-medium flex justify-start items-center mt-[10px]">
              Status{" "}
              <HiOutlineStatusOnline className="text-[#1bff1b] text-[32px] ml-[20px] mt-[6px] mr-[10px]" />{" "}
              :
              <span className="ml-[20px]  font-normal text-[20px]">
                {status === true ? (
                  <div className="text-[#dd3232]">Fall Detected</div>
                ) : (
                  <>No Fall Detected</>
                )}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-0 md:mt-[80px] lg:mt-[80px]">
            {status === true ? (
              <div className="flex w-full justify-between items-center">
                <button className="w-[59%] md:w-[59%] lg:w-[59%] h-[60px] text-[17px] font-[lato] font-medium text-[white] rounded-2xl  bg-[#2cac2c] hover:bg-[#4383c4]">
                  Call Ambulance
                </button>
                <button
                  className="w-[37%] md:w-[37%] lg:w-[37%] h-[60px] text-[17px] font-[lato] font-medium text-[white] rounded-2xl bg-[#c1802c] hover:bg-[#4383c4]"
                  onClick={() => {
                    setStatus(false);
                  }}
                >
                  Ignore
                </button>
              </div>
            ) : (
              <div className="w-full">
                <button className="w-full md:w-[100%] lg:w-[100%] h-[60px] text-[17px] font-[lato] font-medium text-[white] rounded-2xl bg-[#0071e3] hover:bg-[#4383c4]">
                  Call Ambulance
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-[48%] lg:w-[48%]  h-[50%]  md:h-full lg:h-full  rounded-3xl flex flex-col justify-center items-start">
          {/* <div className="w-full h-[50%] "> */}
          <div className="p-[40px] text-white text-[39px] md:text-[29px] lg:text-[49px] font-[lato] font-bold">
            Data History
          </div>
          {/* </div> */}
          <div className="w-full h-[50%]">
            <Data />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingPage;
