import React from "react";
import Data from "./Data";

const DataPage = () => {
  return (
    <div>
      <div className="w-[100%] h-[100svh] bg-[#000000] flex justify-center items-center ">
        <div className="w-full md:w-[50%] lg:w-[50%]  h-[30%]">
          <Data />
        </div>
      </div>
      {/* <Data /> */}
    </div>
  );
};

export default DataPage;
