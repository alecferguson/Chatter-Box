import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserPosts, getLikedPosts, getAllPosts, likeUnlikePost, getFollowingPosts, createPost, deletePost, commentOnPost } from "../controllers/post.controllers.js";
 const router = express.Router();

 router.get("/all", protectRoute, getAllPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);

 export default router;