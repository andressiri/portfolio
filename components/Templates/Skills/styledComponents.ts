import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ITitleSpecifics } from "typings/sections";

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: "30px",
}));

export const titleSpecifics: ITitleSpecifics = {
  enTop: "-6.25vw",
  esTop: "-3.125vw",
  enLeft: "-4.375vw",
  esLeft: "-2.5vw",
  enFontSize: "37.5vw",
  esFontSize: "19.375vw",
  enLetterSpacing: "1.25vw",
  esLetterSpacing: "-0.75vw",
};
