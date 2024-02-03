import React from "react";
import Navbar from "./Navbar";

const Solution = () => {
  return (
    <>
      <Navbar data={2} />
      <div className="w-full h-[calc(100svh-80px)] bg-[black]">Solution</div>
    </>
  );
};

export default Solution;
