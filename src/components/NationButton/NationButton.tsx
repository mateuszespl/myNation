import React from "react";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { setCurrentNationView } from "./../../store/actionCreators";

export interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: string) => any;
  nextNationView: string;
  prevNationView: string;
}

export const NationButton: React.FC<NationButtonInterface> = ({
  next,
  setCurrentNationView,
  nextNationView,
  prevNationView,
}) => {
  const handleClick = (e: any, next?: boolean) => {
    e.preventDefault();
    setCurrentNationView(next ? nextNationView : prevNationView);
  };
  return (
    <Fab>
      {!next ? (
        <NavigateBefore onClick={(e) => handleClick(e)} />
      ) : (
        <NavigateNext onClick={(e) => handleClick(e, next)} />
      )}
    </Fab>
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
    setCurrentNationView: (nation: string) =>
      dispatch(setCurrentNationView(nation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
