import React from "react";
import { useSelector } from "react-redux";

const WaitForDriver = ({ setConDriver, setWaitDriver }) => {
  const { vehicleImg } = useSelector((state) => state.vehicle);

  return (
    <div>
      <i
        onClick={() => {
          setConDriver(false);
          setWaitDriver(false);
        }}
        className=" absolute top-0 right-2  ri-arrow-down-wide-line text-3xl"
      ></i>


        <div className="flex items-center justify-between">

        <img className="h-16" src={vehicleImg} alt="" />
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
      </div>
      
    </div>
  );
};

export default WaitForDriver;

//img n ai
