import { CVDownloadButton } from "components/Atoms";
import { FC } from "react";
import { Container } from "./styledComponents";

const CVButtons: FC = () => {
  return (
    <Container>
      <CVDownloadButton BGType={"primaryContrastBG"} />
      <CVDownloadButton BGType={"primaryContrastBG"} ATMCV={true} />
    </Container>
  );
};

export default CVButtons;
