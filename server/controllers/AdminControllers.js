import Admin from "../models/AdminModel.js";

//GET ALL AdminS

const getAllAdmins = async (req, res) => {
  try {
    const users = await Admin.find({}).populate("user");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export { getAllAdmins };