import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { skinTypeOptions } from "../utils/constants";
import FieldInputImageSelect from "../common/FieldInputImageSelect";

function FormSix() {
    const { control } = useFormContext();

    return (
        <Stack gap={2}>
            <Typography variant="h4" gutterBottom>
                <Box sx={{ textAlign: 'center', m: 1 }}>Your skin type?</Box>
            </Typography>
            <FieldInputImageSelect
                name="skinType"
                label="Skin Type"
                control={control}
                options={skinTypeOptions}
            />
        </Stack>
    );
}

export default FormSix;
