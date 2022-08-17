import { Schema, model, models } from 'mongoose';

const schoolAdminSchema = new Schema({
  email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true,"Name is required"],
  },
  password: {
    type: String,
    required: [true,"Password is required"],
  }
},{ timestamps: true });

const SchoolAdmin = models.SchoolAdmin || model('SchoolAdmin', schoolAdminSchema);

export default SchoolAdmin;