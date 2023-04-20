import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  height: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1080px)": {
    width: "100%",
    marginTop: "20px",
  },
}));

export const InnerContainer = styled(Box)(() => ({
  width: "fit-content",
  height: "fit-content",
  margin: "auto 250px auto auto",
  padding: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  "@media (max-width: 1520px)": {
    margin: "auto auto auto 70px",
  },
  "@media (max-width: 1150px)": {
    margin: "auto auto auto 40px",
  },
  "@media (max-width: 1080px)": {
    margin: "auto",
  },
  "@media (max-width: 440px)": {
    gap: "20px",
  },
  "@media (max-width: 380px)": {
    gap: "10px",
  },
  "@media (max-width: 340px)": {
    gap: "0px",
  },
}));

export const AvatarContainer = styled(Box)(() => ({
  margin: "7px 0px",
  "@media (max-width: 440px)": {
    transform: "scale(0.9)",
  },
  "@media (max-width: 380px)": {
    transform: "scale(0.8)",
  },
  "@media (max-width: 340px)": {
    transform: "scale(0.7)",
  },
}));
