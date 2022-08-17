const jwt = require('jsonwebtoken');
import { NextApiHandler} from "next";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from 'next/config';
import { apiHandler } from 'helpers/api';
import Student from '../../../models/studentModel';
import withDb from '../../../db/withDb';

const { serverRuntimeConfig } = getConfig();




const handler: NextApiHandler = async (req, res) => { 
    if (req.method === 'POST') {
        let result = await authenticate(req.body);
        return res.status(result.code).json(result.json);
      } else {
        return res.status(405).json({error:`Method ${req.method} Not Allowed`})
      }
}

const  authenticate = async(body:any)=> {
    const { email, password } = body;

    if (!email || !password)
    return {code:(400),json:{error:'Please provide email and password'}}

    let result = await Student.findOne(
        {email:email}
      )

    if(!result)
    return {code:400,json:{error:'Invalid Credentials'}}

    if(result.password != password)
    return {code:400,json:{error:'Invalid Credentials'}}

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ userid: result['_id'] }, serverRuntimeConfig.JWT_SECRET, { expiresIn: '7d' });

    // return basic user details and token
    return {code:200,json:
        {
            id: result['_id'],
            email,
            token
        }
    };
}


export default apiHandler(withDb(handler));