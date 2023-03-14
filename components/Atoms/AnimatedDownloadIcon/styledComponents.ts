import { styled } from "@mui/material/styles";

export const ArrowPath = styled("path", {
  shouldForwardProp: (prop) => !["downloading"].includes(prop as string),
})<{ downloading: boolean }>(({ theme, downloading }) => ({
  "@keyframes downloadingIconAnimation": {
    "0%": {
      opacity: "1",
      transform: "scale(0.75) translate(4px, 8px)",
    },
    "100%": {
      opacity: "0.7",
      transform: "scale(0.75) translate(4px, 30px)",
    },
  },
  fill: theme.palette.primary.contrastText,
  opacity: "1",
  transform: "scale(0.75) translate(4px, 8px)",
  animation: downloading ? "downloadingIconAnimation 0.9s linear infinite" : "",
}));
