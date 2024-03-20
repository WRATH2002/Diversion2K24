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
    <div className="w-full bg-[]    h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]  rounded-3xl flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-center md:items-center lg:justify-center lg:items-center  ">
      {/* <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg " src={one2}></img>
      </div> */}
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[google] pl-[0] md:pl-[20px] lg:pl-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="w-[100%] h-full flex flex-col items-center justify-center ">
            <span className="leading-[1] text-[27px] md:text-[26px] lg:text-[26px] text-[#dcdcdc]  font-[google] w-full">
              Buy Product
            </span>
            <span className="font-bold leading-[1] text-[55px] md:text-[55px] lg:text-[55px] text-[#ffffff] font-[google] mt-[15px] w-full flex justify-start">
              Your device is not connected
            </span>
            <span className="leading-normal font-normal text-[18px] md:text-[15px] lg:text-[15px] mt-[40px] font-[google] text-[#c7c7c7] w-full overflow-hidden text-ellipsis text-justify">
              Purchase this
              <span className="text-[#56bf64] font-['google']">
                {" "}
                Made in India
              </span>{" "}
              product now and monitor your loved ones health seamlessly.
            </span>
            <div className="w-full   flex justify-end items-center mt-[20px]">
              <Link to="/product">
                <div className="w-[60px] h-[37px] rounded-full font-[google] font-medium text-[14px] flex justify-center items-center bg-gradient-to-b from-[#8be962] to-[#6cd179] text-[black] cursor-pointer bt">
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
