import { styled } from "@mui/material/styles";

export const ArrowPath = styled("path")(() => ({
  "@keyframes downloadingIconAnimation": {
    "0%": {
      opacity: "1",
      transform: "scale(0.75) translate(-25px, 8px)",
    },
    "100%": {
      opacity: "0.7",
      transform: "scale(0.75) translate(50px, 8px)",
    },
  },
  fill: "rgba(25, 25, 25, 1)",
  opacity: "1",
  transform: "scale(0.75) translate(-22px, 8px)",
  animation: "downloadingIconAnimation 1.8s linear infinite",
}));
