import React from "react";
import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FieldInputText from "../common/FieldInputText";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FormOne() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <Typography variant="h4" gutterBottom>
        <Box sx={{ textAlign: 'center', m: 1 }}>Hi, there, Please provide your name?</Box>        
      </Typography>
      <FieldInputText name="name" control={control} label="Name" />
    </Stack>
  );
}

export default FormOne;
