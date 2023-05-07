
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomData } from '../../roomData';

let savedData: RoomData[] = [];

export const saveDataApi = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    savedData = req.body.data;
    res.status(200).json({ message: 'Data saved!' });
  } else if (req.method === 'GET') {
    res.status(200).json({ data: savedData });
  } else {
    res.status(405).json({ message: 'Method not supported.' });
  }
};
