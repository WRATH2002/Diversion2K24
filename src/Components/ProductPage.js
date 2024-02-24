import React from "react";

import product from "../Assets/img/product.jpeg";
import ambulance from "../Assets/img/ambulance.jpeg";
import productcart from "../Assets/img/productcart.jpeg";
import tracking from "../Assets/img/tracking.jpeg";
import one1 from "../Assets/img/1.webp";
import one2 from "../Assets/img/2.webp";
import one3 from "../Assets/img/3.webp";
import two1 from "../Assets/img/4.webp";
import two2 from "../Assets/img/5.webp";
import two3 from "../Assets/img/6.webp";
import three1 from "../Assets/img/10.webp";
import three2 from "../Assets/img/11.webp";
import three3 from "../Assets/img/12.webp";
import pr2 from "../Assets/img/pr2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaAngleRightt } from "react-icons/fa6";

import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import AuthDetails from "./AuthDetails";
import OutsideClickHandler from "react-outside-click-handler";
import firebase from "../firebase";

import { FaArrowRightLong } from "react-icons/fa6";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";

import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";

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

  const [imageSLider, setImageSlider] = useState(1);

  const [colorMode, setColorMode] = useState(1);
  const [alertNotification, setAlertNotification] = useState(false);
  const [account, setAccount] = useState(false);
  // const [inName, setInName] = useState("");
  // const [name, setName] = useState(false);
  useEffect(() => {
    fetchAlertNotification();
  }, []);

  function fetchAlertNotification() {
    const user = firebase.auth().currentUser;
    const alertRef = db.collection("USERS").doc(user.uid);

    onSnapshot(alertRef, (snapshot) => {
      setAlertNotification(snapshot.data().state);
    });
  }

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

  function sendDataToFirestore() {
    const user = firebase.auth().currentUser;
    db.collection("USERS").doc(user.uid).update({
      PatientName: inName,
      Address: inAdd,
      CaretakerName: inCare,
      InsuranceId: inId,
      InsuranceCompany: inCom,
    });
  }
  return (
    <>
      {account === true ? (
        <>
          <div className="fixed bottom-[80px] right-[20px] flex justify-center items-center bg-[#e2f9fd] rounded-xl w-[100px] h-[50px] z-50">
            Log Out
          </div>
        </>
      ) : (
        <></>
      )}
      {authUser ? (
        <>
          <div className="w-[100%] h-[80px]"></div>
          {modal === true ? (
            <div
              className="w-[100%] h-[calc(100svh)] flex justify-center top-[0] items-center fixed bg-[white]  backdrop-blur-sm z-50"
              onClick={() => {
                // setName(false);
                // setModal(false);
              }}
            >
              {/* <OutsideClickHandler
                onOutsideClick={() => {
                  setModal(false);
                  setInName("");
                  setInAdd("");
                  setInCare("");
                  setInId("");
                  setInCom("");
                }}
                className="w-full h-full"
              > */}
              <div
                className="w-[90%] md:w-[390px] lg:w-[390px] rounded-2xl p-[30px] py-[50px] h-[80%] md:h-[90%] lg:h-[90%] bg-[white]  z-50 flex flex-col text-white justify-between items-start font-[google]"
                onClick={() => {
                  // setName(false);
                  // setModal(true);
                }}
              >
                <span className="leading-[1.2] text-[21px] md:text-[21px] lg:text-[21px] font-[google] font-semibold text-[#000000] mb-[-4px] w-full  flex flex-wrap">
                  Avail One-Click SOS Service
                </span>
                <span className="font-thin leading-[1.2] text-[13px] md:text-[13px] lg:text-[13px] font-[google] mb-[20px] text-[#8d8d8d] mt-[10px] w-full  flex flex-wrap">
                  *To avail this service, we need some informations
                </span>
                <div className="w-full h-[60px] my-[1px] mt-[10px]  flex flex-col justify-start items-start">
                  {name === true && inName.length != 0 ? (
                    <span
                      className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#ffffff] px-[4px]  z-50 text-[#56bf64]"
                      style={{ transition: ".15s" }}
                    >
                      Name
                    </span>
                  ) : (
                    <span
                      className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-30"
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
                    className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#c5c5c6] text-[#000000] outline-none text-[14px]"
                  ></input>
                </div>
                <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                  {add === true && inAdd.length != 0 ? (
                    <span
                      className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#ffffff] px-[4px]  z-50 text-[#56bf64]"
                      style={{ transition: ".15s" }}
                    >
                      Address
                    </span>
                  ) : (
                    <span
                      className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-30"
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
                    className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#c5c5c6] text-[#000000] outline-none text-[14px]"
                  ></input>
                </div>
                <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                  {care === true && inCare.length != 0 ? (
                    <span
                      className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#ffffff] px-[4px]  z-50 text-[#56bf64]"
                      style={{ transition: ".15s" }}
                    >
                      Name of Caretaker
                    </span>
                  ) : (
                    <span
                      className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-30"
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
                    className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#c5c5c6] text-[#000000] outline-none text-[14px]"
                  ></input>
                </div>
                <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                  {id === true && inId.length != 0 ? (
                    <span
                      className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#ffffff] px-[4px]  z-50 text-[#56bf64]"
                      style={{ transition: ".15s" }}
                    >
                      Insurance Id
                    </span>
                  ) : (
                    <span
                      className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-30"
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
                    className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#c5c5c6] text-[#000000] outline-none text-[14px]"
                  ></input>
                </div>
                <div className="w-full h-[60px] my-[1px]  flex flex-col justify-start items-start">
                  {com === true && inCom.length != 0 ? (
                    <span
                      className="ml-[16px] h-[18px] text-[12.5px] mt-[-4px] fixed bg-[#ffffff] px-[4px]  z-50 text-[#56bf64]"
                      style={{ transition: ".15s" }}
                    >
                      Company Name
                    </span>
                  ) : (
                    <span
                      className="ml-[20px] h-[18px] text-[14px] mt-[19px] px-[0] fixed text-[#979797]  z-30"
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
                    className="w-full z-40 bg-transparent h-[50px] rounded-xl my-[5px] px-[20px] border-[1.5px] border-[#c5c5c6] text-[#000000] outline-none text-[14px]"
                  ></input>
                </div>

                <button
                  // placeholder="Last Name"
                  className="w-full bg-gradient-to-b from-[#8be962] to-[#6cd179] h-[50px] rounded-xl my-[5px] font-[google] mt-[30px] px-[20px] text-[white] outline-none"
                  style={{ transition: ".2s" }}
                  onClick={() => {
                    setModal(false);
                    setInName("");
                    setInAdd("");
                    setInCare("");
                    setInId("");
                    setInCom("");
                    sendDataToFirestore();
                  }}
                >
                  Submit
                </button>
                <button
                  // placeholder="Last Name"
                  className="w-full bg-[#adadad] h-[50px] rounded-xl mt-[5px] font-[google] px-[20px] text-[white] outline-none"
                  style={{ transition: ".2s" }}
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Cancel
                </button>
                {/* </div> */}
              </div>
              {/* </OutsideClickHandler> */}
            </div>
          ) : (
            <></>
          )}
          <div className="w-full h-[calc(100svh-70px)] bg-[#ffffff] fixed top-0 flex flex-col md:flex-row lg:flex-row  justify-between  items-center px-[13%] pt-0  z-30">
            <div className="w-full md:w-[50%] lg:w-[50%] h-[50%]  md:h-full lg:h-full  flex flex-col justify-center items-center p-[6%]">
              <div className="h-[calc(100%-10px)] w-full  flex justify-center items-center">
                {colorMode === 2 ? (
                  <>
                    {imageSLider === 1 ? (
                      <img className="h-full object-cover " src={one1}></img>
                    ) : imageSLider === 2 ? (
                      <img className="h-full object-cover " src={one2}></img>
                    ) : (
                      <img className="h-full object-cover " src={one3}></img>
                    )}
                  </>
                ) : colorMode === 1 ? (
                  <>
                    {imageSLider === 1 ? (
                      <img className="h-full object-cover " src={two1}></img>
                    ) : imageSLider === 2 ? (
                      <img className="h-full object-cover " src={two2}></img>
                    ) : (
                      <img className="h-full object-cover " src={two3}></img>
                    )}
                  </>
                ) : (
                  <>
                    {imageSLider === 1 ? (
                      <img className="h-full object-cover " src={three1}></img>
                    ) : imageSLider === 2 ? (
                      <img className="h-full object-cover " src={three2}></img>
                    ) : (
                      <img className="h-full object-cover " src={three3}></img>
                    )}
                  </>
                )}
              </div>
              <div className="w-full h-[3px] flex justify-center items-center">
                {imageSLider === 1 ? (
                  <div className="w-[10px] h-[10px] bg-[#56bf64] rounded-full mx-[3px] cursor-pointer"></div>
                ) : (
                  <div
                    className="w-[10px] h-[10px] bg-[#d1d1d1] rounded-full mx-[3px] cursor-pointer"
                    onClick={() => {
                      setImageSlider(1);
                    }}
                  ></div>
                )}
                {imageSLider === 2 ? (
                  <div className="w-[10px] h-[10px] bg-[#56bf64] rounded-full mx-[3px] cursor-pointer"></div>
                ) : (
                  <div
                    className="w-[10px] h-[10px] bg-[#d1d1d1] rounded-full mx-[3px] cursor-pointer"
                    onClick={() => {
                      setImageSlider(2);
                    }}
                  ></div>
                )}
                {imageSLider === 3 ? (
                  <div className="w-[10px] h-[10px] bg-[#56bf64] rounded-full mx-[3px] cursor-pointer"></div>
                ) : (
                  <div
                    className="w-[10px] h-[10px] bg-[#d1d1d1] rounded-full mx-[3px] cursor-pointer"
                    onClick={() => {
                      setImageSlider(3);
                    }}
                  ></div>
                )}
              </div>
              <div className="w-[50%] fixed flex justify-start items-center left-[13%] z-40">
                {imageSLider === 1 ? (
                  <div
                    className=" w-[30px] h-[30px] flex justify-center items-center z-40 "
                    onClick={() => {
                      if (imageSLider > 1) {
                        setImageSlider(imageSLider - 1);
                        console.log("gsdvkuyvd");
                      }
                    }}
                  >
                    <FaAngleLeft className="text-[#aeaeae] text-[20px]" />
                  </div>
                ) : (
                  <div
                    className=" w-[30px] h-[30px] flex justify-center items-center z-40 "
                    onClick={() => {
                      if (imageSLider > 1) {
                        setImageSlider(imageSLider - 1);
                        console.log("gsdvkuyvd");
                      }
                    }}
                  >
                    <FaAngleLeft
                      className="text-[black] text-[20px]"
                      // onClick={() => {
                      //   if (imageSLider < 3) {
                      //     setImageSlider(imageSLider + 1);
                      //   }
                      // }}
                    />
                  </div>
                )}
              </div>
              <div className="w-[50%] fixed flex justify-end  items-center right-[13%] z-40  ">
                {imageSLider === 3 ? (
                  <div
                    className=" w-[30px] h-[30px] flex justify-center items-centere z-40 "
                    onClick={() => {
                      if (imageSLider < 3) {
                        setImageSlider(imageSLider + 1);
                      }
                      // console.log("cleicljno");
                    }}
                  >
                    <FaAngleRight className="text-[#aeaeae] text-[20px]" />
                  </div>
                ) : (
                  <div
                    className=" w-[30px] h-[30px] flex justify-center items-centere z-40"
                    onClick={() => {
                      if (imageSLider < 3) {
                        setImageSlider(imageSLider + 1);
                      }
                    }}
                  >
                    <FaAngleRight
                      className="text-[black] text-[20px]"
                      // onClick={() => {
                      //   if (imageSLider > 1) {
                      //     setImageSlider(imageSLider - 1);
                      //   }
                      // }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-[50%] h-[50%]  md:h-full lg:h-full flex flex-col justify-between md:justify-center lg:justify-center items-center md:items-start lg:items-start pb-[20px]">
              <div className="w-full">
                <div className="font-bold font-[google] leading-[1] text-[39px] md:text-[50px] lg:text-[50px] text-[#000000] mt-[10px] w-full flex justify-start">
                  <span>Smart Band</span>
                </div>
                <div className="w-full font-[google] font-normal mt-[10px]">
                  <span className="text-[23px] text-[#424242] ">
                    Rs. 1299 /-
                  </span>
                </div>
                <div className="w-full font-[google] flex items-center mt-[15px]">
                  {colorMode === 1 ? (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#56bf64] flex justify-center items-center rounded-full ">
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
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#56bf64] flex justify-center items-center rounded-full ">
                        <div className="w-[30px] h-[30px] rounded-full bg-[#d1d1d1]  cursor-pointer "></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div
                        className="w-[27px] h-[27px] rounded-full bg-[#d1d1d1] cursor-pointer "
                        onClick={() => {
                          setColorMode(2);
                        }}
                      ></div>
                    </div>
                  )}
                  {colorMode === 3 ? (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#56bf64] flex justify-center items-center rounded-full ">
                        <div className="w-[30px] h-[30px] rounded-full bg-[#2c2c2c]  cursor-pointer "></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[40px] flex justify-center items-center">
                      <div
                        className="w-[27px] h-[27px] rounded-full bg-[#2c2c2c]  cursor-pointer "
                        onClick={() => {
                          setColorMode(3);
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="w-full font-[google] font-normal text-[13px] flex justify-start items-center mt-[15px] pr-[0px] md:pr-[50px] lg:pr-[50px] ">
                  <div className="w-full md:w-[85%] lg:w-[85%]  text-[15px] md:text-[15px] lg:text-[15px] font-[google] text-[#888888] pr-[0px] md:pr-[50px] text-justify">
                    It is a smart fitband used to{" "}
                    <text className="text-[#56bf64] text-[15px] md:text-[15px] lg:text-[15px] font-[google] ">
                      track BPM
                    </text>{" "}
                    and Location of an old person and it sends notification
                    according to it. It has an inbuilt{" "}
                    <text className="text-[#56bf64] text-[15px] md:text-[15px] lg:text-[15px] font-[google] ">
                      SOS
                    </text>{" "}
                    System.
                  </div>
                </div>
              </div>
              <div
                className="w-[100%]  md:w-[35%] lg:w-[35%] h-[60px] bg-gradient-to-b from-[#8be962] to-[#6cd179] mt-0 md:mt-[30px] lg:mt-[30px] cursor-pointer  rounded-xl flex justify-center items-center"
                style={{ transition: ".2s" }}
                onClick={() => {
                  setModal(true);
                }}
              >
                <div className="font-[google] font-medium text-[black]">
                  Buy Now
                </div>
              </div>
              {/* <button className="w-[300px] h-[50px] drop-shadow-md shadow-inner">
                hello
              </button> */}
            </div>
          </div>
          <div className="w-full h-[70px] fixed bottom-0 flex justify-between items-center  text-[15px] bg-[#ffffffe0] backdrop-blur-xl">
            <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
              <Link
                to="/"
                className="w-full h-full flex justify-center items-center flex-col"
              >
                <RiHome3Fill className="text-[23px] my-[2px]" />
                Home
              </Link>
            </div>

            {alertNotification === false ? (
              <>
                <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
                  <Link
                    to="/alert"
                    className="w-full h-full flex justify-center items-center flex-col"
                  >
                    <HiOutlineBellAlert className="text-[23px] my-[2px]" />
                    Alerts
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-[30%] h-[50px] flex flex-col text-[#e41c1b] justify-center items-center ">
                  <Link
                    to="/alert"
                    className="w-full h-full flex justify-center items-center flex-col"
                  >
                    <HiMiniBellAlert className="bell text-[23px] my-[2px]" />
                    Alerts
                  </Link>
                </div>
              </>
            )}

            <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
              <Link
                to="/dashboard"
                className="w-full h-full flex justify-center items-center flex-col"
              >
                <MdOutlineSpaceDashboard className="text-[23px] my-[2px]" />
                Dashboard
              </Link>
            </div>
            <div
              className="w-[30%] h-[50px] flex flex-col justify-center items-center "
              onClick={() => {
                setAccount(!account);
              }}
            >
              {/* <Link className="w-full h-full"> */}
              <VscAccount className="text-[23px] my-[2px]" />
              Account
              {/* </Link> */}
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
