import mongoose from "mongoose"

const capSchema = new mongoose.Schema({

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
  },
  status:{
    type:String,
    enum:["active","inactive"], 
    default:"inactive",
  },
  vehicle:{
    color:{
      type:String,
      require:true,
    },
    plate:{
      type:String,
      require:true,
    },
    capacity:{
      type:Number,
      require:true,
    },
    vehicleType:{
      type:String,
      require:true,
      enum:["auto","car","bike"],
    }

  },

  location:{
    ltd:{
      type:Number,
    },
    lng:{
      type:Number,
    }
  },

},{timestamps:true})


export const Captain = mongoose.model("Captain",capSchema)