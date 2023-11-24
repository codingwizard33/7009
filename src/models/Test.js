import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  data: { type: String }
});

export default mongoose.model('Test', testSchema);