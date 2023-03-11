import { createContext, FC, useState } from "react";
import getWindowDimensions from "utils/helpers/getWindowDimensions";
import { ThemeMode, ThemePalette } from "typings/theme";

interface IContext {
  viewportWidth: number;
  viewportHeight: number;
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  themePalette: ThemePalette;
  setThemePalette: React.Dispatch<React.SetStateAction<ThemePalette>>;
}

export const GeneralContext = createContext<IContext>({
  viewportWidth:
    typeof window !== "undefined" ? getWindowDimensions().width : 0,
  viewportHeight:
    typeof window !== "undefined" ? getWindowDimensions().height : 0,
  themeMode: "light",
  setThemeMode: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  themePalette: "cyanAndBlue",
  setThemePalette: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider: FC<Props> = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().width : 0
  );
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().height : 0
  );
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [themePalette, setThemePalette] = useState<ThemePalette>("cyanAndBlue");

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      const windowDimensions = getWindowDimensions();
      setViewportWidth(windowDimensions.width);
      setViewportHeight(windowDimensions.height);
    });
  }

  return (
    <GeneralContext.Provider
      value={{
        viewportWidth,
        viewportHeight,
        themeMode,
        setThemeMode,
        themePalette,
        setThemePalette,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
