import { FC } from "react";
import { useTranslation } from "next-i18next";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ContactButton, StyledButton, WhatsAppAnchor } from "components/Atoms";
import { HeroSocialMedia } from "components/Molecules";
import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
  Phrase,
  ActionsContainer,
} from "./styledComponents";

const HeroTitle: FC = () => {
  const { t } = useTranslation("hero");

  return (
    <Container>
      <InnerContainer>
        <Title variant="h1">{t("title")}</Title>
        <Subtitle variant="h2">{t("subtitle")}</Subtitle>
        <Phrase variant="h3">{t("phrase")}</Phrase>
        <HeroSocialMedia />
        <ActionsContainer>
          <ContactButton
            BGType="primaryOutlined"
            transparent={true}
            hover="outlined"
          />
          <WhatsAppAnchor>
            <StyledButton
              endIcon={<WhatsAppIcon />}
              tabIndex={-1}
              hover="outlined"
            >
              WhatsApp
            </StyledButton>
          </WhatsAppAnchor>
        </ActionsContainer>
      </InnerContainer>
    </Container>
  );
};

export default HeroTitle;
