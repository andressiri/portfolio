import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  "@media (max-width: 1080px)": {
    maxWidth: "calc(100vw - 40px)",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));
