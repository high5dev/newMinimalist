import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Controller, useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

type Props = {
    name: string;
    control: any;
};

function FieldButtonSelect({ name, control }: Props) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <ButtonGroup variant="contained" color="primary">
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Button onClick={() => onChange('yes')} variant={value === 'yes' ? 'contained' : 'outlined'}>
                                    Yes
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={() => onChange('no')} variant={value === 'no' ? 'contained' : 'outlined'}>
                                    No
                                </Button>
                            </Grid>
                            {error ? <Typography>{error.message}</Typography> : ""}
                        </Grid>
                    </ButtonGroup>
                );
            }}
        />
    );
}

export default FieldButtonSelect;
