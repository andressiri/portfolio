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
  border: `${borderWidth}px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  overflow: "visible",
  transition: "1s all",
  "& img": {
    transition: "0.8s all",
  },
  "&:hover": {
    transform: "scale(1.01)",
    "& img": {
      transform: `scale(1.06) translateY(-${borderWidth * 3}px)`,
    },
  },
}));

export const InnerCircleContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: `${width}px`,
  height: `${width * 1.5}px`,
  display: "flex",
  alignItems: "flex-end",
  overflow: "hidden",
}));

export const ImageContainer = styled(Box)(() => ({
  zIndex: 11,
  position: "absolute",
  bottom: `${borderWidth}px`,
  left: `${borderWidth}px`,
  width: `${width - borderWidth * 4}px`,
  height: `${width * 1.5}px`,
  border: `${borderWidth}px solid transparent`,
  borderRadius: "0px 0px 1500px 1500px",
  overflow: "hidden",
}));

export const StyledImage = styled(Image)(() => ({
  zIndex: 10,
  position: "absolute",
  bottom: `-${width / 6}px`,
  left: "-25%",
  width: "150%",
  height: `${width * 1.5}px`,
  objectFit: "contain",
}));

export const InnerCircle = styled(Box)(({ theme }) => ({
  position: "relative",
  bottom: `${borderWidth}px`,
  left: `${borderWidth}px`,
  width: `${width - borderWidth * 4}px`,
  height: `${width - borderWidth * 4}px`,
  background: theme.palette.primary.main,
  borderRadius: "50%",
  border: `${borderWidth}px solid ${theme.palette.primary.main}`,
  overflow: "hidden",
}));

export const InnerCircleBackgroundColor = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "absolute",
  inset: "0px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main.replace("1)", "0.8)"),
}));
