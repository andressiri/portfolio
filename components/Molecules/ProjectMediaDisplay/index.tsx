import { FC } from "react";
import { DesktopScreenDisplay, MobilePhoneDisplay } from "components/Molecules";
import {
  Container,
  DesktopContainer,
  SmallMobileContainer,
} from "./styledComponents";

interface Props {
  desktopSrc?: StaticImageData | string;
  mobileSrc?: StaticImageData | string;
}

const ProjectMediaDisplay: FC<Props> = ({ desktopSrc, mobileSrc }) => {
  if (desktopSrc)
    return (
      <Container>
        <DesktopContainer mobileSrc={mobileSrc}>
          <DesktopScreenDisplay
            innerImageSrc={desktopSrc}
            mobileSrc={mobileSrc}
          />
          {mobileSrc ? (
            <SmallMobileContainer>
              <MobilePhoneDisplay innerImageSrc={mobileSrc} />
            </SmallMobileContainer>
          ) : (
            <></>
          )}
        </DesktopContainer>
      </Container>
    );

  if (mobileSrc)
    return (
      <Container>
        <MobilePhoneDisplay innerImageSrc={mobileSrc} />
      </Container>
    );

  return <></>;
};

export default ProjectMediaDisplay;
