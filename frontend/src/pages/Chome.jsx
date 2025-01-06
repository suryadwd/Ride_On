import React, { useEffect, useRef, useState } from "react";
import { data, Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfRidePopUp from "../components/ConfRidePopUp";
import { useSelector } from "react-redux";
import { Captain } from "../../../backend/models/cap.model";
const Chome = () => {


  const [popUp, setPopUp] = useState(!false);
  const [confPopUp, setConfPopUp] = useState(false);


  const popUpPannel = useRef(null);
  const confPopUpPannel = useRef(null)


  

  useGSAP(() => {
    gsap.to(confPopUpPannel.current, {
      transform: confPopUp ? "translateY(0%)" : "translateY(100%)",
      height: confPopUp ? "100%" : "0%"
    });
  }, [confPopUp]);


  useGSAP(() => {
    gsap.to(popUpPannel.current, {
      transform: popUp ? "translateY(0%)" : "translateY(100%)"
    });
  }, [popUp]);




   //socket

   const { socket } = useSelector((store) => store.socketio);
   const { caption } = useSelector((store) => store.caption);
 
   useEffect(() => {
    //  console.log(caption?.caption?._id)
 
     socket.emit("join", { userType: "captain", userId: caption?.caption?._id });

    socket.on('update-location-captain', async  (data) => {
      const {userId, location} = data;
      await Captain.findByIdAndUpdate(userId, {location:{
        ltd:location.ltd,
        lng:location.lng,
      }})
    } )

   }, [caption]);
   
useEffect(() => {
  const interval = setInterval(() => {
   navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit("update-location", {
      userId: caption?.caption?._id,
      location: { ltd: latitude, lng: longitude },
    });
   });
  }, 10000);

  return () => clearInterval(interval);
}, [caption, socket]);
 
   //configuration


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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      
      <div ref={popUpPannel} className="fixed w-full z-10 translate-y-full  bottom-0 p-7     bg-white">
        <RidePopUp setPopUp={setPopUp} setConfPopUp={setConfPopUp} />
      </div>


      <div ref={confPopUpPannel} className="fixed w-full z-10 translate-y-full  bottom-0 p-7     bg-white">
        <ConfRidePopUp setConfPopUp={setConfPopUp} setPopUp={setPopUp}  />
      </div>



    </div>
  );
};

export default Chome;
