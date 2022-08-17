import { NextApiHandler} from "next";
import { apiHandler } from 'helpers/api';
import Payment from '../../../models/paymentModel';
import withDb from '../../../db/withDb';
import { createHmac } from "crypto";


const handler: NextApiHandler = async (req, res) => { 
    
    if (req.method === 'POST') {
        let result = await razorPay_orderStatus(req.body);
        return res.status(result.code).json(result.json);
      } else {
        return res.status(405).json({error:`Method ${req.method} Not Allowed`})
      }

};

const razorPay_orderStatus = async (body:any)  => {
    try {
      // getting the details back from our font-end
      const {
          razorpayPaymentId,
          razorpayOrderId,
          razorpaySignature,
          feeBharoPayID
      } = body;

      // Creating our own digest
      // The format should be like this:
      const shasum = createHmac("sha256", `${process.env.RAZORPAY_SECRET}`);

      shasum.update(`${razorpayOrderId}|${razorpayPaymentId}`);

      const digest = shasum.digest("hex");
      // comaparing our digest with the actual signature
      if (digest !== razorpaySignature)
          return {code:400, json:{msg: "Transaction not legit!"} };

      // THE PAYMENT IS LEGIT & VERIFIED
      // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
      let result = await Payment.updateOne(
        { _id: feeBharoPayID },
        {$set:{'status':'PAID'}}
     )
     if(result.matchedCount == 1)
     {
        return ({
            code:200,
            json:{
              msg: "success",
              orderId: razorpayOrderId,
              paymentId: razorpayPaymentId,
          }});
     }
     else
     {
        return {code:404,json:{error:"feeBharoPayID not found"}}
     }

  } catch (error) {
    console.log("error",error)
    return {code:500,json:{error:error}}
  }
  }

  export default apiHandler(withDb(handler));