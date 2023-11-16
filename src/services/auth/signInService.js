import bcrypt from "bcrypt";

import User from "../../models/User.js";
import { jwtSign } from "./jwtService.js";

export const signInService = async (req) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return {
      status: 404,
      message: 'User not found'
    };
  }

  const validate = await bcrypt.compare(password, user.password);
  if (!validate)
    return {
      status: 403,
      message: 'The user credential don\'t match'
    };

  const token = jwtSign(user);
  const userData = {
    name: user.name,
    email: user.email,
    token: token
  };

  return {
    status: 200,
    message: userData
  };
};