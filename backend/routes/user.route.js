import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { updateUser, getSuggestedUsers, getUserProfile, followUnfollowUser } from '../controllers/user.controller.js'
const router = express.Router()
router.get("/profile/:username", protectRoute, getUserProfile) //:username is dynamic
router.get("/suggested", protectRoute, getSuggestedUsers)
router.post("/follow/:id", protectRoute, followUnfollowUser)
router.post("/update", protectRoute, updateUser)
export default router