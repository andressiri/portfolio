import React, { FC } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";
import { useTranslation } from "next-i18next";

const ContactButton: FC<IStyledButton> = ({
  endIcon = <ArrowForwardIcon />,
  children,
}) => {
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
    <StyledButton endIcon={endIcon} onClick={handleClick}>
      {children ? children : (t("contact") as string)}
    </StyledButton>
  );
};

export default ContactButton;
