import {
  quotesMachineMobile,
  rominarDesktop,
  rominarMobile,
  spendsCheckerDesktop,
  spendsCheckerMobile,
  footstrapDesktop,
  footstrapMobile,
  treehouseDesktop,
  portfolioDesktop,
  portfolioMobile,
} from "assets/projects";
import {
  HTML5Logo,
  CSS3Logo,
  JavaScriptLogo,
  GoogleLighthouseLogo,
  NodeJSLogo,
  ExpressLogo,
  MongoDBLogo,
  MongooseLogo,
  ReactLogo,
  PostgreSQLLogo,
  SequelizeLogo,
  JWTLogo,
  ReduxToolkitLogo,
  MaterialUILogo,
  AWSLogo,
  TypeScriptLogo,
  NextLogo,
} from "assets/skillsLogos";
import { projectsLogosArray } from "assets/projects";
import { IProjectData } from "typings/projects";

const useGetProjectsArray = () => {
  const projectsArray: IProjectData[] = [
    {
      title: "RominaR",
      subtitle: "rominarSubtitle",
      logo: projectsLogosArray[0],
      description: "rominarDescription",
      gitHubLink: "https://github.com/andressiri/RominaR",
      technologies: [
        { text: "HTML5", logo: <HTML5Logo /> },
        { text: "CSS3", logo: <CSS3Logo /> },
        { text: "Vanilla Javascript", logo: <JavaScriptLogo /> },
        { text: "Google Lighthouse", logo: <GoogleLighthouseLogo /> },
      ],
      desktopSrc: rominarDesktop,
      mobileSrc: rominarMobile,
    },
    {
      title: "Quotes Machine",
      subtitle: "quotesMachineSubtitle",
      logo: projectsLogosArray[1],
      description: "quotesMachineDescription",
      gitHubLink: "https://github.com/andressiri/quotes-machine",
      technologies: [
        { text: "MongoDB", logo: <MongoDBLogo /> },
        { text: "Mongoose", logo: <MongooseLogo /> },
        { text: "Express", logo: <ExpressLogo /> },
        { text: "React", logo: <ReactLogo /> },
        { text: "NodeJs", logo: <NodeJSLogo /> },
      ],
      desktopSrc: undefined,
      mobileSrc: quotesMachineMobile,
    },
    {
      title: "Spends Checker",
      subtitle: "spendsCheckerSubtitle",
      logo: projectsLogosArray[2],
      description: "spendsCheckerDescription",
      gitHubLink: "https://github.com/andressiri/alkemy-full-stack",
      technologies: [
        { text: "NodeJS", logo: <NodeJSLogo /> },
        { text: "Express", logo: <ExpressLogo /> },
        { text: "PostgreSQL", logo: <PostgreSQLLogo /> },
        { text: "Sequelize", logo: <SequelizeLogo /> },
        { text: "JSON Web Token", logo: <JWTLogo /> },
        { text: "React", logo: <ReactLogo /> },
        { text: "Redux Toolkit", logo: <ReduxToolkitLogo /> },
        { text: "Material UI", logo: <MaterialUILogo /> },
      ],
      desktopSrc: spendsCheckerDesktop,
      mobileSrc: spendsCheckerMobile,
    },
    {
      title: "Footstrap",
      subtitle: "footstrapSubtitle",
      logo: projectsLogosArray[3],
      description: "footstrapDescription",
      gitHubLink: "https://github.com/andressiri/footstrap-ecommerce",
      technologies: [
        { text: "NodeJS", logo: <NodeJSLogo /> },
        { text: "Express", logo: <ExpressLogo /> },
        { text: "PostgreSQL", logo: <PostgreSQLLogo /> },
        { text: "Sequelize", logo: <SequelizeLogo /> },
        { text: "JSON Web Token", logo: <JWTLogo /> },
        { text: "React", logo: <ReactLogo /> },
        { text: "Redux Toolkit", logo: <ReduxToolkitLogo /> },
        { text: "Material UI", logo: <MaterialUILogo /> },
        { text: "AWS S3", logo: <AWSLogo /> },
      ],
      desktopSrc: footstrapDesktop,
      mobileSrc: footstrapMobile,
    },
    {
      title: "TreeHouse",
      subtitle: "treehouseSubtitle",
      logo: projectsLogosArray[4],
      description: "treehouseDescription",
      gitHubLink: "https://github.com/andressiri/Treehouse",
      technologies: [
        { text: "TypeScript", logo: <TypeScriptLogo /> },
        { text: "NextJS", logo: <NextLogo /> },
        { text: "NodeJS", logo: <NodeJSLogo /> },
        { text: "Express", logo: <ExpressLogo /> },
        { text: "PostgreSQL", logo: <PostgreSQLLogo /> },
        { text: "Sequelize", logo: <SequelizeLogo /> },
        { text: "JSON Web Token", logo: <JWTLogo /> },
        { text: "React", logo: <ReactLogo /> },
        { text: "Material UI", logo: <MaterialUILogo /> },
        { text: "AWS S3", logo: <AWSLogo /> },
      ],
      desktopSrc: treehouseDesktop,
      mobileSrc: undefined,
    },
    {
      title: "Portfolio",
      subtitle: "portfolioSubtitle",
      logo: projectsLogosArray[5],
      description: "portfolioDescription",
      gitHubLink: "https://github.com/andressiri/portfolio",
      technologies: [
        { text: "TypeScript", logo: <TypeScriptLogo /> },
        { text: "NextJS", logo: <NextLogo /> },
        { text: "React", logo: <ReactLogo /> },
        { text: "Material UI", logo: <MaterialUILogo /> },
      ],
      desktopSrc: portfolioDesktop,
      mobileSrc: portfolioMobile,
    },
  ];

  return {
    projectsArray,
  };
};

export default useGetProjectsArray;
