import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import {
  CheckCircle,
  RadioButtonChecked,
  RadioButtonUnchecked
} from "@mui/icons-material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderStyle: "dashed",
      borderColor: theme.palette.primary.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderStyle: "solid",
      borderColor: theme.palette.primary.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: "dashed"
  }
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: theme.palette.primary.main
    }),
    "& .QontoStepIcon-completedIcon": {
      color: theme.palette.primary.main,
      zIndex: 1
    },
    "& .QontoStepIcon-circle": {
      display: "block",
      width: 22,
      height: 22,
      borderRadius: "100%",
      backgroundColor: theme.palette.grey[400],
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundClip: "content-box",
      padding: 4
    }
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircle className="QontoStepIcon-completedIcon" />
      ) : active ? (
        <RadioButtonChecked />
      ) : (
        <RadioButtonUnchecked />
      )}
    </QontoStepIconRoot>
  );
}

export default function CustomStepper({
  activeStep,
  steps
}: {
  activeStep: number;
  steps: string[];
}) {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={0 || activeStep - 1}
        connector={<QontoConnector />}
      >
        {steps.map((label,index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
