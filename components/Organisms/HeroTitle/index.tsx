import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import {
  CVButtons,
  HeroCallToAction,
  HeroSocialMedia,
} from "components/Molecules";
import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
  Phrase,
} from "./styledComponents";

const HeroTitle: FC = () => {
  const { viewportWidth } = useContext(GeneralContext);
  const { t } = useTranslation("hero");

  return (
    <Container>
      <InnerContainer>
        <Title variant="h1">{t("title")}</Title>
        <Subtitle variant="h2">{t("subtitle")}</Subtitle>
        <Phrase variant="h3">{t("phrase")}</Phrase>
        <HeroSocialMedia />
        {viewportWidth <= 1080 ? <CVButtons /> : <HeroCallToAction />}
      </InnerContainer>
    </Container>
  );
};

export default HeroTitle;
