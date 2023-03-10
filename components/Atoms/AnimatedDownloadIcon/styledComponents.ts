import { styled } from "@mui/material/styles";

export const ArrowPath = styled("path", {
  shouldForwardProp: (prop) =>
    !["downloading", "changeArrow"].includes(prop as string),
})<{ downloading: boolean; changeArrow: boolean }>(
  ({ theme, downloading, changeArrow }) => ({
    "@keyframes downloadingIconAnimation": {
      "0%": { transform: "scale(0.75) translate(4px, 8px)" },
      "100%": { transform: "scale(0.75) translate(4px, 30px)" },
    },
    fill: changeArrow
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
    transform: "scale(0.75) translate(4px, 8px)",
    animation: downloading
      ? "downloadingIconAnimation 0.9s linear infinite"
      : "",
  })
);
