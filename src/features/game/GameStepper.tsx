import React from "react";
import { MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

interface GameStepperInterface {
  activeStep: number;
  setActiveStep: (next: boolean) => void;
  currentGameAvailableSteps: number[];
}

export const GameStepper: React.FC<GameStepperInterface> = ({
  activeStep,
  setActiveStep,
  currentGameAvailableSteps,
}) => {
  return (
    <MobileStepper
      variant="dots"
      steps={10}
      position="static"
      activeStep={currentGameAvailableSteps[activeStep]}
      nextButton={
        <Button
          size="small"
          disabled={activeStep === currentGameAvailableSteps.length - 1}
          onClick={() => setActiveStep(true)}
        >
          Następne
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={() => setActiveStep(false)}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          Poprzednie
        </Button>
      }
    />
  );
};
