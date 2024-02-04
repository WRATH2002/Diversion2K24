import React from "react";
import g from "../Assets/img/g.png";

const Segment1 = () => {
  return (
    <div className="w-full backdrop-blur-sm  h-[calc(100svh-70px)] flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-b-[#414141]  ">
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[poppins] p-[0] md:p-[20px] lg:p-[20px] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] font-[poppins] w-full">
            your device is not connected with WiFi
          </span>
          <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[poppins] mt-[10px] w-full flex justify-start">
            Connect Your Device
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[15px] mt-[40px] font-[poppins] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the <span className="text-[#85caf6]">1500s</span>, when
            an <span className="text-[#85caf6]">unknown printer</span> took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </span>
        </div>
      </div>
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img
          className="w-full rounded-lg"
          src="https://i.pinimg.com/564x/44/ad/ee/44adee7c5a5b28c0507256e9805de982.jpg"
        ></img>
      </div>
    </div>
  );
};
export default Segment1;
