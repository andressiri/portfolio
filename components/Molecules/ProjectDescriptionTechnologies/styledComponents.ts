import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  maxWidth: "100%",
  margin: "25px auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  alignItems: "center",
  justifyContent: "flex-start",
  "& svg": {
    width: "35px",
    height: "35px",
  },
  "@media (max-width: 1149px)": {
    justifyContent: "center",
  },
}));
