import { createTheme, ThemeOptions } from "@mui/material/styles";
import { ThemeMode, ThemePalette } from "typings/theme";
import paletteColors from "./paletteColors";

interface Props {
  themeMode: ThemeMode;
  themePalette: ThemePalette;
}

const getCustomTheme = ({ themeMode, themePalette }: Props) => {
  const paletteColor =
    paletteColors[themePalette as keyof typeof paletteColors];

  const theme: ThemeOptions = createTheme({
    palette: {
      primary:
        themeMode === "light" ? paletteColor.secondary : paletteColor.primary,
      secondary:
        themeMode === "light" ? paletteColor.primary : paletteColor.secondary,
    },
    typography: {
      fontFamily: "'Nunito Sans', sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            transition: "0ms all",
            "&:hover": {
              transition: "250ms all",
            },
          },
        },
      },
    },
    custom: {
      buttons: {
        fontSizeMd: "18px",
      },
      radius: {
        medium: "16px",
      },
      navbar: {
        height: "120px",
      },
    },
  });

  return theme;
};

export default getCustomTheme;
