import React from "react";

const Segment3 = () => {
  return (
    <div className="w-[70%] md:w-[80%] lg:w-[80%] bg-[] backdrop-blur-sm    h-[100vh] md:h-[calc(100svh-70px)] lg:h-[calc(100svh-70px)]   flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-end px-[0] md:p-[40px] lg:p-[40px] border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-b-[#414141] ">
      <div className="w-full  md:w-[50%] lg:w-[50%] h-full flex justify-center items-center  text-[white] font-[poppins] p-[0] md:p-[20px] lg:p-[20px]  ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] font-[poppins] w-full">
            Connect Your Device
          </span>
          <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[poppins] mt-[10px] w-full flex justify-start">
            Your device is not connected
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[15px] mt-[40px] font-[poppins] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the <span className="text-[#00ff41]">1500s</span>, when
            an <span className="text-[#00ff41]">unknown printer</span> took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </span>
        </div>
      </div>
      <div className="h-full w-[50%]  p-[20px] hidden md:flex lg:flex justify-center items-center rounded-lg">
        <img
          className="w-full rounded-lg"
          src="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?w=1480&t=st=1706714949~exp=1706715549~hmac=d7fbe781289590da656a26fe560f2afbdd940d279776ae881bb519de840da16e"
        ></img>
      </div>
    </div>
  );
};
export default Segment3;
