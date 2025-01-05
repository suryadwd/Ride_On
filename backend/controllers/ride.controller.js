import { getDistanceTimeData } from "../utils/maps.services.js"
import {Ride} from "../models/ride.model.js"

async function TotalPrice(pickUp, destination) {
    
  if(!pickUp || !destination) throw new Error ("Pickup and destination are required")

  const distanceTime = await getDistanceTimeData(pickUp, destination)

  const basePrice = {auto:25, car:35, moto:20}

  const perKm = {auto:9, car:14, moto:5}

  const Price = {
  auto: (basePrice.auto + (distanceTime.distance.value/1000 * perKm.auto)).toFixed(2),
    car: (basePrice.car + (distanceTime.distance.value/1000 * perKm.car)).toFixed(2),
    moto: (basePrice.moto + (distanceTime.distance.value/1000 * perKm.moto)).toFixed(2)
  }

  return Price

}

function OTP() {
 
  const otp = crypto.randomUUID().replace(/[^0-9]/g, '').slice(0, 6);
  return otp
}

OTP()

export const rideCreate = async (req, res) => {

  try {

    const userId = req.user.id
    
    const { pickup, destination, vehicleType} = req.body

    if( !pickup || !destination || !vehicleType) throw new Error("All fields are require")

    const Price = await TotalPrice(pickup, destination)

    const ride =  new Ride({ user:userId, pickup, destination,otp:OTP(), price:Price[vehicleType] })

    await ride.save()

    return res.status(200).json({success:true, message:"Ride created", ride})

  } catch (error) {
    console.error(error)
  } 

}