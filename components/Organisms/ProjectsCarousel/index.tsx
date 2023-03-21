import { FC } from "react";
import { useTheme } from "@mui/material";
import { Carousel } from "components/Organisms";

const ProjectsCarousel: FC = () => {
  const theme = useTheme();
  return (
    <Carousel
      cardWidth={1460}
      cardHeight={600}
      color={theme.palette.secondary.contrastText}
    >
      <div style={{ width: "100%", height: "100%", background: "red" }}></div>
      <div style={{ width: "100%", height: "100%", background: "green" }}></div>
      <div style={{ width: "100%", height: "100%", background: "blue" }}></div>
    </Carousel>
  );
};

export default ProjectsCarousel;
