import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
  control: any;
};

function FieldInputSelect({ name, label, options, disabled, control }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <TextField
            select
            value={value}
            defaultValue={value ? value : ""}
            onChange={onChange}
            label={label}
            size="small"
            helperText={`${error ? error.message : ""}`}
            error={!!error}
            disabled={disabled}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}

export default FieldInputSelect;
