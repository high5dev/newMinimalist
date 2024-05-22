import React from "react";
import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FieldInputText from "../common/FieldInputText";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FormTwo() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <Typography variant="h4" gutterBottom>
        <Box sx={{ textAlign: 'center', m: 1 }}>To share the results with you please share your email Id.</Box>        
      </Typography>
      <FieldInputText
        type="email"
        name="email"
        label="Email"
        control={control}
      />
    </Stack>
  );
}

export default FormTwo;
