import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ITitleSpecifics } from "typings/sections";

export const InnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: `calc(${theme.custom.footer.height} - ${theme.custom.navButtons.height}px)`,
  "@media (max-width: 930px)": {
    paddingBottom: `calc(${theme.custom.footer.transitionHeight} - ${theme.custom.navButtons.height}px)`,
  },
  "@media (max-width: 600px)": {
    paddingBottom: `calc(${theme.custom.footer.mobileHeight} - ${theme.custom.navButtons.height}px)`,
  },
}));

export const titleSpecifics: ITitleSpecifics = {
  enTop: "-4.6875vw",
  esTop: "-3.75vw",
  enLeft: "-3.125vw",
  esLeft: "-3.125vw",
  enFontSize: "26vw",
  esFontSize: "22.5vw",
  enLetterSpacing: "0.9375vw",
  esLetterSpacing: "0.9375vw",
};
