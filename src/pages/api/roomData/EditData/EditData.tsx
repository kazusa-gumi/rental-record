import { NextApiRequest, NextApiResponse } from "next";

let editMode = false;

export const EditDataApi = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    editMode = !editMode;
    res.status(200).json({
      message: editMode ? "Edit mode enabled" : "Edit mode disabled",
      editMode,
    });
  } else {
    res.status(405).json({ message: "Method not supported." });
  }
};
