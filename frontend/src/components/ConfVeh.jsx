import React from "react";
import { useSelector } from "react-redux";

const ConfVeh = ({setConfVeh, setConDriver}) => {

  
  const {vehicleImg} = useSelector(store => store.vehicle)
  

  return (
    <div>
      <i
        onClick={() => {
          setConfVeh(false)
        }}
        
        className=" absolute top-0 right-2  ri-arrow-down-wide-line text-3xl"
      ></i>

      <h3 className="text-2xl font-semibold mb-3">Confirm your Ride. </h3>

      <div className="flex gap-3 flex-col justify-between items-center">
        <img
          className="h-20"
          src={vehicleImg}
          alt=""
        />

        <div className="w-full mt-5">
          <div className="flex gap-4 items-center p-3 border-b-2">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">BH4/905-b</h3>
              <p className="text-gray-700">Near Sport Ground</p>
            </div>
          </div>

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

        <button onClick={() => {
          setConDriver(true)
          setConfVeh(false)
          }} className="w-full mt-5 bg-green-600 p-3 rounded-lg text-white font-bold">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfVeh;
