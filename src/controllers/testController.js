import Test from "../models/Test.js";

const testController = async (req, res) => {
  const message = await Test.create({
    data: req
  });

  return res.status(200).json(message);
};

export { testController };