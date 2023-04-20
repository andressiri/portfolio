import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const sendEmail = async (
  res: NextApiResponse,
  language: string,
  sendTo: string,
  subject: string,
  mailTemplate: string,
  replyTo?: string
) => {
  try {
    const transporter = await nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_MAIL,
        pass: process.env.MAILER_APP_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (success) {
          resolve(success);
        }
        reject(error);
      });
    });

    const mailSuccess = await new Promise((resolve, reject) => {
      transporter
        .sendMail({
          from: "Andrés Siri - Full Stack Developer",
          to: sendTo,
          subject,
          html: mailTemplate,
          replyTo: replyTo || process.env.NEXT_PUBLIC_PERSONAL_MAIL,
        })
        .then((info) => {
          if (info.response.includes("250")) {
            resolve(true);
          }
          reject(info);
        });
    });

    return mailSuccess;
  } catch (err) {
    if (process.env.NEXT_PUBLIC_ENV === "development") console.log(err);
    res.status(500);
    throw new Error(
      language === "es"
        ? "Hubo un error enviando el email, por favor intenta nuevamente"
        : "There was an error sending the email, please try again"
    );
  }
};
