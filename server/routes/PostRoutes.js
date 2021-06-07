import express from "express";
import {createPost,getPostByCategory,deletePost,likePost} from "../controllers/PostControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/create").post(protect,createPost)
router.route("/:postCategory").get(protect,getPostByCategory)
router.route("/:postId").delete(protect,deletePost)
router.route("/like/:postId").put(protect,likePost)
// router.route("/signup").post(userSignup)


export default router;