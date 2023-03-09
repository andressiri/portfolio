import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  margin: "auto",
  paddingTop: "36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const InnerContainer = styled(Box)(() => ({
  width: "fit-content",
  height: "fit-content",
  margin: "auto auto auto 250px",
  padding: "0px",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 10px 0px",
  color: theme.palette.primary.main,
  fontSize: "74px",
  lineHeight: "74px",
  letterSpacing: "-0.9px",
  fontWeight: 900,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 40px 0px",
  color: theme.palette.secondary.main,
  textShadow: `1px 2px 4px ${theme.palette.secondary.contrastText}`,
  fontSize: "48px",
  fontWeight: 800,
  lineHeight: "48px",
  letterSpacing: "-0.675px",
}));

export const Phrase = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 40px 0px",
  color: theme.palette.secondary.contrastText,
  fontSize: "26px",
  lineHeight: "26px",
  letterSpacing: "-0.45px",
  fontWeight: 600,
}));

export const ActionsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}));
