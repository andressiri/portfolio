import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  background: theme.palette.primary.contrastText.endsWith("1)")
    ? theme.palette.primary.contrastText.replace("1)", "0.8)")
    : theme.palette.primary.contrastText,
}));
