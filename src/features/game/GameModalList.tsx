import React from "react";

import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { RemoveCircle, CheckCircle } from "@material-ui/icons";

interface GameModalListInterface {
  currentScore: {
    answered: boolean;
    correctAnswer: boolean;
    userAnswer?: string;
    expectedAnswer?: string;
  }[];
  currentGame: {}[];
}

export const GameModalList: React.FC<GameModalListInterface> = ({
  currentGame,
  currentScore,
}) => {
  return (
    <List>
      {currentScore.map((score) => (
        <ListItem>
          <ListItemIcon>
            {score.correctAnswer ? <CheckCircle /> : <RemoveCircle />}
          </ListItemIcon>
          Twoja odpowiedź: {score.userAnswer}
          <br />
          Prawidłowa odpowiedź: {score.expectedAnswer}
        </ListItem>
      ))}
    </List>
  );
};
