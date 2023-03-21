import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { HeroAvatar, HeroTitle, SectionContainer } from "components/Organisms";
import { InnerContainer } from "./styledComponents";

const Hero: FC = () => {
  const { heroRef, skillsRef } = useContext(GeneralContext);
  const { t } = useTranslation("buttons");

  return (
    <SectionContainer
      reference={heroRef}
      component="main"
      next={{ ref: skillsRef.current as HTMLDivElement, aria: t("goToSkills") }}
    >
      <InnerContainer>
        <HeroTitle />
        <HeroAvatar />
      </InnerContainer>
    </SectionContainer>
  );
};

export default Hero;
