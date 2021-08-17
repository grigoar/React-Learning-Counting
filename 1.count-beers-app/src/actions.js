//Action creators
export const increaseBeers = (person) => {
  //Return an action
  return {
    type: "INCREASE_BEER_NUMBER",
    payload: person,
  };
};

export const decreaseBeers = (person) => {
  //Return an action
  return {
    type: "DECREASE_BEER_NUMBER",
    payload: person,
  };
};
// export const increaseBeers = () => {
//   //Return an action
//   return {
//     type: "INCREASE_BEER_NUMBER",
//   };
// };

// export const decreaseBeers = () => {
//   //Return an action
//   return {
//     type: "DECREASE_BEER_NUMBER",
//   };
// };

//named exports
