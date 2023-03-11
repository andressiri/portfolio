import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
