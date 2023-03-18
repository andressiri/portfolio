import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (min-width: 1150px)": {
    display: "none",
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  width: "60px",
  height: "60px",
  transform: "rotate(0deg)",
  transition: "0.4s all",
  "& svg": {
    width: "35px",
    height: "35px",
    color: "currentColor",
  },
  "&:hover, &:focus, &:active": {
    transform: "scale(1.1)",
  },
}));
