import React from "react";
import { connect } from "react-redux";
import {
  TextField,
  MenuItem,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import { updateSelectValue } from "store/actionCreators";

export interface NavigationSelectInterface {
  selectRegionValue: string;
  selectSortValue: string;
  updateSelectValue: (selectRegionValue: any, selectSortValue: any) => any;
  region?: boolean;
  mobile?: boolean;
}

export const NavigationSelect: React.FC<NavigationSelectInterface> = ({
  selectSortValue,
  selectRegionValue,
  updateSelectValue,
  region,
  mobile,
}) => {
  return (
    <>
      {!mobile &&
        (region ? (
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
        ))}
      {mobile &&
        (region ? (
          <FormControl component="fieldset">
            <FormLabel component="legend">Wybierz region</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "All"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="All"
                  />
                }
                label="All"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Asia"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Asia"
                  />
                }
                label="Asia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Africa"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Africa"
                  />
                }
                label="Africa"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Americas"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Americas"
                  />
                }
                label="Americas"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Europe"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Europe"
                  />
                }
                label="Europe"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Oceania"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Oceania"
                  />
                }
                label="Oceania"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectRegionValue === "Polar"}
                    onChange={(e) =>
                      updateSelectValue(e.target.value, undefined)
                    }
                    value="Polar"
                  />
                }
                label="Polar"
              />
            </FormGroup>
          </FormControl>
        ) : (
          <FormControl component="fieldset">
            <FormLabel component="legend">Sortuj państwa</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectSortValue === "None"}
                    onChange={(e) =>
                      updateSelectValue(undefined, e.target.value)
                    }
                    value="None"
                  />
                }
                label="Brak"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectSortValue === "PopulationH"}
                    onChange={(e) =>
                      updateSelectValue(undefined, e.target.value)
                    }
                    value="PopulationH"
                  />
                }
                label="Największa populacja"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectSortValue === "PopulationL"}
                    onChange={(e) =>
                      updateSelectValue(undefined, e.target.value)
                    }
                    value="PopulationL"
                  />
                }
                label="Najmniejsza populacja"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectSortValue === "AreaH"}
                    onChange={(e) =>
                      updateSelectValue(undefined, e.target.value)
                    }
                    value="AreaH"
                  />
                }
                label="Największa powierzchnia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectSortValue === "AreaL"}
                    onChange={(e) =>
                      updateSelectValue(undefined, e.target.value)
                    }
                    value="AreaL"
                  />
                }
                label="Najmniejsza powierzchnia"
              />
            </FormGroup>
          </FormControl>
        ))}
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
