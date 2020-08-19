import React from "react";
import { connect } from "react-redux";

import { initialStateInterface } from "store/reducer";
import { Dialog, Button, Typography, Box } from "@material-ui/core";
import { GameModalList } from "./GameModalList";
import { gameRestart } from "store/actionCreators";
import { Autorenew, Close } from "@material-ui/icons";

interface GameModalInterface {
  open: boolean;
  setOpen: (updatedStatus: boolean) => void;
  currentScore: {
    answered: boolean;
    correctAnswer: boolean;
    userAnswer?: string;
    expectedAnswer?: string;
    value?: string;
  }[];
  currentGame: {}[];
  gameRestart: () => void;
}

export const GameModal: React.FC<GameModalInterface> = ({
  open,
  setOpen,
  currentScore,
  currentGame,
  gameRestart,
}) => {
  return (
    <Dialog open={open}>
      <Box
        padding="15px"
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="space-around"
      >
        <Typography align="center" variant="h4">
          Twój wynik to:{" "}
          <strong>
            {
              currentScore.filter((score) => score.correctAnswer === true)
                .length
            }{" "}
            / 10
          </strong>
        </Typography>
        <GameModalList currentScore={currentScore} currentGame={currentGame} />
        <Button
          startIcon={<Autorenew />}
          variant="contained"
          onClick={() => {
            gameRestart();
            setOpen(false);
          }}
        >
          Zagraj jeszcze raz
        </Button>
        <Button startIcon={<Close />} onClick={() => setOpen(false)}>
          Zamknij okno
        </Button>
      </Box>
    </Dialog>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({
  currentScore: state.currentScore,
  currentGame: state.currentGame,
});

const mapDispatchToProps = { gameRestart };

export default connect(mapStateToProps, mapDispatchToProps)(GameModal);
