import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawer", "isDrawerOpen"].includes(prop as string),
})<{ isDrawer?: boolean; isDrawerOpen?: boolean }>(
  ({ isDrawer, isDrawerOpen }) => ({
    position: "absolute",
    top: "0px",
    left: "0px",
    display: isDrawer && !isDrawerOpen ? "none" : "block",
  })
);
