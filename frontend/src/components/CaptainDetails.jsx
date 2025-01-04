import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
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
  )
}

export default CaptainDetails
