import express from "express"
import { getProfile, login, logout, register } from "../controllers/user.controller.js"
import { protectedRoute } from "../middleware/protectedRoute.js"

const router  =  express.Router()

router.post("/signup",register)
router.post("/login",login)
router.post("/profile",protectedRoute,getProfile)
router.post("/logout",protectedRoute,logout)

export default router