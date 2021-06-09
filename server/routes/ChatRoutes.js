import express from "express";
import {recentChats} from "../controllers/ChatControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/").get(protect,recentChats)
// router.route("/signup").post(userSignup)


export default router;