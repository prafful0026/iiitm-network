import express from "express";
import {userLogin} from "../controllers/UserControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

router.route("/login").post(userLogin)

export default router;
        