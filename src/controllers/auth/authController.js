import {
  jwtCompare,
  jwtSign
} from "../../services/auth/jwtService.js";
import { signInService } from "../../services/auth/signInService.js";

export const signIn = async (req, res) => {
  const response = await signInService(req);
  return res.status(response.status).json(response.message);
};

export const signOut = async (req, res) => {
  await res.setHeader('Authorization', '');
  return res.status(204).json();
};

export const refreshToken = async (req, res) => {
  const userData = jwtCompare(req);
  const token = jwtSign(userData);
  return res.status(200).json(token);
};