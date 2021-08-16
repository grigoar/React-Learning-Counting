function eventsReducer(state = 0, action) {
  switch (action.type) {
    case "INCREASE_BEER_NUMBER":
      return state + 1;
    case "DECREASE_BEER_NUMBER":
      return state - 1;
    default:
      return state;
  }
}

export default eventsReducer;
