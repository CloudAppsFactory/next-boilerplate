import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema({
  email: {
    type: String,
    required: [true,"Please enter email"], 
    unique: true,
    trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password:{
    type: String,
    required: [true,"Please enter password"],
  },
  division:{
    type: String,
    required: [true,"Please enter division"],
  },
  rollNumber:{
    type: String,
    required: [true,"Please enter rollNumber"],
  },
  grNumber: {
    type: String,
    required: [true,"Please enter grNumber"],
  },
  firstName: {
    type: String,
    required: [true,"Please enter first name"],
  },
  lastName: {
    type: String,
    required: [true,"Please enter last name"],
  },
  parentsFirstName: {
    type: String,
    required: [true,"Please enter parents first name"],
  },
  parentsLastName: {
    type: String,
    required: [true,"Please enter parents last name"],
  },
  address: {
    type: String
  },
  currentStandard:{
    type: String,
    required: [true,"Please enter Standard"],
  },
  DOB: {
    type:Date,
    required: [true,"Please enter DOB"],
  },
  invoiceIDs:[

  ],
  phoneNumber:{
    type: String,
    required: [true,"Please enter Phone Number"],
  },
  whatsAppNotiEnabled:{
    type: Boolean,
    default:false
  }
 
},{ timestamps: true });

function validateEmail(email:string):boolean {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const Student = models.Student || model('Student', studentSchema);

export default Student;