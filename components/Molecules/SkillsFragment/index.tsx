import { FC, useContext } from "react";
import {
  Container,
  Title,
  SkillsContainer,
  SkillContainer,
  SkillText,
} from "./styledComponents";
import { ISkill, ISkillsFragment } from "typings/skills";
import { GeneralContext } from "contexts";

const SkillsFragment: FC<ISkillsFragment> = ({ title, array }) => {
  const { themeMode } = useContext(GeneralContext);

  return (
    <Container>
      <Title variant="h3">{title}</Title>
      <SkillsContainer>
        {array.map((obj: ISkill, id: number) => {
          return (
            <SkillContainer
              href={obj.link}
              target="_blank"
              rel="no opener noreferrer noopener"
              key={`${title} ${obj.text} ${id}`}
              isLightTheme={themeMode === "light"}
            >
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
