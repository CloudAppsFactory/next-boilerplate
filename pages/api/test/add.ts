import Test from '../../../models/testModel';
import withDb from '../../../db/withDb';
import { NextApiHandler, NextApiRequest } from 'next';


const handler: NextApiHandler = async (req, res) => {
  try {

    console.log('CREATING DOCUMENT');
    const test = await Test.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}


export default withDb(handler);

