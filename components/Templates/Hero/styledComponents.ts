import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1080px)": {
    flexDirection: "column-reverse",
  },
}));
