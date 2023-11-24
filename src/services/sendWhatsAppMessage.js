import twilio from "twilio";

export const sendWhatsAppMessageService = async (req) => {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  try {
    const message = await client.messages.create({
      from: 'whatsapp:+14155238886',
      body: 'movie URL',
      to: `whatsapp:+37498360038`
    });
    return message;
  } catch (error) {
    console.error('Error sending message:', error.message);
    return error.message;
  }
};

//${req.mobNumber}