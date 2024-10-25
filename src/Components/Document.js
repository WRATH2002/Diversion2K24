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
      <div
        className="w-full min-h-[100svh] flex justify-center items-start bg-[#F8F8F8] px-[40px] md:px-[13%] lg:px-[13%] z-50 "
        onScroll={() => {
          setAccount(false);
        }}
      >
        <div className="w-full md:w-[60%] lg:w-[60%] h-full flex flex-col justify-center items-start overflow-y-scroll pt-[85px]">
          <span className="font-bold leading-[1] text-[35px] md:text-[55px] lg:text-[55px] text-[#000000] font-[geist] mt-[10px] w-full flex justify-start tracking-wide">
            SmartWatch Companion for Elderly Care
          </span>
          <span className="leading-[1] text-[22px] md:text-[22px] lg:text-[22px] mt-[80px] font-[geist] text-[black] w-auto pl-[10px] border-l-[2.5px] border-[black] tracking-wide font-semibold">
            Introduction
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            The{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              SmartWatch Companion for Elderly Care
            </span>{" "}
            is a wearable device designed to prioritize the safety and
            well-being of senior citizens. It seamlessly blends the
            functionality of a smartwatch with advanced health monitoring to
            deliver real-time health data and immediate assistance during
            emergencies. This guide details the key features, functionality, and
            benefits of the device.
          </span>

          <span className="leading-[1] text-[22px] md:text-[22px] lg:text-[22px] mt-[80px] font-[geist] text-[black] w-auto pl-[10px] border-l-[2.5px] border-[black] tracking-wide font-semibold">
            Problem Statement
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            According to the World Health Organization, falls are the second
            leading cause of accidental injury deaths worldwide, with seniors
            being especially vulnerable. Every year, approximately{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              37.3 million falls
            </span>{" "}
            are severe enough to require medical attention, and about{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              30% of people aged 65
            </span>{" "}
            and above fall at least once a year. These incidents often result in
            serious injuries, reduced mobility, and a loss of independence.
            Furthermore, cardiovascular issues are a leading cause of death
            among older adults, with nearly{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              17.9 million deaths globally
            </span>{" "}
            each year attributed to heart disease. Many seniors lack timely
            access to emergency care or health monitoring, which can turn a
            minor health issue into a life-threatening situation. With growing
            numbers of elderly individuals living independently, there is a
            pressing need for a reliable system that can monitor their health
            and provide emergency alerts.
          </span>

          <span className="leading-[1] text-[22px] md:text-[22px] lg:text-[22px] mt-[80px] font-[geist] text-[black] w-auto pl-[10px] border-l-[2.5px] border-[black] tracking-wide font-semibold">
            Proposed Solution
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            The{" "}
            <span className="text-[#000000] font-['geist'] font-semibold">
              SmartWatch Companion for Elderly Care
            </span>{" "}
            offers a practical solution by combining real-time health monitoring
            and emergency response features. It continuously tracks the wearer’s
            heart rate, alerting users and caregivers to irregularities,
            potentially preventing serious heart conditions. Its fall detection
            system automatically sends alerts to designated contacts after a
            fall, reducing response times during emergencies. Additionally, the
            emergency notification button allows users to quickly send distress
            signals and their location to family members or emergency services,
            ensuring fast assistance and improving the overall safety and
            independence of elderly individuals.
          </span>
          <span className="leading-[1] text-[22px] md:text-[22px] lg:text-[22px] mt-[50px] font-[geist] text-[black] w-auto pl-[10px] border-l-[2.5px] border-[black] tracking-wide font-semibold">
            Features
          </span>
          <span className="leading-[1] text-[17px] mt-[30px] font-[geist] text-[black] w-auto pb-[5px] border-b-[2px] border-[black] tracking-wide font-semibold">
            Heart Rate Monitoring
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            The smartwatch continuously monitors the wearer's heart rate,
            providing valuable insights into their cardiovascular health. Users
            can track their heart rate trends over time and receive alerts for
            abnormal readings.
          </span>
          <span className="leading-[1] text-[17px] mt-[30px] font-[geist] text-[black] w-auto pb-[5px] border-b-[2px] border-[black] tracking-wide font-semibold">
            Fall Detection
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            The device is equipped with sensors capable of detecting sudden
            falls or impacts. In the event of a fall, the smartwatch
            automatically triggers an alert to notify designated family members
            or caregivers.
          </span>
          <span className="leading-[1] text-[17px] mt-[30px] font-[geist] text-[black] w-auto pb-[5px] border-b-[2px] border-[black] tracking-wide font-semibold">
            Emergency Notification
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[15px] font-[geist] text-[#4b4b4b] w-full overflow-hidden text-ellipsis ">
            Users can easily initiate a distress call by pressing a dedicated
            button on the smartwatch. This sends an immediate notification to
            pre-configured contacts, including family members and emergency
            services, along with the wearer's location information.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="w-full h-[60px] fixed bottom-0 flex justify-center items-center bg-[#F8F8F8] to-transparent from-[80%] text-[15px]  text-[#a9a9a9] ">
        <div className="w-full md:w-[60%] xl:w-[60%] h-full flex justify-evenly items-center ">
          <div className=" h-[50px] flex flex-col justify-center items-center text-[#000000] ">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center flex-col"
            >
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
            </Link>
          </div>
          {alertNotification === false ? (
            <>
              <div className=" h-[50px] flex flex-col justify-center items-center ">
                <Link
                  to="/alert"
                  className="w-full h-full flex justify-center items-center flex-col"
                >
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
                </Link>
              </div>
            </>
          )}
          <div className=" h-[50px] flex flex-col justify-center items-center  ">
            <Link
              to="/dashboard"
              className="w-full h-full flex justify-center items-center flex-col"
            >
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
            </Link>
          </div>
          <div
            className=" h-[50px] flex flex-col justify-center items-center  backdrop-blur-3xl"
            onClick={() => {
              setAccount(!account);
            }}
          >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
