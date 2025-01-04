import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {

  
  return (
    <div className="h-screen">

        <Link to="/home" className="fixed   right-2 top-2 h-14 w-14 bg-white flex items-center justify-center rounded-full">
          <i className=" text-3xl font-semibold ri-home-5-line"></i>
        </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">

        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg -mb-1 font-semibold">Suraj</h2>
            <h3 className="font-bold -mb-1">UP72 HJ 1234</h3>
            <p className="text-sm text-gray-400">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-3 flex-col justify-between items-center">
          <div className="w-full mt-5">
            


            <div className="flex gap-4 items-center p-3 border-b-2">
              <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-user-fill text-xl"></i>
              </h2>

              <div>
                <h3 className="text-lg font-medium">Fitnness Gym</h3>
                <p className="text-gray-700">Unimall 8-Floor</p>
              </div>
            </div>

            <div className="flex gap-4 items-center p-3 ">
              <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
                <i className="ri-currency-line text-xl"></i>
              </h2>

              <div>
                <h3 className="text-lg font-medium">₹96.76</h3>
                <p className="text-gray-700">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 p-4 rounded-lg  bg-green-600 text-white font-semibold  " >Make a Payment</button>
      </div>


    </div>
  );


};

export default Riding;
