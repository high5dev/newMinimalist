import React from "react";
import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FieldInputText from "../common/FieldInputText";
import FieldButtonSelect from "../common/FieldButtonSelect";
import FieldInputSelect from "../common/FieldInputSelect";
import { ageGroupOptions } from "../utils/constants";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FormThree() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <Typography variant="h4" gutterBottom>
        <Box sx={{ textAlign: 'center', m: 1 }}>You belong to which age group?</Box>
      </Typography>
      <FieldInputSelect
        name="ageGroup"
        label="Please select one"
        options={ageGroupOptions}
        control={control}
      />
    </Stack>
  );
}

export default FormThree;
