import {
  INCREASE_BEER_NUMBER,
  DECREASE_BEER_NUMBER,
  ADD_NEW_DRINKING_BUDDY,
} from "./actionTypes";
//Action creators
export const increaseBeers = (person) => {
  //Return an action
  return {
    type: INCREASE_BEER_NUMBER,
    payload: person,
  };
};

export const decreaseBeers = (person) => {
  //Return an action
  return {
    type: DECREASE_BEER_NUMBER,
    payload: person,
  };
};

export const addPerson = (person) => {
  return {
    type: ADD_NEW_DRINKING_BUDDY,
    payload: person,
  };
};