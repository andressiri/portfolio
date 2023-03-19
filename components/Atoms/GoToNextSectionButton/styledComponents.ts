import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const NextSectionButton = styled(IconButton)(({ theme }) => ({
  "@keyframes moveNextSectionButton": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(4px)" },
    "100%": { transform: "translateY(0px)" },
  },
  position: "absolute",
  bottom: "30px",
  left: "calc(50% - 20px)",
  width: "40px",
  height: "40px",
  color: theme.palette.secondary.contrastText,
  background: "transparent",
  animation: "moveNextSectionButton 3000ms infinite linear",
  "& svg": {
    fontSize: "70px !important",
  },
}));
