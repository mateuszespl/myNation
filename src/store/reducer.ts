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
  countriesNameList: [],
  fetchedDataSuccessfull: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        countriesDataList: action.countriesDataList,
        countriesNameList: action.countriesNameList,
        fetchedDataSuccessfull: true,
      };
    default:
      return {
        ...state,
      };
  }
};
