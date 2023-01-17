import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const NavbarContainer = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  padding: "0px 30px",
  height: theme.custom.navbar.height,
  display: "flex",
  alignItems: "center",
  background: theme.palette.primary.main,
}));

export const ASLogo = styled(Image)(() => ({
  width: "35px",
  height: "35px",
  marginRight: "10px",
}));

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "26px",
}));
