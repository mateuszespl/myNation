import * as actionTypes from "./actionTypes";

const initialState = {
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
  fetchedDataSuccessfull: false,
  inputValue: "",
  currentNationView: {},
  nextNationView: "",
  prevNationView: "",
  displayMode: "list",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
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
      };
    case actionTypes.INPUT_VALUE_UPDATE:
      return {
        ...state,
        inputValue: action.inputValue,
        filteredNationsDataList: action.filteredNationsDataList,
      };
    case actionTypes.DISPLAY_MODE_UPDATE:
      return {
        ...state,
        displayMode: action.displayMode,
      };
    default:
      return {
        ...state,
      };
  }
};
