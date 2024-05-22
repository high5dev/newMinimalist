import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";

type Props = {
  steps: string[];
  activeStep: number;
  onClick?: () => void;
  onClickBack?: () => void;
  loading?: boolean;
};

function ButtonStepper({
  steps,
  activeStep,
  onClick,
  onClickBack,
  loading
}: Props) {
  const isLastStep = activeStep === steps.length;

  return (
    <Container
      maxWidth="xs"
      sx={{ position: "fixed", left: "0", bottom: "0", right: "0", p: 0 }}
    >
      <Box
        sx={{
          p: 2,
          background: "white",
          zIndex: 100,
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >
        {activeStep > 1 && (
          <Button
            type="button"
            color="primary"
            variant="outlined"
            fullWidth
            onClick={onClickBack}
          >
            Back
          </Button>
        )}
        <LoadingButton
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={onClick}
          loading={loading}
        >
          {isLastStep ? "Submit" : "Next"}
        </LoadingButton>
      </Box>
    </Container>
  );
}

export default ButtonStepper;
