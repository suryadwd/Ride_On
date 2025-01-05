import express from "express"
const route = express.Router()
import { protectedRoute } from "../middleware/protectedRoute.js"
import { rideCreate } from "../controllers/ride.controller.js"



route.post("/create", protectedRoute, rideCreate)



export default route