import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Grid, Paper, Card } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { initialStateInterface } from "store/reducer";
import { GameStyles } from "./Game.styled";
import { GameStepper } from "./GameStepper";
import { GameAnswers } from "./GameAnswers";
import { gameSetup, updateActiveStep } from "store/actionCreators";
import { GameQuestion } from "./GameQuestion";
import GameModal from "./GameModal";

interface GameInterface {
  countriesDataList: {}[];
  gameSetup: () => void;
  currentGame: {
    question: string;
    nation: { name: string; flag: string };
    answers: any[];
    value: string;
  }[];
  activeStep: number;
  updateActiveStep: (next: boolean) => void;
  currentGameAvailableSteps: number[];
}

export const Game: React.FC<GameInterface> = ({
  countriesDataList,
  gameSetup,
  currentGame,
  activeStep,
  updateActiveStep,
  currentGameAvailableSteps,
}) => {
  const [open, setOpen] = useState(false);
  const classes = GameStyles();
  useEffect(() => {
    countriesDataList.length > 0 && gameSetup();
  }, [gameSetup, countriesDataList.length]);
  return (
    <Box marginTop="64px" component="section">
      {countriesDataList.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <Grid
          className={`${classes.grid}`}
          container
          alignItems="center"
          justify="center"
        >
          {currentGame.length > 0 && (
            <Grid item>
              <Paper>
                <Card>
                  <GameQuestion
                    activeStep={currentGameAvailableSteps[activeStep]}
                    currentGame={currentGame}
                  />
                  <GameStepper
                    activeStep={activeStep}
                    setActiveStep={updateActiveStep}
                    currentGameAvailableSteps={currentGameAvailableSteps}
                  />
                  <GameAnswers
                    currentGameAvailableSteps={currentGameAvailableSteps}
                    activeStep={currentGameAvailableSteps[activeStep]}
                    currentGame={currentGame}
                    setOpen={setOpen}
                  />
                </Card>
              </Paper>
            </Grid>
          )}
          <GameModal open={open} setOpen={setOpen} />
        </Grid>
      )}
    </Box>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  countriesDataList: state.countriesDataList,
  currentGame: state.currentGame,
  activeStep: state.activeStep,
  currentGameAvailableSteps: state.currentGameAvailableSteps,
});

const mapDispatchToProps = { gameSetup, updateActiveStep };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
