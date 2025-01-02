import {Captain} from "../models/cap.model.js"
import bcrypt from "bcryptjs"
import {generateTokenAndSetCookies} from "../utils/generator.js"

export const register = async (req, res) => {
  try {
    
    const{firstname,lastname,email,password,color,plate,capacity,vehicleType} = req.body

    if(!firstname  || !email  || !color || !plate || !capacity || !vehicleType)
      return res.status(400).json({message:"All fields are required"})

    if(!password || password.length < 6){
      return res.status(400).json({message:"password required and greter then 6 characters"})
    }

    const capExists = await Captain.findOne({email})

    if(capExists){
      return res.status(400).json({message:"Caption already exists"})
    }

    const hashPass = await bcrypt.hash(password,10)

    const newCap = await Captain({
      firstname,
      lastname,
      email,
      password:hashPass,
      vehicleType,
      vehicle:{
        color,
        plate,
        capacity
      }
    })

    const payload = ({
      id:newCap._id,
      email:newCap.email,
      firstname:newCap.firstname,
      lastname:newCap.lastname,
    })

    generateTokenAndSetCookies(payload,res)

    await newCap.save()

    return res.status(201).json({success:true,message:"Caption registered successfully",newCap})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

export const login = async (req, res) => {

  try {
    
    const {email,password} = req.body

    const caption = await Captain.findOne({email})

    if(!caption)  return res.status(400).json({message:"Caption not found"})
    
    const isMatch = bcrypt.compare(password,caption.password)

    if(!isMatch) return res.status(400).json({message:"Invalid password"})

    const payload = ({
      id:caption._id,
      email:caption.email,
      firstname:caption.firstname,
      lastname:caption.lastname,
    })

    generateTokenAndSetCookies(payload,res)

    return res.status(200).json({success:true,message:"Caption logged in successfully",caption})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}

export const logout = async (req, res) => {

  try {
    
    res.cookie("jwt","",{maxAge:0})
    return res.status(200).json({message:"Caption logged out successfully"})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}

export const getCaptionProfile = async (req, res) => {

  try {
    
   const captionId = req.cap._id

    if(!captionId) return res.status(400).json({message:"Invalid user"})

   const caption = await Captain.findById(captionId).select("-password") 
    
   if(!caption) return res.status(400).json({message:"Invalid user"})

    return res.status(200).json({success:true,caption})

  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}