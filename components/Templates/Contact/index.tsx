import { FC, useContext } from "react";
import { ContactContextProvider } from "contexts";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import { ContactForm, SectionContainer } from "components/Organisms";
import { InnerContainer, titleSpecifics } from "./styledComponents";

const Contact: FC = () => {
  const { projectsRef, contactRef } = useContext(GeneralContext);
  const { t } = useTranslation("buttons");

  return (
    <ContactContextProvider>
      <SectionContainer
        reference={contactRef}
        previous={{
          ref: projectsRef.current as HTMLDivElement,
          aria: t("goToProjects"),
        }}
        title={{ text: t("contact"), specifics: titleSpecifics }}
      >
        <InnerContainer>
          <ContactForm />
        </InnerContainer>
      </SectionContainer>
    </ContactContextProvider>
  );
};

export default Contact;
