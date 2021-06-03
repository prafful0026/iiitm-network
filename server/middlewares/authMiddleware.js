import jwt from "jsonwebtoken"
import User from "../models/UserModel.js";

const protect = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send(`Unauthorized`);
    }

    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    const user=User.find({_id:userId})
    if(user)
    {req.userId = userId;
    next();
    }
    else
    return res.status(401).send(`Unauthorized`);
  } catch (error) {
    console.error(error);
    return res.status(401).send(`Unauthorized`);
  }
};

export {protect}