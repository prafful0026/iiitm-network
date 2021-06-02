import User from "../models/UserModel.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLogin = async (req, res) => {
    // console.log(req.body);
  const { email, password } = req.body.user;
  try {
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!user) return res.status(401).json({message:"invalid credentials"});

    const isPasssword = await bcrypt.compare(password, user.password);

    if (!isPasssword) return res.status(401).json({message:"invalid credentials"});

    const payload = { userId: user._id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"server error"});
  }
};
export { userLogin };
