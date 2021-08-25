import { ADD_NEW_DRINKING_BUDDY, DELETE_DRINKING_BUDDY } from "../actionTypes";

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
      console.log("from delete reducer");
      console.log(action.payload);
      console.log(state.persons);

      console.log("for the splice method");
      const newState1 = { ...state };
      const newPersons = newState1.persons.slice(action.payload, 1);
      console.log(newPersons);
      let newState = {
        ...state,
        persons: state.persons.filter((person, i) => i !== action.payload),
      };
      //need more investigation with slice function-----------------------------------------------
      // persons: [
      //   ...state.persons.slice(0, action.payload),
      //   ...(state.persons.slice(action.payload) + 1),
      // ],
      // persons: [state.persons.splice(action.payload, 1)],
      // const index = newState.persons.indexOf(action.payload);
      // console.log(newState);
      // console.log(action.payload);
      // console.log(index);
      console.log(newState);

      // newState.persons.splice(action.payload, 1);
      // console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default personR;
