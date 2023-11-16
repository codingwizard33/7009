import { jwtCompare } from "../services/auth/jwtService.js";

export const authMiddleware = async (req, res, next) => {
  if (!req.header('Authorization'))
    return res.status(403).json('Forbidden');

  try {
    jwtCompare(req);
  } catch (error) {
    return res.status(403).json(error.message);
  }

  return next();
};