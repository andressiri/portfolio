import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: "60px",
  height: "60px",
  transform: "rotate(0deg)",
  "& svg": {
    width: "35px",
    height: "35px",
    color: "currentColor",
  },
  "&:hover, &:focus, &:active": {
    transition: "0.3s all",
    transform: "rotate(-360deg)",
  },
}));
