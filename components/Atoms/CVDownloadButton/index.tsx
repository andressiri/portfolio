import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";

interface Props extends IStyledButton {
  ATMCV?: boolean;
}

const CVDownloadButton: FC<Props> = ({ ATMCV = false, ...props }) => {
  const { t } = useTranslation("buttons");

  const handleClick = () => {
    // this will download CV
    //
    // if (ATMCV) {
    //   download ATM CV
    //   return
    // }
    //
    // download cv
  };

  return (
    <StyledButton
      endIcon={props.endIcon || <CloudDownloadIcon />}
      onClick={handleClick}
      {...props}
    >
      {props.children || (t(ATMCV ? "downloadATMCV" : "downloadCV") as string)}
    </StyledButton>
  );
};

export default CVDownloadButton;
