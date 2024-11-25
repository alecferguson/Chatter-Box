import { generateTokenAndSetCookie } from '../lib/utils/generateToken.js';
import User from '../models/user.models.js';
import bcrypt from 'bcrypt.js';

export const signup = async (req, res) => {
    try {
        const {fullName, username, email, password} = reg.body; 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const existingUser = await UserActivation.findOne({ username });
        if(existingUser){
            return res.status(400).json({ error: "Username is already taken" });
        }
        
        const existingEmail = await UserActivation.findOne({ email });
        if(existingUser){
            return res.status(400).json({ error: "Email is already taken" });
        }

        if(password.length< 6) {
            return res.status(400).json({ error: "Email is already taken" });
        }
        //hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            fullName,
            username,
            email,
            password:hashedPassword,
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            });
        } else{
            res.status(400).json({ error: "Invalid user data" });

        }

    } catch(error) {
        console.log("Error in signup conroller", error.message);

        res.status(500).json({ error: "Internal Server Error" });

    }
};

export const login = async (req, res) => {
    res.json({
        data: "You hit the login endpoint",
     });
};

export const logout = async (req, res) => {
    res.json({
        data: "You hit the logout endpoint",
     });
};