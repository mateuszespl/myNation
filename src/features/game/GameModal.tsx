import React from "react";
import { connect } from "react-redux";

import { initialStateInterface } from "store/reducer";
import { Dialog, Button, Typography } from "@material-ui/core";
import { GameModalList } from "./GameModalList";

interface GameModalInterface {
  open: boolean;
  setOpen: (updatedStatus: boolean) => void;
  currentScore: {
    answered: boolean;
    correctAnswer: boolean;
    userAnswer?: string;
    expectedAnswer?: string;
  }[];
  currentGame: {}[];
}

export const GameModal: React.FC<GameModalInterface> = ({
  open,
  setOpen,
  currentScore,
  currentGame,
}) => {
  return (
    <Dialog open={open}>
      <Typography variant="h4">
        Twój wynik to:{" "}
        {currentScore.filter((score) => score.correctAnswer === true).length}/10
      </Typography>
      <GameModalList currentScore={currentScore} currentGame={currentGame} />
      <Button onClick={() => setOpen(false)}>Zamknij okno</Button>
    </Dialog>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  currentScore: state.currentScore,
  currentGame: state.currentGame,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameModal);
