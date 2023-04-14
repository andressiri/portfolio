import { FC } from "react";
import { useTranslation } from "next-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledButton } from "components/Atoms";
import { ProjectDescriptionTechnologies } from "components/Molecules";
import {
  Container,
  InnerContainer,
  TitleContainer,
  Title,
  Subtitle,
  Description,
  StyledLink,
} from "./styledComponents";
import { ITechnology } from "typings/projects";

interface Props {
  title: string;
  subtitle: string;
  logo: JSX.Element;
  description: string;
  gitHubLink: string;
  technologies: ITechnology[];
}

const ProjectDescription: FC<Props> = ({
  title,
  subtitle,
  logo,
  gitHubLink,
  description,
  technologies,
}) => {
  const { t } = useTranslation("projects");

  return (
    <Container>
      <InnerContainer>
        <TitleContainer>
          <Title>{title}</Title>
          {logo}
        </TitleContainer>
        <Subtitle>{t(subtitle)}</Subtitle>
        <ProjectDescriptionTechnologies technologiesArray={technologies} />
        <Description>{t(description)}</Description>
        <StyledLink href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <StyledButton
            endIcon={<GitHubIcon />}
            tabIndex={-1}
            sx={{ width: "260px" }}
          >
            {t("gitHubButton") as string}
          </StyledButton>
        </StyledLink>
      </InnerContainer>
    </Container>
  );
};

export default ProjectDescription;
