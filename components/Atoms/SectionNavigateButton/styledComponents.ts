import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const GoToSectionButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["direction"].includes(prop as string),
})<{ direction?: "previous" | "next" }>(({ theme, direction }) => {
  const isPrevious = direction === "previous";

  return {
    "@keyframes animatePreviousSectionButton": {
      "0%": { transform: "rotate(180deg) translateY(0px)" },
      "50%": { transform: "rotate(180deg) translateY(-4px)" },
      "100%": { transform: "rotate(180deg) translateY(0px)" },
    },
    "@keyframes animateNextSectionButton": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(4px)" },
      "100%": { transform: "translateY(0px)" },
    },
    zIndex: 3,
    position: "absolute",
    top: isPrevious ? "30px" : "unset",
    bottom: isPrevious ? "unset" : "30px",
    left: "calc(50% - 20px)",
    width: "40px",
    height: "40px",
    color: theme.palette.secondary.contrastText,
    background: "transparent",
    transform: isPrevious
      ? "rotate(180deg) translateY(0px)"
      : "translateY(0px)",
    animation: `${
      isPrevious ? "animatePreviousSectionButton" : "animateNextSectionButton"
    } 3000ms infinite linear`,
    "& svg": {
      fontSize: "70px !important",
    },
  };
});
