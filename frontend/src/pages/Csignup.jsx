import React, { useState } from "react";
import { Link } from "react-router-dom";


const Csignup = () => {

const [captain, setCaptain] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(captain);
    setCaptain({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
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
            onChange={(e) => setCaptain({ ...captain, firstname: e.target.value })}
            className="bg-[#eeeeee]  rounded py-2 px-4 border w-1/2"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={captain.lastname}
            onChange={(e) => setCaptain({ ...captain, lastname: e.target.value })}
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
            onChange={(e) => setCaptain({ ...captain, password: e.target.value })}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold mb-5 rounded py-2 px-4  w-full"
          >
            Signup
          </button>

          <Link to="/C-login" className="flex ml-5 mt-4 mb-5 cursor-pointer">
             Have a Caption account?
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



}

export default Csignup

