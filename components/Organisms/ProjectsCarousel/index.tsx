import { FC } from "react";
import { useTheme } from "@mui/material";
import { projectsLogosArray } from "assets/projects";
import { Carousel } from "components/Organisms";

const ProjectsCarousel: FC = () => {
  const theme = useTheme();
  return (
    <div style={{ width: "1600px", maxWidth: "100%", display: "flex" }}>
      <Carousel
        cardWidth={1460}
        cardHeight={580}
        color={theme.palette.secondary.contrastText}
        customBullets={{
          array: projectsLogosArray,
          container: {
            width: "100%",
            height: "70px",
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
        auto={false}
        initialSlide={4}
      >
        <div style={{ width: "100%", height: "100%", background: "red" }}></div>
        <div
          style={{ width: "100%", height: "100%", background: "orange" }}
        ></div>
        <div
          style={{ width: "100%", height: "100%", background: "green" }}
        ></div>
        <div
          style={{ width: "100%", height: "100%", background: "blue" }}
        ></div>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
