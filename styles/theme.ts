import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "rgba(94, 231, 227, 1)",
      light: "rgba(179, 255, 255, 1)",
      dark: "rgba(66, 162, 162, 1)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "rgba(94, 128, 231, 1)",
      light: "rgba(179, 217, 255, 1)",
      dark: "rgba(66, 114, 162, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
  },
  custom: {
    navbar: {
      height: "70px",
    },
  },
});
