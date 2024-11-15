// creating express server & env
import express from "express"
import dotenv from "dotenv"

// importing routes
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js"

dotenv.config(); // Enabling ENV

// Creating express app and setting port
const app = express()

const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) //Parse req.body
app.use(express.urlencoded({ extended: true})) //Used for postman
// AUTH Route
app.use("/api/auth", authRoutes)

// Listening for port & connecting to mongoDB
console.log(process.env.MONGO_URI)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB()
})
