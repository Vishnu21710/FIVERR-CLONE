import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const userDoc = await User.findById(req.params.id);
    console.log(userDoc);
    if (req.user_id !== userDoc._id.toString()) {
      return next(createError(401, 'You can Only delete your account'))
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted successfully");
  } catch (err) {
    next(createError(401, 'No such user Exist'))
  }

};

export const getUser = async (req, res, next) => {
  try {
      const userDoc = await User.findById(req.params.id)

      res.status(200).send(userDoc)
  } catch (error) {
    console.log(error);
    res.status(401).send(error)
  }
};
