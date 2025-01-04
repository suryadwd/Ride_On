import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishedRide from "../components/FinishedRide";


const CaptainRiding = () => {

    const[finish, setFinish] = useState(false);

    const finishPanel = useRef(null);

  useGSAP(() => {
    gsap.to(finishPanel.current, {
      transform: finish ? "translateY(0%)" : "translateY(100%)",
      height: finish ? "80%" : "0%"
    });
  }, [finish]);


  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex gap-52 items-center justify-between">
        <img
          className="w-20 "
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <Link
          to="/C-login"
          className=" h-14 w-14 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-3xl font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div 
      
      onClick={() => setFinish(true)}

      className="h-1/5 p-6 items-center flex justify-between relative bg-yellow-500 ">
        <i className=" absolute top-0 right-36 mr-8  ri-arrow-up-wide-line text-3xl"></i>
        <h4 className="text-xl font-semibold">3 KM away</h4>
        <button className="bg-green-600 mt-2 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>



      <div ref={finishPanel} className="fixed w-full z-10 translate-y-full  bottom-0 p-7     bg-white">
        <FinishedRide setFinish={setFinish} />
      </div>



    </div>
  );
};

export default CaptainRiding;

