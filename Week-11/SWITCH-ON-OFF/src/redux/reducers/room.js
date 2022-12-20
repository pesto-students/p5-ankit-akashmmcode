import { TOGGLE_LIGHT } from "./../actionTypes";

const initialState = {
  lights: "on"
};

export const room = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return { ...state, lights: action.payload };

    default:
      return { ...state };
  }
};
