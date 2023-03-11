import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  minHeight: "100vh",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
