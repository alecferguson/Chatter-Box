import User from '../models/user.model.js'
import jwt from "jsonwebtoken"
// Decoding tokem to ensure user is validated
// Using cookie parser for this func
export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt //getting token from cookie
        // If we dont have a token
        if(!token) {
            return res.status(401).json({error: "Unauthorized: No Token Provided"})
        }

        // If we do have a token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //verify using secret
        if(!decoded) {
            return res.status(401).json({error: "Unauthorized: Invalid Token"})
        }

        // Find user
        const user = await User.findById(decoded.userId).select("-password") //-password is used to exclude the field
        if(!user) {
            return res.status(404).json({error: "User not found"}) 
        }
        //
        req.user = user
        next()

    } catch (error) {
        console.log("Error in protectRoute", error.message)
		res.status(500).json({ error: "Internal Server Error" })
    }
}