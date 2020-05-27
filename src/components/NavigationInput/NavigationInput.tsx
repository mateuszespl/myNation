import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { updateInputValue } from "../../store/actionCreators";
import { Autocomplete } from "@material-ui/lab";

export interface NavigationInputInterface {
  inputValue: string;
  updateInputValue: any;
  countriesNameList: string[];
  matches: boolean;
}

export const NavigationInput: React.FC<NavigationInputInterface> = ({
  inputValue,
  updateInputValue,
  countriesNameList,
  matches,
}) => {
  return (
    <Grid container item alignItems="center" xs={!matches ? 4 : 7}>
      <Grid item xs>
        {/* <Autocomplete
          freeSolo
          disableClearable
          fullWidth
          value={inputValue}
          options={countriesNameList.map((countryName) => countryName)}
          onInputChange={(event: any, value: any) => updateInputValue(value)}
        renderInput={(params) => ( */}
        <TextField
          // {...params}
          fullWidth
          label="Wyszukaj państwo"
          onChange={(e: any) => updateInputValue(e.target.value)}
          value={inputValue}
          size="small"
          variant="outlined"
          // InputProps={{ ...params.InputProps, type: "search" }}
        />
        {/* )}
        /> */}
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
