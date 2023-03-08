import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const NavbarContainer = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: theme.custom.navbar.height,
  padding: "0px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
}));

export const RightContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
}));
