import * as actionTypes from "./actionTypes";

export const fetchData = () => {
  return (dispatch: any) => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        return dispatch({
          type: actionTypes.FETCH_DATA,
          countriesDataList: [...data],
          countriesNameList: [...data.map((nation: any) => nation.name)],
          infiniteScrollNationsList: [...data.slice(0, 20)],
        });
      });
  };
};

export const updateInputValue = (inputValue: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const filteredNationsDataList =
      inputValue.length > 2
        ? countriesDataList.filter((nation: any) =>
            nation.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        : [];
    dispatch({
      type: actionTypes.INPUT_VALUE_UPDATE,
      inputValue: inputValue,
      filteredNationsDataList: filteredNationsDataList
        ? filteredNationsDataList
        : [],
    });
  };
};

export const setCurrentNationView = (currentNation: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const countriesNameList = getState().countriesNameList;
    const currentNationView = countriesDataList.find(
      (nation: any) => nation.name === currentNation
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

export const updateSelectValue = (selectValue: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const filteredNationsDataList = countriesDataList.filter((country: any) =>
      country.region.toLowerCase().includes(selectValue.toLowerCase())
    );
    dispatch({
      type: actionTypes.SELECT_VALUE_UPDATE,
      selectValue: selectValue,
      filteredNationsDataList:
        filteredNationsDataList && selectValue !== "All"
          ? filteredNationsDataList
          : [],
    });
  };
};

export const updateInfiniteScroll = () => {
  return (dispatch: any, getState: any) => {
    const infiniteScrollPage = getState().infiniteScrollPage;
    const countriesDataList = getState().countriesDataList;
    const infiniteScrollNationsList = getState().infiniteScrollNationsList;
    const nextInfiniteScrollPage = infiniteScrollPage + 1;
    const updatedInfiniteScrollNationsList = [
      ...infiniteScrollNationsList,
      ...countriesDataList.slice(
        infiniteScrollPage * 20,
        nextInfiniteScrollPage * 20
      ),
    ];
    dispatch({
      type: actionTypes.UPDATE_INFINITE_SCROLL,
      infiniteScrollNationsList: updatedInfiniteScrollNationsList,
      infiniteScrollPage: nextInfiniteScrollPage,
    });
  };
};
