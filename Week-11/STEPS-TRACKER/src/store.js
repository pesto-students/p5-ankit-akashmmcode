import { createStore } from "redux";

const initialState = {
  steps: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        steps: state.steps + 1
      };
    case "RESET":
      return {
        steps: 0
      };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

export { store };
