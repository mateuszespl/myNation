import React from "react";
import { connect } from "react-redux";
import { TextField, MenuItem } from "@material-ui/core";
import { updateSelectValue } from "../../store/actionCreators";

export interface NavigationSelectInterface {
  selectRegionValue: string;
  selectSortValue: string;
  updateSelectValue: (selectRegionValue: any, selectSortValue: any) => any;
  region?: boolean;
}

export const NavigationSelect: React.FC<NavigationSelectInterface> = ({
  selectSortValue,
  selectRegionValue,
  updateSelectValue,
  region,
}) => {
  return (
    <>
      {region ? (
        <TextField
          id="select"
          label="Region"
          value={selectRegionValue}
          onChange={(e) => updateSelectValue(e.target.value, undefined)}
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
          value={selectSortValue}
          onChange={(e) => updateSelectValue(undefined, e.target.value)}
          select
          variant="outlined"
          size="small"
        >
          <MenuItem value="None">Brak</MenuItem>
          <MenuItem value="PopulationH">Największa populacja</MenuItem>
          <MenuItem value="PopulationL">Najmniejsza populacja</MenuItem>
          <MenuItem value="AreaH">Największa powierzchnia</MenuItem>
          <MenuItem value="AreaL">Najmniejsza powierzchnia</MenuItem>
        </TextField>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectRegionValue: state.selectRegionValue,
    selectSortValue: state.selectSortValue,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateSelectValue: (
      selectRegionValue: string | undefined,
      selectSortValue: string | undefined
    ) => dispatch(updateSelectValue(selectRegionValue, selectSortValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationSelect);
