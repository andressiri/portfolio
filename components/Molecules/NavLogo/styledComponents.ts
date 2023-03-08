import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "13px",
  color: theme.palette.primary.main,
  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const ASLogoContainer = styled(Box)(() => ({
  transform: "translateY(-4px)",
}));

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "32px",
  fontWeight: 800,
  whiteSpace: "nowrap",
}));
