import React from "react";
import { Link } from "react-router-dom";

const Chome = () => {
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
        <div className="flex items-center justify-between" >
          <div className="flex items-center gap-3 justify-start">
            <img className="h-16 w-16  rounded-full object-cover" src="https://imgs.search.brave.com/nzON_Rfmrly920yQTH10cifc5XtGofYcHpLN__GoA50/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" alt="" />
            <h4 className="text-lg font-semibold" >Subham dwd</h4>
          </div>

          <div>
            <h4 className="text-xl font-medium" >₹396.77</h4>
            <p className="text-lg ">Earned</p>
          </div>
        </div>

        <div className="mt-3 bg-gray-500 p-5 rounded-2xl  flex justify-center gap-5 items-start">
          <div className="  text-center">
           
            <i className=" text-3xl font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-700" >Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" text-3xl font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-700" >Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" text-3xl font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-700" >Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chome;
