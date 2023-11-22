import { cardPayService } from "../services/cardPayService.js";
import { successPaymentService } from "../services/successPaymentService.js";

export const cardPay = async (req, res) => {
  const response = await cardPayService(req);

  return res.status(response.status).json(response.message);
};

export const successPayment = async (req, res) => {
  const response = await successPaymentService(req);

  return res.status(response.status).json(response.message);
};