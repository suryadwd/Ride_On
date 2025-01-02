import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCaption } from "../redux/captionSlice";
import axios from "axios";
import {toast} from "react-hot-toast";
const Csignup =  () => {
  const [captain, setCaptain] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",

    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
  
    
    try {
      
      const res = await axios.post("http://localhost:8000/api/v1/captain/signup", captain,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials:true,
      })

      if(res.data.success){
        dispatch(setCaption(res.data));
        navigate("/c-home");
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log(error); 
    }


    setCaptain({
      email: "",
      password: "",
      firstname: "",
      lastname: "",

      vehicle: {
        color: "",
        plate: "",
        capacity: "",
        vehicleType: "",
      },
    });
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-28 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-xl font-medium mb-3 ">Enter Captain's name</h3>

          <div className="flex gap-7 mb-5">
            <input
              type="text"
              placeholder="First Name"
              value={captain.firstname}
              onChange={(e) =>
                setCaptain({ ...captain, firstname: e.target.value })
              }
              className="bg-[#eeeeee]  rounded py-2 px-4 border w-1/2"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={captain.lastname}
              onChange={(e) =>
                setCaptain({ ...captain, lastname: e.target.value })
              }
              className="bg-[#eeeeee] rounded py-2 px-4 border w-1/2"
            />
          </div>

          <h3 className="text-xl font-medium mb-5 ">Enter Captain's email</h3>
          <input
            type="email"
            placeholder="email@example.com"
            value={captain.email}
            onChange={(e) => setCaptain({ ...captain, email: e.target.value })}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <h3 className="text-xl mb-5 font-medium ">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            value={captain.password}
            onChange={(e) =>
              setCaptain({ ...captain, password: e.target.value })
            }
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={captain.vehicle.color}
              onChange={(e) => {
                setCaptain({
                  ...captain,
                  vehicle: { ...captain.vehicle, color: e.target.value },
                });
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={captain.vehicle.plate}
              onChange={(e) => {
                setCaptain({
                  ...captain,
                  vehicle: { ...captain.vehicle, plate: e.target.value },
                });
              }}
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={captain.vehicle.capacity}
              onChange={(e) => {
                setCaptain({
                  ...captain,
                  vehicle: { ...captain.vehicle, capacity: e.target.value },
                });
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={captain.vehicle.vehicleType}
              onChange={(e) => {
                setCaptain({
                  ...captain,
                  vehicle: { ...captain.vehicle, vehicleType: e.target.value },
                });
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">bike</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-semibold mb-5 rounded py-2 px-4  w-full"
          >
            Create Captain Account
          </button>

          <Link to="/C-login" className="flex ml-5 mt-4 mb-5 cursor-pointer">
            Have a Caption account?
            <span className="text-blue-400">&nbsp; Login here</span>
          </Link>
        </form>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default Csignup;
