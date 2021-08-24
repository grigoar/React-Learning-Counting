import { combineReducers } from "redux";
import countBeers from "./countBeers";
import addPersonR from "./addPersonR";

export default combineReducers({ countBeers, addPersonR });
