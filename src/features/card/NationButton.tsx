import React from "react";
import { connect } from "react-redux";
import { Fab, Chip, Avatar, Grid } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { setCurrentNationView } from "store/actionCreators";

export interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: any) => any;
  nextNationView: {
    name: string;
    flag: any;
  };
  prevNationView: {
    name: string;
    flag: any;
  };
}

export const NationButton: React.FC<NationButtonInterface> = ({
  next,
  setCurrentNationView,
  nextNationView,
  prevNationView,
}) => {
  const history = useHistory();
  const handleClick = (e: any, next?: boolean) => {
    e.preventDefault();
    setCurrentNationView(next ? nextNationView : prevNationView);
    history.push(next ? nextNationView.name : prevNationView.name);
  };
  return (
    <>
      {!next ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Fab
              variant="extended"
              disabled={!prevNationView}
              onClick={(e) => handleClick(e)}
            >
              <NavigateBefore />
              Poprzedni
            </Fab>
          </Grid>
          {prevNationView && (
            <Grid item>
              <Chip
                label={
                  prevNationView.name.length > 10
                    ? prevNationView.name.substring(0, 10) + "..."
                    : prevNationView.name
                }
                avatar={
                  <Avatar
                    alt={prevNationView.name + " flag"}
                    src={prevNationView.flag}
                  />
                }
              />
            </Grid>
          )}
        </Grid>
      ) : (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Fab
              variant="extended"
              disabled={!nextNationView}
              onClick={(e) => handleClick(e, next)}
            >
              Następny
              <NavigateNext />
            </Fab>
          </Grid>
          {nextNationView && (
            <Grid item>
              <Chip
                label={
                  nextNationView.name.length > 10
                    ? nextNationView.name.substring(0, 10) + "..."
                    : nextNationView.name
                }
                avatar={
                  <Avatar
                    alt={nextNationView.name + " flag"}
                    src={nextNationView.flag}
                  />
                }
              />
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    nextNationView: state.nextNationView,
    prevNationView: state.prevNationView,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentNationView: (nation: any) =>
      dispatch(setCurrentNationView(nation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
