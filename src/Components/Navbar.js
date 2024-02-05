import React, { useEffect } from "react";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const logoUrl = process.env.PUBLIC_URL + "/logo.png";

const Navbar = (props) => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setToggleProfile(false);
      setToggle(false);
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out Successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {toggleProfile === true ? (
        <>
          <div
            className="fixed w-auto h-[60px] rounded-xl  bg-[#ffffffeb] backdrop-blur-md drop-shadow-md  top-[80px] right-[13%] flex flex-col justify-start  items-start px-[20px] z-50 text-[black]"
            // style={{ transition: ".4s" }}
          >
            {/* <div className="w-full mt-[15px] h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Register
            </div>
            <div className="w-full h-[30px] font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Login
            </div> */}
            <div
              className="w-full h-[30px] font-[poppins] mt-[15px] text-[14px] cursor-pointer flex justify-start items-center"
              onClick={() => {
                userSignOut();
              }}
            >
              Logout
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="fixed w-[180px] h-[0] overflow-y-hidden backdrop-blur-md top-[80px] right-[10px] md:right-[160px] lg:right-[160px] rounded-2xl flex flex-col justify-start  items-start pl-[20px] z-50 text-[white]"
            // style={{ transition: ".4s" }}
          >
            {/* <div className="w-full mt-[15px] min-h-[30px] overflow-y-hidden font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Register
            </div>
            <div className="w-full min-h-[30px] overflow-y-hidden font-[lato] text-[16px] cursor-pointer flex justify-start items-center">
              Login
            </div> */}
            <div className="w-full mt-[15px] min-h-[30px] overflow-y-hidden font-[poppins] text-[14px] cursor-pointer flex justify-start items-center">
              Logout
            </div>
          </div>
        </>
      )}
      {toggle === true ? (
        <div className="w-[100%]  bg-[#fffffff6] h-[150px] fixed top-[80px]  flex backdrop-blur-md drop-shadow-md flex-col justify-start text-black  z-50 items-start pl-[13%]">
          {props.data === 4 ? (
            <Link to="/home">
              <div className="w-full mt-[15px] h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center ">
                Home
              </div>
            </Link>
          ) : (
            <Link to="/home">
              <div className="w-full mt-[15px] h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center text-[#979797]">
                Home
              </div>
            </Link>
          )}
          {props.data === 1 ? (
            <Link to="/data">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center ">
                Dashboard
              </div>
            </Link>
          ) : (
            <Link to="/data">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center text-[#979797]">
                Dashboard
              </div>
            </Link>
          )}
          {props.data === 2 ? (
            <Link to="/solutions">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center ">
                Solution
              </div>
            </Link>
          ) : (
            <Link to="/solutions">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center text-[#979797]">
                Solution
              </div>
            </Link>
          )}
          {props.data === 3 ? (
            <Link to="/documentation">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center ">
                Document
              </div>
            </Link>
          ) : (
            <Link to="/documentation">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center text-[#979797]">
                Document
              </div>
            </Link>
          )}
          {/* {props.data === 3 ? (
            <Link to="/product">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center ">
                Product
              </div>
            </Link>
          ) : (
            <Link to="/documentation">
              <div className="w-full h-[30px] font-[poppins] text-[14px] cursor-pointer flex justify-start items-center text-[#979797]">
                Product
              </div>
            </Link>
          )} */}
        </div>
      ) : (
        <div></div>
      )}
      <div className="w-[100%] h-[80px] flex justify-center items-center bg-[#ffffffeb] fixed px-0 md:px-[13%]  backdrop-blur-md lg:px-[13%]  z-50 border-b border-[#c5c5c6] drop-shadow-sm">
        <div className="w-full  rounded-full  h-[50px] flex justify-between items-center z-50 px-[13%] md:px-0 lg:px-0 ">
          <div className="hidden md:flex lg:flex justify-start items-center h-full w-full">
            {/* <Link to="/home"> */}
            <div className="text-[25px] w-auto font-[mukta] font-bold flex justify-center items-center text-[black]">
              {/* <img
              src={logoUrl}
              alt="Logo"
              // style={{ width: "30px", height: "28px" }}
              className="w-full object-cover"
            /> */}
              Logo
            </div>
            {/* </Link> */}
            <Link to="/home">
              {props.data === 4 ? (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[90px] font-[poppins] font-medium text-black">
                  Home
                </div>
              ) : (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[90px] font-[poppins] font-medium text-[#a6a6a7]">
                  Home
                </div>
              )}
            </Link>
            <Link to="/data">
              {props.data === 1 ? (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-black">
                  Dashboard
                </div>
              ) : (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#a6a6a7]">
                  Dashboard
                </div>
              )}
            </Link>
            <Link to="/solutions">
              {props.data === 2 ? (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[black]">
                  Solution
                </div>
              ) : (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#a6a6a7]">
                  Solution
                </div>
              )}
            </Link>
            <Link to="/documentation">
              {props.data === 3 ? (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[black]">
                  Documentation
                </div>
              ) : (
                <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#a6a6a7]">
                  Documentation
                </div>
              )}
            </Link>
          </div>
          <div className="w-[50px] h-full flex md:hidden lg:hidden justify-start items-center">
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
                className="w-[50px] h-[50px] flex justify-start items-center"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <RxCross2 className="text-[30px] text-[black]" />
              </div>
            ) : (
              <div
                className="w-[60px] h-[60px] flex flex-col justify-center items-start"
                onClick={() => {
                  setToggle(true);
                  setToggleProfile(false);
                }}
              >
                <div className="w-[25px] h-[4px] bg-black my-[1.8px] rounded-full"></div>
                <div className="w-[25px] h-[4px] bg-black my-[1.8px] rounded-full"></div>
                <div className="w-[25px] h-[4px] bg-black my-[1.8px] rounded-full"></div>
                {/* <IoReorderThree className="text-[40px] text-[black]" /> */}
              </div>
            )}
          </div>
          <div className="text-[25px] w-auto font-[mukta] font-bold flex md:hidden lg:hidden justify-center items-center text-[black]">
            {/* <img
              src={logoUrl}
              alt="Logo"
              // style={{ width: "30px", height: "28px" }}
              className="w-full object-cover"
            /> */}
            Logo
          </div>
          <div
            className="w-[40px] h-[40px] rounded-full bg-gradient-to-b from-[#8be962] to-[#6cd179] text-[black] text-[20px] font-[poppins] font-medium flex justify-center items-center cursor-pointer z-50"
            onClick={() => {
              setToggleProfile(!toggleProfile);
              setToggle(false);
            }}
          >
            H
          </div>
        </div>
        {/* <div className="w-[90%]  min-h-[80px] pt-[10px] bg-[#1c1c28] flex justify-between items-center"></div> */}

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
    </>
  );
};

export default Navbar;
