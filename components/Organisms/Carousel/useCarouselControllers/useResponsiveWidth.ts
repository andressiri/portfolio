import { useCallback, useContext, useMemo } from "react";
import { GeneralContext } from "contexts";
import { useTheme } from "@mui/material";

interface Props {
  cardWidth: number;
  leftMargin: number;
  rightMargin: number;
  buttonsVisible: boolean;
  scrollbarWidth: number;
}

const useResponsiveWidth = ({
  cardWidth,
  leftMargin,
  rightMargin,
  buttonsVisible,
  scrollbarWidth,
}: Props) => {
  const { viewportWidth } = useContext(GeneralContext);
  const theme = useTheme();

  const sidesSpace = useMemo(() => {
    const space = buttonsVisible
      ? theme.custom.navButtons.height * 2 +
        leftMargin +
        rightMargin +
        scrollbarWidth
      : leftMargin + rightMargin + scrollbarWidth;

    return space;
  }, [
    leftMargin,
    rightMargin,
    scrollbarWidth,
    buttonsVisible,
    theme.custom.navButtons.height,
  ]);

  const responsiveWidth = useCallback(() => {
    if (viewportWidth >= cardWidth + sidesSpace) return cardWidth;
    return viewportWidth - sidesSpace;
  }, [viewportWidth, cardWidth, sidesSpace]);

  return {
    sidesSpace,
    responsiveWidth,
  };
};

export default useResponsiveWidth;
