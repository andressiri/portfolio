export interface ISkill {
  text: string;
  logo: () => JSX.Element;
  link: string;
}

export interface ISkillsFragment {
  title: string;
  array: ISkill[];
}
