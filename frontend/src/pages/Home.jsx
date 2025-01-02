import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover  bg-[url(https://images.unsplash.com/photo-1651037476196-357f82c04f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full">
        <img  className="w-28 pl-6" src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className="text-3xl mb-2 font-bold">Get Started with Ride</h2>
          <Link to="/Login" className=" flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
