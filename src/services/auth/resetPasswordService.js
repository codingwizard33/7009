import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../models/User.js";

export const resetPasswordService = async (req) => {
  const { password, passwordConfirmation } = req.body;

  if (!password || !passwordConfirmation)
    return {
      status: 401,
      message: 'The password and password confirmation fields are required'
    };

  if (password !== passwordConfirmation)
    return {
      status: 401,
      message: 'Passwords do not match'
    };

  try {
    var { _id } = jwt.verify(req.params.token, process.env.JWT_SECRET);
  } catch (error) {
    return {
      status: 403,
      message: error.message
    };
  }

  const user = await User.findByIdAndUpdate(_id, { password: await bcrypt.hash(password, 10) });

  return {
    status: 201,
    message: 'The user password has bean changed success!'
  };
};