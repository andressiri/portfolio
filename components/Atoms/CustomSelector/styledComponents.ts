import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";

export const CustomSelectContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["width", "upwardsUnfold"].includes(prop as string),
})<{ width?: string; upwardsUnfold?: boolean }>(
  ({ theme, width, upwardsUnfold }) => ({
    width: width ? width : "fit-content",
    minWidth: "50px",
    display: "flex",
    flexDirection: upwardsUnfold ? "column-reverse" : "column",
    border: `2px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: "5px",
    cursor: "pointer",
    userSelect: "none",
    overflow: "hidden",
    "&:hover, &:focus, &:active": {
      boxShadow: `0px 0px 3px 0px ${theme.palette.secondary.contrastText}`,
    },
  })
);

export const SelectedContainer = styled(Box)(() => ({
  height: "24px",
  maxHeight: "24px",
  display: "flex",
  "&:focus": {
    opacity: "0.2",
  },
}));

export const SelectedImage = styled(Image)(() => ({
  width: "32px",
  height: "24px",
  objectFit: "contain",
  overflow: "hidden",
}));

export const SelectedIcon = styled(Box)(({ theme }) => ({
  minWidth: "32px",
  width: "32px",
  maxWidth: "32px",
  height: "24px",
  padding: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  background: theme.palette.secondary.contrastText,
  borderRadius: "0px",
  objectFit: "contain",
  "& svg": {
    fontSize: "22px !important",
  },
}));

export const SelectedOptionParagraph = styled("p", {
  shouldForwardProp: (prop) => !["options"].includes(prop as string),
})<{ options?: string[] }>(({ theme, options }) => ({
  width: "calc(100% - 40px)",
  margin: options ? "0px 1px 0px 3px" : "0px 1px 0px 1px",
  padding: "1px 0px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.secondary.contrastText,
  fontSize: "16px",
  fontWeight: 600,
}));

export const CustomOptionContainer = styled("li", {
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
      ? "4px 0px 4px 0px"
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
  width: "24px",
  height: "18px",
}));

export const OptionIcon = styled(SelectedIcon)(() => ({
  width: "24px",
  height: "18px",
  color: "inherit",
  background: "inherit",
  transition: "0ms all",
  "& svg": {
    fontSize: "18px !important",
  },
  "&:hover": {
    color: "inherit",
    background: "inherit",
  },
}));

export const OptionText = styled("p")(() => ({
  width: "32px",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
}));
