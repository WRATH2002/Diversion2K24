import React from "react";
import Data from "./Data";
import { PiHeartbeat } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import AuthDetails from "./AuthDetails";
import { FaAngleDown } from "react-icons/fa6";
import { onSnapshot } from "firebase/firestore";
import firebase from "../firebase";

const TrackingPage = () => {
  const [status, setStatus] = useState(false);

  const [authUser, setAuthUser] = useState(null);

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

  useEffect(() => {
    fetchFallState();
  }, []);

  function fetchFallState() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db.collection("USERS").doc(user1?.uid);
    onSnapshot(StateRef, (snapshot) => {
      console.log("snapshot.data().state");
      console.log(snapshot.data().state);
      setStatus(snapshot.data().state);
    });
  }

  function ignoreFallState() {
    const user1 = firebase.auth().currentUser;
    const StateRef = db
      .collection("USERS")
      .doc(user1?.uid)
      .update({ state: false });
  }
  return (
    <>
      {authUser ? (
        <>
          <Navbar data={1} />
          <div className="w-full h-[calc(100svh-80px)] bg-[#000000] flex flex-col md:flex-root lg:flex-row justify-center md:justify-center lg:justify-center items-between md:items-center lg:items-center px-[0] md:px-[80px] lg:px-[80px] py-[0px] md:py-[80px] lg:py-[80px] ">
            <div className="w-full md:w-[44%] lg:w-[44%]  h-[300px] md:h-full lg:h-full rounded-3xl p-[40px] md:p-[90px] lg:p-[90px] py-[10px] md:py-0 lg:py-0 flex flex-col justify-center  md:justify-center lg:justify-center items-center">
              <div className="w-full">
                <div className="text-white text-[39px] md:text-[29px] lg:text-[49px] font-[poppins] font-bold">
                  Current Status
                </div>
                <div className="text-white font-[poppins] text-[17px] font-medium flex justify-start items-center mt-[20px]">
                  BPM{" "}
                  <PiHeartbeat className="text-[#ff7f2f] font-[poppins] text-[27px] ml-[10px] mt-[0px] mr-[10px]" />{" "}
                  :<span className="ml-[10px] font-normal text-[17px]">78</span>
                </div>
                <div className="text-white text-[17px] font-[poppins]   font-medium flex justify-start items-center mt-[10px]">
                  Status{" "}
                  {status === true ? (
                    <HiOutlineStatusOnline className="text-[#dd3232] text-[27px] ml-[10px] mt-[0px] mr-[10px]" />
                  ) : (
                    <HiOutlineStatusOnline className="text-[#1bff1b] text-[27px] ml-[10px] mt-[0px] mr-[10px]" />
                  )}{" "}
                  :
                  <span className="ml-[10px]  font-normal text-[17px]">
                    {status === true ? (
                      <div className="text-[#dd3232] font-[poppins]">
                        Fall Detected
                      </div>
                    ) : (
                      <div className="text-[#1bff1b] font-[poppins]">
                        No Fall Detected
                      </div>
                    )}
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-[30px] md:mt-[80px] lg:mt-[80px]">
                {status === true ? (
                  <div className="flex w-full justify-between items-center">
                    <button className="w-[59%] md:w-[59%] lg:w-[59%] h-[50px] font-[poppins] font-medium text-[white] rounded-xl  bg-[#ff7033] hover:bg-[#c56c45]">
                      Call Ambulance
                    </button>
                    <button
                      className="w-[37%] md:w-[37%] lg:w-[37%] h-[50px] font-[poppins] font-medium text-[white] rounded-xl bg-[#30baff] hover:bg-[#4383c4]"
                      onClick={() => {
                        ignoreFallState();
                      }}
                    >
                      Ignore
                    </button>
                  </div>
                ) : (
                  <div className="w-full">
                    <button className="w-full md:w-[100%] lg:w-[100%] h-[50px]  font-[poppins] font-medium text-[white] rounded-xl bg-[#0071e3] hover:bg-[#4383c4]">
                      Call Ambulance
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:w-[52%] lg:w-[52%]  h-[calc(100%-300px)]  md:h-full lg:h-full  rounded-3xl flex flex-col justify-center items-start pr-0 md:pr-[90px] lg:pr-[90px]">
              {/* <div className="w-full h-[50%] "> */}
              <div className="px-[40px] text-white text-[39px]  md:text-[29px] lg:text-[49px] font-[poppins] font-bold">
                Data History
              </div>
              <div className="px-[40px] text-[#6b6b6b] text-[14px] font-normal  md:text-[17px] lg:text-[17px] font-[poppins] flex justify-start items-center">
                05-02-2024 <FaAngleDown className="ml-[5px] text-[#6b6b6b]" />
              </div>
              {/* </div> */}
              <div className="w-full h-[38%] flex justify-start items-center mt-[30px]">
                <Data />
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

export default TrackingPage;
