import { initialState } from "./reducer";
import { createGame } from "./../features/game/helpers";
import { fetchAPI } from "./../api/helpers";
import * as actionTypes from "./actionTypes";

export const fetchData = () => {
  return (dispatch: any) => {
    fetchAPI().then((data) => {
      return dispatch({
        type: actionTypes.FETCH_DATA,
        countriesDataList: [...data],
        countriesNameList: [...data.map(({ name }: { name: string }) => name)],
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
            .filter(({ name }: { name: string }) =>
              name.toLowerCase().includes(inputValue.toLowerCase())
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

export const setCurrentNationView = (
  currentNation:
    | {
        name: string;
        flag: string;
      }
    | string
) => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    let currentNationView;
    if (typeof currentNation === "string") {
      currentNationView = countriesDataList.find(
        ({ name }: { name: string }) => name === currentNation
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
          filteredNationsDataList = countriesDataList.filter(
            ({ region }: { region: string }) =>
              region.toLowerCase().includes(selectRegionValue.toLowerCase())
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
          ].sort((a: { population: number }, b: { population: number }) =>
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
          ].sort((a: { population: number }, b: { population: number }) =>
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
          ].sort((a: { area: number }, b: { area: number }) =>
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
          ].sort((a: { area: number }, b: { area: number }) =>
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

export const gameSetup = () => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    dispatch({
      type: actionTypes.CURRENT_GAME_UPDATE,
      currentGame: createGame(countriesDataList),
    });
  };
};

export const gameScoreUpdate = (
  answer: string,
  id: number,
  correctAnswer: string
) => {
  return (dispatch: any, getState: any) => {
    const currentAnswer = {
      answered: true,
      correctAnswer: answer === correctAnswer ? true : false,
    };
    let currentScore = getState().currentScore;
    currentScore[id] = currentAnswer;
    console.log(answer, correctAnswer);
    dispatch({
      type: actionTypes.GAME_SCORE_UPDATE,
      currentScore: [...currentScore],
    });
  };
};

export const gameRestart = () => {
  return (dispatch: any, getState: any) => {
    const countriesDataList = getState().countriesDataList;
    dispatch({
      type: actionTypes.RESTART_GAME,
      currentGame: createGame(countriesDataList),
      currentScore: initialState.currentScore,
    });
  };
};
