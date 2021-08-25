import {
  INCREASE_BEER_NUMBER,
  DECREASE_BEER_NUMBER,
  ADD_NEW_DRINKING_BUDDY,
  DELETE_DRINKING_BUDDY,
} from "./actionTypes";
//Action creators
export const increaseBeers = (index) => {
  //Return an action
  return {
    type: INCREASE_BEER_NUMBER,
    payload: index,
  };
};

export const decreaseBeers = (index) => {
  //Return an action
  return {
    type: DECREASE_BEER_NUMBER,
    payload: index,
  };
};

export const addPerson = (person) => {
  return {
    type: ADD_NEW_DRINKING_BUDDY,
    payload: person,
  };
};

export const deletePerson = (index) => {
  console.log("from deletePerson action the index is: " + index);
  console.log(index);
  return {
    type: DELETE_DRINKING_BUDDY,
    payload: index,
  };
};
