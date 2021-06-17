import User from "../models/UserModel.js";
import Student from "../models/StudentModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pkg from "validator";
import Chat from "../models/ChatModel.js";
import Faculty from "../models/FacultyModel.js";
import Admin from "../models/AdminModel.js";
import Alumni from "../models/AlumniModel.js";
const { isEmail } = pkg;

//USER LOGIN ROUTE

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!user) return res.status(401).json({ message: "invalid credentials" });

    const isPasssword = await bcrypt.compare(password, user.password);

    if (!isPasssword)
      return res.status(401).json({ message: "invalid credentials" });

    const chat = await Chat.findOne({ user: user._id });
    if (!chat) await new Chat({ user: user._id, chats: [] }).save();

    const payload = { userId: user._id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token: token,
          userId: user._id,
          userRole: user.role,
          userProfilePic: user.profilePicUrl,
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

//USER SIGNUP ROUTE

const userSignup = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      role,
      rollNumber,
      designation,
      honour,
      currentCompany,
      yearOfPassing,
      department,
      jobRole,
    } = req.body;
    // role=role.toLowerCase()
    if (!isEmail(email))
      return res.status(401).send({ message: "Invalid email." });

    let user = await User.findOne({ email: email });

    if (user)
      return res.status(400).send({ message: "Email id already registered." });

    user = new User({
      email: email.toLowerCase(),
      password,
      name,
      role,
    });
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    if (role === "student") {
      const student = new Student({
        user: user._id,
        rollNumber: rollNumber.toLowerCase(),
      });
      await student.save();
    }
    if (role === "faculty") {
      const faculty = new Faculty({
        user: user._id,
        designation,
        honour,
        department,
      });
      await faculty.save();
    }
    if (role === "admin") {
      const admin = new Admin({
        user: user._id,
        designation,
      });
      await admin.save();
    }
    if (role === "alumni") {
      const alumni = new Alumni({
        user: user._id,
        currentCompany,
        yearOfPassing,
        jobRole,
      });
      await alumni.save();
    }
    await new Chat({ user: user._id, chats: [] }).save();
    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        res
          .status(200)
          .json({
            token: token,
            userId: user._id,
            userRole: user.role,
            userProfilePic: user.profilePicUrl,
          });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error." });
  }
};
export { userLogin, userSignup };
