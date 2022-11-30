import { ADD, SUB } from "../actionTypes/index";

const initialState = {
  steps: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        steps: state.steps + 1
      };
    case SUB:
      return {
        steps: 0
      };
    default:
      return { ...state };
  }
};
