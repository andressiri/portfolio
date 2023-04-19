import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.secondary.contrastText,
  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: "0px auto 20px auto",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontSize: "32px",
  fontWeight: 400,
  lineHeight: "32px",
  letterSpacing: "0.65px",
}));

export const SkillsContainer = styled(Box)(() => ({
  width: "calc(100% - 40px)",
  maxWidth: "1050px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flexStart",
  justifyContent: "center",
  gap: "20px",
}));

export const SkillContainer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  height: theme.custom.buttons.height,
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  borderRadius: "15px",
  justifyContent: "center",
  gap: "10px",
  color: theme.palette.primary.dark,
  background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
  border: `1px solid ${theme.palette.secondary.contrastText}`,
}));

export const SkillText = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  color: theme.palette.secondary.contrastText,
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "18px",
}));
