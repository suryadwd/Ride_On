import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
const app = express()
import userRoutes from "./routes/user.route.js"
import captainRoutes from "./routes/cap.route.js"
import cookieParser from "cookie-parser"
app.use(cookieParser())
const corsOption = {
  origin:"http://localhost:5173",
  credentials:true
}

app.use(cors(corsOption));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/users/",userRoutes)
app.use("/api/v1/captain/",captainRoutes)

export default app