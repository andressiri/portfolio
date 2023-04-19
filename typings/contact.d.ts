export interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IInputsVisited {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

interface IFormField {
  field: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  helperText: string;
}
