import express from "express"
import { register } from "../controllers/cap.controller.js"
const route = express.Router()

route.post("/login",register)

export default route