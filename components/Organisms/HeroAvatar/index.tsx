import { FC } from "react";
import { Container, InnerContainer, AvatarContainer } from "./styledComponents";
import { Avatar, CVButtons } from "components/Molecules";

const HeroAvatar: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <CVButtons />
      </InnerContainer>
    </Container>
  );
};

export default HeroAvatar;
