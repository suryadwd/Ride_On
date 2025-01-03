import React from 'react'

const VehiclePanel = ({setVehicle}) => {
  return (
    <div>
      
      <i
          onClick={() => setVehicle(false)}
          className=" absolute top-0 right-2  ri-arrow-down-wide-line text-3xl"
        ></i>

        <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>

        <div className="flex w-full active:border-black border-2 rounded-lg p-3 mb-2  items-center justify-between">
          <img
            className="h-14  ml-[-10%] mb-1"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-semibold text-sm ">2 min away</h5>
            <p className="font-semibold  text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-medium">₹96.76</h2>
        </div>

        <div className="flex w-full active:border-black border-2 rounded-lg p-3 mb-2 items-center justify-between">
          <img
            className="h-14  ml-[-8%] mb-1"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-semibold text-sm ">4 min away</h5>
            <p className="font-semibold  text-xs text-gray-600">
              Affordable, bike's rides
            </p>
          </div>
          <h2 className="text-xl font-medium">₹46.82</h2>
        </div>

        <div className="flex w-full active:border-black border-2 rounded-lg p-3 mb-[-7%]  items-center justify-between">
          <img
            className="h-14  ml-[-8%] mb-1"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>6
              </span>
            </h4>
            <h5 className="font-semibold text-sm ">1 min away</h5>
            <p className="font-semibold  text-xs text-gray-600">
              Affordable, auto's rides
            </p>
          </div>
          <h2 className="text-xl font-medium">₹52.19</h2>
        </div>




    </div>
  )
}

export default VehiclePanel
