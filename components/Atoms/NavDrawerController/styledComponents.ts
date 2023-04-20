import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (min-width: 1150px)": {
    display: "none",
  },
}));
