import express from "express";

import {
  cardPay,
  successPayment
} from "../controllers/paymentController.js";

const router = express.Router();

router.post('/chatge');
router.post('/card-pay', cardPay);
router.get('/success-payment', successPayment);

export default router;