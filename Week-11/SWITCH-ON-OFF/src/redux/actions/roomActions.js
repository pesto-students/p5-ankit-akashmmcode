import { TOGGLE_LIGHT } from "./../actionTypes";

export const toggleLights = (status) => ({
  type: TOGGLE_LIGHT,
  payload: status
});
