import React from "react";

import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import { RemoveCircle, CheckCircle } from "@material-ui/icons";
import { GameModalListStyles } from "./GameModalList.styled";

interface GameModalListInterface {
  currentScore: {
    answered: boolean;
    correctAnswer: boolean;
    userAnswer?: string;
    expectedAnswer?: string;
    value?: string;
  }[];
  currentGame: {}[];
}

export const GameModalList: React.FC<GameModalListInterface> = ({
  currentScore,
}) => {
  const classes = GameModalListStyles();
  return (
    <List>
      {currentScore.map(
        ({ correctAnswer, expectedAnswer, value, userAnswer }) => (
          <ListItem>
            <ListItemIcon>
              {correctAnswer ? (
                <CheckCircle className={classes.check} />
              ) : (
                <RemoveCircle className={classes.remove} />
              )}
            </ListItemIcon>
            {(() => {
              switch (value) {
                case "currencies": {
                  const answer1: any = userAnswer;
                  const answer2: any = expectedAnswer;
                  return (
                    <Typography>
                      Twoja odpowiedź: {answer1[0].code}
                      <br />
                      Prawidłowa odpowiedź: {answer2[0].code}
                    </Typography>
                  );
                }
                case "flag":
                  return (
                    <Typography>
                      Twoja odpowiedź:{" "}
                      <img
                        src={userAnswer}
                        className={classes.img}
                        alt={"user answer flag"}
                      />
                      <br />
                      Prawidłowa odpowiedź:{" "}
                      <img
                        src={expectedAnswer}
                        className={classes.img}
                        alt={"expected answer flag"}
                      />
                    </Typography>
                  );
                case "population":
                  return (
                    <Typography>
                      Twoja odpowiedź: {userAnswer} osób
                      <br />
                      Prawidłowa odpowiedź: {expectedAnswer} osób
                    </Typography>
                  );
                case "area":
                  return (
                    <Typography>
                      Twoja odpowiedź: {userAnswer}km²
                      <br />
                      Prawidłowa odpowiedź: {expectedAnswer}km²
                    </Typography>
                  );
                default:
                  return (
                    <Typography>
                      Twoja odpowiedź: {userAnswer}
                      <br />
                      Prawidłowa odpowiedź: {expectedAnswer}
                    </Typography>
                  );
              }
            })()}
          </ListItem>
        )
      )}
    </List>
  );
};
