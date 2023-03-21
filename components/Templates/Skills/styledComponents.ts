import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  minHeight: "800px",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
}));

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => !["isSpanish"].includes(prop as string),
})<{ isSpanish?: boolean }>(({ theme, isSpanish }) => ({
  position: "absolute",
  top: isSpanish ? "-3.125vw" : "-6.25vw",
  left: isSpanish ? "-2.5vw" : "-4.375vw",
  margin: "0px",
  padding: "0px",
  color: theme.palette.primary.dark.replace("1)", "0.08)"),
  fontSize: isSpanish ? "19.375vw" : "37.5vw",
  fontWeight: 900,
  letterSpacing: isSpanish ? "-0.75vw" : "1.25vw",
  userSelect: "none",
}));
