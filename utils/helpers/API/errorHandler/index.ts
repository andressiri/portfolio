import type { NextApiResponse } from "next";

const errorHandler = (err: Error, res: NextApiResponse, language?: string) => {
  const statusCode = !res.statusCode
    ? 500
    : res.statusCode < 400
    ? 500
    : res.statusCode;
  const message =
    statusCode >= 500 && language === "es"
      ? `Contacte al administrador, error del servidor: ${err.message}`
      : statusCode >= 500
      ? `Contact the administrator, server error: ${err.message}`
      : err.message;

  if (process.env.NEXT_PUBLIC_ENV === "development") console.log(err.stack); // eslint-disable-line no-console

  res.status(statusCode).json({ message });
};

export default errorHandler;
