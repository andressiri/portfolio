import React, { FC } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GoToSectionButton } from "./styledComponents";
import { goToElement } from "utils/helpers";

interface Props {
  sectionElement: HTMLDivElement | null;
  direction?: "previous" | "next";
}

const SectionNavigateButton: FC<Props> = ({ sectionElement, direction }) => {
  return (
    <GoToSectionButton
      onClick={() => {
        goToElement(sectionElement as HTMLElement);
      }}
      direction={direction}
    >
      <KeyboardArrowDownIcon />
    </GoToSectionButton>
  );
};

export default SectionNavigateButton;
