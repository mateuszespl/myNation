import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";

import { GameQuestionStyles } from "./GameQuestion.styled";

interface GameQuestionInterface {
  activeStep: number;
  currentGame: { question: string; nation: { flag: string; name: string } }[];
}

export const GameQuestion: React.FC<GameQuestionInterface> = ({
  activeStep,
  currentGame,
}) => {
  const classes = GameQuestionStyles();
  return (
    <CardContent>
      {currentGame.length > 0 && (
        <>
          <Typography align="center" variant="h4" component="h2">
            {currentGame && currentGame[activeStep].question}
          </Typography>
          <CardMedia
            className={classes.cardMedia}
            image={currentGame && currentGame[activeStep].nation.flag}
          />
          <Typography align="center" variant="h5" component="h3">
            {currentGame && currentGame[activeStep].nation.name}
          </Typography>
        </>
      )}
    </CardContent>
  );
};
