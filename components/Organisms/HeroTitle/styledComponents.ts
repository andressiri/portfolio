import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  margin: "auto",
  paddingTop: "46px",
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
  "@media (max-width: 1500px)": {
    margin: "auto 40px auto auto",
  },
  "@media (max-width: 1150px)": {
    margin: "auto 20px auto auto",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 10px 0px",
  color: theme.palette.primary.dark,
  fontSize: "74px",
  lineHeight: "74px",
  letterSpacing: "-0.9px",
  fontWeight: 900,
  whiteSpace: "nowrap",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 40px 0px",
  color: theme.palette.secondary.contrastText,
  fontSize: "48px",
  fontWeight: 800,
  lineHeight: "48px",
  letterSpacing: "-0.675px",
  whiteSpace: "nowrap",
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
