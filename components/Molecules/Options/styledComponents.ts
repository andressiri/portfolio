import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["isDrawer"].includes(prop as string),
})<{ isDrawer?: boolean }>(({ isDrawer }) => ({
  position: "relative",
  width: isDrawer ? "158px" : "133px",
  height: "28px",
  marginTop: isDrawer ? "0px" : "3px",
  display: "flex",
  overflow: "visible",
}));
