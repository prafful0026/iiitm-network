import Faculty from "../models/FacultyModel.js";

//GET ALL FacultyS

const getAllFacultys = async (req, res) => {
  try {
    const users = await Faculty.find({}).populate("user");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export { getAllFacultys };