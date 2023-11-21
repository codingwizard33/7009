import axios from "axios";

import { getAccessToken } from "../config/ngenius.js";

export const makePayment = async (req, res) => {
  var accessToken = await getAccessToken(process.env.API_KEY);
  
  const { sessionId } = req.body;

  const postData = {
    action: 'PURCHASE',
    amount: {
      currencyCode: 'AED',
      value: process.env.AMOUNT
    }
  };

  try {
    const { data } = await axios.post(
      `https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/${process.env.OUTLET}/payment/hosted-session/${sessionId}`,
      {
        ...postData
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/vnd.ni-payment.v2+json',
          Accept: 'application/vnd.ni-payment.v2+json'
        }
      }
    );
    return res.status(200).send(data);
  } catch (error) {
    return res.send(500).send(error.message);
  }
};