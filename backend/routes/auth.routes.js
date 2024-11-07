import express from "express"
const router = express.Router()
import { signup,login,logout } from "../controllers/auth.controller.js" //Imported from controller
//Broken down to controller
router.post("/signup", signup)

router.post("/login", login)

router.post("/logout",logout)

export default router