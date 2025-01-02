import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCaption } from "../redux/captionSlice";
import axios from "axios";
import {toast} from "react-hot-toast";

const Clogin = () => {

    const [caption, setCaptions] = useState({
      email: "",
      password: "",
    });
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
  
    const submitHandler = async (e) => {
      e.preventDefault()
      
      try {
        
        const res = await axios.post("http://localhost:8000/api/v1/captain/login", caption,{
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
        console.log(error)
      }


      setCaptions({
        email: "",
        password: "",
      })
    }
    

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-28 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-xl font-medium mb-3 ">Enter your's email</h3>
          <input
            type="email"
            placeholder="email@example.com"
            value={caption.email}  
            onChange={e => setCaptions({...caption,email:e.target.value})}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <h3 className="text-xl mb-3 font-medium ">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            value={caption.password}
            onChange={e => setCaptions({...caption,password:e.target.value})}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <button type="submit" className="bg-black text-white font-semibold mb-7 rounded py-2 px-4  w-full">
            Login
          </button>

          <Link to="/C-signup" className="flex ml-7 mt-4 mb-4 cursor-pointer">
            Create new Caption account?
            <span className="text-blue-400">&nbsp; Signup</span>
          </Link>
        </form>
      </div>

      <Link to="/login" className= " flex items-center justify-center bg-green-600  text-white mb-7 rounded py-2 px-4 border w-full">
        Login in as User
      </Link>
    </div>
  );

}

export default Clogin
