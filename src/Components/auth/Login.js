import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
// --------------------Icons----------------
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
// import { useDispatch } from "react-redux";
// import { toggleStateMode } from "../../utils/chatSlice";
import toast, { Toaster } from "react-hot-toast";
// import registerPhoto from ".../";
const logoUrl = process.env.PUBLIC_URL + "/logo.png";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Invalid Login Credentials");
        // toast.error(error.message);
        // console.log(error);
        // console.log(error.message);
      });
  };
  function changeMode() {
    console.log(props);
    props.data2(2);
    // dispatch(toggleStateMode(2));
  }
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="fixed top-0 w-[calc(100%-120px)] h-[60px] flex justify-start items-center bg-[#000000] left-[20px] md:left-[60px] lg:left-[60px]">
        {/* <div className="w-[calc(100%-20px)] md:w-[100%] lg:w-[100%] px-[20px] bg-[#ffffff]/15 rounded-full  h-[50px] flex justify-start items-center z-50 "> */}
        <Link to="/home">
          <div className="text-[25px] font-[mukta] font-bold flex justify-center items-center text-[#00ff41]">
            <img
              src={logoUrl}
              alt="Logo"
              style={{ width: "30px", height: "28px" }}
            />
          </div>
        </Link>

        <Link to="/documentation">
          <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[40px] font-[google] font-medium text-white">
            Documentation
          </div>
        </Link>
        <Link to="/solutions">
          <div className="text-[16px] cursor-pointer flex justify-center items-center ml-[40px] font-[google] font-medium text-white">
            Solution
          </div>
        </Link>
        {/* </div> */}
      </div>
      <div className="w-full lg:w-[50%] md:w-[50%]  h-full hidden md:flex lg:flex flex-col justify-center items-center">
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className=" fixed font-bold font-[google] leading-[1] text-[39px] md:text-[70px] lg:text-[70px] text-[#f5f5f7] h-[calc(100%-120px)] flex justify-center items-center w-[calc((100%-120px)/2)]">
          Let's get started
        </div>
      </div>
      <div className="w-full lg:w-[50%] md:w-[50%] p-[10px] md:p-[40px] lg:p-[40px] h-full flex flex-col justify-center items-center font-[google]">
        {/* <span className="in  font-bold text-[40px] mb-[30px]">INFINITY</span> */}
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[40px] w-[70%] text-[#ffffff]  font-bold ">
            Login
          </span>
          <span className="text-[16px]  w-[70%] font-normal text-[#ffffff]  ">
            new user
            <span
              className="text-[#ff6f3b]  cursor-pointer  font-normal"
              style={{ transition: ".3s" }}
              onClick={() => changeMode()}
            >
              {" "}
              signup here
            </span>
          </span>
        </div>
        {/* <div>Signup</div> */}
        {/* <input
          className="outline-none  mt-[40px]  w-full h-[40px] my-[6px] rounded-md px-[15px] font-normal text-[14px] text-black bg-[#cdd8dd]"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input> */}
        {/* <input
          className="outline-none    w-full h-[40px] my-[6px] rounded-md px-[15px] font-normal text-[14px] text-black bg-[#cdd8dd]"
          placeholder="Phone Number"
          type="tel"
          value={number}
          onChange={(e) => {
            if (number.length <= 10) {
              setNumber(e.target.value);
            } else {
            }
          }}
        ></input> */}
        <input
          className=" outline-none  mt-[40px] bg   w-[70%] h-[50px] my-[10px] rounded-md px-[15px] font-normal text-[14px] text-[#ffffff] bg-[#262626]"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className=" outline-none     w-[70%] h-[50px] my-[10px] rounded-md px-[15px] font-normal text-[14px] text-[#ffffff] bg-[#262626]"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* <button
          type="submit"
          onClick={signUp}
          className="bg-slate-600 text-white w-[100px]"
        >
          Signup
        </button> */}
        <button
          className="w-[70%] h-[50px] text-[#000000] font-[google] font-medium outline-none flex justify-center items-center bg-[#ffffff] hover:bg-[white] hover:text-[black] rounded-md mt-[30px]"
          style={{ transition: ".3s" }}
          type="submit"
          onClick={signIn}
        >
          <span className="font-semibold" onClick={signIn}>
            Log In
          </span>
        </button>
      </div>
    </>
  );
};

export default Login;
