import * as actionTypes from "./actionTypes";

export interface initialStateInterface {
  countriesDataList: {}[];
  skeletonDataList: number[];
  filteredNationsDataList: {}[];
  countriesNameList: string[];
  infiniteScrollNationsList: {}[];
  infiniteScrollPage: number;
  infiniteScrollNationsCount: number;
  infiniteScrollHasMore: boolean;
  fetchedDataSuccessfull: boolean;
  autocompleteList: { name: string; flag: string }[];
  inputValue: string;
  currentNationView: {
    flag: string;
    capital: string;
    name: string;
    population: number;
    area: number;
    currencies: { code: string }[];
    gini: number;
    alpha3Code: string;
  };
  nextNationView: { name: string; flag: string };
  prevNationView: { name: string; flag: string };
  displayMode: string;
  selectRegionValue: string;
  selectSortValue: string;
  currentScore: {
    answered: false;
    correctAnswer: false;
    userAnswer?: string;
    expectedAnswer?: string;
  }[];
  currentGame: [];
  activeStep: number;
  currentGameAvailableSteps: number[];
}

export const initialState: initialStateInterface = {
  countriesDataList: [],
  skeletonDataList: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ],
  filteredNationsDataList: [],
  countriesNameList: [],
  infiniteScrollNationsList: [],
  infiniteScrollPage: 1,
  infiniteScrollNationsCount: 20,
  infiniteScrollHasMore: true,
  fetchedDataSuccessfull: false,
  autocompleteList: [],
  inputValue: "",
  currentNationView: {
    flag: "",
    capital: "",
    name: "",
    population: 0,
    area: 0,
    currencies: [{ code: "" }],
    gini: 0,
    alpha3Code: "",
  },
  nextNationView: { name: "", flag: "" },
  prevNationView: { name: "", flag: "" },
  displayMode: "list",
  selectRegionValue: "All",
  selectSortValue: "None",
  currentScore: [
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
    { answered: false, correctAnswer: false },
  ],
  currentGame: [],
  currentGameAvailableSteps: [],
  activeStep: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_INFINITE_SCROLL:
      return {
        ...state,
        infiniteScrollPage: action.infiniteScrollPage,
        infiniteScrollNationsList: action.infiniteScrollNationsList,
        infiniteScrollNationsCount: action.infiniteScrollNationsCount,
        infiniteScrollHasMore: action.infiniteScrollHasMore,
      };
    case actionTypes.CURRENT_NATION_VIEW_UPDATE:
      return {
        ...state,
        currentNationView: action.currentNationView,
        prevNationView: action.prevNationView,
        nextNationView: action.nextNationView,
      };
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        countriesDataList: action.countriesDataList,
        countriesNameList: action.countriesNameList,
        fetchedDataSuccessfull: true,
        infiniteScrollNationsList: action.infiniteScrollNationsList,
      };
    case actionTypes.INPUT_VALUE_UPDATE:
      return {
        ...state,
        inputValue: action.inputValue,
        autocompleteList: action.autocompleteList,
      };
    case actionTypes.DISPLAY_MODE_UPDATE:
      return {
        ...state,
        displayMode: action.displayMode,
      };
    case actionTypes.SELECT_VALUE_UPDATE:
      return {
        ...state,
        selectRegionValue: action.selectRegionValue,
        selectSortValue: action.selectSortValue,
        filteredNationsDataList: action.filteredNationsDataList,
        infiniteScrollNationsList: action.infiniteScrollNationsList,
        infiniteScrollHasMore: action.infiniteScrollHasMore,
      };
    case actionTypes.CURRENT_GAME_UPDATE:
      return {
        ...state,
        currentGame: action.currentGame,
        currentGameAvailableSteps: action.currentGameAvailableSteps,
        currentScore: action.currentScore,
      };
    case actionTypes.GAME_SCORE_UPDATE:
      return {
        ...state,
        currentScore: action.currentScore,
        currentGameAvailableSteps: action.currentGameAvailableSteps,
        activeStep: action.activeStep,
      };
    case actionTypes.ACTIVE_STEP_UPDATE:
      return {
        ...state,
        activeStep: action.activeStep,
      };
    case actionTypes.RESTART_GAME:
      return {
        ...state,
        currentScore: action.currentScore,
        currentGame: action.currentGame,
        activeStep: action.activeStep,
        currentGameAvailableSteps: action.currentGameAvailableSteps,
      };
    default:
      return {
        ...state,
      };
  }
};
