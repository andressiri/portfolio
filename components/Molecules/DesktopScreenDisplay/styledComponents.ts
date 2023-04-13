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
  height: "350px",
  maxHeight: "100%",
  objectFit: "contain",
}));

export const InnerImage = styled(Image)(() => ({
  position: "absolute",
  top: "5.3%",
  left: "3.28%",
  width: "468px",
  maxWidth: "94%",
  height: "264px",
  maxHeight: "75%",
  objectFit: "contain",
}));
