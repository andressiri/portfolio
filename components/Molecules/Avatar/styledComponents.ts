import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";

const width = 340;
const borderWidth = 8;

export const OuterCircleContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: `${width}px`,
  height: `${width}px`,
  background: "transparent",
  border: `${borderWidth}px solid ${theme.palette.primary.dark}`,
  borderRadius: "50%",
  overflow: "visible",
  transform: "scale(1)",
  transition: "800ms transform",
  "& img": {
    transition: "800ms transform",
    transform: "scale(1) translateY(0px)",
  },
  "&:hover": {
    transform: "scale(1.01)",
    "& img": {
      transform: `scale(1.2) translateY(-${borderWidth * 5}px)`,
    },
  },
}));

export const InnerCircleContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: `${width}px`,
  height: `${width * 1.1}px`,
  display: "flex",
  alignItems: "flex-end",
  overflow: "hidden",
}));

export const ImageContainer = styled(Box)(() => ({
  zIndex: 11,
  position: "absolute",
  bottom: `${borderWidth - 1}px`,
  left: `${borderWidth}px`,
  width: `${width - borderWidth * 4}px`,
  height: `${width * 1.1}px`,
  borderRadius: "0px 0px 1500px 1500px",
  overflow: "hidden",
}));

export const StyledImage = styled(Image)(() => ({
  zIndex: 10,
  position: "absolute",
  bottom: `-${width / 5}px`,
  left: "0%",
  width: "110%",
  height: `${width * 1.1}px`,
  objectFit: "contain",
}));

export const InnerCircle = styled(Box)(() => ({
  position: "relative",
  bottom: `${borderWidth}px`,
  left: `${borderWidth}px`,
  width: `${width - borderWidth * 4}px`,
  height: `${width - borderWidth * 4}px`,
  borderRadius: "50%",
  overflow: "hidden",
}));

export const InnerCircleBackgroundColor = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "absolute",
  inset: "0px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.dark.replace("1)", "0.8)"),
}));
