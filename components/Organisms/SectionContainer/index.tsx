import { FC } from "react";
import { useTranslation } from "next-i18next";
import { SectionNavigateButton } from "components/Atoms";
import { Container, Title } from "./styledComponents";
import { SectionProps } from "typings/sections";

const SectionContainer: FC<SectionProps> = ({
  reference,
  component,
  previous,
  title,
  next,
  children,
}) => {
  const { i18n } = useTranslation();

  return (
    <Container ref={reference} component={component ? component : "section"}>
      {previous ? (
        <SectionNavigateButton
          sectionElement={previous.ref}
          direction={"previous"}
          ariaLabel={previous.aria}
        />
      ) : (
        <></>
      )}
      {title ? (
        <Title
          variant="h2"
          aria-label={title.text}
          titleSpecifics={title.specifics}
          isSpanish={i18n.language.includes("es")}
        >
          {title.text}
        </Title>
      ) : (
        <></>
      )}
      {children}
      {next ? (
        <SectionNavigateButton
          sectionElement={next.ref}
          ariaLabel={next.aria}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SectionContainer;
