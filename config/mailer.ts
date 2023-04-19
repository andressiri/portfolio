import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_MAILER_MAIL,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

export const sendEmail = async (
  sendTo: string,
  subject: string,
  mailTemplate: string,
  replyTo?: string
) => {
  const mailSuccess = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAILER_MAIL,
    to: sendTo,
    subject,
    html: mailTemplate,
    replyTo: replyTo || process.env.NEXT_PUBLIC_PERSONAL_MAIL,
  });

  return mailSuccess;
};
