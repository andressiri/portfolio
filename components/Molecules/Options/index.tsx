import { FC } from "react";
import { LanguageSelector, ModeSelector } from "components/Molecules";
import { Container } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const Options: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  return (
    <Container isDrawer={isDrawer}>
      <ModeSelector isDrawer={isDrawer} isDrawerOpen={isDrawerOpen} />
      <LanguageSelector isDrawer={isDrawer} isDrawerOpen={isDrawerOpen} />
    </Container>
  );
};

export default Options;
