import React from "react";
import { MobileStepper, Button } from "@material-ui/core";
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  Flag,
} from "@material-ui/icons";

interface GameStepperInterface {
  activeStep: number;
  setActiveStep: (updatedStep: number) => void;
  setOpen: (updatedStatus: boolean) => void;
}

export const GameStepper: React.FC<GameStepperInterface> = ({
  activeStep,
  setActiveStep,
  setOpen,
}) => {
  return (
    <MobileStepper
      variant="dots"
      steps={10}
      position="static"
      activeStep={activeStep}
      nextButton={
        activeStep < 9 ? (
          <Button size="small" onClick={() => setActiveStep(activeStep + 1)}>
            Następne
            <KeyboardArrowRight />
          </Button>
        ) : (
          <Button size="small" onClick={() => setOpen(true)}>
            Zakończ grę
            <Flag />
          </Button>
        )
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
