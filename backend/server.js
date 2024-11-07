//creating express server & env
import express from "express"
import dotenv from "dotenv"
//importing routes
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js"
dotenv.config(); //Call this function to enable .env
const app = express()
const PORT = process.env.PORT || 8000

//AUTH Route
app.use("/api/auth",authRoutes)

console.log(process.env.MONGO_URI)
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB()
})
