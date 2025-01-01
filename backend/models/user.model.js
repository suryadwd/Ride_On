import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

  firstname:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  socketId:{
    type:String,
  }

},{timestamps:true})


export const User = new mongoose.model("User",userSchema)