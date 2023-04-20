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
  "@media (max-width: 1149px)": {
    width: "100%",
    maxWidth: "100%",
    maxHeight: "300px",
    margin: "0px auto 20px auto",
  },
  "@media (max-width: 540px)": {
    maxHeight: `calc(100vw * 0.5)`,
  },
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
  "@media (max-width: 1300px)": {
    margin: "auto 10px auto auto",
  },
  "@media (max-width: 1149px)": {
    margin: "auto",
    maxHeight: "300px",
  },
  "@media (max-width: 540px)": {
    maxHeight: `calc(100vw * 0.5)`,
  },
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
  maxHeight: "80%",
  margin: "auto 100px auto auto",
  "@media (max-width: 1300px)": {
    margin: "auto 40px auto auto",
  },
  "@media (max-width: 1149px)": {
    width: "150px",
    height: "100%",
    maxHeight: "300px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width: 540px)": {
    maxWidth: `calc(100vw * 0.25)`,
    maxHeight: `calc(100vw * 0.5)`,
  },
}));
