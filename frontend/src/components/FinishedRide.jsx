import React from "react";
import { Link } from "react-router-dom";

const FinishedRide = ({ setFinish }) => {
  return (
    <div>
      <i
        onClick={() => setFinish(false)}
        className=" absolute top-0 right-36 mr-8  ri-arrow-down-wide-line text-3xl"
      ></i>

      <h3 className="text-2xl mt-2 font-bold mb-1"> Finish Ride! </h3>

      <div className="flex mt-6  bg-yellow-500 rounded-xl p-2 items-center justify-between">
        <div className="flex items-center mt-1 gap-4 ">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://imgs.search.brave.com/ZQY3PTXuSOMCReoM_Et1Ew2GSmAetzXf8Xd9gaRs4tk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NjE5NzczMC9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLWhh/bmRzb21lLWluZGlh/bi1tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNuY05V/VGJ3Nm16R3Nib2pr/czJWdDBrVjg1Tl9w/UWFJM3phU2tCUUpG/VGM9"
            alt=""
          />
          <h2 className="text-xl font-medium">keshav</h2>
        </div>
        <h5 className="text-lg font-semibold mt-2 ml-1 ">1.2 km</h5>
      </div>

      <div className="flex gap-3 mt-4  flex-col justify-between items-center">
        <div className="w-full mt-4 ">
          <div className="flex gap-4 items-center p-3 border-b-2">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">BH4/905-b</h3>
              <p className="text-gray-700">Near Sport Ground</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4 items-center p-3 border-b-2">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-user-fill text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">Fitnness Gym</h3>
              <p className="text-gray-700">Unimall 8-Floor</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4 items-center p-3 ">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-currency-line text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">₹96.76</h3>
              <p className="text-gray-700">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="  w-full">
          <div className="flex justify-between gap-4 p-2">
            <Link
              to="/C-home"
              className="w-[70%] ml-12 flex justify-center  bg-green-600 p-3 rounded-lg text-white font-bold"
            >
              End the ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedRide;



// AIzaSyBnAeEhqe3Lg8lLLWZMGg6pa6ScYycdq7c
