import React from "react";
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

const salesData = [
  {
    name: "12:00",
    Max: 94,
    Min: 80,
    Avg: 78,
  },
  {
    name: "1:00",
    Max: 80,
    Min: 96,
    Avg: 80,
  },
  {
    name: "2:00",
    Max: 98,
    Min: 80,
    Avg: 78,
  },
  {
    name: "3:00",
    Max: 87,
    Min: 89,
    Avg: 80,
  },
  {
    name: "4:00",
    Max: 88,
    Min: 87,
    Avg: 98,
  },
  {
    name: "5:00",
    Max: 87,
    Min: 87,
    Avg: 78,
  },
  {
    name: "6:00",
    Max: 95,
    Min: 90,
    Avg: 87,
  },
  {
    name: "7:00",
    Max: 94,
    Min: 87,
    Avg: 90,
  },
  {
    name: "8:00",
    Max: 78,
    Min: 90,
    Avg: 87,
  },
  {
    name: "9:00",
    Max: 90,
    Min: 78,
    Avg: 78,
  },
  {
    name: "10:00",
    Max: 90,
    Min: 87,
    Avg: 89,
  },
  {
    name: "11:00",
    Max: 78,
    Min: 89,
    Avg: 90,
  },
  {
    name: "12:00",
    Max: 90,
    Min: 78,
    Avg: 67,
  },
  {
    name: "1:00",
    Max: 78,
    Min: 89,
    Avg: 99,
  },
  {
    name: "2:00",
    Max: 87,
    Min: 87,
    Avg: 87,
  },
  {
    name: "3:00",
    Max: 89,
    Min: 67,
    Avg: 89,
  },
  {
    name: "4:00",
    Max: 90,
    Min: 67,
    Avg: 89,
  },
  {
    name: "5:00",
    Max: 67,
    Min: 89,
    Avg: 87,
  },
];

export const Data = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[50, "dataMax + 20"]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="Max" stroke="#3b82f6" />
        <Line type="monotone" dataKey="Min" stroke="#72f63b" />
        <Line type="monotone" dataKey="Avg" stroke="#ff7b00" />
      </LineChart>
      {/* <AreaChart
        width={730}
        height={250}
        data={salesData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
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
            <stop offset="5%" stopColor="#ff7b00" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff7b00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
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
        />
        <Area
          type="monotone"
          dataKey="Avg"
          stroke="#ff7b00"
          fillOpacity={1}
          fill="url(#colorAvg)"
        />
      </AreaChart>*/}
    </ResponsiveContainer>
    // <div>hello</div>
  );
};

export default Data;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#373748] flex flex-col gap-4 rounded-md">
        <p className="text-medium text-white text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Max:
          <span className="ml-2">{payload[0].value} bpm</span>
        </p>
        <p className="text-sm text-[#72f63b]">
          Min:
          <span className="ml-2">{payload[1].value} bpm</span>
        </p>
        <p className="text-sm text-[#ff7b00]">
          Avg:
          <span className="ml-2">{payload[2].value} bpm</span>
        </p>
      </div>
    );
  }
};
