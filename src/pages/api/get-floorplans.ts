import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user_id } = req.query;

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('floorplans')
        .select('*')
        .eq('user_id', user_id);

      if (error) {
        throw error;
      }
      res.status(200).json({ floorplans: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}