import { FC, useCallback, useContext, useMemo } from "react";
import { GeneralContext } from "contexts";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { CustomSelector } from "components/Atoms";
import { Container } from "./styledComponents";
import { ThemeMode } from "typings/theme";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const ModeSelector: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  const { themeModeSelected, setThemeModeSelected, setThemeMode } =
    useContext(GeneralContext);

  const modes = useMemo(() => {
    const modesArray: ThemeMode[] = ["dark", "light"];
    return modesArray;
  }, []);

  const icons = useMemo(() => {
    const modeIconsArray = [
      <NightsStayIcon key="DarkModeIcon" />,
      <LightModeIcon key="LightModeIcon" />,
    ];
    return modeIconsArray;
  }, []);

  const optionSelectAction = useCallback(
    (optionToChange: number) => {
      setThemeMode(modes[optionToChange]);
      setThemeModeSelected(optionToChange);
    },
    [modes, setThemeMode, setThemeModeSelected]
  );

  return (
    <Container isDrawer={isDrawer} isDrawerOpen={isDrawerOpen}>
      <CustomSelector
        optionsKey="Mode selector"
        icons={icons}
        optionSelectAction={optionSelectAction}
        globalOptionSelected={themeModeSelected}
      />
    </Container>
  );
};

export default ModeSelector;
