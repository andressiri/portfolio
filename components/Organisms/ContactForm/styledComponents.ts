import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "700px",
  maxWidth: "90%",
  margin: "60px auto 0px auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  alignItems: "center",
}));

export const MessageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: theme.custom.buttons.height,
  margin: "-15px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: "center",
  fontSize: "20px",
  fontWeight: 600,
}));

export const SuccessMessage = styled(ErrorMessage)(({ theme }) => ({
  color: theme.palette.success.main,
}));
