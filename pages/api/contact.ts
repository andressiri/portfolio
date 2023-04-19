import type { NextApiRequest, NextApiResponse } from "next";
import { checkContactBody, errorHandler, sendEmails } from "utils/helpers";

const contactHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      checkContactBody(req.body, res);

      sendEmails(req.body, res);

      return res.status(201).json({
        message:
          req.body.language === "es"
            ? "Email enviado exitosamente"
            : "Email sent successfully",
      });
    }
  } catch (err) {
    errorHandler(err as Error, res, req.body.language);
    return;
  }

  return res.status(400).json({ message: "Bad request" });
};

export default contactHandler;
