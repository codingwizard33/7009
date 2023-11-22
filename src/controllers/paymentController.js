import { cardPayService } from "../services/cardPayService.js";

export const cardPay = async (req, res) => {
  const response = await cardPayService(req);

  return res.status(response.status).json(response.message);
};