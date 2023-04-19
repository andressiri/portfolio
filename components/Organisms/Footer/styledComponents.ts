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
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
  borderTop: `2px solid ${theme.palette.secondary.contrastText}`,
  overflow: "visible",
  "@media (min-width: 1600px)": {
    left: "calc((100vw - 1600px) / 2)",
  },
}));

export const LogoContainer = styled(Box)(() => ({
  width: "300px",
  height: "100%",
  marginTop: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SocialMediaContainer = styled(LogoContainer)(() => ({
  marginTop: "0px",
}));
