import React from "react";
import DeviceStatus from "./DeviceStatus";
import BuyProduct from "./BuyProduct";
import Track from "./Track";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Segment1 from "./Segment1";
import Sos from "./Sos";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SosPage from "./SosPage";
import Segment2 from "./Segment2";
import Segment4 from "./Segment4";
import Segment3 from "./Segment3";
import Data from "./Data";
import DataPage from "./DataPage";
import TrackingPage from "./TrackingPage";
import Solution from "./Solution";
import Document from "./Document";
import AuthDetails from "./AuthDetails";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import gi from "../Assets/img/gi.gif";
import RecordData from "./RecordData";
import Dashboard from "./Dashboard";

import { FaArrowRightLong } from "react-icons/fa6";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import { RiHome3Line } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";

import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";

import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
import { db } from "../firebase";
import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";
// import AuthDetails from "./AuthDetails";

const LandingPage = () => {
  const [authUser, setAuthUser] = useState(null);
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

  return (
    <>
      {account === true ? (
        <>
          <div className="fixed bottom-[80px] right-[20px] flex justify-center items-center bg-[#f4f0ef] rounded-xl w-[100px] h-[50px] z-50">
            Log Out
          </div>
        </>
      ) : (
        <></>
      )}
      {authUser ? (
        <>
          {/* <Navbar data={4} /> */}

          <div className="w-full h-[100%] flex flex-col justify-center items-center bg-[white] px-[13%] md:px-[13%] lg:px-[13%]">
            {/* <img className="w-[50%] fixed border border-white" src={gi}></img> */}
            {/* <img
              className="w-[50%] border border-white"
              src="https://i.pinimg.com/564x/44/ad/ee/44adee7c5a5b28c0507256e9805de982.jpg"
            ></img> */}
            <Segment1 />
            <Segment2 />
            <Segment3 />
            <Segment4 />
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

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthDetails />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/emergency",
    element: <SosPage />,
  },
  {
    path: "/alert",
    element: <RecordData />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/documentation",
    element: <Document />,
  },
  {
    path: "/solutions",
    element: <Solution />,
  },
]);

export default LandingPage;
