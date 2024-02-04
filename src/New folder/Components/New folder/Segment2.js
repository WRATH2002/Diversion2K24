import React from "react";

const Segment2 = () => {
  return (
    <div className="w-full md:w-[47%] lg:w-[47%] bg-[] backdrop-blur-sm  h-[100svh] md:h-full lg:h-full  flex flex-col justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end px-[0] md:p-[40px] lg:p-[40px]  border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-b-[#414141] ">
      <div className="w-full h-full flex justify-center items-center  text-[white] font-[lato]  ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="text-[49px] md:text-[29px] lg:text-[49px] font-[lato] font-bold w-full">
            Are You in Emergency ?
          </span>
          <span className="text-[29px] md:text-[19px] lg:text-[29px] font-medium mt-[10px] w-full flex justify-start">
            We are always ready to help you out
          </span>
          <span className="text-[18px] md:text-[15px] lg:text-[15px] mt-[15px] text-[#9f9f9f] w-full overflow-hidden text-ellipsis text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the <span className="text-[#00ff41]">1500s</span>, when
            an <span className="text-[#00ff41]">unknown printer</span> took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Segment2;
