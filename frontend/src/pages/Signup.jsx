import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";


const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const submitHandler = async (e) => {
    e.preventDefault();
    
    setUser({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    });

    try {
      
      const res = await axios.post("http://localhost:8000/api/v1/users/signup", user,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials:true,
      });

      if(res.data.success){
        toast.success(res.data.message);
        dispatch(setAuthUser(res.data))
        navigate("/home")
      }

    } catch (error) {
      console.log(error);
    }



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
          <h3 className="text-xl font-medium mb-3 ">Enter your's name</h3>
          
          <div className="flex gap-7 mb-5">
          <input
            type="text"
            placeholder="First Name"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            className="bg-[#eeeeee]  rounded py-2 px-4 border w-1/2"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            className="bg-[#eeeeee] rounded py-2 px-4 border w-1/2"
          />
          </div>

          <h3 className="text-xl font-medium mb-5 ">Enter your's email</h3>
          <input
            type="email"
            placeholder="email@example.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <h3 className="text-xl mb-5 font-medium ">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold mb-5 rounded py-2 px-4  w-full"
          >
            Create Account
          </button>

          <Link to="/Login" className="flex ml-6 mt-4 mb-5 cursor-pointer">
            Already have an account?
            <span className="text-blue-400">&nbsp; Login here</span>
          </Link>
        </form>
      </div>

      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    
    </div>
  );


};

export default Signup;
