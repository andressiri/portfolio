import { SxProps } from "@mui/system";

export interface IStyledButton {
  BGType?:
    | "primaryBG"
    | "secondaryBG"
    | "primaryContrastBG"
    | "secondaryContrastBG";
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  shadow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  children?: string | JSX.Element | JSX.Element[];
}
