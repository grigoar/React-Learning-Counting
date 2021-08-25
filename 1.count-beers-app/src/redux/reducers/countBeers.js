import {
  INCREASE_BEER_NUMBER,
  DECREASE_BEER_NUMBER,
  ADD_NEW_DRINKING_BUDDY,
} from "../actionTypes";
const initialState = {
  persons: [],
};

// function nrBeersReducer(state = { name: "Grig", beers: 0 }, action) {
function nrBeersReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_BEER_NUMBER:
      return {
        ...state.name,
        ...(state.beers += 1),
      };
    case DECREASE_BEER_NUMBER: {
      state.beers -= 1;
      return state;
    }
    case ADD_NEW_DRINKING_BUDDY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default nrBeersReducer;
