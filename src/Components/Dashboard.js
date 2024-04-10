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
          <div className="w-[150px] h-[120px] rounded-xl bg-[white] fixed bottom-[80px] z-50 right-[20px]">
            <div
              className="flex justify-center items-center rounded-xl w-full h-[40px] z-50"
              onClick={() => {
                userSignOut();
              }}
            >
              Log Out
            </div>
            <Link
              to="/documentation"
              className="flex justify-center items-center rounded-xl w-full h-[40px] z-50"
            >
              Documentation
            </Link>
            {/* <div className="flex justify-center items-center rounded-xl w-full h-[40px] z-50">
              Documentation
            </div> */}
            <Link
              to="/solutions"
              className="flex justify-center items-center rounded-xl w-full h-[40px] z-50"
            >
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
      <div className="w-full h-[100svh] fixed bg-[black] flex justify-start items-start">
        <div className="w-[500px] h-[500px] fixed left-[-200px] top-[-200px] bg-[#5fcff5] rounded-full"></div>
        <div className="w-[300px] h-[300px] fixed bottom-[110px] right-[-110px] bg-[#976cf7] rounded-full"></div>
      </div>
      <div className="w-full h-auto text-white flex flex-col justify-center items-center overflow-y-scroll bg-[#031e17]  backdrop-blur-3xl">
        <div className="w-full md:w-[60%] lg:w-[60%] h-full  flex flex-col justify-start items-center">
          <div className="min-h-[80px] w-full flex justify-center items-center font-[google] font-normal text-[28px] tracking-wider">
            BPM History
          </div>
          <div className="w-full h-[40px] flex justify-start items-center text-center font-[google] font-normal text-[#b7b7b7] text-[17px] px-[20px]">
            BPM over time
          </div>
          <div className="w-full h-[40px] flex justify-start items-center font-[google] font-normal text-[24px]   mt-[0px] px-[20px]">
            {minimum} - {maximum} BPM
          </div>
          <div className="w-full h-[40px] flex justify-start items-center text-center font-[google]  text-[14px] px-[20px] mb-[15px] text-[#e1e1e1]">
            {monthShow === true ? (
              <FaAngleUp
                className="text-white text-[18px] mr-[13px]"
                onClick={() => {
                  setMonthShow(false);
                }}
              />
            ) : (
              <FaAngleDown
                className="text-white text-[18px] mr-[13px]"
                onClick={() => {
                  setMonthShow(true);
                }}
              />
            )}
            {month != 0 ? (
              <>
                <span className="text-[#959595] mr-[7px]">Showing </span>{" "}
                {monthName[month - 1]}{" "}
                <div
                  className="px-[10px] py-[4px] ml-[15px] rounded-xl bg-[#162d27] "
                  onClick={() => {
                    setMonth(0);
                  }}
                >
                  Show All
                </div>
              </>
            ) : (
              <>Showing All</>
            )}

            {monthShow === true ? (
              <div
                className="fixed w-[340px] h-[160px] bg-[#162d27] flex justify-center items-center rounded-xl mt-[220px] z-50"
                // style={{ transition: ".4s" }}
              >
                <div className="flex flex-col justify-start items-start w-[100px]">
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(1);
                    }}
                  >
                    January
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(2);
                    }}
                  >
                    February
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(3);
                    }}
                  >
                    March
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(4);
                    }}
                  >
                    April
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start w-[100px]">
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(5);
                    }}
                  >
                    May
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(6);
                    }}
                  >
                    June
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(7);
                    }}
                  >
                    July
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(8);
                    }}
                  >
                    August
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start w-[100px]">
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(9);
                    }}
                  >
                    September
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(10);
                    }}
                  >
                    October
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(11);
                    }}
                  >
                    November
                  </span>
                  <span
                    className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl "
                    onClick={() => {
                      setMonth(12);
                    }}
                  >
                    December
                  </span>
                </div>
              </div>
            ) : (
              <div
                className="fixed w-[340px] h-[0px] bg-[#162d27] flex justify-center items-center overflow-hidden rounded-xl mt-[220px] z-50"
                // style={{ transition: ".4s" }}
              >
                <div className="flex flex-col justify-start items-start w-[100px]">
                  <span className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    January
                  </span>
                  <span className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    February
                  </span>
                  <span className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    March
                  </span>
                  <span className="w-[100px] cursor-pointer hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    April
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start w-[100px]">
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    May
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    June
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    July
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    August
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start w-[100px]">
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    September
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    October
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    November
                  </span>
                  <span className="w-[100px] hover:bg-[#031e17] h-[30px] flex justify-start items-center px-[10px] rounded-xl ">
                    December
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="w-full px-[20px] flex justify-center items-center h-[170px] my-[20px]">
            <div className="w-full h-full ">
              <Data month={month} />
            </div>
          </div>
          {/* <div className="w-full h-[40px] flex justify-center items-center font-[google]  text-[18px] px-[20px]">
          No Alerts
        </div> */}

          <div className="w-full h-[calc(100%-80px)] mt-[20px] ">
            <div className="w-full h-[200px] flex flex-row justify-between items-center px-[20px]">
              <div className="w-[47%] h-full  bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px] rounded-2xl font-[google] text-[white] flex flex-col justify-end items-end  ">
                <div className="w-full h-[25px] text-[#b7b7b7] font-normal text-[17px]">
                  Current BPM
                </div>
                <div className="w-full h-[175px]  font-normal text-[25px] mt-[5px] ">
                  {loading === true ? (
                    <>Calibrating</>
                  ) : wornStatus === false ? (
                    <>--</>
                  ) : (
                    <>{current} bpm</>
                  )}
                </div>
              </div>
              <div className="w-[47%] h-full  bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px] rounded-2xl font-[google] text-[white] flex flex-col justify-end items-end  ">
                <div className="w-full h-[25px]  text-[#b7b7b7] font-normal text-[17px]">
                  Avg BPM
                </div>
                <div className="w-full h-[175px] font-normal text-[25px] mt-[5px] ">
                  {average} bpm
                </div>
              </div>
            </div>

            <div className="w-full h-[200px] flex flex-row justify-between items-center mt-[20px] px-[20px]">
              <div className="w-[47%] h-full  bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px] rounded-2xl font-[google] text-[white] flex flex-col justify-end items-end  ">
                <div className="w-full h-[25px] text-[#b7b7b7] font-normal text-[17px]">
                  Max BPM
                </div>
                <div className="w-full h-[175px] font-normal text-[25px] mt-[5px] ">
                  {maximum} bpm
                </div>
              </div>
              <div className="w-[47%] h-full  bg-[#162d27] p-[20px] md:p-[40px] lg:p-[40px] rounded-2xl font-[google] text-[white] flex flex-col justify-end items-end  ">
                <div className="w-full h-[25px] text-[#b7b7b7] font-normal text-[17px]">
                  Min BPM
                </div>
                <div className="w-full h-[175px] font-normal text-[25px] mt-[5px] ">
                  {minimum} bpm
                </div>
              </div>
            </div>

            <div className="w-full h-[50px] flex justify-center items-center my-[25px] px-[20px] mb-[100px]">
              <button
                className="w-[60%] md:w-[40%] lg:w-[40%] h-full outline-none flex justify-center items-center font-[google] font-medium rounded-xl text-black  bg-[#deeed8]   hover:bg-[#162d27] hover:text-white drop-shadow-sm"
                style={{ transition: ".3s" }}
              >
                Emergency Contact
              </button>
            </div>
          </div>
          <div className="w-full h-[70px] fixed bottom-0 flex justify-between items-center bg-[#000000] text-[white] text-[15px] backdrop-blur-3xl"></div>
        </div>
      </div>
      <div className="w-full h-[70px] fixed bottom-0 flex justify-center items-center bg-[#031e17] text-[#d2d2d2] text-[15px] backdrop-blur-3xl">
        <div className="w-full md:w-[60%] lg:w-[60%] h-full flex justify-between items-center ">
          <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              <RiHome3Line className="text-[23px] my-[2px]" />
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
              <div className="w-[30%] h-[50px] flex flex-col text-[#ffa947] justify-center items-center ">
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
          <div className="w-[30%] h-[50px] flex flex-col justify-center text-[#deeed8] items-center ">
            <Link
              to="/dashboard"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              <MdSpaceDashboard className="text-[23px] my-[2px]" />
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
      </div>
    </>
  );
};

export default Dashboard;
