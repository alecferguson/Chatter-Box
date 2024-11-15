import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userID,res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn: '20d'
    })
    res.cookie("jwt",token, {
        maxAge: 15*24*60*1000, //mS
        httpOnly: true, //prevents attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    })
}