import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const GoToSectionButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["direction"].includes(prop as string),
})<{ direction?: "previous" | "next" }>(({ theme, direction }) => {
  const isPrevious = direction === "previous";

  return {
    "@keyframes animatePreviousSectionButton": {
      "0%": { transform: "rotate(180deg) translateY(0px)" },
      "50%": { transform: "rotate(180deg) translateY(4px)" },
      "100%": { transform: "rotate(180deg) translateY(0px)" },
    },
    "@keyframes animateNextSectionButton": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(4px)" },
      "100%": { transform: "translateY(0px)" },
    },
    zIndex: 3,
    position: "absolute",
    top: isPrevious ? "0px" : "unset",
    bottom: isPrevious ? "unset" : "0px",
    left: "calc(50% - 35px)",
    width: "70px",
    height: "70px",
    color: theme.palette.secondary.contrastText,
    background: "transparent",
    transform: isPrevious
      ? "rotate(180deg) translateY(0px)"
      : "translateY(0px)",
    animation: `${
      isPrevious ? "animatePreviousSectionButton" : "animateNextSectionButton"
    } 3000ms infinite ease-in-out`,
    "& svg": {
      fontSize: "70px !important",
    },
  };
});
