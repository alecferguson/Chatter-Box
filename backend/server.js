// Importing dependencies
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import {v2 as cloudinary} from "cloudinary"
// Importing routes
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
// Mongo DB Connection
import connectMongoDB from "./db/connectMongoDB.js"
// Enabling ENV & configs
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
// Creating express app and setting port
const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) // Parse req.body
app.use(express.urlencoded({ extended: true})) // Used for postman
app.use(cookieParser()) // Used for protectRoute
// Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
// Listening for port & connecting to mongoDB
console.log(process.env.MONGO_URI)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB()
})
