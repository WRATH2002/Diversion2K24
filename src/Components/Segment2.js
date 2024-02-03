import React from "react";

const Segment2 = () => {
  return (
    <div className="w-[70%] md:w-[80%] lg:w-[80%] bg-[] backdrop-blur-sm   h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]   flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end px-[0] md:p-[40px] lg:p-[40px]  border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-b-[#414141] ">
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img
          className="w-full rounded-lg"
          src="https://img.freepik.com/free-photo/atuh-beach-sunrise-nusa-penida-bali-indonesia_335224-342.jpg?w=1480&t=st=1706714997~exp=1706715597~hmac=6ff1fa4e2497164b7a281bbc07e3199d4bb8dad03115220d60000052eca4062a"
        ></img>
      </div>
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[lato] p-[0] md:p-[20px] lg:p-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] font-[lato] w-full">
            are you in an emergency ?
          </span>
          <span className="font-bold leading-[1] text-[39px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] mt-[10px] w-full flex justify-start">
            We are always ready to help you out
          </span>
          <span className="leading-normal font-normal text-[18px] md:text-[17px] lg:text-[17px] mt-[40px] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            Elevate safety for the elderly with our discreet wrist device. It
            offers a range of features to enhance well-being, providing a{" "}
            <span className="text-[#da99fe]">vigilant companion</span> and
            empowering independence for graceful aging.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Segment2;
