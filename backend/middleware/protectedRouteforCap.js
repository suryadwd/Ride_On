import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {Captain} from "../models/cap.model.js"
dotenv.config()

export const protectedRouteForCap = async (req, res, next) => {

  try {
    
    const token = req.cookies.jwt

    if(!token) return res.status(401).json({message:"Unauthorized"})

    const payload = jwt.verify(token, process.env.JWT_SECRET)

  const cap = await Captain.findById(payload.id).select("-password")

    req.cap = cap
  
    next()  

  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}