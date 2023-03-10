import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { TooltipProps } from "typings/tooltip";

const defaultWidth = "150px";
const defaultHeight = "25px";
const tail = 7;

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["tooltipPosition"].includes(prop as string),
})<TooltipProps>(
  ({
    theme,
    tooltipPosition,
    top,
    left,
    width,
    height,
    beforeTop,
    beforeLeft,
  }) => ({
    position: "absolute",
    top: top
      ? top
      : tooltipPosition === "top" || !tooltipPosition
      ? `calc(0% - ${tail - 1}px - ${height ? height : defaultHeight})`
      : tooltipPosition === "bottom"
      ? `calc(100% + ${tail - 1}px)`
      : `calc(50% - ${height ? height : defaultHeight} / 2)`,
    left: left
      ? left
      : tooltipPosition === "left" || !tooltipPosition
      ? `calc(0% - ${tail - 1}px - ${width ? width : defaultWidth})`
      : tooltipPosition === "right"
      ? `calc(100% + ${tail - 1}px)`
      : `calc(50% - ${width ? width : defaultWidth} / 2)`,
    width: width ? width : defaultWidth,
    height: height ? height : defaultHeight,
    paddingTop: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    background: theme.palette.primary.main,
    borderRadius: "4px",
    "&::before": {
      content: "''",
      position: "absolute",
      top: beforeTop
        ? beforeTop
        : tooltipPosition === "top" || !tooltipPosition
        ? "calc(100% - 1px)"
        : tooltipPosition === "bottom"
        ? `-${tail * 2 - 1}px`
        : `calc(50% - ${tail}px)`,
      left: beforeLeft
        ? beforeLeft
        : tooltipPosition === "left"
        ? "calc(100% - 1px)"
        : tooltipPosition === "right"
        ? `-${tail * 2 - 1}px`
        : `calc(50% - ${tail}px)`,
      width: "0px",
      height: "0px",
      border: `${tail}px solid transparent`,
      borderColor:
        tooltipPosition === "top" || !tooltipPosition
          ? `${theme.palette.primary.main} transparent transparent transparent`
          : tooltipPosition === "bottom"
          ? `transparent transparent ${theme.palette.primary.main} transparent`
          : tooltipPosition === "left"
          ? `transparent transparent transparent ${theme.palette.primary.main}`
          : `transparent ${theme.palette.primary.main} transparent transparent`,
    },
  })
);
