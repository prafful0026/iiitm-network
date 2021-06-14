import express from "express";
import {userLogin,userSignup} from "../controllers/UserControllers.js";
const router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";
import {getAllStudents} from "../controllers/StudentControllers.js";
import {getAllFacultys} from "../controllers/FacultyControllers.js"
import {getAllAdmins} from "../controllers/AdminControllers.js"
import {getAllAlumnis} from "../controllers/AlumniControllers.js"


router.route("/login").post(userLogin)
router.route("/signup").post(userSignup)
router.route("/student").get(protect,getAllStudents)
router.route("/faculty").get(protect,getAllFacultys)
router.route("/admin").get(protect,getAllAdmins)
router.route("/alumni").get(protect,getAllAlumnis)

export default router;
        