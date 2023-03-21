import React, { FC } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GoToSectionButton } from "./styledComponents";
import { goToElement } from "utils/helpers";

interface Props {
  sectionElement: HTMLDivElement | null;
  direction?: "previous" | "next";
  ariaLabel: string;
}

const SectionNavigateButton: FC<Props> = ({
  sectionElement,
  direction,
  ariaLabel,
}) => {
  return (
    <GoToSectionButton
      onClick={() => {
        goToElement(sectionElement as HTMLElement);
      }}
      direction={direction}
      aria-label={ariaLabel}
    >
      <KeyboardArrowDownIcon />
    </GoToSectionButton>
  );
};

export default SectionNavigateButton;
