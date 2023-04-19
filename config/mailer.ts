import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_MAILER_MAIL,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

export const sendEmail = async (
  res: NextApiResponse,
  language: string,
  sendTo: string,
  subject: string,
  mailTemplate: string,
  replyTo?: string
) => {
  const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (success) {
        resolve(success);
      }
      reject(error);
    });
  });

  if (!server) {
    res.status(500);
    throw new Error(
      language === "es"
        ? "Hubo un error enviando el email, por favor intenta nuevamente"
        : "There was an error sending the email, please try again"
    );
  }

  const mailSuccess = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAILER_MAIL,
    to: sendTo,
    subject,
    html: mailTemplate,
    replyTo: replyTo || process.env.NEXT_PUBLIC_PERSONAL_MAIL,
  });

  return mailSuccess;
};
