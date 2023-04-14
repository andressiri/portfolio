import { FC } from "react";
import { ProjectMediaDisplay } from "components/Molecules";
import { ProjectDescription } from "components/Organisms";
import { IProjectData } from "typings/projects";
import { Container } from "./styledComponents";

interface Props {
  cardData: IProjectData;
}

const ProjectsCarouselCard: FC<Props> = ({ cardData }) => {
  const {
    title,
    subtitle,
    logo,
    description,
    gitHubLink,
    technologies,
    desktopSrc,
    mobileSrc,
  } = cardData;

  return (
    <Container>
      <ProjectMediaDisplay desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
      <ProjectDescription
        title={title}
        subtitle={subtitle}
        logo={logo}
        description={description}
        gitHubLink={gitHubLink}
        technologies={technologies}
      />
    </Container>
  );
};

export default ProjectsCarouselCard;
