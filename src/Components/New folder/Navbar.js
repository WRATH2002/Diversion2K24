import React from "react";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-[100%] h-[80px] flex justify-center items-center bg-[#1c1c28]">
      {/* <div className="w-[60%] drop-shadow-xl px-[10px] bg-[#28293d] rounded-full fixed min-h-[60px] mt-[10px] flex justify-between items-center z-50">
        <div className="flex pl-[10px] justify-start items-center h-full w-full">
          <div className="text-[25px] font-[mukta] font-medium flex justify-center items-center text-[#00ff41]">
            Know BPM
          </div>
          <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[90px] font-[lato] font-medium text-white">
            Documentation
          </div>
          <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[40px] font-[lato] font-medium text-white">
            Solution
          </div>
        </div>
        <div
          className="w-[40px] h-[40px] rounded-full bg-[#00ff41] text-[black] text-[25px] font-[lato] font-medium flex justify-center items-center cursor-pointer z-50"
          onClick={() => {
            setToggleProfile(!toggleProfile);
          }}
        >
          H
        </div>
      </div> */}
      <div className="w-[calc(100%-20px)] md:w-[80%] lg:w-[80%] px-[20px] bg-[#282837] rounded-2xl  h-[60px] flex justify-between items-center z-50 ">
        <div className="hidden md:flex lg:flex justify-start items-center h-full w-full">
          <Link to="/">
            <div className="text-[25px] font-[mukta] font-bold flex justify-center items-center text-[#00ff41]">
              Know BPM
            </div>
          </Link>
          <Link to="/data">
            <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[90px] font-[lato] font-medium text-white">
              Dashboard
            </div>
          </Link>
          <Link to="/documentation">
            <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[40px] font-[lato] font-medium text-white">
              Documentation
            </div>
          </Link>
          <Link to="/solutions">
            <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[40px] font-[lato] font-medium text-white">
              Solution
            </div>
          </Link>
        </div>
        <div className="w-[calc(100%-40px)] h-full flex md:hidden lg:hidden justify-start items-center">
          {/* <div
            className="w-[60px] h-[60px] flex justify-start items-center"
            onClick={() => {
              setToggle(true);
            }}
          >
            <IoReorderThree className="text-[40px] text-white" />
          </div> */}

          {toggle === true ? (
            <div
              className="w-[60px] h-[60px] flex justify-start items-center"
              onClick={() => {
                setToggle(false);
              }}
            >
              <RxCross2 className="text-[30px] text-white" />
            </div>
          ) : (
            <div
              className="w-[60px] h-[60px] flex justify-start items-center"
              onClick={() => {
                setToggle(true);
              }}
            >
              <IoReorderThree className="text-[40px] text-white" />
            </div>
          )}
        </div>
        <div
          className="w-[40px] h-[40px] rounded-full bg-[#00ff41] text-[black] text-[25px] font-[lato] font-medium flex justify-center items-center cursor-pointer z-50"
          onClick={() => {
            setToggleProfile(!toggleProfile);
          }}
        >
          H
        </div>
      </div>
      {/* <div className="w-[90%]  min-h-[80px] pt-[10px] bg-[#1c1c28] flex justify-between items-center"></div> */}

      {toggle === true ? (
        <div className="w-[calc(100%-20px)] rounded-2xl bg-[#33334d] h-[150px] fixed top-[80px] flex flex-col justify-start text-white z-50 items-start pl-[20px]">
          <Link to="/data">
            <div className="w-full mt-[15px] h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center text-[#00ff41]">
              Dashboard
            </div>
          </Link>
          <Link to="/solutions">
            <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Solution
            </div>
          </Link>
          <Link to="/documentation">
            <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Document
            </div>
          </Link>
          <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
            Product
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {toggleProfile === true ? (
        <>
          <div
            className="fixed w-[180px] h-[120px] backdrop-blur-md bg-[#33334d] top-[80px] right-[10px] rounded-2xl flex flex-col justify-start  items-start pl-[20px] z-50 text-[white]"
            style={{ transition: ".4s" }}
          >
            <div className="w-full mt-[15px] h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Register
            </div>
            <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Login
            </div>
            <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Logout
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="fixed w-[180px] h-[0] overflow-y-hidden backdrop-blur-md bg-[#33334d] top-[80px] right-[10px] rounded-2xl flex flex-col justify-start  items-start pl-[20px] z-50 text-[white]"
            style={{ transition: ".4s" }}
          >
            <div className="w-full mt-[15px] min-h-[30px] overflow-y-hidden font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Register
            </div>
            <div className="w-full min-h-[30px] overflow-y-hidden font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Login
            </div>
            <div className="w-full min-h-[30px] overflow-y-hidden font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Logout
            </div>
          </div>
        </>
      )}

      {/* {toggle === true ? (
        <div
          className="fixed w-[250px] h-[100svh] bg-slate-500 left-0"
          style={{ transition: ".4s" }}
        >
          <span
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            cross
          </span>
        </div>
      ) : (
        <div
          className="fixed w-[0] h-[100svh] bg-slate-500 left-0 overflow-hidden"
          style={{ transition: ".4s" }}
        >
          <span
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            cross
          </span>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
