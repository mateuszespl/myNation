import React from "react";
import { connect } from "react-redux";
import { Fab, Chip, Avatar, Grid } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { setCurrentNationView } from "store/actionCreators";
import { initialStateInterface } from "store/reducer";

type nationView = { name: string; flag: string };

interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: nationView) => void;
  nextNationView: nationView;
  prevNationView: nationView;
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
  let currentView = next ? nextNationView : prevNationView;
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Fab
          variant="extended"
          disabled={!currentView}
          onClick={(e) =>
            handleClick(e, currentView === nextNationView && next)
          }
        >
          {next ? (
            <>
              Następny <NavigateNext />
            </>
          ) : (
            <>
              <NavigateBefore /> Poprzedni
            </>
          )}
        </Fab>
      </Grid>
      {currentView && (
        <Grid item>
          <Chip
            label={
              currentView.name.length > 10
                ? currentView.name.substring(0, 10) + "..."
                : currentView.name
            }
            avatar={
              <Avatar alt={currentView.name + " flag"} src={currentView.flag} />
            }
          />
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return {
    nextNationView: state.nextNationView,
    prevNationView: state.prevNationView,
  };
};

const mapDispatchToProps = {
  setCurrentNationView,
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
