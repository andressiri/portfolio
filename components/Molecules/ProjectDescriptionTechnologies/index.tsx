import { FC } from "react";
import { useTheme } from "@mui/material";
import { ITechnology } from "typings/projects";
import { IconWithTooltip } from "components/Atoms";
import { Container } from "./styledComponents";

interface Props {
  technologiesArray: ITechnology[];
}

const ProjectDescriptionTechnologies: FC<Props> = ({ technologiesArray }) => {
  const theme = useTheme();

  return (
    <Container>
      {technologiesArray.map((technology: ITechnology, id: number) => {
        return (
          <IconWithTooltip
            icon={technology.logo}
            color={theme.palette.primary.dark}
            background="transparent"
            cursor="default"
            tabIndex={-1}
            tooltipText={technology.text}
            tooltipProps={{
              width: `${technology.text.length * 6 + 25}px`,
              color: "contrastsSecondary",
            }}
            key={`${technology.text}${id}`}
          />
        );
      })}
    </Container>
  );
};

export default ProjectDescriptionTechnologies;
