import { FC } from "react";
import { desktopScreen } from "assets/projects";
import { Container, FrameImage, InnerImage } from "./styledComponents";

interface Props {
  innerImageSrc: StaticImageData | string;
  mobileSrc?: StaticImageData | string;
}

const DesktopScreenDisplay: FC<Props> = ({ innerImageSrc, mobileSrc }) => {
  return (
    <Container mobileSrc={mobileSrc}>
      <FrameImage
        src={desktopScreen}
        alt="desktop screen frame"
        width={500}
        height={350}
        mobileSrc={mobileSrc}
      />
      <InnerImage
        src={innerImageSrc}
        alt="desktop screen image"
        width={468}
        height={264}
        mobileSrc={mobileSrc}
      />
    </Container>
  );
};

export default DesktopScreenDisplay;
