import { Schema, model, models } from 'mongoose';

const schoolSchema = new Schema({
  email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true,"Name is required"],
    unique: true,
  },
  address: {
    type: String,
    required: [true,"Address is required"],
  },
  pincode: {
    type: String
  },
  lat: {
    type: String
  },
  long: {
    type: String
  },
  logoimg: {
    type: String
  },
  coverphoto: {
    type: String
  },
  schoolAdminID:{
    type: String
  }
},{ timestamps: true });

const School = models.School || model('School', schoolSchema);

export default School;