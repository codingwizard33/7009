import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);