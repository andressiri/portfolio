export interface ITechnology {
  text: string;
  logo: JSX.Element;
}

export interface IProjectData {
  title: string;
  subtitle: string;
  logo: JSX.Element;
  description: string;
  gitHubLink: string;
  technologies: ITechnology[];
  desktopSrc?: StaticImageData | string;
  mobileSrc?: StaticImageData | string;
}
