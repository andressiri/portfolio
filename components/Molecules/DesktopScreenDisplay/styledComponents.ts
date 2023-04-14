import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["mobileSrc"].includes(prop as string),
})<{ mobileSrc?: StaticImageData | string }>(({ mobileSrc }) => ({
  position: "relative",
  width: mobileSrc ? "520px" : "500px",
  maxWidth: "100%",
  height: "350px",
  maxHeight: "100%",
}));

export const FrameImage = styled(Image, {
  shouldForwardProp: (prop) => !["mobileSrc"].includes(prop as string),
})<{ mobileSrc?: StaticImageData | string }>(({ mobileSrc }) => ({
  zIndex: 3,
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "500px",
  maxWidth: mobileSrc ? "96%" : "100%",
  height: "auto",
  maxHeight: "100%",
  objectFit: "contain",
}));

export const InnerImage = styled(Image, {
  shouldForwardProp: (prop) => !["mobileSrc"].includes(prop as string),
})<{ mobileSrc?: StaticImageData | string }>(({ mobileSrc }) => ({
  position: "absolute",
  top: mobileSrc ? "5%" : "5.2%",
  left: "3%",
  width: "468px",
  maxWidth: mobileSrc ? "91%" : "95%",
  height: "auto",
  maxHeight: mobileSrc ? "77%" : "75%",
  objectFit: "contain",
}));
