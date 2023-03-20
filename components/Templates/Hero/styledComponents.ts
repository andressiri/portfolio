import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  maxWidth: "1600px",
  height: "100vh",
  minHeight: "750px",
  margin: "0px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
