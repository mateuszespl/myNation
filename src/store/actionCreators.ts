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
    const autocompleteList =
      inputValue.length > 0
        ? countriesDataList
            .filter((nation: any) =>
              nation.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .slice(0, 10)
        : [];
    dispatch({
      type: actionTypes.INPUT_VALUE_UPDATE,
      inputValue: inputValue,
      autocompleteList: autocompleteList,
    });
  };
};

export const setCurrentNationView = (currentNation: string) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    let currentNationView;
    if (typeof currentNation === "string") {
      currentNationView = countriesDataList.find(
        (nation: any) => nation.name === currentNation
      );
    } else {
      currentNationView = currentNation;
    }
    const currentIndex = countriesDataList.indexOf(currentNationView);
    const prevNationView = countriesDataList[currentIndex - 1];
    const nextNationView = countriesDataList[currentIndex + 1];

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

export const updateSelectValue = (
  selectRegionValue: string | undefined,
  selectSortValue: string | undefined
) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    const selectRegionValueRedux = getState().selectRegionValue;
    const selectSortValueRedux = getState().selectSortValue;
    const filteredNationsDataListRedux = getState().filteredNationsDataList;
    const infiniteScrollNationsList = getState().infiniteScrollNationsList;
    const infiniteScrollNationsCount = getState().infiniteScrollNationsCount;
    const infiniteScrollHasMoreRedux = getState().infiniteScrollHasMore;

    if (selectRegionValue !== undefined && selectSortValue === undefined) {
      let filteredNationsDataList;
      switch (selectRegionValue) {
        case "All":
          filteredNationsDataList = [];
          break;
        default:
          filteredNationsDataList = countriesDataList.filter((country: any) =>
            country.region
              .toLowerCase()
              .includes(selectRegionValue.toLowerCase())
          );
      }
      dispatch({
        type: actionTypes.SELECT_VALUE_UPDATE,
        selectRegionValue: selectRegionValue,
        selectSortValue: selectSortValueRedux,
        filteredNationsDataList:
          filteredNationsDataList && selectRegionValue !== "All"
            ? filteredNationsDataList
            : [],
        infiniteScrollNationsList: infiniteScrollNationsList,
        infiniteScrollHasMore:
          selectRegionValue === "All" && infiniteScrollNationsList.length < 249
            ? true
            : false,
      });
    } else {
      let sortedFilteredNationsDataList;
      switch (selectSortValue) {
        case "PopulationH":
          sortedFilteredNationsDataList = [
            ...countriesDataList,
          ].sort((a: any, b: any) =>
            a.population < b.population
              ? 1
              : a.population === b.population
              ? a.population < b.population
                ? 1
                : -1
              : -1
          );
          break;
        case "PopulationL":
          sortedFilteredNationsDataList = [
            ...countriesDataList,
          ].sort((a: any, b: any) =>
            a.population > b.population
              ? 1
              : a.population === b.population
              ? a.population > b.population
                ? 1
                : -1
              : -1
          );
          break;
        case "AreaL":
          sortedFilteredNationsDataList = [
            ...countriesDataList,
          ].sort((a: any, b: any) =>
            a.area > b.area
              ? 1
              : a.area === b.area
              ? a.area > b.area
                ? 1
                : -1
              : -1
          );
          break;
        case "AreaH":
          sortedFilteredNationsDataList = [
            ...countriesDataList,
          ].sort((a: any, b: any) =>
            a.area > b.area
              ? -1
              : a.area === b.area
              ? a.area > b.area
                ? -1
                : 1
              : 1
          );
          break;
        case "None":
          sortedFilteredNationsDataList = filteredNationsDataListRedux;
          break;
      }
      dispatch({
        type: actionTypes.SELECT_VALUE_UPDATE,
        selectSortValue: selectSortValue,
        selectRegionValue: selectRegionValueRedux,
        filteredNationsDataList: filteredNationsDataListRedux,
        infiniteScrollNationsList:
          selectSortValue === "None"
            ? [...countriesDataList].slice(0, infiniteScrollNationsCount)
            : sortedFilteredNationsDataList.slice(
                0,
                infiniteScrollNationsCount
              ),
        infiniteScrollHasMore: infiniteScrollHasMoreRedux,
      });
    }
  };
};

export const updateInfiniteScroll = () => {
  return (dispatch: any, getState: any) => {
    const infiniteScrollPage = getState().infiniteScrollPage;
    const countriesDataList = getState().countriesDataList;
    const infiniteScrollNationsList = getState().infiniteScrollNationsList;
    const nextInfiniteScrollPage = infiniteScrollPage + 1;
    const infiniteScrollNationsCount = getState().infiniteScrollNationsCount;
    const updatedInfiniteScrollNationsCount = infiniteScrollNationsCount + 20;
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
      infiniteScrollNationsCount: updatedInfiniteScrollNationsCount,
      infiniteScrollHasMore: nextInfiniteScrollPage === 13 ? false : true,
    });
  };
};
