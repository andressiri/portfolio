import { useContext, useState } from "react";
import { GeneralContext } from "contexts";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import paletteColors from "./paletteColors";

const useCustomTheme = () => {
  const { themeMode, themePalette } = useContext(GeneralContext);
  const paletteColor =
    paletteColors[themePalette as keyof typeof paletteColors];

  const theme: ThemeOptions = createTheme({
    palette: {
      primary:
        themeMode === "dark" || themeMode === "neon"
          ? paletteColor.primary
          : paletteColor.secondary,
      secondary:
        themeMode === "dark" || themeMode === "neon"
          ? paletteColor.secondary
          : paletteColor.primary,
    },
    typography: {
      fontFamily: "'Nunito Sans', sans-serif",
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

export default useCustomTheme;
