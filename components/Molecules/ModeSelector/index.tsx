import { FC, useCallback, useContext, useMemo } from "react";
import { GeneralContext } from "contexts";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { CustomSelector } from "components/Atoms";
import { Container } from "./styledComponents";
import { ThemeMode } from "typings/theme";

const ModeSelector: FC = () => {
  const { setThemeMode } = useContext(GeneralContext);

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
    },
    [modes, setThemeMode]
  );

  return (
    <Container>
      <CustomSelector
        optionsKey="Mode selector"
        icons={icons}
        optionSelectAction={optionSelectAction}
      />
    </Container>
  );
};

export default ModeSelector;
