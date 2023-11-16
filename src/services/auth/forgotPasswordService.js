import { forgotPasswordEmail } from "../../emails/forgotPasswordEmail.js";
import User from "../../models/User.js";

export const forgotPasswordService = async (req) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  if (!user)
    return {
      status: 404,
      message: 'The user not found'
    };

  try {
    await forgotPasswordEmail(user);
  } catch (error) {
    return {
      status: 541,
      message: error.message
    };
  }

  return {
    status: 200,
    message: `The password reset link sent to ${user.email} email address`
  };
};