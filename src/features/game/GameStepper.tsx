import React from "react";
import { MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

interface GameStepperInterface {
  activeStep: number;
  setActiveStep: (updatedStep: number) => void;
}

export const GameStepper: React.FC<GameStepperInterface> = ({
  activeStep,
  setActiveStep,
}) => {
  return (
    <MobileStepper
      variant="progress"
      steps={10}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={() => setActiveStep(activeStep + 1)}
          disabled={activeStep === 10}
        >
          Następne
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={() => setActiveStep(activeStep - 1)}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          Poprzednie
        </Button>
      }
    />
  );
};
