import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { SectionContainer } from "components/Organisms";
import { InnerContainer, titleSpecifics } from "./styledComponents";

const Projects: FC = () => {
  const { skillsRef, projectsRef, contactRef } = useContext(GeneralContext);
  const { t } = useTranslation("buttons");

  return (
    <SectionContainer
      reference={projectsRef}
      previous={{
        ref: skillsRef.current as HTMLDivElement,
        aria: t("goToSkills"),
      }}
      title={{ text: t("projects"), specifics: titleSpecifics }}
      next={{
        ref: contactRef.current as HTMLDivElement,
        aria: t("goToContact"),
      }}
    >
      <InnerContainer></InnerContainer>
    </SectionContainer>
  );
};

export default Projects;
