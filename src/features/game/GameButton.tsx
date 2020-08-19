import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import { initialStateInterface } from "store/reducer";
import { GameButtonStyles } from "./GameButton.styled";
import { gameScoreUpdate } from "store/actionCreators";

interface GameButtonInterface {
  answer: {};
  value: string;
  activeStep: number;
  gameScoreUpdate: (
    answer: string,
    id: number,
    correctAnswer: string,
    value: string
  ) => void;
  nation: any;
  currentScore: { answered: boolean; correctAnswer: boolean }[];
  setOpen: (open: boolean) => void;
  currentGameAvailableSteps: number[];
}

export const GameButton: React.FC<GameButtonInterface> = ({
  answer,
  value,
  activeStep,
  nation,
  gameScoreUpdate,
  currentScore,
  currentGameAvailableSteps,
  setOpen,
}) => {
  const classes = GameButtonStyles();
  return (
    <Button
      onClick={(e) => {
        gameScoreUpdate(
          String(e.currentTarget.value),
          activeStep,
          String(Object.values(nation)[Object.keys(nation).indexOf(value)]),
          value
        );
        currentGameAvailableSteps.length === 1 && setOpen(true);
      }}
      variant="outlined"
      value={String(
        Object.values(answer)[Object.keys(answer).indexOf(value)] &&
          String(Object.values(answer)[Object.keys(answer).indexOf(value)])
      )}
      disabled={currentScore[activeStep].answered}
      className={classes.button}
    >
      {(() => {
        switch (value) {
          case "currencies": {
            const object: any = Object.values(answer)[
              Object.keys(answer).indexOf(value)
            ];
            return object[0].code;
          }
          case "flag":
            return (
              <img
                className={classes.img}
                src={String(
                  Object.values(answer)[Object.keys(answer).indexOf(value)]
                )}
                alt={"answer flag"}
              />
            );
          case "population":
            return (
              String(
                Object.values(answer)[Object.keys(answer).indexOf(value)]
              ) + " osób"
            );
          case "area":
            return (
              String(
                Object.values(answer)[Object.keys(answer).indexOf(value)]
              ) + "km²"
            );
          default:
            return String(
              Object.values(answer)[Object.keys(answer).indexOf(value)]
            );
        }
      })()}
    </Button>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  currentScore: state.currentScore,
});

const mapDispatchToProps = { gameScoreUpdate };

export default connect(mapStateToProps, mapDispatchToProps)(GameButton);
