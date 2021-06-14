import Student from "../models/StudentModel.js";

//GET ALL STUDENTS

const getAllStudents = async (req, res) => {
  try {
    const users = await Student.find({}).populate("user");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export { getAllStudents };
