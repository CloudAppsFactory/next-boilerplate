import { NextApiHandler } from "next";
import { apiHandler } from 'helpers/api';
import withDb from '../../../db/withDb';
import School from '../../../models/schoolModel';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {

    let result = await findCity(req.body);
    return res.status(200).json({ data: result });
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }
};
const findCity = async(body:any)=>{
  const{city} = body;

  if(!city)
    return {code:(400),json:{error:'Please Select City'}}

    let result = await School.find(
      {city:city}
    )
    if(!result)
    return {code:400,json:{error:'No data found'}}

    if(result)
    return {code:200,schoollist:
      {
          schoollist: result,
      }
  };

}

export default apiHandler(withDb(handler));