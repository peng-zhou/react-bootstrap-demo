import { GET_CARDS } from "../constants/actionTypes";

const initialState = {
  cards: [],
  loading: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default cardsReducer;
