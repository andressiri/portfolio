import { styled } from "@mui/material/styles";

export const ArrowPath = styled("path", {
  shouldForwardProp: (prop) => !["downloading"].includes(prop as string),
})<{ downloading: boolean }>(({ theme, downloading }) => ({
  "@keyframes downloadingIconAnimation": {
    "0%": {
      opacity: "1",
      transform: "scale(0.24) translate(25px, 32px)",
    },
    "100%": {
      opacity: "0.7",
      transform: "scale(0.24) translate(25px, 100px)",
    },
  },
  fill: theme.palette.primary.contrastText,
  opacity: "1",
  transform: "scale(0.24) translate(25px, 32px)",
  animation: downloading ? "downloadingIconAnimation 0.9s linear infinite" : "",
}));
