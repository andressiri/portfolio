import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "13px",
  color: theme.palette.secondary.contrastText,
  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const ASLogoContainer = styled(Box)(() => ({
  transform: "translateY(-4px)",
}));

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "32px",
  fontWeight: 900,
  letterSpacing: "-0.45px",
  whiteSpace: "nowrap",
}));
