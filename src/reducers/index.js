import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  cards: cardsReducer,
});
