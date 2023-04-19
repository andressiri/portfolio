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
        height: "56px",
        disabledBackground: "rgba(130, 130, 130, 1)",
        disabledColor: "rgba(0, 0, 0, 0.26)",
        fontSizeMd: "18px",
      },
      radius: {
        medium: "16px",
      },
      navbar: {
        height: "120px",
      },
      navButtons: {
        height: 70,
      },
      footer: {
        height: "100px",
      },
    },
  });

  return theme;
};

export default getCustomTheme;
