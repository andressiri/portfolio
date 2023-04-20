import { NextApiResponse } from "next";
import { validateEmail } from "utils/helpers";

interface BodyField {
  en: string;
  es: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkContactBody = (body: any, res: NextApiResponse) => {
  const requiredFields: BodyField[] = [
    { en: "name", es: "nombre" },
    { en: "email", es: "email" },
    { en: "subject", es: "asunto" },
    { en: "message", es: "mensaje" },
  ];

  const checkFieldExists = (field: BodyField) => {
    if (!body[field.en]) {
      res.status(400);
      throw new Error(
        body.language === "es"
          ? `Por favor completa el campo ${Array.from(
              field.es
            )[0].toUpperCase()}${field.es.slice(1)}`
          : `Please complete the ${Array.from(
              field.en
            )[0].toUpperCase()}${field.en.slice(1)} field`
      );
    }
  };

  requiredFields.forEach((field) => {
    checkFieldExists(field);
  });

  if (!validateEmail(body.email)) {
    res.status(400);
    throw new Error(
      body.language === "es"
        ? "Por favor envía un email válido"
        : "Please send a valid email"
    );
  }
};

export default checkContactBody;
