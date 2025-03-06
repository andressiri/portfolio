import { useTranslation } from "next-i18next";
import {
  HTML5Logo,
  TypeScriptLogo,
  JavaScriptLogo,
  ReactLogo,
  ReduxToolkitLogo,
  GraphQLLogo,
  NextLogo,
  CSS3Logo,
  MaterialUILogo,
  TailwindLogo,
  BootstrapLogo,
  StyledComponentsLogo,
  JestLogo,
  CypressLogo,
  CucumberLogo,
  StylelintLogo,
  WebpackLogo,
  StorybookLogo,
  NodeJSLogo,
  ExpressLogo,
  NestLogo,
  MongoDBLogo,
  MongooseLogo,
  PostgreSQLLogo,
  MySQLLogo,
  SequelizeLogo,
  RedisLogo,
  AWSLogo,
  JWTLogo,
  RabbitMQLogo,
  ApolloLogo,
  PHPLogo,
  GitHubLogo,
  VisualStudioCodeLogo,
  GitLogo,
  DockerLogo,
  PostmanLogo,
  JiraLogo,
  ConfluenceLogo,
  ESLintLogo,
  GoogleLighthouseLogo,
  PowershellLogo,
  GitBashLogo,
  ThinkingLogo,
} from "assets/skillsLogos";
import { ISkill, ISkillsFragment } from "typings/skills";

const useGetSkillsArrays = () => {
  const { t } = useTranslation("skills");

  const frontEndArray: ISkill[] = [
    { text: "HTML 5", logo: HTML5Logo, link: "https://html5.org/" },
    {
      text: "TypeScript",
      logo: TypeScriptLogo,
      link: "http://typescriptlang.org/",
    },
    {
      text: "JavaScript",
      logo: JavaScriptLogo,
      link: "https://www.javascript.com/",
    },
    { text: "React", logo: ReactLogo, link: "https://react.dev/" },
    {
      text: "Redux Toolkit",
      logo: ReduxToolkitLogo,
      link: "https://redux-toolkit.js.org/",
    },
    { text: "GraphQL", logo: GraphQLLogo, link: "https://graphql.org/" },
    { text: "Next", logo: NextLogo, link: "https://nextjs.org/" },
    { text: "CSS 3", logo: CSS3Logo, link: "https://css3.com/" },
    {
      text: "CSS Modules",
      logo: CSS3Logo,
      link: "https://github.com/css-modules/css-modules",
    },
    { text: "Material UI", logo: MaterialUILogo, link: "https://mui.com/" },
    { text: "Tailwind", logo: TailwindLogo, link: "https://tailwindcss.com/" },
    {
      text: "Bootstrap",
      logo: BootstrapLogo,
      link: "https://getbootstrap.com/",
    },
    {
      text: "Styled Comp.",
      logo: StyledComponentsLogo,
      link: "https://styled-components.com/",
    },
    { text: "Jest", logo: JestLogo, link: "https://jestjs.io/" },
    { text: "Cypress", logo: CypressLogo, link: "https://www.cypress.io/" },
    { text: "Cucumber", logo: CucumberLogo, link: "https://cucumber.io/" },
    { text: "Stylelint", logo: StylelintLogo, link: "https://stylelint.io/" },
    {
      text: "Module Federation",
      logo: WebpackLogo,
      link: "https://module-federation.io/",
    },
    {
      text: "Multi-zones",
      logo: NextLogo,
      link: "https://nextjs.org/docs/pages/building-your-application/deploying/multi-zones",
    },
    {
      text: "Storybook",
      logo: StorybookLogo,
      link: "https://storybook.js.org/",
    },
  ];

  const backEndArray: ISkill[] = [
    { text: "NodeJS", logo: NodeJSLogo, link: "https://nodejs.org/" },
    { text: "Express", logo: ExpressLogo, link: "https://expressjs.com/" },
    { text: "Nest", logo: NestLogo, link: "https://nestjs.com/" },
    { text: "MongoDB", logo: MongoDBLogo, link: "https://www.mongodb.com/" },
    { text: "Mongoose", logo: MongooseLogo, link: "https://mongoosejs.com/" },
    {
      text: "PostgreSQL",
      logo: PostgreSQLLogo,
      link: "https://www.postgresql.org/",
    },
    { text: "MySQL", logo: MySQLLogo, link: "https://www.mysql.com/" },
    { text: "Sequelize", logo: SequelizeLogo, link: "https://sequelize.org/" },
    { text: "Redis", logo: RedisLogo, link: "https://redis.io/" },
    { text: "AWS", logo: AWSLogo, link: "https://aws.amazon.com/" },
    { text: "JWT", logo: JWTLogo, link: "https://jwt.io/" },
    { text: "RabbitMQ", logo: RabbitMQLogo, link: "https://www.rabbitmq.com/" },
    {
      text: "TypeScript",
      logo: TypeScriptLogo,
      link: "http://typescriptlang.org/",
    },
    { text: "Jest", logo: JestLogo, link: "https://jestjs.io/" },
    { text: "GraphQL", logo: GraphQLLogo, link: "https://graphql.org/" },
    {
      text: "Apollo",
      logo: ApolloLogo,
      link: "https://www.apollographql.com/",
    },
    { text: "PHP", logo: PHPLogo, link: "https://www.php.net/" },
    {
      text: "GitHub Actions",
      logo: GitHubLogo,
      link: "https://docs.github.com/actions",
    },
  ];

  const workingToolsArray: ISkill[] = [
    {
      text: "Visual Studio Code",
      logo: VisualStudioCodeLogo,
      link: "https://code.visualstudio.com/",
    },
    { text: "Git", logo: GitLogo, link: "https://git-scm.com/" },
    { text: "GitHub", logo: GitHubLogo, link: "https://github.com/" },
    { text: "Docker", logo: DockerLogo, link: "https://www.docker.com/" },
    { text: "Postman", logo: PostmanLogo, link: "https://www.postman.com/" },
    {
      text: "Jira",
      logo: JiraLogo,
      link: "https://www.atlassian.com/software/jira",
    },
    {
      text: "Confluence",
      logo: ConfluenceLogo,
      link: "https://www.atlassian.com/software/confluence",
    },
    {
      text: "Google Lighthouse",
      logo: GoogleLighthouseLogo,
      link: "https://developer.chrome.com/docs/lighthouse/overview",
    },
    { text: "ESLint", logo: ESLintLogo, link: "https://eslint.org/" },
    {
      text: "Powershell",
      logo: PowershellLogo,
      link: "https://learn.microsoft.com/powershell/",
    },
    {
      text: "Git Bash",
      logo: GitBashLogo,
      link: "https://git-scm.com/book/en/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Bash",
    },
    {
      text: "DDD Clean Architecture",
      logo: ThinkingLogo,
      link: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
    },
    {
      text: "EDA",
      logo: ThinkingLogo,
      link: "https://en.wikipedia.org/wiki/Event-driven_architecture",
    },
  ];

  const skillsArrays: ISkillsFragment[] = [
    { title: t("frontendTechnologies") as string, array: frontEndArray },
    { title: t("backendTechnologies") as string, array: backEndArray },
    { title: t("workingTools") as string, array: workingToolsArray },
  ];

  return skillsArrays;
};

export default useGetSkillsArrays;
