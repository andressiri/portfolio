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
  const { t } = useTranslation("buttons");

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 3500);

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
    <div
      onMouseEnter={() => setChangeArrow(true)}
      onMouseLeave={() => {
        if (document.activeElement !== buttonRef.current) setChangeArrow(false);
      }}
    >
      <StyledButton
        passRef={buttonRef}
        endIcon={
          <AnimatedDownloadIcon
            downloading={downloading}
            changeArrow={changeArrow}
          />
        }
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
