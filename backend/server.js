//creating express server
import express from "express"
import dotenv from "dotenv";
//importing routes
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();
const app = express()
const PORT = process.env.PORT || 8000;

//App is 
console.log(process.env.MONGO_URI);

app.use("/api/auth",authRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});