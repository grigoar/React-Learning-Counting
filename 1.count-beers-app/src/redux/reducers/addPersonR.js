import { ADD_NEW_DRINKING_BUDDY } from "../actionTypes";

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

const addPersonR = (state = initialState, action) => {
  console.log("is this called");
  switch (action.type) {
    case ADD_NEW_DRINKING_BUDDY: {
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default addPersonR;
