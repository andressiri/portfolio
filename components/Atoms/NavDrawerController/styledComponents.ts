import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["isNavbarVisible"].includes(prop as string),
})<{ isNavbarVisible: boolean }>(({ isNavbarVisible }) => ({
  display: isNavbarVisible ? "none" : "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1150px)": {
    display: "flex",
  },
}));
