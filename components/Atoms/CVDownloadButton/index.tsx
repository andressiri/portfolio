import React, { FC, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import AnimatedDownloadIcon from "../AnimatedDownloadIcon";
import { StyledButton } from "components/Atoms";
import { IStyledButton } from "typings/buttons";

interface Props extends IStyledButton {
  ATMCV?: boolean;
}

const CVDownloadButton: FC<Props> = ({ ATMCV = false, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [changeArrow, setChangeArrow] = useState<boolean>(false);
  const { t, i18n } = useTranslation("buttons");

  const handleDownloadClick = async () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 3500);

    const CVResponse = await fetch(
      `${ATMCV ? "ATM-" : ""}CV-${
        i18n.language.includes("es") ? "Español" : "English"
      }.pdf`
    );
    const blob = await CVResponse.blob();
    const CVBlob = await new Blob([blob]);
    const CVFile = await window.URL.createObjectURL(CVBlob);

    const cvLink = document.createElement("a");
    cvLink.href = CVFile;
    cvLink.download = `Andrés Siri - Developer CV ${
      ATMCV ? "- ATM " : ""
    }- (${new Date().toISOString().slice(0, 10)}) - ${
      i18n.language.includes("es") ? "Español" : "English"
    }.pdf`;
    cvLink.click();
  };

  return (
    <div
      onMouseEnter={() => setChangeArrow(true)}
      onMouseLeave={() => {
        if (document.activeElement !== buttonRef.current) setChangeArrow(false);
      }}
    >
      <StyledButton
        passRef={buttonRef}
        endIcon={<AnimatedDownloadIcon downloading={downloading} />}
        onClick={handleDownloadClick}
        onFocus={() => setChangeArrow(true)}
        onBlur={() => setChangeArrow(false)}
        {...props}
      >
        {props.children ||
          (t(ATMCV ? "downloadATMCV" : "downloadCV") as string)}
      </StyledButton>
    </div>
  );
};

export default CVDownloadButton;
