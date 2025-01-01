import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const generateTokenAndSetCookies = (payload, res) => {

  const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d"})

  res.cookie("jwt",token,{maxAge:7*24*60*60*1000})
}