import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
    const {username} = req.params
    try {
        const user = await User.findOne({username}).select("-password")
        if(!user) {
            return res.status(404).json({error: "User not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log("Error in getUserProfile: ", error.message)
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params
        const userToModify = await User.findById(id)
        const currentUser = await User.findById(req.user._id)
        if(id === req.user._id.toString()) {
            return res.status(400).json({ error: "You cannot follow yourself"})
        }
        if(!userToModify || !currentUser) {
            return res.status(400).json({ error: "User not found"})
        }
        // Follow/Unfollow Functions using arrays and their IDs
        const isFollowing = currentUser.following.includes(id)
        // Unfollow user
        if(isFollowing) {
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id}})
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id}})
            res.status(200).json({ message: "user unfollowed"})
        } else {
            // Follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id}})
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id}})
            // Sending notif to user
            res.status(200).json({ message: "user followed"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log("Error in followUnfollowUser: ", error.message)
    }
}