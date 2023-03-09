import { FC } from "react";
import { BackgroundTexture } from "components/Atoms";
import {
  OuterCircleContainer,
  InnerCircleContainer,
  ImageContainer,
  StyledImage,
  InnerCircle,
  InnerCircleBackgroundColor,
} from "./styledComponents";
import AvatarImageSrc from "assets/remera_celeste-removebg-preview.png";
import textureSrc from "assets/textures/background-signal-noise-texture.png";

const Avatar: FC = () => {
  return (
    <OuterCircleContainer>
      <InnerCircleContainer>
        <ImageContainer>
          <StyledImage
            src={AvatarImageSrc}
            alt="Picture of Andrés Siri"
            className="avatarImage"
          />
        </ImageContainer>
        <InnerCircle>
          <BackgroundTexture imageSrc={textureSrc.src} zIndex={1} />
          <InnerCircleBackgroundColor />
        </InnerCircle>
      </InnerCircleContainer>
    </OuterCircleContainer>
  );
};

export default Avatar;
