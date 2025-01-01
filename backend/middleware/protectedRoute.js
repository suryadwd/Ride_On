import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {User} from "../models/user.model.js"
dotenv.config()

export const protectedRoute = async (req, res, next) => {

  try {
    const token = req.cookies.jwt

    if(!token) return res.status(401).json({message:"Unauthorized"})

    const payload = jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findById(payload.id).select("-password")

    req.user = user
  
    next()

  } catch (error) {
    return res.status(500).json({message:error.message})
  }  

}