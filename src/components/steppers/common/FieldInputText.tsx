import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type Props = {
  type?: "text" | "email" | "password";
  name: string;
  label: string;
  control: any;
};

function FieldInputText({ type = "text", name, label, control }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <TextField
            type={type}
            onChange={onChange}
            value={value}
            label={label}
            size="small"
            helperText={`${error?.message ? error?.message : ""}`}
            error={!!error}
            fullWidth
          />
        );
      }}
    />
  );
}

export default FieldInputText;
