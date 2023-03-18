import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["isDrawer"].includes(prop as string),
})<{ isDrawer?: boolean }>(({ isDrawer }) => ({
  position: "absolute",
  top: "0px",
  left: isDrawer ? "100px" : "75px",
}));
