import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawer", "isDrawerOpen", "upwardsUnfold"].includes(prop as string),
})<{ isDrawer?: boolean; isDrawerOpen?: boolean; upwardsUnfold?: boolean }>(
  ({ isDrawer, isDrawerOpen, upwardsUnfold }) => ({
    position: "absolute",
    top: upwardsUnfold ? "unset" : "0px",
    bottom: upwardsUnfold ? "0px" : "unset",
    left: isDrawer ? "100px" : "75px",
    display: isDrawer && !isDrawerOpen ? "none" : "block",
  })
);
