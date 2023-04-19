import { FC } from "react";
import { useTranslation } from "next-i18next";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { AnimatedSendingEmailIcon, StyledButton } from "components/Atoms";
import { IFormField } from "typings/contact";
import { ContactFormField } from "components/Molecules";
import useGetFormHandlers from "./useGetFormHandlers";
import useGetFormFields from "./useGetFormFields";
import {
  Container,
  MessageContainer,
  ErrorMessage,
  SuccessMessage,
} from "./styledComponents";

const ContactForm: FC = () => {
  const { t } = useTranslation("contact");

  const {
    formData,
    inputsVisited,
    disableSubmit,
    handleOnChange,
    handleVisited,
    handleSubmit,
    isError,
    isSuccess,
    isLoading,
    message,
  } = useGetFormHandlers();

  const formFieldsArray = useGetFormFields(formData, inputsVisited);

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      {formFieldsArray.map((field: IFormField, id: number) => {
        return (
          <ContactFormField
            field={field.field}
            formData={formData}
            inputsVisited={inputsVisited}
            handleVisited={handleVisited}
            handleOnChange={handleOnChange}
            error={field.error}
            multiline={field.multiline}
            rows={field.rows}
            helperText={field.helperText}
            key={`contactFormField${field.field}${id}`}
          />
        );
      })}
      <StyledButton
        disabled={isLoading || disableSubmit}
        type="submit"
        endIcon={isLoading ? <AnimatedSendingEmailIcon /> : <ContactMailIcon />}
        sx={{ width: "100%" }}
      >
        {isLoading ? (t("sending") as string) : (t("submit") as string)}
      </StyledButton>
      <MessageContainer>
        {isError && message ? <ErrorMessage>{message}</ErrorMessage> : <></>}
        {isSuccess && message ? (
          <SuccessMessage>{message}</SuccessMessage>
        ) : (
          <></>
        )}
      </MessageContainer>
    </Container>
  );
};

export default ContactForm;
