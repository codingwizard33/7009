import express from "express";

import {
  cardPay,
  successPayment
} from "../controllers/paymentController.js";
import { sendWhatsAppMessageService } from "../services/sendWhatsAppMessage.js";

const router = express.Router();

router.post('/chatge');
router.post('/card-pay', cardPay);
router.get('/success-payment', successPayment);
router.post('/send-message', async (req, res) => {
  const response = await sendWhatsAppMessageService(req);
  return res.status(200).json(response);
});

export default router;