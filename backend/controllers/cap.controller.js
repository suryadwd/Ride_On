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