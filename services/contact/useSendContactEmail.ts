import { useContext } from "react";
import { ContactContext } from "contexts";
import { useTranslation } from "next-i18next";
import { validateEmail } from "utils/helpers";
import { IFormData } from "typings/contact";

interface Props {
  formData: IFormData;
}

const useSendContactEmail = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(ContactContext);
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.includes("es");

  const sendContactEmail = async ({ formData }: Props) => {
    try {
      setIsLoading(true);

      for (const key in formData) {
        if (!formData[key as keyof typeof formData])
          throw new Error(
            isSpanish
              ? "Por favor agrega toda la información requerida"
              : "Please add all the information required"
          );
      }

      if (!validateEmail(formData.email))
        throw new Error(
          isSpanish
            ? "Por favor agrega un email válido"
            : "Please add a valid email"
        );

      const data = {
        ...formData,
        language: isSpanish ? "es" : "en",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await response.json();

      if (response.status >= 400) {
        throw new Error(json.message);
      }

      setIsSuccess(true);
      setMessage(`${json.message}`);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setMessage(`${err}`);
      setIsLoading(false);
    }
  };

  return { sendContactEmail };
};

export default useSendContactEmail;
