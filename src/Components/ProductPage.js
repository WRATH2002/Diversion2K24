import React from "react";

import product from "../Assets/img/product.jpeg";
import ambulance from "../Assets/img/ambulance.jpeg";
import productcart from "../Assets/img/productcart.jpeg";
import tracking from "../Assets/img/tracking.jpeg";
import pr from "../Assets/img/pr.png";
import pr2 from "../Assets/img/pr2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaAngleRightt } from "react-icons/fa6";

import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import AuthDetails from "./AuthDetails";
import OutsideClickHandler from "react-outside-click-handler";
const ProductPage = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(false);
  const [add, setAdd] = useState(false);
  const [care, setCare] = useState(false);
  const [com, setCom] = useState(false);
  const [id, setId] = useState(false);

  const [inName, setInName] = useState("");
  const [inAdd, setInAdd] = useState("");
  const [inCare, setInCare] = useState("");
  const [inId, setInId] = useState("");
  const [inCom, setInCom] = useState("");

  const [colorMode, setColorMode] = useState(1);
  // const [inName, setInName] = useState("");
  // const [name, setName] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <>
      {authUser ? (
        <>
          <Navbar />
          {modal === true ? (
            <div
              className="w-[100%] h-[calc(100dvh)] flex justify-center top-0 items-center fixed  backdrop-blur-sm "
              onClick={() => {
                // setName(false);
                // setModal(false);
              }}
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  setModal(false);
                  setInName("");
                  setInAdd("");
                  setInCare("");
                  setInId("");
                  setInCom("");
                  // alert("You clicked outside of this c omponent!!!");
                }}
                // className="w-full h-full"
              >
                <div
                  className="w-[300px] md:w-[390px] lg:w-[390px] rounded-2xl p-[40px] py-[20px] h-[70%] md:h-[90%] lg:h-[90%] bg-[#262626] z-50 flex flex-col text-white justify-center items-start font-[poppins]"
                  onClick={() => {
                    // setName(false);
                    // setModal(true);
                  }}
                >
                  <span className="font-medium leading-[1.2] text-[21px] md:text-[21px] lg:text-[21px] font-[poppins] text-[#f5f5f7] mb-[-4px] w-full  flex flex-wrap">
                    Avail One-Click SOS Service
                  </span>
                  <span className="font-thin leading-[1.2] text-[13px] md:text-[13px] lg:text-[13px] font-[poppins] mb-[20px] text-[#8d8d8d] mt-[10px] w-full  flex flex-wrap">
                    *To avail this service, we need some informations
                  </span>
                  <div className="w-full h-[60px] my-[1px] mt-[10px]  flex flex-col justify-start items-start">
                    {name === true && inName.length != 0 ? (
                      <span
                        className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#262626] px-[4px]  z-50 text-[#47a3ff]"
                        style={{ transition: ".15s" }}
                      >
                        Name
                      </span>
                    ) : (
                      <span
                        className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-50"
                        style={{ transition: ".15s" }}
                      >
                        {inName ? <></> : <>Name</>}
                      </span>
                    )}
                    <input
                      onFocus={() => {
                        setName(true);
                      }}
                      // onBlur={() => {
                      //   setName(false);
                      // }}
                      value={inName}
                      onChange={(e) => setInName(e.target.value)}
                      className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#737373] text-[white] outline-none text-[14px]"
                    ></input>
                  </div>
                  <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                    {add === true && inAdd.length != 0 ? (
                      <span
                        className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#262626] px-[4px]  z-50 text-[#47a3ff]"
                        style={{ transition: ".15s" }}
                      >
                        Address
                      </span>
                    ) : (
                      <span
                        className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-50"
                        style={{ transition: ".15s" }}
                      >
                        {inAdd ? <></> : <>Address</>}
                      </span>
                    )}
                    <input
                      onFocus={() => {
                        setAdd(true);
                      }}
                      value={inAdd}
                      onChange={(e) => setInAdd(e.target.value)}
                      // onBlur={() => {
                      //   setAdd(false);
                      // }}
                      className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#737373] text-[white] outline-none text-[14px]"
                    ></input>
                  </div>
                  <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                    {care === true && inCare.length != 0 ? (
                      <span
                        className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#262626] px-[4px]  z-50 text-[#47a3ff]"
                        style={{ transition: ".15s" }}
                      >
                        Name of Caretaker
                      </span>
                    ) : (
                      <span
                        className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-50"
                        style={{ transition: ".15s" }}
                      >
                        {inCare ? <></> : <>Name of Caretaker</>}
                      </span>
                    )}
                    <input
                      onFocus={() => {
                        setCare(true);
                      }}
                      value={inCare}
                      onChange={(e) => setInCare(e.target.value)}
                      // onBlur={() => {
                      //   setCare(false);
                      // }}
                      className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#737373] text-[white] outline-none text-[14px]"
                    ></input>
                  </div>
                  <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                    {id === true && inId.length != 0 ? (
                      <span
                        className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#262626] px-[4px]  z-50 text-[#47a3ff]"
                        style={{ transition: ".15s" }}
                      >
                        Insurance Id
                      </span>
                    ) : (
                      <span
                        className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-50"
                        style={{ transition: ".15s" }}
                      >
                        {inId ? <></> : <>Insurance Id</>}
                      </span>
                    )}
                    <input
                      onFocus={() => {
                        setId(true);
                      }}
                      value={inId}
                      onChange={(e) => setInId(e.target.value)}
                      // onBlur={() => {
                      //   setId(false);
                      // }}
                      className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#737373] text-[white] outline-none text-[14px]"
                    ></input>
                  </div>
                  <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                    {com === true && inCom.length != 0 ? (
                      <span
                        className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#262626] px-[4px]  z-50 text-[#47a3ff]"
                        style={{ transition: ".15s" }}
                      >
                        Company Name
                      </span>
                    ) : (
                      <span
                        className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-50"
                        style={{ transition: ".15s" }}
                      >
                        {inCom ? <></> : <>Company Name</>}
                      </span>
                    )}
                    <input
                      onFocus={() => {
                        setCom(true);
                      }}
                      value={inCom}
                      onChange={(e) => setInCom(e.target.value)}
                      // onBlur={() => {
                      //   setCom(false);
                      // }}
                      className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#737373] text-[white] outline-none text-[14px]"
                    ></input>
                  </div>

                  <button
                    // placeholder="Last Name"
                    className="w-full bg-[#0071e3] hover:bg-[#50cccc] h-[50px] rounded-xl my-[5px] font-[poppins] mt-[30px] px-[20px] text-[white] outline-none"
                    style={{ transition: ".2s" }}
                    onClick={() => {
                      setModal(false);
                      setInName("");
                      setInAdd("");
                      setInCare("");
                      setInId("");
                      setInCom("");
                    }}
                  >
                    Submit
                  </button>
                  {/* </div> */}
                </div>
              </OutsideClickHandler>
            </div>
          ) : (
            <></>
          )}
          <div className="w-full h-[calc(100svh-80px)] bg-[#000000] flex flex-col md:flex-row lg:flex-row  justify-sart items-center p-[40px] pt-0  z-30">
            <div className="w-full md:w-[50%] lg:w-[50%] h-[45%] md:h-full lg:h-full  flex justify-center items-center ">
              <div className="h-full w-full  flex justify-center items-center">
                <img className="h-full object-cover " src={pr2}></img>
              </div>
              <div className="w-full fixed flex justify-start items-center left-[40px] ">
                <div className=" w-[30px] h-[30px] flex justify-center itemc">
                  <FaAngleLeft className="text-white text-[20px]" />
                </div>
              </div>
              <div className="w-full fixed flex justify-end  items-center right-[40px]">
                <div className=" w-[30px] h-[30px] flex justify-center itemc">
                  <FaAngleRight className="text-white text-[20px]" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-[50%] h-[55%] md:h-full lg:h-full flex flex-col justify-between md:justify-center lg:justify-center items-center md:items-start lg:items-start">
              <div className="w-full">
                <div className="font-bold leading-[1] text-[39px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] mt-[10px] w-full flex justify-start">
                  <span>Smart Band</span>
                </div>
                <div className="w-full font-[poppins] font-medium mt-[10px]">
                  <span className="text-[23px] text-[#cbcbcb] ">
                    Rs. 1299 /-
                  </span>
                </div>
                <div className="w-full font-[poppins] flex items-center mt-[15px]">
                  {colorMode === 1 ? (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#0071e3] flex justify-center items-center rounded-full ">
                        <div className="w-[30px] h-[30px] rounded-full bg-[#A95565] cursor-pointer "></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div
                        className="w-[27px] h-[27px] rounded-full bg-[#A95565] cursor-pointer  "
                        onClick={() => {
                          setColorMode(1);
                        }}
                      ></div>
                    </div>
                  )}
                  {colorMode === 2 ? (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#0071e3] flex justify-center items-center rounded-full ">
                        <div className="w-[30px] h-[30px] rounded-full bg-[white]  cursor-pointer "></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div
                        className="w-[27px] h-[27px] rounded-full bg-[white] cursor-pointer "
                        onClick={() => {
                          setColorMode(2);
                        }}
                      ></div>
                    </div>
                  )}
                  {colorMode === 3 ? (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#0071e3] flex justify-center items-center rounded-full ">
                        <div className="w-[30px] h-[30px] rounded-full bg-[#535353]  cursor-pointer "></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div
                        className="w-[27px] h-[27px] rounded-full bg-[#535353]  cursor-pointer "
                        onClick={() => {
                          setColorMode(3);
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="w-full font-[poppins] font-normal text-[13px] flex justify-start items-center mt-[15px] pr-[0px] md:pr-[50px] lg:pr-[50px] ">
                  <span className="w-full md:w-[85%] lg:w-[85%]  text-[17px] md:text-[15px] lg:text-[15px] font-[poppins] text-[#6b6b6b] pr-[0px] md:pr-[50px] text-justify">
                    It is a smart fitband used to{" "}
                    <span className="text-[#00ff41]">track BPM</span> and
                    Location of an old person and it sends notification
                    according to it. It has an inbuilt{" "}
                    <span className="text-[#00ff41]">SOS</span> System.
                  </span>
                </div>
              </div>
              <div
                className="w-[100%]  md:w-[35%] lg:w-[35%] h-[50px] bg-[#0071e3] hover:bg-[#50cccc] mt-0 md:mt-[30px] lg:mt-[30px] cursor-pointer  rounded-xl flex justify-center items-center"
                style={{ transition: ".2s" }}
                onClick={() => {
                  setModal(true);
                }}
              >
                <span className="font-[poppins] font-medium text-[white]">
                  Buy Now
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <AuthDetails />
        </>
      )}
    </>
  );
};

export default ProductPage;
