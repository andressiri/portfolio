import { FC } from "react";
import { LanguageSelector, ModeSelector } from "components/Molecules";
import { Container } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
}

const Options: FC<Props> = ({ isDrawer }) => {
  return (
    <Container isDrawer={isDrawer}>
      <ModeSelector />
      <LanguageSelector isDrawer={isDrawer} />
    </Container>
  );
};

export default Options;
