import React from "react";
import { TextField, Grid, Box, useMediaQuery } from "@material-ui/core";
import { connect } from "react-redux";
import { updateInputValue } from "../../store/actionCreators";
import AutocompleteList from "../AutocompleteList/AutocompleteList";

export interface NavigationInputInterface {
  inputValue: string;
  updateInputValue: any;
  countriesNameList: string[];
  matches: boolean;
  autocompleteList: {}[];
  home?: boolean;
}

export const NavigationInput: React.FC<NavigationInputInterface> = ({
  inputValue,
  updateInputValue,
  matches,
  autocompleteList,
  home,
}) => {
  return (
    <Grid container item alignItems="center" xs={!matches ? 4 : 6}>
      <Grid item xs>
        <Box position={!matches && "relative"}>
          <TextField
            fullWidth
            label={!matches ? "Wyszukaj państwo" : "Wyszukaj"}
            onChange={(e: any) => updateInputValue(e.target.value)}
            value={inputValue}
            size="small"
            variant="outlined"
          />
          {autocompleteList.length !== 0 && <AutocompleteList home={home} />}
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.inputValue,
    countriesNameList: state.countriesNameList,
    autocompleteList: state.autocompleteList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInputValue: (inputValue: string) =>
      dispatch(updateInputValue(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationInput);
