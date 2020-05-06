import * as actionTypes from "./actionTypes";

const initialState = {
  countriesDataList: [],
  countriesNameList: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        countriesDataList: action.countriesDataList,
        countriesNameList: action.countriesNameList,
      };
    default:
      return {
        ...state,
      };
  }
};
