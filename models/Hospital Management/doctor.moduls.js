import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Namber,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      defaul: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ]
  }, 
  {timestemps: true}
);

export const Doctor = mongoose.model('Doctor', doctorSchema);