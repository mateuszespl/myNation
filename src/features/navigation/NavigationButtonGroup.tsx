import React, { useEffect } from "react";
import { connect } from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { ViewModule, ViewHeadline } from "@material-ui/icons";

import { setDisplayMode } from "store/actionCreators";

interface NavigationButtonGroupInterface {
  setDisplayMode: (displayMode: string) => any;
  displayMode: string;
}

export const NavigationButtonGroup: React.FC<NavigationButtonGroupInterface> = ({
  setDisplayMode,
  displayMode,
}) => {
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    matches ? setDisplayMode("grid") : setDisplayMode("list");
  }, [matches, setDisplayMode]);
  return (
    <ButtonGroup variant="text" color="default" aria-label="display-buttons">
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

const mapStateToProps = (state: any) => {
  return { displayMode: state.displayMode };
};

const mapDispatchToProps = {
  setDisplayMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationButtonGroup);