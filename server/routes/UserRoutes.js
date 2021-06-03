import express from "express";
import {userLogin,userSignup} from "../controllers/UserControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/login").post(userLogin)
router.route("/signup").post(userSignup)


export default router;
        