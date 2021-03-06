import React from "react";
import { connect } from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { IconButton } from "@material-ui/core";
import { ViewModule, ViewHeadline } from "@material-ui/icons";

import { setDisplayMode } from "store/actionCreators";
import { initialStateInterface } from "store/reducer";

interface NavigationButtonGroupInterface {
  setDisplayMode: (displayMode: string) => any;
  displayMode: string;
}

export const NavigationButtonGroup: React.FC<NavigationButtonGroupInterface> = ({
  setDisplayMode,
  displayMode,
}) => {
  return (
    <ButtonGroup color="default" aria-label="display-buttons">
      <IconButton
        disabled={displayMode === "grid"}
        value="grid"
        onClick={(e) => setDisplayMode(e.currentTarget.value)}
      >
        <ViewModule />
      </IconButton>
      <IconButton
        disabled={displayMode === "list"}
        value="list"
        onClick={(e) => setDisplayMode(e.currentTarget.value)}
      >
        <ViewHeadline />
      </IconButton>
    </ButtonGroup>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return { displayMode: state.displayMode };
};

const mapDispatchToProps = {
  setDisplayMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationButtonGroup);
