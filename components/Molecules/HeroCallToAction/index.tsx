import { FC } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ContactButton, StyledButton, WhatsAppAnchor } from "components/Atoms";
import { Container } from "./styledComponents";

const HeroCallToAction: FC = () => {
  return (
    <Container>
      <ContactButton
        BGType="secondaryContrastOutlined"
        transparent={true}
        hover="primary"
      />
      <WhatsAppAnchor>
        <StyledButton endIcon={<WhatsAppIcon />} tabIndex={-1} hover="outlined">
          WhatsApp
        </StyledButton>
      </WhatsAppAnchor>
    </Container>
  );
};

export default HeroCallToAction;
