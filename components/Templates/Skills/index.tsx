import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { SectionNavigateButton } from "components/Atoms";
import { SkillsFragments } from "components/Organisms";
import { Container, Title } from "./styledComponents";

const Skills: FC = () => {
  const { heroRef, skillsRef } = useContext(GeneralContext);
  const { t, i18n } = useTranslation("buttons");

  return (
    <Container component="section" ref={skillsRef}>
      <SectionNavigateButton
        sectionElement={heroRef.current}
        direction={"previous"}
        ariaLabel={t("goToHero")}
      />
      <Title
        variant="h2"
        aria-label={t("skills") as string}
        isSpanish={i18n.language.includes("es")}
      >
        {t("skills")}
      </Title>
      <SkillsFragments />
      <SectionNavigateButton
        sectionElement={heroRef.current}
        ariaLabel={t("goToProjects")}
      />
    </Container>
  );
};

export default Skills;
