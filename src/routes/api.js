import express from "express";

import { cardPay } from "../controllers/paymentController.js";

const router = express.Router();

router.post('/chatge');
router.post('/card-pay', cardPay);

export default router;