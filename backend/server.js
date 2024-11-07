//creating express server
import express from "express"
//importing routes
import authRoutes from "./routes/auth.routes.js"
const app = express()
const PORT = 8000

//App is 
app.use("/api/auth",authRoutes)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})