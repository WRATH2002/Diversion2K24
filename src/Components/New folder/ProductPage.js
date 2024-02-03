import React from "react";

import product from "../Assets/img/product.jpeg";
import ambulance from "../Assets/img/ambulance.jpeg";
import productcart from "../Assets/img/productcart.jpeg";
import tracking from "../Assets/img/tracking.jpeg";
import pr from "../Assets/img/pr.png";
import pr2 from "../Assets/img/pr2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaAngleRightt } from "react-icons/fa6";

import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./Navbar";
const ProductPage = (props) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100svh-80px)] bg-[#1c1c28] flex flex-col md:flex-row lg:flex-row  justify-sart items-center p-[40px] pt-0 ">
        {/* ProductPage */}

        {/* <div
          className="fixed left-[40px] top-[40px]"
          onClick={() => {
            props.data(false);
          }}
        >
          <FaArrowLeftLong className="text-[25px] text-[#122333]" />
        </div> */}
        {/* <div className="w-full h-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-[45%] lg:w-[45%] h-[50%]  md:h-[70%] lg:h-[70%] bg-slate-600">
            <div className="h-[90%] w-[290px] md:w-[80%] lg:w-[80%] flex justify-center items-center">
              <img className="h-full object-cover z-50" src={pr2}></img>
            </div>
            <div className="w-full h-[10%] flex justify-center items-center">
              <div className="w-[15px] h-[3px] bg-[#00ff41] rounded-full mx-[4px] "></div>
              <div className="w-[15px] h-[3px] bg-white rounded-full mx-[4px] "></div>
              <div className="w-[15px] h-[3px] bg-white rounded-full mx-[4px] "></div>
            </div>
          </div>
          <div className="w-full md:w-[55%] lg:w-[55%] mt-[40px] flex flex-col items-start justify-between h-[50%] py-0 md:py-[70px] lg:py-[70px]">
            <div className="md:w-[60%] lg:w-[60%]">
              <div className="w-full font-[lato] font-bold text-[49px]  text-[white]">
                <span>Smart Health Tracker</span>
              </div>
              <div className="w-full font-[lato] font-medium mt-[25px]">
                <span className="text-[40px] text-[white] ">Rs. 1299 /-</span>
              </div>
              <div className="w-full font-[lato] flex items-center mt-[15px]">
                <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#00ff41] flex justify-center items-center rounded-full ">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#A95565]"></div>
                </div>
                <div className="w-[27px] h-[27px] rounded-full bg-[#535353] ml-[17px]"></div>
              </div>
              <div className="w-full font-[lato] font-medium mt-[15px] ">
                <span className="text-[17px] text-[#aaaaaa]">
                  It is a smart fitband used totrack BPM and Location of an old
                  person and it sends notification according to it. It has an
                  inbuilt SOS System.
                </span>
              </div>
            </div>

            <div className="w-[100%]  md:w-[26%] lg:w-[26%] h-[50px] bg-[#0071e3] cursor-pointer hover:bg-[#4383c4] rounded-full flex justify-center items-center">
              <span className="text-[17px] font-[lato] font-medium text-[white]">
                Buy Now
              </span>
            </div>
          </div>
        </div> */}
        <div className="w-full md:w-[50%] lg:w-[50%] h-[45%] md:h-full lg:h-full  flex justify-center items-center ">
          <div className="h-full w-full  flex justify-center items-center">
            <img className="h-full object-cover " src={pr2}></img>
          </div>
          <div className="w-full fixed flex justify-start items-center left-[40px] ">
            <div className=" w-[30px] h-[30px] flex justify-center itemc">
              <FaAngleLeft className="text-white text-[20px]" />
            </div>
          </div>
          <div className="w-full fixed flex justify-end  items-center right-[40px]">
            <div className=" w-[30px] h-[30px] flex justify-center itemc">
              <FaAngleRight className="text-white text-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[50%] h-[55%] md:h-full lg:h-full flex flex-col justify-between md:justify-center lg:justify-center items-center md:items-start lg:items-start">
          <div className="w-full">
            <div className="w-full font-[lato] font-bold text-[40px]  text-[white]">
              <span>Smart Band</span>
            </div>
            <div className="w-full font-[lato] font-medium mt-[10px]">
              <span className="text-[23px] text-[white] ">Rs. 1299 /-</span>
            </div>
            <div className="w-full font-[lato] flex items-center mt-[15px]">
              <div className="w-[37px] h-[37px] p-[2px] border-[2px] border-[#00ff41] flex justify-center items-center rounded-full ">
                <div className="w-[30px] h-[30px] rounded-full bg-[#A95565]"></div>
              </div>
              <div className="w-[27px] h-[27px] rounded-full bg-[#535353] ml-[17px]"></div>
            </div>
            <div className="w-full font-[lato] font-medium mt-[15px] ">
              <span className="text-[17px] text-[#9f9f9f]">
                It is a smart fitband used to{" "}
                <span className="text-[#00ff41]">track BPM</span> and Location
                of an old person and it sends notification according to it. It
                has an inbuilt <span className="text-[#00ff41]">SOS</span>{" "}
                System.
              </span>
            </div>
          </div>
          <div className="w-[100%]  md:w-[35%] lg:w-[35%] h-[50px] bg-[#0071e3] mt-0 md:mt-[30px] lg:mt-[30px] cursor-pointer hover:bg-[#4383c4] rounded-2xl flex justify-center items-center">
            <span className="text-[17px] font-[lato] font-medium text-[white]">
              Buy Now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
