import express from "express";
import {
  createPost,
  getPostByCategory,
  deletePost,
  likePost,
  getFavouritePosts,
  getPostByUserId,
  getPostById,
  createComment,
} from "../controllers/PostControllers.js";
const router = express.Router();
import { protect } from "../middlewares/authMiddleware.js";

router.route("/create").post(protect, createPost);
router.route("/category/:postCategory").get(protect, getPostByCategory);
router.route("/:postId").get(protect, getPostById);
router.route("/:postId").delete(protect, deletePost);
router.route("/like/:postId").put(protect, likePost);
router.route("/profile/favourite").get(protect, getFavouritePosts);
router.route("/user/:userId").get(protect, getPostByUserId);
router.route("/comment/:postId").post(protect, createComment);
// router.route("/signup").post(userSignup)

export default router;
