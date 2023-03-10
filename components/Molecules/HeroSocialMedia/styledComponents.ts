import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  margin: "-8px 0px 28px -8px",
  display: "flex",
  gap: "15px",
  color: theme.palette.primary.main,
  "& svg": {
    width: "70px",
    height: "70px",
  },
}));

export const StyledAnchor = styled("a")(() => ({
  position: "relative",
}));
