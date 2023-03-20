import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "100px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "30px",
}));
