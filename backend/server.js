// Importing dependencies
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
// Importing routes
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"

// Mongo DB Connection
import connectMongoDB from "./db/connectMongoDB.js"
// Enabling ENV
dotenv.config();

// Creating express app and setting port
const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) // Parse req.body
app.use(express.urlencoded({ extended: true})) // Used for postman
app.use(cookieParser()) // Used for protectRoute
// AUTH Route
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
// Listening for port & connecting to mongoDB
console.log(process.env.MONGO_URI)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB()
})
