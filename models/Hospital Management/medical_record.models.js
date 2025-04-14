import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
  {
    patientDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    hospitalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    doctorDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    }
  }, 
  {timestemps: true}
);

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);