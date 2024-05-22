import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import BaseStepper from "./common/BaseStepper";
import ButtonStepper from "./common/ButtonStepper";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Form5 from "./forms/Form5";
import Form6 from "./forms/Form6";
import Form7 from "./forms/Form7";

const steps = ["1", "2", "3", "4", "5", "6", "7"];

function _renderStepContent(step: number) {
  switch (step) {
    case 1:
      return <Form1 />;
    case 2:
      return <Form2 />;
    case 3:
      return <Form3 />;
    case 4:
      return <Form4 />;
    case 5:
      return <Form5 />;
    case 6:
      return <Form6 />;
    case 7:
      return <Form7 />;

    default:
      return <div>Not Found</div>;
  }
}

const validationSchema = [
  // Form 1
  Yup.object().shape({
    name: Yup.string().required().label("Name"),
  }),
  // Form 2
  Yup.object().shape({
    email: Yup.string().email().required().label("Email")
  }),
  // Form 3
  Yup.object().shape({
    ageGroup: Yup.string().required().label("ageGroup")
  }),
  // Form 4
  Yup.object().shape({
    gender: Yup.string().required().label("Gender")
  }),
  // Form 5
  Yup.object().shape({
    pregnancy: Yup.string().required().label("Pregnancy")
  }),
  // Form 6
  Yup.object().shape({
    skinType: Yup.string().required().label("Skin Type")
  }),
  // Form 7
  Yup.object().shape({
    skinSensible: Yup.string().required().label("Skin Sensitivity")
  }),
];

function FormRegistration() {
  const [activeStep, setActiveStep] = useState(1);
  const currentValidationSchema = validationSchema[activeStep - 1];
  const isLastStep = activeStep === steps.length;

  const formProps = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      ageGroup: "",
      gender: "",
      pregnancy: "",
      skinType: "",
      skinSensible: "",
    }
  });
  const { handleSubmit, control, formState } = formProps;

  const onSubmit = async (value: any) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(2000).then(() => {
      console.log("value", value);
    });
  };

  function _handleSubmit() {
    if (isLastStep) {
      return handleSubmit(onSubmit)();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  function _handleBack() {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Box p={2}>
        <FormProvider {...formProps}>
          <form onSubmit={handleSubmit(_handleSubmit)}>
            <ButtonStepper
              steps={steps}
              activeStep={activeStep}
              onClickBack={_handleBack}
              loading={formState.isSubmitting}
            />
          </form>
        </FormProvider>
      </Box>
      <Box pt={2}>
        <BaseStepper activeStep={activeStep} steps={steps} />
      </Box>

      <Divider sx={{ mt: 2 }} />

      <Box p={2}>
        <FormProvider {...formProps}>
          <form onSubmit={handleSubmit(_handleSubmit)}>
            {_renderStepContent(activeStep)}
            <ButtonStepper
              steps={steps}
              activeStep={activeStep}
              onClickBack={_handleBack}
              loading={formState.isSubmitting}
            />
          </form>
        </FormProvider>
      </Box>
      {control && <DevTool control={control} />}
    </>
  );
}

export default FormRegistration;
