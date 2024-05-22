import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  name: string;
  label: string;
  options: Array<{ value: string; label: string; imageSrc: string }>;
  disabled?: boolean;
  control: any;
};

const srcforimage = "./src/assets/Images/dry.jpg"

function FieldInputImageSelect({ name, label, options, disabled, control }: Props) {
    console.log(srcforimage);
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
                {/* <image className="skinType" src={''}/> */}
                <img className="skinType" src={srcforimage} alt={option.label}/>
                {/* <img className="skinType" src={option.imageSrc} alt={option.label}/> */}
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}

export default FieldInputImageSelect;
