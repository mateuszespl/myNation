import React from "react";
import { connect } from "react-redux";

import { initialStateInterface } from "store/reducer";
import { CardActions, Grid } from "@material-ui/core";
import GameButton from "./GameButton";

interface GameAnswersInterface {
  currentGame: {
    question: string;
    answers: any[];
    nation: any;
    value: string;
  }[];
  activeStep: number;
  setOpen: (open: boolean) => void;
  currentGameAvailableSteps: number[];
}

export const GameAnswers: React.FC<GameAnswersInterface> = ({
  currentGame,
  activeStep,
  setOpen,
  currentGameAvailableSteps,
}) => {
  const { value, answers, nation } = currentGame[activeStep];
  return (
    <CardActions>
      <Grid container alignItems="center" justify="space-around" wrap="wrap">
        {answers.map((answer: {}, id: number) => (
          <GameButton
            key={id}
            currentGameAvailableSteps={currentGameAvailableSteps}
            setOpen={setOpen}
            nation={nation}
            value={value}
            answer={answer}
            activeStep={activeStep}
          />
        ))}
      </Grid>
    </CardActions>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameAnswers);
