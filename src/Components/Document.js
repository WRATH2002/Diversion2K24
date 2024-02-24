import React from "react";
import Navbar from "./Navbar";

const Document = () => {
  return (
    <>
      <Navbar data={3} />
      <div className="w-full min-h-[calc(100%-80px)] bg-[black] px-[8%] md:px-[20%] lg:px-[20%] py-[40px]">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <span className="font-bold leading-[1] text-[43px] md:text-[50px] lg:text-[50px] text-[#f5f5f7] font-[google] mt-[10px] w-full flex justify-start">
            SmartWatch Companion for Elderly Care
          </span>
          <span className="leading-[1] text-[24px] md:text-[26px] lg:text-[26px] mt-[40px] text-[##f5f5f7] font-[google] text-white w-full">
            Introduction
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[10px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            The SmartWatch Companion for Elderly Care is a wearable device
            designed to enhance the safety and well-being of senior citizens. It
            combines the functionality of a smartwatch with advanced health
            monitoring features to provide real-time health data and emergency
            assistance when needed. This documentation outlines the key
            features, functionality, and benefits of the device.
          </span>
          <span className="leading-[1] text-[24px] md:text-[26px] lg:text-[26px] mt-[40px] text-[##f5f5f7] font-[google] text-white w-full">
            Features
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] font-normal text-white w-full">
            Heart Rate Monitoring
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[10px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            The smartwatch continuously monitors the wearer's heart rate,
            providing valuable insights into their cardiovascular health. Users
            can track their heart rate trends over time and receive alerts for
            abnormal readings.
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] text-white w-full">
            Fall Detection
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[10px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            The device is equipped with sensors capable of detecting sudden
            falls or impacts. In the event of a fall, the smartwatch
            automatically triggers an alert to notify designated family members
            or caregivers.
          </span>
          <span className="leading-[1] text-[20px] md:text-[18px] lg:text-[18px] mt-[24px] text-[##f5f5f7] font-[google] text-white w-full">
            Emergency Notification
          </span>
          <span className="leading-normal font-normal text-[15px] md:text-[15px] lg:text-[15px] mt-[10px] font-[google] text-[#6b6b6b] w-full overflow-hidden text-ellipsis text-justify">
            Users can easily initiate a distress call by pressing a dedicated
            button on the smartwatch. This sends an immediate notification to
            pre-configured contacts, including family members and emergency
            services, along with the wearer's location information.
          </span>
        </div>
      </div>
    </>
  );
};

export default Document;
