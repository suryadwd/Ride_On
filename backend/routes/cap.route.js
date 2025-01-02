import express from "express"
import { getCaptionProfile, login, logout, register } from "../controllers/cap.controller.js"
import { protectedRouteForCap } from "../middleware/protectedRouteforCap.js"
const route = express.Router()


route.post("/signup",register)
route.post("/login",login)
route.post("/logout",logout)
route.post("/profile",protectedRouteForCap,getCaptionProfile)


export default route