import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;

    const { error } = await supabase.from('rooms').insert(data);

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}