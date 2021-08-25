import { combineReducers } from "redux";
import countBeers from "./countBeers";
import personR from "./personR";

export default combineReducers({ countBeers, personR });
