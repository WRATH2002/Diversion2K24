import React from "react";
import Navbar from "./Navbar";

const Document = () => {
  return (
    <>
      <Navbar data={3} />
      <div className="w-full h-[calc(100svh-80px)] bg-[black]">Document</div>
    </>
  );
};

export default Document;
