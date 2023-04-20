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
  "@media (max-width: 1080px)": {
    width: "100%",
  },
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
  "@media (max-width: 1080px)": {
    margin: "auto auto 40px auto",
    alignItems: "center",
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
  "@media (max-width: 550px)": {
    fontSize: "calc(74px + (100vw - 550px) * 0.12)",
    lineHeight: "calc(74px + (100vw - 550px) * 0.12)",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 40px 0px",
  color: theme.palette.secondary.contrastText,
  fontSize: "48px",
  fontWeight: 800,
  lineHeight: "48px",
  letterSpacing: "-0.675px",
  whiteSpace: "nowrap",
  "@media (max-width: 550px)": {
    margin: "0px 0px calc(40px + (100vw - 550px) * 0.07) 0px",
    fontSize: "calc(48px + (100vw - 550px) * 0.08)",
    lineHeight: "calc(48px + (100vw - 550px) * 0.08)",
  },
}));

export const Phrase = styled(Typography)(({ theme }) => ({
  margin: "0px 0px 40px 0px",
  color: theme.palette.secondary.contrastText,
  fontSize: "26px",
  lineHeight: "26px",
  letterSpacing: "-0.45px",
  fontWeight: 600,
  "@media (max-width: 550px)": {
    fontSize: "calc(26px + (100vw - 550px) * 0.04)",
    lineHeight: "calc(26px + (100vw - 550px) * 0.04)",
  },
}));
