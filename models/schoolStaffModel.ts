import { Schema, model, models } from 'mongoose';

const schoolStaffSchema = new Schema({
  email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true,"Password is required"],
  },
  name: {
    type: String,
    required: [true,"Name is required"],
  },
  position: {
    type: String,
    required: [true,"Position is required"],
  },
  canEdit: {
    type: Boolean,
    required: true,
    default:false
  },
  canDelete: {
    type: Boolean,
    required: true,
    default:false
  },
  canView: {
    type: Boolean,
    default:true
  },
  schoolID:{
    type: String,
    required: [true,"SchoolID is required"],
  },
  reportsToAdminID:{
    type: String,
    required: [true,"Reporting Admin ID is required"],
  }
},{ timestamps: true });

const SchoolStaff = models.SchoolStaff || model('SchoolStaff', schoolStaffSchema);

export default SchoolStaff;