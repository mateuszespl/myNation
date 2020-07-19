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
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { initialStateInterface } from "store/reducer";
import { GameNavigationStyles } from "./GameNavigation.styled";

interface GameNavigationInterface {}

export const GameNavigation: React.FC<GameNavigationInterface> = () => {
  const classes = GameNavigationStyles();
  const matches = useMediaQuery("(max-width:710px)");
  const matches1 = useMediaQuery("(max-width:500px)");
  const history = useHistory();
  return (
    <AppBar className={`${classes.appBar}`} color="default">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="subtitle1">myNation</Typography>
          <Typography variant="subtitle1">Twój wynik: </Typography>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavigation);
