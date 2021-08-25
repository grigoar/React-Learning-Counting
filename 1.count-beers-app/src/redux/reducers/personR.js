import {
  ADD_NEW_DRINKING_BUDDY,
  DELETE_DRINKING_BUDDY,
  INCREASE_BEER_NUMBER,
  DECREASE_BEER_NUMBER,
} from "../actionTypes";

const initialState = {
  persons: [],
};

const personR = (state = initialState, action) => {
  console.log("is this called");
  switch (action.type) {
    case ADD_NEW_DRINKING_BUDDY: {
      const newState = {
        ...state,
        persons: [...state.persons, action.payload],
      };

      return newState;
    }
    case DELETE_DRINKING_BUDDY: {
      let newState = {
        ...state,
        persons: [
          ...state.persons.slice(0, action.payload),
          ...state.persons.slice(action.payload + 1),
        ],
        // persons: state.persons.filter((person, i) => i !== action.payload),
      };
      return newState;
    }
    case INCREASE_BEER_NUMBER:
      const personIndex = state.persons.findIndex((person, index) => {
        return index === action.payload;
      });
      console.log("The person to increase the beers" + action.payload);
      console.log(personIndex);
      let newState = {
        ...state,
        persons: state.persons.map((person, index) => {
          if (action.payload === index) person.beers += 1;
          return person;
        }),
      };
      // newState.persons[personIndex].beers += 1;
      return newState;
    case DECREASE_BEER_NUMBER: {
      let newState = {
        ...state,
        persons: state.persons.map((person, index) => {
          if (action.payload === index && person.beers > 0) person.beers -= 1;
          return person;
        }),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default personR;
