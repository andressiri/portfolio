import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { SectionNavigateButton } from "components/Atoms";
import { HeroAvatar, HeroTitle } from "components/Organisms";
import { Container } from "./styledComponents";

const Hero: FC = () => {
  const { heroRef, skillsRef } = useContext(GeneralContext);
  const { t } = useTranslation("buttons");

  return (
    <Container component="main" ref={heroRef}>
      <HeroTitle />
      <HeroAvatar />
      <SectionNavigateButton
        sectionElement={skillsRef.current}
        ariaLabel={t("goToSkills")}
      />
    </Container>
  );
};

export default Hero;
