
import type { NextApiRequest, NextApiResponse } from 'next';

let savedData = '';

export const  saveDataApi = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    savedData = req.body.data;
    res.status(200).json({ message: 'Data saved!' });
  } else {
    res.status(405).json({ message: 'Method not supported.' });
  }
}
