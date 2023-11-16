import bcrypt from "bcrypt";

import User from "../../models/User.js";
import { jwtCompare } from "./jwtService.js";

export const updatePasswordService = async (req) => {
  const { currentPassword, password, passwordConfirmation } = req.body;

  if (!currentPassword || !password || !passwordConfirmation)
    return {
      status: 403,
      message: 'The current password, password and password confirmation fields are required'
    };

  if (password !== passwordConfirmation)
    return {
      status: 401,
      message: 'The passwords don\'t match'
    };

  try {
    var { _id } = jwtCompare(req);
  } catch (error) {
    return {
      status: 403,
      message: error.message
    };
  }

  try {
    await User.findByIdAndUpdate(_id, { password: await bcrypt.hash(password, 10) });
    await User.findByIdAndUpdate()
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  return {
    status: 201,
    message: 'The user password has bean changed success!'
  };
};