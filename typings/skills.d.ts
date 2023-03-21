export interface ISkill {
  text: string;
  logo: () => JSX.Element;
}

export interface ISkillsFragment {
  title: string;
  array: ISkill[];
}
