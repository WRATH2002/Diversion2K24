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

const LandingPage = () => {
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
          <Navbar data={4} />

          <div className="w-full h-[100%] flex flex-col justify-center items-center bg-[#000000] px-[8%] md:px-[20%] lg:px-[20%]">
            <Segment1 />
            <Segment2 />
            <Segment3 />
            <Segment4 />
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
