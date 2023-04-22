import { FC } from "react";
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
import { useMediaQuery } from "utils/hooks";

const HeroTitle: FC = () => {
  const { t } = useTranslation("hero");

  return (
    <Container>
      <InnerContainer>
        <Title variant="h1">{t("title")}</Title>
        <Subtitle variant="h2">{t("subtitle")}</Subtitle>
        <Phrase variant="h3">{t("phrase")}</Phrase>
        <HeroSocialMedia />
        {useMediaQuery(1080) ? <CVButtons /> : <HeroCallToAction />}
      </InnerContainer>
    </Container>
  );
};

export default HeroTitle;
