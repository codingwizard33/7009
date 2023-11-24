import express from "express";

import {
  cardPay,
  successPayment
} from "../controllers/paymentController.js";
import { testController } from "../controllers/testController.js";

const router = express.Router();

router.post('/chatge');
router.post('/card-pay', cardPay);
router.get('/success-payment', successPayment);
router.get('/test', testController);

export default router;