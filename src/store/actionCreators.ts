import * as actionTypes from "./actionTypes";

export const fetchData = () => {
  return (dispatch: any) => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_DATA,
          countriesDataList: [...data],
          countriesNameList: [...data.map((country: any) => country.name)],
        })
      );
  };
};
