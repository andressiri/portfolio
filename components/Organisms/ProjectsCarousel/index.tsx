import { FC } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "utils/hooks";
import { projectsLogosArray } from "assets/projects";
import { Carousel, ProjectsCarouselCard } from "components/Organisms";
import { Container } from "./styledComponents";
import useGetProjectsArray from "./useGetProjectsArray";

const ProjectsCarousel: FC = () => {
  const { projectsArray } = useGetProjectsArray();
  const theme = useTheme();

  return (
    <Container>
      <Carousel
        cardWidth={1460}
        cardHeight={useMediaQuery(1149) ? 900 : 600}
        color={theme.palette.secondary.contrastText}
        background="transparent"
        boxShadow="none"
        navButtons={useMediaQuery(720) ? false : true}
        customBullets={{
          array: projectsLogosArray,
          container: {
            width: "100%",
            height: `${theme.custom.navButtons.height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            "@media (max-width: 450px)": {
              gap: "20px",
            },
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
            "@media (max-width: 370px)": {
              width: "30px",
              height: "30px",
              "& svg": {
                width: "30px",
                height: "30px",
              },
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
