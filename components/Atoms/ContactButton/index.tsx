import React, { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";
import { goToElement } from "utils/helpers";

const ContactButton: FC<IStyledButton> = ({ ...props }) => {
  const { t } = useTranslation("buttons");
  const { contactRef } = useContext(GeneralContext);

  const handleClick = () => {
    goToElement(contactRef.current as HTMLDivElement);
  };

  return (
    <StyledButton
      endIcon={props.endIcon || <ArrowForwardIcon />}
      onClick={props.onClick ? props.onClick : handleClick}
      {...props}
    >
      {t("contact") as string}
    </StyledButton>
  );
};

export default ContactButton;
