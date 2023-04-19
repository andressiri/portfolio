import { Theme, ThemeOptions } from "@mui/material/styles"; // eslint-disable-line @typescript-eslint/no-unused-vars

interface custom {
  buttons: {
    height: string;
    disabledColor: string;
    fontSizeMd: string;
  };
  radius: {
    medium: string;
  };
  navbar: {
    height: string;
  };
  navButtons: {
    height: number;
  };
}

declare module "@mui/material/styles" {
  interface Theme {
    custom: custom;
  }

  interface ThemeOptions {
    custom: custom;
  }

  export function createTheme(options?: ThemeOptions): Theme;
}

export type ThemeMode = "dark" | "neon" | "light";

export type ThemePalette = "cyanAndBlue";
