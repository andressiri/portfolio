import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["isFooter"].includes(prop as string),
})<{ isFooter?: boolean }>(({ theme, isFooter }) => ({
  margin: isFooter ? "0px" : "2px 0px 38px -8px",
  display: "flex",
  gap: "18px",
  color: theme.palette.secondary.contrastText,
  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const StyledAnchor = styled("a")(() => ({
  position: "relative",
}));
