import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { Container, InnerContainer, AvatarContainer } from "./styledComponents";
import { Avatar, CVButtons, HeroCallToAction } from "components/Molecules";

const HeroAvatar: FC = () => {
  const { viewportWidth } = useContext(GeneralContext);

  return (
    <Container>
      <InnerContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        {viewportWidth <= 1080 ? <HeroCallToAction /> : <CVButtons />}
      </InnerContainer>
    </Container>
  );
};

export default HeroAvatar;
