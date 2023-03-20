import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  maxWidth: "1600px",
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
  top: isSpanish ? "-35px" : "-80px",
  left: isSpanish ? "-35px" : "-80px",
  margin: "0px",
  padding: "0px",
  color: theme.palette.primary.dark.replace("1)", "0.08)"),
  fontSize: isSpanish ? "250px" : "400px",
  fontWeight: 900,
  letterSpacing: isSpanish ? "-12px" : "20px",
  userSelect: "none",
}));
