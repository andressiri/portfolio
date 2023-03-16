import React, { FC, useContext, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import AnimatedDownloadIcon from "../AnimatedDownloadIcon";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";
import { GeneralContext } from "contexts";

interface Props extends IStyledButton {
  ATSCV?: boolean;
}

const CVDownloadButton: FC<Props> = ({ ATSCV = false, ...props }) => {
  const { themeMode, themePalette } = useContext(GeneralContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [downloading, setDownloading] = useState<boolean>(false);
  const { t, i18n } = useTranslation("buttons");

  const handleDownloadClick = async () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 3500);

    const CVResponse = await fetch(
      `${ATSCV ? "ATS-" : ""}CV-${
        i18n.language.includes("es") ? "Español" : "English"
      }-${
        themeMode === "light" && themePalette === "cyanAndBlue"
          ? "Blue"
          : "Cyan"
      }.pdf`
    );
    const blob = await CVResponse.blob();
    const CVBlob = await new Blob([blob]);
    const CVFile = await window.URL.createObjectURL(CVBlob);

    const cvLink = document.createElement("a");
    cvLink.href = CVFile;
    cvLink.download = `Andrés Siri - Developer CV ${
      ATSCV ? "- ATS " : ""
    }- (${new Date().toISOString().slice(0, 10)}) - ${
      i18n.language.includes("es") ? "Español" : "English"
    }.pdf`;
    cvLink.click();
  };

  return (
    <StyledButton
      passRef={buttonRef}
      endIcon={<AnimatedDownloadIcon downloading={downloading} />}
      onClick={handleDownloadClick}
      {...props}
    >
      {props.children || (t(ATSCV ? "downloadATSCV" : "downloadCV") as string)}
    </StyledButton>
  );
};

export default CVDownloadButton;
