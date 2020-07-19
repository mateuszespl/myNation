import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, Grid, Paper } from "@material-ui/core";

import { initialStateInterface } from "store/reducer";
import { GameStyles } from "./Game.styled";
import { GameStepper } from "./GameStepper";

interface GameInterface {}

export const Game: React.FC<GameInterface> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = GameStyles();
  return (
    <Box marginTop="64px" component="section">
      <Grid
        className={`${classes.grid}`}
        container
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Paper>
            Witem
            <GameStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
