import { FC } from "react";
import { useTheme } from "@mui/material";
import { projectsLogosArray } from "assets/projects";
import { Carousel, ProjectsCarouselCard } from "components/Organisms";
import { Container } from "./styledComponents";
import useGetProjectsArray from "./useGetProjectsArray";

const ProjectsCarousel: FC = () => {
  const theme = useTheme();
  const { projectsArray } = useGetProjectsArray();

  return (
    <Container>
      <Carousel
        cardWidth={1460}
        cardHeight={600}
        color={theme.palette.secondary.contrastText}
        background="transparent"
        boxShadow="none"
        customBullets={{
          array: projectsLogosArray,
          container: {
            width: "100%",
            height: `${theme.custom.navButtons.height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          },
          bulletContainer: {
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            cursor: "pointer",
            "& svg": {
              width: "35px",
              height: "35px",
              color: theme.palette.primary.dark,
            },
          },
        }}
        autoTime={15000}
        initialSlide={5}
      >
        {projectsArray.map((cardData, id) => {
          return (
            <ProjectsCarouselCard
              cardData={cardData}
              key={`${cardData.title}${id}`}
            />
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ProjectsCarousel;
