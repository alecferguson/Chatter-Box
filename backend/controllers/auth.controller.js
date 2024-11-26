import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from '../lib/utils/generateToken.js'

export const signup = async (req, res) => {
    try {
        // Using middleware to parse
        const {fullName, username, email, password} = req.body

        // Email Regex (Review)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" })
		}

        // Checking for exisisting user
        const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username is already taken" });
		}

        // Checking for exisiting email
        const existingEmail = await User.findOne({ email })
		if (existingEmail) {
			return res.status(400).json({ error: "Email is already taken" })
		}
        //Pasword length check
        if (password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

        // Hashing password
        const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

        // Creating User object
        const newUser = new User({
			fullName,
			username,
			email,
			password: hashedPassword,
		})

        // JWT Token
        if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				email: newUser.email,
				followers: newUser.followers,
				following: newUser.following,
				profileImg: newUser.profileImg,
				coverImg: newUser.coverImg,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

export const login = async (req, res) => {
	try {
        //Getting user and pass
		const { username, password } = req.body
		const user = await User.findOne({ username })
        //using bcrypt compare to ensure password is correct
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "") //user.? if empty return empty string

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" })
		}

		generateTokenAndSetCookie(user._id, res)

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			email: user.email,
			followers: user.followers,
			following: user.following,
			profileImg: user.profileImg,
			coverImg: user.coverImg,
		})
	} catch (error) {
		console.log("Error in login controller", error.message)
		res.status(500).json({ error: "Internal Server Error" })
	}
}
export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 })
		res.status(200).json({ message: "Logged out successfully" })
	} catch (error) {
		console.log("Error in logout controller", error.message)
		res.status(500).json({ error: "Internal Server Error" })
	}
}

// Getting auth user
export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message)
		res.status(500).json({ error: "Internal Server Error" })
	}
}