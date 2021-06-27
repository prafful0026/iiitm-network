import express from "express";
import {createPost,getPostByCategory,deletePost,likePost,getFavouritePosts,getPostByUserId} from "../controllers/PostControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/create").post(protect,createPost)
router.route("/category/:postCategory").get(protect,getPostByCategory)
router.route("/:postId").delete(protect,deletePost)
router.route("/like/:postId").put(protect,likePost)
router.route("/favourite").get(protect,getFavouritePosts)
router.route("/user/:userId").get(protect,getPostByUserId)

// router.route("/signup").post(userSignup)


export default router;