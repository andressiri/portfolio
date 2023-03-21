import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "next-i18next";
import { getWindowDimensions } from "utils/helpers";
import { ThemeMode, ThemePalette } from "typings/theme";

interface IContext {
  viewportWidth: number;
  viewportHeight: number;
  languageSelected: number;
  setLanguageSelected: React.Dispatch<React.SetStateAction<number>>;
  themeModeSelected: number;
  setThemeModeSelected: React.Dispatch<React.SetStateAction<number>>;
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  themePalette: ThemePalette;
  setThemePalette: React.Dispatch<React.SetStateAction<ThemePalette>>;
  heroRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const GeneralContext = createContext<IContext>({
  viewportWidth:
    typeof window !== "undefined" ? getWindowDimensions().width : 0,
  viewportHeight:
    typeof window !== "undefined" ? getWindowDimensions().height : 0,
  languageSelected: 0,
  setLanguageSelected: (lang) => lang,
  themeModeSelected: 0,
  setThemeModeSelected: (mode) => mode,
  themeMode: "dark",
  setThemeMode: (mode) => mode,
  themePalette: "cyanAndBlue",
  setThemePalette: (palette) => palette,
  heroRef: React.createRef<HTMLDivElement>(),
  skillsRef: React.createRef<HTMLDivElement>(),
  projectsRef: React.createRef<HTMLDivElement>(),
  contactRef: React.createRef<HTMLDivElement>(),
});

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();

  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().width : 0
  );
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().height : 0
  );
  const [languageSelected, setLanguageSelected] = useState<number>(
    i18n.language && i18n.language.includes("es") ? 1 : 0
  );
  const [themeModeSelected, setThemeModeSelected] = useState<number>(0);
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [themePalette, setThemePalette] = useState<ThemePalette>("cyanAndBlue");
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const addResizeEvent = useCallback(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        const windowDimensions = getWindowDimensions();
        setViewportWidth(windowDimensions.width);
        setViewportHeight(windowDimensions.height);
      });
    }
  }, []);

  useEffect(() => {
    addResizeEvent();
  }, [addResizeEvent]);

  return (
    <GeneralContext.Provider
      value={{
        viewportWidth,
        viewportHeight,
        languageSelected,
        setLanguageSelected,
        themeModeSelected,
        setThemeModeSelected,
        themeMode,
        setThemeMode,
        themePalette,
        setThemePalette,
        heroRef,
        skillsRef,
        projectsRef,
        contactRef,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
