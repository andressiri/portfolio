import React, { FC } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NextSectionButton } from "./styledComponents";
import { goToElement } from "utils/helpers";

interface Props {
  sectionElement: HTMLDivElement | null;
}

const GoToNextSectionButton: FC<Props> = ({ sectionElement }) => {
  return (
    <NextSectionButton
      onClick={() => {
        goToElement(sectionElement as HTMLElement);
      }}
    >
      <KeyboardArrowDownIcon />
    </NextSectionButton>
  );
};

export default GoToNextSectionButton;
