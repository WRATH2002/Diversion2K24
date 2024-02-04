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

const LandingPage = () => {
  return (
    <>
      {/* <div className="w-[100%] h-[100svh] fixed gg z-0"></div> */}
      <Navbar />
      {/* <div className=" w-[100%] h-[100svh] bg-[#1c1c28] flex flex-col z-40  justify-start items-center overflow-y-scroll">
        <div className="w-full h-full hidden md:flex lg:flex flex-col md:flex-row lg:flex-row  justify-between items-center">
          <div className="z-10 w-full h-full md:w-[40%] lg:w-[40%] flex flex-col justify-center items-center  pl-[20px] pr-[20px] md:pl-[60px] md:pr-[20px] lg:pl-[60px] lg:pr-[20px]">
            <DeviceStatus />
            <BuyProduct />
          </div>
          <div className="z-10 w-full h-full md:w-[40%] lg:w-[40%] flex flex-col justify-center items-center  pl-[20px] pr-[20px] md:pr-[60px] md:pl-[20px] lg:pr-[60px] lg:pl-[20px]">
            <Sos />
            <Track />
          </div>
        </div>

        <div className="w-full flex md:hidden lg:hidden flex-col  justify-center items-center">
          <DeviceStatus />
          <BuyProduct />

          <Sos />
          <Track />
        </div>
      </div> */}
      <div className="w-[100%] h-auto md:h-[calc((100svh-80px)/2)] lg:h-[calc((100svh-80px)/2)] bg-[#1c1c28] flex flex-col md:flex-row lg:flex-row justify-between items-center px-[40px] md:px-[80px] lg:px-[80px]">
        <Segment1 />
        <Segment2 />
      </div>
      <div className="w-[100%] h-auto md:h-[calc((100svh-80px)/2)] lg:h-[calc((100svh-80px)/2)] bg-[#1c1c28] flex flex-col md:flex-row lg:flex-row justify-between items-center px-[40px] md:px-[80px] lg:px-[80px]">
        <Segment3 />
        <Segment4 />
      </div>
      {/* <TrackingPage /> */}
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
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
    path: "/data",
    element: <TrackingPage />,
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
