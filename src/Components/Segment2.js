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

const Segment2 = () => {
  return (
    <div className="w-full   h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]   flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-center md:items-center lg:justify-center lg:items-center    ">
      {/* <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img className="w-full rounded-lg" src={two3}></img>
      </div> */}
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[google] pl-[0] md:p-[20px] lg:pl-[20px] ">
        <div className="w-[100%] h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[23px] md:text-[26px] lg:text-[26px] text-[#7c7c7c]  font-[geist] w-full">
            are you in an emergency ?
          </span>
          <span className="font-bold leading-[1] tracking-wide text-[35px] md:text-[55px] lg:text-[55px] text-[#000000] font-[geist] mt-[15px] w-full flex justify-start">
            We are always ready to help you out
          </span>
          <span className="leading-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[40px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis  font-medium">
            Elevate safety for the elderly with our discreet wrist device. It
            offers a range of features to enhance well-being, providing a{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              vigilant companion
            </span>{" "}
            and empowering independence for graceful aging.
          </span>
          {/* <div className="w-full   flex justify-end items-center mt-[20px]">
            <Link to="/product">
              <div className="w-[60px] h-[37px] rounded-xl border border-[#ebebeb] drop-shadow-sm font-[geist] font-medium text-[14px] flex justify-center items-center bg-[white] text-[black] cursor-pointer bt">
                Buy
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Segment2;
