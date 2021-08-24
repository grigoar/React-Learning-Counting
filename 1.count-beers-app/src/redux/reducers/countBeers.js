import { INCREASE_BEER_NUMBER, DECREASE_BEER_NUMBER } from "../actionTypes";
const initialState = {
  persons: [
    {
      name: "Charlie",
      beers: 4,
    },
    {
      name: "Mac",
      beers: 6,
    },
    {
      name: "Dee",
      beers: 2,
    },
    {
      name: "Dennis",
      beers: 5,
    },
    {
      name: "Grig",
      beers: 0,
    },
  ],
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
    default:
      return state;
  }
}

export default nrBeersReducer;
