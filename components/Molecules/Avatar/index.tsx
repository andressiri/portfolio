import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { BackgroundTexture } from "components/Atoms";
import {
  OuterCircleContainer,
  InnerCircleContainer,
  ImageContainer,
  StyledImage,
  InnerCircle,
  InnerCircleBackgroundColor,
} from "./styledComponents";
import avatarImages from "assets/avatar";
import textureSrc from "assets/textures/background-signal-noise-texture.png";

const Avatar: FC = () => {
  const { themeMode, themePalette } = useContext(GeneralContext);

  return (
    <OuterCircleContainer>
      <InnerCircleContainer>
        <ImageContainer>
          <StyledImage
            src={
              avatarImages[
                `${themePalette}Avatar${themeMode}` as keyof typeof avatarImages
              ]
            }
            alt="Picture of Andrés Siri"
            priority
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
