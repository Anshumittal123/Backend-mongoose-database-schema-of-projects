import mongoose from "mongoose"

const categorySchema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    }
  }, {timestemps: true},
);

export const Category = mongoose.model('Category', categorySchema);