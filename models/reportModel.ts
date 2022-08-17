import { Schema, model, models } from 'mongoose';

const reportSchema = new Schema({
  ID: {
    type: String,
    required: true, 
    unique: true,
  },
  type: {
    type: String,
    required: true, 
  },
  fromDate:{
    type: Date,
    required: [true,"From Date is required"],
  },
  toDate:{
    type: Date,
    required: [true,"To Date is required"],
  },
  dloadURL:{
    type: String
  }
},{ timestamps: true });

const Report = models.Report || model('Report', reportSchema);

export default Report;