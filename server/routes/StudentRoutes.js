import express from "express";
import {getAllStudents} from "../controllers/StudentControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/").get(protect,getAllStudents)
// router.route("/signup").post(userSignup)


export default router;
        