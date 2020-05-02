import * as actionTypes from "./actionTypes";

const initialState = {
  hej: "hej",
};

export const reducer = (state = initialState, action: any) => {
  switch (action) {
    case actionTypes.INIT_ACTION:
      return {
        ...state,
        hej: "cześć",
      };
    default:
      return {
        ...state,
      };
  }
};
