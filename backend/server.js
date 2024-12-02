import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
import postRoute from "./routes/post.route.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute);


app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}', PORT);
    connectMongoDB();
});
