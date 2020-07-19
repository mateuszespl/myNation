import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { initialStateInterface } from "store/reducer";
import { GameStyles } from "./Game.styled";
import { GameStepper } from "./GameStepper";
import { createGame } from "./helpers";

interface GameInterface {
  countriesDataList: {}[];
}

export const Game: React.FC<GameInterface> = ({ countriesDataList }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = GameStyles();
  const game = createGame(countriesDataList);
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
          <Grid item>
            <Paper>
              <Card>
                <CardContent>
                  <Typography align="center" variant="h4" component="h2">
                    {game[activeStep].question}
                  </Typography>
                  <CardMedia
                    className={classes.cardMedia}
                    image={game[activeStep].nation.flag}
                  />
                  <Typography align="center" variant="h5" component="h3">
                    {game[activeStep].nation.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    alignItems="center"
                    justify="space-around"
                    wrap="wrap"
                  >
                    {game[activeStep].answers.map((answer: any) => (
                      <Grid item>
                        <Button>{answer}</Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardActions>
              </Card>
              <GameStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  countriesDataList: state.countriesDataList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
