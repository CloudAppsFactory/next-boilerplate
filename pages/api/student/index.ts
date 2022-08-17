import { NextApiHandler } from "next";
import { apiHandler } from 'helpers/api';
import withDb from '../../../db/withDb';
import Student from '../../../models/studentModel';

const handler: NextApiHandler = async (req, res) => {

  if (req.method === 'GET') {
    let result = await Student.findById(req.headers['userid'],{password:0});
    return res.status(200).json({ data: result });
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

};

export default apiHandler(withDb(handler));