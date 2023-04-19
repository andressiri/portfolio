import React, { FC } from "react";
import { TextFieldStyled } from "./styledComponents";

interface Props {
  error?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  multiline?: boolean;
  rows?: number;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  InputLabelProps?: object;
  helperText?: string;
  conditionalHelperText?: boolean;
}

const StyledTextField: FC<Props> = ({
  error,
  onBlur,
  value,
  name,
  label,
  variant = "outlined",
  multiline = false,
  rows = 1,
  onChange,
  InputLabelProps,
  helperText,
  conditionalHelperText = true,
}) => {
  return (
    <TextFieldStyled
      error={error}
      onBlur={onBlur}
      isError={error}
      value={value}
      name={name}
      label={label}
      variant={variant}
      multiline={multiline}
      rows={rows}
      rowsNumber={rows}
      onChange={onChange}
      InputLabelProps={InputLabelProps}
      helperText={helperText}
      conditionalHelperText={conditionalHelperText}
    />
  );
};

export default StyledTextField;
