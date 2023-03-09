import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const app = nc();

app.get((_: NextApiRequest, res: NextApiResponse) => {
  res.json({
    message: "Oh hi",
  });
});
