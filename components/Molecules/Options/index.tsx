import { FC } from "react";
import { LanguageSelector, ModeSelector } from "components/Molecules";
import { Container } from "./styledComponents";
import { ContainerProps } from "typings/customSelector";

const Options: FC<ContainerProps> = ({
  isDrawer,
  isDrawerOpen,
  upwardsUnfold,
}) => {
  return (
    <Container isDrawer={isDrawer}>
      <ModeSelector
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        upwardsUnfold={upwardsUnfold}
      />
      <LanguageSelector
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        upwardsUnfold={upwardsUnfold}
      />
    </Container>
  );
};

export default Options;
