import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { SkillsFragment } from "components/Molecules";
import { SectionContainer } from "components/Organisms";
import { InnerContainer, titleSpecifics } from "./styledComponents";
import useGetSkillsArrays from "./useGetSkillsArrays";
import { ISkillsFragment } from "typings/skills";

const Skills: FC = () => {
  const { heroRef, skillsRef, projectsRef } = useContext(GeneralContext);
  const skillsArrays: ISkillsFragment[] = useGetSkillsArrays();
  const { t } = useTranslation("buttons");

  return (
    <SectionContainer
      reference={skillsRef}
      previous={{ ref: heroRef.current as HTMLDivElement, aria: t("goToHero") }}
      title={{ text: t("skills"), specifics: titleSpecifics }}
      next={{
        ref: projectsRef.current as HTMLDivElement,
        aria: t("goToProjects"),
      }}
    >
      <InnerContainer>
        {skillsArrays.map((obj: ISkillsFragment, id: number) => {
          return (
            <SkillsFragment
              title={obj.title}
              array={obj.array}
              key={`${obj.title}${id}`}
            />
          );
        })}
      </InnerContainer>
    </SectionContainer>
  );
};

export default Skills;
