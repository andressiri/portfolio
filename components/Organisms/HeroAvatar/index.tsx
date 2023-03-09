import { FC } from "react";
import { Container, InnerContainer } from "./styledComponents";
import { Avatar, CVButtons } from "components/Molecules";

const HeroAvatar: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <Avatar />
        <CVButtons />
      </InnerContainer>
    </Container>
  );
};

export default HeroAvatar;
