import React from "react";
import Navbar from "./Navbar";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";
const Solution = () => {
  return (
    <>
      <Navbar data={2} />
      <div className="w-full h-[calc(100svh-80px)] bg-[black] flex justify-center items-center">
        <img className="w-[50%] -rotate-90 object-cover" src={one2}></img>
      </div>
    </>
  );
};

export default Solution;
