import { FC } from "react";
import { mobilePhone } from "assets/projects";
import { Container, FrameImage, InnerImage } from "./styledComponents";

interface Props {
  innerImageSrc: StaticImageData | string;
}

const MobilePhoneDisplay: FC<Props> = ({ innerImageSrc }) => {
  return (
    <Container>
      <FrameImage
        src={mobilePhone}
        alt="mobile phone frame"
        width={285}
        height={550}
      />
      <InnerImage
        src={innerImageSrc}
        alt="mobile phone image"
        width={239}
        height={510}
      />
    </Container>
  );
};

export default MobilePhoneDisplay;
