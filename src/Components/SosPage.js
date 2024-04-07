import React from "react";
import toast, { Toaster } from "react-hot-toast";

const SosPage = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[100%] h-[100svh] bg-[#060a0c] flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex flex-col">
          <span className="font-[jet] text-[white] text-[30px] ">
            Are you in an Emergency ?
          </span>
          <span className="font-[jet] text-[white] text-[20px] mt-[20px] ">
            We are always ready to help you out anytime & anywhere.
          </span>
          <span className="font-[jet] text-[white] text-[16px] mt-[20px]">
            Location: Jadavpur, Kolkata
          </span>
        </div>
        <div
          className="w-[200px] h-[200px] rounded-full bg-[#111a1e] fixed justify-center items-center flex cursor-pointer"
          onClick={() => {
            toast.success("Ambulance is coming soon");
          }}
        >
          <div className="w-[150px] h-[150px] rounded-full bg-[#273c46] fixed flex justify-center items-center">
            <span className="font-[jet] text-[30px] text-[white] font-semibold ">
              SOS
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default SosPage;
