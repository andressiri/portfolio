import { FC } from "react";
import { HeroSocialMedia, NavLogo, Options } from "components/Molecules";
import {
  Container,
  LogoContainer,
  SocialMediaContainer,
} from "./styledComponents";

const Footer: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <NavLogo />
      </LogoContainer>
      <Options upwardsUnfold={true} />
      <SocialMediaContainer>
        <HeroSocialMedia isFooter={true} />
      </SocialMediaContainer>
    </Container>
  );
};

export default Footer;
