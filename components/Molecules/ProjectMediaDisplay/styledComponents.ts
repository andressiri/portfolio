import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  maxWidth: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DesktopContainer = styled(Box, {
  shouldForwardProp: (prop) => !["mobileSrc"].includes(prop as string),
})<{ mobileSrc?: StaticImageData | string }>(({ mobileSrc }) => ({
  position: "relative",
  width: mobileSrc ? "520px" : "500px",
  maxWidth: "100%",
  height: "350px",
  maxHeight: `calc((100vw - ${mobileSrc ? "520px" : "500px"}) * 0.7)`,
}));

export const SmallMobileContainer = styled(Box)(() => ({
  zIndex: 5,
  position: "absolute",
  top: "27%",
  left: "76%",
  width: "25%",
  maxWidth: "25%",
  height: "70%",
  maxHeight: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
