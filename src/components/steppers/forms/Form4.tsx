import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { genderOptions } from "../utils/constants";
import FieldInputSelect from "../common/FieldInputSelect";

function FormFour() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <Typography variant="h4" gutterBottom>
        <Box sx={{ textAlign: 'center', m: 1 }}>What is your Biological Gender Identity?</Box>
      </Typography>
      <FieldInputSelect
        name="gender"
        label="Gender"
        control={control}
        options={genderOptions}
      />
    </Stack>
  );
}

export default FormFour;
