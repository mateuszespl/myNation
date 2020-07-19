import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, useMediaQuery, IconButton } from "@material-ui/core";
import { ArrowBack, Gamepad } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import NavigationInput from "./NavigationInput";
import NavigationButtonGroup from "./NavigationButtonGroup";
import NavigationSelect from "./NavigationSelect";
import Modal from "../modal/Modal";
import { NavigationStyles } from "./Navigation.styled";

export interface NavigationInterface {
  home?: boolean;
}

export const Navigation: React.FC<NavigationInterface> = ({ home }) => {
  const matches = useMediaQuery("(max-width:710px)");
  const matches1 = useMediaQuery("(max-width:500px)");
  const classes = NavigationStyles();
  const history = useHistory();
  return (
    <AppBar className={`${classes.appBar}`} color="default">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography component="h1" variant="subtitle1">
            myNation
          </Typography>
          <NavigationInput matches={matches} home={home} />
          {home ? (
            <>
              {!matches ? (
                <>
                  <NavigationSelect region />
                  <NavigationSelect />
                  <NavigationButtonGroup />
                </>
              ) : (
                <Modal matches={matches1} />
              )}
            </>
          ) : !matches1 ? (
            <>
              <Button
                onClick={() => history.push("/game")}
                startIcon={<Gamepad />}
              >
                Zagraj
              </Button>
              <Button
                onClick={() => history.push("/")}
                startIcon={<ArrowBack />}
              >
                Powrót
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={() => history.push("/game")}>
                <Gamepad />
              </IconButton>
              <IconButton onClick={() => history.push("/")}>
                <ArrowBack />
              </IconButton>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
