import React from "react";
import { useSelector } from "react-redux";

const ConDriver = ({ setConDriver,  pickup, destination, price }) => {
  const { vehicleImg } = useSelector((state) => state.vehicle);
 
  let vehicleType;

  if(vehicleImg === "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png") vehicleType = "car"
  if(vehicleImg === "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png") vehicleType = "moto"
  if(vehicleImg === "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png") vehicleType = "auto"

  return (

    <div>
      <i
        onClick={() => {
          setConDriver(false);
        }}
        className=" absolute top-0 right-2  ri-arrow-down-wide-line text-3xl"
      ></i>

      <h3 className="text-2xl font-semibold mb-3">Looking for a driver. </h3>

      <div className="flex gap-3 flex-col justify-between items-center">
        <img className="h-20" src={vehicleImg} alt="" />

        <div className="w-full mt-5">
          <div className="flex gap-4 items-center p-3 border-b-2">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">BH4/905-b</h3>
              <p className="text-gray-700">{pickup}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-3 border-b-2">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-user-fill text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">Fitnness Gym</h3>
              <p className="text-gray-700">{destination}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-3 ">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-currency-line text-xl"></i>
            </h2>

            <div>
              <h3 className="text-lg font-medium">₹{price[vehicleType]}</h3>
              <p className="text-gray-700">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default ConDriver;
