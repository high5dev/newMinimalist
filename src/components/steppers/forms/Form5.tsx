import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { pregnancyOptions } from "../utils/constants";
import FieldInputSelect from "../common/FieldInputSelect";

function FormFive() {
    const { control } = useFormContext();

    return (
        <Stack gap={2}>
            <Typography variant="h4" gutterBottom>
                <Box sx={{ textAlign: 'center', m: 1 }}>Are you pregnant?</Box>
            </Typography>
            <FieldInputSelect
                name="pregnancy"
                label="Pregnancy"
                control={control}
                options={pregnancyOptions}
            />
        </Stack>
    );
}

export default FormFive;
