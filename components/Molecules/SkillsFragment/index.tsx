import { FC } from "react";
import {
  Container,
  Title,
  SkillsContainer,
  SkillContainer,
  SkillText,
} from "./styledComponents";
import { ISkill } from "typings/skills";

interface Props {
  title: string;
  skillsArray: ISkill[];
}

const SkillsFragment: FC<Props> = ({ title, skillsArray }) => {
  return (
    <Container>
      <Title variant="h3">{title}</Title>
      <SkillsContainer>
        {skillsArray.map((obj, id) => {
          return (
            <SkillContainer key={`${title} ${obj.text} ${id}`}>
              <obj.logo />
              <SkillText>{obj.text}</SkillText>
            </SkillContainer>
          );
        })}
      </SkillsContainer>
    </Container>
  );
};

export default SkillsFragment;
