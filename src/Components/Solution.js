import React from "react";
import Navbar from "./Navbar";
import one1 from "../Assets/img/1.png";
import one2 from "../Assets/img/2.png";
import one3 from "../Assets/img/3.png";
import two1 from "../Assets/img/4.png";
import two2 from "../Assets/img/5.png";
import two3 from "../Assets/img/6.png";
import three1 from "../Assets/img/10.png";
import three2 from "../Assets/img/11.png";
import three3 from "../Assets/img/12.png";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";

import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";
// import AuthDetails from "./AuthDetails";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const Solution = () => {
  const [account, setAccount] = useState(false);
  const [alertNotification, setAlertNotification] = useState(false);
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
  return (
    <>
      {/* <Navbar data={2} /> */}
      <div className="w-full bg-[#031e17] h-[100svh] flex flex-col justify-center items-center px-[15%] ">
        <div className="w-[80%] h-[50%]  flex justify-center items-center">
          <img className="w-[40%] -rotate-90 object-cover" src={one2}></img>
          <div className="w-[60]% pl-[30px] h-full flex flex-col items-center justify-center ">
            <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[google] mt-[10px] w-full flex justify-start">
              Vital Tracker
            </span>
            <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[40px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
              ensuring the safety of your loved ones just got easier
            </span>
          </div>
        </div>
        <div className="w-[80%] h-[50%] flex flex-col justify-center items-center">
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full">
            Micro-controller:
            <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-[#6b6b6b] font-[google] w-full ml-[10px]">
              {" "}
              Arduino Uno
            </span>
          </span>
          <br />
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full mb-[10px]">
            Modules Used:
          </span>
          <span className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[##f5f5f7] text-white font-[google] w-full">
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • MPU6050
            </pre>
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • RTC DS3212
            </pre>
            <pre className="leading-[1] text-[22px] md:text-[26px] lg:text-[26px] text-[#6b6b6b] font-[google] w-full">
              • Pulse Sensor
            </pre>
          </span>
        </div>
      </div>
      <div className="w-full h-[70px] fixed bottom-0 flex justify-center items-center  text-[15px]  text-[#d2d2d2]">
        <div className="w-full md:w-[60%] lg:w-[60%] h-full flex justify-between items-center ">
          <div className="w-[30%] h-[50px] flex flex-col justify-center items-center text-[#deeed8] ">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center flex-col"
            >
              <RiHome3Fill className="text-[23px] my-[2px] " />
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
            className="w-[30%] h-[50px] flex flex-col justify-center items-center  backdrop-blur-3xl"
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

export default Solution;
