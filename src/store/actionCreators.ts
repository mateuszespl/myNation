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

export const updateInputValue = (inputValue: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const filteredNationsDataList =
      inputValue !== ""
        ? countriesDataList.find((country: any) => country.name === inputValue)
        : [];
    console.log(filteredNationsDataList);
    dispatch({
      type: actionTypes.INPUT_VALUE_UPDATE,
      inputValue: inputValue,
      filteredNationsDataList: filteredNationsDataList
        ? [filteredNationsDataList]
        : [],
    });
  };
};

export const setCurrentNationView = (currentNation: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const countriesNameList = getState().countriesNameList;
    const currentNationView = countriesDataList.find(
      (country: any) => country.name === currentNation
    );
    const currentIndex = countriesNameList.indexOf(currentNation);
    const prevNationView = countriesNameList[currentIndex - 1];
    const nextNationView = countriesNameList[currentIndex + 1];

    dispatch({
      type: actionTypes.CURRENT_NATION_VIEW_UPDATE,
      currentNationView: currentNationView,
      prevNationView: prevNationView,
      nextNationView: nextNationView,
    });
  };
};

export const setDisplayMode = (displayMode: string) => ({
  type: actionTypes.DISPLAY_MODE_UPDATE,
  displayMode: displayMode,
});
