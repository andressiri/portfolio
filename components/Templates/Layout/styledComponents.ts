import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.custom.navbar.height,
}));
