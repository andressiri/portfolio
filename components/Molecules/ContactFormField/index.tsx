import { FC } from "react";
import { useTranslation } from "next-i18next";
import { StyledTextField } from "components/Atoms";
import { IFormData, IInputsVisited } from "typings/contact";

interface Props {
  field: string;
  formData: IFormData;
  inputsVisited: IInputsVisited;
  handleVisited: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleOnChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  helperText: string;
}

const ContactFormField: FC<Props> = ({
  field,
  formData,
  inputsVisited,
  handleVisited,
  handleOnChange,
  error,
  multiline,
  rows,
  helperText,
}) => {
  const { t } = useTranslation("contact");

  return (
    <StyledTextField
      error={
        error
          ? error
          : inputsVisited[field as keyof typeof inputsVisited] &&
            !formData[field as keyof typeof formData]
      }
      onBlur={(e) => handleVisited(e)}
      value={formData[field as keyof typeof formData]}
      name={field}
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => handleOnChange(e)}
      label={t(field)}
      variant="outlined"
      InputLabelProps={
        formData[field as keyof typeof formData] ? { shrink: true } : {}
      }
      multiline={multiline ? true : false}
      rows={rows ? rows : 1}
      helperText={helperText}
    />
  );
};

export default ContactFormField;
