import React from "react";
import Navbar from "./Navbar";
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

const Document = () => {
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
      {/* <Navbar data={3} /> */}
      <div className="w-full min-h-[100svh] flex justify-center items-center bg-[#031e17] px-[8%] md:px-[20%] lg:px-[20%] py-[40px]">
        <div className="w-[80%] h-full flex flex-col justify-center items-start">
          <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[google] mt-[10px] w-full flex justify-start">
            SmartWatch Companion for Elderly Care
          </span>
          <span className="leading-[1] text-[28px] md:text-[26px] lg:text-[32px] mt-[80px] text-[##f5f5f7] font-[google] text-white w-full">
            Introduction
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[10px] font-[google] text-[#969696] w-full overflow-hidden text-ellipsis text-justify">
            The SmartWatch Companion for Elderly Care is a wearable device
            designed to enhance the safety and well-being of senior citizens. It
            combines the functionality of a smartwatch with advanced health
            monitoring features to provide real-time health data and emergency
            assistance when needed. This documentation outlines the key
            features, functionality, and benefits of the device.
          </span>
          <span className="leading-[1] text-[28px] md:text-[26px] lg:text-[32px] mt-[40px] text-[##f5f5f7] font-[google] text-white w-full">
            Features
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] font-normal text-white w-full">
            Heart Rate Monitoring
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[10px] font-[google] text-[#969696] w-full overflow-hidden text-ellipsis text-justify">
            The smartwatch continuously monitors the wearer's heart rate,
            providing valuable insights into their cardiovascular health. Users
            can track their heart rate trends over time and receive alerts for
            abnormal readings.
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] text-white w-full">
            Fall Detection
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[10px] font-[google] text-[#969696] w-full overflow-hidden text-ellipsis text-justify">
            The device is equipped with sensors capable of detecting sudden
            falls or impacts. In the event of a fall, the smartwatch
            automatically triggers an alert to notify designated family members
            or caregivers.
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] text-white w-full">
            Emergency Notification
          </span>
          <span className="leading-normal font-normal text-[17px] md:text-[15px] lg:text-[17px] mt-[10px] font-[google] text-[#969696] w-full overflow-hidden text-ellipsis text-justify">
            Users can easily initiate a distress call by pressing a dedicated
            button on the smartwatch. This sends an immediate notification to
            pre-configured contacts, including family members and emergency
            services, along with the wearer's location information.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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

export default Document;
