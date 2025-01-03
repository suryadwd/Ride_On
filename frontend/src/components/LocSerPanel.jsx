import React from "react";

const LocSerPanel = ({vehicle, setVehicle, setPanelUp }) => {
  const location = [
    "BH4, Near Football Ground, Surya_Suraj, LPU",
    "GH2, Near Unimall, Tanya Patel, LPU",
    "24A, Near Jodhpur, Anuj Dwivedi, Rajasthan",
    "65C, Near SikarGarh, Anil Dwivedi, LPU",
  ];

  return (
    <div className="h-full ml-1 mt-7 text-black rounded-lg">


      {
        location.map( (data,index) => {
          return(
            <div onClick={() => {
              setVehicle(!vehicle)
              setPanelUp(false)
            }} key={index} className="flex items-center mb-4  border-2 active:border-black rounded-lg  p-3  justify-start gap-3">
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-semibold">
              {data}
            </h4>
          </div>
          )
        })
      }


    
      
    </div>
  );
};

export default LocSerPanel;
