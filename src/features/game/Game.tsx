import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Grid, Paper, Card } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { initialStateInterface } from "store/reducer";
import { GameStyles } from "./Game.styled";
import { GameStepper } from "./GameStepper";
import { GameAnswers } from "./GameAnswers";
import { gameSetup } from "store/actionCreators";
import { GameQuestion } from "./GameQuestion";

interface GameInterface {
  countriesDataList: {}[];
  gameSetup: () => void;
  currentGame: {
    question: string;
    nation: { name: string; flag: string };
    answers: any[];
    value: string;
  }[];
}

export const Game: React.FC<GameInterface> = ({
  countriesDataList,
  gameSetup,
  currentGame,
}) => {
  const [activeStep, setActiveStep] = useState(0);
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
                    activeStep={activeStep}
                    currentGame={currentGame}
                  />
                  <GameAnswers
                    activeStep={activeStep}
                    currentGame={currentGame}
                  />
                </Card>
                <GameStepper
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
              </Paper>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  countriesDataList: state.countriesDataList,
  currentGame: state.currentGame,
});

const mapDispatchToProps = { gameSetup };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
