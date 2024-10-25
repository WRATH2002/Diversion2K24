import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import firebase from "../firebase";
// import Landing from "./Landing";
import LandingPage from "./LandingPage";
// import Chatbody from "./Chatbody";
// import Sidebar from "./Sidebar";
// import { useSelector } from "react-redux";

const AuthDetails = () => {
  const [mode, setMode] = useState(1);
  const [modeView, setModeView] = useState(false);

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

  return (
    <>
      {authUser ? (
        <>
          {/* <Loading /> */}
          {/* <button className="font-bold" onClick={userSignOut}>
            Sign Out
          </button> */}
          <LandingPage />
          {/* <span>Helo</span> */}
        </>
      ) : (
        <>
          <div className="w-full h-[100svh] flex justify-center items-center bg-gradient-to-b from-[#F4F9FC] to-[#DBE8F6] p-[10px] md:p-[60px] lg:p-[60px] flex-row">
            {modeView ? (
              <>
                {mode === 1 ? (
                  <Login data1={mode} data2={setMode} />
                ) : (
                  <Signup data1={mode} data2={setMode} />
                )}
              </>
            ) : (
              <>
                {" "}
                <div className=" w-full h-full flex justify-center items-center flex-col text-[#3D338E] py-[20px]">
                  <div className="h-[calc(100%-220px)] w-full flex justify-center items-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-fingerprint"
                    >
                      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                      <path d="M2 12a10 10 0 0 1 18-6" />
                      <path d="M2 16h.01" />
                      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
                    </svg>
                  </div>
                  <div className="w-full flex flex-col justify-end items-end h-[280px]">
                    <div className="w-full flex justify-start items-center font-[geist] text-[27px] text-[black] px-[20px] font-semibold tracking-wide">
                      Get Your Personal Care Taker Now
                    </div>
                    <div className="w-full flex justify-start items-center font-[geist] text-[16px] text-[black] px-[20px] mt-[20px]">
                      Get your smart device now and track your own people
                      realtime health data.
                    </div>
                    <div className="w-full flex justify-end items-center mt-[50px] font-[geist] text-[27px] text-[black] px-[20px]">
                      <div
                        className="px-[15px] py-[9px] rounded-full bg-white flex justify-center items-center text-[16px] font-[geist] cursor-pointer"
                        onClick={() => {
                          setModeView(true);
                        }}
                      >
                        Continue{" "}
                        <div className="ml-[3px]">
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
                            class="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AuthDetails;
