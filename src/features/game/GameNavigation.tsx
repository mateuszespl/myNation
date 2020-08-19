import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { ArrowBack, Replay } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { initialStateInterface } from "store/reducer";
import { GameNavigationStyles } from "./GameNavigation.styled";
import { gameRestart } from "store/actionCreators";

interface GameNavigationInterface {
  gameRestart: () => void;
}

export const GameNavigation: React.FC<GameNavigationInterface> = ({
  gameRestart,
}) => {
  const classes = GameNavigationStyles();
  const matches1 = useMediaQuery("(max-width:500px)");
  const history = useHistory();
  return (
    <AppBar className={`${classes.appBar}`} color="default">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="subtitle1">myNation</Typography>
          <Button onClick={() => gameRestart()} startIcon={<Replay />}>
            Zacznij od nowa
          </Button>
          {!matches1 ? (
            <Button onClick={() => history.push("/")} startIcon={<ArrowBack />}>
              Powrót
            </Button>
          ) : (
            <IconButton onClick={() => history.push("/")}>
              <ArrowBack />
            </IconButton>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: initialStateInterface) => ({});

const mapDispatchToProps = { gameRestart };

export default connect(mapStateToProps, mapDispatchToProps)(GameNavigation);
