import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    res.status(401).json({ error: error.message });
  } else {
    res.status(200).json({ user, session });
  }
};
