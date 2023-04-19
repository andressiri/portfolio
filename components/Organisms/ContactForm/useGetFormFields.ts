import { useTranslation } from "next-i18next";
import { IFormData, IFormField, IInputsVisited } from "typings/contact";
import { validateEmail } from "utils/helpers";

const useGetFormFields = (
  formData: IFormData,
  inputsVisited: IInputsVisited
) => {
  const { i18n } = useTranslation("contact");
  const isSpanish = i18n.language.includes("es");

  const formFieldsArray: IFormField[] = [
    {
      field: "name",
      helperText:
        formData.name || !inputsVisited.name
          ? ""
          : isSpanish
          ? "Por favor agrega tu nombre"
          : "Please add your name",
    },
    {
      field: "email",
      error:
        inputsVisited.email &&
        (!formData.email || !validateEmail(formData.email)),
      helperText:
        validateEmail(formData.email) || !inputsVisited.email
          ? ""
          : !formData.email && isSpanish
          ? "Por favor agrega tu email"
          : !formData.email
          ? "Please add your email"
          : isSpanish
          ? "Por favor agrega un email válido"
          : "Please add a valid email",
    },
    {
      field: "subject",
      helperText:
        formData.subject || !inputsVisited.subject
          ? ""
          : isSpanish
          ? "Por favor agrega un asunto"
          : "Please add a subject",
    },
    {
      field: "message",
      multiline: true,
      rows: 4,
      helperText:
        formData.message || !inputsVisited.message
          ? ""
          : isSpanish
          ? "Por favor agrega un mensaje"
          : "Please add a message",
    },
  ];

  return formFieldsArray;
};

export default useGetFormFields;
