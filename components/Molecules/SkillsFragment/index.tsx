import { FC } from "react";
import {
  Container,
  Title,
  SkillsContainer,
  SkillContainer,
  SkillText,
} from "./styledComponents";
import { ISkill, ISkillsFragment } from "typings/skills";

const SkillsFragment: FC<ISkillsFragment> = ({ title, array }) => {
  return (
    <Container>
      <Title variant="h3">{title}</Title>
      <SkillsContainer>
        {array.map((obj: ISkill, id: number) => {
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
