import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";

const ContactButton: FC<IStyledButton> = ({ ...props }) => {
  const { t } = useTranslation("buttons");
  // const { contactFormRef } = useContext(context)

  const handleClick = () => {
    // this will scroll to contact form
    //
    // const contactFormTop = contactFormRef.current?.getBoundingClientRect().top
    // window.scrollTo({
    //   top: window.scrollY + contactFormTop,
    //   behavior: 'smooth',
    // });
  };

  return (
    <StyledButton
      endIcon={props.endIcon || <ArrowForwardIcon />}
      onClick={handleClick}
      {...props}
    >
      {props.children || (t("contact") as string)}
    </StyledButton>
  );
};

export default ContactButton;
