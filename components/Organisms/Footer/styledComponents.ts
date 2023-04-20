import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled("nav")(({ theme }) => ({
  zIndex: 99,
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "100%",
  maxWidth: "1600px",
  height: theme.custom.footer.height,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
  borderTop: `2px solid ${theme.palette.secondary.contrastText}`,
  overflow: "visible",
  "@media (min-width: 1600px)": {
    left: "calc((100vw - 1600px) / 2)",
  },
  "@media (max-width: 930px)": {
    paddingTop: "10px",
    height: theme.custom.footer.transitionHeight,
  },
  "@media (max-width: 600px)": {
    height: theme.custom.footer.mobileHeight,
  },
}));

export const LogoContainer = styled(Box)(() => ({
  width: "300px",
  height: "100%",
  paddingTop: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 930px)": {
    height: "70px",
    width: "50%",
  },
  "@media (max-width: 600px)": {
    height: "70px",
    width: "100%",
  },
}));

export const OptionsContainer = styled(LogoContainer)(() => ({
  paddingTop: "0px",
  "@media (max-width: 930px)": {
    order: "3",
    width: "100%",
  },
}));

export const SocialMediaContainer = styled(LogoContainer)(() => ({
  paddingTop: "0px",
  "@media (max-width: 930px)": {
    order: "2",
  },
}));
