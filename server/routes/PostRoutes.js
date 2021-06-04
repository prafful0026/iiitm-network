import express from "express";
import {createPost,getPostByCategory} from "../controllers/PostControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/create").post(protect,createPost)
router.route("/:postCategory").get(protect,getPostByCategory)
// router.route("/signup").post(userSignup)


export default router;