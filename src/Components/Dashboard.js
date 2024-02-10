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

import { auth, db, st } from "../firebase";

import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";

const Dashboard = () => {
  const [recordData, setRecordData] = useState();
  // const [dd, setDd] = useState([]);
  const [average, setAverage] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [current, setCurrent] = useState(0);
  const [minimum, setMinimum] = useState(0);
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
    // for (let i in recordData) {
    //   let objTitle = recordData[i]["Hour"];
    //   if (recordData[i].Hour === indexHour) {
    //     count = count + 1;
    //   } else {
    //     indexHour = recordData[i].Hour;
    //     sum = 0;
    //     min = 1000;
    //     max = 0;
    //     avg = 0;
    //     count = 1;
    //   }

    //   sum = sum + recordData[i].Bpm;
    //   if (recordData[i].Bpm < min) {
    //     min = recordData[i].Bpm;
    //   }
    //   if (recordData[i].Bpm > max) {
    //     max = recordData[i].Bpm;
    //   }

    //   uniqueObject[objTitle] = {
    //     Hour: indexHour,
    //     Max: max,
    //     Min: min,
    //     Avg: Math.round(sum / count),
    //   };
    // }

    // for (let i in uniqueObject) {
    //   newArray.push(uniqueObject[i]);
    // }
    // console.log(newArray);
    // setDd(newArray);

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
  return (
    <div className="w-full h-auto bg-[#ffffff] flex flex-col justify-center items-start overflow-y-scroll">
      <div className="min-h-[80px] w-full flex justify-center items-center font-[poppins] font-bold text-[23px]">
        BPM History
      </div>
      <div className="w-full h-[40px] flex justify-start items-center text-center font-[poppins]  text-[15px] px-[20px]">
        BPM over time
      </div>
      <div className="w-full h-[40px] flex justify-start items-center font-[poppins] font-bold text-[24px]  mt-[0px] px-[20px]">
        70 - 120 BPM
      </div>
      <div className="w-full h-[40px] flex justify-start items-center text-center font-[poppins]  text-[14px] px-[20px] mb-[15px] text-[#797979]">
        Last 7 days
      </div>
      <div className="w-full px-[20px] h-[200px] my-[20px]">
        <Data />
      </div>
      {/* <div className="w-full h-[40px] flex justify-center items-center font-[poppins]  text-[18px] px-[20px]">
          No Alerts
        </div> */}

      <div className="w-full h-[calc(100%-80px)] ">
        <div className="w-full h-[130px] flex flex-row justify-between items-center px-[20px]">
          <div className="w-[47%] h-full bg-[white] border-[1.5px] border-[#ece6e9] p-[20px] rounded-2xl font-[poppins] text-[black] flex flex-col justify-end items-end  ">
            <div className="w-full h-[25px] font-medium text-[17px]">
              Current BPM
            </div>
            <div className="w-full h-[175px] font-bold text-[25px] mt-[5px] ">
              {current}
            </div>
          </div>
          <div className="w-[47%] h-full bg-[white] border-[1.5px] border-[#ece6e9] p-[20px] rounded-2xl font-[poppins] text-[black] flex flex-col justify-end items-end  ">
            <div className="w-full h-[25px] font-medium text-[17px]">
              Avg BPM
            </div>
            <div className="w-full h-[175px] font-bold text-[25px] mt-[5px] ">
              {average}
            </div>
          </div>
        </div>

        <div className="w-full h-[130px] flex flex-row justify-between items-center mt-[20px] px-[20px]">
          <div className="w-[47%] h-full bg-[white] border-[1.5px] border-[#ece6e9] p-[20px] rounded-2xl font-[poppins] text-[black] flex flex-col justify-end items-end  ">
            <div className="w-full h-[25px] font-medium text-[17px]">
              Max BPM
            </div>
            <div className="w-full h-[175px] font-bold text-[25px] mt-[5px] ">
              {maximum}
            </div>
          </div>
          <div className="w-[47%] h-full bg-[white] border-[1.5px] border-[#ece6e9] p-[20px] rounded-2xl font-[poppins] text-[black] flex flex-col justify-end items-end  ">
            <div className="w-full h-[25px] font-medium text-[17px]">
              Min BPM
            </div>
            <div className="w-full h-[175px] font-bold text-[25px] mt-[5px] ">
              {minimum}
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] flex justify-center items-center my-[25px] px-[20px] mb-[100px]">
          <button
            className="w-full h-full outline-none flex justify-center items-center font-[poppins] font-medium text-[17px] rounded-2xl text-white bg-[#e41c1b] hover:bg-[#f93b3b] drop-shadow-sm"
            style={{ transition: ".3s" }}
          >
            Emergency Contact
          </button>
        </div>
      </div>
      <div className="w-full h-[70px] fixed bottom-0 flex justify-between items-center  text-[15px] bg-[#ffffffe0] backdrop-blur-xl">
        <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
          <Link
            to="/"
            className="w-full h-full flex justify-center items-center flex-col"
          >
            <RiHome3Line className="text-[23px] my-[2px]" />
            Home
          </Link>
        </div>
        <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
          <Link
            to="/alert"
            className="w-full h-full flex justify-center items-center flex-col"
          >
            <HiOutlineBellAlert className="text-[23px] my-[2px]" />
            Alerts
          </Link>
        </div>
        <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
          <Link
            to="/dashboard"
            className="w-full h-full flex justify-center items-center flex-col"
          >
            <MdSpaceDashboard className="text-[23px] my-[2px]" />
            Dashboard
          </Link>
        </div>
        <div className="w-[30%] h-[50px] flex flex-col justify-center items-center ">
          {/* <Link className="w-full h-full"> */}
          <VscAccount className="text-[23px] my-[2px]" />
          Account
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
