import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ITitleSpecifics } from "typings/sections";

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const titleSpecifics: ITitleSpecifics = {
  enTop: "-3.75vw",
  esTop: "-4.375vw",
  enLeft: "-3.125vw",
  esLeft: "-3.125vw",
  enFontSize: "25vw",
  esFontSize: "21.875vw",
  enLetterSpacing: "0.9375vw",
  esLetterSpacing: "0vw",
};
