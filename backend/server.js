import http from "http"
import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()
import { dbConnect } from "./config/db.js"

const server = http.createServer(app)

server.listen(process.env.PORT||3000,() => {
  console.log(`server is running on ${process.env.PORT} PORT`)
  dbConnect()
})