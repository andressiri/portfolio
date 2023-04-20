import { FC } from "react";
import { HeroSocialMedia, NavLogo, Options } from "components/Molecules";
import {
  Container,
  LogoContainer,
  OptionsContainer,
  SocialMediaContainer,
} from "./styledComponents";

const Footer: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <NavLogo />
      </LogoContainer>
      <OptionsContainer>
        <Options upwardsUnfold={true} />
      </OptionsContainer>
      <SocialMediaContainer>
        <HeroSocialMedia isFooter={true} />
      </SocialMediaContainer>
    </Container>
  );
};

export default Footer;
