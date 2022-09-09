import { Schema, model, models } from 'mongoose';
const citySchema = new Schema({
    name:{
        type: Number,
        required: true, 
      },
      pincode: {
        type: String
      },
      lat: {
        type: String
      },
      long: {
        type: String
      }
})
const City = models.City || model('City', citySchema);

export default City;