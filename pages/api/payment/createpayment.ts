import { NextApiHandler} from "next";
import { apiHandler } from 'helpers/api';
import Payment from '../../../models/paymentModel';
import withDb from '../../../db/withDb';
const Razorpay = require("razorpay");

const handler: NextApiHandler = async (req, res) => { 
    let {amount} = req.body;
    
    if (req.method === 'POST') {
        let result = await razorPay_createOrder(amount,String(req.headers['userid']));
        return res.status(result.code).json(result.json);
      } else {
        return res.status(405).json({error:`Method ${req.method} Not Allowed`})
      }

};

const  razorPay_createOrder = async (amount:number,userID:string) =>
{
  try {
    if(!amount || amount == 0)
    return {code:400,json:{error:`Bad Request`}}

    let payDetails = new Payment({
        amount:amount,
        currency:"INR",
        status:"UNPAID",
        userID:userID
      });
    
    let newPayment = await payDetails.save();

    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
    });


    const options = {
        amount: amount*100, // amount in smallest currency unit
        currency: "INR",
        receipt: String(newPayment['_id']),
    };

    const order = await instance.orders.create(options);

    if (!order) return {code:500,json:{error:`Payment Provider issues`}};
    
    return {code:500,json:order} ;
} catch (error) {
    return {code:500,json:{error:error}}
}
}

export default apiHandler(withDb(handler));