import Alumni from "../models/AlumniModel.js";

//GET ALL AlumniS

const getAllAlumnis = async (req, res) => {
  try {
    const users = await Alumni.find({}).populate("user");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export { getAllAlumnis };