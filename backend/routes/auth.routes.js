import express from "express"
import { getMe,signup,login,logout } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"
//opening router
const router = express.Router()
// Broken down to controller
router.get("/me", protectRoute, getMe) //calls protect route function first then runs getMe

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout",logout)

export default router