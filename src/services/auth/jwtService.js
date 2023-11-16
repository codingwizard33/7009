import jwt from "jsonwebtoken";

export const jwtSign = (user) => {
  const { _id, name, email } = user;

  const token = jwt.sign(
    {
      _id: _id,
      name: name,
      email: email
    }, process.env.JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );

  return token;
};

export const jwtCompare = (req) => {
  const token = req.header('Authorization').split(' ')[1];

  const user = jwt.verify(token, process.env.JWT_SECRET);

  return user;
};