export interface ITitleSpecifics {
  enTop: string;
  esTop: string;
  enLeft: string;
  esLeft: string;
  enFontSize: string;
  esFontSize: string;
  enLetterSpacing: string;
  esLetterSpacing: string;
}

export interface INavigationButton {
  ref: HTMLDivElement;
  aria: string;
}

export interface SectionProps {
  reference?: RefObject<HTMLDivElement>;
  component?: ElementType;
  previous?: INavigationButton;
  title?: {
    text: string;
    specifics: ITitleSpecifics;
  };
  next?: INavigationButton;
  children: JSX.Element | JSX.Element[];
}
