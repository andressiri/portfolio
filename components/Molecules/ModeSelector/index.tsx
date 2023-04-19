import { FC, useCallback, useContext, useMemo } from "react";
import { GeneralContext } from "contexts";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { CustomSelector } from "components/Atoms";
import { Container } from "./styledComponents";
import { ThemeMode } from "typings/theme";
import { ContainerProps } from "typings/customSelector";

const ModeSelector: FC<ContainerProps> = ({
  isDrawer,
  isDrawerOpen,
  upwardsUnfold,
}) => {
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
    <Container
      isDrawer={isDrawer}
      isDrawerOpen={isDrawerOpen}
      upwardsUnfold={upwardsUnfold}
    >
      <CustomSelector
        optionsKey="Mode selector"
        icons={icons}
        optionSelectAction={optionSelectAction}
        globalOptionSelected={themeModeSelected}
        upwardsUnfold={upwardsUnfold}
      />
    </Container>
  );
};

export default ModeSelector;
