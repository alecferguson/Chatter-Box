import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userID,res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
}