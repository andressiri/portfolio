import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const NavbarContainer = styled("nav")(({ theme }) => ({
  zIndex: 99,
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  maxWidth: "1600px",
  height: theme.custom.navbar.height,
  padding: "0px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  "@media (min-width: 1600px)": {
    left: "calc((100vw - 1600px) / 2)",
  },
}));

export const RightContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
}));
