import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  maxWidth: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));

export const DesktopContainer = styled(Box, {
  shouldForwardProp: (prop) => !["mobileSrc"].includes(prop as string),
})<{ mobileSrc?: StaticImageData | string }>(({ mobileSrc }) => ({
  position: "relative",
  width: mobileSrc ? "520px" : "500px",
  maxWidth: "calc(100% - 50px)",
  height: "350px",
  maxHeight: `calc((100vw - ${mobileSrc ? "520px" : "500px"}) * 0.5)`,
  margin: "auto 50px auto auto",
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

export const MobileContainer = styled(Box)(() => ({
  height: "80%",
  margin: "auto 100px auto auto",
}));
