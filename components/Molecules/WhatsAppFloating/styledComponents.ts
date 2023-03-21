import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["topPosition", "leftPosition"].includes(prop as string),
})<{ topPosition: number | null; leftPosition: number | null }>(
  ({ topPosition, leftPosition }) => ({
    zIndex: 99999,
    position: "fixed",
    top: topPosition ? `${topPosition}px` : "unset",
    left: leftPosition ? `${leftPosition}px` : "unset",
    bottom: topPosition ? "unset" : "30px",
    right: leftPosition ? "unset" : "30px",
    borderRadius: "50%",
  })
);

export const StyledIconContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: "60px",
  height: "60px",
  padding: "0px",
  borderRadius: "50%",
  background: theme.palette.primary.contrastText,
  "& svg": {
    width: "72px",
    height: "72px",
    transform: "translate(-6px, -6px)",
  },
  "&:hover": {
    background: theme.palette.primary.contrastText,
    opacity: "1",
  },
}));
