import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"; 
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 8000; 

app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); //parse to form data

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB(); 
});