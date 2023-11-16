import express from "express";

import {
  refreshToken,
  signIn,
  signOut
} from "../controllers/auth/authController.js";
import {
  forgotPassword,
  resetPassword,
  updatePassword
} from "../controllers/auth/passwordController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-out', authMiddleware, signOut);
router.get('/refresh-token', authMiddleware, refreshToken);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);
router.put('/update-password', authMiddleware, updatePassword);

export default router;