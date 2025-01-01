import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
const app = express()
import userRoutes from "./routes/user.route.js"
import cookieParser from "cookie-parser"
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/users/",userRoutes)

export default app