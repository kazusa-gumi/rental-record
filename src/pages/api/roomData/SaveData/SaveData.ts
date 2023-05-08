import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const roomData = req.body;

    const { error } = await supabase.from('rooms').insert(roomData);

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Room data saved successfully' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
