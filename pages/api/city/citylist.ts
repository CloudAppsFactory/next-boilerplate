import { NextApiHandler } from "next";
import { apiHandler } from 'helpers/api';
import withDb from '../../../db/withDb';
import City from '../../../models/cityModel';

const handler: NextApiHandler = async (req, res) => {

  if (req.method === 'GET') {
    let result = await City.find();
    return res.status(200).json({ data: result });
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

};

export default apiHandler(withDb(handler));