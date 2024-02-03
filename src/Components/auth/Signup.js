import React from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleStateMode } from "../../utils/chatSlice";
import toast, { Toaster } from "react-hot-toast";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { db } from "../firebase";
// import firebase from "../../firebase";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const salesData = [
    {
      // Minute:
      Fall: false,
      Hour: 1,
      Bpm: 85,
    },
    {
      // Minute:
      Fall: false,
      Hour: 1,
      Bpm: 97,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 1,
      Bpm: 89,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 1,
      Bpm: 104,
    },
    {
      // Minute:
      Fall: false,
      Hour: 2,
      Bpm: 114,
    },
    {
      // Minute:
      Fall: false,
      Hour: 2,
      Bpm: 66,
    },
    {
      // Minute:
      Fall: false,
      Hour: 2,
      Bpm: 76,
    },
    {
      // Minute:
      Fall: false,
      Hour: 2,
      Bpm: 109,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 3,
      Bpm: 69,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 3,
      Bpm: 67,
    },
    {
      // Minute:
      Fall: false,
      Hour: 3,
      Bpm: 92,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 3,
      Bpm: 86,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 3,
      Bpm: 99,
    },
    {
      // Minute:
      Fall: false,
      Hour: 4,
      Bpm: 104,
    },
    {
      // Minute:
      Fall: false,
      Hour: 4,
      Bpm: 102,
    },
    {
      //  Minute:
      Fall: false,
      Hour: 4,
      Bpm: 80,
    },
    {
      // Minute:
      Fall: false,
      Hour: 4,
      Bpm: 118,
    },
    {
      // Minute:
      Fall: false,
      Hour: 5,
      Bpm: 89,
    },
  ];

  function createUserCollection(user) {
    db.collection("USERS").doc(user.uid).set({
      Data: salesData,
      Hello: false,
      // submitDate: 0,
      // submitStatus: false,
    });
    console.log("done");
  }
  const signUp = (e) => {
    e.preventDefault();
    if (email.length === 0 || !email.includes("@gmail.com")) {
      toast.error("Enter valid Email id");
    } else if (password.length <= 6) {
      toast.error("Password must be atleast 6 digits");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user.uid);
          console.log(userCredential.user.email);
          console.log(userCredential);
          createUserCollection(userCredential.user);
          // db.collection("Chat Record")
          //   .doc(userCredential.user.uid)
          //   .collection("Chats");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  function changeModeTwo() {
    // dispatch(toggleStateMode(1));
    props.data2(1);
  }

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-full lg:w-[50%] md:w-[50%]  h-full hidden md:flex lg:flex flex-col justify-center items-center">
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className=" fixed font-bold font-[lato] leading-[1] text-[39px] md:text-[70px] lg:text-[70px] text-[#f5f5f7] h-[calc(100%-120px)] flex justify-center items-center w-[calc((100%-120px)/2)]">
          Let's get started
        </div>
      </div>
      <div className="w-full lg:w-[50%] md:w-[50%] p-[10px] md:p-[40px] lg:p-[40px]  h-full flex flex-col justify-center items-center font-[lato]">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[40px]  w-[70%] text-[#ffffff]   font-medium">
            Signup{" "}
          </span>
          <span className="text-[16px]  w-[70%] font-normal  text-[#ffffff] ">
            already a user
            <span
              className="text-[#ff6f3b]  cursor-pointer font-normal"
              style={{ transition: ".3s" }}
              onClick={() => changeModeTwo()}
            >
              {" "}
              login here
            </span>
          </span>
        </div>
        {/* <div>Signup</div> */}

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
          className="w-[70%] h-[50px] text-[#000000] font-[lato] font-medium outline-none flex justify-center items-center bg-[#ffffff] hover:bg-[white] hover:text-[black] rounded-md mt-[30px]"
          style={{ transition: ".3s" }}
          type="submit"
          onClick={signUp}
        >
          <span className="font-semibold" onClick={signUp}>
            Sign Up
          </span>
        </button>
      </div>
    </>
  );
};

export default Signup;
