import { FC } from "react";
import { LanguageSelector, ModeSelector } from "components/Molecules";
import { Container } from "./styledComponents";

const Options: FC = () => {
  return (
    <Container>
      <ModeSelector />
      <LanguageSelector />
    </Container>
  );
};

export default Options;
