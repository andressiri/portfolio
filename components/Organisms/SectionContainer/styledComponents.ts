import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { ITitleSpecifics } from "typings/sections";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  minHeight: "800px",
  margin: "0px auto",
  padding: "70px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    !["titleSpecifics", "isSpanish"].includes(prop as string),
})<{ titleSpecifics: ITitleSpecifics; isSpanish: boolean }>(
  ({ theme, titleSpecifics, isSpanish }) => ({
    ...titleSpecifics,
    position: "absolute",
    top: isSpanish ? titleSpecifics.esTop : titleSpecifics.enTop,
    left: isSpanish ? titleSpecifics.esLeft : titleSpecifics.enLeft,
    margin: "0px",
    padding: "0px",
    color: theme.palette.primary.dark.replace("1)", "0.08)"),
    fontSize: isSpanish ? titleSpecifics.esFontSize : titleSpecifics.enFontSize,
    fontWeight: 900,
    letterSpacing: isSpanish
      ? titleSpecifics.esLetterSpacing
      : titleSpecifics.enLetterSpacing,
    userSelect: "none",
  })
);
