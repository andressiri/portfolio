import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export const CustomSelectContainer = styled(Box, {
  shouldForwardProp: (prop) => !["width"].includes(prop as string),
})<{ width?: string }>(({ theme, width }) => ({
  width: width ? width : "fit-content",
  minWidth: "50px",
  border: `3px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: "5px",
  cursor: "pointer",
  userSelect: "none",
  overflow: "hidden",
  "&:hover, &:focus, &:active": {
    boxShadow: `0px 0px 3px 0.5px ${theme.palette.secondary.contrastText}`,
  },
}));

export const SelectedContainer = styled(Box)(() => ({
  height: "30px",
  maxHeight: "30px",
  display: "flex",
  "&:focus": {
    opacity: "0.2",
  },
}));

export const SelectedImage = styled(Image)(() => ({
  width: "40px",
  height: "30px",
  objectFit: "contain",
}));

export const SelectedIcon = styled(Button)(({ theme }) => ({
  minWidth: "40px",
  width: "40px",
  maxWidth: "40px",
  height: "30px",
  padding: "0px",
  objectFit: "contain",
  color: theme.palette.primary.contrastText,
  background: theme.palette.secondary.contrastText,
  borderRadius: "0px",
  "& span": {
    margin: "0px",
  },
  "& svg": {
    fontSize: "28px !important",
  },
  "&:hover": {
    background: theme.palette.secondary.contrastText,
  },
}));

export const SelectedOptionParagraph = styled("p", {
  shouldForwardProp: (prop) => !["options"].includes(prop as string),
})<{ options?: string[] }>(({ theme, options }) => ({
  width: "calc(100% - 40px)",
  margin: options ? "0px 2px 0px 6px" : "0px 2px 0px 2px",
  padding: "2px 0px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.secondary.contrastText,
  fontSize: "16px",
  fontWeight: 600,
}));

export const CustomOptionContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["options", "icons", "images", "isSelected"].includes(prop as string),
})<{
  options?: string[];
  icons?: JSX.Element[];
  images?: string[];
  isSelected: boolean;
}>(({ theme, options, icons, images, isSelected }) => ({
  width: "100%",
  height: "28px",
  padding:
    (options && icons) || (options && images)
      ? "4px 0px 4px 12px"
      : "1px 0px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: !isSelected
    ? theme.palette.secondary.contrastText
    : theme.palette.secondary.contrastText,
  background: !isSelected
    ? theme.palette.primary.contrastText
    : theme.palette.secondary.main,
  borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
  "&:hover": {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
  },
}));

export const OptionImage = styled(SelectedImage)(() => ({
  width: "28px",
  height: "21px",
}));

export const OptionIcon = styled(SelectedIcon)(() => ({
  width: "28px",
  height: "21px",
  color: "inherit",
  background: "inherit",
  transition: "0s all",
  "& svg": {
    fontSize: "20px !important",
  },
  "&:hover": {
    color: "inherit",
    background: "inherit",
  },
}));

export const OptionText = styled("p")(() => ({
  width: "40px",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
}));
