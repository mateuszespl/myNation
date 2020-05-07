import React from "react";
import { TextField, Grid, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { connect } from "react-redux";
import { updateInputValue } from "../../store/actionCreators";
import { Autocomplete } from "@material-ui/lab";

export interface NavigationInputInterface {
  inputValue: string;
  updateInputValue: any;
  countriesNameList: string[];
}

export const NavigationInput: React.FC<NavigationInputInterface> = ({
  inputValue,
  updateInputValue,
  countriesNameList,
}) => {
  return (
    <Grid container item alignItems="center" xs={4}>
      <Grid item xs>
        <Autocomplete
          freeSolo
          disableClearable
          fullWidth
          options={countriesNameList.map((countryName) => countryName)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              color="secondary"
              label="Wyszukaj państwo"
              variant="outlined"
              onChange={(e) => updateInputValue(e.target.value)}
              value={inputValue}
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="search">
          <Search />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.inputValue,
    countriesNameList: state.countriesNameList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInputValue: (inputValue: string) =>
      dispatch(updateInputValue(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationInput);
