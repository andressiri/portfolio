import { FC } from "react";
import { HeroAvatar, HeroTitle } from "components/Organisms";
import { Container } from "./styledComponents";

const Hero: FC = () => {
  return (
    <Container component="main">
      <HeroTitle />
      <HeroAvatar />
    </Container>
  );
};

export default Hero;
