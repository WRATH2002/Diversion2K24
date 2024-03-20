import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import {
  Area,
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

import { auth, db, st } from "../firebase";

import firebase from "../firebase";
import { onSnapshot } from "firebase/firestore";

// const salesData = [
//   {
//     // Minute:
//     Fall: false,
//     Hour: 1,
//     Bpm: 85,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 1,
//     Bpm: 97,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 1,
//     Bpm: 89,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 1,
//     Bpm: 104,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 2,
//     Bpm: 114,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 2,
//     Bpm: 66,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 2,
//     Bpm: 76,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 2,
//     Bpm: 109,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 3,
//     Bpm: 69,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 3,
//     Bpm: 67,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 3,
//     Bpm: 92,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 3,
//     Bpm: 86,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 3,
//     Bpm: 99,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 4,
//     Bpm: 104,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 4,
//     Bpm: 102,
//   },
//   {
//     //  Minute:
//     Fall: false,
//     Hour: 4,
//     Bpm: 80,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 4,
//     Bpm: 118,
//   },
//   {
//     // Minute:
//     Fall: false,
//     Hour: 5,
//     Bpm: 89,
//   },
// ];

export const Data = () => {
  const [recordData, setRecordData] = useState();
  const [dd, setDd] = useState([]);
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
    for (let i in recordData) {
      let objTitle = recordData[i]["Hour"];
      if (recordData[i].Hour === indexHour) {
        count = count + 1;
      } else {
        indexHour = recordData[i].Hour;
        sum = 0;
        min = 1000;
        max = 0;
        avg = 0;
        count = 1;
      }

      sum = sum + recordData[i].Bpm;
      if (recordData[i].Bpm < min) {
        min = recordData[i].Bpm;
      }
      if (recordData[i].Bpm > max) {
        max = recordData[i].Bpm;
      }

      uniqueObject[objTitle] = {
        Hour: indexHour,
        Max: max,
        Min: min,
        Avg: Math.round(sum / count),
      };
    }
    // let objTitle = recordData[recordData.length - 1]["Hour"];
    // uniqueObject[objTitle] = {
    //   Hour: indexHour,
    //   Max: max,
    //   Min: min,
    //   Avg: sum / count,
    // };

    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }
    console.log(newArray);
    setDd(newArray);
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
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        {/* <LineChart
        width={500}
        height={300}
        data={dd}
        margin={{
          right: 30,
        }}
      >
        <XAxis dataKey="Hour" />
        <YAxis type="number" domain={[50, "dataMax + 20"]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="Max" stroke="#ff7b00" />
        <Line type="monotone" dataKey="Min" stroke="#72f63b" />
        <Line type="monotone" dataKey="Avg" stroke="#3b82f6" />
      </LineChart> */}

        {/* <ResponsiveContainer width="100%" height="100%"> */}
        {/* <LineChart width={300} height={100} data={dd}>
        <Line type="monotone" dataKey="Avg" stroke="#8884d8" strokeWidth={2} />
      </LineChart> */}
        {/* </ResponsiveContainer> */}
        <AreaChart width={730} height={250} data={dd}>
          <defs>
            <linearGradient id="colorMax" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#72f63b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#72f63b" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="55%" stopColor="#274c43" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#274c43" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Area
          type="monotone"
          dataKey="Max"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorMax)"
        />
        <Area
          type="monotone"
          dataKey="Min"
          stroke="#72f63b"
          fillOpacity={1}
          fill="url(#colorMin)"
        /> */}
          <Area
            type="monotone"
            dataKey="Avg"
            stroke="#162d27"
            fillOpacity={1}
            fill="url(#colorAvg)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    // <div>hello</div>
  );
};

export default Data;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#373748] border border-[#8d6c6e] rounded-xl flex flex-col gap-4 ">
        <p className="text-medium text-white text-lg">Hour : {label}</p>
        <p className="text-sm text-blue-400 font-[google]">
          Max:
          <span className="ml-2">{payload[0].value} bpm</span>
        </p>
        <p className="text-sm text-[#72f63b] font-[google]">
          Min:
          <span className="ml-2">{payload[1].value} bpm</span>
        </p>
        <p className="text-sm text-[#ff7b00] font-[google]">
          Avg:
          <span className="ml-2">{payload[2].value} bpm</span>
        </p>
      </div>
    );
  }
};
