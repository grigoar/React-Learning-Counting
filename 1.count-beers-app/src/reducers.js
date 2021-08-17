const initialState = {
  persons: [
    {
      name: "Charlie",
      beers: "4",
    },
    {
      name: "Mac",
      beers: "6",
    },
    {
      name: "Dee",
      beers: "2",
    },
    {
      name: "Dennis",
      beers: "5",
    },
  ],
};

function nrBeersReducer(state = { name: "Grig", beers: 0 }, action) {
  switch (action.type) {
    case "INCREASE_BEER_NUMBER":
      return {
        ...state.name,
        ...(state.beers += 1),
      };
    case "DECREASE_BEER_NUMBER": {
      state.beers -= 1;
      return state;
    }
    default:
      return state;
  }
}
// function eventsReducer(state = 0, action) {
//   switch (action.type) {
//     case "INCREASE_BEER_NUMBER":
//       return state + 1;
//     case "DECREASE_BEER_NUMBER":
//       return state - 1;
//     default:
//       return state;
//   }
// }

export default nrBeersReducer;
