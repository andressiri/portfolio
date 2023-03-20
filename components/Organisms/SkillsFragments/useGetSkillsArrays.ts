import {
  HTML5Logo,
  CSS3Logo,
  MaterialUILogo,
  BootstrapLogo,
  TailwindLogo,
  StyledComponentsLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  ReduxToolkitLogo,
  NextLogo,
  NodeJSLogo,
  ExpressLogo,
  MongoDBLogo,
  MongooseLogo,
  PostgreSQLLogo,
  MySQLLogo,
  SequelizeLogo,
  AWSLogo,
  JWTLogo,
  VisualStudioCodeLogo,
  GitLogo,
  GitHubLogo,
  PostmanLogo,
  JiraLogo,
  ESLintLogo,
  GoogleLighthouseLogo,
  PowershellLogo,
  GitBashLogo,
} from "assets/skillsLogos";
import { ISkill } from "typings/skills";
const useGetSkillsArrays = () => {
  const frontEndArray: ISkill[] = [
    { text: "HTML 5", logo: HTML5Logo },
    { text: "CSS 3", logo: CSS3Logo },
    { text: "JavaScript", logo: JavaScriptLogo },
    { text: "TypeScript", logo: TypeScriptLogo },
    { text: "React", logo: ReactLogo },
    { text: "Next", logo: NextLogo },
    { text: "Redux Toolkit", logo: ReduxToolkitLogo },
    { text: "Material UI", logo: MaterialUILogo },
    { text: "Styled Components", logo: StyledComponentsLogo },
    { text: "Bootstrap", logo: BootstrapLogo },
    { text: "Tailwind", logo: TailwindLogo },
  ];

  const backEndArray: ISkill[] = [
    { text: "NodeJS", logo: NodeJSLogo },
    { text: "Express", logo: ExpressLogo },
    { text: "MongoDB", logo: MongoDBLogo },
    { text: "Mongoose", logo: MongooseLogo },
    { text: "PostgreSQL", logo: PostgreSQLLogo },
    { text: "MySQL", logo: MySQLLogo },
    { text: "Sequelize", logo: SequelizeLogo },
    { text: "AWS", logo: AWSLogo },
    { text: "JWT", logo: JWTLogo },
    { text: "TypeScript", logo: TypeScriptLogo },
  ];

  const workingToolsArray: ISkill[] = [
    { text: "Visual Studio Code", logo: VisualStudioCodeLogo },
    { text: "Git", logo: GitLogo },
    { text: "GitHub", logo: GitHubLogo },
    { text: "Postman", logo: PostmanLogo },
    { text: "Jira", logo: JiraLogo },
    { text: "Google Lighthouse", logo: GoogleLighthouseLogo },
    { text: "ESLint", logo: ESLintLogo },
    { text: "Powershell", logo: PowershellLogo },
    { text: "Git Bash", logo: GitBashLogo },
  ];

  return {
    frontEndArray,
    backEndArray,
    workingToolsArray,
  };
};

export default useGetSkillsArrays;
