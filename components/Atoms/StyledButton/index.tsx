import React, { FC } from "react";
import { ButtonStyled } from "./styledComponents";
import { IStyledButton } from "typings/buttons";

const ContactButton: FC<IStyledButton> = ({
  BGType = "primaryBG",
  sx,
  startIcon,
  endIcon,
  shadow = true,
  onClick,
  tabIndex = 0,
  children,
}) => {
  return (
    <ButtonStyled
      sx={sx}
      startIcon={startIcon}
      endIcon={endIcon}
      BGType={BGType}
      shadow={shadow}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </ButtonStyled>
  );
};

export default ContactButton;
