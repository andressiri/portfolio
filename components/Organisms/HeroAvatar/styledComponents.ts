import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const InnerContainer = styled(Box)(() => ({
  width: "fit-content",
  height: "fit-content",
  margin: "auto 250px auto auto",
  padding: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
}));
