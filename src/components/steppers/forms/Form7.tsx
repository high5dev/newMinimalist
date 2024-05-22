import React, { useEffect, useState } from "react";
import { Box, Input, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { skinSensibleOptions } from "../utils/constants";
import FieldInputSelect from "../common/FieldInputSelect";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function FormSeven() {
    const { control } = useFormContext();
    const [file, setFile] = useState<any>();

    function handleChange(e: any) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <Stack gap={2}>
            <Typography variant="h4" gutterBottom>
                <Box sx={{ textAlign: 'center', m: 1 }}>Is your skin sensitive?</Box>
            </Typography>
            <FieldInputSelect
                name="skinSensible"
                label="Skin Sensitivity"
                control={control}
                options={skinSensibleOptions}
            />
            <Typography variant="h4" gutterBottom>
                <Box sx={{ textAlign: 'center', m: 1 }}>Or <br /> Take a selfie</Box>
            </Typography>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload image
                <VisuallyHiddenInput onChange={handleChange} type="file" />
            </Button>
            <Box sx={{ textAlign: 'center', m: 1 }}>
                <img
                    src={file}
                    style={{
                        display: 'flex',
                        maxWidth: '300px',
                        maxHeight: '300px',
                    }}
                />
            </Box>
        </Stack>
    );
}

export default FormSeven;
