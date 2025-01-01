import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import {generateTokenAndSetCookies} from "../utils/generator.js"


export const register = async (req, res) => {
  try {
    
    const{firstname,lastname,email,password} = req.body

    if(!firstname){
      return res.status(400).json({message:"First name required"})
    }

    if(!email){
      return res.status(400).json({message:"email required"})
    }

    if(!password || password.length < 6){
      return res.status(400).json({message:"password required and greter then 6 characters"})
    }

    const userExists = await User.findOne({email})

    if(userExists){
      return res.status(400).json({message:"User already exists"})
    }

    const hashPass = await bcrypt.hash(password,10)

    const newUser = await User({
      firstname,
      lastname,
      email,
      password:hashPass
    })

    const payload = ({
      id:newUser._id,
      email:newUser.email,
      firstname:newUser.firstname,
      lastname:newUser.lastname,
    })

    generateTokenAndSetCookies(payload,res)

    await newUser.save()

    return res.status(201).json({success:true,message:"User registered successfully",newUser})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}


export const login = async (req, res) => {

  try {
    const {email,password} = req.body

    if(!email||!password){
      return res.status(400).json({message:"all fields are required"})
    }

    const userExists = await User.findOne({email})

    if(!userExists) return res.status(400).json({message:"user not found"})

    const isPass = await bcrypt.compare(password,userExists.password)

    if(!isPass) return res.status(400).json({message:"invalid password"})

    const payload = ({
      id:userExists._id,
      email:userExists.email,
      firstname:userExists.firstname,
      lastname:userExists.lastname,
    })

    generateTokenAndSetCookies(payload, res)

    return res.status(200).json({success:true,message:"User logged in successfully",user:userExists})
    

  } catch (error) {
    return res.status(500).json({success:false,message:error.message})
  }

}


export const getProfile = async (req, res) => {

  try {
    
    const userId = req.user.id

    const user = await User.findById(userId).select("-password")

    if(!user) return res.status(404).json({message:"User not found"})

    return res.status(200).json({success:true,user})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}


export const logout = async (req, res) => {

  try {
    res.cookie("jwt","",{maxAge:0}) 
    return res.status(200).json({success:true,message:"User logged out successfully"})  
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}