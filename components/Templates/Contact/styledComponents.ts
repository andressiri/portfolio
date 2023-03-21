import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ITitleSpecifics } from "typings/sections";

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
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
