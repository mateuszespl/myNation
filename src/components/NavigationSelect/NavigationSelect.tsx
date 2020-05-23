import React from "react";
import { connect } from "react-redux";
import { TextField, MenuItem } from "@material-ui/core";
import { updateSelectValue } from "../../store/actionCreators";

export interface NavigationSelectInterface {
  selectValue: string;
  updateSelectValue: (e: any) => any;
  region?: boolean;
}

export const NavigationSelect: React.FC<NavigationSelectInterface> = ({
  selectValue,
  updateSelectValue,
  region,
}) => {
  return (
    <>
      {region ? (
        <TextField
          id="select"
          label="Region"
          value={selectValue}
          onChange={(e) => updateSelectValue(e.target.value)}
          select
          variant="outlined"
          size="small"
        >
          <MenuItem value="All">Wszystkie</MenuItem>
          <MenuItem value="Asia">Azja</MenuItem>
          <MenuItem value="Africa">Afryka</MenuItem>
          <MenuItem value="Americas">Ameryka</MenuItem>
          <MenuItem value="Europe">Europa</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
          <MenuItem value="Polar">Region polarny</MenuItem>
        </TextField>
      ) : (
        <TextField
          id="select"
          label="Sortuj"
          value={selectValue}
          onChange={(e) => updateSelectValue(e.target.value)}
          select
          variant="outlined"
          size="small"
        >
          <MenuItem value="All">Brak</MenuItem>
          <MenuItem value="All">Największa populacja</MenuItem>
          <MenuItem value="Asia">Najmniejsza populacja</MenuItem>
          <MenuItem value="Africa">Największa powierzchnia</MenuItem>
          <MenuItem value="Americas">Najmniejsza powierzchnia</MenuItem>
        </TextField>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectValue: state.selectValue,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateSelectValue: (selectValue: string) =>
      dispatch(updateSelectValue(selectValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationSelect);
