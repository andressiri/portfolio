import { SxProps } from "@mui/system";

export interface IStyledButton {
  BGType?:
    | "primaryBG"
    | "secondaryBG"
    | "primaryContrastBG"
    | "secondaryContrastBG";
  passRef?: RefObject<HTMLButtonElement>;
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  shadow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  children?: string | JSX.Element | JSX.Element[];
}
