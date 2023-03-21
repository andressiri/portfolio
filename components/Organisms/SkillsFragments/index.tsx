import { FC } from "react";
import { useTranslation } from "next-i18next";
import { SkillsFragment } from "components/Molecules";
import { Container } from "./styledComponents";
import useGetSkillsArrays from "./useGetSkillsArrays";

const SkillsFragments: FC = () => {
  const { frontEndArray, backEndArray, workingToolsArray } =
    useGetSkillsArrays();
  const { t } = useTranslation("skills");

  return (
    <Container>
      <SkillsFragment
        title={t("frontendTechnologies") as string}
        skillsArray={frontEndArray}
      />
      <SkillsFragment
        title={t("backendTechnologies") as string}
        skillsArray={backEndArray}
      />
      <SkillsFragment
        title={t("workingTools") as string}
        skillsArray={workingToolsArray}
      />
    </Container>
  );
};

export default SkillsFragments;
