import mongoose from "mongoose";

const dbConnect = () => {
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`The database connected to ${process.env.MONGO_URL} URL`);
  })
  .catch((error) => {
    console.error(error.message);
  });
};

export default dbConnect;