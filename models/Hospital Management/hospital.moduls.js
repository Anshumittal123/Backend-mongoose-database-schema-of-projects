import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    cities: {
      type: String,
      required: true,
    },
    pincodes: {
      type: String,
      required: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestemps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
