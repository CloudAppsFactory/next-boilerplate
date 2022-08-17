import { Schema, model, models } from 'mongoose';

const invoiceSchema = new Schema({
  ID: {
    type: String,
    required: true, 
    unique: true,
  },
  studID: {
    type: String,
    required: [true,"StudentID is required"],
  },
  totalPayableAmount:{
    type: Number,
    required: [true,"Amount is required"],
  },
  date:{
    type:Date,
    required: [true,"Invoice Date is required"],
  },
  lateFeeApplicable:{
    type:Boolean,
    required: true, 
  },
  SubjectWise:[],
  status:{
    type: String,
    required: true, 
  }
},{ timestamps: true });

const Invoice = models.Invoice || model('Invoice', invoiceSchema);

export default Invoice;