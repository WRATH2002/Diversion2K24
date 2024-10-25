import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";

import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import { auth, db, st } from "../firebase";

import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";
import mp from "../Assets/img/mp.png";

import { CgSmartphoneShake } from "react-icons/cg";
import { IoWatchOutline } from "react-icons/io5";
import { FaPersonFalling } from "react-icons/fa6";
import { PiHeartbeatFill } from "react-icons/pi";
import { IoWatch } from "react-icons/io5";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import Map from "./Map";
const RecordData = () => {
  // const [showAlert, setShowAlert] = useState(true);
  const [alert, setAlert] = useState(false);

  const [status, setStatus] = useState(false);
  const [wornStatus, setWornStatus] = useState(true);
  const [lastBpm, setLastBpm] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataSize, setDataSize] = useState(0);
  const [prevDataSize, setPrevDataSize] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [flag, setFlag] = useState(0);
  const [account, setAccount] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [countDown, setCountDown] = useState(30);
  const [contact, setContact] = useState("");
  const [emContact, setEmContact] = useState("");
  // const recordData = [];
  let recordData;

  useEffect(() => {
    setLastUpdated(Date.now());
    console.log("time changeddddd");
    console.log(Date.now());
  }, [recordData]);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    if (alert === true) {
      if (countDown === 0) {
        ignoreFallState();
        sendNotification();
      } else {
        setTimeout(() => {
          // setData("Welcome to gfg!");
          // setIsLoading(false);
          // let temp = alert;
          setCountDown(countDown - 1);
        }, 1000);
      }
    }
  }, [alert, countDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeElapsed = Date.now() - lastUpdated;
      const timeLimit = 5000;
      if (timeElapsed > timeLimit) {
        setWornStatus(false);
      } else {
        setWornStatus(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function fetchFallState() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db.collection("USERS").doc(user1?.uid);
    onSnapshot(StateRef, (snapshot) => {
      setStatus(snapshot.data()?.state);
      recordData = snapshot.data()?.Data;
      setLastBpm(recordData[recordData?.length - 1]?.Bpm);
      setEmContact(snapshot.data()?.contact);
      setLastUpdated(Date.now());
    });
  }

  useEffect(() => {
    fetchFallState();
    fetchAlert();
  }, []);

  function fetchAlert() {
    const user = firebase.auth().currentUser;
    const DataRef = db.collection("USERS").doc(user.uid);

    onSnapshot(DataRef, (snapshot) => {
      // console.log(snapshot.data().Data);
      setAlert(snapshot.data().state);
    });
    // console.log(user);
  }

  function ignoreFallState() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db
      .collection("USERS")
      .doc(user1?.uid)
      .update({ state: false });
    setCountDown(30);
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out Successfully"))
      .catch((error) => console.log(error));
  };

  function sendNotification() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(`Fall Detected 
on ${new Date().getDate()}/${
          parseInt(new Date().getMonth()) + 1
        }/${new Date().getFullYear()}`);
      }
    });
    window.location.href = `tel:${emContact}`;
  }

  function call() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(`Calling Ambulance`);
      }
    });
    // alert("Calling Ambulance");
  }

  function updateContact() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db
      .collection("USERS")
      .doc(user1?.uid)
      .update({ contact: contact });
    setContact("");
  }
  function isNumeric(str) {
    if (typeof str !== "string") return false;
    if (str === "") return true;
    return /^[0-9]+(\.[0-9]*)?$/.test(str);
  }
  return (
    <>
      {account === true ? (
        <>
          <div className="w-auto p-[10px] h-[120px] rounded-xl bg-[white] fixed top-[85px] drop-shadow-sm z-50 right-[20px]">
            {/* <div
              className="flex justify-center items-center rounded-xl w-full h-[40px] z-50"
              onClick={() => {
                userSignOut();
              }}
            >
              Log Out
            </div> */}
            <Link
              to="/documentation"
              className="flex justify-start items-center rounded-xl w-full h-[40px] px-[10px] z-50"
            >
              <div className="mr-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-text"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>{" "}
              Documentation
            </Link>
            {/* <div className="flex justify-center items-center rounded-xl w-full h-[40px] z-50">
              Documentation
            </div> */}
            <Link
              to="/solutions"
              className="flex justify-start items-center rounded-xl w-full h-[40px] px-[10px] z-50"
            >
              <div className="mr-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-cpu"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
              </div>
              Solution
            </Link>
            {/* <div className="flex justify-center items-center rounded-xl w-full h-[40px] z-50">
              Solution
            </div> */}
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="w-full  left-0 top-0 h-[65px]  fixed  z-50 flex justify-center items-end px-[20px] font-[geist]">
        <div
          className="w-full md:w-[60%] xl:w-[60%] h-full bg-gradient-to-b from-[#F8F8F8] from-[70%] to-[#f8f8f800]  z-50 flex justify-between items-end px-[0px] md:px-[5px] lg:px-[5px] font-[geist]"
          // style={{
          //   boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.06)",
          // }}
        >
          <div className="font-semibold h-[45px] aspect-square rounded-full bg-[#ffffff] text-[19px] flex justify-center items-center drop-shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex justify-end items-center">
            <div
              className="flex justify-center items-center h-[35px] aspect-square rounded-xl bg-[#EDF1F4] ml-[15px] drop-shadow-sm"
              onClick={() => {
                setAccount(!account);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-ellipsis-vertical"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </div>
            {/* <div className="w-[20px] aspect-square bg-[red]"></div> */}
            <div className="flex justify-center items-center h-[35px] aspect-square rounded-xl bg-[#EDF1F4] ml-[10px] drop-shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[100svh] fixed bg-[black] flex justify-start items-start">
        <div className="w-[500px] h-[500px] fixed left-[-200px] top-[-200px] bg-[#5fcff5] rounded-full"></div>
        <div className="w-[300px] h-[300px] fixed bottom-[110px] right-[-110px] bg-[#976cf7] rounded-full"></div>
      </div> */}
      <div className="w-full h-[100dvh]  flex flex-col justify-start items-center bg-[#F8F8F8]  backdrop-blur-3xl">
        {/* <div className="min-h-[85px] "></div> */}
        <div className="w-full md:w-[60%] lg:w-[60%] h-full  flex flex-col justify-start items-center px-[20px] pt-[85px] overflow-y-scroll">
          {/* <div className="h-[80px] w-full flex justify-center text-white items-center font-[geist] font-normal text-[28px] tracking-wider">
            Health Monitor
          </div> */}
          <div className="w-full h-auto flex flex-col justify-center  items-start p-[7px] bg-white border rounded-3xl border-[#f4f4f4] ">
            <div className="w-full h-[70px] rounded-[17px]  bg-[#F7F8FA] flex justify-start items-center px-[15px]">
              <div
                className={
                  "w-[40px] aspect-square rounded-full  flex justify-center items-center" +
                  (alert
                    ? " bg-[#FB8383]"
                    : " bg-gradient-to-tl from-[#9FB5CB] to-[#DAE3EA]")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bell-electric"
                >
                  <path d="M18.8 4A6.3 8.7 0 0 1 20 9" />
                  <path d="M9 9h.01" />
                  <circle cx="9" cy="9" r="7" />
                  <rect width="10" height="6" x="4" y="16" rx="2" />
                  <path d="M14 19c3 0 4.6-1.6 4.6-1.6" />
                  <circle cx="20" cy="16" r="2" />
                </svg>
              </div>
              <div className="w-[calc(100%-55px)] ml-[15px] flex flex-col justify-center items-start">
                {/* <div className="w-full flex justify-start items-center text-center font-[geist] font-normal text-[#a0a0a0] text-[14px] mt-[0px] ">
                    bpm over time
                  </div> */}
                <div
                  className={
                    "w-full flex justify-start items-center font-[geist] font-normal text-[18px] mt-[-1px] "
                  }
                >
                  {alert ? <>Fall Detected</> : <>No Fall Detected</>}
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center px-[15px] my-[10px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-cross"
                >
                  <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
                </svg>
              </div>
              <div className="ml-[15px] text-[13px] font-[geist] text-[#a0a0a0]">
                No Alerts have been triggered today. Your safety is our
                priority.
              </div>
            </div>
          </div>
          <div className="mt-[10px] rounded-2x w-full flex justify-start items-center font-[geist] ">
            <div className=" w-[calc((100%-7px)/2)] h-[120px] bg-[#ffffff]  border border-[#f4f4f4] rounded-2xl rounded-r-md flex px-[20px] justify-between items-center flex-row">
              <div className="flex flex-col justify-center items-start w-[calc(100%-40px)]">
                <span className="font-[geist] text-[14px] text-[#6e6e6e]">
                  Device status
                </span>

                <span className="font-[geist] text-[18px] ">
                  {wornStatus === false ? (
                    <span className="font-[geist] text-[18px] text-[#c10d0d] ">
                      Device not Worn
                    </span>
                  ) : loading === true ? (
                    <span className="font-[geist] text-[18px] ">
                      Calibrating Device
                    </span>
                  ) : (
                    <span className="font-[geist] text-[18px] text-[#058b05]">
                      Device Worn
                    </span>
                  )}
                </span>
              </div>
              <div className="w-[30px] aspect-square rounded-full flex justify-center items-center bg-[#D8E2EE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-watch"
                >
                  <circle cx="12" cy="12" r="6" />
                  <polyline points="12 10 12 12 13 13" />
                  <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
                  <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
                </svg>
              </div>
            </div>
            <div className=" w-[calc((100%-7px)/2)] h-[120px] bg-[#ffffff] border border-[#f4f4f4] ml-[7px] rounded-2xl rounded-l-md flex px-[20px] justify-between items-center flex-row">
              <div className="flex flex-col justify-center items-start w-[calc(100%-40px)]">
                <span className="font-[geist] text-[14px] text-[#6e6e6e]">
                  Fall status
                </span>
                <span className="font-[geist] text-[18px] text-[black]">
                  {alert === false ? (
                    <span className="font-[geist] text-[18px] text-[#058b05] ">
                      Not Triggered
                    </span>
                  ) : (
                    <span className="font-[geist] text-[18px] text-[#c10d0d]">
                      Triggered
                    </span>
                  )}
                </span>
              </div>
              <div className="w-[30px] aspect-square rounded-full flex justify-center items-center bg-[#D8E2EE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-activity"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-[10px] rounded-2x w-full flex justify-start items-center font-[geist] ">
            <div className=" w-[calc((100%-7px)/2)] h-[120px] bg-[#ffffff]  border border-[#f4f4f4] rounded-2xl rounded-r-md flex px-[20px] justify-between items-center flex-row">
              <div className="flex flex-col justify-center items-start w-[calc(100%-40px)]">
                <span className="font-[geist] text-[14px] text-[#6e6e6e]">
                  Current bpm
                </span>

                <span className="font-[geist] text-[18px] ">
                  {wornStatus === false ? (
                    <span className="font-[geist] text-[18px] text-[#000000] ">
                      --
                    </span>
                  ) : (
                    <span className="font-[geist] text-[18px] ">
                      {lastBpm} bpm
                    </span>
                  )}
                </span>
              </div>
              <div className="w-[30px] aspect-square rounded-full flex justify-center items-center bg-[#D8E2EE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart-pulse"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
              </div>
            </div>
            <div className=" w-[calc((100%-7px)/2)] h-[120px] bg-[#ffffff] border border-[#f4f4f4] ml-[7px] rounded-2xl rounded-l-md flex px-[7px] justify-between items-center flex-row py-[7px] pl-[7px]">
              <div className="flex flex-col justify-center items-start h-full  w-full">
                <div className="h-full w-full rounded-xl  flex justify-center items-center overflow-hidden">
                  {/* <img
                    src={mp}
                    className="w-full object-cover  scale-150 md:scale-100 lg:scale-100"
                  ></img> */}
                  <Map />
                </div>
              </div>
              {/* <div className="w-[30px] aspect-square rounded-full flex justify-center items-center bg-[#D8E2EE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-activity"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div> */}
            </div>
          </div>

          <div className="w-full h-[calc(100%-80px)] ">
            {/* <div className="w-full h-[200px] flex flex-row justify-between items-center px-[20px]">
                {wornStatus === true ? (
                  <div className="w-[47%] h-full bg-[#ffffff] p-[20px] md:p-[40px] lg:p-[40px]  rounded-2xl font-[geist] text-[#ffffff] flex flex-col justify-end items-end  drop-shadow-sm">
                    <div className="w-full h-[25px] font-normal text-[#b7b7b7]  text-[17px]">
                      <IoWatch className="text-black text-[25px]" />
                    </div>
                    <div className="w-full h-[25px] font-normal text-[#737373] mt-[20px] text-[17px]">
                      Device Worn
                    </div>
                    {wornStatus === false ? (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#ffa947]">
                        Device not Worn
                      </div>
                    ) : loading === true ? (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#ffffff]">
                        Calibrating Device ...
                      </div>
                    ) : (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#7cd74c]">
                        Device Worn
                      </div>
                    )}
                    
                  </div>
                ) : (
                  <div className="w-[47%] h-full bg-[#630000b0]  p-[20px] md:p-[40px] lg:p-[40px]  rounded-2xl font-[geist] text-[#ffffff] flex flex-col justify-end items-end  drop-shadow-sm">
                    <div className="w-full h-[25px] font-normal text-[#b7b7b7]  text-[17px]">
                      <IoWatch className="text-white text-[25px]" />
                    </div>
                    <div className="w-full h-[25px] font-normal text-[#b7b7b7] mt-[20px] text-[17px]">
                      Device Worn
                    </div>
                    {wornStatus === false ? (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#ffa947]">
                        Device not Worn
                      </div>
                    ) : loading === true ? (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#ffffff]">
                        Calibrating Device ...
                      </div>
                    ) : (
                      <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#7cd74c]">
                        Device Worn
                      </div>
                    )}
                   
                  </div>
                )}
                <div className="w-[47%] h-full bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px]  rounded-2xl font-[geist] text-[#ffffff] flex flex-col justify-end items-end  drop-shadow-sm">
                  <div className="w-full h-[25px] font-normal text-[#b7b7b7]  text-[17px]">
                    <FaPersonFalling className="text-white text-[25px]" />
                  </div>
                  <div className="w-full h-[25px] font-normal text-[#b7b7b7] mt-[20px] text-[17px] ">
                    Fall Detection
                  </div>
                  <div className="w-full h-[141px] font-normal text-[25px] mt-[5px] text-[#7cd74c]">
                    Not Triggered
                  </div>
                 
                </div>
              </div>

              <div className="w-full h-[200px] flex flex-row justify-between items-center mt-[20px] px-[20px]">
                <div className="w-[47%] h-full bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px]  rounded-2xl font-[geist] text-[#ffffff] flex flex-col justify-end items-end  drop-shadow-sm">
                  <div className="w-full h-[25px] font-normal text-[#b7b7b7]  text-[17px]">
                    <PiHeartbeatFill className="text-white text-[25px]" />
                  </div>

                  <div className="w-full h-[25px] font-normal text-[#b7b7b7] mt-[20px]  text-[17px]">
                    Current BPM
                  </div>
                  <div className="w-full h-[141px] font-normal text-[25px] mt-[5px]">
                    {wornStatus === false ? <>--</> : <>{lastBpm} bpm</>}
                  </div>

                  <div className="w-[40px] h-[30px] rounded-xl bg-[#42b502] fixed flex justify-center items-center  drop-shadow-sm">
                    <Link
                      to="/dashboard"
                      className="w-full h-full flex justify-center items-center"
                    >
                      <FaArrowRightLong className="text-white" />
                    </Link>
                  </div>
                </div>
              </div> */}

            {alert ? (
              <div className="w-full h-auto flex flex-col justify-center mt-[10px] items-start p-[7px] bg-[#ff000078] border rounded-3xl border-[#f4f4f4] ">
                <div className="w-full h-[70px] rounded-[17px]  bg-[#F7F8FA] flex justify-start items-center px-[15px]">
                  <div className="w-[40px] aspect-square rounded-full bg-[#ff000078] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-timer"
                    >
                      <line x1="10" x2="14" y1="2" y2="2" />
                      <line x1="12" x2="15" y1="14" y2="11" />
                      <circle cx="12" cy="14" r="8" />
                    </svg>
                  </div>
                  <div className="w-[calc(100%-55px)] ml-[15px] flex  justify-between items-center">
                    {/* <div className="w-full flex justify-start items-center text-center font-[geist] font-normal text-[#a0a0a0] text-[14px] mt-[0px] ">
                    bpm over time
                  </div> */}
                    <div className="w-full flex justify-start items-center font-[geist] font-normal text-[18px] mt-[-1px] ">
                      <div className="w-[35px] h-[40px] rounded-xl bg-white text-red-500 flex justify-center items-center font-[geist]">
                        00
                      </div>
                      <div className="mx-[4px] font-[geist] font-semibold">
                        :
                      </div>
                      <div className="w-[35px] h-[40px] rounded-xl bg-white text-red-500 flex justify-center items-center font-[geist]">
                        00
                      </div>
                      <div className="mx-[4px] font-[geist] font-semibold">
                        :
                      </div>
                      <div className="w-[35px] h-[40px] rounded-xl bg-white text-red-500 flex justify-center items-center font-[geist]">
                        {countDown < 10 ? <>0{countDown}</> : <>{countDown}</>}
                      </div>
                    </div>
                    <div
                      className="font-[geist] text-[13px] h-[33px] px-[10px] rounded-xl bg-[#191A2c] text-white flex justify-center items-center"
                      onClick={() => {
                        ignoreFallState();
                      }}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center px-[15px] my-[10px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-megaphone"
                    >
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </svg>
                  </div>
                  <div className="ml-[15px] text-[13px] font-[geist] text-[#000000]">
                    Sending alert to Emergency Contact: Ambulance in 30 seconds.
                    PLease stay calm and wait for help. If you think this is not
                    for concern, then click on Cancel Alert.
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="w-full h-auto flex flex-col justify-between items-center mb-[0px]  bg-white rounded-2xl border border-[#f4f4f4] mt-[10px] p-[20px] pr-[7px] py-[7px]">
              <div className="w-full flex justify-between items-center">
                <div className="text-[15px] font-[geist] flex justify-start items-center">
                  <span class="relative flex h-3 w-3 ">
                    <span
                      class={
                        "animate-ping absolute inline-flex h-full w-full rounded-full z-30 opacity-75" +
                        (alert ? " bg-[red]" : " bg-[#22cd22]")
                      }
                    ></span>
                    {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-[red] z-30"></span> */}
                  </span>
                  <div
                    className={
                      "h-[9px] w-[9px] rounded-full ml-[-10.5px] mr-[15px]" +
                      (alert ? " bg-[red]" : " bg-[#22cd22]")
                    }
                  ></div>
                  {alert ? <>Fall Detected</> : <>No Fall Detected</>}
                </div>
                <div
                  className={
                    "px-[15px] text-[15px] rounded-[10px] h-[40px] outline-none flex justify-center items-center font-[geist] font-medium   " +
                    (!alert
                      ? " bg-[#F7F8FA] border border-[#f4f4f4] text-[#cbcbcb] cursor-default"
                      : " bg-[#191A2C] border border-[#191A2C] text-white cursor-pointer")
                  }
                  onClick={() => {
                    // call();
                    if (alert) {
                      window.location.href = `tel:${emContact}`;
                    }
                  }}
                  style={{ transition: ".3s" }}
                >
                  <div className="mr-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>{" "}
                  Emergency Call
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col justify-between items-center   bg-white rounded-2xl border border-[#f4f4f4] mt-[10px] p-[20px] pr-[7px] py-[7px] mb-[70px]">
              <div className="w-full flex justify-between items-center">
                <div className="text-[15px] font-[geist] flex justify-start items-center">
                  <div className="mr-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>{" "}
                  Change Emergency Contact
                </div>
                <div
                  className="px-[15px] text-[15px] rounded-[10px] h-[40px] outline-none flex justify-center items-center font-[geist] font-medium bg-[#191A2C] border border-[#191A2C] text-white cursor-pointer"
                  onClick={() => {
                    setContactModal(true);
                  }}
                  style={{ transition: ".3s" }}
                >
                  Change
                </div>
              </div>
              <div className="w-full  font-[geist] text-[13px] text-[#a0a0a0] mt-[7px] mb-[10px]">
                It will initiate a call to the emergency contact number
                currently set to{" "}
                <span className="mx-[3px] text-black font-[geist]">
                  +91 {emContact}
                </span>
                . To update the number, click the 'Change' button.
              </div>
            </div>

            {/* <div className="w-full h-[40px] flex justify-start items-center font-[geist] font-bold text-[20px] text-white my-[15px] px-[20px]">
                Alerts
              </div> */}

            {/* <div className="w-full h-[40px] flex justify-center items-center font-[geist]  text-[18px] px-[20px]">
          No Alerts
        </div> */}
            {/* <div className="w-full h-[40px] flex justify-center items-center text-center font-[geist] text-[#b6b6b6]  text-[15px] px-[60px]">
                No Alerts have been triggered today. Your safety is our
                priority.
              </div>

              <div className="w-full h-[50px] flex justify-center items-center my-[25px] px-[20px]">
                <button
                  className="w-[60%] md:w-[40%] lg:w-[40%] h-full outline-none flex justify-center items-center font-[geist] text-[17px] tracking-wide  rounded-xl text-black bg-[#deeed8] hover:bg-[#162d27] hover:text-white  drop-shadow-sm"
                  style={{ transition: ".3s" }}
                >
                  Emergency Contact
                </button>
              </div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] fixed bottom-0 flex justify-center items-center bg-[#F8F8F8] to-transparent from-[80%] text-[15px]  text-[#a9a9a9] ">
        <div className="w-full md:w-[60%] lg:w-[60%] h-full flex justify-evenly items-center ">
          <div className=" h-[50px] flex flex-col justify-center items-center ">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              {/* <RiHome3Fill className="text-[23px] my-[2px] " /> */}{" "}
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              {/* Home */}
            </Link>
          </div>

          <div className=" h-[50px] flex flex-col justify-center items-center text-[#000000] ">
            <Link
              to="/alert"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              {/* <HiOutlineBellAlert className="text-[23px] my-[2px]" /> */}
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-siren"
                >
                  <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                  <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                  <path d="M21 12h1" />
                  <path d="M18.5 4.5 18 5" />
                  <path d="M2 12h1" />
                  <path d="M12 2v1" />
                  <path d="m4.929 4.929.707.707" />
                  <path d="M12 12v6" />
                </svg>
              </div>
              {/* Alerts */}
            </Link>
          </div>

          <div className=" h-[50px] flex flex-col justify-center items-center ">
            <Link
              to="/dashboard"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              {/* <MdOutlineSpaceDashboard className="text-[23px] my-[2px]" /> */}{" "}
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-layout-dashboard"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </div>
              {/* Dashboard */}
            </Link>
          </div>
          <div
            className=" h-[50px] flex flex-col justify-center items-center  "
            onClick={() => {
              setAccount(!account);
            }}
          >
            {/* <Link className="w-full h-full"> */}
            {/* <VscAccount className="text-[23px] my-[2px]" /> */}
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bolt"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            {/* Account */}
            {/* </Link> */}
          </div>
        </div>
      </div>
      {contactModal ? (
        <div className="w-full h-[100dvh] fixed top-0 left-0 flex justify-center items-center p-[20px] backdrop-blur-md z-50 bg-[#e8e8e879]">
          <div className="w-full md:w-[60%] xl:w-[60%] min-h-[100px] bg-white rounded-2xl p-[20px] flex flex-col justify-center items-start font-[geist]">
            <div className="font-[geist] text-[17px] font-medium flex justify-start items-center">
              <div className="mr-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              Emergency Contact Number
            </div>
            <input
              className="w-full h-[45px] rounded-xl bg-[#F7F8FA]  border border-[#f4f4f4] mt-[15px] px-[20px] text-[15px] pl-[60px] outline-none "
              placeholder=""
              value={contact}
              onChange={(e) => {
                if (isNumeric(e.target.value) === true) {
                  setContact(e.target.value);
                }
              }}
            ></input>
            <div className="h-[45px] mt-[-45px] pl-[20px] font-[geist] font-medium text-[15px] flex justify-start items-center">
              +91{" "}
            </div>
            <div className="w-full mt-[20px] flex justify-end items-center">
              <div
                className=" px-[15px] text-[14px]  h-[35px] outline-none flex justify-center items-center font-[geist] font-medium rounded-xl border border-[#f4f4f4] bg-[#F7F8FA] cursor-pointer"
                onClick={() => {
                  setContactModal(false);
                  setContact("");
                }}
              >
                Cancel
              </div>
              <div
                className={
                  " px-[15px] text-[14px] rounded-xl h-[35px] outline-none flex justify-center items-center font-[geist] font-medium  cursor-pointer ml-[15px]" +
                  (contact.length == 10
                    ? " bg-[#191A2C] border border-[#191A2C] text-white"
                    : " bg-[#191a2c13] border border-[#191a2c30] text-[#a2a2a2]")
                }
                onClick={() => {
                  if (contact.length == 10) {
                    updateContact();
                    setContactModal(false);
                  }
                }}
              >
                Update
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RecordData;
