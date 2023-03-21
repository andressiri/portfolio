import { styled } from "@mui/material/styles";
import { Container } from "components/Organisms/SectionContainer/styledComponents";
import { ITitleSpecifics } from "typings/sections";

export const InnerContainer = styled(Container)(() => ({
  maxWidth: "1600px",
  justifyContent: "space-evenly",
  gap: "30px",
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
