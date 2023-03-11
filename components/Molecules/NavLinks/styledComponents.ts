import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ContainerList = styled("ul")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
}));

export const NavItemButton = styled(Button)(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main,
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.46px",
  "& svg": {
    fontSize: "30px !important",
  },
  "&::before": {
    content: "''",
    zIndex: -2,
    position: "absolute",
    top: "5%",
    left: "50%",
    width: "0%",
    height: "100%",
    background: "transparent",
    borderRadius: "16px",
    transition: "0.25s all ease-in",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: "75%",
    left: "calc(5% + 35px)",
    width: "0%",
    height: "2px",
    borderRadius: "6px",
    background: "currentcolor",
  },
  "&:hover, &:focus": {
    background: "transparent",
    "& svg": {
      transition: "0.4s all",
      transform: "rotate(-360deg)",
    },
    "&::after": {
      transition: "0.4s all ease-in-out",
      width: "calc(90% - 35px)",
    },
  },
  "&:active, &:focus": {
    "&::before": {
      inset: "-5%",
      width: "110%",
      background: theme.palette.primary.light.replace("1)", "0.3)"),
    },
  },
}));
