export interface GeneralProps {
  optionsKey: string;
  options?: string[];
  icons?: JSX.Element[];
  images?: string[];
  optionSelectAction?: (
    optionToChange: number,
    selectedOptionText?: string,
    iconSrc?: JSX.Element | null,
    imageSrc?: string
  ) => void;
  initialSelect?: number;
  globalOptionSelected?: number;
  width?: string;
  upwardsUnfold?: boolean;
}

export interface OptionsRequired extends GeneralProps {
  options: string[];
}

export interface IconsRequired extends GeneralProps {
  icons: JSX.Element[];
}

export interface ImagesRequired extends GeneralProps {
  images: string[];
}

export interface ContainerProps {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
  upwardsUnfold?: boolean;
}
