import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";

import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Data from "./Data";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
// import { auth, db, st } from "../firebase";

import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dashboard = () => {
  const [recordData, setRecordData] = useState();
  // const [dd, setDd] = useState([]);
  const [average, setAverage] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [current, setCurrent] = useState(0);
  const [minimum, setMinimum] = useState(0);
  const [alertNotification, setAlertNotification] = useState(false);
  const [account, setAccount] = useState(false);
  const [emContact, setEmContact] = useState("");

  // const [status, setStatus] = useState(false);
  const [wornStatus, setWornStatus] = useState(true);
  // const [lastBpm, setLastBpm] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [dataSize, setDataSize] = useState(0);
  // const [prevDataSize, setPrevDataSize] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  // const [flag, setFlag] = useState(0);
  const [loading, setLoading] = useState(true);
  const [monthShow, setMonthShow] = useState(true);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLastUpdated(Date.now());
    console.log("time changeddddd");
    console.log(Date.now());
  }, [recordData]);

  useEffect(() => {
    setMonthShow(false);
  }, [month]);

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
    fetchFallState();
    // fetchAlert();
  }, []);

  function fetchFallState() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db.collection("USERS").doc(user1?.uid);
    onSnapshot(StateRef, (snapshot) => {
      // setStatus(snapshot.data()?.state);
      // recordData = snapshot.data()?.Data;
      // setLastBpm(recordData[recordData?.length - 1]?.Bpm);
      setLastUpdated(Date.now());
      setEmContact(snapshot.data()?.contact);
    });
  }

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
    fetchPastRecord();
  }, []);

  useEffect(() => {
    if (recordData) {
      d();
    }
  }, [recordData]);

  function d() {
    let newArray = [];
    let uniqueObject = {};
    let indexHour = 1;
    let avg = 0;
    let sum = 0;
    let min = 1000;
    let max = 0;
    let count = 0;

    recordData.forEach((element) => {
      sum = sum + element.Bpm;
      count = count + 1;
      if (element.Bpm < min) {
        min = element.Bpm;
      }
      if (element.Bpm > max) {
        max = element.Bpm;
      }
    });

    avg = Math.round(sum / count);

    setAverage(avg);
    setMaximum(max);
    setMinimum(min);
    setCurrent(recordData[recordData.length - 1].Bpm);
  }

  function fetchPastRecord() {
    const user = firebase.auth().currentUser;
    const DataRef = db.collection("USERS").doc(user.uid);

    onSnapshot(DataRef, (snapshot) => {
      console.log(snapshot.data().Data);
      setRecordData(snapshot.data().Data);
    });
    // console.log(user);
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out Successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {account === true ? (
        <>
          <div className="w-auto p-[10px] h-auto border rounded-xl border-[#f4f4f4]  bg-[white] fixed top-[85px] drop-shadow-sm z-50 right-[20px]">
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
          className="w-full md:w-[60%] xl:w-[60%] h-full z-50 flex justify-between items-end  font-[geist] px-[0px] md:px-[5px] lg:px-[5px]"
          // style={{
          //   boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.06)",
          // }}
        >
          <div className="font-semibold h-[45px] aspect-square rounded-full bg-[#ffffff] drop-shadow-sm text-[19px] flex justify-center items-center">
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
              className="flex justify-center items-center h-[35px] aspect-square rounded-xl drop-shadow-sm bg-[#EDF1F4] ml-[15px]"
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
            <div className="flex justify-center items-center h-[35px] aspect-square rounded-xl drop-shadow-sm bg-[#EDF1F4] ml-[10px]">
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
      <div className="w-full h-[100svh] text-black flex pt-[85px] flex-col justify-start items-center overflow-y-scroll bg-[#f8f8f8]  backdrop-blur-3xl">
        <div className="w-full md:w-[60%] xl:w-[60%] h-auto  flex flex-col justify-start items-center px-[20px] ">
          <div className="w-full h-auto flex flex-col justify-center items-start p-[7px] bg-white border rounded-3xl border-[#f4f4f4] ">
            {/* <div className="w-full flex justify-start items-center font-[geist]  text-[19px] font-medium   ">
              BPM History
            </div> */}
            <div className="w-full h-[70px] rounded-[17px] bg-[#F7F8FA] flex justify-start items-center px-[15px]">
              <div className="w-[40px] aspect-square rounded-full bg-gradient-to-tl from-[#9FB5CB] to-[#DAE3EA] flex justify-center items-center">
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
                  class="lucide lucide-activity"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div>
              <div className="w-[calc(100%-55px)] ml-[15px] flex flex-col justify-center items-start">
                <div className="w-full flex justify-start items-center text-center font-[geist] font-normal text-[#a0a0a0] text-[14px] mt-[0px] ">
                  bpm over time
                </div>
                <div className="w-full flex justify-start items-center font-[geist] font-normal text-[18px] mt-[-1px] ">
                  {/* {minimum} - {maximum} bpm */}
                  64 - {maximum} bpm
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
                This is the overall bpm range of lifetime
              </div>
            </div>
          </div>
          {/* <div className="w-full h-[40px] flex justify-center items-center font-[geist]  text-[18px] px-[20px]">
          No Alerts
        </div> */}
        </div>

        <div className="w-full md:w-[60%] xl:w-[60%] h-auto  flex flex-col justify-start items-center px-[20px] mt-[0px]">
          <div className="mt-[10px] w-full min-h-[50px] rounded-2xl bg-[#ffffff] border border-[#f4f4f4] p-[7px] flex justify-start items-center">
            {monthShow === true ? (
              <div
                className="h-full aspect-square rounded-xl bg-[#EEF2F5] flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setMonthShow(false);
                }}
              >
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
                  class="lucide lucide-calendar-cog"
                >
                  <path d="m15.2 16.9-.9-.4" />
                  <path d="m15.2 19.1-.9.4" />
                  <path d="M16 2v4" />
                  <path d="m16.9 15.2-.4-.9" />
                  <path d="m16.9 20.8-.4.9" />
                  <path d="m19.5 14.3-.4.9" />
                  <path d="m19.5 21.7-.4-.9" />
                  <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                  <path d="m21.7 16.5-.9.4" />
                  <path d="m21.7 19.5-.9-.4" />
                  <path d="M3 10h18" />
                  <path d="M8 2v4" />
                  <circle cx="18" cy="18" r="3" />
                </svg>
              </div>
            ) : (
              <div
                className="h-full cursor-pointer aspect-square rounded-xl bg-[#EEF2F5]  flex justify-center items-center"
                onClick={() => {
                  setMonthShow(true);
                }}
              >
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
                  class="lucide lucide-calendar-cog"
                >
                  <path d="m15.2 16.9-.9-.4" />
                  <path d="m15.2 19.1-.9.4" />
                  <path d="M16 2v4" />
                  <path d="m16.9 15.2-.4-.9" />
                  <path d="m16.9 20.8-.4.9" />
                  <path d="m19.5 14.3-.4.9" />
                  <path d="m19.5 21.7-.4-.9" />
                  <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                  <path d="m21.7 16.5-.9.4" />
                  <path d="m21.7 19.5-.9-.4" />
                  <path d="M3 10h18" />
                  <path d="M8 2v4" />
                  <circle cx="18" cy="18" r="3" />
                </svg>
              </div>
            )}

            {month != 0 ? (
              <>
                <span className="px-[12px] h-full ml-[10px] flex justify-center items-center rounded-xl bg-[#EEF2F5] text-black  text-[13px]">
                  Showing {monthName[month - 1]}{" "}
                </span>
                <div
                  className="px-[12px] h-full ml-[10px] flex justify-center items-center rounded-xl bg-[#191A2C] text-white text-[13px] "
                  onClick={() => {
                    setMonth(0);
                  }}
                >
                  Show All
                </div>
              </>
            ) : (
              <div className="px-[12px] h-full flex justify-center items-center bg-[#EEF2F5] rounded-xl ml-[10px] text-black text-[13px] font-[geist]">
                Showing All
              </div>
            )}
          </div>
          <div className="w-full h-auto flex flex-col justify-normal items-start  mt-[10px] ">
            <div className="w-full h-auto flex justify-start items-center text-center font-[geist]  text-[14px] mb-[15px] text-[#000000]">
              {/* {monthShow === true ? (
                <div
                  className="w-[30px] aspect-square rounded-xl bg-[#f8f8f8] border border-[#ebebeb] flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setMonthShow(false);
                  }}
                >
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
                    class="lucide lucide-calendar-cog"
                  >
                    <path d="m15.2 16.9-.9-.4" />
                    <path d="m15.2 19.1-.9.4" />
                    <path d="M16 2v4" />
                    <path d="m16.9 15.2-.4-.9" />
                    <path d="m16.9 20.8-.4.9" />
                    <path d="m19.5 14.3-.4.9" />
                    <path d="m19.5 21.7-.4-.9" />
                    <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                    <path d="m21.7 16.5-.9.4" />
                    <path d="m21.7 19.5-.9-.4" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <circle cx="18" cy="18" r="3" />
                  </svg>
                </div>
              ) : (
                <div
                  className="w-[30px] cursor-pointer aspect-square rounded-xl bg-[#f8f8f8] border border-[#ebebeb] flex justify-center items-center"
                  onClick={() => {
                    setMonthShow(true);
                  }}
                >
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
                    class="lucide lucide-calendar-cog"
                  >
                    <path d="m15.2 16.9-.9-.4" />
                    <path d="m15.2 19.1-.9.4" />
                    <path d="M16 2v4" />
                    <path d="m16.9 15.2-.4-.9" />
                    <path d="m16.9 20.8-.4.9" />
                    <path d="m19.5 14.3-.4.9" />
                    <path d="m19.5 21.7-.4-.9" />
                    <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                    <path d="m21.7 16.5-.9.4" />
                    <path d="m21.7 19.5-.9-.4" />
                    <path d="M3 10h18" />
                    <path d="M8 2v4" />
                    <circle cx="18" cy="18" r="3" />
                  </svg>
                </div>
              )}
              {month != 0 ? (
                <>
                  <span className="px-[12px] h-[30px] ml-[10px] flex justify-center items-center rounded-xl bg-[#f8f8f8] border border-[#ebebeb] text-black  text-[13px]">
                    Showing {monthName[month - 1]}{" "}
                  </span>
                  <div
                    className="px-[12px] h-[30px] ml-[10px] flex justify-center items-center rounded-xl bg-[#191A2C] text-white text-[13px] "
                    onClick={() => {
                      setMonth(0);
                    }}
                  >
                    Show All
                  </div>
                </>
              ) : (
                <div className="px-[12px] h-[30px] flex justify-center items-center bg-[#f8f8f8] border border-[#ebebeb] rounded-xl ml-[10px] text-black text-[13px] font-[geist]">
                  Showing All
                </div>
              )} */}

              {monthShow === true ? (
                <div
                  className="fixed w-[170px] h-[140px] bg-[#f8f8f8] border border-[#ebebeb] flex justify-center items-center rounded-xl mt-[195px] z-50"
                  // style={{ transition: ".4s" }}
                >
                  <div className="flex flex-col justify-start items-start w-[50px] text-[13px]">
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(1);
                      }}
                    >
                      Jan
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(4);
                      }}
                    >
                      Apr
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(7);
                      }}
                    >
                      July
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(10);
                      }}
                    >
                      Oct
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start w-[50px] text-[13px]">
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(2);
                      }}
                    >
                      Feb
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(5);
                      }}
                    >
                      May
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(8);
                      }}
                    >
                      Aug
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(11);
                      }}
                    >
                      Nov
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start w-[50px] text-[13px]">
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(3);
                      }}
                    >
                      Mar
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(6);
                      }}
                    >
                      June
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(9);
                      }}
                    >
                      Sept
                    </span>
                    <span
                      className="w-[50px] cursor-pointer hover:bg-[#ffffff] h-[30px] flex justify-start items-center px-[10px] rounded-xl border hover:border border-transparent hover:border-[#ebebeb] "
                      onClick={() => {
                        setMonth(12);
                      }}
                    >
                      Dec
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="fixed w-[340px] h-[0px] bg-[#f8f8f8] border-none border-transparent rounded-xl flex justify-center items-center overflow-hidden  mt-[220px] z-50"
                  // style={{ transition: ".4s" }}
                >
                  <div className="flex flex-col justify-start items-start w-[50px]">
                    <span className="w-[50px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      January
                    </span>
                    <span className="w-[50px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      February
                    </span>
                    <span className="w-[50px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      March
                    </span>
                    <span className="w-[50px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      April
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start w-[50px]">
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      May
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      June
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      July
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      August
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start w-[50px]">
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      September
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      October
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      November
                    </span>
                    <span className="w-[50px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                      December
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full  flex justify-center items-center h-[150px]  mt-[10px]">
              <div className="w-full h-full ">
                <Data month={month} />
              </div>
            </div>
          </div>
          {/* <div className="w-full h-[40px] flex justify-center items-center font-[geist]  text-[18px] px-[20px]">
          No Alerts
        </div> */}
          {/* <div className="w-full h-auto flex flex-col justify-normal items-start bg-white border rounded-[10px] border-[#ebebeb] mt-[10px] p-[20px]"></div> */}
          <div className="w-full mt-[20px] flex justify-end items-center">
            <div className="px-[15px] h-[30px] rounded-xl bg-white border border-[#f4f4f4] flex justify-center items-center font-[geist] text-[14px]">
              All Activities
            </div>
          </div>

          <div className="mt-[10px] rounded-2x w-full flex justify-start items-center font-[geist] ">
            <div className=" w-[calc((100%-7px)/2)] h-[80px] bg-[#ffffff]  border border-[#f4f4f4] rounded-2xl rounded-r-md flex px-[20px] justify-between items-center flex-row">
              <div className="flex flex-col justify-center items-start">
                <span className="font-[geist] text-[14px] text-[#6e6e6e]">
                  Max bpm
                </span>
                <span className="font-[geist] text-[18px] ">{maximum} bpm</span>
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
            <div className=" w-[calc((100%-7px)/2)] h-[80px] bg-[#ffffff] border border-[#f4f4f4] ml-[7px] rounded-2xl rounded-l-md flex px-[20px] justify-between items-center flex-row">
              <div className="flex flex-col justify-center items-start">
                <span className="font-[geist] text-[14px] text-[#6e6e6e]">
                  Min bpm
                </span>
                <span className="font-[geist] text-[18px] text-[black]">
                  {/* {minimum} bpm */}
                  64 bpm
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

          <div className="w-full h-[calc(100%-80px)] mt-[10px] ">
            {/* <div className="w-full h-auto flex flex-row justify-between items-center px-[0px]">
              <div className="w-[calc((100%-10px)/2)] h-auto  bg-[#ffffff] p-[20px] md:p-[20px] xl:p-[20px] rounded-xl border border-[#ebebeb] font-[geist] text-[black] flex flex-col justify-end items-end drop-shadow-sm ">
                <div className="w-full font-[geist] font-normal text-[#a0a0a0] text-[15px]">
                  Current bpm
                </div>
                <div className="w-full font-[geist]  font-normal text-[18px] mt-[5px] ">
                  {loading === true ? (
                    <>Calibrating</>
                  ) : wornStatus === false ? (
                    <>--</>
                  ) : (
                    <>{current} bpm</>
                  )}
                </div>
              </div>
              <div className="w-[calc((100%-10px)/2)] h-auto  bg-[#ffffff] p-[20px] md:p-[20px] xl:p-[20px] rounded-xl border border-[#ebebeb] font-[geist] text-[black] flex flex-col justify-end items-end  drop-shadow-sm">
                <div className="w-full font-[geist] font-normal text-[#a0a0a0] text-[15px]">
                  Avg bpm
                </div>
                <div className="w-full font-[geist] font-normal text-[18px] mt-[5px] ">
                  {average} bpm
                </div>
              </div>
            </div> */}

            {/* <div className="w-full h-auto flex flex-row justify-between items-center mt-[10px] px-[0px]">
              <div className="w-[calc((100%-10px)/2)] h-auto  bg-[#ffffff] p-[20px] md:p-[20px] xl:p-[20px] rounded-xl border border-[#ebebeb] font-[geist] text-[black] flex flex-col justify-end items-end  drop-shadow-sm">
                <div className="w-full text-[#b7b7b7] font-normal font-[geist] text-[15px]">
                  Max bpm
                </div>
                <div className="w-full font-normal text-[18px] font-[geist] mt-[5px] ">
                  {maximum} bpm
                </div>
              </div>
              <div className="w-[calc((100%-10px)/2)] h-auto  bg-[#ffffff] p-[20px] md:p-[20px] xl:p-[20px] rounded-xl border border-[#ebebeb] font-[geist] text-[black] flex flex-col justify-end items-end  drop-shadow-sm">
                <div className="w-full text-[#b7b7b7] font-[geist] font-normal text-[15px]">
                  Min bpm
                </div>
                <div className="w-full font-normal font-[geist] text-[18px] mt-[5px] ">
                  {minimum} bpm
                </div>
              </div>
            </div> */}

            <div className="w-full h-auto flex flex-col justify-between items-center mb-[0px]  bg-white rounded-2xl border border-[#f4f4f4] mt-[0px] p-[20px] pr-[7px] py-[7px]">
              <div className="w-full flex justify-between items-center">
                <div className="text-[15px] font-[geist] flex justify-start items-center">
                  <span class="relative flex h-3 w-3 ">
                    <span
                      class={
                        "animate-ping absolute inline-flex h-full w-full rounded-full z-30 opacity-75" +
                        (alertNotification ? " bg-[red]" : " bg-[#22cd22]")
                      }
                    ></span>
                    {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-[red] z-30"></span> */}
                  </span>
                  <div
                    className={
                      "h-[9px] w-[9px] rounded-full ml-[-10.5px] mr-[15px]" +
                      (alertNotification ? " bg-[red]" : " bg-[#22cd22]")
                    }
                  ></div>
                  {alertNotification ? (
                    <>Fall Detected</>
                  ) : (
                    <>No Fall Detected</>
                  )}
                </div>
                <div
                  className={
                    "px-[15px] text-[15px] rounded-[10px] h-[40px] outline-none flex justify-center items-center font-[geist] font-medium   " +
                    (!alertNotification
                      ? " bg-[#F7F8FA] border border-[#f4f4f4] text-[#cbcbcb] cursor-default"
                      : " bg-[#191A2C] border border-[#191A2C] text-white cursor-pointer")
                  }
                  onClick={() => {
                    // call();
                    if (alertNotification) {
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

            {/* <div className="w-full h-[50px] flex justify-center items-center my-[25px] px-[20px] mb-[100px]">
              <button
                className="w-[60%] md:w-[40%] xl:w-[40%] h-full outline-none flex justify-center items-center font-[geist] font-medium rounded-xl text-black  bg-[#deeed8]   hover:bg-[#162d27] hover:text-white drop-shadow-sm"
                style={{ transition: ".3s" }}
              >
                Emergency Contact
              </button>
            </div> */}
          </div>
          {/* <div className="w-full h-[70px] fixed bottom-0 flex justify-between items-center bg-[#000000] text-[white] text-[15px] backdrop-blur-3xl"></div> */}
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[50px] left-0 top-[20px] fixed ">
        <div className="w-[140px] h-full rounded-2xl bg-[white] border border-[#f4f4f4] flex justify-between items-center p-[7px]">
          <div
            className={
              "h-[36px] aspect-square rounded-[10px]  flex justify-center items-center" +
              (loading
                ? " bg-[#F7F8FA]"
                : !wornStatus
                ? " bg-[#ff000043]"
                : " bg-[#1db41d42]")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-activity"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
          </div>
          <div className="flex justify-end items-center text-[16px] font-[geist] pr-[5px] ">
            {loading === true ? (
              <>Calibrating</>
            ) : wornStatus === false ? (
              <>
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
                  class="lucide lucide-circle-off"
                >
                  <path d="m2 2 20 20" />
                  <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
                  <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
                </svg>{" "}
              </>
            ) : (
              <>{current} bpm</>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] fixed bottom-0 flex justify-center items-center bg-[#F8F8F8] to-transparent from-[80%] text-[15px]  text-[#a9a9a9] ">
        <div className="w-full md:w-[60%] xl:w-[60%] h-full flex justify-evenly items-center ">
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
          {alertNotification === false ? (
            <>
              <div className=" h-[50px] flex flex-col justify-center items-center ">
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
            </>
          ) : (
            <>
              <div className=" h-[50px] flex flex-col text-[#e41c1b] justify-center items-center ">
                <Link
                  to="/alert"
                  className="w-full h-full flex justify-center items-center flex-col"
                >
                  {/* <HiMiniBellAlert className="bell text-[23px] my-[2px]" /> */}{" "}
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
            </>
          )}
          <div className=" h-[50px] flex flex-col justify-center items-center text-[#000000]  ">
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
            className=" h-[50px] flex flex-col justify-center items-center  backdrop-blur-3xl"
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
    </>
  );
};

export default Dashboard;
