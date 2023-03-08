import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { IStyledButton } from "typings/buttons";

export const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => !["BGType", "shadow"].includes(prop as string),
})<{ BGType: IStyledButton["BGType"]; shadow: boolean }>(
  ({ theme, BGType, shadow }) => ({
    width: "200px",
    height: "56px",
    margin: "0px",
    padding: "8px 0px",
    color:
      BGType === "primaryBG"
        ? theme.palette.primary.contrastText
        : BGType === "secondaryBG"
        ? theme.palette.secondary.contrastText
        : BGType === "primaryContrastBG"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28.32px",
    letterSpacing: "0.46px",
    textTransform: "none",
    background:
      BGType === "primaryBG"
        ? theme.palette.primary.main
        : BGType === "secondaryBG"
        ? theme.palette.secondary.main
        : "transparent",
    borderRadius: "16px",
    border:
      BGType === "primaryBG" || BGType === "secondaryBG"
        ? "unset"
        : BGType === "primaryContrastBG"
        ? `2px solid ${theme.palette.primary.main}`
        : `2px solid ${theme.palette.secondary.main}`,
    boxShadow: shadow
      ? "rgb(0 0 0 / 12%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px"
      : "",
    "& svg": {
      fontSize: "26px !important",
      color: "currentColor",
    },
    "&:hover, &:focus, &:active": {
      color:
        BGType === "primaryBG" || BGType === "primaryContrastBG"
          ? theme.palette.primary.contrastText
          : theme.palette.secondary.contrastText,
      background:
        BGType === "primaryBG"
          ? theme.palette.primary.dark
          : BGType === "secondaryBG"
          ? theme.palette.secondary.dark
          : BGType === "primaryContrastBG"
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
    },
  })
);
