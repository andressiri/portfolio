import { FC } from "react";
import { Container, InnerContainer, AvatarContainer } from "./styledComponents";
import { Avatar, CVButtons, HeroCallToAction } from "components/Molecules";
import { useMediaQuery } from "utils/hooks";

const HeroAvatar: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        {useMediaQuery(1080) ? <HeroCallToAction /> : <CVButtons />}
      </InnerContainer>
    </Container>
  );
};

export default HeroAvatar;
