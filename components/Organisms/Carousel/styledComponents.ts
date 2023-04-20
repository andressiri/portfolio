import { styled } from "@mui/material/styles";
import { Box, IconButton, CSSObject } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["sidesSpace", "navButtons"].includes(prop as string),
})<{ sidesSpace: number; navButtons: boolean }>(
  ({ sidesSpace, navButtons }) => ({
    zIndex: 1,
    width: "100%",
    maxWidth: `calc(100vw - ${sidesSpace}px${navButtons ? " + 140px" : ""})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    "& img": {
      pointerEvents: "none",
    },
  })
);

export const ButtonsAndBandContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["cardWidth", "sidesSpace", "boxShadow"].includes(prop as string),
})<{ cardWidth: number; sidesSpace: number; boxShadow: string }>(
  ({ cardWidth, sidesSpace, boxShadow }) => ({
    position: "relative",
    width: `${cardWidth}px`,
    maxWidth: `calc(100vw - ${sidesSpace}px)`,
    borderRadius: "32px",
    boxShadow,
  })
);

export const BackwardsButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    !["colorChosen", "navButtons", "animatedButtons"].includes(prop as string),
})<{
  colorChosen?: string;
  navButtons: boolean;
  animatedButtons?: boolean;
}>(({ theme, colorChosen, navButtons, animatedButtons }) => ({
  "@keyframes animateCarouselBackwardsButton": {
    "0%": { transform: "translateX(0px)" },
    "50%": { transform: "translateX(-3px)" },
    "100%": { transform: "translateX(0px)" },
  },
  position: "absolute",
  top: `calc(50% - ${theme.custom.navButtons.height / 2}px)`,
  left: `-${theme.custom.navButtons.height}px`,
  width: `${theme.custom.navButtons.height}px`,
  height: `${theme.custom.navButtons.height}px`,
  display: `${navButtons ? "flex" : "none"}`,
  alignItems: "center",
  justifyContent: "center",
  color: colorChosen ? colorChosen : theme.palette.primary.contrastText,
  animation: animatedButtons
    ? "animateCarouselBackwardsButton 3000ms infinite ease-in-out"
    : "none",
  "& svg": {
    fontSize: `${theme.custom.navButtons.height}px !important`,
  },
  "&:disabled": {
    color: colorChosen ? colorChosen : theme.palette.primary.contrastText,
  },
}));

export const ForwardButton = styled(BackwardsButton, {
  shouldForwardProp: (prop) => !["animatedButtons"].includes(prop as string),
})<{ animatedButtons?: boolean }>(({ theme, animatedButtons }) => ({
  "@keyframes animateCarouselForwardButton": {
    "0%": { transform: "translateX(0px)" },
    "50%": { transform: "translateX(3px)" },
    "100%": { transform: "translateX(0px)" },
  },
  left: "unset",
  right: `-${theme.custom.navButtons.height}px`,
  animation: animatedButtons
    ? "animateCarouselForwardButton 3000ms infinite ease-in-out"
    : "none",
}));

export const BandContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["cardWidth", "cardHeight", "background"].includes(prop as string),
})<{
  cardWidth: number;
  cardHeight: number;
  background?: string;
}>(({ theme, cardWidth, cardHeight, background }) => ({
  position: "relative",
  width: `${cardWidth}px`,
  maxWidth: "100%",
  height: `${cardHeight}px`,
  display: "flex",
  background: background ? background : theme.palette.primary.contrastText,
  borderRadius: "32px",
  overflow: "hidden",
}));

export const ConveyorBand = styled(Box, {
  shouldForwardProp: (prop) =>
    !["translateBand", "dragTranslate", "bandTransition"].includes(
      prop as string
    ),
})<{
  translateBand: number;
  dragTranslate: number;
  bandTransition: string;
}>(({ translateBand, dragTranslate, bandTransition }) => ({
  position: "absolute",
  top: "0px",
  left: "0px",
  display: "flex",
  transform: `translateX(-${translateBand + dragTranslate}px)`,
  transition: bandTransition,
}));

export const ChildContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["cardWidth", "cardHeight", "sidesSpace"].includes(prop as string),
})<{ cardWidth: number; cardHeight: number; sidesSpace: number }>(
  ({ cardWidth, cardHeight, sidesSpace }) => ({
    width: `${cardWidth}px`,
    maxWidth: `calc(100vw - ${sidesSpace}px)`,
    height: `${cardHeight}px`,
    maxHeight: `${cardHeight}px`,
    overflow: "hidden",
  })
);

export const CustomBulletsContainer = styled(Box, {
  shouldForwardProp: (prop) => !["customStyles"].includes(prop as string),
})<{ customStyles: CSSObject }>(({ customStyles }) => ({
  ...customStyles,
}));

export const CustomBulletContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["customStyles", "transitionTime", "selected", "bullets"].includes(
      prop as string
    ),
})<{
  customStyles: CSSObject;
  transitionTime: number;
  selected: boolean;
  bullets: boolean;
}>(({ customStyles, transitionTime, selected, bullets }) => ({
  ...customStyles,
  display: `${bullets ? "block" : "none"}`,
  opacity: `${selected ? 1 : 0.3}`,
  transition: `${transitionTime}ms opacity`,
}));

export const BulletsContainer = styled(Box)(() => ({
  width: "100%",
  height: "38px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  gap: "12px",
}));

export const Bullet = styled(Box, {
  shouldForwardProp: (prop) =>
    !["transitionTime", "selected", "bullets", "color"].includes(
      prop as string
    ),
})<{
  transitionTime: number;
  selected: boolean;
  bullets: boolean;
  color?: string;
}>(({ theme, transitionTime, selected, bullets, color }) => ({
  width: "12px",
  height: "12px",
  display: `${bullets ? "block" : "none"}`,
  background: color ? color : theme.palette.secondary.contrastText,
  borderRadius: "50%",
  opacity: `${selected ? 1 : 0.5}`,
  transition: `${transitionTime}ms opacity`,
  cursor: "pointer",
}));
