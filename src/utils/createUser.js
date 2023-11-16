import bcrypt from "bcrypt";
import User from "../models/User.js";

export const createUser = async () => {
  const user = await User.findOne();
  
  if (!user) {
    await User.create(
      {
        name: 'Administrator',
        email: 'agent.-.007@mail.ru',
        password: await bcrypt.hash('156354111', 10)
      }
    );
  }

  return;
};