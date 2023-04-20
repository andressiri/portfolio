import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  minWidth: "580px",
  width: "50%",
  display: "flex",
  "@media (max-width: 1149px)": {
    width: "100%",
  },
  "@media (max-width: 620px)": {
    minWidth: "unset",
    maxWidth: "100%",
  },
}));

export const InnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "572px",
  margin: "auto auto auto 50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 1149px)": {
    margin: "auto",
  },
  "@media (max-width: 620px)": {
    maxWidth: "calc(100% - 40px)",
  },
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
  "@media (max-width: 1149px)": {
    justifyContent: "center",
  },
  "@media (max-width: 620px)": {
    "& svg": {
      width: "calc(60px + (100vw - 620px) * 0.09)",
      height: "calc(60px + (100vw - 620px) * 0.09)",
    },
  },
}));

export const Title = styled(Typography)(() => ({
  textAlign: "left",
  fontSize: "52px",
  fontWeight: 800,
  "@media (max-width: 1149px)": {
    textAlign: "center",
  },
  "@media (max-width: 620px)": {
    fontSize: "calc(52px + (100vw - 620px) * 0.08)",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  paddingLeft: "5px",
  color: theme.palette.secondary.contrastText,
  textAlign: "left",
  fontSize: "25px",
  lineHeight: "25px",
  fontWeight: 600,
  "@media (max-width: 1149px)": {
    textAlign: "center",
  },
  "@media (max-width: 620px)": {
    fontSize: "calc(25px + (100vw - 620px) * 0.015)",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: theme.palette.secondary.contrastText,
  textAlign: "left",
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: 500,
  "@media (max-width: 1149px)": {
    textAlign: "center",
  },
  "@media (max-width: 620px)": {
    fontSize: "calc(18px + (100vw - 620px) * 0.008)",
  },
}));

export const StyledLink = styled("a")(() => ({
  margin: "25px auto 0px 0px",
  "@media (max-width: 1149px)": {
    textAlign: "center",
    margin: "25px auto 0px auto",
  },
}));
