import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from '../lib/utils/generateToken.js'

export const signup = async (req, res) => {
    try {
        // Using middleware to parse
        const {fullName, username, email, password} = req.body

        // Email Regex (Review)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" })
		}

        // Checking for exisisting user
        const existingUser = await User.findOne({username})
        if(existingUser) {
            return res.status(400).json({ error: "Username already in use" })
        }

        // Checking for exisiting email
        const existingEmail = await User.findOne({email})
        if(existingEmail) {
            return res.status(400).json({ error: "Email is already in use" })
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating User object
        const newUser = new User({
            fullName,
            username,
            email,
            password:hashedPassword,
        })

        // JWT Token
        if(newUser) {
            generateTokenAndSetCookie(newUser._id,res) //in lib\utils
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                foillowing: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            })
        } else {
            res.status(400).json({error: "Invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller")
        res.status(500).json({error: "Server error"})
    }
}
export const login = async (req, res) => {
    res.json({
        data: "You hit the login endpoint"
    })
}
export const logout = async (req, res) => {
    res.json({
        data: "You hit the logout endpoint"
    })
}