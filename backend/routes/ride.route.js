import express from "express"
const route = express.Router()
import { protectedRoute } from "../middleware/protectedRoute.js"
import { rideCreate, sendPrice } from "../controllers/ride.controller.js"



route.post("/create", protectedRoute, rideCreate)
route.get("/get-price",sendPrice)


export default route