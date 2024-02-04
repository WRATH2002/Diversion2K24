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
    <div className="w-[100%] h-[80px] flex justify-center items-center bg-[#000000] px-0 md:px-[160px] lg:px-[160px]">
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
      <div className="w-[calc(100%-20px)] md:w-[100%] lg:w-[100%] px-[20px] bg-[#262626] rounded-full  h-[50px] flex justify-between items-center z-50 ">
        <div className="hidden md:flex lg:flex justify-start items-center h-full w-full">
          {/* <Link to="/home"> */}
          <div className="text-[25px] w-[30px] font-[mukta] font-bold flex justify-center items-center text-[#00ff41]">
            <img
              src={logoUrl}
              alt="Logo"
              // style={{ width: "30px", height: "28px" }}
              className="w-full object-cover"
            />
          </div>
          {/* </Link> */}
          <Link to="/home">
            {props.data === 4 ? (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[90px] font-[poppins] font-medium text-white">
                Home
              </div>
            ) : (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[90px] font-[poppins] font-medium text-[#979797]">
                Home
              </div>
            )}
          </Link>
          <Link to="/data">
            {props.data === 1 ? (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-white">
                Dashboard
              </div>
            ) : (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#979797]">
                Dashboard
              </div>
            )}
          </Link>
          <Link to="/solutions">
            {props.data === 2 ? (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[white]">
                Solution
              </div>
            ) : (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#979797]">
                Solution
              </div>
            )}
          </Link>
          <Link to="/documentation">
            {props.data === 3 ? (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[white]">
                Documentation
              </div>
            ) : (
              <div className="text-[14px] cursor-pointer flex justify-center items-center ml-[40px] font-[poppins] font-medium text-[#979797]">
                Documentation
              </div>
            )}
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
              className="w-[50px] h-[50px] flex justify-start items-center"
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
                setToggleProfile(false);
              }}
            >
              <IoReorderThree className="text-[40px] text-white" />
            </div>
          )}
        </div>
        <div
          className="w-[30px] h-[30px] rounded-full bg-[#6e6e73] text-[black] text-[20px] font-[poppins] font-medium flex justify-center items-center cursor-pointer z-50"
          onClick={() => {
            setToggleProfile(!toggleProfile);
            setToggle(false);
          }}
        >
          H
        </div>
      </div>
      {/* <div className="w-[90%]  min-h-[80px] pt-[10px] bg-[#1c1c28] flex justify-between items-center"></div> */}

      {toggle === true ? (
        <div className="w-[calc(100%-20px)] rounded-2xl bg-[#262626] h-[150px] fixed top-[80px] flex flex-col justify-start text-white z-50 items-start pl-[20px]">
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

      {toggleProfile === true ? (
        <>
          <div
            className="fixed w-[180px] h-[60px] backdrop-blur-md bg-[#262626] top-[80px] right-[10px] md:right-[160px] lg:right-[160px] rounded-2xl flex flex-col justify-start  items-start pl-[20px] z-50 text-[white]"
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
            className="fixed w-[180px] h-[0] overflow-y-hidden backdrop-blur-md bg-[#262626] top-[80px] right-[10px] md:right-[160px] lg:right-[160px] rounded-2xl flex flex-col justify-start  items-start pl-[20px] z-50 text-[white]"
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
