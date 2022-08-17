import { Schema, model, models } from 'mongoose';

const paymentSchema = new Schema({
  amount:{
    type: Number,
    required: true, 
  },
  currency:{
    type: String,
    required: true, 
    default:"INR"
  },
  status:{
    type: String,
    required: true, 
    enum: ['UNPAID', 'PAID']
  },
  invoiceID:{
    type: String,
    required: false
  },
  userID:{
    type: String,
    required: true
  }
},{ timestamps: true });

const Payment = models.Payment || model('Payment', paymentSchema);

export default Payment;