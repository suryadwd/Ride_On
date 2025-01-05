import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({

    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    captain:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Captain"
    },
    pickup:{
      type:String,
    },
    destination:{
      type:String,
    },
    price:{
      type:Number
    },
    duration:{
      type:Number
    },
    distance:{
      type:Number
    },

    otp:{
        type:String
    },

    status:{
      type:String,
      enum:["pending","accepted","ongoing","completed","cancelled"],
      default:"pending",
    },
    paymentId:{
      type:String
    },
    orderId:{
      type:String
    },
    sugnature:{
      type:String
    }

})

export const Ride = new mongoose.model("Ride",RideSchema)