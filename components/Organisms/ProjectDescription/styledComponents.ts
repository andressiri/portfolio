import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  maxWidth: "50%",
  display: "flex",
}));

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "572px",
  margin: "auto auto auto 50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  width: "100%",
  display: "flex",
  gap: "15px",
  alignItems: "center",
  justifyContent: "flex-start",
  "& svg": {
    width: "60px",
    height: "60px",
  },
}));

export const Title = styled(Typography)(() => ({
  textAlign: "left",
  fontSize: "52px",
  fontWeight: 800,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  paddingLeft: "5px",
  color: theme.palette.secondary.contrastText,
  textAlign: "left",
  fontSize: "25px",
  lineHeight: "25px",
  fontWeight: 600,
}));

export const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: theme.palette.secondary.contrastText,
  textAlign: "left",
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: 500,
}));

export const StyledLink = styled("a")(() => ({
  margin: "25px auto 0px 0px",
}));
