import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "285px",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "550px",
}));

export const FrameImage = styled(Image)(() => ({
  zIndex: 3,
  position: "absolute",
  inset: "0px",
  width: "auto",
  maxWidth: "100%",
  height: "550px",
  maxHeight: "100%",
  objectFit: "contain",
}));

export const InnerImage = styled(Image)(() => ({
  position: "absolute",
  top: "3.8%",
  left: "8%",
  width: "auto",
  maxWidth: "84%",
  height: "510px",
  maxHeight: "93%",
  objectFit: "contain",
}));
