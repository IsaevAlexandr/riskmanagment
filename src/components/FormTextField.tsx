import { TextField } from "@mui/material";

interface FormTextFieldProps {
  label: string;
  value: string | number | undefined;
  onChange(v: string): void;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      margin="dense"
      id="name"
      label={label}
      type="text"
      fullWidth
      variant="standard"
      value={value || ""}
      onChange={(v) => onChange(v.target.value || "")}
    />
  );
};
