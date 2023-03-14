import { CVDownloadButton } from "components/Atoms";
import { FC } from "react";
import { Container } from "./styledComponents";

const CVButtons: FC = () => {
  return (
    <Container>
      <CVDownloadButton
        BGType={"secondaryContrastOutlined"}
        transparent={true}
        hover={"primary"}
      />
      <CVDownloadButton
        BGType={"secondaryContrastOutlined"}
        transparent={true}
        hover={"primary"}
        ATMCV={true}
      />
    </Container>
  );
};

export default CVButtons;
