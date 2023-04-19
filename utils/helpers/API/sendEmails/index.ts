import { NextApiResponse } from "next";
import { sendEmail } from "config/mailer";
import { IFormData } from "typings/contact";
import { contactMail, thanksMail } from "utils/templates";

interface IBody extends IFormData {
  language: string;
}

const sendEmails = async (body: IBody, res: NextApiResponse) => {
  const { name, email, subject, message, language } = body;
  const contactEmailTemplate = contactMail(
    name,
    email,
    subject,
    message,
    language
  );
  const thanksEmailTemplate = thanksMail(name, subject, language);
  const isSpanish = language === "es";
  const contactSubject = isSpanish
    ? `Contacto desde el portfolio - ${subject}`
    : `Contact from portfolio - ${subject}`;
  const thanksSubject = isSpanish
    ? "Andrés Siri - Gracias por contactarme"
    : "Andrés Siri - Thanks for contacting me";

  const thanksEmailSuccess = await sendEmail(
    res,
    language,
    email,
    thanksSubject,
    thanksEmailTemplate
  );

  if (!thanksEmailSuccess) {
    res.status(500);
    throw new Error(
      isSpanish
        ? "Hubo un problema enviando el email, por favor corrobora tu dirección de correo"
        : "There was a problem sending the email, please check your email address"
    );
  }

  const contactEmailSuccess = await sendEmail(
    res,
    language,
    process.env.NEXT_PUBLIC_PERSONAL_MAIL as string,
    contactSubject,
    contactEmailTemplate
  );

  if (!contactEmailSuccess) {
    res.status(500);
    throw new Error(
      isSpanish
        ? "Hubo un problema enviando el correo, por favor intenta nuevamente"
        : "There was a problem sending the email, please try again"
    );
  }
};

export default sendEmails;
