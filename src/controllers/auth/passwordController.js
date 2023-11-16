import { forgotPasswordService } from "../../services/auth/forgotPasswordService.js";
import { resetPasswordService } from "../../services/auth/resetPasswordService.js";
import { updatePasswordService } from "../../services/auth/updatePasswordService.js";

export const forgotPassword = async (req, res) => {
  const response = await forgotPasswordService(req);
  return res.status(response.status).json(response.message);
};

export const resetPassword = async (req, res) => {
  const response = await resetPasswordService(req);
  return res.status(response.status).json(response.message);
};

export const updatePassword = async (req, res) => {
  const response = await updatePasswordService(req);
  return res.status(response.status).json(response.message);
};