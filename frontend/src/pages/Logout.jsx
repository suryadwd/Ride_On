import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";


const Logout = () => {


  const navigate = useNavigate()
  const dispatch = useDispatch()

  try {
    const res = axios.post("http://localhost:8000/api/v1/users/logout",{withCredentials:true}) 
    if(res.data.success){
      dispatch(setAuthUser(null))
      navigate("/")
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error)
  }



  return (
    <div>
      
    </div>
  )
}

export default Logout
