import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { SectionContainer } from "components/Organisms";
import { InnerContainer, titleSpecifics } from "./styledComponents";

const Contact: FC = () => {
  const { projectsRef, contactRef } = useContext(GeneralContext);
  const { t } = useTranslation("buttons");

  return (
    <SectionContainer
      reference={contactRef}
      previous={{
        ref: projectsRef.current as HTMLDivElement,
        aria: t("goToProjects"),
      }}
      title={{ text: t("contact"), specifics: titleSpecifics }}
    >
      <InnerContainer></InnerContainer>
    </SectionContainer>
  );
};

export default Contact;
